/* ============================================================
   WonderSprout — Flags & Countries + First English
   Registered into the World hub via WSWorldInternals.
   ============================================================ */
(function () {
  "use strict";
  const W = window.WSWorldInternals;
  function TF(k, fb) { return typeof WSI18n !== "undefined" ? WSI18n.t(k) : fb; }
  function FP(key, map, fb) {
    var str = typeof WSI18n !== "undefined" ? WSI18n.cp(key) : null;
    if (!str) str = fb;
    if (map) for (var k in map) str = str.split("{" + k + "}").join(map[k]);
    return str;
  }
  function FSP(key, map, fb) { return FP(key, map, fb).replace(/<[^>]*>/g, ""); }
  if (!W) return;
  const el = WSRouter.el;

  function flag(cc) {
    return cc.toUpperCase().replace(/./g, function (ch) { return String.fromCodePoint(127397 + ch.charCodeAt(0)); });
  }

  /* All UN member states + observers (195) as "code Name" */
  const COUNTRIES = ("AD Andorra,AE United Arab Emirates,AF Afghanistan,AG Antigua and Barbuda,AL Albania,AM Armenia,AO Angola,AR Argentina,AT Austria,AU Australia,AZ Azerbaijan,BA Bosnia and Herzegovina,BB Barbados,BD Bangladesh,BE Belgium,BF Burkina Faso,BG Bulgaria,BH Bahrain,BI Burundi,BJ Benin,BN Brunei,BO Bolivia,BR Brazil,BS Bahamas,BT Bhutan,BW Botswana,BY Belarus,BZ Belize,CA Canada,CD DR Congo,CF Central African Republic,CG Congo,CH Switzerland,CI Côte d'Ivoire,CL Chile,CM Cameroon,CN China,CO Colombia,CR Costa Rica,CU Cuba,CV Cape Verde,CY Cyprus,CZ Czechia,DE Germany,DJ Djibouti,DK Denmark,DM Dominica,DO Dominican Republic,DZ Algeria,EC Ecuador,EE Estonia,EG Egypt,ER Eritrea,ES Spain,ET Ethiopia,FI Finland,FJ Fiji,FM Micronesia,FR France,GA Gabon,GB United Kingdom,GD Grenada,GE Georgia,GH Ghana,GM Gambia,GN Guinea,GQ Equatorial Guinea,GR Greece,GT Guatemala,PS Palestine,GW Guinea-Bissau,GY Guyana,HN Honduras,HR Croatia,HT Haiti,HU Hungary,ID Indonesia,IE Ireland,IL Israel,IN India,IQ Iraq,IR Iran,IS Iceland,IT Italy,JM Jamaica,JO Jordan,JP Japan,KE Kenya,KG Kyrgyzstan,KH Cambodia,KI Kiribati,KM Comoros,KN Saint Kitts and Nevis,KP North Korea,KR South Korea,KW Kuwait,KZ Kazakhstan,LA Laos,LB Lebanon,LC Saint Lucia,LI Liechtenstein,LK Sri Lanka,LR Liberia,LS Lesotho,LT Lithuania,LU Luxembourg,LV Latvia,LY Libya,MA Morocco,MC Monaco,MD Moldova,ME Montenegro,MG Madagascar,MH Marshall Islands,MK North Macedonia,ML Mali,MM Myanmar,MN Mongolia,MR Mauritania,MT Malta,MU Mauritius,MV Maldives,MW Malawi,MX Malaysia? ")
    .replace("MX Malaysia? ", "MX Mexico,") +
    "MY Malaysia,MZ Mozambique,NA Namibia,NE Niger,NG Nigeria,NI Nicaragua,NL Netherlands,NO Norway,NP Nepal,NR Nauru,NZ New Zealand,OM Oman,PA Panama,PE Peru,PG Papua New Guinea,PH Philippines,PK Poland? ".replace("PK Poland? ", "PK Pakistan,") +
    "PL Poland,PT Portugal,PW Palau,PY Paraguay,QA Qatar,RO Romania,RS Serbia,RU Russia,RW Rwanda,SA Saudi Arabia,SB Solomon Islands,SC Seychelles,SD Sudan,SE Sweden,SG Singapore,SI Slovenia,SK Slovakia,SL Sierra Leone,SM San Marino,SN Senegal,SO Somalia,SR Suriname,SS South Sudan,ST São Tomé and Príncipe,SV El Salvador,SY Syria,SZ Eswatini,TD Chad,TG Togo,TH Thailand,TJ Tajikistan,TL Timor-Leste,TM Turkmenistan,TN Tunisia,TO Tonga,TR Türkiye,TT Trinidad and Tobago,TV Tuvalu,TZ Tanzania,UA Ukraine,UG Uganda,US United States,UY Uruguay,UZ Uzbekistan,VA Vatican City,VC Saint Vincent and the Grenadines,VE Venezuela,VN Vietnam,VU Vanuatu,WS Samoa,YE Yemen,ZA South Africa,ZM Zambia,ZW Zimbabwe";

  const ALL = COUNTRIES.split(",").map(function (p) {
    const i = p.indexOf(" ");
    return { code: p.slice(0, i), name: p.slice(i + 1) };
  });

  function teachSlides(band) {
    const pick = ["SA", "US", "CN", "FR", "NG", "BR", "JP", "EG", "IN", "MX", "KE", "DE"];
    const n = band === "6-12" ? 2 : band === "12-24" ? 3 : 4;
    const chosen = [];
    while (chosen.length < n) {
      const c = ALL[(Math.random() * ALL.length) | 0];
      if (pick.indexOf(c.code) !== -1 && !chosen.some(function (x) { return x.code === c.code; })) chosen.push(c);
    }
    return chosen.map(function (c) {
      return { html: "<span>" + flag(c.code) + "</span>", word: c.name.toUpperCase(), name: c.name, say: "This is the flag of " + c.name + "!", sub: flag(c.code) + " " + c.name };
    });
  }

  function teachThen(stage, slides, onDone) {
    const wrap = el("div", { class: "intro-stage" });
    wrap.appendChild(el("button", { class: "intro-skip", text: TF("skip", "Skip ⏭"), onclick: function () { onDone(); } }));
    const card = el("div", { class: "intro-card" });
    const bar = el("div", { class: "intro-bar" });
    wrap.appendChild(card); wrap.appendChild(bar);
    stage.appendChild(wrap);
    let i = 0;
    function show() {
      const sl = slides[i];
      const last = i === slides.length - 1;
      card.innerHTML = "";
      card.appendChild(el("div", { class: "intro-lead", text: TF("learn", "📖 First, let's learn!") }));
      card.appendChild(el("div", { class: "intro-visual", style: { fontSize: "70px" }, html: sl.html }));
      card.appendChild(el("div", { class: "intro-word", text: sl.word }));
      if (sl.sub) card.appendChild(el("div", { class: "intro-sub", text: sl.sub }));
      bar.innerHTML = "";
      slides.forEach(function (_, k) { bar.appendChild(el("span", { class: "intro-dot" + (k === i ? " on" : "") })); });
      card.appendChild(el("button", { class: "intro-next" + (last ? " play" : ""), text: last ? TF("play", "▶ Let's play!") : TF("next", "Next ➜"), onclick: function () { if (last) onDone(); else { i++; show(); } } }));
      try { WSAudio.speak(typeof WSI18n !== "undefined" && WSI18n.lang() !== "en"
        ? FSP("flagOf", { x: sl.name || sl.word }, sl.say) : sl.say); } catch (e) {}
    }
    show();
  }

  function flagsLab(stage, band) {
    const B = band || "12-24";
    teachThen(stage, teachSlides(B), function () { game(); });

    function game() {
      stage.innerHTML = "";
      const prompt = el("div", { class: "prompt-banner", text: "" });
      stage.appendChild(prompt);
      const row = el("div", { class: "flex-center", style: { gap: "16px", padding: "16px 0", flexWrap: "wrap" } });
      stage.appendChild(row);
      let round = 0;
      function next() {
        row.innerHTML = "";
        const target = ALL[(Math.random() * ALL.length) | 0];
        const nOpts = B === "6-12" ? 2 : B === "12-24" ? 3 : 4;
        const others = [];
        while (others.length < nOpts - 1) {
          const c = ALL[(Math.random() * ALL.length) | 0];
          if (c.code !== target.code && !others.some(function (x) { return x.code === c.code; })) others.push(c);
        }
        const askFlag = B !== "24-36" || Math.random() < 0.5;
        prompt.innerHTML = askFlag
          ? FP("whichFlag", { c: "<span class='hl'>" + target.name.toUpperCase() + "</span> " + flag(target.code) }, "Which flag is <span class='hl'>" + target.name.toUpperCase() + "</span>? " + flag(target.code))
          : FSP("whichCountry", null, "Which country has this flag?") + " <span style='font-size:1.6rem'>" + flag(target.code) + "</span>";
        try { WSAudio.speak(askFlag ? FSP("whichFlag", { c: target.name }, "Find the flag of " + target.name) : FSP("whichCountry", null, "Which country has this flag?")); } catch (e) {}
        const opts = [target].concat(others).sort(function () { return Math.random() - 0.5; });
        opts.forEach(function (c) {
          const b = el("button", { class: "flag-tile", style: { fontSize: "2.6rem" }, text: askFlag ? flag(c.code) : c.name });
          if (!askFlag) b.style.fontSize = "1rem";
          b.addEventListener("click", function (ev) {
            if (c.code === target.code) {
              b.classList.add("right");
              WSAudio.play("cheer");
              W.earnStar(b);
              try { WSAudio.speak("Yes! " + target.name + "!"); } catch (e) {}
              round++;
              if (round >= 5) W.bigCelebrate("World traveller! 🌍⭐");
              else setTimeout(next, 1100);
            } else {
              b.classList.remove("wiggle"); void b.offsetWidth; b.classList.add("wiggle");
              WSAudio.play("wrong");
            }
          });
          row.appendChild(b);
        });
      }
      next();
    }
  }

  /* ---------------- First English ---------------- */
  const VOCAB = [
    ["🍎", "apple"], ["🐶", "dog"], ["🐱", "cat"], ["☀️", "sun"], ["🌙", "moon"], ["💧", "water"],
    ["🍌", "banana"], ["🐄", "cow"], ["🐟", "fish"], ["🌳", "tree"], ["⭐", "star"], ["🏠", "house"],
    ["👶", "baby"], ["🥛", "milk"], ["🌸", "flower"], ["🚗", "car"], ["📖", "book"], ["🎈", "balloon"],
  ];
  const SENTENCES = ["I like apples", "The dog is big", "I see the moon", "My cat is soft"];

  function englishLab(stage, band) {
    const B = band || "12-24";
    if (B === "6-12") return hearWords(stage);
    if (B === "12-24") return findWord(stage);
    return buildSentence(stage);

    function hearWords(st) {
      st.appendChild(el("div", { class: "prompt-banner", text: FP("hearWord", null, "Tap a picture — hear the word! 🔊") }));
      const grid = el("div", { class: "animal-grid" });
      VOCAB.slice(0, 9).forEach(function (v) {
        const t = el("button", { class: "animal-tile", text: v[0] });
        t.addEventListener("click", function () {
          WSAudio.play("pop");
          try { WSAudio.speak(v[1], { lang: "en" }); } catch (e) {}
        });
        grid.appendChild(t);
      });
      st.appendChild(grid);
    }

    function findWord(st) {
      const prompt = el("div", { class: "prompt-banner" });
      st.appendChild(prompt);
      const row = el("div", { class: "flex-center", style: { gap: "18px", padding: "16px 0" } });
      st.appendChild(row);
      function next() {
        row.innerHTML = "";
        const target = VOCAB[(Math.random() * VOCAB.length) | 0];
        const others = VOCAB.filter(function (v) { return v[1] !== target[1]; }).sort(function () { return Math.random() - 0.5; }).slice(0, 2);
        prompt.innerHTML = FP("tapWord", { w: "<span class='hl'>" + target[1].toUpperCase() + "</span>" }, "Tap the <span class='hl'>" + target[1].toUpperCase() + "</span>! 🔊");
        try { WSAudio.speak("Find the " + target[1], { lang: "en" }); } catch (e) {}
        [target].concat(others).sort(function () { return Math.random() - 0.5; }).forEach(function (v) {
          const b = el("button", { class: "animal-tile", text: v[0] });
          b.addEventListener("click", function () {
            if (v[1] === target[1]) { b.classList.add("speaking"); WSAudio.play("cheer"); W.earnStar(b); try { WSAudio.speak("Yes! " + v[1] + "!", { lang: "en" }); } catch (e) {} setTimeout(next, 1200); }
            else { b.classList.remove("wiggle"); void b.offsetWidth; b.classList.add("wiggle"); WSAudio.play("wrong"); }
          });
          row.appendChild(b);
        });
      }
      next();
    }

    function buildSentence(st) {
      const prompt = el("div", { class: "prompt-banner", text: FP("buildWords", null, "Tap the words in order! 🧩") });
      st.appendChild(prompt);
      const out = el("div", { class: "prompt-banner", style: { background: "#fff", minHeight: "52px" } });
      st.appendChild(out);
      const row = el("div", { class: "flex-center", style: { gap: "10px", padding: "14px 0", flexWrap: "wrap" } });
      st.appendChild(row);
      let si = 0;
      function next() {
        out.textContent = "";
        row.innerHTML = "";
        const words = SENTENCES[si % SENTENCES.length].split(" ");
        const shuffled = words.slice().sort(function () { return Math.random() - 0.5; });
        let k = 0;
        shuffled.forEach(function (wd) {
          const b = el("button", { class: "tool-btn", style: { fontSize: "1.05rem" }, text: wd });
          b.addEventListener("click", function () {
            if (wd === words[k]) {
              b.style.opacity = ".4"; b.style.pointerEvents = "none";
              out.textContent += (k ? " " : "") + wd;
              try { WSAudio.speak(wd, { lang: "en" }); } catch (e) {}
              k++;
              if (k === words.length) {
                WSAudio.play("cheer");
                try { WSAudio.speak(SENTENCES[si % SENTENCES.length] + "!", { lang: "en" }); } catch (e) {}
                W.bigCelebrate("You built a sentence! 🔤⭐");
                si++;
                setTimeout(next, 1800);
              }
            } else { WSAudio.play("wrong"); b.classList.remove("wiggle"); void b.offsetWidth; b.classList.add("wiggle"); }
          });
          row.appendChild(b);
        });
      }
      next();
    }
  }

  W.LABS.push(
    { id: "flags", emoji: "🚩", title: "Flags & Countries", desc: "All 195 flags of the world!", bg: "linear-gradient(135deg,#4A90C2,#74B7E4)" },
    { id: "english", emoji: "🔤", title: "First English", desc: "Words & little sentences!", bg: "linear-gradient(135deg,#E8A33D,#F5C97E)" }
  );
  W.LAB_BUILDERS.flags = {
    title: "Flags & Countries", emoji: "🚩", build: flagsLab,
    parentNote: "Flags are a baby's favourite 'patterns' — high contrast and memorable. Name your own country first, then neighbours and family homelands.",
    realworld: "Spot a flag this week — on a car, a shop or a bottle label. Wave and name the country together!",
  };
  W.LAB_BUILDERS.english = {
    title: "First English", emoji: "🔤", build: englishLab,
    parentNote: "One word at a time, always paired with the picture. In bilingual homes, keep one language per parent — the brain separates them naturally.",
    realworld: "Narrate one routine in English today: 'Milk! Cup! Drink!' — real objects beat any screen.",
  };
})();
