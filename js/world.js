/* ============================================================
   WonderSprout World — The Child Experience
   8 playable learning worlds, built on the simulation engine
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Shared state ---------- */
  const S = window.WSState;
  const BANDS = [
    { id: "6-12", label: "6–12m" },
    { id: "12-24", label: "12–24m" },
    { id: "24-36", label: "24–36m" },
  ];

  let labCleanup = null;
  function T(k, fb) { return typeof WSI18n !== "undefined" ? WSI18n.t(k) : fb; }
  /* learning-content i18n: lab titles, intro words, game prompts */
  function CT(id, fb) { var r = typeof WSI18n !== "undefined" ? WSI18n.ct(id) : null; return r || fb; }
  function CI(id, idx, fb) { var r = typeof WSI18n !== "undefined" ? WSI18n.ci(id, idx) : null; return r || fb; }
  function P(key, map, fb) {
    var str = typeof WSI18n !== "undefined" ? WSI18n.cp(key) : null;
    if (!str) str = fb;
    if (map) for (var k in map) str = str.split("{" + k + "}").join(map[k]);
    return str;
  }
  function PS(key, map, fb) { return P(key, map, fb).replace(/<[^>]*>/g, ""); }
  /* keyed page copy: selected language -> en -> literal fallback */
  function K(key, fb) { return typeof WSI18n !== "undefined" ? WSI18n.k(key, fb) : fb; }
  function KM(key, map, fb) {
    var str = K(key, fb);
    if (map) for (var k2 in map) str = str.split("{" + k2 + "}").join(map[k2]);
    return str;
  }
  document.addEventListener("ws:navigate", function () {
    if (labCleanup) { try { labCleanup(); } catch (e) {} labCleanup = null; }
  });

  function earnStar(atEl) {
    S.stars += 1;
    const sc = document.getElementById("star-count");
    if (sc) sc.textContent = "⭐ " + S.stars;
    WSAudio.play("sparkle");
    WSFX.sparkleAt(atEl || null);
  }

  function bigCelebrate(msg) {
    WSAudio.play("cheer");
    WSFX.celebrate();
    toast(msg || "Wonderful! ⭐");
  }

  /* ---------- Shell ---------- */
  function labShell(view, cfg) {
    const shell = el("div", { class: "child-shell" });

    const top = el("div", { class: "child-top" }, [
      el("button", { class: "child-back", onclick: function () { WSAudio.play("tap"); WSRouter.navigate("#/world"); } }, "🏠 " + K("x.home", "Home")),
      el("div", { class: "child-title", text: cfg.emoji + " " + CT(cfg.id, [cfg.title])[0] }),
      el("div", { class: "star-count", id: "star-count", text: "⭐ " + S.stars }),
    ]);
    shell.appendChild(top);

    const body = el("div", { class: "child-body" });
    const frame = el("div", { class: "lab-frame" });

    const head = el("div", { class: "lab-head" }, [el("h2", { text: CT(cfg.id, [cfg.title])[0] })]);
    const chips = el("div", { class: "age-chips" });
    BANDS.forEach(function (b) {
      const c = el("button", { class: "age-chip" + (b.id === S.ageBand ? " on" : ""), text: K("band" + BANDS.indexOf(b), b.label) });
      c.addEventListener("click", function () {
        S.ageBand = b.id;
        chips.querySelectorAll(".age-chip").forEach(function (x) { x.classList.remove("on"); });
        c.classList.add("on");
        WSAudio.play("tap");
        buildStage();
      });
      chips.appendChild(c);
    });
    head.appendChild(chips);
    frame.appendChild(head);

    const stage = el("div", { class: "lab-stage" });
    frame.appendChild(stage);

    if (cfg.parentNote) frame.appendChild(el("div", { class: "parent-note", html: K("x.parentLabel", "<b>👪 Parent:</b> ") + K("lab." + cfg.id + ".pn", cfg.parentNote) }));
    if (cfg.realworld) {
      frame.appendChild(el("div", { class: "realworld-card" }, [
        el("div", { class: "rw-emoji", text: "🌳" }),
        el("div", {}, [
          el("b", { text: K("x.tryReal", "Try it in real life") }),
          el("p", { text: K("lab." + cfg.id + ".rw", cfg.realworld) }),
        ]),
      ]));
    }

    body.appendChild(frame);
    shell.appendChild(body);
    view.appendChild(shell);

    let started = false;
    function buildStage() {
      if (labCleanup) { try { labCleanup(); } catch (e) {} labCleanup = null; }
      stage.innerHTML = "";
      const startGame = function () { started = true; stage.innerHTML = ""; labCleanup = cfg.build(stage, S.ageBand) || null; };
      if (!started && cfg.id && LAB_INTROS[cfg.id]) renderIntro(stage, LAB_INTROS[cfg.id], startGame, cfg.id);
      else startGame();
    }
    buildStage();
  }

  function tabs(stage, names, onPick) {
    const row = el("div", { class: "flex-center", style: { paddingBottom: "14px" } });
    const content = el("div");
    names.forEach(function (n, i) {
      const b = el("button", { class: "tool-btn" + (i === 0 ? " on" : ""), text: n });
      b.addEventListener("click", function () {
        WSAudio.play("tap");
        row.querySelectorAll(".tool-btn").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        content.innerHTML = "";
        onPick(content, i);
      });
      row.appendChild(b);
    });
    stage.appendChild(row);
    stage.appendChild(content);
    onPick(content, 0);
  }

  /* ============================================================
     CHILD HUB
     ============================================================ */
  const LABS = [
    { id: "color",   emoji: "🎨", title: "Colour Lab", desc: "Find it & mix it!", bg: "linear-gradient(135deg,#FF7D68,#FF9F68)" },
    { id: "math",    emoji: "🔢", title: "Math Lab", desc: "Count & compare!", bg: "linear-gradient(135deg,#57B0F7,#7DC4FA)" },
    { id: "physics", emoji: "⚽", title: "Physics Play", desc: "Drop & bounce!", bg: "linear-gradient(135deg,#35B878,#5FCF9B)" },
    { id: "sound",   emoji: "🎼", title: "Sound Lab", desc: "Play & listen!", bg: "linear-gradient(135deg,#9B8CF0,#B5A9F5)" },
    { id: "life",    emoji: "🌱", title: "Life Lab", desc: "Grow a plant!", bg: "linear-gradient(135deg,#4CC9C0,#74DAD3)" },
    { id: "weather", emoji: "🌦️", title: "Weather World", desc: "Sun, rain & wind!", bg: "linear-gradient(135deg,#4A90C2,#6FB3DE)" },
    { id: "space",   emoji: "🪐", title: "Space World", desc: "Earth, Moon & Sun!", bg: "linear-gradient(135deg,#3D4E6B,#5A6E90)" },
    { id: "water",   emoji: "🛁", title: "Float & Sink", desc: "Predict & splash!", bg: "linear-gradient(135deg,#3BA3E0,#63C1F0)" },
    { id: "shapes",  emoji: "🔷", title: "Shape Safari", desc: "Find the shapes!", bg: "linear-gradient(135deg,#9B8CF0,#B5A9F5)" },
    { id: "pattern", emoji: "🔁", title: "Pattern Party", desc: "What comes next?", bg: "linear-gradient(135deg,#F06595,#F78DA7)" },
    { id: "sorting", emoji: "🧺", title: "Sorting Station", desc: "Sort it out!", bg: "linear-gradient(135deg,#E8A33D,#F0BC6E)" },
    { id: "animals", emoji: "🐮", title: "Animal Friends", desc: "Hear them talk!", bg: "linear-gradient(135deg,#59A96A,#7CC58A)" },
    { id: "shadows", emoji: "🔦", title: "Shadow Puppets", desc: "Light & shadow play!", bg: "linear-gradient(135deg,#4A5568,#6A7E90)" },
  ];

  function hub(view) {
    const shell = el("div", { class: "child-shell" });
    shell.appendChild(el("div", { class: "child-top" }, [
      el("button", { class: "child-back", onclick: function () { WSAudio.play("tap"); WSRouter.navigate("#/"); } }, "🚪 " + K("x.exit", "Exit")),
      el("div", { class: "child-title", text: K("x.worldTitle", "WonderSprout World") }),
      el("div", { class: "star-count", id: "star-count", text: "⭐ " + S.stars }),
    ]));
    const body = el("div", { class: "child-body" });
    body.appendChild(el("div", { class: "prompt-banner", html: K("x.hubPrompt", "What shall we wonder about? <span class='hl'>✨</span>") }));
    const grid = el("div", { class: "lab-tiles" });
    const FREE_LABS = ["color", "math", "animals"];
    function hasAccount() {
      try { return !!(window.WSBackend && WSBackend.hasAccount && WSBackend.hasAccount()); } catch (e) { return false; }
    }
    LABS.forEach(function (lab) {
      const locked = !hasAccount() && FREE_LABS.indexOf(lab.id) === -1 && !lab.alwaysFree;
      const lt = CT(lab.id, [lab.title, lab.desc]);
      const t = el("button", { class: "lab-tile" + (locked ? " locked" : ""), style: { background: lab.bg } });
      t.innerHTML = `<div class="tile-blob"></div><div class="tile-emoji">${lab.emoji}</div><div><h3>${lt[0]}</h3><p>${lt[1]}</p></div>` +
        (locked ? `<div class="lock-badge">🔒</div>` : "");
      t.addEventListener("click", function () {
        if (locked) {
          WSAudio.play("wrong");
          toast((typeof WSI18n !== "undefined" ? WSI18n.kf("x.lockedLab", { x: lt[0] }, "🔒 {x} unlocks with a free parent account!") : "🔒 " + lt[0] + " unlocks with a free parent account!"));
          try { if (window.WSAuthPrompt) WSAuthPrompt.show(); } catch (e) {}
          return;
        }
        WSAudio.play("pop"); WSRouter.navigate("#/world/" + lab.id);
      });
      grid.appendChild(t);
    });
    body.appendChild(grid);
    body.appendChild(el("div", { style: { marginTop: "22px", textAlign: "center", color: "#5A6E90", fontWeight: 700, fontSize: ".9rem" }, html: (typeof WSI18n !== "undefined" ? WSI18n.k("world.grownups", "👪 Grown-ups: the <a href='#/parent' style='text-decoration:underline'>Parent Dashboard</a> has today's wonder!") : "👪 Grown-ups: the <a href='#/parent' style='text-decoration:underline'>Parent Dashboard</a> has today's wonder!") }));
    shell.appendChild(body);
    view.appendChild(shell);
  }

  /* ============================================================
     COLOUR LAB
     ============================================================ */
  const COLORS20 = [
    { name: "RED", hex: "#F04E3E" }, { name: "BLUE", hex: "#3E7BF0" },
    { name: "YELLOW", hex: "#FFC545" }, { name: "GREEN", hex: "#3DBE5F" },
    { name: "PURPLE", hex: "#9B59E8" }, { name: "ORANGE", hex: "#FF8A3D" },
    { name: "PINK", hex: "#F06595" }, { name: "BROWN", hex: "#8A5A33" },
    { name: "BLACK", hex: "#333A45" }, { name: "WHITE", hex: "#FFFFFF" },
    { name: "TEAL", hex: "#17A2A2" }, { name: "LIME", hex: "#8CC63E" },
    { name: "MAROON", hex: "#8C2F2F" }, { name: "NAVY", hex: "#1F3A93" },
    { name: "OLIVE", hex: "#708238" }, { name: "CYAN", hex: "#00B7D4" },
    { name: "SILVER", hex: "#C0C4C9" }, { name: "LAVENDER", hex: "#B57EDC" },
    { name: "GOLD", hex: "#D4A017" }, { name: "INDIGO", hex: "#4B0082" },
  ];

  function balloonSVG(hex) {
    return `<svg viewBox="0 0 96 128"><path d="M48 8 C74 8 88 30 88 52 C88 78 62 96 48 100 C34 96 8 78 8 52 C8 30 22 8 48 8 Z" fill="${hex}" stroke="rgba(0,0,0,.14)" stroke-width="2"/>
    <ellipse cx="32" cy="34" rx="10" ry="14" fill="rgba(255,255,255,.35)" transform="rotate(-24 32 34)"/>
    <path d="M48 100 L44 108 L52 108 Z" fill="${hex}"/><path d="M48 108 C42 116 54 118 48 126" stroke="#8A6B4F" stroke-width="2.5" fill="none"/></svg>`;
  }

  function colorLab(stage, band) {
    const B = band || "12-24";
    tabs(stage, ["🎈 Find the Colour!", "🎨 Colour Mixing"], function (content, idx) {
      if (idx === 0) findGame(content); else mixingGame(content);
    });

    function findGame(box) {
      const prompt = el("div", { class: "prompt-banner" });
      box.appendChild(prompt);
      const arena = el("div", { style: { position: "relative", height: "330px", background: "linear-gradient(180deg,#EAF6FF,#F7FBFF)", borderRadius: "24px", overflow: "hidden" } });
      box.appendChild(arena);
      let round = 0, target = null, locked = false;
      const TOTAL = 5;

      function nextRound() {
        locked = false;
        arena.innerHTML = "";
        const pool = B === "6-12" ? COLORS20.slice(0, 2) : B === "24-36" ? COLORS20.slice() : COLORS20.slice(0, 8);
        const nOpts = B === "6-12" ? 2 : B === "24-36" ? 6 : 4;
        target = pool.splice((Math.random() * pool.length) | 0, 1)[0];
        const others = pool.sort(function () { return Math.random() - 0.5; }).slice(0, nOpts - 1);
        const four = [target].concat(others).sort(function () { return Math.random() - 0.5; });
        const gap = four.length > 1 ? Math.min(24, 84 / (four.length - 1)) : 0;
        prompt.innerHTML = round >= TOTAL ? "" : P("tapColour", { c: "<span class='hl'>" + target.name + "</span>" }, "Tap the <span class='hl'>" + target.name + "</span> balloon!");
        if (round < TOTAL) { WSAudio.speak(PS("tapColour", { c: target.name.toLowerCase() }, "Tap the " + target.name.toLowerCase() + " balloon!")); WSAudio.play("tap"); }
        four.forEach(function (c, i) {
          const b = el("div", { class: "balloon", style: { left: (6 + i * gap) + "%", top: (12 + (i % 2) * 34) + "%", animationDelay: (i * 0.4) + "s" } });
          b.innerHTML = balloonSVG(c.hex);
          b.addEventListener("click", function (ev) {
            if (locked) return;
            if (c.name === target.name) {
              locked = true;
              b.classList.add("pop");
              WSAudio.play("pop");
              WSFX.sparkle(ev.clientX, ev.clientY);
              earnStar(b);
              round++;
              if (round >= TOTAL) setTimeout(function () { prompt.textContent = P("allFound", null, "You found them all! 🎉"); bigCelebrate(P("colourChamp", null, "Colour champion! ⭐⭐⭐")); }, 500);
              else setTimeout(nextRound, 900);
            } else {
              b.classList.remove("wiggle"); void b.offsetWidth; b.classList.add("wiggle");
              WSAudio.play("wrong");
              WSAudio.speak(PS("wrongColour", { c: c.name.toLowerCase(), t: target.name.toLowerCase() }, "That's " + c.name.toLowerCase() + ". Find " + target.name.toLowerCase() + "!"));
            }
          });
          arena.appendChild(b);
        });
      }
      nextRound();
    }

    function mixingGame(box) {
      const PAINT = [
        { ing: ["RED", "YELLOW"], out: "#FF8A3D", name: "ORANGE", like: "Like a mango!" },
        { ing: ["YELLOW", "BLUE"], out: "#3DBE5F", name: "GREEN", like: "Like grass!" },
        { ing: ["RED", "BLUE"], out: "#8A5BE8", name: "PURPLE", like: "Like grapes!" },
      ];
      const LIGHT = [
        { ing: ["RED", "GREEN"], out: "#FFE14D", name: "YELLOW", like: "Red light + green light = yellow!" },
        { ing: ["GREEN", "BLUE"], out: "#4DE8E0", name: "CYAN", like: "Like a swimming pool!" },
        { ing: ["RED", "BLUE"], out: "#FF5BD4", name: "MAGENTA", like: "Like a flamingo!" },
        { ing: ["RED", "GREEN", "BLUE"], out: "#FFFFFF", name: "WHITE", like: "All three lights together!" },
      ];
      const HEXB = { RED: "#F04E3E", YELLOW: "#FFC545", BLUE: "#3E7BF0", GREEN: "#3DBE5F" };
      let mode = "paint";
      const modeRow = el("div", { class: "flex-center", style: { paddingBottom: "10px", gap: "10px" } });
      const teachWrap = el("div", { class: "center" });
      const playWrap = el("div", {});
      box.appendChild(modeRow); box.appendChild(teachWrap); box.appendChild(playWrap);
      const mP = el("button", { class: "tool-btn on", text: "🎨 Paint" });
      const mL = el("button", { class: "tool-btn", text: "🔦 Light (RGB)" });
      modeRow.appendChild(mP); modeRow.appendChild(mL);
      mP.addEventListener("click", function () { mode = "paint"; mP.classList.add("on"); mL.classList.remove("on"); teach(); });
      mL.addEventListener("click", function () { mode = "light"; mL.classList.add("on"); mP.classList.remove("on"); teach(); });
      function recs() { return mode === "paint" ? PAINT : LIGHT; }

      function teach() {
        playWrap.innerHTML = "";
        teachWrap.innerHTML = "";
        const r = recs()[(Math.random() * recs().length) | 0];
        const card = el("div", { class: "mix-teach", style: mode === "light" ? { background: "#1B2A4A", borderRadius: "20px", padding: "14px", color: "#fff" } : { padding: "14px" } });
        const vis = el("div", { class: "flex-center", style: { gap: "10px", fontSize: "1.6rem", fontWeight: "900" } });
        r.ing.forEach(function (n, ix) {
          if (ix) vis.appendChild(el("span", { text: "+" }));
          vis.appendChild(el("span", { class: "mix-dot", style: { background: HEXB[n], boxShadow: mode === "light" ? "0 0 26px " + HEXB[n] : "none" } }));
        });
        vis.appendChild(el("span", { text: "=" }));
        vis.appendChild(el("span", { class: "mix-dot", style: { background: r.out, boxShadow: mode === "light" ? "0 0 30px " + r.out : "none" } }));
        card.appendChild(vis);
        card.appendChild(el("div", { style: { fontWeight: "900", fontSize: "1.15rem", marginTop: "8px" }, text: r.ing.join(" + ") + " make " + r.name + "!" }));
        card.appendChild(el("div", { style: { opacity: ".75", fontWeight: "700" }, text: r.like }));
        WSAudio.speak(r.ing.join(" and ") + " make " + r.name + "! " + r.like);
        const go = el("button", { class: "intro-next play", style: { marginTop: "12px" }, text: K("x.nowYouMake", "Now YOU make {x}! ➜").split("{x}").join(r.name) });
        go.addEventListener("click", function () { WSAudio.play("pop"); challenge(r); });
        card.appendChild(go);
        teachWrap.appendChild(card);
      }

      function challenge(r) {
        teachWrap.innerHTML = "";
        playWrap.innerHTML = "";
        playWrap.appendChild(el("div", { class: "prompt-banner", html: P("makeX", { x: "<span class='hl'>" + r.name + "</span>" }, "Make <span class='hl'>" + r.name + "</span>! Tap the ingredients!") }));
        const row = el("div", { class: "flex-center", style: { gap: "16px", padding: "12px 0", flexWrap: "wrap" } });
        const picked = [];
        Object.keys(HEXB).forEach(function (n) {
          const b = el("button", { class: "mix-blob", style: { background: HEXB[n], boxShadow: mode === "light" ? "0 0 22px " + HEXB[n] : "none" }, "aria-label": n });
          b.addEventListener("click", function () {
            if (picked.indexOf(n) !== -1) return;
            WSAudio.play("tap");
            picked.push(n);
            b.style.transform = "scale(1.15)";
            if (picked.length === r.ing.length) {
              const ok = r.ing.every(function (x) { return picked.indexOf(x) !== -1; });
              if (ok) {
                WSAudio.play("sparkle");
                const res = el("div", { class: "mix-result", style: { background: r.out, boxShadow: mode === "light" ? "0 0 40px " + r.out : "none", color: ["WHITE", "YELLOW", "CYAN"].indexOf(r.name) !== -1 ? "#2C3A4B" : "#fff" }, text: r.name });
                playWrap.appendChild(res);
                WSAudio.speak(PS("mixYes", { a: r.ing[0], b: r.ing[1] || "", c: r.name }, "Yes! " + r.ing.join(" and ") + " make " + r.name + "!"));
                earnStar(res);
                setTimeout(teach, 2400);
              } else {
                WSAudio.play("wrong");
                WSAudio.speak(PS("mixNo", null, "Not quite — remember the recipe!"));
                row.querySelectorAll(".mix-blob").forEach(function (x) { x.style.transform = ""; });
                picked.length = 0;
              }
            }
          });
          row.appendChild(b);
        });
        playWrap.appendChild(row);
      }
      teach();
    }
  }

  /* ============================================================
     MATH LAB
     ============================================================ */
  function mathLab(stage, band) {
    const B = band || "12-24";
    tabs(stage, [
      P("mathTab1", null, "🍎 Count!"),
      P("mathTab2", null, "🍪 More or Less?"),
      P("mathTab3", null, "➕ Add & Take Away")
    ], function (content, idx) {
      if (idx === 0) countGame(content); else if (idx === 1) moreLess(content); else addSub(content);
    });

    function maxN(band) { return band === "6-12" ? 3 : band === "12-24" ? 10 : 20; }

    function countGame(box) {
      const prompt = el("div", { class: "prompt-banner", text: P("countApples", null, "Tap every apple! 🍎") });
      box.appendChild(prompt);
      const arena = el("div", { style: { position: "relative", height: "300px", background: "linear-gradient(180deg,#F0FAF0,#FAFDF7)", borderRadius: "24px", overflow: "hidden" } });
      box.appendChild(arena);
      const WORDS = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty"];

      function tensRound() {
        arena.innerHTML = "";
        arena.style.height = "420px";
        let k = 0;
        prompt.textContent = P("byTens", null, "Count by TENS! Tap the baskets! 🧺");
        WSAudio.speak(PS("countTens", null, "Count by tens! Ten, twenty, thirty!"));
        const order = [];
        for (let i2 = 0; i2 < 10; i2++) order.push(i2);
        order.sort(function () { return Math.random() - 0.5; });
        order.forEach(function (slot, i) {
          const bsk = el("div", { class: "apple-tap", style: { position: "absolute", left: (4 + (slot % 5) * 19 + Math.random() * 3) + "%", top: (8 + ((slot / 5) | 0) * 46 + Math.random() * 4) + "%", fontSize: "2.1rem" }, html: "🧺<span style='font-size:.95rem;font-weight:900'>10</span>" });
          bsk.addEventListener("click", function () {
            if (bsk.style.pointerEvents === "none") return;
            bsk.classList.add("apple-gone");
            bsk.style.pointerEvents = "none";
            k++;
            prompt.textContent = (k * 10) + "!";
            WSAudio.speak(String(k * 10));
            WSAudio.play("pop");
            if (k === 10) { earnStar(bsk); setTimeout(function () { bigCelebrate(P("hundredCheer", null, "You counted to 100! 💯")); }, 400); }
          });
          arena.appendChild(bsk);
        });
      }

      function round() {
        if (B === "24-36" && Math.random() < 0.45) return tensRound();
        arena.innerHTML = "";
        const n = 1 + ((Math.random() * maxN(B)) | 0);
        let tapped = 0;
        prompt.textContent = P("countApples", null, "Tap every apple! 🍎");
        arena.style.height = n > 10 ? "420px" : n > 5 ? "360px" : "300px";
        const size = n <= 5 ? "3.2rem" : n <= 10 ? "2.5rem" : "2rem";
        const order = [];
        for (let k = 0; k < n; k++) order.push(k);
        order.sort(function () { return Math.random() - 0.5; });
        for (let i = 0; i < n; i++) {
          const slot = order[i];
          const col = slot % 5, rowN = (slot / 5) | 0;
          const a = el("div", { class: "apple-tap", style: { position: "absolute", left: (5 + col * 19 + Math.random() * 5) + "%", top: (6 + rowN * (n > 10 ? 22 : 30) + Math.random() * 6) + "%", fontSize: size, animationDelay: (i * 0.15) + "s" }, text: "🍎" });
          a.addEventListener("click", function (ev) {
            a.classList.add("apple-gone");
            a.style.pointerEvents = "none";
            tapped++;
            WSAudio.play("pop");
            WSFX.sparkle(ev.clientX, ev.clientY);
            prompt.textContent = WORDS[tapped] + "!";
            WSAudio.speak(String(tapped));
            if (tapped === n) {
              earnStar(a);
              setTimeout(function () {
                arena.innerHTML = "";
                const big = el("div", { class: "big-number", text: n });
                arena.appendChild(big);
                WSAudio.speak(WORDS[n] + " apples!");
                if (B !== "6-12") WSAudio.play("cheer");
              }, 500);
              setTimeout(function () {
                const again = el("div", { class: "center" }, [el("button", { class: "btn-kid green", text: P("againBtn", null, "Count again! 🍎") })]);
                again.querySelector("button").addEventListener("click", function () { WSAudio.play("tap"); round(); });
                arena.appendChild(again);
              }, 1400);
            }
          });
          arena.appendChild(a);
        }
      }
      round();
    }

    function moreLess(box) {
      const prompt = el("div", { class: "prompt-banner" });
      box.appendChild(prompt);
      const row = el("div", { class: "flex-center", style: { gap: "30px", padding: "10px 0" } });
      box.appendChild(row);

      function numRound() {
        row.innerHTML = "";
        const askMore = Math.random() < 0.5;
        let a = 5 * (1 + ((Math.random() * 19) | 0));
        let b = 5 * (1 + ((Math.random() * 19) | 0));
        if (a === b) b = Math.min(100, a + 5);
        const winner = askMore ? (a > b ? 0 : 1) : (a < b ? 0 : 1);
        prompt.innerHTML = P(askMore ? "bigger" : "smaller", null, "Tap the <span class='hl'>" + (askMore ? "BIGGER" : "SMALLER") + "</span> number!");
        WSAudio.speak(PS(askMore ? "bigger" : "smaller", null, "Tap the " + (askMore ? "bigger" : "smaller") + " number!"));
        [a, b].forEach(function (num, i) {
          const cardB = el("button", { class: "cookie-plate", html: `<div style="font-size:3rem;font-weight:900">${num}</div>` });
          cardB.addEventListener("click", function () {
            if (i === winner) { cardB.classList.add("right"); WSAudio.play("cheer"); earnStar(cardB); WSAudio.speak(PS("yesNum", { n: numWord(num) }, "Yes! " + num + "!")); setTimeout(round, 1500); }
            else { WSAudio.play("wrong"); cardB.classList.remove("wiggle"); void cardB.offsetWidth; cardB.classList.add("wiggle"); }
          });
          row.appendChild(cardB);
        });
      }

      function round() {
        if (B === "24-36" && Math.random() < 0.5) return numRound();
        row.innerHTML = "";
        const askMore = Math.random() < 0.5;
        const rr = B === "6-12" ? [1, 3] : B === "12-24" ? [2, 9] : [3, 20];
        const ri = function () { return rr[0] + ((Math.random() * (rr[1] - rr[0] + 1)) | 0); };
        const a = ri();
        let b = ri();
        if (a === b) b = Math.min(rr[1], a + 1);
        const winner = askMore ? (a > b ? 0 : 1) : (a < b ? 0 : 1);
        prompt.innerHTML = P("moreLess", { m: "<span class='hl'>" + (askMore ? "MORE" : "FEWER") + "</span>" }, "Tap the plate with <span class='hl'>" + (askMore ? "MORE" : "FEWER") + "</span> cookies! 🍪");
        WSAudio.speak(PS("moreLess", { m: askMore ? "more" : "fewer" }, "Tap the plate with " + (askMore ? "more" : "fewer") + " cookies!"));
        [a, b].forEach(function (count, i) {
          const plate = el("button", { class: "cookie-plate" });
          plate.innerHTML = `<div style="font-size:${count > 12 ? "1.1rem" : count > 6 ? "1.5rem" : "2rem"}; line-height:1.25; display:flex; flex-wrap:wrap; justify-content:center; max-width:180px">${"🍪".repeat(count)}</div>
            <div style="font-size:3rem">🍽️</div>
            <div style="font-weight:900; color:var(--ink-soft)">${count}</div>`;
          plate.addEventListener("click", function () {
            if (i === winner) {
              plate.classList.add("right");
              WSAudio.play("cheer");
              earnStar(plate);
              WSAudio.speak(PS("moreYes", { m: askMore ? "more" : "fewer" }, "Yes! That plate has " + (askMore ? "more" : "fewer") + "!"));
              setTimeout(round, 1600);
            } else {
              WSAudio.play("wrong");
              WSAudio.speak(PS("countAgain", null, "Count again! One, two, three…"));
              plate.classList.remove("wiggle"); void plate.offsetWidth; plate.classList.add("wiggle");
            }
          });
          row.appendChild(plate);
        });
      }
      round();
    }

    /* localized number word for speech (num0-num20 exist in every language) */
    function numWord(n) { const w = (typeof WSI18n !== "undefined") ? WSI18n.k("num" + n, null) : null; return w || String(n); }

    /* ---- Addition & subtraction with real objects (age-banded, teach-first) ---- */
    function addSub(box) {
      const SETS = [["🍎", "apples"], ["🍪", "cookies"], ["🍌", "bananas"],
        ["🎈", "balloons"], ["⭐", "stars"], ["🐟", "fish"], ["🍓", "strawberries"]];
      const prompt = el("div", { class: "prompt-banner", text: "" });
      box.appendChild(prompt);
      const teachBox = el("div", { class: "mix-teach", style: { display: "none", textAlign: "center" } });
      box.appendChild(teachBox);
      const arena = el("div", { class: "flex-center", style: { gap: "14px", flexWrap: "wrap", padding: "12px 0", minHeight: "120px" } });
      box.appendChild(arena);
      const answers = el("div", { class: "flex-center", style: { gap: "14px", padding: "10px 0", flexWrap: "wrap" } });
      box.appendChild(answers);
      const taught = { add: false, sub: false };

      function ceiling() { return B === "6-12" ? 3 : B === "12-24" ? 5 : 10; }
      function ri(n) { return 1 + ((Math.random() * n) | 0); }
      function group(n, emoji, gone) {
        const g = el("div", { class: "flex-center", style: { gap: "3px", flexWrap: "wrap", maxWidth: "240px", justifyContent: "center" } });
        for (let i = 0; i < n; i++) {
          g.appendChild(el("span", {
            style: { fontSize: "1.9rem", display: "inline-block", opacity: gone ? ".28" : "1", textDecoration: gone ? "line-through" : "none" },
            text: emoji
          }));
        }
        if (!n) g.appendChild(el("span", { style: { fontSize: "1.1rem", color: "var(--ink-soft)" }, text: "—" }));
        return g;
      }
      function op(txt) { return el("div", { style: { fontSize: "2.4rem", fontWeight: 900, color: "var(--brand)" }, text: txt }); }

      function showTeach(kind, a, b, ans, emoji, next) {
        teachBox.style.display = "";
        teachBox.innerHTML = "";
        teachBox.appendChild(el("div", { class: "intro-lead", text: T("learn", "📖 First, let's learn!") }));
        const line = el("div", { class: "flex-center", style: { gap: "8px", flexWrap: "wrap", fontWeight: 900, alignItems: "center" } });
        line.appendChild(group(a, emoji, false));
        line.appendChild(op(kind === "add" ? "+" : "\u2212"));
        line.appendChild(group(b, emoji, kind === "sub"));
        line.appendChild(op("="));
        line.appendChild(el("span", { style: { fontSize: "2.2rem" }, text: String(ans) }));
        teachBox.appendChild(line);
        const key = kind === "add" ? "addTeach" : "subTeach";
        teachBox.appendChild(el("p", { style: { margin: "10px 0 0", fontSize: ".95rem" }, text: P(key, { a: a, b: b, s: ans, o: emoji }, "") }));
        const go = el("button", { class: "btn-kid green", style: { marginTop: "12px" }, text: T("play", "\u25b6 Let's play!") });
        go.addEventListener("click", function () { WSAudio.play("pop"); teachBox.style.display = "none"; next(); });
        teachBox.appendChild(go);
        try { WSAudio.speak(PS(key, { a: a, b: b, s: ans, o: emoji }, "")); } catch (e) {}
      }

      function equation(kind, a, b, emoji) {
        arena.innerHTML = "";
        arena.appendChild(group(a, emoji, false));
        arena.appendChild(op(kind === "add" ? "+" : "\u2212"));
        arena.appendChild(group(b, emoji, kind === "sub"));
        arena.appendChild(op("="));
        arena.appendChild(el("span", { style: { fontSize: "2.4rem", fontWeight: 900 }, text: "?" }));
      }

      function celebrate(ans, emoji, node) {
        earnStar(node || arena);
        WSAudio.play("cheer");
        answers.innerHTML = "";
        arena.innerHTML = "";
        arena.appendChild(el("div", { class: "big-number", text: ans }));
        try { WSAudio.speak(PS("yesCount", { n: numWord(ans), o: emoji }, "Yes! " + ans + "!")); } catch (e) {}
        setTimeout(function () {
          answers.appendChild(el("button", {
            class: "btn-kid green", text: P("againBtn", null, "Again! 🍎"),
            onclick: function () { WSAudio.play("tap"); round(); }
          }));
        }, 900);
      }

      function round() {
        const cap = ceiling();
        const kind = Math.random() < 0.55 ? "add" : "sub";
        const set = SETS[(Math.random() * SETS.length) | 0];
        const emoji = set[0];
        let a, b, ans;
        if (kind === "add") {
          a = ri(Math.max(1, cap - 1));
          b = ri(Math.max(1, cap - a));
          if (a + b > cap) b = cap - a;
          if (b < 1) { a = 1; b = 1; }
          ans = a + b;
        } else {
          a = 2 + ((Math.random() * Math.max(1, cap - 1)) | 0);
          if (a > cap) a = cap;
          b = ri(Math.max(1, a - 1));
          if (b >= a) b = a - 1;
          if (b < 1) { a = 2; b = 1; }
          ans = a - b;
        }
        const key = kind === "add" ? "addAsk" : "subAsk";
        prompt.innerHTML = P(key, { a: "<span class='hl'>" + a + "</span>", b: "<span class='hl'>" + b + "</span>" },
          (kind === "add" ? a + " + " + b : a + " \u2212 " + b) + " = ?");
        try { WSAudio.speak(PS(key, { a: a, b: b }, "")); } catch (e) {}

        const start = function () {
          equation(kind, a, b, emoji);
          answers.innerHTML = "";
          if (B === "6-12") {
            // youngest band: watch the objects join or leave, then see the answer
            setTimeout(function () { celebrate(ans, emoji, arena); }, 1400);
            return;
          }
          const opts = [ans];
          while (opts.length < 3) {
            const d = (Math.random() < 0.5 ? -1 : 1) * (1 + ((Math.random() * 2) | 0));
            const v = ans + d;
            if (v >= 0 && v <= 20 && opts.indexOf(v) === -1) opts.push(v);
          }
          opts.sort(function () { return Math.random() - 0.5; });
          answers.appendChild(el("div", { style: { width: "100%", textAlign: "center", fontWeight: 800, color: "var(--ink-soft)" }, text: P("tapAnswer", null, "Tap the answer!") }));
          opts.forEach(function (v) {
            const btn = el("button", { class: "cookie-plate", html: "<div style='font-size:2.4rem;font-weight:900'>" + v + "</div>" });
            btn.addEventListener("click", function () {
              if (v === ans) { btn.classList.add("right"); celebrate(ans, emoji, btn); }
              else {
                WSAudio.play("wrong");
                try { WSAudio.speak(PS("tryAgain", null, "Count them again!")); } catch (e) {}
                btn.classList.remove("wiggle"); void btn.offsetWidth; btn.classList.add("wiggle");
              }
            });
            answers.appendChild(btn);
          });
        };

        if (!taught[kind]) { taught[kind] = true; showTeach(kind, a, b, ans, emoji, start); }
        else start();
      }
      round();
    }
  }

  /* ============================================================
     PHYSICS PLAYGROUND
     ============================================================ */
  function physicsLab(stage, band) {
    const B = band || "12-24";
    const prompt = el("div", { class: "prompt-banner", html: "Tap anywhere to drop a ball! <span class='hl'>⬇️</span>" });
    stage.appendChild(prompt);
    const canvas = el("canvas", { class: "lab-canvas", width: 900, height: 420 });
    stage.appendChild(canvas);
    const ctx = canvas.getContext ? canvas.getContext("2d") : null;

    const controls = el("div", { class: "lab-panel" });
    let heightFrac = 0.15, bigBall = false;
    const hSlider = el("input", { type: "range", min: "5", max: "60", value: "15" });
    hSlider.addEventListener("input", function () { heightFrac = hSlider.value / 100; });
    controls.appendChild(el("div", { class: "slider-row" }, [el("span", { text: K("x.height", "⬆️ Height") }), hSlider]));
    const sizeBtn = el("button", { class: "tool-btn", text: K("x.ballSmall", "Ball: small ⚽") });
    sizeBtn.addEventListener("click", function () {
      bigBall = !bigBall;
      sizeBtn.textContent = K(bigBall ? "x.ballBigBtn" : "x.ballSmall", bigBall ? "Ball: BIG 🏀" : "Ball: small ⚽");
      WSAudio.play("tap");
    });
    controls.appendChild(sizeBtn);
    const whatIf = el("button", { class: "tool-btn", text: K("x.whatIfBoth", "🤔 What if… both?") });
    controls.appendChild(whatIf);
    stage.appendChild(controls);
    if (B === "6-12") controls.style.display = "none";
    if (B === "12-24") { sizeBtn.style.display = "none"; whatIf.style.display = "none"; }

    const balls = [];
    let raf = null, lastBounce = 0;

    function drop(x, r, hue) {
      balls.push({ x: x, y: canvas.height * heightFrac, vx: (Math.random() - 0.5) * 1.6, vy: 0, r: r, hue: hue });
      WSAudio.play("whoosh");
    }

    whatIf.addEventListener("click", function () {
      WSAudio.speak(PS("physBig", null, "What if one ball is bigger? Watch!"));
      drop(canvas.width * 0.35, 16, 210);
      drop(canvas.width * 0.65, 34, 20);
    });

    canvas.addEventListener("pointerdown", function (ev) {
      const rect = canvas.getBoundingClientRect();
      const x = (ev.clientX - rect.left) * (canvas.width / rect.width);
      drop(x, bigBall ? 32 : 17, bigBall ? 20 : 210);
    });

    function frame() {
      raf = requestAnimationFrame(frame);
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      /* grass */
      ctx.fillStyle = "#CDE8C4";
      ctx.fillRect(0, canvas.height - 26, canvas.width, 26);
      for (let i = balls.length - 1; i >= 0; i--) {
        const b = balls[i];
        b.vy += 0.45; b.x += b.vx; b.y += b.vy; b.vx *= 0.995;
        if (b.y + b.r > canvas.height - 26) {
          b.y = canvas.height - 26 - b.r;
          if (Math.abs(b.vy) > 2.2) {
            const now = Date.now();
            if (now - lastBounce > 90) { WSAudio.play("bounce"); lastBounce = now; }
          }
          b.vy *= -0.72;
          b.vx *= 0.96;
          if (Math.abs(b.vy) < 0.9) b.vy = 0;
        }
        if (b.x < b.r || b.x > canvas.width - b.r) b.vx *= -0.8;
        const g = ctx.createRadialGradient(b.x - b.r * 0.35, b.y - b.r * 0.35, b.r * 0.15, b.x, b.y, b.r);
        g.addColorStop(0, `hsl(${b.hue},85%,72%)`);
        g.addColorStop(1, `hsl(${b.hue},75%,48%)`);
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,.5)";
        ctx.beginPath(); ctx.arc(b.x - b.r * 0.35, b.y - b.r * 0.4, b.r * 0.22, 0, Math.PI * 2); ctx.fill();
        if (b.vy === 0 && Math.abs(b.vx) < 0.05 && Date.now() - (b.born || (b.born = Date.now())) > 6000) balls.splice(i, 1);
      }
    }
    if (ctx) { frame(); drop(canvas.width / 2, 17, 210); }
    else stage.appendChild(el("p", { class: "center", style: { color: "var(--ink-soft)" }, text: "(Canvas preview unavailable in this browser — the ball drop needs a real browser.)" }));

    return function () { if (raf) cancelAnimationFrame(raf); };
  }

  /* ============================================================
     SOUND LAB (Light & Sound)
     ============================================================ */
  function soundLab(stage, band) {
    const B = band || "12-24";
    const prompt = el("div", { class: "prompt-banner", text: K("x.tapBars", "Tap the bars to make music! 🎵") });
    stage.appendChild(prompt);
    const NOTES = [
      { n: "C4", c: "#F04E3E", h: 170 }, { n: "D4", c: "#FF8A3D", h: 155 },
      { n: "E4", c: "#FFC545", h: 140 }, { n: "G4", c: "#3DBE5F", h: 125 },
      { n: "A4", c: "#3E7BF0", h: 110 }, { n: "C5", c: "#9B59E8", h: 95 },
    ];
    const row = el("div", { class: "xylo-row" });
    const barEls = NOTES.map(function (note) {
      const bar = el("button", { class: "xylo-bar", style: { background: note.c, height: note.h + "px" }, text: "♪" });
      bar.addEventListener("click", function (ev) {
        WSAudio.note(note.n);
        bar.classList.add("lit");
        setTimeout(function () { bar.classList.remove("lit"); }, 160);
        const ring = el("div", { class: "ripple-ring" });
        bar.appendChild(ring);
        setTimeout(function () { ring.remove(); }, 650);
        void ev;
      });
      row.appendChild(bar);
      return bar;
    });
    stage.appendChild(row);

    const padRow = el("div", { class: "flex-center", style: { paddingTop: "16px", gap: "14px" } });
    const drum = el("button", { class: "btn-kid coral", text: "🥁 Drum" });
    drum.addEventListener("click", function () { WSAudio.play("drum"); });
    const shaker = el("button", { class: "btn-kid", text: "🪇 Shaker" });
    shaker.addEventListener("click", function () { WSAudio.play("shaker"); });
    padRow.appendChild(drum); padRow.appendChild(shaker);
    stage.appendChild(padRow);

    const ctrl = el("div", { class: "lab-panel" });
    const vol = el("input", { type: "range", min: "0", max: "100", value: "50" });
    vol.addEventListener("input", function () { WSAudio.setVolume(vol.value / 100); });
    ctrl.appendChild(el("div", { class: "slider-row" }, [el("span", { text: "🔈 quiet" }), vol, el("span", { text: "LOUD 🔊" })]));
    const patternBtn = el("button", { class: "tool-btn", text: "🎶 Play me a pattern!" });
    let cancelMelody = null;
    patternBtn.addEventListener("click", function () {
      const seq = (B === "24-36" ? [0, 2, 4, 5, 4, 2] : [0, 2, 4]).map(function (i) { return i % barEls.length; });
      WSAudio.speak(PS("listenBack", null, "Listen… then play it back!"));
      if (cancelMelody) cancelMelody();
      let k = 0;
      cancelMelody = WSAudio.melody(seq.map(function (i) { return { n: NOTES[i].n, d: 1 }; }), 110, function (idx) {
        const bi = seq[idx];
        barEls[bi].classList.add("lit");
        setTimeout(function () { barEls[bi].classList.remove("lit"); }, 300);
        if (idx === seq.length - 1) { k = 1; prompt.textContent = P("yourTurn", null, "Your turn! 🎵"); }
      });
      void k;
    });
    if (B !== "6-12") ctrl.appendChild(patternBtn);
    stage.appendChild(ctrl);

    return function () { if (cancelMelody) cancelMelody(); };
  }

  /* ============================================================
     LIFE LAB (Growing Plant)
     ============================================================ */
  function lifeLab(stage, band) {
    const B = band || "12-24";
    const prompt = el("div", { class: "prompt-banner", text: K("x.tapCan", "Tap the watering can! 💧") });
    stage.appendChild(prompt);
    const scene = el("div", { class: "plant-scene" });
    stage.appendChild(scene);

    let growth = 0, sunOn = B !== "24-36";
    const MAXG = 4;
    const NAMES = ["a tiny seed", "a little sprout", "a green stem", "leafy and tall", "a beautiful FLOWER!"].map(function (n, ni) { return typeof WSI18n !== "undefined" ? WSI18n.k("plant" + ni, n) : n; });

    const plant = el("div", { style: { position: "absolute", left: "50%", bottom: "26%", transform: "translateX(-50%)", textAlign: "center", lineHeight: "1", transition: "all .6s ease" } });
    scene.appendChild(plant);
    const sun = el("div", { style: { position: "absolute", right: "10%", top: "8%", fontSize: "3.4rem", transition: "opacity .5s" }, text: "☀️" });
    scene.appendChild(sun);

    function renderPlant() {
      const parts = [];
      if (growth >= 1) parts.push(`<div style="font-size:${28 + growth * 8}px">🌱</div>`);
      if (growth >= 2) parts.unshift(`<div style="font-size:${26 + growth * 6}px">🌿</div>`);
      if (growth >= 3) parts.unshift(`<div style="font-size:${24 + growth * 5}px">🍃</div>`);
      if (growth >= 4) parts.unshift(`<div style="font-size:64px; animation: bob 3s ease-in-out infinite">🌼</div>`);
      plant.innerHTML = growth === 0 ? `<div style="font-size:30px">🫘</div>` : parts.join("");
    }

    const can = el("button", { class: "tool-float", style: { left: "12%", top: "16%" }, text: "🚿" });
    can.addEventListener("click", function () {
      WSAudio.play("water");
      for (let i = 0; i < 5; i++) {
        const d = el("div", { class: "drop", style: { left: "calc(12% + 30px + " + (i * 7) + "px)", top: "24%", animationDelay: (i * 0.12) + "s" } });
        scene.appendChild(d);
        setTimeout(function () { d.remove(); }, 900);
      }
      if (growth < MAXG) {
        setTimeout(function () {
          growth += sunOn ? 1 : 0.5;
          growth = Math.min(MAXG, Math.ceil(growth));
          renderPlant();
          prompt.textContent = P("plantIs", { x: WSI18n.k("plant" + Math.max(0, growth - 1), NAMES[Math.max(0, growth - 1)]) }, "The plant is " + NAMES[Math.max(0, growth - 1)] + "!");
          WSAudio.speak(PS("plantIs", { x: WSI18n.k("plant" + Math.max(0, growth - 1), NAMES[Math.max(0, growth - 1)]) }, "With water and sunshine, the plant is " + NAMES[Math.max(0, growth - 1)]));
          if (growth >= MAXG) {
            WSAudio.play("cheer");
            WSFX.celebrate();
            earnStar(plant);
            prompt.textContent = P("flowerTap", null, "A beautiful flower! Tap it! 🌼");
          }
        }, 650);
      } else {
        WSAudio.play("sparkle");
        WSFX.sparkleAt(plant);
        WSAudio.speak(PS("flowerDrinks", null, "The flower drinks and dances!"));
      }
    });
    scene.appendChild(can);

    const sunBtn = el("button", { class: "tool-float", style: { left: "72%", top: "42%" }, text: "🌤️" });
    sunBtn.addEventListener("click", function () {
      sunOn = !sunOn;
      sun.style.opacity = sunOn ? "1" : ".25";
      WSAudio.speak(sunOn ? "Sunshine helps plants grow!" : "Plants need sunshine too!");
      WSAudio.play("tap");
    });
    if (B === "6-12") sunBtn.style.display = "none";
    if (!sunOn) sun.style.opacity = ".25";
    scene.appendChild(sunBtn);

    plant.addEventListener("click", function () {
      if (growth >= MAXG) { WSAudio.play("sparkle"); WSFX.sparkleAt(plant); }
    });

    const again = el("div", { class: "center", style: { paddingTop: "14px" } }, [el("button", { class: "tool-btn", text: "🫘 Plant a new seed" })]);
    again.querySelector("button").addEventListener("click", function () {
      growth = 0; renderPlant(); prompt.textContent = P("newSeed", null, "A new seed! Tap the watering can! 💧");
      WSAudio.play("tap");
    });
    stage.appendChild(again);
    renderPlant();
  }

  /* ============================================================
     EARTH & WEATHER
     ============================================================ */
  function weatherLab(stage, band) {
    const B = band || "12-24";
    const prompt = el("div", { class: "prompt-banner", text: K("x.slideDayNight", "Slide from day to night! 🌗") });
    stage.appendChild(prompt);
    const scene = el("div", { class: "sky-scene" });
    stage.appendChild(scene);

    /* stars */
    const stars = [];
    for (let i = 0; i < 26; i++) {
      const s = el("div", { class: "star-dot", style: { left: (Math.random() * 96) + "%", top: (Math.random() * 55) + "%", width: (2 + Math.random() * 3) + "px", height: (2 + Math.random() * 3) + "px", animationDelay: (Math.random() * 2) + "s" } });
      scene.appendChild(s); stars.push(s);
    }
    const orb = el("div", { style: { position: "absolute", fontSize: "3.6rem", transition: "left .4s ease, top .4s ease" }, text: "☀️" });
    scene.appendChild(orb);
    const cloud1 = el("div", { style: { position: "absolute", left: "18%", top: "14%", fontSize: "2.6rem", transition: "transform .5s" }, text: "☁️" });
    const cloud2 = el("div", { style: { position: "absolute", left: "58%", top: "8%", fontSize: "2rem", transition: "transform .5s" }, text: "⛅" });
    scene.appendChild(cloud1); scene.appendChild(cloud2);
    scene.appendChild(el("div", { style: { position: "absolute", left: "8%", bottom: "8%", fontSize: "2.8rem" }, text: "🌳" }));
    scene.appendChild(el("div", { style: { position: "absolute", left: "76%", bottom: "8%", fontSize: "2.4rem" }, text: "🌷" }));
    scene.appendChild(el("div", { style: { position: "absolute", left: "44%", bottom: "6%", fontSize: "2.2rem" }, text: "🏠" }));

    let weather = "sunny", rainDrops = [];
    const sliderWrap = el("div", { class: "sun-slider-wrap" }, [
      el("span", { text: "☀️" }),
      (function () {
        const s = el("input", { type: "range", min: "0", max: "100", value: "20" });
        s.addEventListener("input", function () { apply(); });
        return s;
      })(),
      el("span", { text: "🌙" }),
    ]);
    scene.appendChild(sliderWrap);
    const slider = sliderWrap.querySelector("input");

    function apply() {
      const v = slider.value / 100; /* 0 = day, 1 = night */
      const night = v > 0.55;
      const dusk = v > 0.35 && v <= 0.55;
      scene.style.background = night
        ? "linear-gradient(180deg,#1B2A4A 0%,#3D4E6B 78%,#2C3A4B 100%)"
        : dusk
          ? "linear-gradient(180deg,#FFB87A 0%,#FFD9A8 55%,#CDE8C4 100%)"
          : "linear-gradient(180deg,#8ECDF7 0%,#C9E9FC 60%,#CDE8C4 100%)";
      stars.forEach(function (s) { s.classList.toggle("night", night); });
      orb.textContent = night ? "🌙" : "☀️";
      orb.style.left = (14 + v * 62) + "%";
      orb.style.top = (10 + Math.abs(0.5 - v) * 42) + "%";
      if (!weatherChangLock) {
        prompt.textContent = night ? "Good night, sun! Hello, moon and stars! 🌙" : dusk ? "The sky turns orange… sunset! 🌇" : "The sun shines on our world! ☀️";
      }
    }
    let weatherChangLock = false;

    function quiz(w) {
      if (B === "6-12") return;
      const oldz = stage.querySelector(".wx-quiz");
      if (oldz) oldz.remove();
      const QZ = {
        rain: { q: "It's raining! What do we need?", opts: ["☂️", "🕶️"] },
        sunny: { q: "It's sunny! What do we wear?", opts: ["🕶️", "☂️"] },
        wind: { q: "It's windy! What flies away?", opts: ["🧢", "🪨"] },
      };
      const z = QZ[w];
      if (!z) return;
      const rowz = el("div", { class: "wx-quiz flex-center", style: { paddingTop: "10px", gap: "14px" } });
      rowz.appendChild(el("b", { text: z.q }));
      z.opts.forEach(function (o, oi) {
        const b2 = el("button", { class: "btn-kid", style: { fontSize: "1.6rem" }, text: o });
        b2.addEventListener("click", function () {
          if (oi === 0) { WSAudio.play("cheer"); WSAudio.speak(PS("wellDone", null, "Yes! Well done!")); earnStar(b2); }
          else { WSAudio.play("wrong"); WSAudio.speak(PS("tryOther", null, "Hmm — try the other one!")); }
          rowz.remove();
        });
        rowz.appendChild(b2);
      });
      stage.appendChild(rowz);
    }

    const btns = el("div", { class: "lab-panel" });
    [["☀️ Sunny", "sunny"], ["🌧️ Rain", "rain"], ["💨 Wind", "wind"]].forEach(function (b) {
      const btn = el("button", { class: "tool-btn", text: b[0] });
      btn.addEventListener("click", function () { setWeather(b[1]); WSAudio.play("tap"); });
      btns.appendChild(btn);
    });
    stage.appendChild(btns);

    function clearRain() { rainDrops.forEach(function (d) { d.remove(); }); rainDrops = []; }
    function setWeather(w) {
      weather = w; clearRain();
      quiz(w);
      cloud1.style.transform = ""; cloud2.style.transform = "";
      if (w === "rain") {
        prompt.textContent = P("rainHelps", null, "Drip drop! Rain helps plants drink! 🌧️");
        WSAudio.speak(PS("rainHelps", null, "Drip, drop! The rain helps the plants drink!"));
        for (let i = 0; i < 40; i++) {
          const d = el("div", { class: "rain-drop", style: { left: (Math.random() * 98) + "%", top: (-10 - Math.random() * 40) + "%", animationDuration: (0.7 + Math.random() * 0.6) + "s", animationDelay: (Math.random() * 1.4) + "s" } });
          scene.appendChild(d); rainDrops.push(d);
        }
      } else if (w === "wind") {
        prompt.textContent = P("windPush", null, "Whoooosh! The wind pushes the clouds! 💨");
        WSAudio.speak(PS("windPush", null, "Whoooosh! The wind pushes the clouds!"));
        cloud1.style.transform = "translateX(120px) scaleX(1.3)";
        cloud2.style.transform = "translateX(80px) scaleX(1.2)";
        WSAudio.play("whoosh");
      } else {
        weatherChangLock = false;
        prompt.textContent = P("sunClouds", null, "Sunshine and happy clouds! ☀️");
        WSAudio.speak(PS("sunClouds", null, "Sunshine and happy clouds!"));
      }
    }
    slider.addEventListener("change", function () { weatherChangLock = false; WSAudio.speak(slider.value > 55 ? "Good night, sun!" : "Good morning, sun!"); });
    apply();
  }

  /* ============================================================
     SPACE WORLD
     ============================================================ */
  function spaceLab(stage, band) {
    const B = band || "12-24";
    const prompt = el("div", { class: "prompt-banner", text: K("x.tapMoon", "Tap the Moon! 🌙") });
    stage.appendChild(prompt);
    const wrap = el("div", { class: "orbit-canvas-wrap" });
    stage.appendChild(wrap);
    const canvas = el("canvas", { class: "lab-canvas", width: 900, height: 430, style: { background: "#141E33" } });
    wrap.appendChild(canvas);
    const ctx = canvas.getContext ? canvas.getContext("2d") : null;

    const FACTS = [
      "The Moon goes around the Earth — like a merry-go-round!",
      "The Sun is a big, warm star. It gives us light!",
      "The Earth spins like a top — that makes day and night!",
      "One trip of the Moon around Earth takes about a month!",
      "Stars are suns — very, very far away!",
      "The Earth is round like a ball — you can see it from space!",
      "Astronauts float in space because there is no ground to stand on!",
      "Mars is called the Red Planet — one day we might visit!",
    ];
    let angle = 0, speed = 1, raf = null, factIdx = 0, earthSpin = 0;
    const MYFACTS = B === "6-12" ? FACTS.slice(0, 2) : FACTS;
    const starPts = [];
    for (let i = 0; i < 70; i++) starPts.push([Math.random() * 900, Math.random() * 430, Math.random() * 1.6 + 0.4]);

    const CX = 430, CY = 220, ORBIT = 150;
    let moonX = 0, moonY = 0;

    canvas.addEventListener("click", function (ev) {
      const rect = canvas.getBoundingClientRect();
      const x = (ev.clientX - rect.left) * (canvas.width / rect.width);
      const y = (ev.clientY - rect.top) * (canvas.height / rect.height);
      const d = Math.hypot(x - moonX, y - moonY);
      if (quizTarget) {
        const hitSun = Math.hypot(x - 815, y - 80) < 70;
        const hitMoon = d < 34;
        if ((quizTarget === "sun" && hitSun) || (quizTarget === "moon" && hitMoon)) {
          WSAudio.play("cheer"); WSAudio.speak(PS("spaceSci", null, "Yes! You are a space scientist!")); showFact("⭐"); quizTarget = null;
        } else if (hitSun || hitMoon) { WSAudio.play("wrong"); WSAudio.speak(PS("lookAgain", null, "Look again!")); }
        return;
      }
      if (d < 34) {
        showFact(MYFACTS[factIdx % MYFACTS.length]);
        WSAudio.speak(MYFACTS[factIdx % MYFACTS.length]);
        factIdx++;
        WSAudio.play("sparkle");
      }
    });

    function showFact(text) {
      const old = wrap.querySelector(".fact-pop");
      if (old) old.remove();
      wrap.appendChild(el("div", { class: "fact-pop", text: text }));
      setTimeout(function () { const f = wrap.querySelector(".fact-pop"); if (f) f.remove(); }, 5200);
    }

    function frame() {
      raf = requestAnimationFrame(frame);
      if (!ctx) return;
      ctx.clearRect(0, 0, 900, 430);
      starPts.forEach(function (p) {
        ctx.fillStyle = "rgba(255,255,255," + (0.4 + Math.random() * 0.5) + ")";
        ctx.beginPath(); ctx.arc(p[0], p[1], p[2], 0, Math.PI * 2); ctx.fill();
      });
      /* sun */
      const sg = ctx.createRadialGradient(815, 80, 8, 815, 80, 60);
      sg.addColorStop(0, "#FFF3C4"); sg.addColorStop(0.5, "#FFC545"); sg.addColorStop(1, "rgba(255,197,69,0)");
      ctx.fillStyle = sg; ctx.beginPath(); ctx.arc(815, 80, 60, 0, Math.PI * 2); ctx.fill();
      /* orbit path */
      ctx.strokeStyle = "rgba(255,255,255,.18)"; ctx.setLineDash([6, 8]);
      ctx.beginPath(); ctx.ellipse(CX, CY, ORBIT, ORBIT * 0.42, 0, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);
      /* earth */
      earthSpin += 0.01 * speed;
      const eg = ctx.createRadialGradient(CX - 12, CY - 12, 6, CX, CY, 42);
      eg.addColorStop(0, "#8ED8FF"); eg.addColorStop(1, "#2E7FD4");
      ctx.fillStyle = eg; ctx.beginPath(); ctx.arc(CX, CY, 42, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#4FBF6A";
      for (let i = 0; i < 3; i++) {
        const a = earthSpin + i * 2.1;
        ctx.beginPath();
        ctx.ellipse(CX + Math.cos(a) * 18, CY + Math.sin(a * 0.7) * 14, 12, 8, a, 0, Math.PI * 2);
        ctx.fill();
      }
      /* moon */
      angle += 0.012 * speed;
      moonX = CX + Math.cos(angle) * ORBIT;
      moonY = CY + Math.sin(angle) * ORBIT * 0.42;
      const mg = ctx.createRadialGradient(moonX - 5, moonY - 5, 2, moonX, moonY, 20);
      mg.addColorStop(0, "#F4F1E8"); mg.addColorStop(1, "#B9B4A5");
      ctx.fillStyle = mg; ctx.beginPath(); ctx.arc(moonX, moonY, 18, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "rgba(120,115,100,.5)";
      ctx.beginPath(); ctx.arc(moonX - 5, moonY - 3, 4, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(moonX + 5, moonY + 5, 3, 0, Math.PI * 2); ctx.fill();
      /* labels */
      ctx.fillStyle = "rgba(255,255,255,.75)"; ctx.font = "700 15px sans-serif"; ctx.textAlign = "center";
      ctx.fillText("Earth", CX, CY + 62);
      ctx.fillText("Sun", 815, 155);
    }
    if (ctx) frame();

    const ctrl = el("div", { class: "lab-panel" });
    const sp = el("input", { type: "range", min: "1", max: "5", value: "2" });
    sp.addEventListener("input", function () { speed = +sp.value / 2; });
    ctrl.appendChild(el("div", { class: "slider-row" }, [el("span", { text: "🐢 slow" }), sp, el("span", { text: "FAST 🚀" })]));
    const factBtn = el("button", { class: "tool-btn", text: "✨ Tell me a space fact!" });
    factBtn.addEventListener("click", function () {
      showFact(MYFACTS[factIdx % MYFACTS.length]);
      WSAudio.speak(MYFACTS[factIdx % MYFACTS.length]);
      factIdx++;
    });
    ctrl.appendChild(factBtn);
    if (B === "6-12") { const sr = ctrl.querySelector(".slider-row"); if (sr) sr.remove(); }
    let quizTarget = null;
    if (B === "24-36") {
      const qz = el("button", { class: "tool-btn", text: "🙋 Quiz me!" });
      qz.addEventListener("click", function () {
        WSAudio.play("tap");
        quizTarget = quizTarget === "sun" ? "moon" : "sun";
        prompt.textContent = quizTarget === "sun" ? "Quiz: tap what gives us DAY light!" : "Quiz: tap what visits at NIGHT!";
        WSAudio.speak(prompt.textContent);
      });
      ctrl.appendChild(qz);
    }
    stage.appendChild(ctrl);

    return function () { if (raf) cancelAnimationFrame(raf); };
  }

  /* ============================================================
     FLOAT & SINK
     ============================================================ */
  function waterLab(stage, band) {
    const B = band || "12-24";
    const OBJS = [
      { emoji: "🪨", name: "rock", sinks: true },
      { emoji: "🦆", name: "rubber duck", sinks: false },
      { emoji: "🍃", name: "leaf", sinks: false },
      { emoji: "🥄", name: "metal spoon", sinks: true },
      { emoji: "🪙", name: "coin", sinks: true },
      { emoji: "⛵", name: "toy boat", sinks: false },
      { emoji: "🕯️", name: "candle", sinks: false },
    ];
    const prompt = el("div", { class: "prompt-banner", text: P("splashIn", null, "Tap an object to splash it in! 💦") });
    stage.appendChild(prompt);
    if (B === "24-36") OBJS.push({ emoji: "🧽", name: "sponge", sinks: false }, { emoji: "🥕", name: "carrot", sinks: true });
    const tub = el("div", { class: "tub" });
    stage.appendChild(tub);
    tub.appendChild(el("div", { class: "waterline" }));

    const tray = el("div", { class: "flex-center", style: { paddingTop: "14px", gap: "18px" } });
    const sp2 = OBJS.length > 1 ? Math.min(22, 84 / (OBJS.length - 1)) : 0;
    stage.appendChild(tray);
    const dropped = {};

    OBJS.forEach(function (o, i) {
      const b = el("button", { class: "tool-btn", style: { fontSize: "1.4rem", padding: "12px 18px" }, text: o.emoji + " " + o.name });
      b.addEventListener("click", function () {
        if (dropped[o.name]) { toast("The " + o.name + " is already swimming (or diving)!"); return; }
        if (B !== "6-12" && !b._asked) {
          b._asked = true;
          WSAudio.speak(PS("predict", { x: o.name }, "Predict! Will the " + o.name + " sink or float?"));
          const ask = el("div", { class: "flex-center", style: { paddingTop: "10px" } }, [
            el("button", { class: "btn-kid blue", text: "⬆️ FLOAT" }),
            el("button", { class: "btn-kid coral", text: "⬇️ SINK" }),
          ]);
          ask.querySelectorAll("button").forEach(function (pb, pi) {
            pb.addEventListener("click", function () {
              const guessedSink = pi === 1;
              ask.remove();
              doDrop(o, b, guessedSink === o.sinks);
            });
          });
          stage.appendChild(ask);
          return;
        }
        doDrop(o, b, null);
      });
      tray.appendChild(b);
    });

    function doDrop(o, btn, predictedRight) {
      dropped[o.name] = true;
      WSAudio.play("splash");
      const obj = el("div", { class: "float-obj", style: { left: (8 + OBJS.indexOf(o) * sp2) + "%", top: "6%" }, text: o.emoji });
      tub.appendChild(obj);
      requestAnimationFrame(function () {
        obj.classList.add(o.sinks ? "obj-anim-sink" : "obj-anim-float");
      });
      if (o.sinks) {
        for (let i = 0; i < 6; i++) {
          const bub = el("div", { class: "bubble", style: { left: (14 + OBJS.indexOf(o) * 22) + "%", top: "60%", animationDelay: (0.4 + i * 0.18) + "s" } });
          tub.appendChild(bub);
          setTimeout(function () { bub.remove(); }, 2200);
        }
      }
      setTimeout(function () {
        const verdict = o.sinks ? "The " + o.name + " SINKS! Glug glug glug…" : "The " + o.name + " FLOATS! Bobbing on top!";
        prompt.textContent = (o.sinks ? "⬇️ " : "⬆️ ") + verdict;
        WSAudio.speak(verdict);
        if (predictedRight === true) {
          WSAudio.play("cheer"); earnStar(obj);
          toast("Great prediction, scientist! 🔬");
        } else if (predictedRight === false) {
          WSAudio.speak(PS("predictLearn", null, "Good try! Predicting and testing is how we learn!"));
        }
        btn.style.opacity = ".45";
        if (Object.keys(dropped).length === OBJS.length) {
          setTimeout(function () {
            bigCelebrate(P("testedAll", null, "You tested everything! Real scientist! 🔬⭐"));
            const again = el("button", { class: "tool-btn", text: "🔄 Empty the tub & try again" });
            again.addEventListener("click", function () {
              tub.querySelectorAll(".float-obj").forEach(function (x) { x.remove(); });
              Object.keys(dropped).forEach(function (k) { delete dropped[k]; });
              tray.querySelectorAll(".tool-btn").forEach(function (x) { x.style.opacity = "1"; x._asked = false; });
              again.remove();
              prompt.textContent = P("splashIn", null, "Tap an object to splash it in! 💦");
            });
            stage.appendChild(el("div", { class: "center", style: { paddingTop: "10px" } }, [again]));
          }, 900);
        }
      }, o.sinks ? 2300 : 1500);
    }
  }

  /* ============================================================
     SHAPE SAFARI
     ============================================================ */
  const SHAPES9 = [
    { name: "CIRCLE", svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="#F04E3E"/><circle cx="36" cy="36" r="10" fill="rgba(255,255,255,.35)"/></svg>` },
    { name: "SQUARE", svg: `<svg viewBox="0 0 100 100"><rect x="12" y="12" width="76" height="76" rx="10" fill="#3E7BF0"/><rect x="22" y="22" width="20" height="20" rx="5" fill="rgba(255,255,255,.3)"/></svg>` },
    { name: "TRIANGLE", svg: `<svg viewBox="0 0 100 100"><path d="M50 8 L92 88 L8 88 Z" fill="#FFC545" stroke-linejoin="round"/><path d="M50 30 L64 58 L36 58 Z" fill="rgba(255,255,255,.3)"/></svg>` },
    { name: "STAR", svg: `<svg viewBox="0 0 100 100"><path d="M50 5 L61 38 L96 38 L68 59 L78 92 L50 72 L22 92 L32 59 L4 38 L39 38 Z" fill="#9B59E8"/></svg>` },
    { name: "RECTANGLE", svg: `<svg viewBox="0 0 100 100"><rect x="6" y="26" width="88" height="48" rx="10" fill="#3DBE5F"/><rect x="16" y="34" width="24" height="12" rx="5" fill="rgba(255,255,255,.3)"/></svg>` },
    { name: "OVAL", svg: `<svg viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="44" ry="30" fill="#FF8A3D"/><ellipse cx="36" cy="42" rx="10" ry="7" fill="rgba(255,255,255,.35)"/></svg>` },
    { name: "HEART", svg: `<svg viewBox="0 0 100 100"><path d="M50 88 C20 62 8 44 8 28 C8 14 19 6 30 6 C39 6 46 11 50 20 C54 11 61 6 70 6 C81 6 92 14 92 28 C92 44 80 62 50 88 Z" fill="#F06595"/></svg>` },
    { name: "DIAMOND", svg: `<svg viewBox="0 0 100 100"><path d="M50 4 L92 50 L50 96 L8 50 Z" fill="#00B7D4"/><path d="M50 20 L74 50 L50 80 L26 50 Z" fill="rgba(255,255,255,.25)"/></svg>` },
    { name: "HEXAGON", svg: `<svg viewBox="0 0 100 100"><path d="M27 8 L73 8 L95 50 L73 92 L27 92 L5 50 Z" fill="#9B59E8"/><path d="M35 22 L65 22 L80 50 L65 78 L35 78 L20 50 Z" fill="rgba(255,255,255,.2)"/></svg>` },
  ];

  function shapesLab(stage, band) {
    const B = band || "12-24";
    const prompt = el("div", { class: "prompt-banner" });
    stage.appendChild(prompt);
    const arena = el("div", { style: { position: "relative", height: "330px", background: "linear-gradient(180deg,#F3F0FF,#FAF8FF)", borderRadius: "24px", overflow: "hidden" } });
    stage.appendChild(arena);
    let round = 0, target = null, locked = false;
    const TOTAL = 5;

    function nextRound() {
      locked = false;
      arena.innerHTML = "";
      const pool = B === "6-12" ? SHAPES9.slice(0, 2) : B === "24-36" ? SHAPES9.slice() : SHAPES9.slice(0, 4);
      target = pool.splice((Math.random() * pool.length) | 0, 1)[0];
      const others = pool.sort(function () { return Math.random() - 0.5; }).slice(0, B === "6-12" ? 1 : 3);
      const four = [target].concat(others).sort(function () { return Math.random() - 0.5; });
      prompt.innerHTML = P("tapShape", { s: "<span class='hl'>" + target.name + "</span>" }, "Tap the <span class='hl'>" + target.name + "</span>!");
      WSAudio.speak(PS("findShapeQ", { s: target.name.toLowerCase() }, "Can you find the " + target.name.toLowerCase() + "?"));
      four.forEach(function (s, i) {
        const d = el("div", { class: "shape-float", style: { left: (6 + i * 24) + "%", top: (12 + (i % 2) * 36) + "%", animationDelay: (i * 0.4) + "s" } });
        d.innerHTML = s.svg;
        d.addEventListener("click", function (ev) {
          if (locked) return;
          if (s.name === target.name) {
            locked = true;
            d.classList.add("pop");
            WSAudio.play("pop");
            WSFX.sparkle(ev.clientX, ev.clientY);
            earnStar(d);
            WSAudio.speak(PS("yesShape", { s: target.name.toLowerCase() }, "Yes! A " + target.name.toLowerCase() + "!"));
            round++;
            if (round >= TOTAL) setTimeout(function () { prompt.textContent = P("shapeChamp", null, "Shape champion! 🏆"); bigCelebrate(P("knowShapes", null, "You know your shapes! ⭐")); }, 500);
            else setTimeout(nextRound, 900);
          } else {
            d.classList.remove("wiggle"); void d.offsetWidth; d.classList.add("wiggle");
            WSAudio.play("wrong");
            WSAudio.speak(PS("wrongShape", { c: s.name.toLowerCase(), t: target.name.toLowerCase() }, "That's a " + s.name.toLowerCase() + ". Find the " + target.name.toLowerCase() + "!"));
          }
        });
        arena.appendChild(d);
      });
    }
    nextRound();
  }

  /* ============================================================
     PATTERN PARTY
     ============================================================ */
  function patternLab(stage, band) {
    const B = band || "12-24";
    const PATTERNS = [
      { seq: ["🔴", "🔵", "🔴", "🔵", "🔴"], answer: "🔵", wrong: ["🟡", "🔴"] },
      { seq: ["⭐", "🌙", "⭐", "🌙", "⭐"], answer: "🌙", wrong: ["⭐", "☀️"] },
      { seq: ["🍎", "🍌", "🍎", "🍌", "🍎"], answer: "🍌", wrong: ["🍎", "🍇"] },
      { seq: ["🐶", "🐱", "🐶", "🐶", "🐱"], answer: "🐶", wrong: ["🐱", "🐰"] },
      { seq: ["🟢", "🟡", "🔵", "🟢", "🟡"], answer: "🔵", wrong: ["🟢", "🟡"] },
      { seq: ["🚗", "🚌", "🚗", "🚌", "🚗"], answer: "🚌", wrong: ["🚗", "✈️"] },
      { seq: ["🟣", "🟡", "🟡", "🟤", "🟣"], answer: "🟤", wrong: ["🟣", "🟢"] },
      { seq: ["🩷", "🖤", "🩷", "🩷", "🖤"], answer: "🩷", wrong: ["🖤", "🩵"] },
    ];
  const HARD_PATTERNS = [
      { seq: ["🔵", "🔴", "🔴", "🔵", "🔴"], answer: "🔴", wrong: ["🔵", "🟡"] },
      { seq: ["🔴", "🔵", "🟢", "🔴", "🔵"], answer: "🟢", wrong: ["🔴", "🔵"] },
  ];
    const prompt = el("div", { class: "prompt-banner", text: P("whatNext", null, "What comes next? 🔮") });
    stage.appendChild(prompt);
    const row = el("div", { class: "pattern-row" });
    stage.appendChild(row);
    const choices = el("div", { class: "pattern-choices" });
    stage.appendChild(choices);
    let round = 0, locked = false;

    function nextRound() {
      locked = false;
      const availP = PATTERNS.concat(B === "24-36" ? HARD_PATTERNS : []);
      const p = availP[round % availP.length];
      row.innerHTML = "";
      choices.innerHTML = "";
      prompt.textContent = P("whatNext", null, "What comes next? 🔮");
      const seqShow = B === "6-12" ? p.seq.slice(0, 4) : p.seq;
      seqShow.forEach(function (e2) { row.appendChild(el("div", { class: "pattern-cell", text: e2 })); });
      row.appendChild(el("div", { class: "pattern-cell q", text: "?" }));
      WSAudio.speak(PS("whatNext", null, "What comes next?"));
      const opts = [p.answer].concat(B === "6-12" ? p.wrong.slice(0, 1) : p.wrong).sort(function () { return Math.random() - 0.5; });
      opts.forEach(function (o) {
        const b = el("button", { class: "pattern-choice", text: o });
        b.addEventListener("click", function (ev) {
          if (locked) return;
          if (o === p.answer) {
            locked = true;
            b.classList.add("right");
            row.lastChild.textContent = o;
            row.lastChild.classList.remove("q");
            WSAudio.play("cheer");
            earnStar(b);
            WSFX.sparkle(ev.clientX, ev.clientY);
            round++;
            if (round >= 5) setTimeout(function () { prompt.textContent = P("patternMaster", null, "Pattern master! 🎉"); bigCelebrate(P("fivePatterns", null, "Five patterns in a row! ⭐")); }, 700);
            else setTimeout(nextRound, 1300);
          } else {
            b.classList.remove("wiggle"); void b.offsetWidth; b.classList.add("wiggle");
            WSAudio.play("wrong");
            WSAudio.speak(PS("whatRepeats", null, "Look again — what repeats?"));
          }
        });
        choices.appendChild(b);
      });
    }
    nextRound();
  }

  /* ============================================================
     SORTING STATION
     ============================================================ */
  function sortingLab(stage, band) {
    const B = band || "12-24";
    const ROUNDS = [
      [["🍎 Fruit", ["🍎", "🍌", "🍇", "🍓"]], ["🐾 Animals", ["🐶", "🐱", "🐘", "🦁"]]],
      [["🚗 Vehicles", ["🚗", "🚌", "✈️", "🚂"]], ["👕 Clothes", ["👕", "🧦", "👗", "🧢"]]],
      [["☀️ In the Sky", ["🌞", "🌙", "⭐", "☁️"]], ["🌱 On the Ground", ["🌳", "🌷", "🐛", "🍄"]]],
      [["🔴 Red Things", ["🍎", "🍓", "🦀", "🌹"]], ["🔵 Blue Things", ["🐳", "💧", "📘", "🫐"]]],
    ];
  const SORT_EXTRAS = [
    ["🧸 Toys", ["🧸", "🪀", "🎁", "🪁"]],
    ["🍎 Food", ["🍎", "🍞", "🥛", "🧃"]],
    ["💧 Water", ["💧", "🐟", "⛵", "🐚"]],
    ["🟢 Green Things", ["🐸", "🥦", "🐢", "🍏"]],
  ];
    const prompt = el("div", { class: "prompt-banner", text: P("sortPrompt", null, "Tap the right box! 🧺") });
    stage.appendChild(prompt);
    const center = el("div", { class: "sort-center" });
    stage.appendChild(center);
    const bins = el("div", { class: "bins-row" });
    stage.appendChild(bins);
    let roundIdx = 0;

    function playRound() {
      let r = ROUNDS[roundIdx % ROUNDS.length];
      if (B === "24-36" && SORT_EXTRAS[roundIdx % ROUNDS.length]) r = r.concat([SORT_EXTRAS[roundIdx % ROUNDS.length]]);
      const per = B === "6-12" ? 3 : 4;
      const queue = [];
      r.forEach(function (bd, bi) { bd[1].slice(0, per).forEach(function (x) { queue.push({ e: x, bin: bi }); }); });
      queue.sort(function () { return Math.random() - 0.5; });
      bins.style.gridTemplateColumns = r.length === 3 ? "repeat(3, 1fr)" : "";
      bins.innerHTML = "";
      const binEls = r.map(function (bdef, i) {
        const card = el("button", { class: "bin-card" });
        card.innerHTML = "<b>" + bdef[0] + "</b><div class='bin-items'></div>";
        card.addEventListener("click", function () {
          const item = queue[0];
          if (!item) return;
          if (i === item.bin) {
            WSAudio.play("pop");
            card.querySelector(".bin-items").textContent += item.e;
            card.classList.add("right");
            setTimeout(function () { card.classList.remove("right"); }, 400);
            center.classList.add("fly");
            queue.shift();
            setTimeout(nextItem, 420);
          } else {
            WSAudio.play("wrong");
            card.classList.remove("wiggle"); void card.offsetWidth; card.classList.add("wiggle");
            WSAudio.speak(PS("sortWrong", { x: r[i][0].slice(2).toLowerCase() }, "Hmm! Is that " + r[i][0].slice(2).toLowerCase() + "? Try the other box!"));
          }
        });
        bins.appendChild(card);
        return card;
      });
      void binEls;
      function nextItem() {
        center.classList.remove("fly");
        if (!queue.length) {
          center.textContent = "🎉";
          prompt.textContent = P("sortedOk", null, "Sorted perfectly!");
          roundIdx++;
          WSAudio.play("cheer");
          WSFX.celebrate();
          earnStar(center);
          const again = el("div", { class: "center", style: { paddingTop: "10px" } });
          const btn = el("button", { class: "tool-btn", text: roundIdx < ROUNDS.length ? "Next sorting round →" : "Sort again from the start 🔄" });
          btn.addEventListener("click", function () { WSAudio.play("tap"); playRound(); });
          again.appendChild(btn);
          stage.appendChild(again);
          return;
        }
        center.textContent = queue[0].e;
        prompt.textContent = "Where does the " + queue[0].e + " go?";
        WSAudio.speak(PS("whereGoQ", null, "Where does this one go?"));
      }
      nextItem();
    }
    playRound();
  }

  /* ============================================================
     ANIMAL FRIENDS (Language & Sound)
     ============================================================ */
  function animalSound(kind) {
    switch (kind) {
      case "cow": WSAudio.tone(140, { dur: 0.7, glide: 90, vol: 0.3 }); break;
      case "sheep": [0, 150, 300].forEach(function (t) { setTimeout(function () { WSAudio.tone(330, { dur: 0.18, glide: 260, vol: 0.22 }); }, t); }); break;
      case "cat": WSAudio.tone(520, { dur: 0.3, glide: 750, vol: 0.22 }); setTimeout(function () { WSAudio.tone(700, { dur: 0.32, glide: 420, vol: 0.2 }); }, 320); break;
      case "dog": [0, 200].forEach(function (t) { setTimeout(function () { WSAudio.noise({ dur: 0.12, vol: 0.28, freq: 900, filter: "bandpass" }); WSAudio.tone(160, { dur: 0.1, vol: 0.18 }); }, t); }); break;
      case "duck": [0, 150, 300].forEach(function (t) { setTimeout(function () { WSAudio.tone(380, { dur: 0.1, glide: 300, vol: 0.2 }); }, t); }); break;
      case "frog": [0, 170, 340].forEach(function (t) { setTimeout(function () { WSAudio.tone(95, { dur: 0.2, glide: 70, vol: 0.28 }); }, t); }); break;
      case "bird": [0, 140, 280].forEach(function (t) { setTimeout(function () { WSAudio.tone(1900, { dur: 0.1, glide: 2500, vol: 0.1, type: "sine" }); }, t); }); break;
      case "lion": WSAudio.noise({ dur: 0.5, vol: 0.22, freq: 400, filter: "lowpass" }); WSAudio.tone(85, { dur: 0.8, glide: 55, vol: 0.28 }); break;
      case "pig": [0, 220].forEach(function (t) { setTimeout(function () { WSAudio.tone(220, { dur: 0.16, glide: 140, vol: 0.24 }); }, t); }); break;
      case "horse": WSAudio.noise({ dur: 0.4, vol: 0.2, freq: 1400, filter: "highpass" }); WSAudio.tone(500, { dur: 0.5, glide: 240, vol: 0.16 }); break;
      case "owl": [0, 420].forEach(function (t) { setTimeout(function () { WSAudio.tone(320, { dur: 0.3, glide: 260, vol: 0.22 }); }, t); }); break;
      case "bee": WSAudio.noise({ dur: 0.7, vol: 0.12, freq: 2200, filter: "bandpass" }); break;
      case "elephant": WSAudio.tone(300, { dur: 0.8, glide: 90, vol: 0.3 }); break;
      case "mouse": WSAudio.tone(1600, { dur: 0.12, glide: 2100, vol: 0.12 }); break;
    }
  }

  function animalsLab(stage, band) {
    const B = band || "12-24";
    const ANIMALS = [
      { emoji: "🐮", name: "cow", says: "moo", kind: "cow" },
      { emoji: "🐑", name: "sheep", says: "baa baa", kind: "sheep" },
      { emoji: "🐱", name: "cat", says: "meow", kind: "cat" },
      { emoji: "🐶", name: "dog", says: "woof woof", kind: "dog" },
      { emoji: "🦆", name: "duck", says: "quack quack", kind: "duck" },
      { emoji: "🐸", name: "frog", says: "ribbit", kind: "frog" },
      { emoji: "🐦", name: "bird", says: "tweet tweet", kind: "bird" },
      { emoji: "🦁", name: "lion", says: "ROAR", kind: "lion" },
      { emoji: "🐷", name: "pig", says: "oink oink", kind: "pig" },
      { emoji: "🐴", name: "horse", says: "neigh", kind: "horse" },
      { emoji: "🦉", name: "owl", says: "hoo hoo", kind: "owl" },
      { emoji: "🐝", name: "bee", says: "buzz buzz", kind: "bee" },
      { emoji: "🐘", name: "elephant", says: "trumpet!", kind: "elephant" },
      { emoji: "🐭", name: "mouse", says: "squeak", kind: "mouse" },
    ];

    tabs(stage, ["🐮 Animal Sounds", "🔎 Find the Animal"], function (content, idx) {
      const prompt = el("div", { class: "prompt-banner", text: idx === 0 ? "Tap an animal to hear it talk! 🔊" : "" });
      content.appendChild(prompt);
      const grid = el("div", { class: "animal-grid" });
      content.appendChild(grid);

      if (idx === 0) {
        ANIMALS.forEach(function (a) {
          const t = el("button", { class: "animal-tile", text: a.emoji });
          t.addEventListener("click", function () {
            animalSound(a.kind);
            t.classList.remove("speaking"); void t.offsetWidth; t.classList.add("speaking");
            WSAudio.speak(PS("animalSays", { a: a.name, s: a.says }, "The " + a.name + " says " + a.says + "!"));
            prompt.textContent = P("animalSays", { a: a.name, s: a.says }, "The " + a.name + " says " + a.says + "!") + " 🔊";
          });
          grid.appendChild(t);
        });
      } else {
        let round = 0, target = null, locked = false;
        function nextRound() {
          locked = false;
          target = ANIMALS[(Math.random() * ANIMALS.length) | 0];
          const soundOnly = B === "24-36" && round % 2 === 1;
          if (soundOnly) {
            prompt.innerHTML = P("whoSays", { s: "<span class='hl'>" + target.says.toUpperCase() + "</span>" }, "Who says <span class='hl'>" + target.says.toUpperCase() + "</span>? 🔊");
            animalSound(target.kind);
            WSAudio.speak(PS("whoSound", null, "Who makes that sound?"));
          } else {
            prompt.innerHTML = P("findAnimal", { a: "<span class='hl'>" + target.name.toUpperCase() + "</span>" }, "Tap the <span class='hl'>" + target.name.toUpperCase() + "</span>! 🔎");
            WSAudio.speak(PS("whereAnimal", { a: target.name }, "Where is the " + target.name + "?"));
          }
          grid.innerHTML = "";
          const others = ANIMALS.filter(function (a) { return a !== target; }).sort(function () { return Math.random() - 0.5; }).slice(0, B === "6-12" ? 2 : B === "24-36" ? 5 : 3);
          [target].concat(others).sort(function () { return Math.random() - 0.5; }).forEach(function (a) {
            const t = el("button", { class: "animal-tile", text: a.emoji });
            t.addEventListener("click", function (ev) {
              if (locked) return;
              if (a === target) {
                locked = true;
                animalSound(a.kind);
                t.classList.add("speaking");
                WSAudio.speak(PS("yesAnimal", { a: a.name, s: a.says }, "Yes! The " + a.name + "! " + a.says + "!"));
                earnStar(t);
                WSFX.sparkle(ev.clientX, ev.clientY);
                round++;
                if (round >= 5) setTimeout(function () { prompt.textContent = P("allFoundTrophy", null, "You found them all! 🏆"); bigCelebrate(P("animalExpert", null, "Animal expert! ⭐")); }, 800);
                else setTimeout(nextRound, 1400);
              } else {
                t.classList.remove("wiggle"); void t.offsetWidth; t.classList.add("wiggle");
                WSAudio.play("wrong");
                WSAudio.speak(PS("wrongAnimal", { c: a.name, t: target.name }, "That's the " + a.name + ". Find the " + target.name + "!"));
              }
            });
            grid.appendChild(t);
          });
        }
        nextRound();
      }
    });
  }

  /* ============================================================
     SHADOW PUPPETS (Light & Shadow)
     ============================================================ */
  function shadowsLab(stage, band) {
    const B = band || "12-24";
    tabs(stage, ["🔦 Shadow Match", "🌗 Move the Light"], function (content, idx) {
      if (idx === 1) return lightPlay(content);
      const ITEMS = ["🐘", "🦒", "🚗", "🌂", "🎈", "🐟", "🚀", "🌳", "🐢", "🎩", "🦖", "🛸", "🐊", "🦋", "🍉", "🚁", "⛄", "🎸"];
      const prompt = el("div", { class: "prompt-banner", text: K("x.whoShadow", "Who makes this shadow? 🔦") });
      content.appendChild(prompt);
      const sil = el("div", { class: "silhouette" });
      content.appendChild(sil);
      const choices = el("div", { class: "shadow-choices" });
      content.appendChild(choices);
      let round = 0, locked = false, target = null;

      function nextRound() {
        locked = false;
        const pool = ITEMS.slice();
        target = pool.splice((Math.random() * pool.length) | 0, 1)[0];
        const opts = [target].concat(pool.sort(function () { return Math.random() - 0.5; }).slice(0, B === "6-12" ? 1 : B === "24-36" ? 3 : 2));
        sil.textContent = target;
        prompt.textContent = "Who makes this shadow? 🔦";
        WSAudio.speak(PS("whoShadow", null, "Who makes this shadow?"));
        choices.innerHTML = "";
        opts.sort(function () { return Math.random() - 0.5; }).forEach(function (o) {
          const b = el("button", { class: "shadow-choice", text: o });
          b.addEventListener("click", function (ev) {
            if (locked) return;
            if (o === target) {
              locked = true;
              b.classList.add("right");
              WSAudio.play("cheer");
              earnStar(b);
              WSFX.sparkle(ev.clientX, ev.clientY);
              WSAudio.speak(PS("shadowBelongs", { x: o }, "Yes! The shadow belongs to the " + o + "!"));
              round++;
              if (round >= 5) setTimeout(function () { prompt.textContent = P("shadowMaster", null, "Shadow master! 🌟"); bigCelebrate(P("fiveShadows", null, "Five shadows matched! ⭐")); }, 700);
              else setTimeout(nextRound, 1200);
            } else {
              b.classList.remove("wiggle"); void b.offsetWidth; b.classList.add("wiggle");
              WSAudio.play("wrong");
              WSAudio.speak(PS("lookShapeAgain", null, "Look at the shape again — try another!"));
            }
          });
          choices.appendChild(b);
        });
      }
      nextRound();
    });

    function lightPlay(content) {
      content.appendChild(el("div", { class: "prompt-banner", text: P("torchPrompt", null, "Move the torch — watch the shadow jump! 🔦") }));
      const scene = el("div", { class: "lightscene" });
      content.appendChild(scene);
      const light = el("div", { class: "ls-light", text: "🔦" });
      const obj = el("div", { class: "ls-obj", text: "🧸" });
      const shadow = el("div", { class: "ls-shadow" });
      scene.appendChild(shadow); scene.appendChild(obj); scene.appendChild(light);
      const row = el("div", { class: "flex-center", style: { paddingTop: "14px" } });
      const slider = el("input", { type: "range", min: "0", max: "100", value: "20" });
      slider.style.width = "60%";
      function apply() {
        const v = slider.value / 100;
        light.style.left = (6 + v * 82) + "%";
        const objX = 46;
        const dir = objX + 8 - (6 + v * 82);
        shadow.style.left = (objX + 6 + dir * 0.9) + "%";
        shadow.style.width = (70 + Math.abs(dir) * 1.6) + "px";
        shadow.style.height = (18 + Math.abs(dir) * 0.2) + "px";
      }
      slider.addEventListener("input", function () { apply(); WSAudio.tone(300 + slider.value * 4, { dur: 0.05, vol: 0.04, type: "sine" }); });
      row.appendChild(el("span", { text: "🔦←" })); row.appendChild(slider); row.appendChild(el("span", { text: "→🔦" }));
      content.appendChild(row);
      content.appendChild(el("p", { class: "guide-note", text: K("x.lightNote", "Light on the left → shadow on the right. Light travels in straight lines and the teddy blocks it!") }));
      apply();
    }
  }


  /* ============================================================
     LEARN-THEN-PLAY — every lab introduces its concept FIRST
     ============================================================ */
  function shapeIntroSVG(kind, fill) {
    if (kind === "circle") return `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="${fill}"/></svg>`;
    if (kind === "square") return `<svg viewBox="0 0 100 100"><rect x="8" y="8" width="84" height="84" rx="10" fill="${fill}"/></svg>`;
    return `<svg viewBox="0 0 100 100"><path d="M50 8 L94 88 L6 88 Z" fill="${fill}"/></svg>`;
  }

  const LAB_INTROS = {
    color: { slides: [
      { html: balloonSVG("#F04E3E"), word: "RED", say: "This is red! Like an apple!", sub: "🍎 Like an apple!" },
      { html: balloonSVG("#3E7BF0"), word: "BLUE", say: "This is blue! Like the sky!", sub: "🌤️ Like the sky!" },
      { html: balloonSVG("#FFC545"), word: "YELLOW", say: "This is yellow! Like the sun!", sub: "☀️ Like the sun!" },
      { html: balloonSVG("#3DBE5F"), word: "GREEN", say: "This is green! Like grass!", sub: "🌿 Like grass!" },
      { html: balloonSVG("#F06595"), word: "PINK", say: "This is pink! Like a flamingo!", sub: "🦩 Like a flamingo!" },
      { html: balloonSVG("#8A5A33"), word: "BROWN", say: "This is brown! Like a teddy bear!", sub: "🐻 Like a teddy bear!" },
      { html: balloonSVG("#17A2A2"), word: "TEAL", say: "This is teal! Like a duck egg!", sub: "🥚 Like a duck egg!" },
      { html: balloonSVG("#B57EDC"), word: "LAVENDER", say: "This is lavender! Like the flower!", sub: "🪻 Like the flower!" },
    ]},
    math: { slides: [
      { html: "<span>🍎</span>", word: "ONE", say: "One apple! One!", sub: "1" },
      { html: "<span>🍎</span><span>🍎</span>", word: "TWO", say: "Two apples! One, two!", sub: "1, 2" },
      { html: "<span>🍎</span><span>🍎</span><span>🍎</span>", word: "THREE", say: "Three apples! One, two, three!", sub: "1, 2, 3" },
      { html: "<span style='font-size:2.2rem'>🍎</span><span style='font-size:2.2rem'>🍎</span><span style='font-size:2.2rem'>🍎</span><span style='font-size:2.2rem'>🍎</span><span style='font-size:2.2rem'>🍎</span><span style='font-size:2.2rem'>🍎</span><span style='font-size:2.2rem'>🍎</span><span style='font-size:2.2rem'>🍎</span>", word: "…TO 20!", say: "One, two, three — all the way to twenty!", sub: "Big explorers count to 20! 🔢" },
    ]},
    physics: { slides: [
      { html: "<span>⚽</span><span>⬇️</span>", word: "DROP!", say: "Let it go, and it falls down!", sub: "Things fall down — that's gravity!" },
      { html: "<span>⚽</span><span>💥</span>", word: "BOUNCE!", say: "It hits the floor and boings back up!", sub: "Higher drop = bigger bounce!" },
    ]},
    sound: { slides: [
      { html: "<span>🔊</span>", word: "LOUD!", say: "Loud! Like a lion! Roar!", sub: "🦁 Like a lion!" },
      { html: "<span>🔈</span>", word: "quiet…", say: "Quiet… like a little mouse. Shhh.", sub: "🐭 Like a mouse…" },
      { html: "<span>🐦</span><span>🥁</span>", word: "HIGH & LOW", say: "Birds sing high! Drums go low!", sub: "Birds sing high, drums go low!" },
    ]},
    life: { slides: [
      { html: "<span>🌰</span>", word: "SEED", say: "A tiny seed sleeps in the soil.", sub: "A tiny seed sleeps in the soil 🪴" },
      { html: "<span>🌱</span>", word: "SPROUT", say: "Water and sun say: hello, sprout!", sub: "Water + sun = hello, sprout!" },
      { html: "<span>🌻</span>", word: "IT GREW!", say: "It grew! Big and bright!", sub: "Plants need water, sun and time." },
    ]},
    weather: { slides: [
      { html: "<span>☀️</span>", word: "SUNNY", say: "Sunny! Warm and bright!", sub: "Warm and bright!" },
      { html: "<span>🌧️</span>", word: "RAINY", say: "Rainy! Splash, splash, splash!", sub: "Splash, splash, splash!" },
      { html: "<span>💨</span>", word: "WINDY", say: "Windy! Whoosh! The leaves dance!", sub: "Whoosh — the leaves dance!" },
    ]},
    space: { slides: [
      { html: "<span>🌍</span>", word: "EARTH", say: "Earth! Our home. The blue one!", sub: "Our home — the blue one!" },
      { html: "<span>🌙</span>", word: "MOON", say: "The Moon! She visits again and again!", sub: "She visits again and again!" },
      { html: "<span>☀️</span>", word: "SUN", say: "The Sun! Our daytime star!", sub: "Our daytime star!" },
    ]},
    water: { slides: [
      { html: "<span>🛶</span><span>🌊</span>", word: "FLOAT", say: "Float! It stays on top, like a boat!", sub: "Stays on top — like a boat!" },
      { html: "<span>🪨</span><span>⬇️</span>", word: "SINK", say: "Sink! It goes down, like a stone!", sub: "Goes down — like a stone!" },
    ]},
    shapes: { slides: [
      { html: shapeIntroSVG("circle", "#F04E3E"), word: "CIRCLE", say: "Circle! Round and round, like a plate!", sub: "Round like a plate! 🍽️" },
      { html: shapeIntroSVG("square", "#3E7BF0"), word: "SQUARE", say: "Square! Four straight sides, like a box!", sub: "Four straight sides — like a box! 📦" },
      { html: shapeIntroSVG("triangle", "#FFC545"), word: "TRIANGLE", say: "Triangle! Three corners, like a pizza slice!", sub: "Three corners — like a pizza slice! 🍕" },
    ]},
    pattern: { slides: [
      { html: "<span>🔴</span><span>🔵</span><span>🔴</span><span>🔵</span>", word: "A PATTERN!", say: "Red, blue, red, blue! It repeats!", sub: "It repeats: red, blue, red, blue…" },
      { html: "<span>🔴</span><span>🔵</span><span>🔴</span><span>❓</span>", word: "WHAT'S NEXT?", say: "What comes next? You can guess!", sub: "Guessing what's next is early math!" },
    ]},
    sorting: { slides: [
      { html: "<span>🧦</span><span>🧺</span>", word: "SORT!", say: "Sort! Socks go with socks!", sub: "Same goes with same!" },
      { html: "<span>👕</span><span>🧺</span>", word: "GROUPS!", say: "Shirts go with shirts! We make groups!", sub: "Socks with socks, shirts with shirts!" },
    ]},
    animals: { slides: [
      { html: "<span>🐄</span>", word: "COW", say: "Cow! The cow says moo!", sub: "says MOO!" },
      { html: "<span>🐑</span>", word: "SHEEP", say: "Sheep! The sheep says baa!", sub: "says BAA!" },
      { html: "<span>🐶</span>", word: "DOG", say: "Dog! The dog says woof woof!", sub: "says WOOF!" },
    ]},
    shadows: { slides: [
      { html: "<span>🔦</span>", word: "LIGHT", say: "Light travels straight, like an arrow!", sub: "Light travels straight!" },
      { html: "<span style='filter:brightness(0)'>🧸</span>", word: "SHADOW", say: "The teddy blocks the light and makes a shadow!", sub: "Block the light → shadow!" },
    ]},
  };

  function renderIntro(stage, intro, onDone, labId) {
    const wrap = el("div", { class: "intro-stage" });
    wrap.appendChild(el("button", { class: "intro-skip", text: T("skip", "Skip ⏭"), onclick: function () { WSAudio.play("tap"); onDone(); } }));
    const card = el("div", { class: "intro-card" });
    const bar = el("div", { class: "intro-bar" });
    wrap.appendChild(card);
    wrap.appendChild(bar);
    stage.appendChild(wrap);
    let i = 0;
    function show() {
      const s = intro.slides[i];
      const last = i === intro.slides.length - 1;
      card.innerHTML = "";
      card.appendChild(el("div", { class: "intro-lead", text: T("learn", "📖 First, let's learn!") }));
      card.appendChild(el("div", { class: "intro-visual", html: s.html }));
      const loc = labId ? CI(labId, i, null) : null;
      const wordTxt = loc ? loc[0] : s.word;
      const sayTxt = loc ? loc[1] : (s.say || s.word);
      card.appendChild(el("div", { class: "intro-word", text: wordTxt }));
      if (s.sub && !loc) card.appendChild(el("div", { class: "intro-sub", text: s.sub }));
      bar.innerHTML = "";
      intro.slides.forEach(function (_, k) { bar.appendChild(el("span", { class: "intro-dot" + (k === i ? " on" : "") })); });
      card.appendChild(el("button", { class: "intro-next" + (last ? " play" : ""), text: last ? T("play", "▶ Let's play!") : T("next", "Next ➜"),
        onclick: function () { WSAudio.play("pop"); if (last) onDone(); else { i++; show(); } } }));
      try { WSAudio.speak(sayTxt); } catch (e) {}
    }
    show();
  }

  /* ---------- Lab registry ---------- */
  const LAB_BUILDERS = {
    color: { title: "Colour Lab", emoji: "🎨", build: colorLab,
      parentNote: "Name colours out loud as your child taps. At 4–7 months, high-contrast and single colours hold attention best.",
      realworld: "Go on a colour hunt: “Can you find something RED in this room?” Point and name everything you find." },
    math: { title: "Math Wonder Lab", emoji: "🔢", build: mathLab,
      parentNote: "Counting here is one-to-one: each tap = one object = one number word. Count real snacks at mealtime the same way.",
      realworld: "Count real things today: stairs as you climb, grapes on a plate, cars out the window. Big explorers count all the way to 20!" },
    physics: { title: "Physics Playground", emoji: "⚽", build: physicsLab,
      parentNote: "Cause and effect is the brain's first science. Narrate: “You tapped — the ball fell! Higher drop = bigger bounce.”",
      realworld: "Drop a soft ball from your knee, then from up high. Ask: “Which bounce was bigger?”" },
    sound: { title: "Light & Sound Lab", emoji: "🎼", build: soundLab,
      parentNote: "Loud vs. quiet and high vs. low are the building blocks of music AND language. Copy the patterns together!",
      realworld: "Make a spoon drum on 3 pots. Which sounds highest? Which sounds lowest?" },
    life: { title: "Life Lab", emoji: "🌱", build: lifeLab,
      parentNote: "Growth takes time — watering daily teaches patience and care. Ask: “What did the plant need today?”",
      realworld: "Plant a bean in a cup with wet cotton wool on a windowsill. Water it together every morning." },
    weather: { title: "Earth & Weather", emoji: "🌦️", build: weatherLab,
      parentNote: "Day/night and weather are your child's first astronomy and earth science. Tonight, watch the real sunset together.",
      realworld: "Step outside right now: is it sunny, cloudy, windy or rainy? Say it together and look at the sky." },
    space: { title: "Space World", emoji: "🪐", build: spaceLab,
      parentNote: "No facts to memorise — just the wonder of movement. “The Moon visits the Earth again and again!”",
      realworld: "Tonight, find the Moon together. Does it look the same as yesterday? The Moon changes shape every night!" },
    water: { title: "Float & Sink Lab", emoji: "🛁", build: waterLab,
      parentNote: "Prediction is a giant thinking skill. For 24–36m, always ask “Sink or float?” BEFORE tapping — then celebrate either answer.",
      realworld: "At bath time: test 3 safe toys. Predict first, then splash and check!" },
    shapes: { title: "Shape Safari", emoji: "🔷", build: shapesLab,
      parentNote: "Shape recognition comes before letters and numbers. Name every shape out loud — even the ones in your kitchen (plates are circles!).",
      realworld: "Shape hunt at home: find a circle, a square and a triangle. Doors, clocks, crackers — shapes are everywhere!" },
    pattern: { title: "Pattern Party", emoji: "🔁", build: patternLab,
      parentNote: "Predicting what comes next is early algebra. Say the pattern out loud together: “red, blue, red, blue… what's next?”",
      realworld: "Make a pattern with snacks or blocks: grape, cracker, grape, cracker… what comes next?" },
    sorting: { title: "Sorting Station", emoji: "🧺", build: sortingLab,
      parentNote: "Sorting is classification — the foundation of science and logic. At home, sorting laundry or toys counts as practice!",
      realworld: "Laundry time: your child sorts socks from shirts, or whites from colours. Real sorting, real help." },
    animals: { title: "Animal Friends", emoji: "🐮", build: animalsLab,
      parentNote: "Animal sounds are often a baby's first words — they're pure syllables (moo, baa, woof). Copy every sound back with delight!",
      realworld: "Next walk or farm visit, listen for real animals. Can your child make the sound before you say the name?" },
    shadows: { title: "Shadow Puppets", emoji: "🔦", build: shadowsLab,
      parentNote: "Shadows teach that light travels straight and objects block it — physics you can see. Torch games work beautifully at bedtime.",
      realworld: "Darken a room, grab a torch and make shadow rabbits and birds on the wall with your hands." },
  };

  window.WSWorldInternals = {
    LABS: LABS, LAB_BUILDERS: LAB_BUILDERS, tabs: tabs, earnStar: earnStar,
    bigCelebrate: bigCelebrate, toast: toast, balloonSVG: balloonSVG,
    state: function () { return S; },
  };

  WSRouter.register("#/world", function (view, param) {
    if (!param || !LAB_BUILDERS[param]) return hub(view);
    const cfg = LAB_BUILDERS[param];
    labShell(view, {
      id: param, title: cfg.title, emoji: cfg.emoji, parentNote: cfg.parentNote, realworld: cfg.realworld,
      build: function (stage, band) { return cfg.build(stage, band); },
    });
  });
})();
