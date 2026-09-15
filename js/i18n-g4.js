/* ============================================================
   WonderSprout — Music page UI + song titles/descriptions
   (ko/bn/yo/ha/ig)
   keys: music.freeTitle/freeDesc/clapTitle/clapDesc/tip1..4/sing/stop/tempo0..2
         song0..15.t (title), song0..15.d (desc)
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    ko: {
      "music.freeTitle": "자유 연주 패드",
      "music.freeDesc": "색깔 패드를 눌러 보세요 — 모든 음이 함께 어울려요. WonderSprout에는 틀린 음이 없어요!",
      "music.clapTitle": "박수 치며 박자 맞추기",
      "music.clapDesc": "심장 박동 같은 리듬 — 커질 때 박수를 쳐요! 리듬이 먼저, 음은 나중에.",
      "music.tip1": "<b>👪 팁:</b> 크게 노래하세요, 못 불러도 괜찮아요! 부모님의 목소리가 아이가 가장 좋아하는 악기예요 — 라이브로 부르는 노래가 언어 학습에 어떤 녹음보다 좋아요.",
      "music.tip2": "<b>👪 부모님께:</b> 아이와 함께 가사를 부르고 동작을 더하세요 — 반짝이는 손가락, 젓는 팔, 자는 손. 동작 + 멜로디 + 가사 = 세 겹의 기억 고리.",
      "music.tip3": "<b>👪 부모님께:</b> 패드는 5음계를 써요 — 어떤 조합도 듣기 좋아서 탐색이 언제나 보상받아요. 아이가 만든 작은 멜로디를 그대로 되돌려 연주해 보세요!",
      "music.tip4": "<b>👪 부모님께:</b> 함께 박자를 느껴 보세요 — 손뼉 치기, 무릎 두드리기, 살살 튀기. 이 시기의 리듬 감각은 이후의 읽기 유창성을 예측해요. 점수 부담은 없어요: 모든 박수가 놀이예요.",
      "music.sing": "▶ 노래하기!",
      "music.stop": "⏹ 멈추기",
      "music.tempo0": "🐢 천천히",
      "music.tempo1": "🚶 보통",
      "music.tempo2": "🐇 통통",

      "song0.t": "반짝반짝 작은 별", "song0.d": "고전 자장가 — 부드럽고 느려요.",
      "song1.t": "메리에게는 어린 양이 있었어요", "song1.d": "박수 치며 부르기 좋은 신나는 노래.",
      "song2.t": "노를 저어라, 노를 저어라", "song2.d": "노래하며 좌우로 흔들어요!",
      "song3.t": "자고 있나요? (존 형제)", "song3.d": "돌림노래로 함께 부를 수 있어요 — 마음을 가라앉히기에 딱 좋아요.",
      "song4.t": "음메 음메 검은 양", "song4.d": "양털 세 자루 — 숫자 세기 노래!",
      "song5.t": "따끈한 핫 크로스 번", "song5.d": "짧고 달콤해서 처음 함께 부르기 좋아요.",
      "song6.t": "런던 다리가 무너져요", "song6.d": "팔로 쌓아 올리고 — 그러다 무너져요!",
      "song7.t": "징글벨", "song7.d": "딸랑딸랑! 종소리마다 박수를 쳐요.",
      "song8.t": "생일 축하합니다", "song8.d": "모든 생일, 모든 케이크, 세어야 할 모든 촛불에.",
      "song9.t": "노를 저어라, 노를 저어라", "song9.d": "부드럽게 흔들리는 리듬 — 무릎에서 통통 튀기기에 딱 좋아요.",
      "song10.t": "메리에게는 어린 양이 있었어요", "song10.d": "조용한 저녁을 위한 졸린 하강 멜로디.",
      "song11.t": "작은 거미 인시 윈시", "song11.d": "올라가는 곡조에 맞춰 손가락으로 기어오르기.",
      "song12.t": "맥도널드 할아버지의 농장", "song12.d": "동물 소리 후렴 — 동물 친구 연구실과 함께 해 보세요!",
      "song13.t": "험프티 덤프티", "song13.d": "흔들리는 담, 커다란 낙하 — 그리고 부드러운 착지.",
      "song14.t": "헤이 디들 디들", "song14.d": "재미있는 말장난 동요 — 소가 높이 점프해요!",
      "song15.t": "이 할아버지", "song15.d": "숫자 세기 노래 — 닉낙 패디왁!"
    },

    bn: {
      "music.freeTitle": "মুক্ত প্যাড",
      "music.freeDesc": "রঙিন প্যাডে চাপ দাও — প্রতিটি সুর একসাথে ভালো শোনায়। WonderSprout-এ কোনো ভুল সুর নেই!",
      "music.clapTitle": "তালে হাততালি",
      "music.clapDesc": "হৃৎস্পন্দনের মতো ছন্দ — এটি বড় হলে হাততালি দাও! আগে ছন্দ, পরে সুর।",
      "music.tip1": "<b>👪 পরামর্শ:</b> জোরে গাও, খারাপ হলেও! তোমার কণ্ঠই শিশুর প্রিয় বাদ্যযন্ত্র — আর ভাষা শেখার জন্য সরাসরি গাওয়া যেকোনো রেকর্ডিংয়ের চেয়ে ভালো।",
      "music.tip2": "<b>👪 অভিভাবক:</b> শিশুর সাথে কথাগুলো গাও আর নাড়াচড়া যোগ করো — ঝলমলে আঙুল, দাঁড় টানা বাহু, ঘুমন্ত হাত। নাড়াচড়া + সুর + শব্দ = স্মৃতির তিনটি হুক।",
      "music.tip3": "<b>👪 অভিভাবক:</b> প্যাডগুলো পঞ্চম স্বরের স্কেল ব্যবহার করে — প্রতিটি মেল ভালো শোনায়, তাই অন্বেষণ সবসময় পুরস্কৃত হয়। শিশুর নিজের ছোট সুরটি তাকে ফিরিয়ে শোনানোর চেষ্টা করো!",
      "music.tip4": "<b>👪 অভিভাবক:</b> একসাথে ছন্দ অনুভব করো — হাততালি, হাঁটুতে চাপড়, আলতো লাফ। এই বয়সের ছন্দবোধ পরবর্তীতে পড়ার সাবলীলতা নির্দেশ করে। নম্বরের চাপ নেই: প্রতিটি হাততালি খেলা।",
      "music.sing": "▶ গাও!",
      "music.stop": "⏹ থামাও",
      "music.tempo0": "🐢 ধীরে",
      "music.tempo1": "🚶 স্বাভাবিক",
      "music.tempo2": "🐇 লাফানো",

      "song0.t": "ঝিকিমিকি তারা", "song0.d": "ক্লাসিক ঘুমপাড়ানি গান — কোমল ও ধীর।",
      "song1.t": "মেরির একটি ছোট মেষশাবক ছিল", "song1.d": "হাততালি দেওয়ার জন্য দুলুনি প্রিয় গান।",
      "song2.t": "বাও, বাও, নৌকা বাও", "song2.d": "গাইতে গাইতে এপাশ-ওপাশ দুলো!",
      "song3.t": "তুমি কি ঘুমাচ্ছ? (ভাই জন)", "song3.d": "একসাথে গাওয়ার গোল গান — শান্ত হওয়ার জন্য উপযুক্ত।",
      "song4.t": "ম্যা ম্যা কালো ভেড়া", "song4.d": "তিন থলে পশম — গোনার গান!",
      "song5.t": "গরম ক্রস বান", "song5.d": "ছোট, মিষ্টি এবং প্রথম যৌথ গানের জন্য উপযুক্ত।",
      "song6.t": "লন্ডন ব্রিজ ভেঙে পড়ছে", "song6.d": "বাহু দিয়ে তুলে নাও — তারপর পড়ে যাও!",
      "song7.t": "জিঙ্গল বেলস", "song7.d": "টুং টাং! প্রতিটি ঝংকারে হাততালি দাও।",
      "song8.t": "জন্মদিনের শুভেচ্ছা", "song8.d": "প্রতিটি জন্মদিন, প্রতিটি কেক, প্রতিটি গোনা মোমবাতির জন্য।",
      "song9.t": "বাও, বাও, নৌকা বাও", "song9.d": "কোমল দোলা ছন্দ — কোলে নাচানোর জন্য উপযুক্ত।",
      "song10.t": "মেরির একটি ছোট মেষশাবক ছিল", "song10.d": "শান্ত সন্ধ্যার জন্য ঘুমপাড়ানি নেমে আসা সুর।",
      "song11.t": "ছোট্ট মাকড়সা ইনসি উইনসি", "song11.d": "উঠতি সুরের সাথে আঙুল ওঠানোর মজা।",
      "song12.t": "বুড়ো ম্যাকডোনাল্ডের খামার ছিল", "song12.d": "পশুর শব্দের সমবেত কণ্ঠ — পশু বন্ধু ল্যাবের সাথে মেলান!",
      "song13.t": "হাম্পটি ডাম্পটি", "song13.d": "দুলন্ত দেয়াল, বড় পতন — আর কোমল অবতরণ।",
      "song14.t": "হে ডিডল ডিডল", "song14.d": "আজব অর্থহীন ছড়া — গরু উঁচুতে লাফ দেয়!",
      "song15.t": "এই বুড়ো মানুষটি", "song15.d": "গোনার গান — নিক-ন্যাক প্যাডি-হোয়াক!"
    },

    yo: {
      "music.freeTitle": "Páálí Ìtẹ̀síwájú",
      "music.freeDesc": "Tẹ páálí àwọ̀ — orin kọ̀ọ̀kan dún dáradára pọ̀. Kò sí orin àṣìṣe ní WonderSprout!",
      "music.clapTitle": "Pàtẹ́wọ́ sí Ìlù",
      "music.clapDesc": "Ìlù bíi ìlù ọkàn — pàtẹ́wọ́ nígbà tí ó bá ń dàgbà! Ìlù kọ́kọ́, orin lẹ́yìn.",
      "music.tip1": "<b>👪 Ìmọ̀ràn:</b> kọrin ní gbangba, kódà tí kò bá dára! Ohùn rẹ ni ohun èlò tí ọmọ rẹ fẹ́ràn jù — kíkọrin tààrà sì dára ju ìgbàsílẹ̀ èyíkéyìí lọ fún ẹ̀kọ́ èdè.",
      "music.tip2": "<b>👪 Òbí:</b> kọ ọ̀rọ̀ náà pẹ̀lú ọmọ rẹ kí o sì fi ìmìsí kún un — ìka tító, apá tí ń wọ ọkọ̀, ọwọ́ tó ń sùn. Ìmìsí + orin + ọ̀rọ̀ = ìdè ìrántí mẹ́ta.",
      "music.tip3": "<b>👪 Òbí:</b> àwọn páálí náà ń lo ìwọ̀n orin márùn-ún — gbogbo àpapọ̀ máa ń dún dídùn, nítorí náà ṣíṣàwárí máa ń ní èrè nígbà gbogbo. Gbìyànjú láti tún orin kékeré ọmọ rẹ padà fún un!",
      "music.tip4": "<b>👪 Òbí:</b> ẹ ní ìmọ̀lára ìlù pọ̀ — pàtẹ́wọ́, tẹ oríkun, fò ní rírọ̀. Ìmọ̀ ìlù ní ọjọ́-orí yìí máa ń sọ bí ìkàwé yóò ṣe rọrùn ní ọjọ́ iwájú. Kò sí ìfúnpa àmì: gbogbo ìpàtẹ́wọ́ jẹ́ ìṣeré.",
      "music.sing": "▶ Kọrin!",
      "music.stop": "⏹ Dúró",
      "music.tempo0": "🐢 Pẹ̀lẹ́",
      "music.tempo1": "🚶 Déédé",
      "music.tempo2": "🐇 Fífò",

      "song0.t": "Ìmọ́lẹ̀, Ìmọ́lẹ̀, Ìràwọ̀ Kékeré", "song0.d": "Orin ìsùn àtètèkọ́ṣe — rírọ̀ àti pẹ̀lẹ́.",
      "song1.t": "Maria Ní Ọ̀dọ́ Àgùntàn Kékeré", "song1.d": "Orin ayọ̀ tí a fẹ́ràn fún pípàtẹ́wọ́ pẹ̀lú.",
      "song2.t": "Wọ, Wọ, Wọ Ọkọ̀ Rẹ", "song2.d": "Mì lọ sí apá kan sí apá kejì nígbà tí o bá ń kọrin!",
      "song3.t": "Ìwọ Ń Sùn Bí? (Arákùnrin John)", "song3.d": "Orin yípo tí a lè kọ pọ̀ — pé fún ìfọkànbalẹ̀.",
      "song4.t": "Mèè, Mèè, Àgùntàn Dúdú", "song4.d": "Àpò ìrún mẹ́ta — orin ìkà!",
      "song5.t": "Búrẹ́dì Oorun Gbigbona", "song5.d": "Kúkúrú, dídùn àti pé fún àwọn orin àkọ́kọ́ pọ̀.",
      "song6.t": "Afárá London Ń Wólẹ̀", "song6.d": "Kọ ọ́ pẹ̀lú apá rẹ — kí o sì wólẹ̀!",
      "song7.t": "Agogo Ń Dún", "song7.d": "Tíng tíng! Pàtẹ́wọ́ ní gbogbo ìdún.",
      "song8.t": "Ọjọ́ Ìbí Ayọ̀", "song8.d": "Fún gbogbo ọjọ́ ìbí, gbogbo àkàrà, gbogbo àbẹ́là láti kà.",
      "song9.t": "Wọ, Wọ, Wọ Ọkọ̀ Rẹ", "song9.d": "Ìlù ìmì rírọ̀ — pé fún fífò lórí itàn.",
      "song10.t": "Maria Ní Ọ̀dọ́ Àgùntàn Kékeré", "song10.d": "Orin tó ń sọkalẹ̀ tó ń mú oorun fún àwọn ìrọ̀lẹ́ tútù.",
      "song11.t": "Alántákùn Kékeré", "song11.d": "Ayọ̀ ìka gígun pẹ̀lú orin tó ń gòkè.",
      "song12.t": "Àgbà MacDonald Ní oko kan", "song12.d": "Orin àpapọ̀ ohùn ẹranko — so pọ̀ mọ́ yàrá ìwádìí Ọ̀rẹ́ Ẹranko!",
      "song13.t": "Humpty Dumpty", "song13.d": "Ògiri tó ń mì, ìṣubú ńlá — àti ìbàlẹ̀ rírọ̀.",
      "song14.t": "Hey Diddle Diddle", "song14.d": "Ìlù àìmọ̀gbọ́nwá ayọ̀ — màlúù náà ń fò ga!",
      "song15.t": "Àgbà Ọkùnrin Yìí", "song15.d": "Orin ìkà — níkì-nákì pádí-wákì!"
    },

    ha: {
      "music.freeTitle": "Fad na Wasa Kyauta",
      "music.freeDesc": "Danna fad masu launi — kowane amo yana jin daɗi tare. Babu munanan amo a WonderSprout!",
      "music.clapTitle": "Tafawa a Kan Kida",
      "music.clapDesc": "Bugun zuciya kamar bugun zuciya — tafawa lokacin da ya girma! Kida tukunna, amo daga baya.",
      "music.tip1": "<b>👪 Shawara:</b> ka waƙa da ƙarfi, ko da ba da kyau ba! Muryarka ita ce kayan kida mafi so na yaronka — kuma waƙa kai tsaye ya fi kowace rikodi don koyon harshe.",
      "music.tip2": "<b>👪 Iyaye:</b> ka waƙa kalmomin tare da yaronka ka ƙara motsi — yatsu masu walƙiya, hannaye masu jan jirgin ruwa, hannaye masu barci. Motsi + amo + kalmomi = ƙugiya uku na ƙwaƙwalwa.",
      "music.tip3": "<b>👪 Iyaye:</b> fad suna amfani da ma'aunin amo biyar — kowace haɗuwa tana jin daɗi, don haka bincika koyaushe ana samun lada. Gwada ka maida ƙaramin wakar yaronka gare shi!",
      "music.tip4": "<b>👪 Iyaye:</b> ji kida tare — tafawa, tausa gwiwa, tsalle a hankali. Fahimtar kida a wannan shekaru tana hasashen sauƙin karatu daga baya. Babu matsin lamba na maki: kowane tafawa wasa ne.",
      "music.sing": "▶ Waƙa!",
      "music.stop": "⏹ Tsaya",
      "music.tempo0": "🐢 A hankali",
      "music.tempo1": "🚶 Na al'ada",
      "music.tempo2": "🐇 Mai tsalle",

      "song0.t": "Hasken Hasken, Karamin Tauraro", "song0.d": "Wakar barci ta asali — mai taushi da a hankali.",
      "song1.t": "Mary Tana da Ƙaramin Ɗan Rago", "song1.d": "Waka mai farin ciki da ake so don tafawa tare.",
      "song2.t": "Ja, Ja, Ja Jirgin Ruwanka", "song2.d": "Ka yi kaɗawa hagu da dama yayin waƙa!",
      "song3.t": "Kana Barci? (Ɗan'uwa John)", "song3.d": "Wakar kewaye da za mu iya waƙa tare — cikakke don nutsuwa.",
      "song4.t": "Mee, Mee, Bakaƙar Tunkiya", "song4.d": "Jakunkuna uku na ulu — wakar ƙirga!",
      "song5.t": "Burodi Mai Zafi", "song5.d": "Gajere, mai daɗi kuma cikakke don waƙa ta farko tare.",
      "song6.t": "Gadar London Tana Rushewa", "song6.d": "Gina ta da hannayenka — sannan ka faɗi!",
      "song7.t": "Ƙararrawa Suna Bugawa", "song7.d": "Ting ting! Tafawa a kowace bugu.",
      "song8.t": "Ranar Haihuwa Mai Kyau", "song8.d": "Ga kowace ranar haihuwa, kowace kake, kowace kyandila don ƙirgawa.",
      "song9.t": "Ja, Ja, Ja Jirgin Ruwanka", "song9.d": "Kaɗuwa mai taushi — cikakke don tsalle a cinyar.",
      "song10.t": "Mary Tana da Ƙaramin Ɗan Rago", "song10.d": "Amo mai saukowa mai barci don maraice mai nutsuwa.",
      "song11.t": "Ƙaramin Gizo", "song11.d": "Farin cikin hawan yatsu tare da amo mai hauhawa.",
      "song12.t": "Tsoho MacDonald Yana da Gona", "song12.d": "Waƙar muryoyin dabbobi — haɗa shi da dakin gwaje-gwajen Abokan Dabbobi!",
      "song13.t": "Humpty Dumpty", "song13.d": "Bango mai girgiza, babban faɗuwa — da sauka mai taushi.",
      "song14.t": "Hey Diddle Diddle", "song14.d": "Waƙar ban dariya mara ma'ana — sanya tana tsalle sama!",
      "song15.t": "Wannan Tsohon Mutum", "song15.d": "Wakar ƙirgawa — nik-nak padi-wak!"
    },

    ig: {
      "music.freeTitle": "Mpempe Egwu N'efu",
      "music.freeDesc": "Pịa mpempe ndị nwere agba — ụda ọ bụla na-ada nke ọma ọnụ. Enweghị ụda na-ezighị ezi na WonderSprout!",
      "music.clapTitle": "Kụọ Aka n'Ụda",
      "music.clapDesc": "Ịkụ aka dị ka mgbịpụta obi — kụọ aka mgbe ọ na-eto! Ụda mbụ, ụda egwu mgbe e mesịrị.",
      "music.tip1": "<b>👪 Ndụmọdụ:</b> bụọ abụ n'olu dara ụda, ọ bụrụgodị na ọ dịghị mma! Olu gị bụ ngwa egwu kacha amasị nwa gị — ma ịbụ abụ ozugbo ka mma karịa ndekọ ọ bụla maka ịmụ asụsụ.",
      "music.tip2": "<b>👪 Nne na nna:</b> bụọ okwu ya na nwa gị ma tinye mmegharị — mkpịsị aka na-enwu enwu, ogwe aka na-akwọ ụgbọ mmiri, aka na-ehi ụra. Mmegharị + egwu + okwu = nko ncheta atọ.",
      "music.tip3": "<b>👪 Nne na nna:</b> mpempe ndị ahụ na-eji ọkwa ụda ise — ngwakọta ọ bụla na-ada nke ọma, ya mere ịchọpụta na-enweta ụgwọ ọrụ mgbe niile. Gbalịa ịmegharị obere egwu nwa gị n'aka ya!",
      "music.tip4": "<b>👪 Nne na nna:</b> nwee mmetụta ụda ọnụ — kụọ aka, kụọ ikpere, maa jijiji nwayọọ. Mmetụta ụda n'afọ ndụ a na-ebu amụma ịgụ ihe nke ọma mgbe e mesịrị. Enweghị nrụgide akara: ịkụ aka ọ bụla bụ egwuregwu.",
      "music.sing": "▶ Bụọ abụ!",
      "music.stop": "⏹ Kwụsị",
      "music.tempo0": "🐢 Nwayọọ",
      "music.tempo1": "🚶 Nkịtị",
      "music.tempo2": "🐇 Na-awụli elu",

      "song0.t": "Na-egbuke egbuke, Kpakpando Obere", "song0.d": "Abụ ụra oge ochie — dị nwayọọ ma dị nwayọọ.",
      "song1.t": "Meri Nwere Nwa Atụrụ", "song1.d": "Abụ a na-amasị nke na-eme ka obi ụtọ maka ịkụ aka.",
      "song2.t": "Kwọ, Kwọ, Kwọ Ụgbọ Mmiri Gị", "song2.d": "Maa jijiji n'akụkụ ruo n'akụkụ mgbe ị na-abụ abụ!",
      "song3.t": "Ị Na-ehi Ụra? (Nwanna John)", "song3.d": "Abụ gburugburu anyị nwere ike ịbụ ọnụ — zuru oke maka udo.",
      "song4.t": "Mee, Mee, Atụrụ Ojii", "song4.d": "Akpa ajị anụ atọ — abụ ịgụ!",
      "song5.t": "Achịcha Ọkụ", "song5.d": "Nkenke, dị ụtọ na zuru oke maka abụ mbụ ọnụ.",
      "song6.t": "Àkwà Mmiri London Na-ada", "song6.d": "Wuo ya na ogwe aka gị — mgbe ahụ daa!",
      "song7.t": "Mgbịrịgba Na-akụ", "song7.d": "Ting ting! Kụọ aka na ụda ọ bụla.",
      "song8.t": "Ụbọchị Ọmụmụ Obi Ụtọ", "song8.d": "Maka ụbọchị ọmụmụ ọ bụla, achịcha ọ bụla, kandụl ọ bụla ịgụ.",
      "song9.t": "Kwọ, Kwọ, Kwọ Ụgbọ Mmiri Gị", "song9.d": "Ụda ịma jijiji dị nwayọọ — zuru oke maka ịwụli elu n'apata ụkwụ.",
      "song10.t": "Meri Nwere Nwa Atụrụ", "song10.d": "Egwu na-agbadata nke na-eme ka ụra daa maka mgbede dị jụụ.",
      "song11.t": "Ududo Obere", "song11.d": "Obi ụtọ ịrịgo mkpịsị aka na egwu na-arịgo.",
      "song12.t": "Ochie MacDonald Nwere Ugbo", "song12.d": "Egwu olu anụmanụ — jikọta ya na ụlọ nyocha Enyi Anụmanụ!",
      "song13.t": "Humpty Dumpty", "song13.d": "Mgbidi na-ama jijiji, ọdịda dị ukwuu — na ọdịda dị nwayọọ.",
      "song14.t": "Hey Diddle Diddle", "song14.d": "Abụ na-atọ ọchị na-enweghị isi — ehi na-awụli elu!",
      "song15.t": "Nwoke Ochie A", "song15.d": "Abụ ịgụ — nik-nak padi-wak!"
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
