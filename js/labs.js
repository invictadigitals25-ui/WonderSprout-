/* ============================================================
   WonderSprout Labs — Worlds, Simulations & the Engine
   ============================================================ */

(function () {
  "use strict";

  WSRouter.register("#/labs", function (view) {
    view.appendChild(el("span", { class: "eyebrow", text: (typeof WSI18n !== "undefined" ? WSI18n.k("labs.eyebrow", "WonderSprout Labs") : "WonderSprout Labs") }));
    view.appendChild(el("h1", { class: "section-title", text: (typeof WSI18n !== "undefined" ? WSI18n.k("labs.title", "One engine, fourteen worlds 🧪") : "One engine, fourteen worlds 🧪") }));
    view.appendChild(el("p", { class: "section-sub", text: (typeof WSI18n !== "undefined" ? WSI18n.k("labs.sub", "Labs are built on a reusable simulation layer — not isolated lessons. The same simulation deepens as your child grows: watched at 6 months, tapped at 12, predicted at 30, explained at 36.") : "Labs are built on a reusable simulation layer — not isolated lessons. The same simulation deepens as your child grows: watched at 6 months, tapped at 12, predicted at 30, explained at 36.") }));

    /* Simulation-first showcase */
    const simCard = el("div", { class: "card" });
    simCard.appendChild(el("h3", { style: { fontWeight: 900, fontSize: "1.1rem" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("labs.simTitle", "⚽ Simulation-first: one ball, every age") : "⚽ Simulation-first: one ball, every age") }));
    simCard.appendChild(el("p", { style: { fontSize: ".85rem", color: "var(--ink-soft)", margin: "6px 0 14px" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("labs.simTip", "Tap an age to see how the SAME falling-ball simulation grows with the child.") : "Tap an age to see how the SAME falling-ball simulation grows with the child.") }));
    const strip = el("div", { class: "ball-strip" });
    const desc = el("div", { class: "parent-note", style: { margin: "14px 0 0" } });
    WSData.BALL_AGES.forEach(function (b, i) {
      const step = el("button", { class: "ball-step" + (i === 0 ? " on" : "") });
      step.innerHTML = `<div class="b-age">${(typeof WSI18n !== "undefined" ? String(b.age).replace(/m\b/g, WSI18n.k("unit.m", "m")) : b.age)}</div><div class="b-mode">${(typeof WSI18n !== "undefined") ? WSI18n.k("ball" + i + ".m", b.mode) : b.mode}</div>`;
      step.addEventListener("click", function () {
        strip.querySelectorAll(".ball-step").forEach(function (x) { x.classList.remove("on"); });
        step.classList.add("on");
        desc.textContent = (typeof WSI18n !== "undefined") ? WSI18n.k("ball" + i + ".d", b.desc) : b.desc;
        WSAudio.play("tap");
      });
      strip.appendChild(step);
    });
    desc.textContent = (typeof WSI18n !== "undefined") ? WSI18n.k("ball0.d", WSData.BALL_AGES[0].desc) : WSData.BALL_AGES[0].desc;
    simCard.appendChild(strip);
    simCard.appendChild(desc);
    const tryRow = el("div", { class: "flex-center", style: { marginTop: "14px", justifyContent: "flex-start" } });
    const tryBtn = el("button", { class: "btn btn-primary", text: (typeof WSI18n !== "undefined" ? WSI18n.k("labs.openPhysics", "⚽ Open Physics Playground") : "⚽ Open Physics Playground") });
    tryBtn.addEventListener("click", function () { WSRouter.navigate("#/world/physics"); });
    tryRow.appendChild(tryBtn);
    simCard.appendChild(tryRow);
    view.appendChild(simCard);

    /* 14 worlds */
    view.appendChild(el("h2", { class: "section-title mt24", text: (typeof WSI18n !== "undefined" ? WSI18n.k("labs.worldsH2", "The learning worlds") : "The learning worlds") }));
    const grid = el("div", { class: "grid grid-4 mt16" });
    WSData.WORLDS.forEach(function (w, wi) {
      const card = el("div", { class: "card world-card" });
      card.appendChild(el("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } }, [
        el("div", { class: "w-emoji", text: w.emoji }),
        el("span", { class: "badge " + (w.live ? "badge-live" : "badge-soon"), text: (w.live ? (typeof WSI18n !== "undefined" ? WSI18n.k("labs.playable", "Playable") : "Playable") : (typeof WSI18n !== "undefined" ? WSI18n.k("labs.coming", "Coming") : "Coming")) }),
      ]));
      card.appendChild(el("h3", { text: (typeof WSI18n !== "undefined" ? WSI18n.k("w.name" + wi, w.name) : w.name) }));
      card.appendChild(el("p", { text: (typeof WSI18n !== "undefined" ? WSI18n.k("w.focus" + wi, w.focus) : w.focus) }));
      if (w.live && w.route) {
        const b = el("button", { class: "btn btn-soft", style: { padding: "9px 16px", fontSize: ".82rem", marginTop: "4px" }, text: w.route.indexOf("#/world") === 0 ? (typeof WSI18n !== "undefined" ? WSI18n.k("labs.openChild", "Open for child →") : "Open for child →") : (typeof WSI18n !== "undefined" ? WSI18n.k("labs.open", "Open →") : "Open →") });
        b.addEventListener("click", function () { WSAudio.play("pop"); WSRouter.navigate(w.route); });
        card.appendChild(b);
      }
      grid.appendChild(card);
    });
    view.appendChild(grid);

    /* Simulation templates */
    view.appendChild(el("h2", { class: "section-title mt24", text: (typeof WSI18n !== "undefined" ? WSI18n.kf("labs.tmplCount", { n: WSData.SIM_TEMPLATES.length }, "{n} simulation templates") : (WSData.SIM_TEMPLATES.length + " simulation templates")) }));
    view.appendChild(el("p", { class: "section-sub", text: (typeof WSI18n !== "undefined" ? WSI18n.k("labs.tmplSub", "Every activity is assembled from reusable templates with variables, age bands and prediction modes — so new content never starts from zero.") : "Every activity is assembled from reusable templates with variables, age bands and prediction modes — so new content never starts from zero.") }));
    const tgrid = el("div", { class: "grid grid-4 mt16" });
    WSData.SIM_TEMPLATES.forEach(function (t, ti) {
      const card = el("div", { class: "card", style: { padding: "16px", display: "flex", alignItems: "center", gap: "10px" } });
      card.appendChild(el("span", { style: { fontSize: "1.5rem" }, text: t.emoji }));
      const box = el("div", { style: { flex: "1" } });
      box.appendChild(el("b", { style: { fontSize: ".9rem" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("sim" + ti + ".n", t.name) : t.name) }));
      box.appendChild(el("div", {}, [el("span", { class: "badge " + (t.live ? "badge-live" : "badge-soon"), text: (typeof WSI18n !== "undefined") ? (t.live ? WSI18n.k("sim.live", "Live") : WSI18n.k("sim.soon", "Soon")) : (t.live ? "Live" : "Soon") })]));
      card.appendChild(box);
      if (t.live && t.route) {
        card.style.cursor = "pointer";
        card.addEventListener("click", function () { WSAudio.play("pop"); WSRouter.navigate(t.route); });
      }
      tgrid.appendChild(card);
    });
    view.appendChild(tgrid);

    /* Curriculum hierarchy */
    const h = el("div", { class: "card mt24 center" });
    h.appendChild(el("h3", { style: { fontWeight: 900 }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("labs.howH3", "How content is organised") : "How content is organised") }));
    const chain = el("div", { class: "loop-strip mt16" });
    ["DOMAIN", "SUBDOMAIN", "SKILL", "CONCEPT", "ACTIVITY", "OBSERVATION", "EXPOSURE / MASTERY"].forEach(function (rawStep, i) {
      const step = (typeof WSI18n !== "undefined") ? WSI18n.k("steps" + i, rawStep) : rawStep;
      if (i) chain.appendChild(el("span", { class: "loop-arrow", text: "→" }));
      chain.appendChild(el("span", { class: "loop-step", text: step }));
    });
    h.appendChild(chain);
    h.appendChild(el("p", { style: { fontSize: ".86rem", color: "var(--ink-soft)", marginTop: "14px", lineHeight: "1.6" }, html: (typeof WSI18n !== "undefined" ? WSI18n.k("labs.example", "Example: <b>Mathematics → Quantity → More/Less → Compare two groups → two toy groups → parent observation.</b> Every activity carries metadata — age range, learning goal, real-world extension, safety notes — so recommendations and reports always explain themselves.") : "Example: <b>Mathematics → Quantity → More/Less → Compare two groups → two toy groups → parent observation.</b> Every activity carries metadata — age range, learning goal, real-world extension, safety notes — so recommendations and reports always explain themselves.") }));
    view.appendChild(h);

    /* Themes */
    const th = el("div", { class: "card mt24" });
    th.appendChild(el("h3", { style: { fontWeight: 900 }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("labs.monthlyThemes", "🗓️ Monthly themes") : "🗓️ Monthly themes") }));
    th.appendChild(el("p", { style: { fontSize: ".85rem", color: "var(--ink-soft)", margin: "6px 0 12px" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("labs.themeSub", "One theme per month, explored across every world — science, language, music, stories and physical play.") : "One theme per month, explored across every world — science, language, music, stories and physical play.") }));
    const chipRow = el("div", { class: "flex-center", style: { justifyContent: "flex-start" } });
    WSData.MONTHLY_THEMES.forEach(function (t, i) {
      chipRow.appendChild(el("span", { class: "chip " + ["", "sun", "sky", "mint", "lav", "coral"][i % 6], text: (i + 1) + ". " + (typeof WSI18n !== "undefined" ? WSI18n.k("mt" + i, t) : t) }));
    });
    th.appendChild(chipRow);
    view.appendChild(th);
  });
})();
