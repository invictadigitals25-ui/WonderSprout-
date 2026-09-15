/* ============================================================
   WonderSprout — Platform Home (the umbrella brand page)
   ============================================================ */

(function () {
  "use strict";

  function hero() {
    const wrap = el("section", { class: "hero" });
    wrap.innerHTML = `
      <div class="hero-logo">${WSRouter.LOGO_SVG}</div>
      <h1 class="wordmark">Wonder<em>Sprout</em></h1>
      <div class="tagline">${WSI18n.k("h.tag1", "Little minds")}<span class="dot">.</span> ${WSI18n.k("h.tag2", "Big wonders")}<span class="dot">.</span></div>
      <p class="philosophy">${WSI18n.k("h.phil", "")}</p>
      <div class="senses-row">
        <div class="sense-chip"><span>👀</span> ${WSI18n.k("s.see", "See")}</div>
        <div class="sense-chip"><span>👂</span> ${WSI18n.k("s.hear", "Hear")}</div>
        <div class="sense-chip"><span>✋</span> ${WSI18n.k("s.touch", "Touch")}</div>
        <div class="sense-chip"><span>🧭</span> ${WSI18n.k("s.explore", "Explore")}</div>
        <div class="sense-chip"><span>✨</span> ${WSI18n.k("s.wonder", "Wonder")}</div>
      </div>
      <div class="cta-row">
        <button class="btn btn-primary" id="cta-world">${WSI18n.k("cta.world", "🌍 Open Wonder World")}</button>
        <button class="btn btn-soft" id="cta-parent">${WSI18n.k("cta.parent", "🏠 Parent Dashboard")}</button>
      </div>`;
    setTimeout(function () {
      const w = document.getElementById("cta-world");
      const p = document.getElementById("cta-parent");
      if (w) w.addEventListener("click", function () { WSAudio.play("sparkle"); WSRouter.navigate("#/world"); });
      if (p) p.addEventListener("click", function () { WSAudio.play("tap"); WSRouter.navigate("#/parent"); });
    }, 0);
    return wrap;
  }

  function ecosystem() {
    const wrap = el("section");
    wrap.appendChild(el("span", { class: "eyebrow", text: WSI18n.k("e.eyebrow", "One platform · ten worlds") }));
    wrap.appendChild(el("h2", { class: "section-title", text: WSI18n.k("e.title", "The WonderSprout Ecosystem") }));
    wrap.appendChild(el("p", { class: "section-sub", text: WSI18n.k("e.sub", "Every part of WonderSprout works together.") }));
    const grid = el("div", { class: "grid grid-3 mt16" });
    WSData.ECOSYSTEM.forEach(function (eco, ecoIdx) {
      const card = el("a", { class: "eco-card", href: eco.route });
      card.innerHTML = `
        <div class="eco-icon" style="background:${eco.tint}">${eco.emoji}</div>
        <h3>${WSI18n.k("eco" + ecoIdx + ".n", eco.name)}</h3>
        <p>${WSI18n.k("eco" + ecoIdx + ".d", eco.desc)}</p>
        <span class="eco-go">${WSI18n.k("e.go", "Explore →")}</span>`;
      grid.appendChild(card);
    });
    wrap.appendChild(grid);
    return wrap;
  }

  function loopSection() {
    const wrap = el("section", { class: "card" });
    wrap.appendChild(el("h3", { class: "section-title", style: { fontSize: "1.3rem" }, text: WSI18n.k("l.title", "The core learning loop") }));
    wrap.appendChild(el("p", { class: "section-sub", text: WSI18n.k("l.sub", "Every WonderSprout experience moves through the same loop — and always returns to the real world.") }));
    const strip = el("div", { class: "loop-strip mt16" });
    WSData.LEARNING_LOOP.forEach(function (step, i) {
      step = WSI18n.k("loop" + i, step);
      if (i) strip.appendChild(el("span", { class: "loop-arrow", text: "→" }));
      strip.appendChild(el("span", { class: "loop-step", text: step }));
    });
    wrap.appendChild(strip);

    const levels = el("div", { class: "grid grid-4 mt24" });
    WSData.LEVELS.forEach(function (lv, lvIdx) {
      levels.appendChild(el("div", { class: "card", style: { boxShadow: "none", border: "1.5px dashed var(--line)" } }, [
        el("div", { style: { fontSize: "1.7rem" }, text: lv.emoji }),
        el("b", { text: WSI18n.k("lvl" + lvIdx + ".n", lv.name) }),
        el("p", { style: { fontSize: ".82rem", color: "var(--ink-soft)", marginTop: "4px", lineHeight: "1.5" }, text: WSI18n.k("lvl" + lvIdx + ".d", lv.desc) }),
      ]));
    });
    wrap.appendChild(el("h4", { style: { fontWeight: 900, marginTop: "26px" }, text: WSI18n.k("l.levels", "Four experience levels — growing with your child") }));
    wrap.appendChild(levels);
    return wrap;
  }

  function signature() {
    const items = [
      { emoji: "🌅", title: "Wonder of the Day", desc: "One curiosity question each day with six micro-experiences — 30 seconds to 3 minutes each." },
      { emoji: "🗓️", title: "Weekly & Monthly Themes", desc: "One theme — like Water — explored through science, language, music, stories and physical play." },
      { emoji: "🍎", title: "Wonder Object", desc: "Any safe real-world object becomes a multi-domain learning opportunity via Wonder Cards." },
      { emoji: "🌉", title: "Two-Way Bridge", desc: "Every digital concept offers “Try it in real life” — and every real object can open its Wonder World." },
    ];
    const wrap = el("section");
    wrap.appendChild(el("span", { class: "eyebrow", text: WSI18n.k("sg.eyebrow", "Signature experiences") }));
    wrap.appendChild(el("h2", { class: "section-title", text: WSI18n.k("sg.title", "Curiosity is the curriculum") }));
    const grid = el("div", { class: "grid grid-4 mt16" });
    items.forEach(function (it, itIdx) {
      it = { emoji: it.emoji, title: WSI18n.k("sg" + itIdx + ".t", it.title), desc: WSI18n.k("sg" + itIdx + ".d", it.desc) };
      grid.appendChild(el("div", { class: "card" }, [
        el("div", { style: { fontSize: "1.8rem" }, text: it.emoji }),
        el("h3", { style: { fontWeight: 900, fontSize: "1rem", margin: "8px 0 4px" }, text: it.title }),
        el("p", { style: { fontSize: ".85rem", color: "var(--ink-soft)", lineHeight: "1.55" }, text: it.desc }),
      ]));
    });
    wrap.appendChild(grid);
    return wrap;
  }

  function principles() {
    const wrap = el("section", { class: "card green-card" });
    wrap.innerHTML = `
      <span class="eyebrow" style="background:rgba(255,255,255,.18); color:#fff">${WSI18n.k("pr.eyebrow", "The promise")}</span>
      <h3 style="font-size:1.35rem">${WSI18n.k("pr.h", "Not a digital babysitter. A doorway to the world.")}</h3>
      <p style="max-width:760px">${WSI18n.k("pr.p", "")}</p>`;
    const chips = el("div", { class: "flex-center", style: { marginTop: "16px" } });
    [WSI18n.k("pr.c1", "No ads — ever"), WSI18n.k("pr.c2", "No child rankings"), WSI18n.k("pr.c3", "No diagnosis"), WSI18n.k("pr.c4", "Minimal data"), WSI18n.k("pr.c5", "Parent-controlled")].forEach(function (t) {
      chips.appendChild(el("span", { class: "chip", style: { background: "rgba(255,255,255,.16)", color: "#fff" }, text: "✓ " + t }));
    });
    wrap.appendChild(chips);
    return wrap;
  }

  function curriculumTable() {
    const wrap = el("section");
    wrap.appendChild(el("span", { class: "eyebrow", text: WSI18n.k("cu.eyebrow", "Master curriculum · sample") }));
    wrap.appendChild(el("h2", { class: "section-title", text: WSI18n.k("cu.title", "Built month by month, 3 to 36") }));
    wrap.appendChild(el("p", { class: "section-sub", text: WSI18n.k("cu.sub", "Simulation-first, not lesson-first.") }));
    const tw = el("div", { class: "table-wrap mt16" });
    let rows = WSData.CURRICULUM_MAP.map(function (r, rIdx) {
      const C = function (f) { return WSI18n.k("cur" + rIdx + "." + f, r[f]); };
      return `<tr><td><b>${(typeof WSI18n !== "undefined" ? String(C("age")).replace(/m\b/g, WSI18n.k("unit.m", "m")) : C("age"))}</b></td><td>${C("focus")}</td><td>${C("anim")}</td><td>${C("sim")}</td><td>🌳 ${C("phys")}</td></tr>`;
    }).join("");
    tw.innerHTML = `<table class="table"><thead><tr>
      <th>${WSI18n.k("th.age", "Age")}</th><th>${WSI18n.k("th.focus", "Example focus")}</th><th>${WSI18n.k("th.anim", "Animation")}</th><th>${WSI18n.k("th.sim", "Simulation")}</th><th>${WSI18n.k("th.phys", "Physical bridge")}</th>
    </tr></thead><tbody>${rows}</tbody></table>`;
    wrap.appendChild(tw);
    return wrap;
  }

  function roadmap() {
    const wrap = el("section");
    wrap.appendChild(el("span", { class: "eyebrow", text: WSI18n.k("rm.eyebrow", "Roadmap") }));
    wrap.appendChild(el("h2", { class: "section-title", text: WSI18n.k("rm.title", "From blueprint to launch") }));
    const grid = el("div", { class: "roadmap mt16" });
    WSData.ROADMAP.forEach(function (p, pIdx) {
      grid.appendChild(el("div", { class: "phase" }, [
        el("b", { text: WSI18n.k("rm" + pIdx + ".p", p.phase) + " · " + WSI18n.k("rm" + pIdx + ".t", p.title) }),
        el("span", { text: WSI18n.k("rm" + pIdx + ".d", p.desc) }),
      ]));
    });
    wrap.appendChild(grid);
    return wrap;
  }

  WSRouter.register("#/", function (view) {
    view.appendChild(hero());
    view.appendChild(ecosystem());
    view.appendChild(loopSection());
    view.appendChild(signature());
    view.appendChild(principles());
    view.appendChild(curriculumTable());
    view.appendChild(roadmap());
  });
})();
