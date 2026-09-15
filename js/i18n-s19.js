/* WonderSprout story content — part 19: "Where Is Beep?" + "Duckling's Bath Day" in id/sw/it/nl/ja. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
id: {
"st.beep.title":"Di Mana Beep?","st.beep.desc":"Robot Beep sedang bersembunyi. Bisa temukan dia dari bunyinya?","st.beep.theme":"Keabadian objek · mendengarkan, cilukba",
"st.beep.h1.t":"«Bip bip!» robot Beep terkikik, dan bersembunyi di suatu tempat di taman bermain. Kamu bisa MENDENGARNYA tapi tidak bisa MELIHATNYA. Dari mana bunyi bip itu?","st.beep.h1.c0":"🛝 Lihat di bawah perosotan","st.beep.h1.c1":"🎠 Lihat di belakang ayunan",
"st.beep.h2a.t":"Kamu mengangkat… tidak ada Beep di bawah perosotan! «Bip bip!» bunyinya datang lagi — lebih dekat kali ini. Beep masih bersembunyi, dan dia masih ada!","st.beep.h2a.c0":"🏖️ Lihat di kotak pasir",
"st.beep.h2b.t":"Mengintip… tidak ada Beep di belakang ayunan! «Bip bip!» Dia terkikik di tempat lain. Bahkan saat kamu tidak bisa melihat Beep, dia tetap ada!","st.beep.h2b.c0":"🪑 Lihat di bawah bangku",
"st.beep.h3.t":"Kamu mengangkat handuk biru kecil itu dan… «BIP BIP!» Dia di sana! Beep melompat dan memelukmu seperti robot. Juara cilukba!","st.beep.h3.m":"Benda tetap ada walau kamu tidak bisa melihatnya — itu penemuan otak yang besar!","st.beep.h3.r":"Mainkan cilukba, atau sembunyikan mainan di bawah gelas dan biarkan anakmu menemukannya.",
"st.duck.title":"Hari Mandi Anak Bebek","st.duck.desc":"Anak Bebek ragu soal waktu mandi. Percikkan pelan-pelan dan cari tahu apa yang mengapung!","st.duck.theme":"Mengapung & Tenggelam · percaya diri di air",
"st.duck.s1.t":"Byur! Anak Bebek berjalan terhuyung ke bak mandi hangat. «Apakah airnya terlalu besar untuk bebek kecil?» ia berbisik.","st.duck.s1.c0":"💧 Sentuh airnya pelan-pelan","st.duck.s1.c1":"🛁 Bawa perahu kuning dulu",
"st.duck.s2.t":"Anak Bebek mencelupkan satu kaki berselaput… lalu POP — dia mengapung! «Aku mengapung! AKU MENGAPUNG!» ia mengwek gembira.","st.duck.s2.c0":"🫧 Tiup gelombang gelembung","st.duck.s2.c1":"🦆 Berputar dalam lingkaran bahagia",
"st.duck.s2b.t":"Perahu kuning kecil terayun di atas. «Dia mengapung — dan aku juga akan!» kata Anak Bebek yang berani, melompat masuk.","st.duck.s2b.c0":"🫧 Tiup gelombang gelembung","st.duck.s2b.c1":"🦆 Balapan dengan perahu kuning",
"st.duck.s3.t":"Gelembung di mana-mana! Anak Bebek memecahkan satu dengan paruhnya — POP! Waktu mandi adalah waktu terbaik.","st.duck.s3.c0":" Mengwek akhir yang bahagia",
"st.duck.end.t":"«Sampai jumpa besok, air!» kata Anak Bebek, mengapung seperti seorang ahli. TAMAT — sekarang coba mengapung di bak mandi dengan mainanmu!",
},
sw: {
"st.beep.title":"Beep Yupo Wapi?","st.beep.desc":"Roboti Beep anajificha. Unaweza kumpata kwa sauti yake?","st.beep.theme":"Uwepo wa kitu · kusikiliza, kucheza kujificha",
"st.beep.h1.t":"«Bip bip!» Roboti Beep anacheka, na kujificha mahali fulani katika uwanja wa michezo. Unaweza KUMSIKIA lakini huwezi KUMWONA. Sauti hiya inatoka wapi?","st.beep.h1.c0":"🛝 Angalia chini ya kitelemsho","st.beep.h1.c1":"🎠 Angalia nyuma ya bembea",
"st.beep.h2a.t":"Unainua… hakuna Beep chini ya kitelemsho! «Bip bip!» sauti inakuja tena — karibu zaidi wakati huu. Beep bado anajificha, na bado yupo!","st.beep.h2a.c0":"🏖️ Angalia katika sanduku la mchanga",
"st.beep.h2b.t":"Kuangalia… hakuna Beep nyuma ya bembea! «Bip bip!» Anacheka mahali pengine. Hata wakati huwezi kumwona Beep, bado yupo!","st.beep.h2b.c0":"🪑 Angalia chini ya benchi",
"st.beep.h3.t":"Unainua taulo ndogo ya bluu na… «BIP BIP!» Yupo hapa! Beep anaruka na kukukumbatia kama roboti. Bingwa wa kujificha!","st.beep.h3.m":"Vitu bado vinaendelea kuwepo hata kama huwezi kuviona — hiyo ni ugunduzi mkubwa wa ubongo!","st.beep.h3.r":"Chezeni kujificha, au ficha kitabu chini ya kikombe na umwache mtoto wako akipate.",
"st.duck.title":"Siku ya Bafu ya Mtoto Bata","st.duck.desc":"Mtoto Bata hajui kuhusu wakati wa bafu. Nyunyizia taratibu na ujue kinachoelea!","st.duck.theme":"Kuelea na Kuzama · kujiamini majini",
"st.duck.s1.t":"Bushi! Mtoto Bata anatembea kwa mabadiliko kwenda bafu la joto. «Je, maji ni makubwa sana kwa bata mdogo?» anasema taratibu.","st.duck.s1.c0":"💧 Gusa maji taratibu","st.duck.s1.c1":"🛁 Leta boti ya njano kwanza",
"st.duck.s2.t":"Mtoto Bata anazamisha mguu mmoja wenye utando… kisha POP — anaelea! «Ninaelea! NINAELEA!» ananguruma kwa furaha.","st.duck.s2.c0":"🫧 Puliza mawimbi ya mapovu","st.duck.s2.c1":"🦆 Zunguka katika miduara ya furaha",
"st.duck.s2b.t":"Boti ndogo ya njano inayumba juu. «Inaelea — na mimi nitaelea pia!» anasema Mtoto Bata jasiri, akitupa ndani.","st.duck.s2b.c0":"🫧 Puliza mawimbi ya mapovu","st.duck.s2b.c1":"🦆 Fanya mbio na boti ya njano",
"st.duck.s3.t":"Mapovu kila mahali! Mtoto Bata anapasua moja kwa mdomo wake — POP! Wakati wa bafu ni wakati bora.","st.duck.s3.c0":" Nguruma mwisho wa furaha",
"st.duck.end.t":"«Tuonane kesho, maji!» anasema Mtoto Bata, akitafuta kama stadi. MWISHO — sasa jaribu kuelelea bafu na vinyago vyako!",
},
it: {
"st.beep.title":"Dov'è Beep?","st.beep.desc":"Il robot Beep si nasconde. Riesci a trovarlo dal suo bip?","st.beep.theme":"Permanenza dell'oggetto · ascoltare, cucù",
"st.beep.h1.t":"«Bip bip!» ride il robot Beep, e si nasconde da qualche parte nel parco giochi. Puoi SENTIRLO ma non puoi VEDERLO. Da dove viene quel bip?","st.beep.h1.c0":"🛝 Guarda sotto lo scivolo","st.beep.h1.c1":"🎠 Guarda dietro l'altalena",
"st.beep.h2a.t":"Alzi… nessun Beep sotto lo scivolo! «Bip bip!» il suono torna — più vicino stavolta. Beep si nasconde ancora, ed esiste ancora!","st.beep.h2a.c0":"🏖️ Guarda nella sabbiera",
"st.beep.h2b.t":"Sbirci… nessun Beep dietro l'altalena! «Bip bip!» Sta ridendo da un'altra parte. Anche quando non vedi Beep, lui c'è ancora!","st.beep.h2b.c0":"🪑 Guarda sotto la panchina",
"st.beep.h3.t":"Alzi l'asciughino azzurro e… «BIP BIP!» Eccolo! Beep salta su e ti dà un abbraccio da robot. Campione di cucù!","st.beep.h3.m":"Le cose esistono anche quando non le vedi — è una grande scoperta del cervello!","st.beep.h3.r":"Giocate a cucù, o nascondi un giocattolo sotto un bicchiere e lascia che il tuo bambino lo trovi.",
"st.duck.title":"Il Giorno del Bagnetto dell'Anatroccolo","st.duck.desc":"L'Anatroccolo non è sicuro del bagnetto. Spruzza piano e scopri cosa galleggia!","st.duck.theme":"Galleggiare e Affondare · fiducia in acqua",
"st.duck.s1.t":"Splash! L'Anatroccolo cammina barcollando verso il bagno caldo. «L'acqua è troppo grande per un'anatroccola piccola?» sussurra.","st.duck.s1.c0":"💧 Tocca l'acqua piano","st.duck.s1.c1":"🛁 Porta prima la barchetta gialla",
"st.duck.s2.t":"L'Anatroccolo immerge un piede palmato… poi POP — sta galleggiando! «Galleggio! GALLEGGIO!» starnazza di gioia.","st.duck.s2.c0":"🫧 Soffia onde di bolle","st.duck.s2.c1":"🦆 Gira in cerchi felici",
"st.duck.s2b.t":"La barchetta gialla dondola sopra. «Galleggia — e anch'io lo farò!» dice il coraggioso Anatroccolo, saltando dentro.","st.duck.s2b.c0":"🫧 Soffia onde di bolle","st.duck.s2b.c1":"🦆 Fai la gara con la barchetta gialla",
"st.duck.s3.t":"Bolle dappertutto! L'Anatroccolo ne fa scoppiare una col becco — POP! L'ora del bagnetto è la migliore.","st.duck.s3.c0":" Starnazza un finale felice",
"st.duck.end.t":"«A domani, acqua!» dice l'Anatroccolo, galleggiando come un professionista. FINE — ora prova a galleggiare nel bagnetto con i tuoi giocattoli!",
},
nl: {
"st.beep.title":"Waar Is Beep?","st.beep.desc":"Robot Beep verstopt zich. Kun je hem vinden op zijn piepje?","st.beep.theme":"Objectpermanentie · luisteren, kiekeboe",
"st.beep.h1.t":"«Piep piep!» giechelt Robot Beep, en verstopt zich ergens op de speeltuin. Je kunt hem HOREN maar niet ZIEN. Waar komt dat piepje vandaan?","st.beep.h1.c0":"🛝 Kijk onder de glijbaan","st.beep.h1.c1":"🎠 Kijk achter de schommel",
"st.beep.h2a.t":"Je tilt op… geen Beep onder de glijbaan! «Piep piep!» het geluid komt weer — dichterbij deze keer. Beep verstopt zich nog, en hij bestaat nog!","st.beep.h2a.c0":"🏖️ Kijk in de zandbak",
"st.beep.h2b.t":"Gluur… geen Beep achter de schommel! «Piep piep!» Hij giechelt ergens anders. Zelfs als je Beep niet kunt zien, is hij er nog!","st.beep.h2b.c0":"🪑 Kijk onder de bank",
"st.beep.h3.t":"Je tilt het kleine blauwe handdoekje op en… «PIEP PIEP!» Daar is hij! Beep springt op en geeft je een robotknuffel. Kiekeboekampioen!","st.beep.h3.m":"Dingen bestaan nog steeds, ook als je ze niet kunt zien — dat is een grote hersenontdekking!","st.beep.h3.r":"Speel kiekeboe, of verberg een speeltje onder een beker en laat je kind het vinden.",
"st.duck.title":"De Baddag van het Eendje","st.duck.desc":"Het Eendje twijfelt over badtijd. Spetter zachtjes en ontdek wat drijft!","st.duck.theme":"Drijven & Zinken · vertrouwen in water",
"st.duck.s1.t":"Plons! Het Eendje waggelt naar het warme bad. «Is het water te groot voor een kleine eend?» fluistert hij.","st.duck.s1.c0":"💧 Raak het water langzaam aan","st.duck.s1.c1":"🛁 Breng eerst het gele bootje",
"st.duck.s2.t":"Het Eendje doopt één zwemvoetje… dan PLOP — hij drijft! «Ik drijf! IK DRIJF!» kwaakt hij van vreugde.","st.duck.s2.c0":"🫧 Blaas bubbelgolven","st.duck.s2.c1":"🦆 Draai in vrolijke cirkels",
"st.duck.s2b.t":"Het kleine gele bootje wiegt bovenop. «Het drijft — en ik ook!» zegt het dappere Eendje, terwijl hij erin springt.","st.duck.s2b.c0":"🫧 Blaas bubbelgolven","st.duck.s2b.c1":"🦆 Race met het gele bootje",
"st.duck.s3.t":"Overal bellen! Het Eendje laat er één knappen met zijn snavel — PLOP! Badtijd is de beste tijd.","st.duck.s3.c0":" Kwaak een vrolijk einde",
"st.duck.end.t":"«Tot morgen, water!» zegt het Eendje, drijvend als een professional. EINDE — probeer nu drijven in bad met je speelgoed!",
},
ja: {
"st.beep.title":"ビープは どこ？","st.beep.desc":"ロボットの ビープが かくれている。ピッという おとで みつけられるかな？","st.beep.theme":"ものの ぞんざい · きく、いないいないばあ",
"st.beep.h1.t":"「ピッ ピッ！」と ロボットの ビープが くすくす わらって、こうえんの どこかに かくれる。きこえるけど みえない。その ピッは どこから？","st.beep.h1.c0":"🛝 すべりだいの したを みる","st.beep.h1.c1":"🎠 ブランコの うしろを みる",
"st.beep.h2a.t":"あげてみると… すべりだいの したに ビープは いない！「ピッ ピッ！」と おとが また — こんどは ちかく。ビープは まだ かくれていて、まだ そんざいする！","st.beep.h2a.c0":"🏖️ すなばを みる",
"st.beep.h2b.t":"のぞいて… ブランコの うしろに ビープは いない！「ピッ ピッ！」べつの ところで わらっている。ビープが みえなくても、そこにいる！","st.beep.h2b.c0":"🪑 ベンチの したを みる",
"st.beep.h3.t":"ちいさな あおい タオルを あげると…「ピッ ピッ！」ここに いた！ビープは とびあがって ロボットの だきつき。いないいないばあ チャンピオン！","st.beep.h3.m":"みえなくても ものは そんざいする — それは おおきな はっけん！","st.beep.h3.r":"いないいないばあを したり、おもちゃを コップの したに かくして こどもに みつけさせよう。",
"st.duck.title":"あひるの こどもの おふろび","st.duck.desc":"あひるの こどもは おふろに 自信がない。やさしく ばしゃばしゃして、なにが うくか みつけよう！","st.duck.theme":"うくと しずむ · みずへの じしん",
"st.duck.s1.t":"ぱしゃ！あひるの こどもは よちよち あたたかい おふろへ。「みずは ちいさな あひるには おおきすぎる？」と ささやく。","st.duck.s1.c0":"💧 ゆっくり みずに さわる","st.duck.s1.c1":"🛁 まえに きいろの ふねを もってくる",
"st.duck.s2.t":"あひるの こどもは みずかきのある あしを つける…そして ポン — ういている！「ういた！ういたよ！」と よろこびで なく。","st.duck.s2.c0":"🫧 あわの なみを ふく","st.duck.s2.c1":"🦆 うれしい まるを かいて まわる",
"st.duck.s2b.t":"ちいさな きいろの ふねが うえで ゆれる。「あれは うく — ぼくも うくよ！」と ゆうきな あひるの こどもが とびこむ。","st.duck.s2b.c0":"🫧 あわの なみを ふく","st.duck.s2b.c1":"🦆 きいろの ふねと きょうそう",
"st.duck.s3.t":"あわが いたるところに！あひるの こどもは くちばしで ひとつ わる — ポン！おふろの じかんは いちばん。","st.duck.s3.c0":" うれしい おわりを なく",
"st.duck.end.t":"「また あしたね、みず！」と あひるの こどもが プロのように ういて いう。おわり — こんどは おもちゃで おふろの うきを ためそう！",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
