/* ============================================================
   WonderSprout Parent — The Control Centre
   ============================================================ */

(function () {
  "use strict";
  const S = window.WSState;

  function childHead() {
    const band = WSData.stageForAge(S.child.months);
    const cloud = typeof WSBackend !== "undefined" && WSBackend.mode() === "cloud";
    const head = el("div", { class: "dash-head" }, [
      el("div", { class: "avatar", text: S.child.emoji }),
      el("div", { style: { flex: "1" } }, [
        el("h1", { style: { fontSize: "1.7rem", fontWeight: 900, letterSpacing: "-.02em" }, text: (typeof WSI18n !== "undefined" ? WSI18n.kf("pa.homeTitle", { name: S.child.name }, "{name}'s Wonder Home") : "{name}'s Wonder Home") }),
        el("div", { class: "flex-center", style: { justifyContent: "flex-start", marginTop: "6px" } }, [
          el("span", { class: "chip", text: (typeof WSI18n !== "undefined" ? WSI18n.kf("pa.monthsOld", { n: S.child.months }, "{n} months old") : "{n} months old") }),
          el("span", { class: "chip sun", text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.stage", "Stage: ") : "Stage: ") + (typeof WSI18n !== "undefined" ? String(band).replace(/m\b/g, WSI18n.k("unit.m", "m")) : band) }),
          el("span", { class: "chip sky", text: (typeof WSI18n !== "undefined" ? WSI18n.kf("pa.starsToday", { n: S.stars }, "⭐ {n} wonder stars today") : "⭐ {n} wonder stars today") }),
          el("span", { class: "chip " + (cloud ? "mint" : "ghost"), text: cloud ? (typeof WSI18n !== "undefined" ? WSI18n.k("pa.syncedCloud", "☁️ Synced to Supabase") : "☁️ Synced to Supabase") : (typeof WSI18n !== "undefined" ? WSI18n.k("pa.demoLocal", "📴 Demo mode (local)") : "📴 Demo mode (local)") }),
        ]),
      ]),
    ]);
    return head;
  }

  function friendlyError(msg) {
    const m = (msg || "").toLowerCase();
    if (m.includes("invalid api key") || m.includes("failed to fetch") || m.includes("load the supabase")) {
      return (typeof WSI18n !== "undefined" ? WSI18n.k("pa.errCloud", "Cloud not reachable. Paste a fresh anon key into js/config.js (Dashboard → Settings → API), then try again. The app keeps working in demo mode.") : "Cloud not reachable. Paste a fresh anon key into js/config.js (Dashboard → Settings → API), then try again. The app keeps working in demo mode.");
    }
    if (m.includes("relation") || m.includes("does not exist") || m.includes("42p01") || m.includes("could not find the table") || m.includes("pgrst205")) {
      return (typeof WSI18n !== "undefined" ? WSI18n.k("pa.errTables", "Database tables not found yet. Run supabase/schema.sql once in the Supabase SQL Editor, then try again.") : "Database tables not found yet. Run supabase/schema.sql once in the Supabase SQL Editor, then try again.");
    }
    if (m.includes("invalid login")) return (typeof WSI18n !== "undefined" ? WSI18n.k("pa.errLogin", "That email/password pair doesn't match. Try again or create an account.") : "That email/password pair doesn't match. Try again or create an account.");
    if (m.includes("confirm")) return (typeof WSI18n !== "undefined" ? WSI18n.k("pa.errConfirm", "Check your inbox — Supabase sent a confirmation link. (For testing you can disable 'Confirm email' under Auth → Providers → Email.)") : "Check your inbox — Supabase sent a confirmation link. (For testing you can disable 'Confirm email' under Auth → Providers → Email.)");
    return msg || (typeof WSI18n !== "undefined" ? WSI18n.k("pa.errGeneric", "Something went wrong. Demo mode is unaffected.") : "Something went wrong. Demo mode is unaffected.");
  }

  function accountCard() {
    const card = el("div", { class: "card" });
    card.appendChild(el("h3", { style: { fontWeight: 900, fontSize: "1.05rem" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.acctTitle", "☁️ WonderSprout Account") : "☁️ WonderSprout Account") }));
    card.appendChild(el("p", { style: { fontSize: ".8rem", color: "var(--ink-soft)", margin: "4px 0 10px", lineHeight: "1.5" }, text: (typeof WSI18n !== "undefined" ? WSI18n.kf("pa.signInNote", { name: S.child.name }, "Sign in to sync {name}'s journal, observations and stars to your private Supabase database. Without an account everything still works — right here on this device.") : "Sign in to sync {name}'s journal, observations and stars to your private Supabase database. Without an account everything still works — right here on this device.") }));
    const body = el("div");
    card.appendChild(body);

    function render() {
      body.innerHTML = "";
      if (WSBackend.mode() === "cloud") {
        WSBackend.sessionUser().then(function (u) {
          const email = u ? u.email : "signed in";
          body.appendChild(el("div", { class: "flex-center", style: { justifyContent: "flex-start" } }, [
            el("span", { class: "chip mint", text: (typeof WSI18n !== "undefined" ? WSI18n.kf("pa.connected", { x: email }, "✓ Connected · {x}") : "✓ Connected · {x}") }),
          ]));
          const row = el("div", { class: "flex-center", style: { justifyContent: "flex-start", marginTop: "10px" } });
          const sync = el("button", { class: "btn btn-soft", style: { padding: "10px 16px", fontSize: ".85rem" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.syncNow", "🔄 Sync now") : "🔄 Sync now") });
          sync.addEventListener("click", function () {
            WSBackend.pushState().then(function () { toast((typeof WSI18n !== "undefined" ? WSI18n.k("pa.toastSynced", "Synced to the cloud ☁️") : "Synced to the cloud ☁️")); })
              .catch(function (e) { toast(friendlyError(e.message)); });
          });
          const out = el("button", { class: "btn btn-soft", style: { padding: "10px 16px", fontSize: ".85rem" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.signOut", "Sign out") : "Sign out") });
          out.addEventListener("click", function () { WSBackend.signOut().then(function () { toast((typeof WSI18n !== "undefined" ? WSI18n.k("pa.toastSignedOut", "Signed out — back to demo mode") : "Signed out — back to demo mode")); WSRouter.render(); }); });
          row.appendChild(sync); row.appendChild(out);
          body.appendChild(row);
        });
        return;
      }
      const email = el("input", { type: "email", placeholder: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.emailPh", "Parent email") : "Parent email"), style: { width: "100%", padding: "11px 15px", borderRadius: "999px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: ".9rem", background: "var(--cream)" } });
      const pass = el("input", { type: "password", placeholder: "Password (6+ chars)", style: { width: "100%", padding: "11px 15px", borderRadius: "999px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: ".9rem", background: "var(--cream)", marginTop: "8px" } });
      const msg = el("p", { style: { fontSize: ".8rem", color: "var(--coral)", marginTop: "8px", lineHeight: "1.45" } });
      const row = el("div", { class: "flex-center", style: { justifyContent: "flex-start", marginTop: "10px" } });
      function attempt(kind) {
        msg.textContent = "";
        const fn = kind === "up" ? WSBackend.signUp : WSBackend.signIn;
        fn(email.value.trim(), pass.value).then(function (d) {
          if (kind === "up" && !d.session) { msg.style.color = "var(--sprout-deep)"; msg.textContent = (typeof WSI18n !== "undefined" ? WSI18n.k("pa.acctCreated", "Account created! Check your inbox for the confirmation link, then sign in.") : "Account created! Check your inbox for the confirmation link, then sign in."); return; }
          toast(WSI18n.k("p.welcomeSync", "Welcome! ") + S.child.name + WSI18n.k("p.welcomeSync2", "'s wonders now sync to the cloud ☁️"));
          WSAudio.play("cheer");
          WSRouter.render();
        }).catch(function (e) { msg.style.color = "var(--coral)"; msg.textContent = friendlyError(e.message); });
      }
      const inBtn = el("button", { class: "btn btn-primary", style: { padding: "10px 18px", fontSize: ".88rem" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.signInBtn", "Sign in") : "Sign in") });
      inBtn.addEventListener("click", function () { attempt("in"); });
      const upBtn = el("button", { class: "btn btn-soft", style: { padding: "10px 18px", fontSize: ".88rem" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.createAcct", "Create account") : "Create account") });
      upBtn.addEventListener("click", function () { attempt("up"); });
      row.appendChild(inBtn); row.appendChild(upBtn);
      body.appendChild(email); body.appendChild(pass); body.appendChild(row); body.appendChild(msg);
      if (!WSBackend.configured()) {
        msg.style.color = "#8A6100";
        msg.textContent = (typeof WSI18n !== "undefined" ? WSI18n.k("pa.demoNoKey", "Demo mode: no Supabase key configured yet (js/config.js). Everything works locally.") : "Demo mode: no Supabase key configured yet (js/config.js). Everything works locally.");
      }
    }
    render();
    return card;
  }

  function wonderCard() {
    const w = WSData.wonderForToday();
    /* day index, computed the same way data.js does it, so copy can be keyed by day */
    const WD_I = (typeof WSData !== "undefined" && WSData.WONDER_DAYS && WSData.WONDER_DAYS.length)
      ? Math.floor(Date.now() / 86400000) % WSData.WONDER_DAYS.length : 0;
    const card = el("div", { class: "card wonder-card" });
    card.appendChild(el("span", { class: "chip", style: { background: "rgba(255,255,255,.16)", color: "#fff" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.todayWonder", "🌅 TODAY'S WONDER") : "🌅 TODAY'S WONDER") }));
    card.appendChild(el("div", { class: "wq", text: (typeof WSI18n !== "undefined" ? WSI18n.k("wd.q" + WD_I, w.q) : w.q) }));
    card.appendChild(el("div", { class: "wsub", text: (typeof WSI18n !== "undefined" ? WSI18n.k("wd.sub" + WD_I, w.sub) : w.sub) }));
    const list = el("div", { class: "micro-list" });
    w.micros.forEach(function (m, i) {
      const row = el("div", { class: "micro" + (S.microDone[i] ? " done" : "") });
      row.appendChild(el("span", { class: "m-emoji", text: m.emoji }));
      /* micro labels translate by index; the data keeps English for counter logic */
      const MICRO_ORDER = ["Look", "Explore", "Talk", "Move", "Real world", "Story"];
      const mLabel = (typeof WSI18n !== "undefined") ? WSI18n.k("micro" + MICRO_ORDER.indexOf(m.label), m.label) : m.label;
      row.appendChild(el("span", { class: "m-label", text: mLabel }));
      row.appendChild(el("span", { class: "m-text", text: (typeof WSI18n !== "undefined" ? WSI18n.k("wd.m" + WD_I + "." + i, m.text) : m.text) }));
      const done = el("button", { class: "m-done", text: "✓" });
      done.addEventListener("click", function () {
        S.microDone[i] = !S.microDone[i];
        row.classList.toggle("done", S.microDone[i]);
        if (S.microDone[i]) {
          WSAudio.play("sparkle");
          S.counters.activities++;
          if (m.label === "Real world") S.counters.realworld++;
          updateStats();
          persist();
          toast((typeof WSI18n !== "undefined" ? WSI18n.kf("pa.logged", { x: mLabel }, "Logged! {x} ✓") : "Logged! {x} ✓"));
        } else { updateStats(); persist(); }
      });
      row.appendChild(done);
      list.appendChild(row);
    });
    card.appendChild(list);
    card.appendChild(el("p", { style: { fontSize: ".75rem", opacity: ".7", marginTop: "14px", lineHeight: "1.5" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.microNote", "Micro-experiences run 30 seconds to 3 minutes. Do them in any order — or skip the screen ones entirely.") : "Micro-experiences run 30 seconds to 3 minutes. Do them in any order — or skip the screen ones entirely.") }));
    return card;
  }

  let statEls = {};
  function statCards() {
    const wrap = el("div", { class: "stat-row" });
    statEls = {};
    [["activities", "Activities"], ["stories", "Stories"], ["songs", "Songs"], ["realworld", "Real world"]].forEach(function (rawP) {
      const p = [rawP[0], (typeof WSI18n !== "undefined") ? WSI18n.k({activities:"pa.tabActivities",stories:"pa.tabStories",songs:"pa.tabSongs",realworld:"pa.tabRealworld"}[rawP[0]], rawP[1]) : rawP[1]];
      const c = el("div", { class: "card stat-card" });
      const num = el("div", { class: "s-num", text: S.counters[p[0]] });
      c.appendChild(num);
      c.appendChild(el("div", { class: "s-label", text: p[1] + " this week" }));
      wrap.appendChild(c);
      statEls[p[0]] = num;
    });
    return wrap;
  }
  function updateStats() {
    Object.keys(statEls).forEach(function (k) { statEls[k].textContent = S.counters[k]; });
  }

  function weekChart() {
    const card = el("div", { class: "card" });
    card.appendChild(el("h3", { style: { fontWeight: 900, fontSize: "1.05rem" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.thisWeek", "📊 This week") : "📊 This week") }));
    card.appendChild(el("p", { style: { fontSize: ".8rem", color: "var(--ink-soft)", marginTop: "4px" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.minutesNote", "Minutes of wonder (screen + real world). Less is more — the goal is curiosity, not minutes.") : "Minutes of wonder (screen + real world). Less is more — the goal is curiosity, not minutes.") }));
    const chart = el("div", { class: "bar-chart" });
    const days = ["M", "T", "W", "T", "F", "S", "S"];
    const max = Math.max.apply(null, S.weekMinutes.concat([1]));
    S.weekMinutes.forEach(function (v, i) {
      const col = el("div", { class: "bar-col" });
      const bar = el("div", { class: "bar" + (i === new Date().getDay() - 1 || (new Date().getDay() === 0 && i === 6) ? " today" : ""), title: v + " min" });
      bar.style.height = "0%";
      col.appendChild(bar);
      col.appendChild(el("div", { class: "bar-label", text: days[i] }));
      chart.appendChild(col);
      setTimeout(function () { bar.style.height = Math.max(4, (v / max) * 100) + "%"; }, 80 + i * 70);
    });
    card.appendChild(chart);
    card.appendChild(el("div", { class: "flex-center", style: { marginTop: "12px" } }, [
      el("span", { class: "chip mint", text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.topDomain", "Top domain: Science & Nature") : "Top domain: Science & Nature") }),
      el("span", { class: "chip sun", text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.suggestedFocus", "Suggested focus: Patterns") : "Suggested focus: Patterns") }),
    ]));
    return card;
  }

  function stageTrack() {
    const card = el("div", { class: "card" });
    card.appendChild(el("h3", { style: { fontWeight: 900, fontSize: "1.05rem" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.journey", "🧭 Developmental journey") : "🧭 Developmental journey") }));
    card.appendChild(el("p", { style: { fontSize: ".8rem", color: "var(--ink-soft)", marginTop: "4px" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.progressNote", "WonderSprout's 0–36 month progression — a map, never a race.") : "WonderSprout's 0–36 month progression — a map, never a race.") }));
    const track = el("div", { class: "stage-track" });
    const idx = WSData.progressionIndex(S.child.months);
    const ICONS = ["👀", "✨", "✋", "🧭", "🔗", "🔮", "🧪", "💡"];
    WSData.PROGRESSION.forEach(function (p, i) {
      const node = el("div", { class: "stage-node" + (i < idx ? " done" : i === idx ? " now" : "") });
      node.appendChild(el("div", { class: "sn-dot", text: i < idx ? "✓" : ICONS[i] }));
      node.appendChild(el("div", { class: "sn-label", text: (typeof WSI18n !== "undefined" ? WSI18n.k("prog" + i + ".l", p.label) : p.label) + " · " + p.at + "m" }));
      track.appendChild(node);
    });
    card.appendChild(track);
    return card;
  }

  function observations() {
    const card = el("div", { class: "card" });
    card.appendChild(el("h3", { style: { fontWeight: 900, fontSize: "1.05rem" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.observations", "👀 Observations") : "👀 Observations") }));
    card.appendChild(el("p", { style: { fontSize: ".8rem", color: "var(--ink-soft)", margin: "4px 0 8px" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.notTest", "Not a test — just noticing. WonderSprout never diagnoses or ranks. If anything worries you, talk to your paediatrician.") : "Not a test — just noticing. WonderSprout never diagnoses or ranks. If anything worries you, talk to your paediatrician.") }));
    const relevant = WSData.OBSERVATION_SKILLS.filter(function (sk) {
      const lo = parseInt(sk.band.split("–")[0], 10);
      return S.child.months >= lo - 4;
    }).slice(0, 6);
    relevant.forEach(function (sk) {
      const row = el("div", { class: "obs-row" });
      const skI = WSData.OBSERVATION_SKILLS.indexOf(sk);
      const skSkill = (typeof WSI18n !== "undefined") ? WSI18n.k("obs" + skI + ".s", sk.skill) : sk.skill;
      const skDomain = (typeof WSI18n !== "undefined") ? WSI18n.k("obs" + skI + ".d", sk.domain) : sk.domain;
      const skTyp = (typeof WSI18n !== "undefined") ? WSI18n.kf("pa.typical", { x: (typeof WSI18n !== "undefined" ? String(sk.band).replace(/m\b/g, WSI18n.k("unit.m", "m")) : sk.band) }, "typical {x}") : ("typical " + sk.band);
      row.appendChild(el("div", { class: "obs-skill", html: skSkill + "<small>" + skDomain + " · " + skTyp + "</small>" }));
      const seg = el("div", { class: "seg" });
      [["notyet", "Not yet", ""], ["sometimes", "Sometimes", "somewhat"], ["consistently", "Consistently", "yes"]].forEach(function (rawOpt) {
        const opt = [rawOpt[0], (typeof WSI18n !== "undefined") ? WSI18n.k({notyet:"pa.notYet",sometimes:"pa.sometimes",consistently:"pa.consistently"}[rawOpt[0]], rawOpt[1]) : rawOpt[1], rawOpt[2]];
        const b = el("button", { class: opt[2] + (S.observations[sk.id] === opt[0] ? " on " + opt[2] : ""), text: opt[1] });
        /* Reset classes from the option's own CSS class, never from rendered text:
           the label is translated, so textContent is not stable across languages. */
        b.setAttribute("data-cls", opt[2]);
        b.addEventListener("click", function () {
          S.observations[sk.id] = opt[0];
          seg.querySelectorAll("button").forEach(function (x) { x.className = x.getAttribute("data-cls") || ""; });
          b.classList.add("on"); if (opt[2]) b.classList.add(opt[2]);
          WSAudio.play("tap");
          persist();
          toast((typeof WSI18n !== "undefined" ? WSI18n.kf("pa.noted", { x: sk.skill, y: opt[1] }, "Noted — {x}: {y}") : "Noted — {x}: {y}"));
        });
        seg.appendChild(b);
      });
      row.appendChild(seg);
      card.appendChild(row);
    });
    return card;
  }

  function journal() {
    const card = el("div", { class: "card" });
    card.appendChild(el("h3", { style: { fontWeight: 900, fontSize: "1.05rem" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.journalTitle", "📔 Wonder Journal") : "📔 Wonder Journal") }));
    const list = el("div", { style: { marginTop: "8px" } });
    function renderList() {
      list.innerHTML = "";
      S.journal.forEach(function (j) {
        var jI = (typeof WSData !== "undefined" && WSData.JOURNAL_SEEDS) ? WSData.JOURNAL_SEEDS.indexOf(j) : -1;
        list.appendChild(el("div", { class: "journal-item" }, [
          el("div", { class: "j-emoji", text: j.emoji }),
          el("div", { class: "j-body" }, [
            el("b", { text: (jI >= 0 && typeof WSI18n !== "undefined" ? WSI18n.k("jrn" + jI + ".t", j.title) : j.title) }),
            el("p", { text: (jI >= 0 && typeof WSI18n !== "undefined" ? WSI18n.k("jrn" + jI + ".x", j.text) : j.text) }),
            el("div", { class: "j-when", text: (jI >= 0 && typeof WSI18n !== "undefined" ? WSI18n.k("jrn" + jI + ".w", j.when) : j.when) }),
          ]),
        ]));
      });
    }
    renderList();
    card.appendChild(list);

    let pickedEmoji = "🌟";
    const picker = el("div", { class: "emoji-pick" });
    ["🌟", "🎉", "🗣️", "🛁", "🌱", "🎵", "📖", "❤️"].forEach(function (e2, i) {
      const b = el("button", { text: e2, class: i === 0 ? "on" : "" });
      b.addEventListener("click", function () {
        pickedEmoji = e2;
        picker.querySelectorAll("button").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
      });
      picker.appendChild(b);
    });
    const input = el("input", { placeholder: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.journalPh", "A first word, a giggle, a discovery…") : "A first word, a giggle, a discovery…"), maxlength: "90" });
    const addBtn = el("button", { class: "btn btn-primary", style: { padding: "11px 20px" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.addMoment", "Add moment") : "Add moment") });
    addBtn.addEventListener("click", function () {
      const v = input.value.trim();
      if (!v) { toast((typeof WSI18n !== "undefined" ? WSI18n.k("pa.writeFirst", "Write a tiny memory first ✏️") : "Write a tiny memory first ✏️")); return; }
      S.journal.unshift({ emoji: pickedEmoji, title: v, text: (typeof WSI18n !== "undefined" ? WSI18n.kf("pa.savedTo", { name: S.child.name }, "Saved to {name}'s journal.") : "Saved to {name}'s journal."), when: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.justNow", "Just now") : "Just now") });
      input.value = "";
      renderList();
      WSAudio.play("sparkle");
      persist();
      toast((typeof WSI18n !== "undefined" ? WSI18n.k("pa.memorySaved", "Memory saved to the journal 💛") : "Memory saved to the journal 💛"));
    });
    card.appendChild(el("div", { class: "journal-form" }, [picker, input, addBtn]));
    return card;
  }

  function recommendations() {
    const card = el("div", { class: "card" });
    card.appendChild(el("h3", { style: { fontWeight: 900, fontSize: "1.05rem" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.recNext", "✨ Recommended next") : "✨ Recommended next") }));
    card.appendChild(el("p", { style: { fontSize: ".8rem", color: "var(--ink-soft)", margin: "4px 0 6px" }, text: (typeof WSI18n !== "undefined" ? WSI18n.kf("pa.personalised", { name: S.child.name }, "Personalised from {name}'s age, exposure and what they love.") : "Personalised from {name}'s age, exposure and what they love.") }));
    const recs = [
      { emoji: "🛁", title: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.rec1t", "Float & Sink — prediction round") : "Float & Sink — prediction round"), why: (typeof WSI18n !== "undefined" ? WSI18n.kf("pa.rec1w", { m: S.child.months }, "They replayed the bath story twice; prediction is the next step at {m} months.") : "They replayed the bath story twice; prediction is the next step at {m} months."), route: "#/world/water" },
      { emoji: "🎵", title: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.rec2t", "Clap the rhythm: Row Your Boat") : "Clap the rhythm: Row Your Boat"), why: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.rec2w", "Music is their most-visited world this week.") : "Music is their most-visited world this week."), route: "#/music" },
      { emoji: "🌳", title: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.rec3t", "Zero-screen: laundry sock sorting") : "Zero-screen: laundry sock sorting"), why: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.rec3w", "Builds the same matching skill as the app — offline.") : "Builds the same matching skill as the app — offline."), route: "#/ai" },
    ];
    recs.forEach(function (r) {
      const row = el("div", { class: "reco-card" }, [
        el("div", { class: "reco-emoji", text: r.emoji }),
        el("div", { style: { flex: "1" } }, [el("b", { text: r.title }), el("p", { text: r.why })]),
        el("button", { class: "btn btn-soft", text: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.open", "Open") : "Open") }),
      ]);
      row.querySelector(".btn").addEventListener("click", function () { WSAudio.play("tap"); WSRouter.navigate(r.route); });
      card.appendChild(row);
    });
    return card;
  }

  function outsideCard() {
    const card = el("div", { class: "card green-card" });
    card.innerHTML = `
      <span style="font-size:2rem">🌳</span>
      <h3>${typeof WSI18n !== "undefined" ? WSI18n.k("pa.outsideTitle", "The best activity right now might be outside") : "The best activity right now might be outside"}</h3>
      <p>${typeof WSI18n !== "undefined" ? WSI18n.k("pa.outsideBody", "20 minutes of park time — pointing, naming, running — beats any app today. WonderSprout's job is done when the learning leaves the screen. Come back for the next Wonder of the Day tomorrow.") : "20 minutes of park time — pointing, naming, running — beats any app today. WonderSprout's job is done when the learning leaves the screen. Come back for the next Wonder of the Day tomorrow."}</p>`;
    return card;
  }

  /* save locally always; push to Supabase when connected */
  function persist() {
    if (typeof WSBackend === "undefined") return;
    WSBackend.saveLocal();
    if (WSBackend.mode() === "cloud") {
      WSBackend.pushState().catch(function () { /* offline blips are fine */ });
    }
  }

  WSRouter.register("#/parent", function (view) {
    if (typeof WSBackend !== "undefined") WSBackend.loadLocal();
    view.appendChild(childHead());
    const left = el("div", { style: { display: "grid", gap: "18px" } });
    left.appendChild(wonderCard());
    left.appendChild(observations());
    left.appendChild(journal());
    const right = el("div", { style: { display: "grid", gap: "18px" } });
    right.appendChild(accountCard());
    right.appendChild(statCards());
    right.appendChild(weekChart());
    right.appendChild(stageTrack());
    right.appendChild(recommendations());
    right.appendChild(outsideCard());
    const grid = el("div", { class: "dash-grid" });
    grid.appendChild(left); grid.appendChild(right);
    view.appendChild(grid);
  });

  /* ============================================================
     ENTRY AUTH PROMPT — sign up / sign in trigger on entry
     ============================================================ */
  const WSAuthPrompt = (function () {
    let isOpen = false;
    function dismissed() { try { return sessionStorage.getItem("ws-gate") === "1"; } catch (e) { return false; } }
    function markDismissed() { try { sessionStorage.setItem("ws-gate", "1"); } catch (e) {} }

    function show() {
      if (document.querySelector(".auth-gate")) return;
      isOpen = true;
      const gate = el("div", { class: "auth-gate" });
      const card = el("div", { class: "gate-card" });
      card.innerHTML = WSRouter.LOGO_SVG +
        "<div class='gate-word'>Wonder<em>Sprout</em></div>" +
        "<div class='gate-by'>BY DINVICTA EDU</div>" +
        "<div class='gate-tag'>" + (typeof WSI18n !== "undefined" ? WSI18n.t("tagline") : "Little minds. Big wonders.") + "</div>" +
        "<p class='gate-p'>" + (typeof WSI18n !== "undefined" ? WSI18n.k("g.p", "") : "") + "</p>";
      const modes = el("div", { class: "gate-modes" });
      const form = el("div", { class: "gate-form", style: { display: "none" } });
      const msg = el("div", { class: "gate-msg" });
      const curLang = (WSI18n.LANGS.filter(function (L) { return L[0] === WSI18n.lang(); })[0] || [])[1] || "";
      const langPick = el("button", { class: "lang-btn gate-lang", "aria-label": WSI18n.k("x.langAria", "Language"), text: "🌐 " + curLang });
      langPick.addEventListener("click", function () { WSI18n.menu(langPick); });
      card.appendChild(langPick);
      const demo = el("button", { class: "gate-demo", text: typeof WSI18n !== "undefined" ? WSI18n.t("demo") : "Explore in demo mode →" });
      demo.addEventListener("click", function () { dismiss(false); });
      card.appendChild(modes); card.appendChild(form); card.appendChild(msg); card.appendChild(demo);
      gate.appendChild(card);
      document.body.appendChild(gate);

      function showModes() {
        modes.style.display = ""; form.style.display = "none"; msg.textContent = "";
        modes.innerHTML = "";
        modes.appendChild(el("button", { class: "gate-btn primary", text: typeof WSI18n !== "undefined" ? WSI18n.t("signup") : "Create free account 🌱", onclick: function () { showForm("up"); } }));
        modes.appendChild(el("button", { class: "gate-btn", text: typeof WSI18n !== "undefined" ? WSI18n.t("signin") : "Sign in ☁️", onclick: function () { showForm("in"); } }));
      }
      function showForm(kind) {
        modes.style.display = "none"; form.style.display = ""; msg.textContent = "";
        form.innerHTML = "";
        form.appendChild(el("div", { class: "gate-form-title", text: kind === "up" ? WSI18n.k("g.formUp", "Create your parent account") : WSI18n.k("g.formIn", "Welcome back!") }));
        const em = el("input", { type: "email", placeholder: (typeof WSI18n !== "undefined" ? WSI18n.k("pa.emailPh2", "parent@email.com") : "parent@email.com"), autocomplete: "email" });
        const pw = el("input", { type: "password", placeholder: WSI18n.k("g.pwPh", "Password (6+ characters)"), autocomplete: kind === "up" ? "new-password" : "current-password" });
        form.appendChild(em); form.appendChild(pw);
        form.appendChild(el("button", { class: "gate-btn primary", text: kind === "up" ? WSI18n.k("g.create", "Create account") : WSI18n.k("g.signin", "Sign in"), onclick: function () { submit(kind, em, pw); } }));
        form.appendChild(el("button", { class: "gate-back", text: WSI18n.k("g.back", "← back"), onclick: showModes }));
        setTimeout(function () { try { em.focus(); } catch (e) {} }, 60);
      }
      function submit(kind, em, pw) {
        const email = (em.value || "").trim(), pass = pw.value || "";
        if (!email || pass.length < 6) { msg.style.color = "#E0653F"; msg.textContent = WSI18n.k("g.errShort", "Enter an email and a password of 6+ characters."); return; }
        msg.style.color = ""; msg.textContent = WSI18n.k("g.wait", "One moment…");
        const fn = kind === "up" ? WSBackend.signUp : WSBackend.signIn;
        fn(email, pass).then(function (res) {
          const sess = res && (res.session || (res.data && res.data.session));
          if (sess) {
            dismiss(true);
            toast(WSI18n.k("g.synced", "☁️ Synced — welcome!"));
            try { WSBackend.pullState(); } catch (e) {}
          } else {
            showForm("in");
            msg.textContent = WSI18n.k("g.checkInbox", "Account created! Check your inbox for the confirmation link, then sign in here.");
          }
        }).catch(function (e) { msg.style.color = "#E0653F"; msg.textContent = friendlyError(e.message); });
      }
      showModes();
    }

    function dismiss(signedIn) {
      isOpen = false;
      markDismissed();
      const g = document.querySelector(".auth-gate");
      if (g) g.remove();
      if (signedIn) try { WSRouter.render(); } catch (e) {}
    }

    function maybeShow() {
      if (typeof WSBackend === "undefined" || dismissed()) return;
      Promise.resolve(WSBackend.sessionUser()).then(function (u) { if (!u) show(); }).catch(function () { show(); });
    }
    // the gate lives outside #view, so rebuild it when the language changes
    document.addEventListener("ws:langchange", function () {
      if (!isOpen) return;
      const g = document.querySelector(".auth-gate");
      if (g) g.remove();
      show();
    });
    return { show: show, dismiss: dismiss, maybeShow: maybeShow };
  })();
  window.WSAuthPrompt = WSAuthPrompt;
})();
