/* ============================================================
   WonderSprout — Wonder Camera object cards
   (ko/bn/yo/ha/ig)
   keys: cam.aiLooking, cam.tapAnother,
         cam.sees.<id>, cam.rw.<id>, cam.act.<id>.0..2
   ids: apple ball leaf cup teddy spoon banana car book socks drum
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    ko: {
      "cam.aiLooking": "🤖 WonderSprout AI가 보고 있어요…",
      "cam.tapAnother": "👆 다른 물건을 눌러서 살펴보세요",

      "cam.sees.apple": "반짝이는 빨간 사과",
      "cam.rw.apple": "사과를 반으로 잘라 보세요 — 안에 별이 숨어 있어요!",
      "cam.act.apple.0": "색깔: “또 어떤 것이 빨간색인지 찾을 수 있나요?”",
      "cam.act.apple.1": "수학: 식탁 위의 사과를 세어 보세요 — 1, 2, 3!",
      "cam.act.apple.2": "생활: “사과는 나무에서 자라요. 아주 작은 꽃에서요.”",

      "cam.sees.ball": "동그랗고 잘 튀는 공",
      "cam.rw.ball": "물리 놀이터에서 공을 가지고 놀고, 진짜 공도 튀겨서 비교해 보세요!",
      "cam.act.ball.0": "물리: 무릎 높이에서 떨어뜨리고, 그다음 더 높이에서 떨어뜨려 보세요. 어느 쪽이 더 높이 튈까요?",
      "cam.act.ball.1": "모양: 동그랗게 굴려 보세요. 공은 동그래서 굴러가요!",
      "cam.act.ball.2": "놀이: 서로 굴려 주면서 “굴러간다… 잡아라!”라고 말해요.",

      "cam.sees.leaf": "초록 나뭇잎",
      "cam.rw.leaf": "서로 다른 나뭇잎 3장을 모아 두꺼운 책에 끼워 눌러 보세요.",
      "cam.act.leaf.0": "생활: “나뭇잎은 햇빛을 마시고 나무가 숨 쉬는 것을 도와줘요.”",
      "cam.act.leaf.1": "색깔: 초록 잎, 노란 잎, 바삭한 갈색 잎을 찾아보세요.",
      "cam.act.leaf.2": "날씨: 잎에 후 하고 불어 보세요 — 바람이 나뭇잎을 춤추게 해요!",

      "cam.sees.cup": "물을 마시는 컵",
      "cam.rw.cup": "목욕할 때, 숫자를 세면서 컵에 물을 채우고 비우기를 5번 해 보세요.",
      "cam.act.cup.0": "물: 이 컵은 뜰까요, 가라앉을까요? 먼저 맞혀 보고 안전하게 시험해 보세요!",
      "cam.act.cup.1": "수학: 물을 붓고 비우고 — “가득”과 “비어 있음”.",
      "cam.act.cup.2": "소리: 숟가락으로 살살 두드려 보세요. 띵!",

      "cam.sees.teddy": "폭신한 테디베어",
      "cam.rw.teddy": "테디에게 잘 자라는 포옹을 해 주고 착한 말 세 가지를 말해 보세요.",
      "cam.act.teddy.0": "마음: “테디는 오늘 기분이 어때요? 즐거워요? 졸려요?”",
      "cam.act.teddy.1": "흉내 놀이: 다과회를 열고 테디와 함께 나눠요.",
      "cam.act.teddy.2": "이야기: 테디가 WonderSprout 이야기 중 어떤 것을 읽을지 고르게 해 보세요!",

      "cam.sees.spoon": "반짝이는 금속 숟가락",
      "cam.rw.spoon": "서로 다른 냄비나 그릇 3개로 부드러운 숟가락 북을 만들어 보세요.",
      "cam.act.spoon.0": "소리: 숟가락을 살살 두드려 보세요 — 높은 냄비, 낮은 냄비. 소리가 달라요!",
      "cam.act.spoon.1": "뜸/가라앉음: 금속 숟가락은 보통 가라앉아요. 먼저 맞혀 보세요!",
      "cam.act.spoon.2": "빛: 반짝이는 뒷면에서 우스운 내 모습을 찾아보세요!",

      "cam.sees.banana": "노란 바나나",
      "cam.rw.banana": "진짜 바나나를 함께 까 보세요 — 어느 쪽 반은 누구 것일까요? 나누는 것도 수학이에요!",
      "cam.act.banana.0": "색깔: 노란 것을 3개 더 찾아보세요 — 해, 오리, 레몬!",
      "cam.act.banana.1": "수학: 조각으로 나눠 보세요 — 몇 조각일까요? 세어 보세요!",
      "cam.act.banana.2": "감각: 냄새 맡고, 만지고, 맛봐요. 달콤하고 부드러워요!",

      "cam.sees.car": "작은 장난감 자동차",
      "cam.rw.car": "쿠션으로 만든 경사로에서 자동차 두 대를 경주시켜 보세요. 어느 쪽이 더 빠를까요? 먼저 맞혀 보세요!",
      "cam.act.car.0": "물리: 책으로 경사로를 만들어 보세요 — 경사가 가파를수록 자동차가 빨라져요!",
      "cam.act.car.1": "수학: 바퀴를 세어 보세요. 자동차 2대에는 바퀴가 몇 개 있을까요?",
      "cam.act.car.2": "놀이: 빨간 불, 초록 불! 신호에 따라 밀고 멈춰요.",

      "cam.sees.book": "이야기책",
      "cam.rw.book": "오늘 책 한 권을 읽고, 이번에는 아이가 부모님에게 “읽어” 주게 해 보세요.",
      "cam.act.book.0": "언어: 책을 열기 전에 표지에 있는 것 3가지를 말해 보세요.",
      "cam.act.book.1": "이야기: 아이가 책을 넘기게 해 주세요 — 아이가 대장이에요!",
      "cam.act.book.2": "연기해 보기: 크고 우스운 목소리로 등장인물이 되어 보세요.",

      "cam.sees.socks": "양말 한 켤레",
      "cam.rw.socks": "다음 빨래 때, 아이가 공식 양말 짝 맞추기 담당이 돼요.",
      "cam.act.socks.0": "논리: 빨래 짝 맞추기! 색과 무늬로 짝을 찾아보세요.",
      "cam.act.socks.1": "수학: 켤레를 세어 보세요. 양말 2개 = 1켤레!",
      "cam.act.socks.2": "감각: 부드럽고, 쭉 늘어나고, 따뜻해요 — 다음은 양말 인형?",

      "cam.sees.drum": "북",
      "cam.rw.drum": "냄비와 나무 숟가락으로 북을 만들어 행진하며 연주해 보세요!",
      "cam.act.drum.0": "소리: 큰 소리와 속삭이는 소리. 차이를 느껴 보세요!",
      "cam.act.drum.1": "리듬: 내 박자를 따라 해 보세요 — 쿵 쿵 짝!",
      "cam.act.drum.2": "음악: 내가 만든 북소리에 맞춰 방 안을 행진해 보세요."
    },

    bn: {
      "cam.aiLooking": "🤍 WonderSprout AI দেখছে…",
      "cam.tapAnother": "👆 স্ক্যান করতে অন্য একটি বস্তুতে ট্যাপ করুন",

      "cam.sees.apple": "একটি চকচকে লাল আপেল",
      "cam.rw.apple": "আপেলটি একসাথে অর্ধেক কাটো — ভেতরে একটি তারা লুকানো আছে!",
      "cam.act.apple.0": "রঙ: «তুমি কি আর কিছু লাল রঙের খুঁজে পেতে পারো?»",
      "cam.act.apple.1": "গণিত: টেবিলের আপেল গোনো — ১, ২, ৩!",
      "cam.act.apple.2": "জীবন: «আপেল গাছে জন্মায়, ছোট্ট ফুল থেকে।»",

      "cam.sees.ball": "একটি গোল, লাফানো বল",
      "cam.rw.ball": "পদার্থবিদ্যা খেলার মাঠে বলটি চেষ্টা করো, তারপর আসল বল লাফাও আর তুলনা করো!",
      "cam.act.ball.0": "পদার্থবিদ্যা: হাঁটু থেকে ফেলো, তারপর উপর থেকে। কোন লাফটি বড়?",
      "cam.act.ball.1": "আকৃতি: গোল করে গড়াও। বল গোল — তারা গড়ায়!",
      "cam.act.ball.2": "খেলা: একে অপরকে গড়াও আর বলো «গড়াও… ধরো!»",

      "cam.sees.leaf": "একটি সবুজ পাতা",
      "cam.rw.leaf": "৩টি ভিন্ন পাতা সংগ্রহ করো আর ভারী বইয়ে চেপে রাখো।",
      "cam.act.leaf.0": "জীবন: «পাতা রোদ পান করে আর গাছকে শ্বাস নিতে সাহায্য করে।»",
      "cam.act.leaf.1": "রঙ: একটি সবুজ পাতা, একটি হলুদ পাতা, একটি মচমচে বাদামি পাতা খোঁজো।",
      "cam.act.leaf.2": "আবহাওয়া: পাতায় ফুঁ দাও — বাতাস পাতাকে নাচায়!",

      "cam.sees.cup": "একটি পান করার কাপ",
      "cam.rw.cup": "গোসলের সময়, গুনতে গুনতে কাপে ৫ বার পানি ভরো আর ঢালো।",
      "cam.act.cup.0": "পানি: এই কাপটি কি ভাসবে নাকি ডুববে? অনুমান করো, তারপর নিরাপদে পরীক্ষা করো!",
      "cam.act.cup.1": "গণিত: পানি ভিতরে আর বাইরে ঢালো — «ভরা» আর «খালি»।",
      "cam.act.cup.2": "শব্দ: চামচ দিয়ে আলতো চাপ দাও। টিং!",

      "cam.sees.teddy": "একটি আলিঙ্গনের টেডি ভালুক",
      "cam.rw.teddy": "টেডিকে শুভরাত্রির আলিঙ্গন দাও আর তিনটি সুন্দর কথা বলো।",
      "cam.act.teddy.0": "অনুভূতি: «আজ টেডি কেমন অনুভব করছে? খুশি? ঘুম পাচ্ছে?»",
      "cam.act.teddy.1": "কল্পনা: চা পার্টি করো আর টেডির সাথে ভাগ করো।",
      "cam.act.teddy.2": "গল্প: টেডিকে বেছে নিতে দাও WonderSprout-এর কোন গল্পটি পড়বে!",

      "cam.sees.spoon": "একটি চকচকে ধাতব চামচ",
      "cam.rw.spoon": "৩টি ভিন্ন পাতিল বা বাটিতে চামচের নরম ড্রাম বানাও।",
      "cam.act.spoon.0": "শব্দ: চামচ আলতো চাপ দাও — উঁচু পাতিল, নিচু পাতিল। ভিন্ন শব্দ!",
      "cam.act.spoon.1": "ভাসা/ডোবা: ধাতব চামচ সাধারণত ডোবে। আগে অনুমান করো!",
      "cam.act.spoon.2": "আলো: চকচকে পিঠে তোমার মজার প্রতিচ্ছবি দেখো!",

      "cam.sees.banana": "একটি হলুদ কলা",
      "cam.rw.banana": "একসাথে আসল কলা ছাড়াও — কে কোন অর্ধেক পাবে? ভাগ করাও গণিত!",
      "cam.act.banana.0": "রঙ: আরও ৩টি হলুদ জিনিস খোঁজো — সূর্য, হাঁস, লেবু!",
      "cam.act.banana.1": "গণিত: টুকরোয় ছাড়াও — কয়টি টুকরো? গোনো!",
      "cam.act.banana.2": "ইন্দ্রিয়: শুঁকে দেখো, ছুঁয়ে দেখো, চেখে দেখো। মিষ্টি আর নরম!",

      "cam.sees.car": "একটি ছোট খেলনা গাড়ি",
      "cam.rw.car": "বালিশের ঢালুতে দুটি গাড়ির দৌড় করাও। কোনটি দ্রুত? আগে অনুমান করো!",
      "cam.act.car.0": "পদার্থবিদ্যা: বই দিয়ে ঢালু বানাও — বেশি ঢালু, বেশি দ্রুত গাড়ি!",
      "cam.act.car.1": "গণিত: চাকা গোনো। ২টি গাড়িতে কয়টি চাকা আছে?",
      "cam.act.car.2": "খেলা: লাল বাতি, সবুজ বাতি! সংকেতে ঠেলো আর থামো।",

      "cam.sees.book": "একটি গল্পের বই",
      "cam.rw.book": "আজ একটি বই পড়ো — তারপর তোমার শিশুকে সেটি তোমাকে «পড়ে শোনাতে» দাও।",
      "cam.act.book.0": "ভাষা: খোলার আগে প্রচ্ছদের ৩টি জিনিসের নাম বলো।",
      "cam.act.book.1": "গল্প: শিশুকে পাতা উল্টাতে দাও — সে বস!",
      "cam.act.book.2": "অভিনয় করো: বড়, মজার গলায় চরিত্র হও।",

      "cam.sees.socks": "এক জোড়া মোজা",
      "cam.rw.socks": "পরের কাচার সময়, তোমার শিশু হবে অফিসিয়াল মোজা মেলানোর দায়িত্বে।",
      "cam.act.socks.0": "যুক্তি: কাপড় মেলানো! রঙ আর নকশা দিয়ে জোড়া খোঁজো।",
      "cam.act.socks.1": "গণিত: জোড়া গোনো। ২টি মোজা = ১ জোড়া!",
      "cam.act.socks.2": "ইন্দ্রিয়: নরম, প্রসারিত, উষ্ণ — পরে মোজার পুতুল?",

      "cam.sees.drum": "একটি ড্রাম",
      "cam.rw.drum": "পাতিল আর কাঠের চামচ দিয়ে ড্রাম বানাও — কুচকাওয়াজ করো আর বাজাও!",
      "cam.act.drum.0": "শব্দ: জোরে বাদ্য আর ফিসফিস বাদ্য। পার্থক্য অনুভব করো!",
      "cam.act.drum.1": "ছন্দ: আমার ছন্দ নকল করো — ধুম ধুম তালি!",
      "cam.act.drum.2": "সংগীত: নিজের ড্রামের ছন্দে ঘরে কুচকাওয়াজ করো।"
    },

    yo: {
      "cam.aiLooking": "🤍 WonderSprout AI ń wo…",
      "cam.tapAnother": "👆 Tẹ ohun mìíràn láti ṣàyẹ̀wò rẹ̀",

      "cam.sees.apple": "èso òòyìnbó pupa tó ń tàn",
      "cam.rw.apple": "Ge òòyìnbó náà sí ìdajì pọ̀ — ìràwọ̀ kan wà ní inú rẹ̀!",
      "cam.act.apple.0": "Àwọ̀: «Ṣé o lè rí ohun mìíràn tí ó jẹ́ PUPA?»",
      "cam.act.apple.1": "Ìṣirò: ka àwọn òòyìnbó lórí tábìlì — 1, 2, 3!",
      "cam.act.apple.2": "Ìgbésí ayé: «Òòyìnbó máa ń dàgbà lórí igi, láti inú òdòdó kékeré.»",

      "cam.sees.ball": "bọ́ọ̀lù roboto tó ń fò",
      "cam.rw.ball": "Gbìyànjú bọ́ọ̀lù náà ní pápá ìmọ̀ ẹ̀rọ, lẹ́yìn náà mú bọ́ọ̀lù GIDI fò kí o sì fi wé e!",
      "cam.act.ball.0": "Ìmọ̀ ẹ̀rọ: jẹ́ kí ó ṣubú láti orí ẹsẹ̀ rẹ, lẹ́yìn náà láti òkè. Ìfò wo ló tóbi jù?",
      "cam.act.ball.1": "Ìrísí: yí i káàkiri. Bọ́ọ̀lù jẹ́ roboto — wọ́n ń yípo!",
      "cam.act.ball.2": "Eré: yí i fún ara yín kí ẹ sì sọ pé «yípo… gbá a!»",

      "cam.sees.leaf": "ẹ̀wẹ̀ aláwọ̀ ewé",
      "cam.rw.leaf": "Ko ẹ̀wẹ̀ mẹ́ta ọ̀tọ̀ọ̀tọ̀ kí o sì tẹ̀ wọ́n sínú ìwé wíwúwo.",
      "cam.act.leaf.0": "Ìgbésí ayé: «Ẹ̀wẹ̀ máa ń mu ìmọ́lẹ̀ oòrùn, ó sì ń rán igi lọ́wọ́ láti mí.»",
      "cam.act.leaf.1": "Àwọ̀: rí ẹ̀wẹ̀ aláwọ̀ ewé, ẹ̀wẹ̀ aláwọ̀ yèlò, ẹ̀wẹ̀ abẹ́rẹ́ dúdú.",
      "cam.act.leaf.2": "Ojú ọjọ́: fẹ́ ẹ̀wẹ̀ náà — ẹ̀fúùfù máa ń mú ẹ̀wẹ̀ jó!",

      "cam.sees.cup": "ifé mímu",
      "cam.rw.cup": "Ní àkókò ìwẹ̀, kún ifé náà kí o sì dà á ní ìgbà 5 nígbà tí ọ bá ń kà.",
      "cam.act.cup.0": "Omi: ṣé ifé yìí yóò léfòò tàbí yóò rì? Sọ tẹ́lẹ̀, lẹ́yìn náà dán an wò ní àìléwu!",
      "cam.act.cup.1": "Ìṣirò: da omi sínú àti jáde — «ó kún» àti «ó ṣófo».",
      "cam.act.cup.2": "Ohùn: tẹ̀ ẹ́ pẹ̀lú ṣíbí ní rírọ̀. Tíng!",

      "cam.sees.teddy": "ọmọ bíìtì aládùn fún ìfẹnukò",
      "cam.rw.teddy": "Fún Teddy ní ìfẹnukò àlẹ́ àníre kí o sì sọ ọ̀rọ̀ onínúure mẹ́ta.",
      "cam.act.teddy.0": "Ìmọ̀lára: «Báwo ni Teddy ṣe ń nímọ̀lára lónìí? Ayọ̀? Óòrùn?»",
      "cam.act.teddy.1": "Ìfarawe: ṣe àjọ tìí kí ẹ sì pín ín pẹ̀lú Teddy.",
      "cam.act.teddy.2": "Ìtàn: jẹ́ kí Teddy yan ìtàn WonderSprout wo ni a ó kà!",

      "cam.sees.spoon": "ṣíbí irin tó ń tàn",
      "cam.rw.spoon": "Ṣe ìlù ṣíbí rírọ̀ lórí ìkòkò tàbí àbọ́ mẹ́ta ọ̀tọ̀ọ̀tọ̀.",
      "cam.act.spoon.0": "Ohùn: tẹ àwọn ṣíbí ní rírọ̀ — ìkòkò gíga, ìkòkò kékeré. Ohùn ọ̀tọ̀ọ̀tọ̀!",
      "cam.act.spoon.1": "Lílefo/ìrìbomi: ṣíbí irin máa ń rì sábà. Sọ tẹ́lẹ̀!",
      "cam.act.spoon.2": "Ìmọ́lẹ̀: wo òjìji rẹ alárinrin ní ẹ̀yìn tó ń tàn!",

      "cam.sees.banana": "ọ̀gẹ̀dẹ̀ yèlò",
      "cam.rw.banana": "Ẹ wo ọ̀gẹ̀dẹ̀ gidi pọ̀ — ta ni yóò gba ìdajì wo? Pípín jẹ́ ìṣirò pẹ̀lú!",
      "cam.act.banana.0": "Àwọ̀: rí ohun yèlò mẹ́ta mìíràn — oòrùn, ẹyẹ, ọ̀sàn!",
      "cam.act.banana.1": "Ìṣirò: wọ ọ́ sí èérún — èérún mélòó? Kà á!",
      "cam.act.banana.2": "Ìmọ̀lára: fọ̀ ọ́, fi ọwọ́ kan an, dán an wò. Dídùn àti rírọ̀!",

      "cam.sees.car": "ọkọ̀ ayọ́kẹ́lẹ́ ìṣeré kékeré",
      "cam.rw.car": "Ẹ jẹ́ kí ọkọ̀ méjì díje lórí ìtẹ̀ ìrọ̀rí. Èwo ló yára jù? Sọ tẹ́lẹ̀!",
      "cam.act.car.0": "Ìmọ̀ ẹ̀rọ: kọ́ ìtẹ̀ láti inú ìwé — ìtẹ̀ tó ga jù, ọkọ̀ tó yára jù!",
      "cam.act.car.1": "Ìṣirò: ka àwọn taya. Taya mélòó ni ọkọ̀ méjì ní?",
      "cam.act.car.2": "Eré: ìmọ́lẹ̀ pupa, ìmọ́lẹ̀ aláwọ̀ ewé! Ti kí o sì DÚRÓ nípa àṣẹ.",

      "cam.sees.book": "ìwé ìtàn",
      "cam.rw.book": "Ka ìwé kan lónìí — lẹ́yìn náà jẹ́ kí ọmọ rẹ «kà á» fún ọ.",
      "cam.act.book.0": "Èdè: sọ ohun mẹ́ta lórí ìbòjú ṣáájú kí o tó ṣí i.",
      "cam.act.book.1": "Ìtàn: jẹ́ kí ọmọ rẹ yí ojú-ìwé padà — òun ni ọ̀gá!",
      "cam.act.book.2": "Ṣe é: jẹ́ àwọn ohun kikọ pẹ̀lú ohùn ńlá alárinrin.",

      "cam.sees.socks": "báàtà méjì",
      "cam.rw.socks": "Ní ìfọ̀ṣọ tó ń bọ̀, ọmọ rẹ yóò di Olùbámu Báàtà Àṣẹ.",
      "cam.act.socks.0": "Ìtúnyẹ̀wò: ìbámu ìfọ̀ṣọ! Wá àwọn méjìméjì nípa àwọ̀ àti àpẹẹrẹ.",
      "cam.act.socks.1": "Ìṣirò: ka àwọn méjìméjì. Báàtà 2 = méjìméjì 1!",
      "cam.act.socks.2": "Ìmọ̀lára: rírọ̀, nínà, gbígbóná — àwòrán báàtà lẹ́yìn náà?",

      "cam.sees.drum": "ìlù",
      "cam.rw.drum": "Ṣe ìlù láti inú ìkòkò àti ṣíbí igi — rìn kí o sì ṣeré!",
      "cam.act.drum.0": "Ohùn: ìlù líle àti ìlù ìsọ̀rọ̀. Nímọ̀lára ìyàtọ̀ náà!",
      "cam.act.drum.1": "Ìlù: tún ìlù mi ṣe — bùùm bùùm pàtẹ́wọ́!",
      "cam.act.drum.2": "Orin: rìn káàkiri yàrá nípa ìlù tirẹ."
    },

    ha: {
      "cam.aiLooking": "🤍 WonderSprout AI yana kallo…",
      "cam.tapAnother": "👆 Danna wani abu don bincika shi",

      "cam.sees.apple": "apple ja mai haske",
      "cam.rw.apple": "Yanka apple ɗin rabi tare — akwai tauraro a ciki!",
      "cam.act.apple.0": "Launi: «Zaka iya samun wani abu JA?»",
      "cam.act.apple.1": "Lissafi: ƙirga apples a kan tebur — 1, 2, 3!",
      "cam.act.apple.2": "Rayuwa: «Apples suna girma a kan bishiyoyi, daga ƙananan furanni.»",

      "cam.sees.ball": "ƙwallo mai zagaye, mai tsalle",
      "cam.rw.ball": "Gwada ƙwallon a Filin Kimiyyar Lissafi, sannan ka buga ƙwallon NA GASKE ka kwatanta!",
      "cam.act.ball.0": "Kimiyyar lissafi: a bar shi daga gwiwa, sannan daga sama. Wanne tsalle ya fi girma?",
      "cam.act.ball.1": "Siffa: a jujjuya shi da'ira. Ƙwallaye suna da zagaye — suna mirginawa!",
      "cam.act.ball.2": "Wasa: a jujjuya shi zuwa juna a ce «mirgina… kama!»",

      "cam.sees.leaf": "ganye kore",
      "cam.rw.leaf": "Ka tara ganye 3 daban-daban ka matsa su a cikin littafi mai nauyi.",
      "cam.act.leaf.0": "Rayuwa: «Ganye suna shan hasken rana kuma suna taimaka bishiya ta yi numfashi.»",
      "cam.act.leaf.1": "Launi: ka nemo ganye kore, ganye rawaya, ganye mai launin ruwan kasa.",
      "cam.act.leaf.2": "Yanayi: ka hura ganyen — iska tana sa ganye su yi rawa!",

      "cam.sees.cup": "kofi na sha",
      "cam.rw.cup": "A lokacin wanka, cika kofi ka zuba sau 5 kana ƙirgawa.",
      "cam.act.cup.0": "Ruwa: shin wannan kofi zai yi yawo ko zai nitse? Ka yi hasashe, sannan ka gwada cikin aminci!",
      "cam.act.cup.1": "Lissafi: zuba ruwa ciki da waje — «cike» da «fanko».",
      "cam.act.cup.2": "Sauti: ka taɓa shi a hankali da cokali. Ting!",

      "cam.sees.teddy": "dan tsuntsu mai laushi don runguma",
      "cam.rw.teddy": "Ba Teddy rungumar dare mai alheri ka ce kalmomi uku masu kyau.",
      "cam.act.teddy.0": "Jin hali: «Yaya Teddy yake ji a yau? Farin ciki? Barci?»",
      "cam.act.teddy.1": "Yin kwaikwayo: yi shaye-shaye ka raba da Teddy.",
      "cam.act.teddy.2": "Labari: bar Teddy ya zaɓi wane labarin WonderSprout za a karanta!",

      "cam.sees.spoon": "cokali na ƙarfe mai haske",
      "cam.rw.spoon": "Yi gangar cokali mai laushi akan tukwane ko kwano 3 daban-daban.",
      "cam.act.spoon.0": "Sauti: ka taɓa cokali a hankali — tukwane mai tsawo, tukwane mai gajere. Sautuka daban-daban!",
      "cam.act.spoon.1": "Yawo/nitsewa: cokali na ƙarfe yawanci suna nitsewa. Ka yi hasashe tukunna!",
      "cam.act.spoon.2": "Haske: ka dubi hoton ka na ban dariya a bayan mai haske!",

      "cam.sees.banana": "ayaba rawaya",
      "cam.rw.banana": "Ku cire ayaba ta gaske tare — wa zai sami wane rabi? Rabawa ma lissafi ne!",
      "cam.act.banana.0": "Launi: ka nemo abubuwa rawaya 3 — rana, agwagi, lemo!",
      "cam.act.banana.1": "Lissafi: cire shi zuwa gutsuttsura — gutsuttsura nawa? Ka ƙirga!",
      "cam.act.banana.2": "Iyaka: ka ji ƙamshi, ka taɓa, ka ɗanɗana. Mai daɗi da laushi!",

      "cam.sees.car": "ƙaramar motar wasa",
      "cam.rw.car": "Ku yi tsere da motoci biyu a kan gangaren matatara. Wanne ya fi sauri? Ka yi hasashe tukunna!",
      "cam.act.car.0": "Kimiyyar lissafi: ku gina gangare daga littafi — gangare mai tsayi, mota mai sauri!",
      "cam.act.car.1": "Lissafi: ƙirga taya. Motoci 2 suna da taya nawa?",
      "cam.act.car.2": "Wasa: haske ja, haske kore! Tura ka TSAYA bisa umarni.",

      "cam.sees.book": "littafin labari",
      "cam.rw.book": "Ka karanta littafi ɗaya a yau — sannan bar ɗanka ya «karanta» maka.",
      "cam.act.book.0": "Harshe: ka ambaci abubuwa 3 a kan murfi kafin buɗewa.",
      "cam.act.book.1": "Labari: bar ɗanka ya juya shafuka — shi ne shugaba!",
      "cam.act.book.2": "Yi shi: ku zama halayen da muryoyi manya masu ban dariya.",

      "cam.sees.socks": "takalman sawa",
      "cam.rw.socks": "A wanki na gaba, ɗanka zai zama Mai Daidaita Takalman Sawa na Hukumance.",
      "cam.act.socks.0": "Hankali: daidaita tufafi! Ka nemo nau'i-nau'i ta launi da zane.",
      "cam.act.socks.1": "Lissafi: ƙirga nau'i-nau'i. Takalman sawa 2 = nau'i 1!",
      "cam.act.socks.2": "Iyaka: laushi, ja, dumi — wasan takalman sawa na gaba?",

      "cam.sees.drum": "ganga",
      "cam.rw.drum": "Yi ganga daga tukwane da cokali na katako — ka yi tafiya ka yi wasa!",
      "cam.act.drum.0": "Sauti: bugu masu ƙarfi da bugu masu raɗaɗi. Ka ji bambancin!",
      "cam.act.drum.1": "Kida: ka kwafi kidana — bum bum tafawa!",
      "cam.act.drum.2": "Kiɗa: ka yi tafiya a ɗaki bisa kidar gangarka."
    },

    ig: {
      "cam.aiLooking": "🤍 WonderSprout AI na-ele anya…",
      "cam.tapAnother": "👆 Pịa ihe ọzọ ka ị nyochaa ya",

      "cam.sees.apple": "apụl uhie na-egbuke egbuke",
      "cam.rw.apple": "Bipụ apụl ahụ ụzọ abụọ ọnụ — e nwere kpakpando zoro ezo n'ime ya!",
      "cam.act.apple.0": "Agba: «Ị nwere ike ịchọta ihe ọzọ na-acha uhie uhie?»",
      "cam.act.apple.1": "Mgbakọ na mwepụ: gụọ apụl ndị dị na tebụl — 1, 2, 3!",
      "cam.act.apple.2": "Ndụ: «Apụl na-eto n'osisi, site na obere ifuru.»",

      "cam.sees.ball": "bọọlụ gburugburu na-awụli elu",
      "cam.rw.ball": "Nwalee bọọlụ ahụ n'ogige Physics, wee wụlie bọọlụ EZIOKWU ma tụnyere ya!",
      "cam.act.ball.0": "Physics: hapụ ya site na ikpere, wee si n'elu. Olee nkwụsị ka ukwuu?",
      "cam.act.ball.1": "Ọdịdị: tụgharịa ya gburugburu. Bọọlụ dị gburugburu — ha na-agbagharị!",
      "cam.act.ball.2": "Egwuregwu: tụgharịa ya ibe gị ma kwuo «tụgharịa… jide!»",

      "cam.sees.leaf": "akwụkwọ ndụ akwụkwọ ndụ",
      "cam.rw.leaf": "Kpọkọta akwụkwọ atọ dị iche iche ma pịa ha n'akwụkwọ dị arọ.",
      "cam.act.leaf.0": "Ndụ: «Akwụkwọ na-aṅụ anyanwụ ma na-enyere osisi aka iku ume.»",
      "cam.act.leaf.1": "Agba: chọta akwụkwọ ndụ akwụkwọ ndụ, akwụkwọ edo edo, akwụkwọ aja aja.",
      "cam.act.leaf.2": "Ihu igwe: fụọ n'akwụkwọ ahụ — ifufe na-eme ka akwụkwọ na-agba egwu!",

      "cam.sees.cup": "iko ịṅụ ihe",
      "cam.rw.cup": "N'oge ịsa ahụ, mejupụta ma wụpụ iko ahụ ugboro 5 ka ị na-agụta.",
      "cam.act.cup.0": "Mmiri: iko a ọ ga-ese n'elu mmiri ka ọ ga-emikpu? Buru ụzọ buru n'uche, wee nwalee n'enweghị nsogbu!",
      "cam.act.cup.1": "Mgbakọ na mwepụ: wụsa mmiri n'ime na n'èzí — «jupụtara» na «efu».",
      "cam.act.cup.2": "Ụda: jiri ngaji pịa ya nwayọọ. Ting!",

      "cam.sees.teddy": "ibe teddy dị nro maka ịmakụ",
      "cam.rw.teddy": "Makụọ Teddy ehihie ọma ma kwuo okwu atọ dị mma.",
      "cam.act.teddy.0": "Mmetụta: «Kedu ka Teddy si enwe mmetụta taa? Ọṅụ? Ụra?»",
      "cam.act.teddy.1": "Ime ka: mee oriri tii ma soro Teddy kee ya.",
      "cam.act.teddy.2": "Akụkọ: hapụ Teddy họrọ akụkọ WonderSprout ọ ga-agụ!",

      "cam.sees.spoon": "ngaji ígwè na-egbuke egbuke",
      "cam.rw.spoon": "Mee ngaji ngaji dị nro n'ite ma ọ bụ efere atọ dị iche iche.",
      "cam.act.spoon.0": "Ụda: jiri ngaji pịa nwayọọ — ite dị elu, ite dị ala. Ụda dị iche iche!",
      "cam.act.spoon.1": "Ise n'elu/imikpu: ngaji ígwè na-emikpu. Buru ụzọ buru n'uche!",
      "cam.act.spoon.2": "Ìhè: lelee anya gị na-akpa ọchị n'azụ na-egbuke egbuke!",

      "cam.sees.banana": "unere edo edo",
      "cam.rw.banana": "Kpochapụ unere n'ezie ọnụ — onye na-enweta ọkara? Ikekwe bụ mgbakọ na mwepụ!",
      "cam.act.banana.0": "Agba: chọta ihe edo edo atọ ọzọ — anyanwụ, ọbọga, lemom!",
      "cam.act.banana.1": "Mgbakọ na mwepụ: kpochapụ ya n'iberibe — iberibe ole? Gụọ ha!",
      "cam.act.banana.2": "Uche: nụ isi ya, metụ ya aka, detụ ya ire. Dị ụtọ ma dị nro!",

      "cam.sees.car": "obere ụgbọ ala egwuregwu",
      "cam.rw.car": "Mee ka ụgbọ ala abụọ gbaa ọsọ n'elu mkpọda ohiri isi. Olee nke na-agba ọsọ? Buru ụzọ buru n'uche!",
      "cam.act.car.0": "Physics: wuo mkpọda site n'akwụkwọ — mkpọda dị elu, ụgbọ ala na-agba ọsọ!",
      "cam.act.car.1": "Mgbakọ na mwepụ: gụọ taya. Ụgbọ ala abụọ nwere taya ole?",
      "cam.act.car.2": "Egwuregwu: ọkụ uhie, ọkụ akwụkwọ ndụ! Kwaa ma KWỤSỊ site n'iwu.",

      "cam.sees.book": "akwụkwọ akụkọ",
      "cam.rw.book": "Gụọ otu akwụkwọ taa — wee hapụ nwa gị «gụọ» ya maka gị.",
      "cam.act.book.0": "Asụsụ: kpọọ ihe atọ dị na mkpuchi tupu ị mepee.",
      "cam.act.book.1": "Akụkọ: hapụ nwa gị tụgharịa ibe — ọ bụ onyeisi!",
      "cam.act.book.2": "Mee ya: bụrụ ndị odide nwere olu ukwu na-atọ ọchị.",

      "cam.sees.socks": "otu ụzọ sọks",
      "cam.rw.socks": "N'ịsa ákwà na-esote, nwa gị ga-abụ Onye Njikọ Sọks Gọvọment.",
      "cam.act.socks.0": "Ezi uche: ijikọ ákwà! Chọta ụzọ abụọ site na agba na ụkpụrụ.",
      "cam.act.socks.1": "Mgbakọ na mwepụ: gụọ ụzọ abụọ. Sọks abụọ = otu ụzọ!",
      "cam.act.socks.2": "Uche: dị nro, na-agbatị, na-ekpo ọkụ — sọks puppets na-esote?",

      "cam.sees.drum": "ịgbà",
      "cam.rw.drum": "Mee ịgbà site na ite na ngaji osisi — gaa n'ihu ma gwuo egwu!",
      "cam.act.drum.0": "Ụda: ịkụ ike na ịkụ nwayọọ. Nwee mmetụta ọdịiche ahụ!",
      "cam.act.drum.1": "Ụda: detuo ụda m — bum bum clap!",
      "cam.act.drum.2": "Egwu: gaa n'ime ụlọ na ụda ịgbà nke gị."
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
