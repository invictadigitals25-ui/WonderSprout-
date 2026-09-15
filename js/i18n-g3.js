/* ============================================================
   WonderSprout — Music page UI + song titles/descriptions
   (id/sw/it/nl/ja)
   keys: music.freeTitle/freeDesc/clapTitle/clapDesc/tip1..4/sing/stop/tempo0..2
         song0..15.t (title), song0..15.d (desc)
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    id: {
      "music.freeTitle": "Papan Nada Bebas",
      "music.freeDesc": "Ketuk papan berwarna — setiap nada terdengar enak bersama. Tidak ada nada salah di WonderSprout!",
      "music.clapTitle": "Tepuk Iramanya",
      "music.clapDesc": "Denyut seperti detak jantung — tepuk saat ia membesar! Irama dulu, nada kemudian.",
      "music.tip1": "<b>👪 Tips:</b> bernyanyilah dengan suara keras, walau sumbang! Suaramu adalah alat musik favorit anakmu — dan nyanyian langsung lebih baik daripada rekaman untuk belajar bahasa.",
      "music.tip2": "<b>👪 Orang tua:</b> nyanyikan liriknya bersama anak dan tambahkan gerakan — jari berkelap-kelip, lengan mendayung, tangan tidur. Gerakan + melodi + kata = tiga kaitan memori.",
      "music.tip3": "<b>👪 Orang tua:</b> papan nada memakai tangga nada pentatonik — setiap gabungan terdengar enak, jadi menjelajah selalu berbuah. Coba tirukan melodi kecil anakmu kembali kepadanya!",
      "music.tip4": "<b>👪 Orang tua:</b> rasakan irama bersama — tepuk tangan, tepuk lutut, goyang perlahan. Rasa irama di usia ini memprediksi kelancaran membaca nanti. Tanpa tekanan nilai: setiap tepukan adalah bermain.",
      "music.sing": "▶ Nyanyi!",
      "music.stop": "⏹ Berhenti",
      "music.tempo0": "🐢 Lambat",
      "music.tempo1": "🚶 Normal",
      "music.tempo2": "🐇 Melompat",

      "song0.t": "Kelap-Kelip Bintang Kecil", "song0.d": "Lagu pengantar tidur klasik — lembut dan lambat.",
      "song1.t": "Mary Punya Anak Domba", "song1.d": "Favorit riang untuk ikut bertepuk tangan.",
      "song2.t": "Dayung, Dayung, Dayung Perahu", "song2.d": "Bergoyang ke kiri dan kanan sambil bernyanyi!",
      "song3.t": "Apakah Kamu Tidur? (Saudara John)", "song3.d": "Lagu kanon yang bisa dinyanyikan bersama — sempurna untuk menenangkan diri.",
      "song4.t": "Mbek, Mbek, Domba Hitam", "song4.d": "Tiga karung wol — lagu berhitung!",
      "song5.t": "Roti Salib Panas", "song5.d": "Pendek, manis, dan sempurna untuk nyanyian bersama pertama.",
      "song6.t": "Jembatan London Roboh", "song6.d": "Bangun dengan lenganmu — lalu roboh!",
      "song7.t": "Lonceng Berdenting", "song7.d": "Tring-tring! Tepuk setiap dentingan.",
      "song8.t": "Selamat Ulang Tahun", "song8.d": "Untuk setiap ulang tahun, setiap kue, setiap lilin untuk dihitung.",
      "song9.t": "Dayung, Dayung, Dayung Perahu", "song9.d": "Irama goyang lembut — sempurna untuk dipangku.",
      "song10.t": "Mary Punya Anak Domba", "song10.d": "Melodi menurun yang mengantuk untuk malam yang tenang.",
      "song11.t": "Laba-Laba Kecil Incy Wincy", "song11.d": "Keseruan jari memanjat dengan nada yang menaik.",
      "song12.t": "Kakek MacDonald Punya Peternakan", "song12.d": "Paduan suara suara hewan — pasangkan dengan laboratorium Sahabat Hewan!",
      "song13.t": "Humpty Dumpty", "song13.d": "Dinding goyah, jatuh yang besar — dan pendaratan yang lembut.",
      "song14.t": "Hey Diddle Diddle", "song14.d": "Sajak konyol tanpa arti — sapinya melompat tinggi!",
      "song15.t": "Kakek Ini", "song15.d": "Lagu berhitung — nik-nak padi-wak!"
    },

    sw: {
      "music.freeTitle": "Ubao Huru wa Kucheza",
      "music.freeDesc": "Gonga vibao vyenye rangi — kila noti inasikika vizuri pamoja. Hakuna noti mbaya katika WonderSprout!",
      "music.clapTitle": "Piga Makofi kwa Mdundo",
      "music.clapDesc": "Mapigo kama mapigo ya moyo — piga makofi yanapokua! Mdundo kwanza, noti baadaye.",
      "music.tip1": "<b>👪 Kidokezo:</b> imba kwa sauti kubwa, hata vibaya! Sauti yako ndio ala ya kupendwa ya mtoto wako — na kuimba moja kwa moja ni bora kuliko rekodi yoyote kwa kujifunza lugha.",
      "music.tip2": "<b>👪 Mzazi:</b> imba maneno pamoja na mtoto wako na ongeza mienendo — vidole vinavyong'aa, mikono inayopiga makasia, mikono inayolala. Mienendo + wimbo + maneno = ndoano tatu za kumbukumbu.",
      "music.tip3": "<b>👪 Mzazi:</b> vibao vinatumia kipimo cha noti tano — kila mchanganyiko unasikika tamu, hivyo kuchunguza huzawadiwa daima. Jaribu kumrudishia mtoto wako wimbo wake mdogo!",
      "music.tip4": "<b>👪 Mzazi:</b> hisi mdundo pamoja — piga makofi, pata magoti, ruka upole. Hisi ya mdundo katika umri huu inatabiri ustadi wa kusoma baadaye. Hakuna shinikizo la alama: kila kofi ni kucheza.",
      "music.sing": "▶ Imba!",
      "music.stop": "⏹ Simama",
      "music.tempo0": "🐢 Polepole",
      "music.tempo1": "🚶 Kawaida",
      "music.tempo2": "🐇 Kuruka",

      "song0.t": "Nyenyeka, Nyenyeka, Nyota", "song0.d": "Wimbo wa usingizi wa kawaida — laini na wa polepole.",
      "song1.t": "Mari Alikuwa na Mwanakondoo", "song1.d": "Wimbo unaopendwa wenye furaha wa kupiga makofi.",
      "song2.t": "Piga Makasia, Piga Makasia, Piga Makasia", "song2.d": "Yumba kushoto na kulia unapimba!",
      "song3.t": "Unalala? (Ndugu John)", "song3.d": "Wimbo wa duru tunaweza kuimba pamoja — kamili kwa utulivu.",
      "song4.t": "Mee, Mee, Kondoo Mweusi", "song4.d": "Mifuko mitatu ya sufu — wimbo wa kuhesabu!",
      "song5.t": "Mikate Mikavu Moto", "song5.d": "Mfupi, mtamu na kamili kwa nyimbo za kwanza za pamoja.",
      "song6.t": "Daraja la London Linaanguka", "song6.d": "Jenga kwa mikono yako — kisha anguka!",
      "song7.t": "Kengele Zinang'ara", "song7.d": "Tring-tring! Piga makofi kila mlio.",
      "song8.t": "Siku Njema ya Kuzaliwa", "song8.d": "Kwa kila siku ya kuzaliwa, kila keki, kila mshumaa wa kuhesabu.",
      "song9.t": "Piga Makasia, Piga Makasia, Piga Makasia", "song9.d": "Mdundo laini wa kuyumba — kamili kwa kurukia miguuni.",
      "song10.t": "Mari Alikuwa na Mwanakondoo", "song10.d": "Wimbo wa kushuka wenye usingizi kwa jioni tulivu.",
      "song11.t": "Buibui Mdogo", "song11.d": "Furaha ya kupanda kidole na wimbo unaopanda.",
      "song12.t": "Mzee MacDonald Alikuwa na Shamba", "song12.d": "Kwaya ya sauti za wanyama — iunganishe na maabara ya Marafiki Wanyama!",
      "song13.t": "Humpty Dumpty", "song13.d": "Ukuta unaoyumba, kuanguka kubwa — na kutua laini.",
      "song14.t": "Hey Diddle Diddle", "song14.d": "Mashairi ya kichekesha — ng'ombe anaruka juu!",
      "song15.t": "Mzee Huyu", "song15.d": "Wimbo wa kuhesabu — nik-nak padi-waki!"
    },

    it: {
      "music.freeTitle": "Tastiera libera",
      "music.freeDesc": "Tocca i tasti colorati — ogni nota suona bene insieme. In WonderSprout non esistono note sbagliate!",
      "music.clapTitle": "Batti le mani a tempo",
      "music.clapDesc": "Un impulso come un battito — batti le mani quando cresce! Prima il ritmo, poi le note.",
      "music.tip1": "<b>👪 Consiglio:</b> canta ad alta voce, anche stonato! La tua voce è lo strumento preferito di tuo figlio — e cantare dal vivo batte qualsiasi registrazione per imparare la lingua.",
      "music.tip2": "<b>👪 Genitori:</b> cantate le parole insieme e aggiungete gesti — dita che brillano, braccia che remano, mani che dormono. Gesti + melodia + parole = triplice aggancio della memoria.",
      "music.tip3": "<b>👪 Genitori:</b> i tasti usano una scala pentatonica — ogni combinazione suona gradevole, quindi esplorare è sempre premiato. Prova a ripetere al bambino la sua piccola melodia!",
      "music.tip4": "<b>👪 Genitori:</b> sentite il ritmo insieme — mani, ginocchia, rimbalzi leggeri. Il senso del ritmo a questa età predice la fluidità nella lettura. Niente punteggi: ogni battito di mani è gioco.",
      "music.sing": "▶ Canta!",
      "music.stop": "⏹ Ferma",
      "music.tempo0": "🐢 Lento",
      "music.tempo1": "🚶 Normale",
      "music.tempo2": "🐇 Saltellante",

      "song0.t": "Brilla, brilla, piccola stella", "song0.d": "La classica ninna nanna — dolce e lenta.",
      "song1.t": "Maria aveva un agnellino", "song1.d": "Una preferita allegra per battere le mani.",
      "song2.t": "Rema, rema la tua barca", "song2.d": "Dondola da una parte all'altra mentre canti!",
      "song3.t": "Dormi? (Frate Giacomo)", "song3.d": "Un canone da cantare insieme — perfetto per rilassarsi.",
      "song4.t": "Bee, bee, pecora nera", "song4.d": "Tre sacchi di lana — una canzone per contare!",
      "song5.t": "Panini caldi", "song5.d": "Breve, dolce e perfetta per le prime canzoni insieme.",
      "song6.t": "Il ponte di Londra sta cadendo", "song6.d": "Costruiscilo con le braccia — e poi crolla!",
      "song7.t": "Campanellini", "song7.d": "Din din! Batti le mani a ogni tintinnio.",
      "song8.t": "Buon compleanno", "song8.d": "Per ogni compleanno, ogni torta, ogni candelina da contare.",
      "song9.t": "Rema, rema la tua barca", "song9.d": "Ritmo dondolante e dolce — perfetto per le ginocchia.",
      "song10.t": "Maria aveva un agnellino", "song10.d": "Una melodia discendente e sonnolenta per serate tranquille.",
      "song11.t": "Il ragnetto Incy Wincy", "song11.d": "Divertimento con le dita che si arrampicano su un motivo ascendente.",
      "song12.t": "Il vecchio MacDonald aveva una fattoria", "song12.d": "Ritornello di versi animali — abbinalo al laboratorio Amici Animali!",
      "song13.t": "Humpty Dumpty", "song13.d": "Un muro traballante, una grande caduta — e un atterraggio dolce.",
      "song14.t": "Hey Diddle Diddle", "song14.d": "Una filastrocca assurda — la mucca salta in alto!",
      "song15.t": "Questo vecchietto", "song15.d": "Canzone per contare — nic-nac paddy-whack!"
    },

    nl: {
      "music.freeTitle": "Vrij klavier",
      "music.freeDesc": "Tik op de gekleurde toetsen — elke noot klinkt samen mooi. In WonderSprout zijn er geen foute noten!",
      "music.clapTitle": "Klap mee op het ritme",
      "music.clapDesc": "Een pols als een hartslag — klap mee als hij groeit! Eerst het ritme, dan de noten.",
      "music.tip1": "<b>👪 Tip:</b> zing hardop mee, ook vals! Jouw stem is het lievelingsinstrument van je kind — en zelf zingen verslaat elke opname bij het leren van taal.",
      "music.tip2": "<b>👪 Ouder:</b> zing de tekst samen en voeg gebaren toe — fonkelende vingers, roeiende armen, slapende handjes. Gebaar + melodie + woord = drievoudige geheugenhaak.",
      "music.tip3": "<b>👪 Ouder:</b> de toetsen gebruiken een pentatonische toonladder — elke combinatie klinkt prettig, dus verkennen loont altijd. Probeer de melodie van je kind terug te spelen!",
      "music.tip4": "<b>👪 Ouder:</b> voel samen het ritme — klappen, tikken op de knieën, zacht deinzen. Ritmegevoel op deze leeftijd voorspelt latere leesvloeiendheid. Geen druk om punten: elke klap telt als spel.",
      "music.sing": "▶ Zing!",
      "music.stop": "⏹ Stop",
      "music.tempo0": "🐢 Langzaam",
      "music.tempo1": "🚶 Gewoon",
      "music.tempo2": "🐇 Huppelend",

      "song0.t": "Twinkel, twinkel kleine ster", "song0.d": "Het klassieke slaapliedje — zacht en langzaam.",
      "song1.t": "Maria had een lammetje", "song1.d": "Een opgewekte favoriet om bij mee te klappen.",
      "song2.t": "Roei, roei, roei je boot", "song2.d": "Wieg heen en weer terwijl je zingt!",
      "song3.t": "Slaap je? (Broeder Jacob)", "song3.d": "Een canon om samen te zingen — perfect om tot rust te komen.",
      "song4.t": "Bè, bè, zwart schaap", "song4.d": "Drie zakken wol — een tel liedje!",
      "song5.t": "Hete kruisbollen", "song5.d": "Kort, lief en perfect voor de eerste meezingers.",
      "song6.t": "De London Bridge valt neer", "song6.d": "Bouw hem op met je armen — en val dan om!",
      "song7.t": "Jingle Bells", "song7.d": "Tingeling! Klap bij elke rinkel.",
      "song8.t": "Lang zal ze leven", "song8.d": "Voor elke verjaardag, elke taart, elk kaarsje om te tellen.",
      "song9.t": "Roei, roei, roei je boot", "song9.d": "Zacht wiegend ritme — perfect voor op schoot.",
      "song10.t": "Maria had een lammetje", "song10.d": "Een slaperig dalende melodie voor rustige avonden.",
      "song11.t": "Het spinnetje Incy Wincy", "song11.d": "Klimplezier met de vingers op een stijgende wijs.",
      "song12.t": "Oude MacDonald had een boerderij", "song12.d": "Dierengeluiden-refrein — koppel het aan het Dierenvriendenlab!",
      "song13.t": "Humpty Dumpty", "song13.d": "Een wankelende muur, een grote val — en een zachte landing.",
      "song14.t": "Hey Diddle Diddle", "song14.d": "Gek onzinnig rijmpje — de koe springt hoog!",
      "song15.t": "Deze oude man", "song15.d": "Telliedje — nik-nak paddy-whack!"
    },

    ja: {
      "music.freeTitle": "じゆうそう パッド",
      "music.freeDesc": "いろつき パッドを たたいてね — どの おとも いっしょに きれいに ひびきます。WonderSprout に まちがいの おとはありません！",
      "music.clapTitle": "リズムで てを たたこう",
      "music.clapDesc": "しんぞうの はくどう みたいな リズム — おおきくなったら てを たたこう！まず リズム、その あと おと。",
      "music.tip1": "<b>👪 ヒント：</b>おおきな こえで うたってね。へたでも いいんです！あなたの こえは 子どもが いちばん だいすきな がっき — ほんとうの うたごえは ことばを おぼえるのに どんな きおくより すぐれています。",
      "music.tip2": "<b>👪 おうちのかたへ：</b>うたを いっしょに うたって うごきも つけてね — きらきら ゆび、こぎ こぎ うで、ねんねの て。うごき + メロディー + ことば = みっつの おぼえる かぎ。",
      "music.tip3": "<b>👪 おうちのかたへ：</b>パッドは ペンタトニック おんかいを つかっています — どう くみあわせても きれいなので、ためす ことが かならず たのしみに なります。子どもの ちいさな メロディーを まねして かえして あげてみてね！",
      "music.tip4": "<b>👪 おうちのかたへ：</b>いっしょに リズムを かんじましょう — てを たたく、ひざを たたく、かるく はねる。この ころの リズムかんは のちの 読む なめらかさを よそう できます。てんすうの 心配は ありません：どの てたたきも あそびです。",
      "music.sing": "▶ うたう！",
      "music.stop": "⏹ とめる",
      "music.tempo0": "🐢 ゆっくり",
      "music.tempo1": "🚶 ふつう",
      "music.tempo2": "🐇 はずむ",

      "song0.t": "きらきら ぼし", "song0.d": "ゆりうたの 古典 — やさしくて ゆっくり。",
      "song1.t": "メリーさんの ひつじ", "song1.d": "てを たたいて うたえる げんきな おきにいり。",
      "song2.t": "こげ こげ ボート", "song2.d": "うたい ながら ゆら ゆら ゆれる！",
      "song3.t": "ねてるの？（ジョン おにいさん）", "song3.d": "いっしょに まわして うたえる うた — しずかに なるのに ぴったり。",
      "song4.t": "めえ めえ くろい ひつじ", "song4.d": "ウールの ふくろ みっつ — かずかぞえの うた！",
      "song5.t": "あつい ホット クロス バンズ", "song5.d": "みじかくて あまくて、はじめての いっしょ うたに ぴったり。",
      "song6.t": "ロンドン ばしが おちてくる", "song6.d": "うでで つみあげて — それから どん！",
      "song7.t": "ジングル ベル", "song7.d": "チリン チリン！りん と なくたびに てを たたく。",
      "song8.t": "おたんじょうび おめでとう", "song8.d": "すべての おたんじょうび、すべての ケーキ、かぞえる ろうそくに。",
      "song9.t": "こげ こげ ボート", "song9.d": "やさしく ゆれる リズム — ひざの うえで はねるのに ぴったり。",
      "song10.t": "メリーさんの ひつじ", "song10.d": "しずかな 夜に、ねむくなる さがる メロディー。",
      "song11.t": "ちいさな クモさん", "song11.d": "ゆびで のぼって あそぶ、のぼる きょく。",
      "song12.t": "マクドナルド おじさんの のうじょう", "song12.d": "どうぶつの こえの コーラス — どうぶつ ともだち ラボと いっしょに！",
      "song13.t": "ハンプティ ダンプティ", "song13.d": "ぐらぐらの かべ、おおきな おちかた — それから やさしい ちゃくち。",
      "song14.t": "ヘイ ディドル ディドル", "song14.d": "たのしい でたらめ うた — うしが たかく ジャンプ！",
      "song15.t": "この おじいさん", "song15.d": "かずかぞえの うた — ニック ナック パディ ワック！"
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
