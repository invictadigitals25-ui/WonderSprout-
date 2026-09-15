/* ============================================================
   WonderSprout Camera — Real-World Object Discovery (demo)
   ============================================================ */

(function () {
  "use strict";

  WSRouter.register("#/camera", function (view) {
    view.appendChild(el("span", { class: "eyebrow", text: (typeof WSI18n !== "undefined" ? WSI18n.k("cam.eyebrow", "WonderSprout Camera") : "WonderSprout Camera") }));
    view.appendChild(el("h1", { class: "section-title", text: (typeof WSI18n !== "undefined" ? WSI18n.k("cam.title", "Point. Discover. Wonder. 📷") : "Point. Discover. Wonder. 📷") }));
    view.appendChild(el("p", { class: "section-sub", text: (typeof WSI18n !== "undefined" ? WSI18n.k("cam.sub", "Any safe object can become a lesson. In the full app, the camera recognises real objects; here, tap an object in the demo scene to see the Wonder Card it opens.") : "Any safe object can become a lesson. In the full app, the camera recognises real objects; here, tap an object in the demo scene to see the Wonder Card it opens.") }));

    view.appendChild(el("div", { class: "demo-banner", html: (typeof WSI18n !== "undefined" ? WSI18n.k("cam.demoBanner", "🧪 <b>Demo mode.</b> The production Wonder Camera uses on-device recognition — frames are analysed in the moment and <b>never stored or uploaded</b>. Tap any object below to see what WonderSprout sees.") : "🧪 <b>Demo mode.</b> The production Wonder Camera uses on-device recognition — frames are analysed in the moment and <b>never stored or uploaded</b>. Tap any object below to see what WonderSprout sees.") }));

    /* ---------- Viewfinder scene ---------- */
    const vf = el("div", { class: "viewfinder" });
    const objSVG = WSData.CAMERA_OBJECTS.map(function (o) {
      const x = o.x / 100 * 800, y = o.y / 100 * 600;
      return `<g class="hotspot" data-obj="${o.id}" style="cursor:pointer; pointer-events:all">
        <circle cx="${x}" cy="${y - 18}" r="46" fill="rgba(255,255,255,0)" />
        <text x="${x}" y="${y}" font-size="72" text-anchor="middle">${o.emoji}</text>
      </g>`;
    }).join("");

    vf.innerHTML = `
      <svg class="scene-svg" viewBox="0 0 800 600">
        <rect width="800" height="600" fill="#F7F3EA"/>
        <rect y="0" width="800" height="420" fill="#EFE7D8"/>
        <circle cx="660" cy="90" r="46" fill="#FFF4DC"/><circle cx="660" cy="90" r="34" fill="#FFC545"/>
        <rect x="60" y="120" width="170" height="120" rx="10" fill="#BFE8FF" stroke="#fff" stroke-width="8"/>
        <path d="M60 200 q40 -30 85 0 t85 0" fill="#8ECAE6" opacity=".7"/>
        <rect x="0" y="420" width="800" height="180" fill="#D9C6A5"/>
        <rect x="40" y="400" width="720" height="34" rx="14" fill="#B08E62"/>
        <rect x="90" y="434" width="26" height="140" fill="#9C7A50"/>
        <rect x="684" y="434" width="26" height="140" fill="#9C7A50"/>
        ${objSVG}
      </svg>
      <div class="vf-corner tl"></div><div class="vf-corner tr"></div>
      <div class="vf-corner bl"></div><div class="vf-corner br"></div>
      <div class="cam-hint">${typeof WSI18n !== "undefined" ? WSI18n.k("cam.tapHint", "👆 Tap an object to scan it") : "👆 Tap an object to scan it"}</div>`;
    view.appendChild(vf);

    const resultBox = el("div");
    view.appendChild(resultBox);

    vf.querySelectorAll(".hotspot").forEach(function (g) {
      g.addEventListener("click", function () {
        const obj = WSData.CAMERA_OBJECTS.filter(function (o) { return o.id === g.getAttribute("data-obj"); })[0];
        scan(obj);
      });
    });

    function scan(obj) {
      WSAudio.play("shutter");
      const old = vf.querySelector(".flash"); if (old) old.remove();
      vf.appendChild(el("div", { class: "flash" }));
      const oldScan = vf.querySelector(".scan-line"); if (oldScan) oldScan.remove();
      const sl = el("div", { class: "scan-line" });
      vf.appendChild(sl);
      const hint = vf.querySelector(".cam-hint");
      hint.textContent = (typeof WSI18n !== "undefined" ? WSI18n.k("cam.aiLooking", "🤖 WonderSprout AI is looking…") : "🤖 WonderSprout AI is looking…");
      resultBox.innerHTML = "";
      setTimeout(function () { sl.remove(); }, 2400);
      setTimeout(function () { showResult(obj); hint.textContent = (typeof WSI18n !== "undefined" ? WSI18n.k("cam.tapAnother", "👆 Tap another object to scan it") : "👆 Tap another object to scan it"); }, 2100);
    }

    function showResult(obj) {
      WSAudio.play("sparkle");
      const card = el("div", { class: "card result-card mt16" });
      const head = el("div", { class: "result-head" }, [
        el("div", { class: "result-emoji", text: obj.emoji }),
        el("div", {}, [
          el("div", { style: { fontSize: ".8rem", fontWeight: 800, color: "var(--sprout-deep)", letterSpacing: ".04em" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("cam.aiSees", "✨ WONDERSPROUT AI SEES…") : "✨ WONDERSPROUT AI SEES…") }),
          el("h3", { text: (typeof WSI18n !== "undefined" ? WSI18n.k("cam.its", "It's {x}!") : "It's {x}!").split("{x}").join(typeof WSI18n !== "undefined" ? WSI18n.k("cam.sees." + obj.id, obj.sees) : obj.sees) }),
        ]),
      ]);
      card.appendChild(head);

      const chips = el("div", { class: "flex-center", style: { justifyContent: "flex-start", marginTop: "10px" } });
      chips.appendChild(el("span", { style: { fontSize: ".8rem", fontWeight: 800, color: "var(--ink-soft)" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("cam.opensWorlds", "Opens the worlds:") : "Opens the worlds:") }));
      obj.worlds.forEach(function (w) { var wi = WSData.WORLDS.map(function (x) { return x.name; }).indexOf(w); chips.appendChild(el("span", { class: "chip", text: (wi >= 0 && typeof WSI18n !== "undefined" ? WSI18n.k("w.name" + wi, w) : w) })); });
      card.appendChild(chips);

      const acts = el("div", { class: "act-list" });
      obj.activities.forEach(function (a) {
        acts.appendChild(el("div", { class: "act-item" }, [
          el("span", { class: "a-emoji", text: a.emoji }),
          el("span", { text: (typeof WSI18n !== "undefined" ? WSI18n.k("cam.act." + obj.id + "." + obj.activities.indexOf(a), a.text) : a.text) }),
        ]));
      });
      card.appendChild(acts);

      card.appendChild(el("div", { class: "realworld-card", style: { margin: "16px 0 0" } }, [
        el("div", { class: "rw-emoji", text: "🌳" }),
        el("div", {}, [el("b", { text: (typeof WSI18n !== "undefined" ? WSI18n.k("cam.rwChallenge", "Real-world challenge") : "Real-world challenge") }), el("p", { text: (typeof WSI18n !== "undefined" ? WSI18n.k("cam.rw." + obj.id, obj.realworld) : obj.realworld) })]),
      ]));

      const actions = el("div", { class: "flex-center", style: { marginTop: "16px", justifyContent: "flex-start" } });
      const openBtn = el("button", { class: "btn btn-primary", text: (typeof WSI18n !== "undefined" ? WSI18n.k("cam.openWorld", "🌍 Open its Wonder World") : "🌍 Open its Wonder World") });
      openBtn.addEventListener("click", function () { WSAudio.play("pop"); WSRouter.navigate(obj.labRoute); });
      actions.appendChild(openBtn);
      card.appendChild(actions);

      resultBox.appendChild(card);
      resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      WSAudio.speak((typeof WSI18n !== "undefined" ? WSI18n.k("cam.iSee", "I see {x}! Let's wonder about it!") : "I see {x}! Let's wonder about it!").split("{x}").join(typeof WSI18n !== "undefined" ? WSI18n.k("cam.sees." + obj.id, obj.sees) : obj.sees));
    }

    view.appendChild(el("div", { class: "card mt24", html: (typeof WSI18n !== "undefined" ? WSI18n.k("cam.flow", "<b>👪 The flow:</b> Object recognition → curriculum connection → simulation → activity → real-world challenge. One apple becomes colour, counting AND botany — that's the Wonder Object principle. <b>Safety rule:</b> the camera only suggests objects that are safe to handle; anything small, sharp or hot gets a grown-up warning.") : "<b>👪 The flow:</b> Object recognition → curriculum connection → simulation → activity → real-world challenge. One apple becomes colour, counting AND botany — that's the Wonder Object principle. <b>Safety rule:</b> the camera only suggests objects that are safe to handle; anything small, sharp or hot gets a grown-up warning.") }));
  });
})();
