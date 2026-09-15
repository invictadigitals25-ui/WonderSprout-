/* ============================================================
   WonderSprout — Ball-drop age bands + simulation templates
   (ko/bn/yo/ha/ig)
   keys: ball0..5.m (mode), ball0..5.d (desc), sim0..17.n (name)
   Age labels ("6m") stay numeric and are not translated.
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    ko: {
      "ball0.m": "보기", "ball1.m": "누르기", "ball2.m": "고르기",
      "ball3.m": "바꾸기", "ball4.m": "예측", "ball5.m": "설명",
      "ball0.d": "아기가 공이 자꾸 떨어지는 것을 봐요 — 부드럽고, 반복되고, 마음을 사로잡아요.",
      "ball1.d": "아기가 누르면 공이 떨어져요. 행동 → 결과 가 뇌를 밝혀요.",
      "ball2.d": "아이가 어떤 공을 떨어뜨릴지 골라요 — 빨강? 파랑? 큰 것? 작은 것?",
      "ball3.d": "아이가 서로 다른 높이에서 떨어뜨리고 튕기는 것이 달라지는 것을 봐요.",
      "ball4.d": "“어떤 공이 더 높이 튈까요?” 먼저 예측하고, 그다음 시험해요.",
      "ball5.d": "“큰 공은 왜 더 낮게 튈까요?” 실험하고, 설명하고, 진짜 세상과 연결해요.",
      "sim0.n": "떨어지는 물건", "sim1.n": "구르는 물건", "sim2.n": "분류",
      "sim3.n": "짝 맞추기", "sim4.n": "색 섞기", "sim5.n": "세어보기",
      "sim6.n": "자라는 식물", "sim7.n": "낮/밤", "sim8.n": "날씨",
      "sim9.n": "뜸/가라앉음", "sim10.n": "빛/그림자", "sim11.n": "소리",
      "sim12.n": "무늬", "sim13.n": "모양 돌리기", "sim14.n": "쌓기",
      "sim15.n": "이야기 선택", "sim16.n": "등장인물의 마음", "sim17.n": "동물의 보금자리",
      "sim.live": "이용 가능", "sim.soon": "곧 오픈"
    },

    bn: {
      "ball0.m": "দেখা", "ball1.m": "ছোঁয়া", "ball2.m": "বাছাই",
      "ball3.m": "বদলানো", "ball4.m": "অনুমান", "ball5.m": "ব্যাখ্যা",
      "ball0.d": "শিশু বারবার পড়তে থাকা বল দেখে — নরম, পুনরাবৃত্তিমূলক, মুগ্ধকর।",
      "ball1.d": "শিশু ছোঁয় আর বল পড়ে। কাজ → ফলাফল মস্তিষ্ককে জাগিয়ে তোলে।",
      "ball2.d": "শিশু বাছে কোন বল ফেলবে — লাল না নীল? বড় না ছোট?",
      "ball3.d": "শিশু আলাদা আলাদা উচ্চতা থেকে ফেলে আর লাফ বদলাতে দেখে।",
      "ball4.d": "«কোন বল বেশি উঁচুতে লাফাবে?» আগে অনুমান করো, তারপর যাচাই করো।",
      "ball5.d": "«বড় বল কম লাফাল কেন?» চেষ্টা করো, ব্যাখ্যা করো, আসল দুনিয়ার সাথে যোগ দাও।",
      "sim0.n": "পড়ন্ত বস্তু", "sim1.n": "গড়ানো বস্তু", "sim2.n": "বাছাই করা",
      "sim3.n": "মেলানো", "sim4.n": "রং মেশানো", "sim5.n": "গণনা",
      "sim6.n": "বাড়তে থাকা গাছ", "sim7.n": "দিন/রাত", "sim8.n": "আবহাওয়া",
      "sim9.n": "ভাসে/ডোবে", "sim10.n": "আলো/ছায়া", "sim11.n": "শব্দ",
      "sim12.n": "নকশা", "sim13.n": "আকার ঘোরানো", "sim14.n": "নির্মাণ",
      "sim15.n": "গল্পের পছন্দ", "sim16.n": "চরিত্রের অনুভূতি", "sim17.n": "প্রাণীর বাসস্থান",
      "sim.live": "চালু", "sim.soon": "শীঘ্রই"
    },

    yo: {
      "ball0.m": "WIWO", "ball1.m": "TÍTẸ", "ball2.m": "YÍYAN",
      "ball3.m": "YÍYÍPADÀ", "ball4.m": "SÍSỌTẸ́LẸ̀", "ball5.m": "ṢÍṢÀLÀYÉ",
      "ball0.d": "Ọmọ ń wo bọ́ọ̀lù tí ń ṣubú lẹ́ẹ̀kansi lẹ́ẹ̀kansi — rírọ̀, ìṣe padàpadà, tí ń fani mọ́ra.",
      "ball1.d": "Ọmọ tẹ̀ ẹ́ bọ́ọ̀lù sì ń ṣubú. ÌṢE → ÀBÁJÁDE ń tan òpó inú.",
      "ball2.d": "Ọmọ náà yan bọ́ọ̀lù tí yóò ṣubú — pupa tàbí búlùù? Ńlá tàbí kékeré?",
      "ball3.d": "Ọmọ náà ṣubú u láti orí gíga ọ̀tọ̀ọ̀tọ̀ ó sì wo bí ìfòpò ṣe ń yí padà.",
      "ball4.d": "«Bọ́ọ̀lù wo ló máa fò ga jù?» Sọ tẹ́lẹ̀ kọ́kọ́, kí o wá dán an wò.",
      "ball5.d": "«Kí nìdí tí bọ́ọ̀lù ńlá kò fi fò ga?» Dán an wò, ṣàlàyé, so pọ̀ mọ́ ayé gidi.",
      "sim0.n": "Ohun tí ń ṣubú", "sim1.n": "Ohun tí ń yípo", "sim2.n": "Ìyàtọ̀sí",
      "sim3.n": "Ìbámu", "sim4.n": "Ìdàpọ̀ àwọ̀", "sim5.n": "Kíkà",
      "sim6.n": "Ohun ọ̀gbìn tí ń dàgbà", "sim7.n": "Ọ̀sán/Òru", "sim8.n": "Ojú ọjọ́",
      "sim9.n": "Lílefo/Ìrìbomi", "sim10.n": "Ìmọ́lẹ̀/Ojìji", "sim11.n": "Ohùn",
      "sim12.n": "Àpẹẹrẹ", "sim13.n": "Yíyí àwòrán", "sim14.n": "Kíkọ́",
      "sim15.n": "Yíyàn ìtàn", "sim16.n": "Ìmọ̀lára ẹ̀dá", "sim17.n": "Ibi gbígbé ẹranko",
      "sim.live": "Wà", "sim.soon": "Láípẹ́"
    },

    ha: {
      "ball0.m": "KALLO", "ball1.m": "TABAWA", "ball2.m": "ZABAR",
      "ball3.m": "CANZAWA", "ball4.m": "HASASHEN", "ball5.m": "BAYANAWA",
      "ball0.d": "Yaro yana kallon ƙwallo tana faɗuwa sau da yawa — taushi, ana maimaitawa, yana jan hankali.",
      "ball1.d": "Yaro yana tabawa ƙwallo ta faɗi. AIKI → SAKAMAKO yana kunna kwakwalwa.",
      "ball2.d": "Yaron yana zaɓar wacce ƙwallo zai sa ta faɗi — ja ko shuɗi? Babba ko ƙarama?",
      "ball3.d": "Yaron yana sa ta faɗi daga tsayi daban-daban ya ga tsalle ya canza.",
      "ball4.d": "«Wacce ƙwallo za ta yi tsalle mafi tsawo?» Ka yi hasashe tukunna, sai ka gwada.",
      "ball5.d": "«Me ya sa babbar ƙwallo ta yi tsalle kaɗan?» Ka gwada, ka bayyana, ka haɗa da duniyar gaskiya.",
      "sim0.n": "Abu mai faɗuwa", "sim1.n": "Abu mai mirginawa", "sim2.n": "Rarrabawa",
      "sim3.n": "Daidaitawa", "sim4.n": "Haɗa launi", "sim5.n": "Ƙirgawa",
      "sim6.n": "Tsiro mai girma", "sim7.n": "Rana/Dare", "sim8.n": "Yanayin sararin samaniya",
      "sim9.n": "Yawo/Nitsewa", "sim10.n": "Haske/Inuwa", "sim11.n": "Sauti",
      "sim12.n": "Zane-zane", "sim13.n": "Juya siffa", "sim14.n": "Ginawa",
      "sim15.n": "Zaɓin labari", "sim16.n": "Jin hali na halitta", "sim17.n": "Mazaunin dabbobi",
      "sim.live": "Yana aiki", "sim.soon": "Nan ba da daɗewa ba"
    },

    ig: {
      "ball0.m": "ILELE", "ball1.m": "IMETU", "ball2.m": "ỊHỌRỌ",
      "ball3.m": "ỊGBANWE", "ball4.m": "IBURU N'UCHE", "ball5.m": "ỊKỌWA",
      "ball0.d": "Nwa na-ele bọọlụ ka ọ na-adaghachi ugboro ugboro — dị nwayọọ, a na-emeghachi ya, na-adọrọ mmasị.",
      "ball1.d": "Nwa na-emetu ya bọọlụ adaa. OMUME → NSONAAZỤ na-eme ka ụbụrụ mụọ.",
      "ball2.d": "Nwa ahụ na-ahọrọ bọọlụ ọ ga-atụ — ọbara ọbara ka ọ bụ na-acha anụnụ anụnụ? Nnukwu ka ọ bụ obere?",
      "ball3.d": "Nwa ahụ na-atụ ya site n'ịdị elu dị iche iche hụ ka ịwụli ya na-agbanwe.",
      "ball4.d": "«Bọọlụ ole ga-awụli elu karịa?» Buru ụzọ buru n'uche, wee nwalee.",
      "ball5.d": "«Gịnị mere nnukwu bọọlụ ji wụli obere?» Nwalee, kọwaa, jikọta ya na ụwa n'ezie.",
      "sim0.n": "Ihe na-adaghachi", "sim1.n": "Ihe na-agbagharị", "sim2.n": "Ịhazi",
      "sim3.n": "Ịkwekọrịta", "sim4.n": "Ịgwakọta agba", "sim5.n": "Ịgụta",
      "sim6.n": "Osisi na-eto", "sim7.n": "Ụbọchị/Abalị", "sim8.n": "Ihu igwe",
      "sim9.n": "Ise n'elu/Imikpu", "sim10.n": "Ìhè/Ndò", "sim11.n": "Ụda",
      "sim12.n": "Usoro", "sim13.n": "Ntụgharị ọdịdị", "sim14.n": "Ịrụ",
      "sim15.n": "Nhọrọ akụkọ", "sim16.n": "Mmetụta onye", "sim17.n": "Ebe obibi anụmanụ",
      "sim.live": "Dị", "sim.soon": "N'oge na-adịghị anya"
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
