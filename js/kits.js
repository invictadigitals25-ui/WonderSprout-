/* ============================================================
   WonderSprout Kits — Future Physical Learning Kits
   ============================================================ */

(function () {
  "use strict";

  WSRouter.register("#/kits", function (view) {
    view.appendChild(el("span", { class: "eyebrow", text: (typeof WSI18n !== "undefined" ? WSI18n.k("kits.eyebrow", "WonderSprout Kits · coming soon") : "WonderSprout Kits · coming soon") }));
    view.appendChild(el("h1", { class: "section-title", text: (typeof WSI18n !== "undefined" ? WSI18n.k("kits.title", "Wonder you can hold 📦") : "Wonder you can hold 📦") }));
    view.appendChild(el("p", { class: "section-sub", text: (typeof WSI18n !== "undefined" ? WSI18n.k("kits.sub", "Physical products that connect back to the digital curriculum — never unrelated merchandise. Every card, book and kit opens its Wonder World and feeds observations back to the parent dashboard.") : "Physical products that connect back to the digital curriculum — never unrelated merchandise. Every card, book and kit opens its Wonder World and feeds observations back to the parent dashboard.") }));

    view.appendChild(el("div", { class: "card center", html: `
      <div style="font-size:2rem">🔄</div>
      <b>${(typeof WSI18n !== "undefined" ? WSI18n.k("kits.bridgeTitle", "The Physical-to-Digital Bridge") : "The Physical-to-Digital Bridge")}</b>
      <p style="color:var(--ink-soft); margin-top:6px; max-width:620px; margin-inline:auto; line-height:1.55">${(typeof WSI18n !== "undefined" ? WSI18n.k("kits.bridgeBody", "Scan a Wonder Card and its world opens instantly. Finish a Lab Kit experiment and log the “aha!” moment in the journal. The screen stays the doorway — the kit is the room.") : "Scan a Wonder Card and its world opens instantly. Finish a Lab Kit experiment and log the “aha!” moment in the journal. The screen stays the doorway — the kit is the room.")}</p>` }));



    const grid = el("div", { class: "grid grid-3 mt16" });
    WSData.KITS.forEach(function (k, ki) {
      const card = el("div", { class: "card kit-card" });
      card.innerHTML = `
        <div class="kit-art" style="background:${k.color}">${k.emoji}<span class="badge badge-soon" style="position:absolute; top:14px; right:14px">${(typeof WSI18n !== "undefined" ? WSI18n.k("kits.badgeSoon", "Coming soon") : "Coming soon")}</span></div>
        <div class="kit-body">
          <h3>${(typeof WSI18n !== "undefined" ? WSI18n.k("kit.n" + ki, k.name) : k.name)}</h3>
          <div class="kit-age">${(typeof WSI18n !== "undefined" ? WSI18n.k("kits.ages", "Ages {x}") : "Ages {x}").split("{x}").join((typeof WSI18n !== "undefined" ? String(k.age).replace(/m\b/g, WSI18n.k("unit.m", "m")) : k.age))}</div>
          <p>${(typeof WSI18n !== "undefined" ? WSI18n.k("kit.d" + ki, k.desc) : k.desc)}</p>
          <span class="kit-link">🔗 ${(typeof WSI18n !== "undefined" ? WSI18n.k("kit.l" + ki, k.link) : k.link)}</span>
        </div>`;
      grid.appendChild(card);
    });
    view.appendChild(grid);

    const wait = el("div", { class: "card center mt24" });
    wait.appendChild(el("h3", { style: { fontWeight: 900 }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("kits.beFirst", "Be first to wonder 🌱") : "Be first to wonder 🌱") }));
    wait.appendChild(el("p", { style: { color: "var(--ink-soft)", fontSize: ".9rem", margin: "8px 0 16px" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("kits.waitP", "Join the WonderSprout Kits waitlist — first boxes ship with the Monthly Discovery Box theme calendar.") : "Join the WonderSprout Kits waitlist — first boxes ship with the Monthly Discovery Box theme calendar.") }));
    const row = el("div", { class: "waitlist" });
    const email = el("input", { type: "email", placeholder: (typeof WSI18n !== "undefined" ? WSI18n.k("kits.emailPh", "your@email.com") : "your@email.com") });
    const btn = el("button", { class: "btn btn-primary", text: (typeof WSI18n !== "undefined" ? WSI18n.k("kits.joinBtn", "Join waitlist") : "Join waitlist") });
    btn.addEventListener("click", function () {
      if (!/^\S+@\S+\.\S+$/.test(email.value)) { toast((typeof WSI18n !== "undefined" ? WSI18n.k("kits.emailBad", "Hmm, that email looks incomplete ✏️") : "Hmm, that email looks incomplete ✏️")); return; }
      WSAudio.play("cheer");
      WSFX.celebrate();
      toast(WSI18n.k("x.emailListed", "You're on the list! Welcome to the wonder 🎉"));
      email.value = "";
    });
    row.appendChild(email); row.appendChild(btn);
    wait.appendChild(row);
    view.appendChild(wait);

    view.appendChild(el("div", { class: "card mt24", html: (typeof WSI18n !== "undefined" ? WSI18n.k("kits.safety", "<b>🛡️ Safety first:</b> every physical item passes age-grading, choke-hazard and material-safety checks, and each kit includes parent supervision guidance — mirroring the app's safety rules for materials.") : "<b>🛡️ Safety first:</b> every physical item passes age-grading, choke-hazard and material-safety checks, and each kit includes parent supervision guidance — mirroring the app's safety rules for materials.") }));
  });
})();
