/* ============================================================
   WonderSprout — Wonder Journal seed entries
   (all 20 non-English languages)
   keys: jrn0..2.t (title), jrn0..2.x (text), jrn0..2.w (when)
   Rendered by js/parent.js, which maps each seed back to its
   index in WSData.JOURNAL_SEEDS, so the English data stays intact.
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    es: {
      "jrn0.t": "¡Primera palabra para «pelota»!", "jrn0.x": "Señaló el patio de física y dijo «¡ba!» — todos aplaudimos.", "jrn0.w": "hace 2 días",
      "jrn1.t": "Campeón de flota o hunde", "jrn1.x": "Predijo que el pato flotaría — ¡y flotó! Gritó de alegría.", "jrn1.w": "hace 4 días",
      "jrn2.t": "Regó a Pip cada mañana", "jrn2.x": "Insistió en regar la semilla digital antes del desayuno toda la semana.", "jrn2.w": "hace 1 semana"
    },
    fr: {
      "jrn0.t": "Premier mot pour « ballon » !", "jrn0.x": "A pointé le terrain de physique et a dit « ba ! » — on a tous applaudi.", "jrn0.w": "il y a 2 jours",
      "jrn1.t": "Champion de flotte ou coule", "jrn1.x": "Avait prédit que le canard flotterait — et il a flotté ! Cri de joie.", "jrn1.w": "il y a 4 jours",
      "jrn2.t": "A arrosé Pip chaque matin", "jrn2.x": "A insisté pour arroser la graine numérique avant le petit-déjeuner toute la semaine.", "jrn2.w": "il y a 1 semaine"
    },
    de: {
      "jrn0.t": "Erstes Wort für „Ball“!", "jrn0.x": "Zeigte auf den Physik-Spielplatz und sagte „ba!“ — wir haben alle gejubelt.", "jrn0.w": "vor 2 Tagen",
      "jrn1.t": "Schwimmt-oder-sinkt-Champion", "jrn1.x": "Sagte vorher, die Ente würde schwimmen — und sie schwamm! Jubelte vor Freude.", "jrn1.w": "vor 4 Tagen",
      "jrn2.t": "Pip jeden Morgen gegossen", "jrn2.x": "Wollte die ganze Woche vor dem Frühstück den digitalen Samen gießen.", "jrn2.w": "vor 1 Woche"
    },
    ar: {
      "jrn0.t": "أول كلمة لـ«كرة»!", "jrn0.x": "أشار إلى ملعب الفيزياء وقال «با!» — صفّقنا جميعًا.", "jrn0.w": "قبل يومين",
      "jrn1.t": "بطل الطفو أو الغرق", "jrn1.x": "توقّع أن البطة ستطفو — وقد طفت! صرخ فرحًا.", "jrn1.w": "قبل 4 أيام",
      "jrn2.t": "سقى بيب كل صباح", "jrn2.x": "أصرّ على سقي البذرة الرقمية قبل الفطور طوال الأسبوع.", "jrn2.w": "قبل أسبوع"
    },
    zh: {
      "jrn0.t": "第一次说出「球」这个词！", "jrn0.x": "指着物理游乐场说了声「ba!」—— 我们都欢呼起来。", "jrn0.w": "2 天前",
      "jrn1.t": "浮沉小冠军", "jrn1.x": "预测小鸭会浮起来 —— 真的浮起来了！开心得大叫。", "jrn1.w": "4 天前",
      "jrn2.t": "每天早上给 Pip 浇水", "jrn2.x": "整整一周都坚持在早餐前给数字种子浇水。", "jrn2.w": "1 周前"
    },
    pt: {
      "jrn0.t": "Primeira palavra para «bola»!", "jrn0.x": "Apontou para o parque da física e disse «ba!» — todos aplaudimos.", "jrn0.w": "há 2 dias",
      "jrn1.t": "Campeão do flutua ou afunda", "jrn1.x": "Prevê que o pato flutuaria — e flutuou! Gritou de alegria.", "jrn1.w": "há 4 dias",
      "jrn2.t": "Regou o Pip todas as manhãs", "jrn2.x": "Insistiu em regar a semente digital antes do pequeno-almoço a semana toda.", "jrn2.w": "há 1 semana"
    },
    ru: {
      "jrn0.t": "Первое слово для «мяч»!", "jrn0.x": "Показал на физическую площадку и сказал «ба!» — мы все обрадовались.", "jrn0.w": "2 дня назад",
      "jrn1.t": "Чемпион «плавает или тонет»", "jrn1.x": "Предсказал, что утка поплывёт — и она поплыла! Закричал от радости.", "jrn1.w": "4 дня назад",
      "jrn2.t": "Поливал Пипа каждое утро", "jrn2.x": "Всю неделю настаивал полить цифровое семечко до завтрака.", "jrn2.w": "1 неделю назад"
    },
    hi: {
      "jrn0.t": "«गेंद» के लिए पहला शब्द!", "jrn0.x": "भौतिकी के मैदान की ओर इशारा किया और «बा!» कहा — हम सबने तालियाँ बजाईं।", "jrn0.w": "2 दिन पहले",
      "jrn1.t": "तैरना या डूबना का चैंपियन", "jrn1.x": "अनुमान लगाया कि बत्तख तैरेगा — और वह तैरा! ख़ुशी से चिल्लाया।", "jrn1.w": "4 दिन पहले",
      "jrn2.t": "हर सुबह पिप को पानी दिया", "jrn2.x": "पूरे हफ़्ते नाश्ते से पहले डिजिटल बीज को पानी देने पर अड़ा रहा।", "jrn2.w": "1 हफ़्ता पहले"
    },
    ur: {
      "jrn0.t": "«گیند» کے لیے پہلا لفظ!", "jrn0.x": "طبیعیات کے میدان کی طرف اشارہ کیا اور «با!» کہا — ہم سب نے تالیاں بجائیں۔", "jrn0.w": "2 دن پہلے",
      "jrn1.t": "تیرنا یا ڈوبنا کا چیمپئن", "jrn1.x": "اندازہ لگایا کہ بطخ تیرے گی — اور وہ تیری! خوشی سے چیخا۔", "jrn1.w": "4 دن پہلے",
      "jrn2.t": "ہر صبح پپ کو پانی دیا", "jrn2.x": "پورے ہفتے ناشتے سے پہلے ڈیجیٹل بیج کو پانی دینے پر اڑا رہا۔", "jrn2.w": "1 ہفتہ پہلے"
    },
    tr: {
      "jrn0.t": "«Top» için ilk kelime!", "jrn0.x": "Fizik oyun alanını gösterdi ve «ba!» dedi — hepimiz alkışladık.", "jrn0.w": "2 gün önce",
      "jrn1.t": "Yüzer mi batar mı şampiyonu", "jrn1.x": "Ördeğin yüzeceğini tahmin etti — ve yüzdü! Sevinçle bağırdı.", "jrn1.w": "4 gün önce",
      "jrn2.t": "Her sabah Pip'i suladı", "jrn2.x": "Tüm hafta kahvaltıdan önce dijital tohumu sulamakta ısrar etti.", "jrn2.w": "1 hafta önce"
    },
    id: {
      "jrn0.t": "Kata pertama untuk “bola”!", "jrn0.x": "Menunjuk taman fisika dan berkata “ba!” — kami semua bersorak.", "jrn0.w": "2 hari lalu",
      "jrn1.t": "Juara mengapung atau tenggelam", "jrn1.x": "Memprediksi bebek akan mengapung — dan benar! Berteriak gembira.", "jrn1.w": "4 hari lalu",
      "jrn2.t": "Menyiram Pip setiap pagi", "jrn2.x": "Bersikeras menyiram benih digital sebelum sarapan sepanjang minggu.", "jrn2.w": "1 minggu lalu"
    },
    sw: {
      "jrn0.t": "Neno la kwanza la “mpira”!", "jrn0.x": "Alionyesha uwanja wa fizikia na kusema “ba!” — sote tukashangilia.", "jrn0.w": "siku 2 zilizopita",
      "jrn1.t": "Bingwa wa kuelea au kuzama", "jrn1.x": "Alitabiri bata ataelea — na alielea! Alipiga kelele kwa furaha.", "jrn1.w": "siku 4 zilizopita",
      "jrn2.t": "Alimwagilia Pip kila asubuhi", "jrn2.x": "Alisisitiza kumwagilia mbegu ya kidijitali kabla ya kiamsha kini wiki nzima.", "jrn2.w": "wiki 1 iliyopita"
    },
    it: {
      "jrn0.t": "Prima parola per «palla»!", "jrn0.x": "Ha indicato il parco della fisica e ha detto «ba!» — abbiamo applaudito tutti.", "jrn0.w": "2 giorni fa",
      "jrn1.t": "Campione di galleggia o affonda", "jrn1.x": "Ha predetto che l'anatra avrebbe galleggiato — e ha galleggiato! Ha urlato di gioia.", "jrn1.w": "4 giorni fa",
      "jrn2.t": "Ha innaffiato Pip ogni mattina", "jrn2.x": "Ha insistito per innaffiare il seme digitale prima di colazione per tutta la settimana.", "jrn2.w": "1 settimana fa"
    },
    nl: {
      "jrn0.t": "Eerste woord voor „bal”!", "jrn0.x": "Wees naar de natuurkunde-speeltuin en zei „ba!” — we juichten allemaal.", "jrn0.w": "2 dagen geleden",
      "jrn1.t": "Kampioen drijven of zinken", "jrn1.x": "Voorspelde dat de eend zou drijven — en hij dreef! Gilde van vreugde.", "jrn1.w": "4 dagen geleden",
      "jrn2.t": "Gaf Pip elke ochtend water", "jrn2.x": "Wilde de hele week vóór het ontbijt het digitale zaadje water geven.", "jrn2.w": "1 week geleden"
    },
    ja: {
      "jrn0.t": "「ボール」の はじめての ことば！", "jrn0.x": "ぶつり あそびばを ゆびさして 「ば！」と いった — みんなで はくしゅ。", "jrn0.w": "2にち まえ",
      "jrn1.t": "うかぶ/しずむ の チャンピオン", "jrn1.x": "アヒルは うかぶと よそう — ほんとうに うかんだ！うれしくて さけんだ。", "jrn1.w": "4にち まえ",
      "jrn2.t": "まいあさ ピップに みずを あげた", "jrn2.x": "1しゅうかん、あさごはんの まえに デジタルの たねに みずを あげると きめた。", "jrn2.w": "1しゅうかん まえ"
    },
    ko: {
      "jrn0.t": "「공」이라고 처음 말했어요!", "jrn0.x": "물리 놀이터를 가리키며 「바!」라고 말했어요 — 우리 모두 박수 쳤어요.", "jrn0.w": "2일 전",
      "jrn1.t": "뜸과 가라앉음 챔피언", "jrn1.x": "오리가 뜰 거라고 예측했어요 — 정말 떴어요! 기뻐서 소리 질렀어요.", "jrn1.w": "4일 전",
      "jrn2.t": "매일 아침 Pip에 물 주기", "jrn2.x": "일주일 내내 아침 먹기 전에 디지털 씨앗에 물을 주겠다고 고집했어요.", "jrn2.w": "1주 전"
    },
    bn: {
      "jrn0.t": "«বল»-এর জন্য প্রথম শব্দ!", "jrn0.x": "পদার্থবিদ্যার খেলার মাঠ দেখিয়ে «বা!» বলল — আমরা সবাই হাততালি দিলাম।", "jrn0.w": "২ দিন আগে",
      "jrn1.t": "ভাসা বা ডোবার চ্যাম্পিয়ন", "jrn1.x": "অনুমান করল হাঁসটি ভাসবে — আর সে ভাসল! আনন্দে চিৎকার করল।", "jrn1.w": "৪ দিন আগে",
      "jrn2.t": "প্রতি সকালে পিপকে জল দিল", "jrn2.x": "সারা সপ্তাহ নাস্তার আগে ডিজিটাল বীজে জল দিতে জেদ করল।", "jrn2.w": "১ সপ্তাহ আগে"
    },
    yo: {
      "jrn0.t": "Ọ̀rọ̀ àkọ́kọ́ fún “bọ́ọ̀lù”!", "jrn0.x": "Ó tọ́ka sí pápá ìmọ̀ ẹ̀rọ ó sì sọ pé “ba!” — gbogbo wa a yọ̀.", "jrn0.w": "ọjọ́ 2 sẹ́yìn",
      "jrn1.t": "Aṣáájú lílefo tàbí ìrìbomi", "jrn1.x": "Ó sọ tẹ́lẹ̀ pé ẹyẹ náà yóò léfòò — ó sì léfòò! Ó kígbe ní ayọ̀.", "jrn1.w": "ọjọ́ 4 sẹ́yìn",
      "jrn2.t": "Ó fun Pip ní omi ní gbogbo òwúrọ̀", "jrn2.x": "Ó tẹnumọ́ láti fun irúgbìn oní-ẹ̀rọ náà ní omi ṣáájú oúnjẹ̀ àárọ̀ fún ọ̀sẹ̀ kan.", "jrn2.w": "ọ̀sẹ̀ 1 sẹ́yìn"
    },
    ha: {
      "jrn0.t": "Kalma ta farko don “ƙwallo”!", "jrn0.x": "Ya nuna filin kimiyyar lissafi ya ce “ba!” — dukansu muka yi murna.", "jrn0.w": "kwanaki 2 da suka wuce",
      "jrn1.t": "Zakara na yawo ko nitsewa", "jrn1.x": "Ya yi hasashen agwagi zai yi yawo — kuma ya yi yawo! Ya yi ihu cikin farin ciki.", "jrn1.w": "kwanaki 4 da suka wuce",
      "jrn2.t": "Ya zuba Pip ruwa kowace safiya", "jrn2.x": "Ya dage kan zuba irin na dijital ruwa kafin karin kumallo na mako gaba ɗaya.", "jrn2.w": "mako 1 da ya wuce"
    },
    ig: {
      "jrn0.t": "Okwu mbụ maka “bọọlụ”!", "jrn0.x": "O gosiri ogige physics ma kwuo “ba!” — anyị niile tooro ya.", "jrn0.w": "ụbọchị 2 gara aga",
      "jrn1.t": "Onye mmeri nke ise n'elu ma ọ bụ imikpu", "jrn1.x": "O buru n'uche na ọbọga ga-ese n'elu — ọ sere! O tikuru n'ọṅụ.", "jrn1.w": "ụbọchị 4 gara aga",
      "jrn2.t": "O wusara Pip mmiri ụtụtụ ọ bụla", "jrn2.x": "O kwusiri ike ịwụsa mkpụrụ dijitalụ ahụ mmiri tupu nri ụtụtụ izu niile.", "jrn2.w": "izu 1 gara aga"
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
