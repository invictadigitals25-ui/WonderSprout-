/* ============================================================
   WonderSprout Backend — Supabase cloud sync with offline demo mode
   Never blocks: if Supabase isn't configured/reachable, everything
   keeps working locally (the demo you already have).
   ============================================================ */

const WSBackend = (function () {
  "use strict";
  const S = window.WSState;
  let client = null;
  let loading = null;
  let lastError = "";

  /* localStorage is unavailable in sandboxed previews — degrade to memory */
  const mem = {};
  function lsGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return mem[k] || null; } }
  function lsSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { mem[k] = v; } }

  function configured() {
    return !!(window.WSConfig && WSConfig.SUPABASE_URL && WSConfig.SUPABASE_ANON_KEY);
  }
  function mode() { return client ? "cloud" : "demo"; }
  function error() { return lastError; }

  /* Lazily load supabase-js (only when a parent actually signs in) */
  function ensureClient() {
    if (client) return Promise.resolve(client);
    if (!configured()) {
      lastError = "Add your Supabase anon key to js/config.js first.";
      return Promise.reject(new Error(lastError));
    }
    if (loading) return loading;
    loading = new Promise(function (resolve, reject) {
      if (window.supabase && window.supabase.createClient) {
        client = window.supabase.createClient(WSConfig.SUPABASE_URL, WSConfig.SUPABASE_ANON_KEY);
        return resolve(client);
      }
      const s = document.createElement("script");
      s.src = WSConfig.SUPABASE_JS_CDN;
      s.onload = function () {
        try {
          client = window.supabase.createClient(WSConfig.SUPABASE_URL, WSConfig.SUPABASE_ANON_KEY);
          resolve(client);
        } catch (e) { reject(e); }
      };
      s.onerror = function () {
        loading = null;
        reject(new Error("Could not load the Supabase client (offline?). The app stays in demo mode."));
      };
      document.head.appendChild(s);
    });
    return loading;
  }

  /* ---------- Auth ---------- */
  async function signUp(email, password) {
    const c = await ensureClient();
    const { data, error: e } = await c.auth.signUp({ email, password });
    if (e) { lastError = e.message; throw e; }
    if (data.session) { lsSet("ws-account", "1"); await afterSignIn(); }
    return data;
  }

  async function signIn(email, password) {
    const c = await ensureClient();
    const { data, error: e } = await c.auth.signInWithPassword({ email, password });
    if (e) { lastError = e.message; throw e; }
    lsSet("ws-account", "1");
    await afterSignIn();
    return data;
  }

  function hasAccount() { return lsGet("ws-account") === "1"; }

  async function signOut() {
    if (!client) return;
    await client.auth.signOut();
    client = null;
    lsSet("ws-account", "");
  }

  async function sessionUser() {
    if (!client) return null;
    const { data } = await client.auth.getSession();
    return data && data.session ? data.session.user : null;
  }

  async function afterSignIn() {
    await pullState();
    await pushState();
  }

  /* ---------- Data sync ---------- */
  async function childRow() {
    const c = await ensureClient();
    const { data: user } = await c.auth.getUser();
    if (!user || !user.user) throw new Error("Not signed in.");
    const uid = user.user.id;
    /* upsert the child profile */
    const { data, error: e } = await c.from("children").upsert({
      user_id: uid,
      name: S.child.name,
      months: S.child.months,
      emoji: S.child.emoji,
      stars: S.stars,
      age_band: S.ageBand,
      updated_at: new Date().toISOString(),
    }, { onConflict: "user_id" }).select().single();
    if (e) { lastError = e.message; throw e; }
    return { uid: uid, child: data };
  }

  async function pushState() {
    if (!client) return saveLocal();
    const { uid, child } = await childRow();
    const cid = child.id;
    /* observations */
    const obs = Object.keys(S.observations).map(function (k) {
      return { user_id: uid, child_id: cid, skill_id: k, value: S.observations[k], updated_at: new Date().toISOString() };
    });
    if (obs.length) {
      const { error: e1 } = await client.from("observations").upsert(obs, { onConflict: "child_id,skill_id" });
      if (e1) { lastError = e1.message; throw e1; }
    }
    /* new journal entries only */
    const fresh = S.journal.filter(function (j) { return !j.synced; });
    if (fresh.length) {
      const rows = fresh.map(function (j) {
        return { user_id: uid, child_id: cid, emoji: j.emoji, title: j.title, body: j.text, created_at: new Date().toISOString() };
      });
      const { data: ins, error: e2 } = await client.from("journal").insert(rows).select();
      if (e2) { lastError = e2.message; throw e2; }
      ins.forEach(function (r, i) { fresh[i].synced = true; fresh[i].id = r.id; });
    }
    saveLocal();
    return true;
  }

  async function pullState() {
    if (!client) return false;
    const c = client;
    const { data: child, error: e0 } = await c.from("children").select("*").maybeSingle();
    if (e0) { lastError = e0.message; throw e0; }
    if (child) {
      S.child.name = child.name; S.child.months = child.months; S.child.emoji = child.emoji;
      S.stars = child.stars || 0; S.ageBand = child.age_band || S.ageBand;
      const { data: obs } = await c.from("observations").select("skill_id,value");
      (obs || []).forEach(function (o) { S.observations[o.skill_id] = o.value; });
      const { data: jr } = await c.from("journal").select("*").order("created_at", { ascending: false });
      if (jr && jr.length) {
        S.journal = jr.map(function (r) {
          return { id: r.id, emoji: r.emoji, title: r.title, text: r.body, when: new Date(r.created_at).toLocaleDateString(), synced: true };
        });
      }
    }
    saveLocal();
    return true;
  }

  /* ---------- Local persistence (works in every mode) ---------- */
  function saveLocal() {
    try {
      lsSet("ws_state", JSON.stringify({
        child: S.child, stars: S.stars, ageBand: S.ageBand,
        observations: S.observations, journal: S.journal,
        microDone: S.microDone, counters: S.counters,
      }));
    } catch (e) {}
  }
  function loadLocal() {
    try {
      const raw = lsGet("ws_state");
      if (!raw) return false;
      const d = JSON.parse(raw);
      if (d.child) Object.assign(S.child, d.child);
      if (typeof d.stars === "number") S.stars = d.stars;
      if (d.ageBand) S.ageBand = d.ageBand;
      if (d.observations) S.observations = d.observations;
      if (d.journal && d.journal.length) S.journal = d.journal;
      if (d.microDone) S.microDone = d.microDone;
      if (d.counters) Object.assign(S.counters, d.counters);
      return true;
    } catch (e) { return false; }
  }

  return {
    configured, mode, error, ensureClient,
    signUp, signIn, signOut, sessionUser, hasAccount,
    pushState, pullState, saveLocal, loadLocal,
  };
})();

if (typeof module !== "undefined" && module.exports) module.exports = WSBackend;
