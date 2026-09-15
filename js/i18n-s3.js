/* WonderSprout story content — part 3: "Pip and the Little Seed" in id/sw/it/nl/ja. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
id: {
"st.pip.title":"Pip dan Biji Kecil","st.pip.desc":"Tunas Pip terbangun di bawah tanah. Bantu Pip memilih cara tumbuh!","st.pip.theme":"Laboratorium Kehidupan · pertumbuhan, air, sinar matahari",
"st.pip.s1.t":"Jauh di bawah tanah, sebuah biji kecil bernama Pip terbangun. «Di sini gelap,» bisik Pip. «Aku ingin melihat dunia!»","st.pip.s1.c0":"💧 Dorong ke atas menuju air","st.pip.s1.c1":"☀️ Dorong ke atas menuju kehangatan",
"st.pip.s2w.t":"Pip mengikuti air yang sejuk dan — POP! — tunas hijau kecil menembus tanah. «Halo, dunia!» kata Pip. Sebuah awan hujan melayang lewat.","st.pip.s2w.c0":"🌧️ Minta minum kepada awan","st.pip.s2w.c1":"🐝 Sapa lebahnya lebih dulu",
"st.pip.s2s.t":"Pip mengikuti sinar matahari yang hangat dan — POP! — tunas hijau kecil menembus tanah. «Halo, dunia!» kata Pip. Matahari tersenyum dari atas.","st.pip.s2s.c0":"☀️ Ucapkan terima kasih pada matahari","st.pip.s2s.c1":"🐝 Sapa lebahnya lebih dulu",
"st.pip.s3bee.t":"Seekor lebah berbulu datang berdengung. «Bzzz! Halo, tunas kecil! Lebah membantu bunga tumbuh. Mau berteman dengan bunga?»","st.pip.s3bee.c0":"🌸 Ya! Berteman dengan bunga",
"st.pip.s3.t":"Pip tumbuh lebih tinggi setiap hari. Satu daun… dua daun… tiga! Tapi Pip haus DAN ingin sinar matahari. Apa yang harus Pip lakukan?","st.pip.s3.c0":"💧 Minum air dulu","st.pip.s3.c1":"☀️ Meregang ke matahari dulu","st.pip.s3.c2":"🎵 Nyanyikan lagu pertumbuhan",
"st.pip.s4song.t":"Pip bernyanyi «Tumbuh, tumbuh, tumbuh!» Lebah menari. Awan menurunkan sedikit hujan. Matahari mengintip. Semua membantu Pip tumbuh!","st.pip.s4song.c0":"🌱 Terus tumbuh!",
"st.pip.s4.t":"Air di akar, matahari di daun — Pip merasakan benjolan kecil di ujungnya. Sebuah kuncup! «Sesuatu yang menakjubkan akan datang,» dengung lebah.","st.pip.s4.c0":"🌼 Buka kuncupnya!",
"st.pip.s5.t":"POP! Pip menjadi bunga keemasan yang indah! Lebah menari, awan bertepuk dengan hujan, dan seorang gadis kecil berbisik: «Halo, Pip». Air + matahari + waktu + teman = sebuah keajaiban!","st.pip.s5.m":"Semuanya tumbuh dengan sedikit air, sedikit matahari, dan banyak kesabaran.","st.pip.s5.r":"Tanam kacang di gelas berisi kapas basah. Siram setiap hari dan lihat Pip-MU sendiri tumbuh!",
},
sw: {
"st.pip.title":"Pip na Mbegu Ndogo","st.pip.desc":"Mcheo Pip anaamka chini ya ardhi. Msaidie Pip kuchagua jinsi ya kukua!","st.pip.theme":"Maabara ya Maisha · ukuaji, maji, mwanga wa jua",
"st.pip.s1.t":"Chini kabisa ya udongo, mbegu ndogo inayoitwa Pip inaamka. «Hapa ni giza,» Pip hususurika. «Nataka kuona dunia!»","st.pip.s1.c0":"💧 Sukuma juu kuelekea maji","st.pip.s1.c1":"☀️ Sukuma juu kuelekea joto",
"st.pip.s2w.t":"Pip anafuata maji ya baridi na — POP! — mcheo mdogo wa kijani unavunja udongo. «Habari, dunia!» anasema Pip. Wingu la mvua linapita likielea.","st.pip.s2w.c0":"🌧️ Omba wingu kunywa","st.pip.s2w.c1":"🐝 Salimia nyuki kwanza",
"st.pip.s2s.t":"Pip anafuata jua la joto na — POP! — mcheo mdogo wa kijani unavunja udongo. «Habari, dunia!» anasema Pip. Jua linatabasamu kutoka juu.","st.pip.s2s.c0":"☀️ Shukuru jua kwa joto","st.pip.s2s.c1":"🐝 Salimia nyuki kwanza",
"st.pip.s3bee.t":"Nyuki mwenye manyoya anakuja akitokea sauti. «Bzzz! Habari, mcheo mdogo! Nyuki husaidia maua kukua. Ungependa kuwa rafiki wa maua?»","st.pip.s3bee.c0":"🌸 Ndiyo! Kuwa rafiki wa maua",
"st.pip.s3.t":"Pip anakua kila siku. Jani moja… majani mawili… matatu! Lakini Pip ana kiu NA anataka jua. Pip anafanye nini?","st.pip.s3.c0":"💧 Kunywa maji kwanza","st.pip.s3.c1":"☀️ Nyosha kuelekea jua kwanza","st.pip.s3.c2":"🎵 Imba wimbo wa kukua",
"st.pip.s4song.t":"Pip anaimba «Kua, kua, kua!» Nyuki anacheza. Wingu linanyesha kidogo. Jua linaangalia. Kila mtu anamsaidia Pip kukua!","st.pip.s4song.c0":"🌱 Endelea kukua!",
"st.pip.s4.t":"Maji kwenye mizizi, jua kwenye majani — Pip anahisi uvimbe mdogo juu. Chipukizi! «Kitu cha ajabu kinakuja,» nyuki ananguruma.","st.pip.s4.c0":"🌼 Fungua chipukizi!",
"st.pip.s5.t":"POP! Pip anakuwa ua zuri la dhahabu! Nyuki anacheza, wingu linapiga makofi kwa mvua, na msichana mdogo anasusurika: «Habari, Pip». Maji + jua + wakati + marafiki = ajabu!",
"st.pip.s5.m":"Kila kitu hukua na maji kidogo, jua kidogo, na subira nyingi.","st.pip.s5.r":"Panda maharagwe kwenye kikombe chenye pamba yenye unyevu. Imwagilie kila siku na uone Pip WAKO mwenyewe akukua!",
},
it: {
"st.pip.title":"Pip e il Piccolo Seme","st.pip.desc":"Pip il germoglio si sveglia sottoterra. Aiuta Pip a scegliere come crescere!","st.pip.theme":"Laboratorio della Vita · crescita, acqua, luce del sole",
"st.pip.s1.t":"In fondo sotto la terra, un semino di nome Pip si sveglia. «Qui è buio», sussurra Pip. «Voglio vedere il mondo!»","st.pip.s1.c0":"💧 Spingi verso l'acqua","st.pip.s1.c1":"☀️ Spingi verso il calore",
"st.pip.s2w.t":"Pip segue l'acqua fresca e — POP! — un piccolo germoglio verde rompe la terra. «Ciao, mondo!» dice Pip. Passa fluttuando una nuvola di pioggia.","st.pip.s2w.c0":"🌧️ Chiedi un sorso alla nuvola","st.pip.s2w.c1":"🐝 Saluta prima l'ape",
"st.pip.s2s.t":"Pip segue il sole caldo e — POP! — un piccolo germoglio verde rompe la terra. «Ciao, mondo!» dice Pip. Il sole sorride dall'alto.","st.pip.s2s.c0":"☀️ Ringrazia il sole per il calore","st.pip.s2s.c1":"🐝 Saluta prima l'ape",
"st.pip.s3bee.t":"Un'ape morbida arriva ronzando. «Bzzz! Ciao, piccolo germoglio! Le api aiutano i fiori a crescere. Vuoi diventare amica dei fiori?»","st.pip.s3bee.c0":"🌸 Sì! Divento amica dei fiori",
"st.pip.s3.t":"Pip cresce un po' ogni giorno. Una foglia… due foglie… tre! Ma Pip ha sete E vuole il sole. Cosa dovrebbe fare Pip?","st.pip.s3.c0":"💧 Bevi prima l'acqua","st.pip.s3.c1":"☀️ Allungati verso il sole","st.pip.s3.c2":"🎵 Canta una canzone di crescita",
"st.pip.s4song.t":"Pip canta «Cresci, cresci, cresci!» L'ape danza. La nuvola piove un po'. Il sole fa capolino. Tutti aiutano Pip a crescere!","st.pip.s4song.c0":"🌱 Continua a crescere!",
"st.pip.s4.t":"Acqua sulle radici, sole sulle foglie — Pip sente una piccola protuberanza in cima. Una gemma! «Sta arrivando qualcosa di meraviglioso», ronza l'ape.","st.pip.s4.c0":"🌼 Apri la gemma!",
"st.pip.s5.t":"POP! Pip diventa un bellissimo fiore dorato! L'ape danza, la nuvola applaude con la pioggia, e una bambina sussurra: «Ciao, Pip». Acqua + sole + tempo + amici = una meraviglia!","st.pip.s5.m":"Tutto cresce con un po' d'acqua, un po' di sole e tanta pazienza.","st.pip.s5.r":"Pianta un fagiolo in un bicchiere con cotone umido. Annaffialo ogni giorno e guarda crescere il TUO Pip!",
},
nl: {
"st.pip.title":"Pip en het Kleine Zaadje","st.pip.desc":"Pip de scheut wordt wakker onder de grond. Help Pip kiezen hoe hij groeit!","st.pip.theme":"Levenslaboratorium · groei, water, zonlicht",
"st.pip.s1.t":"Diep onder de grond wordt een piepklein zaadje genaamd Pip wakker. «Het is hier donker», fluistert Pip. «Ik wil de wereld zien!»","st.pip.s1.c0":"💧 Duw omhoog naar het water","st.pip.s1.c1":"☀️ Duw omhoog naar de warmte",
"st.pip.s2w.t":"Pip volgt het koele water en — POP! — een klein groen scheutje breekt door de grond. «Hallo, wereld!» zegt Pip. Er drijft een regenwolk voorbij.","st.pip.s2w.c0":"🌧️ Vraag de wolk om een slokje","st.pip.s2w.c1":"🐝 Zeg eerst hallo tegen de bij",
"st.pip.s2s.t":"Pip volgt de warme zon en — POP! — een klein groen scheutje breekt door de grond. «Hallo, wereld!» zegt Pip. De zon glimlacht naar beneden.","st.pip.s2s.c0":"☀️ Bedank de zon voor de warmte","st.pip.s2s.c1":"🐝 Zeg eerst hallo tegen de bij",
"st.pip.s3bee.t":"Een harige bij komt zoemend aan. «Bzzz! Hallo, scheutje! Bijen helpen bloemen groeien. Wil je bloemenvriend worden?»","st.pip.s3bee.c0":"🌸 Ja! Bloemenvriend worden",
"st.pip.s3.t":"Pip groeit elke dag een beetje. Eén blad… twee bladeren… drie! Maar Pip heeft dorst EN wil zon. Wat moet Pip doen?","st.pip.s3.c0":"💧 Drink eerst water","st.pip.s3.c1":"☀️ Strek je eerst naar de zon","st.pip.s3.c2":"🎵 Zing een groeilied",
"st.pip.s4song.t":"Pip zingt «Groei, groei, groei!» De bij danst. De wolk regent een beetje. De zon steekt zijn hoofd op. Iedereen helpt Pip groeien!","st.pip.s4song.c0":"🌱 Blijf groeien!",
"st.pip.s4.t":"Water op de wortels, zon op de bladeren — Pip voelt een klein bultje bovenaan. Een knop! «Er komt iets wonderlijks aan», zoemt de bij.","st.pip.s4.c0":"🌼 Open de knop!",
"st.pip.s5.t":"POP! Pip wordt een prachtige gouden bloem! De bij danst, de wolk klapt met regen, en een klein meisje fluistert: «Hallo, Pip». Water + zon + tijd + vrienden = een wonder!","st.pip.s5.m":"Alles groeit met een beetje water, een beetje zon en veel geduld.","st.pip.s5.r":"Plant een boon in een glas met natte watten. Geef dagelijks water en zie JE eigen Pip groeien!",
},
ja: {
"st.pip.title":"ピップと ちいさな たね","st.pip.desc":"めの ピップが つちのしたで めをさます。どう そだつか えらぶのを たすけて！","st.pip.theme":"いのちの じっけんしつ · せいちょう、みず、たいようのひかり",
"st.pip.s1.t":"つちの ふかくで、ピップという ちいさな たねが めをさます。「ここは くらいよ」と ピップは ささやく。「せかいを みたい！」","st.pip.s1.c0":"💧 みずのほうへ うえに おす","st.pip.s1.c1":"☀️ あたたかいほうへ うえに おす",
"st.pip.s2w.t":"ピップは つめたい みずを おいかけて — ポン！ — ちいさな みどりの めが つちを やぶる。「こんにちは せかい！」と ピップ。あまぐもが とおっていく。","st.pip.s2w.c0":"🌧️ くもに みずを もらう","st.pip.s2w.c1":"🐝 さきに はちに あいさつ",
"st.pip.s2s.t":"ピップは あたたかい ひざしを おいかけて — ポン！ — ちいさな みどりの めが つちを やぶる。「こんにちは せかい！」と ピップ。おひさまが わらう。","st.pip.s2s.c0":"☀️ あたたかさを おひさまに ありがとう","st.pip.s2s.c1":"🐝 さきに はちに あいさつ",
"st.pip.s3bee.t":"ふわふわの はちが ブーンと くる。「ブーン！こんにちは ちいさな め！はちは おはなの せいちょうを たすけるの。おはなと ともだちに なる？」","st.pip.s3bee.c0":"🌸 うん！おはなと ともだちに なる",
"st.pip.s3.t":"ピップは まいにち すこしずつ のびる。はが 1まい…2まい…3まい！でも ピップは のどが かわいていて、ひざしも ほしがっている。どうする？","st.pip.s3.c0":"💧 さきに みずを のむ","st.pip.s3.c1":"☀️ さきに おひさまに のびる","st.pip.s3.c2":"🎵 そだつの うたを うたう",
"st.pip.s4song.t":"ピップは うたう「のびろ のびろ のびろ！」はちは おどる。くもは すこし あめを ふらす。おひさまが かおをだす。みんなで ピップを たすける！","st.pip.s4song.c0":"🌱 どんどん のびよう！",
"st.pip.s4.t":"ねっこに みず、はに ひざし — ピップは てっぺんに ちいさな ふくらみを かんじる。つぼみだ！「すてきなことが くるよ」と はちが うなる。","st.pip.s4.c0":"🌼 つぼみを ひらこう！",
"st.pip.s5.t":"ポン！ピップは きんいろの うつくしい おはなに なった！はちは おどり、くもは あめで てをたたき、ちいさな おんなのこが ささやく「こんにちは ピップ」。みず＋ひざし＋じかん＋ともだち＝ふしぎ！","st.pip.s5.m":"なんでも すこしの みずと、すこしの ひざしと、たくさんの がまんあれば そだつよ。","st.pip.s5.r":"ぬらした わたを いれた コップに まめを うえよう。まいにち みずをやって、きみだけの ピップを みてね！",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
