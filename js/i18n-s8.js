/* WonderSprout story content — part 8: "Bloop's Big Bath" in ko/bn/yo/ha/ig.
   Completes the two demo-free stories (Pip, Bloop) in all 20 translated languages. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
ko: {
"st.bloop.title":"블룹의 큰 목욕","st.bloop.desc":"물방울 블룹이 욕조에 물을 받고 있어요. 어떤 장난감이 뜰까요?","st.bloop.theme":"뜨기와 가라앉기 · 예측, 물놀이",
"st.bloop.b1.t":"첨벙 첨벙! 물방울 블룹이 큰 욕조에 물을 받고 있어요. «목욕 시간!» 블룹이 노래해요. 장난감들이 가장자리에서 기다려요. 누가 먼저 들어갈까요?","st.bloop.b1.c0":"🦆 고무 오리 루비","st.bloop.b1.c1":"🪨 작은 돌 로키",
"st.bloop.b2duck.t":"퐁당! 오리 루비가 물 위에 떨어져요 그리고… 떠요! 위아래, 위아래. «난 떠요!» 루비가 즐겁게 꽥꽥거려요. «뜨는 것들은 물 위를 타고 다녀요.»","st.bloop.b2duck.c0":"🪨 이제 돌 로키를 해 봐요",
"st.bloop.b2rock.t":"퐁당! 돌 로키가 곧장 아래로 가라앉아요… 꿀꺽 꿀꺽 꿀꺽… 바닥까지. «난 가라앉아요!» 로키가 거품을 뿜어요. «무겁고 물을 끌어안는 것들은 가라앉아요.»","st.bloop.b2rock.c0":"🦆 이제 오리 루비를 해 봐요",
"st.bloop.b3.t":"블룹이 노란 스펀지와 쇠숟가락을 들어요. «맞혀 봐, 맞혀 봐!» 블룹이 노래해요. «실험하기 전에 짐작해 봐 — 어느 것이 뜰까요?»","st.bloop.b3.c0":"🧽 스펀지가 떠요!","st.bloop.b3.c1":"🥄 숟가락이 떠요!",
"st.bloop.b4sponge.t":"맞혔어요! 스펀지가 노란 작은 배처럼 떠요. 물도 빨아들여서 무거워지기도 해요! 숟가락은 로키 곁으로 가라앉아요. 딩 딩!","st.bloop.b4sponge.c0":"🫧 거품 낼 시간!",
"st.bloop.b4spoon.t":"어머! 숟가락이 가라앉아요 — 꿀꺽 꿀꺽 — 로키 곁에 앉으려고요. 그리고 보세요! 스펀지가 노란 작은 배처럼 떠요. 짐작하고 실험하는 것이 과학자가 배우는 방법이에요!","st.bloop.b4spoon.c0":"🫧 거품 낼 시간!",
"st.bloop.b5.t":"블룹이 거품 산을 불어요! 오리는 뜨고, 스펀지는 항해하고, 로키는 바닥에서 봐요. «뜨는 건 위, 가라앉는 건 아래!» 블룹이 환호해요. «다음 목욕 시간에 만나요!»","st.bloop.b5.m":"어떤 것은 뜨고 어떤 것은 가라앉아요 — 짐작하고 실험하는 것이 우리가 배우는 방법이에요!","st.bloop.b5.r":"다음 목욕 때 안전한 장난감 3개를 시험해요. 먼저 짐작해 봐요: 뜰까요 가라앉을까요? 그리고 확인해요!",
},
bn: {
"st.bloop.title":"ব্লুপের বড় স্নান","st.bloop.desc":"জলের ফোঁটা ব্লুপ বাথটব ভরছে। কোন খেলনাগুলো ভাসবে?","st.bloop.theme":"ভাসা ও ডোবা · পূর্বাভাস, জলখেলা",
"st.bloop.b1.t":"ছপাৎ ছপাৎ! জলের ফোঁটা ব্লুপ বড় বাথটব ভরছে। «স্নানের সময়!» ব্লুপ গায়। খেলনাগুলো কিনারায় অপেক্ষা করছে। কে আগে যাবে?","st.bloop.b1.c0":"🦆 রাবারের হাঁস রুবি","st.bloop.b1.c1":"🪨 ছোট পাথর রকি",
"st.bloop.b2duck.t":"প্লপ! রুবি হাঁস জলে পড়ে আর… সে ভাসে! ওঠে-নামে, ওঠে-নামে। «আমি ভাসি!» রুবি আনন্দে ডাকে। «যেসব জিনিস ভাসে তারা জলের উপর দিয়ে চলে।»","st.bloop.b2duck.c0":"🪨 এবার পাথর রকিকে চেষ্টা করো",
"st.bloop.b2rock.t":"প্লপ! রকি পাথর সোজা নিচে ডুবে যায়… গলু গলু গলু… একেবারে তলা পর্যন্ত। «আমি ডুবি!» রকি বুদবুদ তুলে। «ভারী জিনিস যা জলকে জড়িয়ে ধরে, তা ডুবে যায়।»","st.bloop.b2rock.c0":"🦆 এবার রুবি হাঁসকে চেষ্টা করো",
"st.bloop.b3.t":"ব্লুপ একটি হলুদ স্পঞ্জ আর একটি ধাতুর চামচ তুলে ধরে। «অনুমান করো, অনুমান করো!» ব্লুপ গায়। «পরীক্ষার আগে বলো — কোনটি ভাসবে?»","st.bloop.b3.c0":"🧽 স্পঞ্জ ভাসে!","st.bloop.b3.c1":"🥄 চামচ ভাসে!",
"st.bloop.b4sponge.t":"তুমি ঠিক বলেছ! স্পঞ্জ একটি ছোট হলুদ নৌকার মতো ভাসে। সে জলও শুষে নেয় আর ভারী হয়ে যায়! চামচ রকির কাছে ডুবে যায়। টিং টিং!","st.bloop.b4sponge.c0":"🫧 বুদবুদের সময়!",
"st.bloop.b4spoon.t":"ওহ! চামচ ডুবে যায় — গলু গলু — রকির সাথে বসতে। আর দেখো! স্পঞ্জ একটি ছোট হলুদ নৌকার মতো ভাসে। অনুমান করে আর পরীক্ষা করেই বিজ্ঞানীরা শেখে!","st.bloop.b4spoon.c0":"🫧 বুদবুদের সময়!",
"st.bloop.b5.t":"ব্লুপ বুদবুদের পাহাড় ফুঁ দেয়! হাঁস ভাসে, স্পঞ্জ চলে, আর রকি তলা থেকে দেখে। «ভাসমানরা উপরে, ডুবে যাওয়ারা নিচে!» ব্লুপ আনন্দে চিৎকার করে। «পরের স্নানে দেখা হবে!»","st.bloop.b5.m":"কিছু জিনিস ভাসে, কিছু ডোবে — অনুমান আর পরীক্ষা করাই শেখার উপায়!","st.bloop.b5.r":"পরের স্নানে ৩টি নিরাপদ খেলনা পরীক্ষা করো। আগে অনুমান করো: ভাসবে নাকি ডুববে? তারপর যাচাই করো!",
},
yo: {
"st.bloop.title":"Ìwẹ̀ Ńlá Bloop","st.bloop.desc":"Bloop omi ń kún abọ̀ ìwẹ̀. Àwọn eré wo ni yóò lè fò?","st.bloop.theme":"Fòfò àti Rì · àsọtẹ́lẹ̀, eré omi",
"st.bloop.b1.t":"Ṣàpá ṣàpá! Bloop omi ń kún abọ̀ ìwẹ̀ ńlá. «Àkókò ìwẹ̀!» Bloop ń kọrin. Àwọn eré dúró ní etí. Ta ni yóò wọ inú àkọ́kọ́?","st.bloop.b1.c0":"🦆 Ruby pẹ́pẹ́ rọ́bà","st.bloop.b1.c1":"🪨 Rocky òkúta kékeré",
"st.bloop.b2duck.t":"Pùlù! Ruby pẹ́pẹ́ dé lórí omi ó sì… ó ń fò! Òkè àti ìsàlẹ̀, òkè àti ìsàlẹ̀. «Mo ń fò!» Ruby ń dún pẹ̀lú ayọ̀. «Àwọn nǹkan tí ń fò ń rìn lórí omi.»","st.bloop.b2duck.c0":"🪨 Nísinsìnyí gbìyànjú òkúta Rocky",
"st.bloop.b2rock.t":"Pùlù! Òkúta Rocky rì tààrà sí ìsàlẹ̀… gúlù gúlù gúlù… títí dé ìsàlẹ̀. «Mo ń rì!» Rocky ń fo. «Àwọn nǹkan wúwo tí ń fàmọ́ omi máa ń rì.»","st.bloop.b2rock.c0":"🦆 Nísinsìnyí gbìyànjú pẹ́pẹ́ Ruby",
"st.bloop.b3.t":"Bloop gbé sifọ̀njì yálò àti ṣíbí irin ga. «Sọtẹ́lẹ̀, sọtẹ́lẹ̀!» Bloop ń kọrin. «Gbà lẹ́yìn kí á tó dán an wò — èwo ni yóò fò?»","st.bloop.b3.c0":"🧽 Sifọ̀njì náà ń fò!","st.bloop.b3.c1":"🥄 Ṣíbí náà ń fò!",
"st.bloop.b4sponge.t":"O ti gbà ọ̀tọ̀! Sifọ̀njì náà ń fò bí ọkọ̀ ojú omi yálò kékeré. Ó tilẹ̀ ń fa omi ó sì ń wúwo! Ṣíbí náà ń rì láti darapọ̀ mọ́ Rocky. Tíng tíng!","st.bloop.b4sponge.c0":"🫧 Àkókò fọ̀ọ̀mù!",
"st.bloop.b4spoon.t":"Ó! Ṣíbí náà ń rì — gúlù gúlù — láti jókòó pẹ̀lú Rocky. Kí o sì wo! Sifọ̀njì náà ń fò bí ọkọ̀ ojú omi yálò kékeré. Sísọtẹ́lẹ̀ àti dídánwò ni bí àwọn onímọ̀ sáyẹ́ǹsì ṣe ń kẹ́kọ̀ọ́!","st.bloop.b4spoon.c0":"🫧 Àkókò fọ̀ọ̀mù!",
"st.bloop.b5.t":"Bloop ń fú òkè fọ̀ọ̀mù! Pẹ́pẹ́ ń fò, sifọ̀njì ń lọ, Rocky sì ń wo láti ìsàlẹ̀. «Àwọn tó ń fò lókè, àwọn tó ń rì ní ìsàlẹ̀!» Bloop ń kígbe pẹ̀lú ayọ̀. «A ó pàdé ní àkókò ìwẹ̀ tó ń bọ̀!»","st.bloop.b5.m":"Àwọn nǹkan kan ń fò, àwọn míì ń rì — sísọtẹ́lẹ̀ àti dídánwò ni bí a ṣe ń kẹ́kọ̀ọ́!","st.bloop.b5.r":"Ní ìwẹ̀ rẹ tó ń bọ̀, dán eré 3 aláìléwu wò. Sọtẹ́lẹ̀ ní àkọ́kọ́: yóò fò tàbí rì? Lẹ́yìn náà ṣàyẹ̀wò!",
},
ha: {
"st.bloop.title":"Babban Wanki na Bloop","st.bloop.desc":"Bloop ɗigon ruwa yana cika bat. Waɗanne wasan kwaikwayo za su yi iyo?","st.bloop.theme":"Yin Iyo da Nutsewa · hasashe, wasan ruwa",
"st.bloop.b1.t":"Fasha fasha! Bloop ɗigon ruwa yana cika babban bat. «Lokacin wanka!» Bloop yana waƙa. Wasan kwaikwayo suna jira a gefe. Wa zai shiga farko?","st.bloop.b1.c0":"🦆 Ruby kwararrawa ta roba","st.bloop.b1.c1":"🪨 Rocky ƙaramin dutse",
"st.bloop.b2duck.t":"Kwasfa! Ruby kwararrawa ta sauka kan ruwa kuma… tana iyo! Sama da ƙasa, sama da ƙasa. «Ina yin iyo!» Ruby tana yi da farin ciki. «Abubuwan da ke yin iyo suna tafiya a kan ruwa.»","st.bloop.b2duck.c0":"🪨 Yanzu gwada dutse Rocky",
"st.bloop.b2rock.t":"Kwasfa! Dutse Rocky ya nutse kai tsaye… guluk guluk guluk… har zuwa ƙasa. «Ina nutsewa!» Rocky yana kumfa. «Abubuwa masu nauyi waɗanda ke rungumar ruwa suna nutsewa.»","st.bloop.b2rock.c0":"🦆 Yanzu gwada kwararrawa Ruby",
"st.bloop.b3.t":"Bloop ya ɗaga soso mai rawaya da cokali na ƙarfe. «Yi hasashe, yi hasashe!» Bloop yana waƙa. «Yi tsammani kafin mu gwada — wanne zai yi iyo?»","st.bloop.b3.c0":"🧽 Soso yana yin iyo!","st.bloop.b3.c1":"🥄 Cokali yana yin iyo!",
"st.bloop.b4sponge.t":"Ka yi tsammani daidai! Soso yana yin iyo kamar ƙaramin jirgin ruwa mai rawaya. Yana tsotsa ruwa ma ya yi nauyi! Cokali ya nutse don haɗuwa da Rocky. Tin tin!","st.bloop.b4sponge.c0":"🫧 Lokacin kumfa!",
"st.bloop.b4spoon.t":"Oh! Cokali ya nutse — guluk guluk — don zama tare da Rocky. Kuma duba! Soso yana yin iyo kamar ƙaramin jirgin ruwa mai rawaya. Yin hasashe da gwadawa shine yadda masana kimiyya ke koyon!","st.bloop.b4spoon.c0":"🫧 Lokacin kumfa!",
"st.bloop.b5.t":"Bloop ya hura dutse na kumfa! Kwararrawa tana yin iyo, soso yana tafiya, Rocky kuma yana kallo daga ƙasa. «Masu yin iyo sama, masu nutsewa ƙasa!» Bloop yana murna. «Sai lokacin wanka na gaba!»","st.bloop.b5.m":"Wasu abubuwa suna yin iyo, wasu suna nutsewa — yin hasashe da gwadawa shine yadda muke koyon!","st.bloop.b5.r":"A wankinka na gaba, gwada wasan kwaikwayo 3 masu aminci. Yi hasashe farko: iyo ko nutsewa? Sannan ka duba!",
},
ig: {
"st.bloop.title":"Nnukwu Ịsa Ahụ nke Bloop","st.bloop.desc":"Bloop mmiri na-ejupụta tub. Kedu ihe egwuregwu ga-ese n'elu?","st.bloop.theme":"Ise n'elu na Imikpu · ịkọ, egwuregwu mmiri",
"st.bloop.b1.t":"Tọm tọm! Bloop mmiri na-ejupụta nnukwu tub. «Oge ịsa ahụ!» Bloop na-abụ abụ. Ihe egwuregwu na-eche n'akụkụ. Ònye ga-ebu ụzọ banye?","st.bloop.b1.c0":"🦆 Ruby ọbọgwụ rọba","st.bloop.b1.c1":"🪨 Rocky obere nkume",
"st.bloop.b2duck.t":"Plop! Ruby ọbọgwụ dara na mmiri ma… ọ na-ese! Elu na ala, elu na ala. «Ana m ese n'elu!» Ruby na-eti mkpu n'ọṅụ. «Ihe na-ese n'elu na-aga n'elu mmiri.»","st.bloop.b2duck.c0":"🪨 Ugbu a nwalee nkume Rocky",
"st.bloop.b2rock.t":"Plop! Nkume Rocky mikpuru ozugbo… gulu gulu gulu… ruo n'ala. «Ana m mikpu!» Rocky na-epu epu. «Ihe dị arọ nke na-akpachi mmiri na-emikpu.»","st.bloop.b2rock.c0":"🦆 Ugbu a nwalee ọbọgwụ Ruby",
"st.bloop.b3.t":"Bloop welitere sponge edo na ngaji igwe. «Kọọ, kọọ!» Bloop na-abụ abụ. «Kọọ tupu anyị anwalee — kedu nke ga-ese n'elu?»","st.bloop.b3.c0":"🧽 Sponge na-ese n'elu!","st.bloop.b3.c1":"🥄 Ngaji na-ese n'elu!",
"st.bloop.b4sponge.t":"I kwuru nke ọma! Sponge na-ese n'elu dị ka obere ụgbọ mmiri edo. Ọ na-aṅụkwa mmiri ma dị arọ! Ngaji mikpuru isonye Rocky. Tin tin!","st.bloop.b4sponge.c0":"🫧 Oge epu!",
"st.bloop.b4spoon.t":"Ewoo! Ngaji mikpuru — gulu gulu — ịnọdụ Rocky. Leekwa! Sponge na-ese n'elu dị ka obere ụgbọ mmiri edo. Ịkọ na ịnwale bụ otú ndị ọkà mmụta sayensị si amụta!","st.bloop.b4spoon.c0":"🫧 Oge epu!",
"st.bloop.b5.t":"Bloop fụrụ ugwu epu! Ọbọgwụ na-ese n'elu, sponge na-aga, Rocky na-ele anya site n'ala. «Ndị na-ese n'elu n'elu, ndị na-emikpu n'okpuru!» Bloop na-aṅụrị. «Ka anyị hụ gị n'oge ịsa ahụ ọzọ!»","st.bloop.b5.m":"Ụfọdụ ihe na-ese n'elu, ụfọdụ na-emikpu — ịkọ na ịnwale bụ otú anyị si amụta!","st.bloop.b5.r":"N'oge ịsa ahụ gị ọzọ, nwalee ihe egwuregwu 3 dị nchebe. Kọọ mbụ: ọ ga-ese n'elu ka ọ ga-emikpu? Mgbe ahụ lelee!",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
