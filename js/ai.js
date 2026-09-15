/* ============================================================
   WonderSprout AI — Parent Copilot (rule-based demo)
   In production: LLM API + curriculum engine + safety pipeline
   (AI generation → automated checks → human review → publish)
   ============================================================ */

(function () {
  "use strict";
  const S = window.WSState;

  function matchIntent(q) {
    const text = q.toLowerCase();
    let best = null, bestScore = 0;
    WSData.AI_KNOWLEDGE.forEach(function (k) {
      let score = 0;
      k.keywords.forEach(function (kw) { if (text.indexOf(kw) !== -1) score += k.weight; });
      if (score > bestScore) { bestScore = score; best = k; }
    });
    return bestScore > 0 ? best : null;
  }

  WSRouter.register("#/ai", function (view) {
    view.appendChild(el("span", { class: "eyebrow", text: (typeof WSI18n !== "undefined" ? WSI18n.k("ai.eyebrow", "WonderSprout AI") : "WonderSprout AI") }));
    view.appendChild(el("h1", { class: "section-title", text: (typeof WSI18n !== "undefined" ? WSI18n.k("ai.title", "Your parent copilot ✨") : "Your parent copilot ✨") }));
    view.appendChild(el("p", { class: "section-sub", text: (typeof WSI18n !== "undefined" ? WSI18n.k("ai.sub", "Ask anything about playing, learning and wondering with {name}. Answers come from the WonderSprout curriculum engine with strict guardrails: no diagnoses, no medical claims, no rankings — ever.") : "Ask anything about playing, learning and wondering with {name}. Answers come from the WonderSprout curriculum engine with strict guardrails: no diagnoses, no medical claims, no rankings — ever.").split("{name}").join(S.child.name) }));

    const chat = el("div", { class: "chat" });
    const log = el("div", { class: "chat-log" });
    chat.appendChild(log);

    function bubble(html, who) {
      const b = el("div", { class: "bubble " + who, html: html });
      log.appendChild(b);
      log.parentElement.scrollIntoView({ behavior: "smooth", block: "end" });
      return b;
    }

    bubble(`<span class="ai-tag">✨ WonderSprout AI</span>
      ${(typeof WSI18n !== "undefined" ? WSI18n.kf("ai.greeting", { name: S.child.name, m: S.child.months, stage: (typeof WSI18n !== "undefined" ? String(WSData.stageForAge(S.child.months)).replace(/m\b/g, WSI18n.k("unit.m", "m")) : WSData.stageForAge(S.child.months)) }, "Hello! I'm the WonderSprout copilot. I know {name} is <b>{m} months old</b> (stage: <b>{stage}</b>). Ask me what to play today, how screens fit in, what we learned this week — or anything on your mind.") : ("Hello! I'm the WonderSprout copilot. I know " + S.child.name + " is <b>" + S.child.months + " months old</b> (stage: <b>" + WSData.stageForAge(S.child.months) + "</b>). Ask me what to play today, how screens fit in, what we learned this week — or anything on your mind."))}`, "ai");

    const chips = el("div", { class: "q-chips" });
    ["What can we do today?", "How much screen time is OK?", "What did we learn this week?", "It's raining — indoor ideas?", "How does the Wonder Camera work?", "Bedtime routine ideas?", "Car ride activities?", "Big feelings and tantrums?", "Birthday party ideas?"].forEach(function (rawQ, qi) {
      const q = (typeof WSI18n !== "undefined") ? WSI18n.k("ai.q" + qi, rawQ) : rawQ;
      const c = el("button", { class: "q-chip", text: q });
      c.addEventListener("click", function () { ask(q); });
      chips.appendChild(c);
    });
    chat.appendChild(chips);

    const inputRow = el("div", { class: "chat-input-row" });
    const input = el("input", { class: "chat-input", placeholder: (typeof WSI18n !== "undefined" ? WSI18n.k("ai.inputPh", "Ask WonderSprout AI…") : "Ask WonderSprout AI…"), maxlength: "140" });
    const send = el("button", { class: "btn btn-primary", text: (typeof WSI18n !== "undefined" ? WSI18n.k("ai.send", "Send ➤") : "Send ➤") });
    inputRow.appendChild(input); inputRow.appendChild(send);
    chat.appendChild(inputRow);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") ask(input.value); });
    send.addEventListener("click", function () { ask(input.value); });

    chat.appendChild(el("p", { class: "ai-disclaimer", text: (typeof WSI18n !== "undefined" ? WSI18n.k("ai.disclaimer", "WonderSprout AI gives playful ideas and explains learning value — it never diagnoses, ranks children, or replaces healthcare or developmental professionals. Generated content passes safety checks and human review before it reaches your child.") : "WonderSprout AI gives playful ideas and explains learning value — it never diagnoses, ranks children, or replaces healthcare or developmental professionals. Generated content passes safety checks and human review before it reaches your child.") }));
    view.appendChild(chat);

    function ask(q) {
      q = (q || "").trim();
      if (!q) return;
      bubble(escapeHtml(q), "user");
      input.value = "";
      WSAudio.play("send");

      const typing = el("div", { class: "bubble ai", html: '<span class="typing"><i></i><i></i><i></i></span>' });
      log.appendChild(typing);
      setTimeout(function () {
        typing.remove();
        const hit = matchIntent(q);
        const hitI = hit ? WSData.AI_KNOWLEDGE.indexOf(hit) : -1;
        const html = hit
          ? (typeof WSI18n !== "undefined" ? WSI18n.k("ai.r" + hitI, hit.reply()) : hit.reply())
          : (typeof WSI18n !== "undefined" ? WSI18n.k("ai.fallback", WSData.AI_FALLBACK()) : WSData.AI_FALLBACK());
        bubble(html, "ai");
        WSAudio.play("sparkle");
      }, 850);
    }

    function escapeHtml(s) {
      return s.replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    }
  });
})();
