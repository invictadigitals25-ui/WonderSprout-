/* ============================================================
   WonderSprout — app chrome + remaining hardcoded UI strings
   (id/sw/it/nl/ja/ko/bn/yo/ha/ig)
   keys: brand.by, foot.product, foot.see, foot.tryReal,
         labs.simTitle, labs.openPhysics, labs.playable, labs.coming,
         labs.tmplCount {n}, labs.monthlyThemes,
         world.grownups, pa.signInBtn, pa.outsideTitle, pa.outsideBody,
         cam.tapHint, ai.greeting {name} {m} {stage}
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    id: {
      "brand.by": "oleh DINVICTA EDU",
      "foot.product": "· produk DINVICTA EDU",
      "foot.see": "Lihat · Dengar · Sentuh · Jelajahi · Kagum — ekosistem belajar yang dipandu orang tua untuk usia 0–36 bulan.",
      "foot.tryReal": "Setiap momen layar berakhir dengan langkah “Coba di kehidupan nyata”. Tanpa iklan, tanpa peringkat, tanpa diagnosis — selamanya.",
      "labs.simTitle": "⚽ Simulasi dulu: satu bola, setiap usia",
      "labs.openPhysics": "⚽ Buka Taman Fisika",
      "labs.playable": "Bisa dimainkan",
      "labs.coming": "Segera hadir",
      "labs.tmplCount": "{n} templat simulasi",
      "labs.monthlyThemes": "🗓️ Tema bulanan",
      "world.grownups": "👪 Orang dewasa: <a href='#/parent' style='text-decoration:underline'>Dasbor orang tua</a> punya keajaiban hari ini!",
      "pa.signInBtn": "Masuk",
      "pa.outsideTitle": "Aktivitas terbaik saat ini mungkin ada di luar",
      "pa.outsideBody": "20 menit di taman — menunjuk, menyebut, berlari — mengalahkan aplikasi apa pun hari ini. Tugas WonderSprout selesai saat belajar keluar dari layar. Kembali lagi besok untuk Keajaiban Hari Ini berikutnya.",
      "cam.tapHint": "👆 Ketuk sebuah benda untuk memindainya",
      "ai.greeting": "Halo! Aku kopilot WonderSprout. Aku tahu {name} berusia <b>{m} bulan</b> (tahap: <b>{stage}</b>). Tanyakan apa yang dimainkan hari ini, bagaimana layar cocok, apa yang kita pelajari minggu ini — atau apa pun yang ada di pikiranmu."
    },

    sw: {
      "brand.by": "na DINVICTA EDU",
      "foot.product": "· bidhaa ya DINVICTA EDU",
      "foot.see": "Ona · Sikia · Gusa · Chunguza · Stahabaki — mfumo wa kujifunza unaoongozwa na wazazi kwa umri wa miezi 0–36.",
      "foot.tryReal": "Kila wakati wa skrini unaisha na hatua ya “Jaribu katika maisha halisi”. Hakuna matangazo, hakuna viwango, hakuna utambuzi wa magonjwa — kamwe.",
      "labs.simTitle": "⚽ Simulisheni kwanza: mpira mmoja, kila umri",
      "labs.openPhysics": "⚽ Fungua Uwanja wa Fizikia",
      "labs.playable": "Inachezeka",
      "labs.coming": "Inakuja",
      "labs.tmplCount": "violezo {n} vya simulisheni",
      "labs.monthlyThemes": "🗓️ Mada za kila mwezi",
      "world.grownups": "👪 Watu wazima: <a href='#/parent' style='text-decoration:underline'>Dashibodi ya mzazi</a> ina ajabu ya leo!",
      "pa.signInBtn": "Ingia",
      "pa.outsideTitle": "Shughuli bora sasa inaweza kuwa nje",
      "pa.outsideBody": "Dakika 20 za bustani — kuonyesha, kutaja, kukimbia — inashinda programu yoyote leo. Kazi ya WonderSprout inakamilika wakati kujifunza kunatoka kwenye skrini. Rudi kesho kwa Ajabu ya Leo inayofuata.",
      "cam.tapHint": "👆 Gonga kitu ili kukichanganua",
      "ai.greeting": "Habari! Mimi ni msaidizi wa WonderSprout. Najua {name} ana <b>miezi {m}</b> (hatua: <b>{stage}</b>). Niulize nini cha kucheza leo, skrini zinavyolingana, tulichojifunza wiki hii — au chochote unachofikiri."
    },

    it: {
      "brand.by": "di DINVICTA EDU",
      "foot.product": "· un prodotto DINVICTA EDU",
      "foot.see": "Vedere · Sentire · Toccare · Esplorare · Meravigliarsi — un ecosistema di apprendimento guidato dai genitori per le età da 0 a 36 mesi.",
      "foot.tryReal": "Ogni momento davanti allo schermo termina con un passo “Provalo nella vita reale”. Niente pubblicità, niente classifiche, niente diagnosi — mai.",
      "labs.simTitle": "⚽ Prima la simulazione: una palla, ogni età",
      "labs.openPhysics": "⚽ Apri il Parco della fisica",
      "labs.playable": "Giocabile",
      "labs.coming": "In arrivo",
      "labs.tmplCount": "{n} modelli di simulazione",
      "labs.monthlyThemes": "🗓️ Temi mensili",
      "world.grownups": "👪 Adulti: la <a href='#/parent' style='text-decoration:underline'>Dashboard genitori</a> ha la meraviglia di oggi!",
      "pa.signInBtn": "Accedi",
      "pa.outsideTitle": "La migliore attività in questo momento potrebbe essere fuori",
      "pa.outsideBody": "20 minuti al parco — indicare, nominare, correre — battono qualsiasi app oggi. Il lavoro di WonderSprout è finito quando l'apprendimento lascia lo schermo. Torna domani per la prossima Meraviglia del Giorno.",
      "cam.tapHint": "👆 Tocca un oggetto per scansionarlo",
      "ai.greeting": "Ciao! Sono il copilota WonderSprout. So che {name} ha <b>{m} mesi</b> (fase: <b>{stage}</b>). Chiedimi a cosa giocare oggi, come si inseriscono gli schermi, cosa abbiamo imparato questa settimana — o qualsiasi cosa tu abbia in mente."
    },

    nl: {
      "brand.by": "van DINVICTA EDU",
      "foot.product": "· een product van DINVICTA EDU",
      "foot.see": "Zien · Horen · Voelen · Verkennen · Verwonderen — een door ouders geleid leer-ecosysteem voor 0–36 maanden.",
      "foot.tryReal": "Elk schermmoment eindigt met een stap „Probeer het in het echte leven”. Geen advertenties, geen ranglijsten, geen diagnoses — nooit.",
      "labs.simTitle": "⚽ Eerst simuleren: één bal, elke leeftijd",
      "labs.openPhysics": "⚽ Natuurkunde-speeltuin openen",
      "labs.playable": "Speelbaar",
      "labs.coming": "Binnenkort",
      "labs.tmplCount": "{n} simulatiesjablonen",
      "labs.monthlyThemes": "🗓️ Maandthema's",
      "world.grownups": "👪 Volwassenen: het <a href='#/parent' style='text-decoration:underline'>Ouderdashboard</a> heeft het wonder van vandaag!",
      "pa.signInBtn": "Inloggen",
      "pa.outsideTitle": "De beste activiteit nu is misschien buiten",
      "pa.outsideBody": "20 minuten in het park — wijzen, benoemen, rennen — verslaat vandaag elke app. Het werk van WonderSprout is gedaan als het leren het scherm verlaat. Kom morgen terug voor het volgende Wonder van de Dag.",
      "cam.tapHint": "👆 Tik een voorwerp aan om het te scannen",
      "ai.greeting": "Hallo! Ik ben de WonderSprout-copiloot. Ik weet dat {name} <b>{m} maanden</b> oud is (fase: <b>{stage}</b>). Vraag me wat we vandaag spelen, hoe schermen passen, wat we deze week hebben geleerd — of wat je ook maar wilt."
    },

    ja: {
      "brand.by": "DINVICTA EDU せいさく",
      "foot.product": "· DINVICTA EDU の せいひん",
      "foot.see": "みる ・ きく ・ さわる ・ たんけんする ・ ふしぎに おもう — 0〜36かげつの おやが みちびく まなびの しくみ。",
      "foot.tryReal": "すべての がめん じかんは「じっさいの せいかつで やってみよう」で おわります。こうこく なし、ランキング なし、しんだん なし — ぜったいに。",
      "labs.simTitle": "⚽ まず シミュレーション：ひとつの ボール、すべての ねんれい",
      "labs.openPhysics": "⚽ ぶつり あそびばを ひらく",
      "labs.playable": "あそべる",
      "labs.coming": "もうすぐ",
      "labs.tmplCount": "シミュレーション テンプレート {n}こ",
      "labs.monthlyThemes": "🗓️ まい月 の テーマ",
      "world.grownups": "👪 おとなの みなさん：<a href='#/parent' style='text-decoration:underline'>おや ダッシュボード</a>に きょうの ふしぎが あります！",
      "pa.signInBtn": "ログイン",
      "pa.outsideTitle": "いま いちばん いい かつどうは そとの かも",
      "pa.outsideBody": "こうえんの 20ぷん — ゆびさして、なまえを いって、はしって — きょうは どんな アプリにも かちます。まなびが がめんを でたら、WonderSproutの しごとは おわりです。あした また つぎの きょうの ふしぎに あいに きて ね。",
      "cam.tapHint": "👆 ものを タップして しらべよう",
      "ai.greeting": "こんにちは！WonderSproutの おてつだい です。{name}は <b>{m}かげつ</b>（ステップ：<b>{stage}</b>）だと しって います。きょう なにを あそぶか、がめんは どう つかうか、こんしゅう なにを まなんだか — きいて ね。"
    },

    ko: {
      "brand.by": "DINVICTA EDU 제작",
      "foot.product": "· DINVICTA EDU 제품",
      "foot.see": "보고 · 듣고 · 만지고 · 탐험하고 · 놀라기 — 0–36개월을 위한 부모 주도 학습 생태계.",
      "foot.tryReal": "모든 화면 시간은 「실생활에서 해 보기」 단계로 끝나요. 광고 없음, 순위 없음, 진단 없음 — 절대로.",
      "labs.simTitle": "⚽ 먼저 시뮬레이션: 공 하나, 모든 나이",
      "labs.openPhysics": "⚽ 물리 놀이터 열기",
      "labs.playable": "플레이 가능",
      "labs.coming": "곧 공개",
      "labs.tmplCount": "시뮬레이션 템플릿 {n}개",
      "labs.monthlyThemes": "🗓️ 월별 테마",
      "world.grownups": "👪 어른 여러분: <a href='#/parent' style='text-decoration:underline'>부모 대시보드</a>에 오늘의 호기심이 있어요!",
      "pa.signInBtn": "로그인",
      "pa.outsideTitle": "지금 가장 좋은 활동은 야외일지도 몰라요",
      "pa.outsideBody": "공원에서 20분 — 가리키고, 이름 붙이고, 달리기 — 오늘 어떤 앱보다 나아요. 배움이 화면을 떠나면 WonderSprout의 일은 끝나요. 내일 다음 오늘의 호기심을 만나러 다시 오세요.",
      "cam.tapHint": "👆 물건을 눌러서 살펴보세요",
      "ai.greeting": "안녕하세요! 저는 WonderSprout 도우미예요. {name}이 <b>{m}개월</b>이라는 걸 알아요(단계: <b>{stage}</b>). 오늘 뭘 하고 놀지, 화면은 어떻게 맞출지, 이번 주에 뭘 배웠는지 물어보세요 — 또는 궁금한 무엇이든요."
    },

    bn: {
      "brand.by": "DINVICTA EDU কর্তৃক",
      "foot.product": "· DINVICTA EDU-এর পণ্য",
      "foot.see": "দেখো · শোনো · ছোঁও · অন্বেষণ করো · বিস্মিত হও — ০–৩৬ মাস বয়সের জন্য অভিভাবক-পরিচালিত শিক্ষা ব্যবস্থা।",
      "foot.tryReal": "প্রতিটি স্ক্রিন মুহূর্ত শেষ হয় «বাস্তব জীবনে চেষ্টা করো» ধাপে। কোনো বিজ্ঞাপন নেই, কোনো ক্রম নেই, কোনো রোগ নির্ণয় নেই — কখনও নয়।",
      "labs.simTitle": "⚽ আগে সিমুলেশন: একটি বল, প্রতিটি বয়স",
      "labs.openPhysics": "⚽ পদার্থবিদ্যা খেলার মাঠ খুলুন",
      "labs.playable": "খেলার যোগ্য",
      "labs.coming": "শীঘ্রই আসছে",
      "labs.tmplCount": "{n}টি সিমুলেশন টেমপ্লেট",
      "labs.monthlyThemes": "🗓️ মাসিক থিম",
      "world.grownups": "👪 বড়রা: <a href='#/parent' style='text-decoration:underline'>প্যারেন্ট ড্যাশবোর্ড</a>-এ আজকের বিস্ময় আছে!",
      "pa.signInBtn": "সাইন ইন করুন",
      "pa.outsideTitle": "এখন সেরা কার্যকলাপ হয়তো বাইরে",
      "pa.outsideBody": "পার্কের ২০ মিনিট — ইশারা করা, নাম বলা, দৌড়ানো — আজ যেকোনো অ্যাপকে হারায়। শেখা স্ক্রিন থেকে বের হলে WonderSprout-এর কাজ শেষ। আগামীকাল পরের আজকের বিস্ময়ের জন্য ফিরে আসুন।",
      "cam.tapHint": "👆 স্ক্যান করতে একটি বস্তুতে ট্যাপ করুন",
      "ai.greeting": "হ্যালো! আমি WonderSprout সহযোগী। আমি জানি {name}-এর বয়স <b>{m} মাস</b> (পর্যায়: <b>{stage}</b>)। আমাকে জিজ্ঞেস করো আজ কী খেলব, স্ক্রিন কীভাবে মানায়, এই সপ্তাহে কী শিখলাম — অথবা মনে যা আছে।"
    },

    yo: {
      "brand.by": "láti ọ̀dọ̀ DINVICTA EDU",
      "foot.product": "· ọjà DINVICTA EDU",
      "foot.see": "Wo · Gbọ́ · Fọwọ́ kan · Ṣàwárí · Yanu — ètò ẹ̀kọ́ tí àwọn òbí ń darí fún ọjọ́-orí oṣù 0–36.",
      "foot.tryReal": "Gbogbo àkókò iboju ń parí pẹ̀lú ìgbésẹ̀ «Gbìyànjú rẹ̀ ní ayé gidi». Kò sí ìpolówó, kò sí ìwọ̀n, kò sí ìdámọ̀ àrùn — rárá.",
      "labs.simTitle": "⚽ Ìfarawé kọ́kọ́: bọ́ọ̀lù kan, gbogbo ọjọ́-orí",
      "labs.openPhysics": "⚽ Ṣí Pápá Ìmọ̀ Ẹ̀rọ",
      "labs.playable": "Ó ṣeé ṣeré",
      "labs.coming": "Ó ń bọ̀",
      "labs.tmplCount": "àwọn àpẹẹrẹ ìfarawé {n}",
      "labs.monthlyThemes": "🗓️ Àwọn àkòrí oṣooṣù",
      "world.grownups": "👪 Àwọn àgbàlagbà: <a href='#/parent' style='text-decoration:underline'>Pátákó òbí</a> ní ìyanu òní!",
      "pa.signInBtn": "Wọlé",
      "pa.outsideTitle": "Iṣẹ́ tí ó dára jùlọ báyìí lè wà ní ìta",
      "pa.outsideBody": "Ìṣẹ́jú 20 ní pápá — tọ́ka, sọ orúkọ, sáré — ń borí ohun èlò èyíkéyìí lónìí. Iṣẹ́ WonderSprout ti parí nígbà tí ìkẹ́kọ̀ọ́ bá kúrò lójú iboju. Padà wá ní ọ̀la fún Ìyanu Òní tí ó kàn.",
      "cam.tapHint": "👆 Tẹ ohun kan láti ṣàyẹ̀wò rẹ̀",
      "ai.greeting": "Pẹ̀lẹ́ o! Èmi ni olùrànlọ́wọ́ WonderSprout. Mo mọ̀ pé {name} jẹ́ <b>oṣù {m}</b> (ìpele: <b>{stage}</b>). Béèrè lọ́wọ́ mi ohun tí a ó ṣeré lónìí, bí àwọn iboju ṣe bá a mu, ohun tí a kọ́ ní ọ̀sẹ̀ yìí — tàbí ohunkóhun tí ó wà lọ́kàn rẹ."
    },

    ha: {
      "brand.by": "daga DINVICTA EDU",
      "foot.product": "· samfurin DINVICTA EDU",
      "foot.see": "Gani · Ji · Taɓa · Bincika · Mamaki — tsarin koyon da iyaye ke jagoranta na shekaru 0–36.",
      "foot.tryReal": "Kowane lokacin allo yana ƙarewa da matakin «Gwada shi a rayuwar gaskiya». Babu tallace-tallace, babu matsayi, babu gwaji — tabata.",
      "labs.simTitle": "⚽ Kwaikwayo tukunna: ƙwallo ɗaya, kowane shekaru",
      "labs.openPhysics": "⚽ Buɗe Filin Kimiyyar Lissafi",
      "labs.playable": "Ana iya wasa",
      "labs.coming": "Yana zuwa",
      "labs.tmplCount": "tsarin kwaikwayo {n}",
      "labs.monthlyThemes": "🗓️ Batutuwan wata-wata",
      "world.grownups": "👪 Manyan mutane: <a href='#/parent' style='text-decoration:underline'>Dashibodin iyaye</a> yana da mamakin yau!",
      "pa.signInBtn": "Shiga",
      "pa.outsideTitle": "Mafi kyawun aiki a yanzu na iya zama a waje",
      "pa.outsideBody": "Minti 20 a filin shakatawa — nuna, kira, gudu — yana cin kowace app a yau. Aikin WonderSprout ya ƙare lokacin da koyon ya bar allo. Ka koma gobe don Mamakin Yau na gaba.",
      "cam.tapHint": "👆 Danna abu don bincika shi",
      "ai.greeting": "Sannu! Ni ne mataimakin WonderSprout. Na san {name} yana da <b>watanni {m}</b> (mataki: <b>{stage}</b>). Ka tambaye ni me za a yi wasa a yau, yadda allo ya dace, abin da muka koya wannan makon — ko duk abin da ke zuciyarka."
    },

    ig: {
      "brand.by": "site na DINVICTA EDU",
      "foot.product": "· ngwaahịa DINVICTA EDU",
      "foot.see": "Hụ · Nụ · Metụ · Nyochaa · Tụọ n'anya — usoro ịmụ ihe nke ndị nne na nna na-eduzi maka afọ 0–36.",
      "foot.tryReal": "Oge ihuenyo ọ bụla na-ejedebe na nzọụkwụ «Nwalee ya na ndụ n'ezie». Enweghị mgbasa ozi, enweghị ọkwa, enweghị nchọpụta ọrịa — mgbe ọ bụla.",
      "labs.simTitle": "⚽ Mbụ simulation: otu bọọlụ, afọ ọ bụla",
      "labs.openPhysics": "⚽ Mepee Ogige Egwuregwu Physics",
      "labs.playable": "Enwere ike igwu",
      "labs.coming": "Na-abịa",
      "labs.tmplCount": "{n} ndebiri simulation",
      "labs.monthlyThemes": "🗓️ Isiokwu kwa ọnwa",
      "world.grownups": "👪 Ndị toro eto: <a href='#/parent' style='text-decoration:underline'>Dashboard nne na nna</a> nwere ihe ịtụnanya taa!",
      "pa.signInBtn": "Banye",
      "pa.outsideTitle": "Ọrụ kacha mma ugbu a nwere ike ịdị n'èzí",
      "pa.outsideBody": "Nkeji 20 n'ogige ntụrụndụ — na-atụ aka, na-akpọ aha, na-agba ọsọ — na-emeri ngwa ọ bụla taa. Ọrụ WonderSprout na-agwụ mgbe ịmụ ihe hapụrụ ihuenyo. Laghachi echi maka ihe ịtụnanya taa na-esote.",
      "cam.tapHint": "👆 Pịa ihe iji nyochaa ya",
      "ai.greeting": "Ndewo! Abụ m onye enyemaka WonderSprout. Amaara m na {name} dị <b>ọnwa {m}</b> (ọkwa: <b>{stage}</b>). Jụọ m ihe anyị ga-egwu taa, otú ihuenyo si dabara, ihe anyị mụtara n'izu a — ma ọ bụ ihe ọ bụla dị gị n'obi."
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
