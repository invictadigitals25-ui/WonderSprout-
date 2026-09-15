/* WonderSprout learning content — extra prompt keys, all 21 languages.
   Additive: WSI18n.extend() merges into what i18n-c1..c4 already registered. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const X = {
    en: { sortPrompt: "Tap the right box! 🧺", sortWrong: "Hmm! Is that {x}? Try the other box!", wrongAnimal: "That's the {c}. Find the {t}!", torchPrompt: "Move the torch — watch the shadow jump! 🔦" },
    ar: { sortPrompt: "اضغط الصندوق الصحيح! 🧺", sortWrong: "همم! هل هذا {x}؟ جرّب الصندوق الآخر!", wrongAnimal: "هذا هو {c}. ابحث عن {t}!", torchPrompt: "حرّك المصباح — شاهد الظل يقفز! 🔦" },
    zh: { sortPrompt: "点对的箱子！🧺", sortWrong: "咦！这是{x}吗？换一个箱子！", wrongAnimal: "这是{c}。找{t}！", torchPrompt: "移动手电筒——看影子跳！🔦" },
    es: { sortPrompt: "¡Toca la caja correcta! 🧺", sortWrong: "¡Mmm! ¿Eso es {x}? ¡Prueba la otra caja!", wrongAnimal: "Ese es el {c}. ¡Busca el {t}!", torchPrompt: "Mueve la linterna — ¡mira cómo salta la sombra! 🔦" },
    fr: { sortPrompt: "Touche la bonne boîte ! 🧺", sortWrong: "Hum ! C'est {x} ? Essaie l'autre boîte !", wrongAnimal: "C'est le {c}. Cherche le {t} !", torchPrompt: "Bouge la lampe — regarde l'ombre sauter ! 🔦" },
    de: { sortPrompt: "Tippe auf die richtige Kiste! 🧺", sortWrong: "Hmm! Ist das {x}? Versuch die andere Kiste!", wrongAnimal: "Das ist das {c}. Finde das {t}!", torchPrompt: "Beweg die Lampe — sieh, wie der Schatten hüpft! 🔦" },
    pt: { sortPrompt: "Toque na caixa certa! 🧺", sortWrong: "Hum! Isso é {x}? Tente a outra caixa!", wrongAnimal: "Esse é o {c}. Ache o {t}!", torchPrompt: "Mova a lanterna — veja a sombra pular! 🔦" },
    ru: { sortPrompt: "Нажми нужную коробку! 🧺", sortWrong: "Хм! Это {x}? Попробуй другую коробку!", wrongAnimal: "Это {c}. Найди {t}!", torchPrompt: "Двигай фонарик — смотри, как прыгает тень! 🔦" },
    hi: { sortPrompt: "सही डिब्बा दबाओ! 🧺", sortWrong: "हम्म! क्या यह {x} है? दूसरा डिब्बा आज़माओ!", wrongAnimal: "यह {c} है। {t} ढूँढो!", torchPrompt: "टॉर्च हिलाओ — परछाईं कूदती देखो! 🔦" },
    ur: { sortPrompt: "صحیح ڈبہ دباؤ! 🧺", sortWrong: "ہمم! کیا یہ {x} ہے؟ دوسرا ڈبہ آزماؤ!", wrongAnimal: "یہ {c} ہے۔ {t} ڈھونڈو!", torchPrompt: "ٹارچ ہلاؤ — سایہ کودتا دیکھو! 🔦" },
    tr: { sortPrompt: "Doğru kutuya dokun! 🧺", sortWrong: "Hımm! Bu {x} mi? Diğer kutuyu dene!", wrongAnimal: "O bir {c}. {t} hayvanını bul!", torchPrompt: "Feneri oynat — gölgenin zıplamasını izle! 🔦" },
    id: { sortPrompt: "Ketuk kotak yang benar! 🧺", sortWrong: "Hmm! Apa itu {x}? Coba kotak yang lain!", wrongAnimal: "Itu {c}. Cari {t}!", torchPrompt: "Gerakkan senter — lihat bayangannya melompat! 🔦" },
    sw: { sortPrompt: "Gusa sanduku sahihi! 🧺", sortWrong: "Hmm! Je hicho ni {x}? Jaribu sanduku jingine!", wrongAnimal: "Huyo ni {c}. Tafuta {t}!", torchPrompt: "Sogeza tochi — tazama kivuli kikiruka! 🔦" },
    it: { sortPrompt: "Tocca la scatola giusta! 🧺", sortWrong: "Uhm! È {x}? Prova l'altra scatola!", wrongAnimal: "È il {c}. Trova il {t}!", torchPrompt: "Muovi la torcia — guarda l'ombra che salta! 🔦" },
    nl: { sortPrompt: "Tik op de juiste doos! 🧺", sortWrong: "Hmm! Is dat {x}? Probeer de andere doos!", wrongAnimal: "Dat is de {c}. Zoek de {t}!", torchPrompt: "Beweeg de zaklamp — zie de schaduw springen! 🔦" },
    ja: { sortPrompt: "ただしい はこを タップ！🧺", sortWrong: "うーん！{x}かな？ちがう はこを ためして！", wrongAnimal: "それは {c}。{t}を さがして！", torchPrompt: "かいちゅうでんとう を うごかして — かげの ジャンプを みよう！🔦" },
    ko: { sortPrompt: "맞는 상자를 눌러요! 🧺", sortWrong: "음! 이게 {x}일까요? 다른 상자를 눌러 봐요!", wrongAnimal: "그건 {c}이에요. {t}을(를) 찾아 봐요!", torchPrompt: "손전등을 움직여요 — 그림자가 뛰어요! 🔦" },
    bn: { sortPrompt: "ঠিক বাক্সটা চাপো! 🧺", sortWrong: "হুম! এটা কি {x}? অন্য বাক্সটা চেষ্টা করো!", wrongAnimal: "এটা {c}। {t} খুঁজো!", torchPrompt: "টর্চ নাড়াও — ছায়া লাফাতে দেখো! 🔦" },
    yo: { sortPrompt: "Tẹ àpótí tí ó tọ́! 🧺", sortWrong: "Hmm! Ṣé {x} ni èyí? Gbiyanju àpótí kejì!", wrongAnimal: "{c} ni èyí. Wá {t}!", torchPrompt: "Gbé tọ́ọ̀chì — wo bí òjìji ṣe ń fò! 🔦" },
    ha: { sortPrompt: "Danna akwatin da ya dace! 🧺", sortWrong: "Hmm! Shin wannan {x} ne? Gwada wani akwatin!", wrongAnimal: "Wannan {c} ne. Nemo {t}!", torchPrompt: "Motsa fitila — ka ga inuwa tana tsalle! 🔦" },
    ig: { sortPrompt: "Kpatụ igbe ziri ezi! 🧺", sortWrong: "Hmm! Ọ̀ bụ {x} ka nke a bụ? Nwalee igbe ọzọ!", wrongAnimal: "Nke ahụ bụ {c}. Chọta {t}!", torchPrompt: "Kpugharịa ọkụ — lee ka nnyo si amali! 🔦" },
  };

  for (const code in X) WSI18n.extend(code, { p: X[code] });

  /* Country names are proper nouns and stay in English; the sentence frame is localized. */
  const FLAGOF = {
    en: "This is the flag of {x}!",
    ar: "\u0647\u0630\u0627 \u0639\u0644\u0645 {x}!",
    zh: "\u8fd9\u662f{x}\u7684\u56fd\u65d7\uff01",
    es: "\u00a1Esta es la bandera de {x}!",
    fr: "C\u2019est le drapeau de {x} !",
    de: "Das ist die Flagge von {x}!",
    pt: "Esta \u00e9 a bandeira de {x}!",
    ru: "\u042d\u0442\u043e \u0444\u043b\u0430\u0433 \u2014 {x}!",
    hi: "\u092f\u0939 {x} \u0915\u093e \u091d\u0902\u0921\u093e \u0939\u0948!",
    ur: "\u06cc\u06c1 {x} \u06a9\u0627 \u062c\u06be\u0646\u0688\u0627 \u06c1\u06d2!",
    tr: "Bu, {x} bayra\u011f\u0131!",
    id: "Ini bendera {x}!",
    sw: "Hii ni bendera ya {x}!",
    it: "Questa \u00e8 la bandiera di {x}!",
    nl: "Dit is de vlag van {x}!",
    ja: "{x}\u306e \u306f\u305f\u3060\u3088\uff01",
    ko: "{x}\uc758 \uad6d\uae30\uc608\uc694!",
    bn: "\u098f\u099f\u09be {x}-\u098f\u09b0 \u09aa\u09a4\u09be\u0995\u09be!",
    yo: "\u00c8y\u00ed ni \u00e0s\u00ec\u00e1 {x}!",
    ha: "Wannan ita ce tutar {x}!",
    ig: "Nke a b\u1ee5 \u1ecdk\u1ecdl\u1ecdt\u1ecd nke {x}!"
  };
  for (const c2 in FLAGOF) WSI18n.extend(c2, { p: { flagOf: FLAGOF[c2] } });

})();
