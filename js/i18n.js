/* ============================================================
   WonderSprout i18n — 21 languages, RTL-aware
   ============================================================ */
const WSI18n = (function () {
  "use strict";

  const LANGS = [
    ["en", "English"], ["ar", "العربية"], ["zh", "中文 (Mandarin)"], ["es", "Español"],
    ["fr", "Français"], ["de", "Deutsch"], ["pt", "Português"], ["ru", "Русский"],
    ["hi", "हिन्दी"], ["ur", "اردو"], ["tr", "Türkçe"], ["id", "Bahasa Indonesia"],
    ["sw", "Kiswahili"], ["it", "Italiano"], ["nl", "Nederlands"], ["ja", "日本語"],
    ["ko", "한국어"], ["bn", "বাংলা"], ["yo", "Yorùbá"], ["ha", "Hausa"], ["ig", "Igbo"],
  ];

  const K = ["platform", "world", "parent", "labs", "stories", "music", "studio", "camera", "ai", "kits",
    "tagline", "philosophy", "learn", "play", "next", "skip", "signup", "signin", "demo", "lang"];

  const STR = {
    en: ["Platform", "World", "Parent", "Labs", "Stories", "Music", "Studio", "Camera", "AI", "Kits",
      "Little minds. Big wonders.", "See. Hear. Touch. Explore. Wonder.", "📖 First, let's learn!", "▶ Let's play!", "Next ➜", "Skip ⏭", "Create free account 🌱", "Sign in ☁️", "Explore in demo mode →", "Language"],
    ar: ["المنصة", "العالم", "الأهل", "المختبرات", "القصص", "الموسيقى", "الاستوديو", "الكاميرا", "الذكاء", "الحِزم",
      "عقول صغيرة. دهشات كبيرة.", "انظر. اسمع. المس. استكشف. تعجّب.", "📖 أولًا، لنتعلّم!", "▶ هيا نلعب!", "التالي ➜", "تخطٍّ ⏭", "أنشئ حسابًا مجانيًا 🌱", "تسجيل الدخول ☁️", "استكشف بالوضع التجريبي →", "اللغة"],
    zh: ["平台", "世界", "家长", "实验室", "故事", "音乐", "工作室", "相机", "AI", "套装",
      "小小的头脑，大大的惊奇。", "看。听。摸。探索。惊叹。", "📖 先学一学！", "▶ 开始玩！", "下一个 ➜", "跳过 ⏭", "创建免费账户 🌱", "登录 ☁️", "以演示模式探索 →", "语言"],
    es: ["Plataforma", "Mundo", "Familia", "Laboratorios", "Cuentos", "Música", "Estudio", "Cámara", "IA", "Kits",
      "Mentes pequeñas. Grandes maravillas.", "Ver. Oír. Tocar. Explorar. Asombrarse.", "📖 ¡Primero aprendamos!", "▶ ¡A jugar!", "Siguiente ➜", "Saltar ⏭", "Crear cuenta gratis 🌱", "Entrar ☁️", "Explorar en modo demo →", "Idioma"],
    fr: ["Plateforme", "Monde", "Parents", "Labos", "Histoires", "Musique", "Studio", "Caméra", "IA", "Kits",
      "Petits esprits. Grandes merveilles.", "Voir. Écouter. Toucher. Explorer. S'émerveiller.", "📖 D'abord, apprenons !", "▶ Jouons !", "Suivant ➜", "Passer ⏭", "Créer un compte gratuit 🌱", "Connexion ☁️", "Explorer en mode démo →", "Langue"],
    de: ["Plattform", "Welt", "Eltern", "Labore", "Geschichten", "Musik", "Studio", "Kamera", "KI", "Kits",
      "Kleine Köpfe. Große Wunder.", "Sehen. Hören. Fühlen. Entdecken. Staunen.", "📖 Zuerst lernen!", "▶ Los geht's!", "Weiter ➜", "Überspringen ⏭", "Gratis-Konto erstellen 🌱", "Anmelden ☁️", "Im Demo-Modus entdecken →", "Sprache"],
    pt: ["Plataforma", "Mundo", "Família", "Laboratórios", "Histórias", "Música", "Estúdio", "Câmera", "IA", "Kits",
      "Mentes pequenas. Grandes maravilhas.", "Ver. Ouvir. Tocar. Explorar. Encantar-se.", "📖 Primeiro, vamos aprender!", "▶ Vamos brincar!", "Próximo ➜", "Pular ⏭", "Criar conta grátis 🌱", "Entrar ☁️", "Explorar em modo demo →", "Idioma"],
    ru: ["Платформа", "Мир", "Родители", "Лаборатории", "Сказки", "Музыка", "Студия", "Камера", "ИИ", "Наборы",
      "Маленькие умы. Большие чудеса.", "Смотри. Слушай. Трогай. Исследуй. Удивляйся.", "📖 Сначала учимся!", "▶ Играем!", "Дальше ➜", "Пропустить ⏭", "Создать бесплатный аккаунт 🌱", "Войти ☁️", "В демо-режим →", "Язык"],
    hi: ["मंच", "दुनिया", "अभिभावक", "लैब", "कहानियाँ", "संगीत", "स्टूडियो", "कैमरा", "AI", "किट",
      "छोटे मन। बड़े अचरज।", "देखो। सुनो। छुओ। खोजो। चमत्कृत होओ।", "📖 पहले सीखें!", "▶ खेलें!", "आगे ➜", "छोड़ें ⏭", "मुफ़्त खाता बनाएँ 🌱", "साइन इन ☁️", "डेमो मोड में देखें →", "भाषा"],
    ur: ["پلیٹ فارم", "دنیا", "والدین", "لیبز", "کہانیاں", "موسیقی", "اسٹوڈیو", "کیمرہ", "AI", "کٹس",
      "چھوٹے من۔ بڑے کمال۔", "دیکھو۔ سنو۔ چھوو۔ کھوجو۔ حیران ہو۔", "📖 پہلے سیکھیں!", "▶ کھیلیں!", "اگلے ➜", "چھوڑیں ⏭", "مفت اکاؤنٹ بنائیں 🌱", "سائن ان ☁️", "ڈیمو موڈ میں دیکھیں →", "زبان"],
    tr: ["Platform", "Dünya", "Ebeveyn", "Laboratuvar", "Hikâyeler", "Müzik", "Stüdyo", "Kamera", "YZ", "Kitler",
      "Küçük zihinler. Büyük mucizeler.", "Gör. Duy. Dokun. Keşfet. Hayran kal.", "📖 Önce öğrenelim!", "▶ Oynayalım!", "İleri ➜", "Geç ⏭", "Ücretsiz hesap aç 🌱", "Giriş yap ☁️", "Demo modunda keşfet →", "Dil"],
    id: ["Platform", "Dunia", "Orang Tua", "Lab", "Cerita", "Musik", "Studio", "Kamera", "AI", "Kit",
      "Pikiran kecil. Keajaiban besar.", "Lihat. Dengar. Sentuh. Jelajahi. Kagum.", "📖 Ayo belajar dulu!", "▶ Ayo bermain!", "Lanjut ➜", "Lewati ⏭", "Buat akun gratis 🌱", "Masuk ☁️", "Jelajahi mode demo →", "Bahasa"],
    sw: ["Jukwaa", "Dunia", "Wazazi", "Maabara", "Hadithi", "Muziki", "Studio", "Kamera", "AI", "Vifurushi",
      "Akili ndogo. Maajabu makubwa.", "Ona. Sikia. Gusa. Chunguza. Staajabu.", "📖 Kwanza, tuje!", "▶ Tuchez!", "Inayofuata ➜", "Ruka ⏭", "Fungua akaunti bure 🌱", "Ingia ☁️", "Chunguza hali ya onyesho →", "Lugha"],
    it: ["Piattaforma", "Mondo", "Genitori", "Laboratori", "Storie", "Musica", "Studio", "Camera", "IA", "Kit",
      "Menti piccole. Grandi meraviglie.", "Vedi. Ascolta. Tocca. Esplora. Stupisciti.", "📖 Prima impariamo!", "▶ Giochiamo!", "Avanti ➜", "Salta ⏭", "Crea account gratis 🌱", "Accedi ☁️", "Esplora in modalità demo →", "Lingua"],
    nl: ["Platform", "Wereld", "Ouders", "Labo's", "Verhalen", "Muziek", "Studio", "Camera", "AI", "Kits",
      "Kleine breinen. Grote wonderen.", "Zien. Horen. Voelen. Ontdekken. Verwonderen.", "📖 Eerst leren!", "▶ Spelen maar!", "Volgende ➜", "Overslaan ⏭", "Gratis account aanmaken 🌱", "Inloggen ☁️", "Verken in demomodus →", "Taal"],
    ja: ["プラットフォーム", "せかい", "ほごしゃ", "ラボ", "ものがたり", "おんがく", "スタジオ", "カメラ", "AI", "キット",
      "ちいさな あたま。おおきな ふしぎ。", "みる。きく。さわる。たんけん。おどろき。", "📖 まず まなぼう！", "▶ あそぼう！", "つぎ ➜", "スキップ ⏭", "むりょうアカウント 🌱", "サインイン ☁️", "デモモードで みる →", "げんご"],
    ko: ["플랫폼", "세계", "부모", "랩", "이야기", "음악", "스튜디오", "카메라", "AI", "키트",
      "작은 마음, 큰 놀라움.", "보고. 듣고. 만지고. 탐험하고. 놀라자.", "📖 먼저 배워요!", "▶ 놀아보자!", "다음 ➜", "건너뛰기 ⏭", "무료 계정 만들기 🌱", "로그인 ☁️", "데모 모드로 둘러보기 →", "언어"],
    bn: ["প্ল্যাটফর্ম", "পৃথিবী", "অভিভাবক", "ল্যাব", "গল্প", "সংগীত", "স্টুডিও", "ক্যামেরা", "AI", "কিট",
      "ছোট মন। বড় বিস্ময়।", "দেখো। শোনো। ছোঁও। খুঁজি। অবাক হই।", "📖 আগে শিখি!", "▶ খেলি!", "পরে ➜", "এড়িয়ে যান ⏭", "ফ্রি অ্যাকাউন্ট খুলুন 🌱", "সাইন ইন ☁️", "ডেমো মোডে দেখুন →", "ভাষা"],
    yo: ["Pẹpẹ", "Àgbáyé", "Òbí", "Yàrá-ìdánwò", "Ìtàn", "Orin", "Stúdìó", "Kámẹ́rà", "AI", "Kíìtì",
      "Ọkàn kékeré. Ìyàlẹ́nu ńlá.", "Rí i. Gbọ́. Fọwọ́ kan. Ṣàwárí. Yà á lẹ́nu.", "📖 ̀ kọ́kọ́ kọ́!", "▶ Ẹ jẹ́ ká ṣeré!", "Èyí tó kàn ➜", "Fo ⏭", "Ṣí àkántì ọ̀fẹ́ 🌱", "Wọlé ☁️", "Ṣàwárí ní ìpò àpẹẹrẹ →", "Èdè"],
    ha: ["Dandali", "Duniya", "Iyaye", "Dakunan gwaji", "Labarai", "Waka", "Studio", "Kyamara", "AI", "Kaya",
      "Ƙananan hankula. Manyan al'ajabu.", "Gani. Sauraro. Taɓa. Bincika. Mamaki.", "📖 Da farko, mu koya!", "▶ Mu wasa!", "Na gaba ➜", "Tsallake ⏭", "Buɗe asusun kyauta 🌱", "Shiga ☁️", "Bincika yanayin demo →", "Harshe"],
    ig: ["Ikpo", "Ụwa", "Ndị mụrụ", "Ụlọ nnwale", "Akụkọ", "Egwu", "Studio", "Igwe foto", "AI", "Ngwa",
      "Obere uche. Nnukwu ihe ịtụnanya.", "Hụ. Nụ. Metụ. Nyochaa. Tụọ n'anya.", "📖 Ka anyị buo ụzọ mụọ!", "▶ Ka anyị gbaa!", "Ọzọ ➜", "Mafere ⏭", "Mepee akaụntụ n'efu 🌱", "Banye ☁️", "Nyochaa n'ụdị ngosi →", "Asụsụ"],
  };

  function lsGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }

  let lang = lsGet("ws-lang") || "en";
  if (!STR[lang]) lang = "en";

  function t(key) {
    const i = K.indexOf(key);
    if (i === -1) return "";
    return (STR[lang] && STR[lang][i]) || STR.en[i];
  }
  function rtl() { return lang === "ar" || lang === "ur"; }

  function apply() {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl() ? "rtl" : "ltr";
    const links = document.querySelectorAll("#mainnav a");
    const keys = ["platform", "world", "parent", "labs", "stories", "music", "studio", "camera", "ai", "kits"];
    links.forEach(function (a, i) { if (keys[i]) a.textContent = t(keys[i]); });
    const tag = document.querySelector(".foot-tag");
    if (tag) tag.textContent = t("tagline");
  }

  function setLang(code) {
    if (!STR[code]) return;
    lang = code;
    lsSet("ws-lang", code);
    apply();
    try { WSRouter.render(); } catch (e) {}
    try { document.dispatchEvent(new CustomEvent("ws:langchange", { detail: { lang: lang } })); } catch (e) {}
  }

  function menu(anchor) {
    const old = document.querySelector(".lang-menu");
    if (old) { old.remove(); return; }
    const m = el("div", { class: "lang-menu" });
    LANGS.forEach(function (L) {
      const b = el("button", { class: "lang-opt" + (L[0] === lang ? " on" : ""), text: L[1] });
      b.addEventListener("click", function () { setLang(L[0]); m.remove(); });
      m.appendChild(b);
    });
    document.body.appendChild(m);
  }

  /* ---------- Full learning-content layer ---------- */
  const CONTENT = {};
  function extend(code, data) {
    const cur = CONTENT[code] || (CONTENT[code] = {});
    ["t", "i", "p"].forEach(function (k) {
      if (!data[k]) return;
      if (!cur[k]) cur[k] = {};
      for (const id in data[k]) cur[k][id] = data[k][id];
    });
  }
  function pick(fn) {
    const d = CONTENT[lang], e = CONTENT.en;
    return (d && fn(d)) || (e && fn(e)) || null;
  }
  function ct(id) { return pick(function (d) { return d.t && d.t[id] ? d.t[id] : null; }); }
  function ci(id, idx) { return pick(function (d) { return d.i && d.i[id] && d.i[id][idx] ? d.i[id][idx] : null; }); }
  function cp(key) { return pick(function (d) { return d.p && d.p[key] ? d.p[key] : null; }); }
  const BCP = { zh: "zh-CN", ar: "ar-SA", pt: "pt-BR", hi: "hi-IN", bn: "bn-BD", ja: "ja-JP", ko: "ko-KR", ur: "ur-PK", sw: "sw-KE", yo: "yo-NG", ha: "ha-NG", ig: "ig-NG", id: "id-ID", tr: "tr-TR", ru: "ru-RU", fr: "fr-FR", de: "de-DE", es: "es-ES", it: "it-IT", nl: "nl-NL", en: "en-US" };
  function bcp() { return BCP[lang] || lang; }

  /* ---------- Keyed page copy (K layer) ----------
     Keyed dictionaries so page copy can be translated without positional arrays.
     Lookup: selected language -> en -> literal fallback. */
  const KSTR = {};
  function kextend(code, obj) {
    const cur = KSTR[code] || (KSTR[code] = {});
    for (const k2 in obj) cur[k2] = obj[k2];
  }
  function k(key, fb) {
    const d = KSTR[lang], e = KSTR.en;
    const v = (d && d[key]) || (e && e[key]);
    return v == null ? (fb == null ? key : fb) : v;
  }
  function kf(key, map, fb) {
    let s = k(key, fb);
    if (map) for (const m in map) s = s.split("{" + m + "}").join(map[m]);
    return s;
  }
  /* translate a list of {name,desc}-style rows by index: kd("eco", i, "name", fb) */
  function kd(group, idx, field, fb) {
    const key = group + "." + idx + "." + field;
    return k(key, fb);
  }

  return { t: t, apply: apply, setLang: setLang, menu: menu, lang: function () { return lang; }, LANGS: LANGS,
    extend: extend, ct: ct, ci: ci, cp: cp, bcp: bcp,
    k: k, kf: kf, kd: kd, kextend: kextend };
})();

if (typeof module !== "undefined" && module.exports) module.exports = WSI18n;
