/* ============================================================
   WonderSprout — localized month unit for age labels
   (all 20 non-English languages)

   Age strings in js/data.js are stored compactly as "3–4m",
   "18–36m", "12m" … where the trailing "m" means "months".
   Render sites replace that suffix via:
       String(age).replace(/m\b/g, WSI18n.k("unit.m", "m"))
   so each language gets its own natural unit. Leading spaces are
   intentional for spaced languages; CJK gets none.
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
    es: { "unit.m": " meses" },
    fr: { "unit.m": " mois" },
    de: { "unit.m": " Mon." },
    ar: { "unit.m": " شهر" },
    zh: { "unit.m": "个月" },
    pt: { "unit.m": " meses" },
    ru: { "unit.m": " мес." },
    hi: { "unit.m": " महीने" },
    ur: { "unit.m": " ماہ" },
    tr: { "unit.m": " ay" },
    id: { "unit.m": " bln" },
    sw: { "unit.m": " miezi" },
    it: { "unit.m": " mesi" },
    nl: { "unit.m": " mnd" },
    ja: { "unit.m": "か月" },
    ko: { "unit.m": "개월" },
    bn: { "unit.m": " মাস" },
    yo: { "unit.m": " oṣù" },
    ha: { "unit.m": " watanni" },
    ig: { "unit.m": " ọnwa" }
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
