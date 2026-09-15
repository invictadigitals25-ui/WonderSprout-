/* ============================================================
   WonderSprout — Ball-drop age bands + simulation templates
   (id/sw/it/nl/ja)
   keys: ball0..5.m (mode), ball0..5.d (desc), sim0..17.n (name)
   Age labels ("6m") stay numeric and are not translated.
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    id: {
      "ball0.m": "MEMANDANG", "ball1.m": "MENYENTUH", "ball2.m": "MEMILIH",
      "ball3.m": "MENGUBAH", "ball4.m": "MENDUGA", "ball5.m": "MENJELASKAN",
      "ball0.d": "Bayi melihat bola jatuh berulang kali — lembut, bisa diulang, memikat.",
      "ball1.d": "Bayi menyentuh dan bola jatuh. TINDAKAN → HASIL menyalakan otak.",
      "ball2.d": "Balita memilih bola mana yang dijatuhkan — merah atau biru? Besar atau kecil?",
      "ball3.d": "Balita menjatuhkannya dari ketinggian berbeda dan melihat pantulannya berubah.",
      "ball4.d": "“Bola mana yang memantul lebih tinggi?” Duga dulu, lalu uji.",
      "ball5.d": "“Kenapa bola besar memantul lebih rendah?” Coba, jelaskan, hubungkan dengan dunia nyata.",
      "sim0.n": "Benda jatuh", "sim1.n": "Benda bergulir", "sim2.n": "Pengelompokan",
      "sim3.n": "Mencocokkan", "sim4.n": "Campuran warna", "sim5.n": "Berhitung",
      "sim6.n": "Tanaman tumbuh", "sim7.n": "Siang/Malam", "sim8.n": "Cuaca",
      "sim9.n": "Mengapung/Tenggelam", "sim10.n": "Cahaya/Bayangan", "sim11.n": "Suara",
      "sim12.n": "Pola", "sim13.n": "Putaran bentuk", "sim14.n": "Membangun",
      "sim15.n": "Pilihan cerita", "sim16.n": "Emosi tokoh", "sim17.n": "Habitat hewan",
      "sim.live": "Tersedia", "sim.soon": "Segera"
    },

    sw: {
      "ball0.m": "KUTAZAMA", "ball1.m": "KUGUSA", "ball2.m": "KUCHAGUA",
      "ball3.m": "KUBADILISHA", "ball4.m": "KUTABIRI", "ball5.m": "KUELEZA",
      "ball0.d": "Mtoto anaona mpira ukianguka mara kwa mara — laini, kinachorudiwa, cha kupendeza.",
      "ball1.d": "Mtoto anagusa na mpira unaanguka. KITENDO → MATOKEO huwasha ubongo.",
      "ball2.d": "Mtoto anachagua mpira gani adondoshe — mwekundu au bluu? Mkubwa au mdogo?",
      "ball3.d": "Mtoto anaudondosha kutoka urefu tofauti na kuona kuruka kunavyobadilika.",
      "ball4.d": "«Mpira upi utaruka juu zaidi?» Tabiri kwanza, kisha jaribu.",
      "ball5.d": "«Kwa nini mpira mkubwa uliruka chini?» Jaribu, eleza, husishe na ulimwengu halisi.",
      "sim0.n": "Kitu kinachoanguka", "sim1.n": "Kitu kinachopinduka", "sim2.n": "Kupanga",
      "sim3.n": "Kulinganisha", "sim4.n": "Kuchanganya rangi", "sim5.n": "Kuhesabu",
      "sim6.n": "Mmea unaokua", "sim7.n": "Mchana/Usiku", "sim8.n": "Hali ya hewa",
      "sim9.n": "Kuelea/Kuzama", "sim10.n": "Mwanga/Kivuli", "sim11.n": "Sauti",
      "sim12.n": "Miundo", "sim13.n": "Kuzungusha umbo", "sim14.n": "Kujenga",
      "sim15.n": "Uchaguzi wa hadithi", "sim16.n": "Hisi za husika", "sim17.n": "Makazi ya mnyama",
      "sim.live": "Inapatikana", "sim.soon": "Karibuni"
    },

    it: {
      "ball0.m": "GUARDARE", "ball1.m": "TOCCARE", "ball2.m": "SCEGLIERE",
      "ball3.m": "VARIARE", "ball4.m": "PREVEDERE", "ball5.m": "SPIEGARE",
      "ball0.d": "Il bebè guarda una palla che cade ancora e ancora — dolce, ripetibile, ipnotico.",
      "ball1.d": "Il bebè tocca e la palla cade. AZIONE → RISULTATO accende il cervello.",
      "ball2.d": "Il bambino sceglie quale palla lasciar cadere — rossa o blu? Grande o piccola?",
      "ball3.d": "Il bambino la lascia cadere da altezze diverse e guarda il rimbalzo cambiare.",
      "ball4.d": "«Quale palla rimbalzerà più in alto?» Prima prevedi, poi prova.",
      "ball5.d": "«Perché la palla grande ha rimbalzato meno?» Sperimenta, spiega, collega al mondo reale.",
      "sim0.n": "Oggetto che cade", "sim1.n": "Oggetto che rotola", "sim2.n": "Classificazione",
      "sim3.n": "Abbinamento", "sim4.n": "Miscela di colori", "sim5.n": "Conteggio",
      "sim6.n": "Pianta che cresce", "sim7.n": "Giorno/Notte", "sim8.n": "Meteo",
      "sim9.n": "Galleggia/Affonda", "sim10.n": "Luce/Ombra", "sim11.n": "Suono",
      "sim12.n": "Sequenze", "sim13.n": "Rotazione di forme", "sim14.n": "Costruzione",
      "sim15.n": "Scelta della storia", "sim16.n": "Emozione del personaggio", "sim17.n": "Habitat animale",
      "sim.live": "Disponibile", "sim.soon": "In arrivo"
    },

    nl: {
      "ball0.m": "KIJKEN", "ball1.m": "TIKKEN", "ball2.m": "KIEZEN",
      "ball3.m": "WISSELEN", "ball4.m": "VOORSPELLEN", "ball5.m": "UITLEGGEN",
      "ball0.d": "De baby kijkt hoe een bal keer op keer valt — zacht, herhaalbaar, betoverend.",
      "ball1.d": "De baby tikt en de bal valt. ACTIE → RESULTAAT steekt de hersenen aan.",
      "ball2.d": "De peuter kiest welke bal hij laat vallen — rood of blauw? Groot of klein?",
      "ball3.d": "De peuter laat hem van verschillende hoogtes vallen en kijkt hoe de stuit verandert.",
      "ball4.d": "„Welke bal stuitert hoger?” Voorspel eerst, en test dan.",
      "ball5.d": "„Waarom stuitert de grote bal minder?” Probeer, leg uit, verbind met de echte wereld.",
      "sim0.n": "Vallend voorwerp", "sim1.n": "Rollend voorwerp", "sim2.n": "Sorteren",
      "sim3.n": "Koppelen", "sim4.n": "Kleuren mengen", "sim5.n": "Tellen",
      "sim6.n": "Groeiplant", "sim7.n": "Dag/Nacht", "sim8.n": "Weer",
      "sim9.n": "Drijven/Zinken", "sim10.n": "Licht/Schaduw", "sim11.n": "Geluid",
      "sim12.n": "Patronen", "sim13.n": "Vormdraaien", "sim14.n": "Bouwen",
      "sim15.n": "Verhaalskeuze", "sim16.n": "Gevoel van het personage", "sim17.n": "Leefgebied",
      "sim.live": "Beschikbaar", "sim.soon": "Binnenkort"
    },

    ja: {
      "ball0.m": "見る", "ball1.m": "タッチ", "ball2.m": "選ぶ",
      "ball3.m": "変える", "ball4.m": "予想", "ball5.m": "説明",
      "ball0.d": "赤ちゃんはボールが何度も落ちるのを見ます — やさしくて、くり返しできて、夢中になります。",
      "ball1.d": "赤ちゃんがタッチするとボールが落ちます。動作 → 結果 が脳を光らせます。",
      "ball2.d": "幼児はどのボールを落とすか選びます — 赤？ 青？ 大きい？ 小さい？",
      "ball3.d": "幼児はちがう高さから落とし、はずみ方が変わるのを見ます。",
      "ball4.d": "「どのボールが高くはずむかな？」 まず予想して、それからためす。",
      "ball5.d": "「大きなボールはなぜ低かったの？」 ためして、説明して、ほんとうの世界とつなげます。",
      "sim0.n": "落ちるもの", "sim1.n": "転がるもの", "sim2.n": "なかま分け",
      "sim3.n": "ペア合わせ", "sim4.n": "色のまぜ合わせ", "sim5.n": "かずかぞえ",
      "sim6.n": "育つ植物", "sim7.n": "昼/夜", "sim8.n": "天気",
      "sim9.n": "浮く/沈む", "sim10.n": "光/かげ", "sim11.n": "音",
      "sim12.n": "模様", "sim13.n": "形を回す", "sim14.n": "つみ上げ",
      "sim15.n": "おはなしの選択", "sim16.n": "登場人物の気持ち", "sim17.n": "動物のすみか",
      "sim.live": "公開中", "sim.soon": "近日公開"
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
