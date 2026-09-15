/* WonderSprout story content — part 4: "Pip and the Little Seed" in ko/bn/yo/ha/ig.
   Completes the Pip story in all 20 translated languages (English is the data.js source). */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
ko: {
"st.pip.title":"핍과 작은 씨앗","st.pip.desc":"싹 핍이 땅속에서 깨어나요. 핍이 어떻게 자랄지 고르도록 도와줘요!","st.pip.theme":"생명 실험실 · 자라기, 물, 햇빛",
"st.pip.s1.t":"땅 깊은 곳에서 핍이라는 아주 작은 씨앗이 깨어나요. «여긴 깜깜해,» 핍이 속삭여요. «난 세상을 보고 싶어!»","st.pip.s1.c0":"💧 물 쪽으로 위로 밀어요","st.pip.s1.c1":"☀️ 따뜻한 쪽으로 위로 밀어요",
"st.pip.s2w.t":"핍이 시원한 물을 따라가다 — 톡! — 작은 초록 싹이 흙을 뚫고 나와요. «안녕, 세상!» 핍이 말해요. 비구름이 둥실 지나가요.","st.pip.s2w.c0":"🌧️ 구름에게 물 한 모금 달라고 해요","st.pip.s2w.c1":"🐝 먼저 벌에게 인사해요",
"st.pip.s2s.t":"핍이 따뜻한 햇빛을 따라가다 — 톡! — 작은 초록 싹이 흙을 뚫고 나와요. «안녕, 세상!» 핍이 말해요. 해님이 위에서 미소 지어요.","st.pip.s2s.c0":"☀️ 따뜻함을 해님에게 감사해요","st.pip.s2s.c1":"🐝 먼저 벌에게 인사해요",
"st.pip.s3bee.t":"복슬복슬한 벌이 윙윙 날아와요. «윙! 안녕, 작은 싹아! 벌은 꽃이 자라는 걸 도와줘. 꽃 친구가 될래?»","st.pip.s3bee.c0":"🌸 응! 꽃 친구가 될래",
"st.pip.s3.t":"핍은 날마다 조금씩 자라요. 잎 하나… 잎 둘… 셋! 그런데 핍은 목도 마르고 햇빛도 싶어요. 핍은 어떻게 할까요?","st.pip.s3.c0":"💧 먼저 물을 마셔요","st.pip.s3.c1":"☀️ 먼저 해님을 향해 쭉 뻗어요","st.pip.s3.c2":"🎵 자라는 노래를 불러요",
"st.pip.s4song.t":"핍이 노래해요 «자라라, 자라라, 자라라!» 벌이 춤을 춰요. 구름이 비를 조금 내려요. 해님이 고개를 내밀어요. 모두 핍이 자라도록 도와줘요!","st.pip.s4song.c0":"🌱 계속 자라자!",
"st.pip.s4.t":"뿌리에 물, 잎에 햇빛 — 핍이 꼭대기에 작은 혹을 느껴요. 봉오리예요! «멋진 일이 올 거야,» 벌이 윙윙거려요.","st.pip.s4.c0":"🌼 봉오리를 열어요!",
"st.pip.s5.t":"톡! 핍이 아름다운 황금빛 꽃이 되었어요! 벌이 춤추고, 구름이 비로 손뼉 치고, 작은 소녀가 속삭여요: «안녕, 핍». 물 + 햇빛 + 시간 + 친구 = 기적!","st.pip.s5.m":"무엇이든 물 조금, 햇빛 조금, 그리고 큰 인내로 자라요.","st.pip.s5.r":"젖은 솜을 담은 컵에 콩을 심어요. 매일 물을 주고 너만의 핍이 자라는 걸 봐요!",
},
bn: {
"st.pip.title":"পিপ আর ছোট্ট বীজ","st.pip.desc":"চারা পিপ মাটির নিচে জেগে ওঠে। পিপকে বেড়ে ওঠার পথ বেছে নিতে সাহায্য করো!","st.pip.theme":"জীবন ল্যাব · বৃদ্ধি, পানি, সূর্যালোক",
"st.pip.s1.t":"মাটির অনেক নিচে, পিপ নামের একটি ছোট্ট বীজ জেগে ওঠে। «এখানে অন্ধকার,» পিপ ফিসফিস করে। «আমি পৃথিবী দেখতে চাই!»","st.pip.s1.c0":"💧 পানির দিকে উপরে ঠেলো","st.pip.s1.c1":"☀️ উষ্ণতার দিকে উপরে ঠেলো",
"st.pip.s2w.t":"পিপ ঠান্ডা পানি অনুসরণ করে আর — পপ! — একটি ছোট্ট সবুজ চারা মাটি ফুঁড়ে বেরিয়ে আসে। «হ্যালো, পৃথিবী!» পিপ বলে। একটি বৃষ্টির মেঘ ভেসে যায়।","st.pip.s2w.c0":"🌧️ মেঘের কাছে এক চুমুক চাও","st.pip.s2w.c1":"🐝 আগে মৌমাছিকে হ্যালো বলো",
"st.pip.s2s.t":"পিপ উষ্ণ রোদ অনুসরণ করে আর — পপ! — একটি ছোট্ট সবুজ চারা মাটি ফুঁড়ে বেরিয়ে আসে। «হ্যালো, পৃথিবী!» পিপ বলে। সূর্য উপর থেকে হাসে।","st.pip.s2s.c0":"☀️ উষ্ণতার জন্য সূর্যকে ধন্যবাদ দাও","st.pip.s2s.c1":"🐝 আগে মৌমাছিকে হ্যালো বলো",
"st.pip.s3bee.t":"একটি তুলতুলে মৌমাছি গুনগুন করে আসে। «ভনভন! হ্যালো, ছোট্ট চারা! মৌমাছিরা ফুলকে বড় হতে সাহায্য করে। তুমি কি ফুলের বন্ধু হতে চাও?»","st.pip.s3bee.c0":"🌸 হ্যাঁ! ফুলের বন্ধু হব",
"st.pip.s3.t":"পিপ প্রতিদিন একটু একটু বড় হয়। একটি পাতা… দুটি পাতা… তিন! কিন্তু পিপের তৃষ্ণাও আছে আর রোদও চায়। পিপের কী করা উচিত?","st.pip.s3.c0":"💧 আগে পানি খাও","st.pip.s3.c1":"☀️ আগে সূর্যের দিকে প্রসারিত হও","st.pip.s3.c2":"🎵 বড় হওয়ার গান গাও",
"st.pip.s4song.t":"পিপ গায় «বড় হও, বড় হও, বড় হও!» মৌমাছি নাচে। মেঘ একটু বৃষ্টি দেয়। সূর্য উঁকি দেয়। সবাই পিপকে বড় হতে সাহায্য করে!","st.pip.s4song.c0":"🌱 বড় হতে থাকো!",
"st.pip.s4.t":"শিকড়ে পানি, পাতায় রোদ — পিপ উপরে একটি ছোট্ট ফোলা অংশ অনুভব করে। একটি কুঁড়ি! «চমৎকার কিছু আসছে,» মৌমাছি গুনগুন করে।","st.pip.s4.c0":"🌼 কুঁড়ি খোলো!",
"st.pip.s5.t":"পপ! পিপ একটি সুন্দর সোনালি ফুল হয়ে যায়! মৌমাছি নাচে, মেঘ বৃষ্টি দিয়ে হাততালি দেয়, আর একটি ছোট মেয়ে ফিসফিস করে: «হ্যালো, পিপ»। পানি + রোদ + সময় + বন্ধু = একটি বিস্ময়!","st.pip.s5.m":"সবকিছুই একটু পানি, একটু রোদ আর অনেক ধৈর্যে বড় হয়।","st.pip.s5.r":"ভেজা তুলোর গ্লাসে একটি বিন লাগাও। প্রতিদিন পানি দাও আর তোমার নিজের পিপকে বড় হতে দেখো!",
},
yo: {
"st.pip.title":"Pip àti Ìrùgbìn Kékeré","st.pip.desc":"Ìtàn Pip jí lẹ́yìn ilẹ̀. Ràn Pip lọ́wọ́ láti yan bí yóò ṣe dàgbà!","st.pip.theme":"Yàrá Ìyè · ìdàgbàsókè, omi, ìmọ́lẹ̀ oòrùn",
"st.pip.s1.t":"Jìnnà jìnnà lábẹ́ ilẹ̀, ìrùgbìn kékeré tí ń jẹ́ Pip jí. «Ó ṣókùnkùn níbí,» Pip ń sọ jẹ́jẹ́. «Mo fẹ́ rí ayé!»","st.pip.s1.c0":"💧 Tì sí òkè sí ọ̀dọ̀ omi","st.pip.s1.c1":"☀️ Tì sí òkè sí ọ̀dọ̀ ooru",
"st.pip.s2w.t":"Pip tẹ̀lé omi tútù, ó sì — PỌPÙ! — ìtàn aláwọ̀ ewé kékeré fọ́ ilẹ̀. «Pẹ̀lẹ́ o, ayé!» Pip wí. Àwọsánmà òjò ń fò kọjá.","st.pip.s2w.c0":"🌧️ Béèrè lọ́wọ́ àwọsánmà fún omi mímu","st.pip.s2w.c1":"🐝 Kí kòkòrò oyin ní àkọ́kọ́",
"st.pip.s2s.t":"Pip tẹ̀lé ooru oòrùn, ó sì — PỌPÙ! — ìtàn aláwọ̀ ewé kékeré fọ́ ilẹ̀. «Pẹ̀lẹ́ o, ayé!» Pip wí. Oòrùn ń rẹ́rìn-ín láti òkè.","st.pip.s2s.c0":"☀️ Dúpẹ́ lọ́wọ́ oòrùn fún ooru","st.pip.s2s.c1":"🐝 Kí kòkòrò oyin ní àkọ́kọ́",
"st.pip.s3bee.t":"Kòkòrò oyin onírùrú ń bọ̀ ní dídún. «Bzzz! Pẹ̀lẹ́ o, ìtàn kékeré! Àwọn oyin ń ràn àwọn òdòdó lọ́wọ́ láti dàgbà. Ṣé ìwọ yóò fẹ́ jẹ́ ọ̀rẹ́ òdòdó?»","st.pip.s3bee.c0":"🌸 Bẹ́ẹ̀ ni! Jẹ́ ọ̀rẹ́ òdòdó",
"st.pip.s3.t":"Pip ń dàgbà díẹ̀ lójoojúmọ́. Ewé kan… ewé méjì… mẹ́ta! Ṣùgbọ́n Pip ń gbẹ AND ó fẹ́ oòrùn. Kí ni Pip ó ṣe?","st.pip.s3.c0":"💧 Mu omi ní àkọ́kọ́","st.pip.s3.c1":"☀️ Nà sí oòrùn ní àkọ́kọ́","st.pip.s3.c2":"🎵 Kọ orin ìdàgbàsókè",
"st.pip.s4song.t":"Pip ń kọ «Dàgbà, dàgbà, dàgbà!» Kòkòrò oyin ń jó. Àwọsánmà ń rọ òjò díẹ̀. Oòrùn ń wo. Gbogbo ènìyàn ń ràn Pip lọ́wọ́ láti dàgbà!","st.pip.s4song.c0":"🌱 Máa dàgbà sí i!",
"st.pip.s4.t":"Omi lórí gbòǹgbò, oòrùn lórí ewé — Pip ń rí ìwú kékeré ní òkè. Ọ̀gbà kan! «Nǹkan ìyanu ń bọ̀,» kòkòrò oyin ń dún.","st.pip.s4.c0":"🌼 Ṣí ọ̀gbà náà!",
"st.pip.s5.t":"PỌPÙ! Pip di òdòdó wúrà ẹlẹ́wà! Kòkòrò oyin ń jó, àwọsánmà ń tẹ ọwọ́ pẹ̀lú òjò, ọmọbìnrin kékeré kan sì ń sọ jẹ́jẹ́: «Pẹ̀lẹ́ o, Pip». Omi + oòrùn + àkókò + àwọn ọ̀rẹ́ = ìyanu!","st.pip.s5.m":"Gbogbo nǹkan ń dàgbà pẹ̀lú omi díẹ̀, oòrùn díẹ̀, àti sùúrù púpọ̀.","st.pip.s5.r":"Gbìn ẹ̀wà sínú gíláàsì pẹ̀lú òwú olómi. Fún un ní omi lójoojúmọ́ kí o sì wo Pip TÌRẸ ní àrà rẹ̀ ń dàgbà!",
},
ha: {
"st.pip.title":"Pip da Ƙaramin Iri","st.pip.desc":"Tsiron Pip ya farka a ƙarƙashin ƙasa. Taimaka wa Pip ya zaɓi yadda zai girma!","st.pip.theme":"Dakin Gwaji na Rayuwa · girma, ruwa, hasken rana",
"st.pip.s1.t":"Zurfi a ƙarƙashin ƙasa, ƙaramin iri mai suna Pip ya farka. «Anan duhu ne,» Pip ya yi ɓata. «Ina son ganin duniya!»","st.pip.s1.c0":"💧 Tura sama zuwa ga ruwa","st.pip.s1.c1":"☀️ Tura sama zuwa ga dumi",
"st.pip.s2w.t":"Pip ya bi ruwan sanyi kuma — POP! — ƙaramin tsire mai kore ya karya ƙasa. «Sannu, duniya!» Pip ya ce. Gajimaren ruwan sama ya wuce yana yawo.","st.pip.s2w.c0":"🌧️ Nemi gajimare sha","st.pip.s2w.c1":"🐝 Fara gaishe wa kudan zuma",
"st.pip.s2s.t":"Pip ya bi zafin rana kuma — POP! — ƙaramin tsire mai kore ya karya ƙasa. «Sannu, duniya!» Pip ya ce. Ranar tana murnar daga sama.","st.pip.s2s.c0":"☀️ Godewa rana don dumi","st.pip.s2s.c1":"🐝 Fara gaishe wa kudan zuma",
"st.pip.s3bee.t":"Kudan zuma mai gashi ya zo yana kuka. «Bzzz! Sannu, ƙaramin tsire! Kudan zuma suna taimaka furanni girma. Za ka so ka zama abokin furanni?»","st.pip.s3bee.c0":"🌸 Ee! Zan zama abokin furanni",
"st.pip.s3.t":"Pip yana girma ɗan kaɗan kowace rana. Ganye ɗaya… ganye biyu… uku! Amma Pip yana jin ƙishirwa KUMA yana son rana. Me ya kamata Pip ya yi?","st.pip.s3.c0":"💧 Sha ruwa da farko","st.pip.s3.c1":"☀️ Miƙa zuwa rana da farko","st.pip.s3.c2":"🎵 Waƙar girma",
"st.pip.s4song.t":"Pip yana waƙa «Girma, girma, girma!» Kudan zuma yana rawa. Gajimare yana ruwan sama kaɗan. Rana tana duba. Kowa yana taimaka wa Pip girma!","st.pip.s4song.c0":"🌱 Ci gaba da girma!",
"st.pip.s4.t":"Ruwa a saiwoyi, rana a ganye — Pip ya ji ƙaramin kumburi a sama. Ƙwayar cuta! «Wani abu mai ban mamaki yana zuwa,» kudan zuma ya yi amo.","st.pip.s4.c0":"🌼 Buɗe ƙwayar!",
"st.pip.s5.t":"POP! Pip ya zama fure mai kyau na zinare! Kudan zuma yana rawa, gajimare yana taƙawa da ruwan sama, kuma yarinya ƙarama tana ɓata: «Sannu, Pip». Ruwa + rana + lokaci + abokai = mamaki!","st.pip.s5.m":"Komai yana girma da ɗan ruwa, ɗan rana, da haƙuri mai yawa.","st.pip.s5.r":"Shuka wake a cikin kofi tare da audaka mai laushi. Yi masa ruwa kowace rana kuma ka ga naka Pip yana girma!",
},
ig: {
"st.pip.title":"Pip na Obere Mkpụrụ","st.pip.desc":"Ụtụtụ Pip tetara n'okpuru ala. Nyere Pip aka ịhọrọ otu ọ ga-esi too!","st.pip.theme":"Ụlọ Nyocha Ndụ · itolite, mmiri, ìhè anyanwụ",
"st.pip.s1.t":"N'ime ime ala, obere mkpụrụ aha ya bụ Pip tetara. «Ebe a gbara ọchịchịrị,» Pip na-ekwu nwayọ. «Achọrọ m ịhụ ụwa!»","st.pip.s1.c0":"💧 Kwaa elu gaa na mmiri","st.pip.s1.c1":"☀️ Kwaa elu gaa na okpomọkụ",
"st.pip.s2w.t":"Pip soro mmiri jụrụ oyi gaa ma — PỌP! — obere ụtụtụ akwụkwọ ndụ akwụkwọ ndụ gbawara ala. «Nnọọ, ụwa!» Pip kwuru. Igwe ojii mmiri na-ese n'elu.","st.pip.s2w.c0":"🌧️ Rịọ igwe ojii ka ọ ṅụọ","st.pip.s2w.c1":"🐝 Kele aṅụ mbụ",
"st.pip.s2s.t":"Pip soro okpomọkụ anyanwụ gaa ma — PỌP! — obere ụtụtụ akwụkwọ ndụ akwụkwọ ndụ gbawara ala. «Nnọọ, ụwa!» Pip kwuru. Anyanwụ na-amụmụ ọnụ ọchị site n'elu.","st.pip.s2s.c0":"☀️ Kele anyanwụ maka okpomọkụ","st.pip.s2s.c1":"🐝 Kele aṅụ mbụ",
"st.pip.s3bee.t":"Aṅụ nwere ajị bịara na-ebu ụda. «Bzzz! Nnọọ, obere ụtụtụ! Aṅụ na-enyere okooko osisi aka itolite. Ị ga-achọ ịbụ enyi okooko osisi?»","st.pip.s3bee.c0":"🌸 Ee! Abụrụ enyi okooko osisi",
"st.pip.s3.t":"Pip na-eto ntakịrị kwa ụbọchị. Otu akwụkwọ… akwụkwọ abụọ… atọ! Ma Pip nwere akpịrị ịkpọ nkụ NA ọ chọrọ anyanwụ. Gịnị ka Pip kwesịrị ime?","st.pip.s3.c0":"💧 ṅụọ mmiri mbụ","st.pip.s3.c1":"☀️ Gbatịa gaa na anyanwụ mbụ","st.pip.s3.c2":"🎵 Bụọ abụ itolite",
"st.pip.s4song.t":"Pip na-abụ abụ «Too, too, too!» Aṅụ na-agba egwu. Igwe ojii na-ezo mmiri ntakịrị. Anyanwụ na-ele anya. Onye ọ bụla na-enyere Pip aka itolite!","st.pip.s4song.c0":"🌱 Gaa n'ihu na-eto!",
"st.pip.s4.t":"Mmiri n'osisi, anyanwụ n'akwụkwọ — Pip na-anụ obere mkpọ elu. Pupu! «Ihe dị ebube na-abịa,» aṅụ na-eme ụda.","st.pip.s4.c0":"🌼 Mepee pupu!",
"st.pip.s5.t":"PỌP! Pip ghọrọ okooko osisi ọla edo mara mma! Aṅụ na-agba egwu, igwe ojii na-akụ aka na mmiri ozuzo, nwatakịrị nwanyị na-ekwu nwayọ: «Nnọọ, Pip». Mmiri + anyanwụ + oge + ndị enyi = ihe ebube!","st.pip.s5.m":"Ihe niile na-eto na ntakịrị mmiri, ntakịrị anyanwụ, na ndidi dị ukwuu.","st.pip.s5.r":"Kụọ agwa n'iko nwere owu mmiri. Tinye ya mmiri kwa ụbọchị wee hụ Pip nke gị ka ọ na-eto!",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
