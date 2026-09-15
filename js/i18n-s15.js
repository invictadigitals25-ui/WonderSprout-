/* WonderSprout story content — part 15: "Benny Bear's Picnic" + "Finn the Little Fish" in id/sw/it/nl/ja. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
id: {
"st.picnic.title":"Piknik Beruang Benny","st.picnic.desc":"Benny menyiapkan tiga apel. Dengan siapa dia akan berbagi?","st.picnic.theme":"Matematika & kebaikan · berhitung, berbagi",
"st.picnic.p1.t":"Beruang Benny menyiapkan keranjangnya: satu apel, dua apel, TIGA apel! «Piknik butuh teman,» katanya. Siapa yang harus dia undang?","st.picnic.p1.c0":"🐰 Undang Kelinci Rosie","st.picnic.p1.c1":"🦊 Undang Rubah Felix",
"st.picnic.p2a.t":"Kelinci Rosie melompat datang. Tiga apel, dua teman… «Satu untukmu, satu untukku,» kata Benny, «dan satu kita bagi dua!»","st.picnic.p2a.c0":"🍎 Masing-masing satu — adil!","st.picnic.p2a.c1":"🍯 Simpan satu untuk puding",
"st.picnic.p2b.t":"Rubah Felix sangat lapar — dia ingin DUA apel! Benny berpikir keras. Lalu Felix tersenyum: «Atau… kita bisa memetik beri bersama dan punya LEBIH untuk semua!»","st.picnic.p2b.c0":"🫐 Petik beri bersama","st.picnic.p2b.c1":"🍎 Tetap bagikan apelnya",
"st.picnic.p3.t":"Taplak piknik penuh: apel, beri, roti isi madu, dan dua teman yang sangat bahagia. Berhitung bersama membuat semuanya terasa lebih enak!","st.picnic.p3.m":"Berhitung dan berbagi menciptakan teman baik — dan piknik yang hebat.","st.picnic.p3.r":"Saat camilan berikutnya, hitung piring dan cangkir bersama: satu untuk setiap orang!",
"st.finn.title":"Finn si Ikan Kecil","st.finn.desc":"Finn mencari mutiara berkilau di dasar laut.","st.finn.theme":"Dunia air · berhitung, kebaikan",
"st.finn.f1.t":"Blup blup! Finn si ikan kecil mendengar tentang mutiara berkilau yang tersembunyi di biru yang dalam. «Aku akan menemukannya!» Tapi laut itu luas. Siapa yang bisa membantu?","st.finn.f1.c0":"🐙 Tanya Gurita Ollie","st.finn.f1.c1":"🫧 Ikuti gelembung perak",
"st.finn.f2a.t":"Gurita Ollie melambaikan KEDELAPAN lengannya. «Hitung bersamaku — 1, 2, 3, 4, 5, 6, 7, 8! Mutiara tinggal melewati koral kedelapan,» ia menunjuk dengan lengan terpanjangnya.","st.finn.f2a.c0":"🪸 Berenang melewati delapan koral",
"st.finn.f2b.t":"Gelembung perak membawa Finn turun, turun, turun… ke cangkang raksasa yang tertidur. Haruskah Finn langsung membukanya?","st.finn.f2b.c0":"🚪 Ketuk dengan sopan dulu","st.finn.f2b.c1":"🎵 Bernyanyi untuk membangunkan cangkang",
"st.finn.f3.t":"Cangkang terbuka dan — WOW! Mutiara bersinar seperti bulan kecil. Finn berbagi cahayanya dengan sudut tergelap laut, agar tidak ada lagi yang takut.","st.finn.f3.m":"Kesopanan dan berbagi membuat setiap harta lebih bersinar.","st.finn.f3.r":"Hitung gelembung saat mandi berikutnya — bisakah kamu memecahkan tepat lima?",
},
sw: {
"st.picnic.title":"Pikniki ya Dubu Benny","st.picnic.desc":"Benny anapakia matofa matatu. Atashiriki na nani?","st.picnic.theme":"Hisabati na wema · kuhesabu, kushiriki",
"st.picnic.p1.t":"Dubu Benny anapakia kikapu chake: tofaa moja, matofa mawili, matofa MATATU! «Pikniki inahitaji marafiki,» anasema. Anapaswa kumwalika nani?","st.picnic.p1.c0":"🐰 Mwalike Sungura Rosie","st.picnic.p1.c1":"🦊 Mwalike Mbweha Felix",
"st.picnic.p2a.t":"Sungura Rosie anaruka kuja. Matofa matatu, marafiki wawili… «Moja kwako, moja kwangu,» anasema Benny, «na moja tunaweza kugawanya nusu!»","st.picnic.p2a.c0":"🍎 Kila mmoja moja — haki!","st.picnic.p2a.c1":"🍯 Weka moja kwa pudini",
"st.picnic.p2b.t":"Mbweha Felix ana njaa sana — anataka matofa MAWILI! Benny anafikiri sana. Kisha Felix anatabasamu: «Au… tunaweza kuchuma beri pamoja na kuwa NA ZAIDI kwa kila mtu!»","st.picnic.p2b.c0":"🫐 Chumeni beri pamoja","st.picnic.p2b.c1":"🍎 Shirikini matofa hivyo hivyo",
"st.picnic.p3.t":"Kitambaa cha pikniki kinajaa: matofa, beri, sendwichi za asali na marafiki wawili wenye furaha sana. Kuhesabu pamoja kulifanya kila kitu kionje vizuri zaidi!","st.picnic.p3.m":"Kuhesabu na kushiriki hufanya marafiki wema — na pikniki nzuri.","st.picnic.p3.r":"Kwenye kitafunwa chako kijacho, hesabuni sahani na vikombe pamoja: moja kwa kila mtu!",
"st.finn.title":"Finn Samaki Mdogo","st.finn.desc":"Finn anatafuta lulu inayong'aa chini ya bahari.","st.finn.theme":"Dunia ya maji · kuhesabu, wema",
"st.finn.f1.t":"Blub blub! Finn samaki mdogo anasikia kuhusu lulu inayong'aa iliyofichwa katika bluu ya kina. «Nitaiipata!» Lakini bahari ni kubwa. Nani anaweza kusaidia?","st.finn.f1.c0":"🐙 Uliza Pweza Ollie","st.finn.f1.c1":"🫧 Fuata mapovu ya fedha",
"st.finn.f2a.t":"Pweza Ollie anawasha mikono YOTE MINANE. «Hesabu nami — 1, 2, 3, 4, 5, 6, 7, 8! Lulu inaishi kupita matumbawe ya nane,» anaelekeza kwa mkono wake mrefu zaidi.","st.finn.f2a.c0":"🪸 Ogelea kupita matumbawe nane",
"st.finn.f2b.t":"Mapovu ya fedha yanampeleka Finn chini, chini, chini… hadi gandeni kubwa linalolala. Je, Finn alipaswa kuli fungua tu?","st.finn.f2b.c0":"🚪 Gonga kwa heshima kwanza","st.finn.f2b.c1":"🎵 Imba kuamsha gande",
"st.finn.f3.t":"Gande linafunguka na — WOW! Lulu inang'aa kama mwezi mdogo. Finn anashiriki mwanga wake na kona yenye giza zaidi ya bahari, ili mtu asiogope tena.","st.finn.f3.m":"Heshima na kushiriki hufanya kila hazina ing'ae zaidi.","st.finn.f3.r":"Hesabu mapovu katika bafu lako lijalo — unaweza kupasua matano haswa?",
},
it: {
"st.picnic.title":"Il Picnic di Benny l'Orso","st.picnic.desc":"Benny prepara tre mele. Con chi le condividerà?","st.picnic.theme":"Matematica e gentilezza · contare, condividere",
"st.picnic.p1.t":"Benny l'Orso prepara il cestino: una mela, due mele, TRE mele! «Un picnic ha bisogno di amici», dice. Chi dovrebbe invitare?","st.picnic.p1.c0":"🐰 Invita la Coniglia Rosie","st.picnic.p1.c1":"🦊 Invita la Volpe Felix",
"st.picnic.p2a.t":"La Coniglia Rosie arriva saltellando. Tre mele, due amici… «Una per te, una per me», dice Benny, «e una la dividiamo a metà!»","st.picnic.p2a.c0":"🍎 Una a testa — è giusto!","st.picnic.p2a.c1":"🍯 Tienine una per il dolce",
"st.picnic.p2b.t":"La Volpe Felix ha molta fame — vorrebbe DUE mele! Benny ci pensa bene. Poi Felix sorride: «Oppure… potremmo cogliere le bacche insieme e averne DI PIÙ per tutti!»","st.picnic.p2b.c0":"🫐 Cogliete le bacche insieme","st.picnic.p2b.c1":"🍎 Condividete comunque le mele",
"st.picnic.p3.t":"La coperta del picnic si riempie: mele, bacche, panini al miele e due amici felicissimi. Contare insieme ha reso tutto più buono!","st.picnic.p3.m":"Contare e condividere creano buoni amici — e picnic meravigliosi.","st.picnic.p3.r":"Alla tua prossima merenda, contate insieme piatti e tazze: uno per ogni persona!",
"st.finn.title":"Finn il Pesciolino","st.finn.desc":"Finn cerca la perla luccicante in fondo al mare.","st.finn.theme":"Mondo dell'acqua · contare, gentilezza",
"st.finn.f1.t":"Blub blub! Finn il pesciolino sente parlare di una perla luccicante nascosta nel blu profondo. «La troverò!» Ma il mare è grande. Chi può aiutare?","st.finn.f1.c0":"🐙 Chiedi al Polpo Ollie","st.finn.f1.c1":"🫧 Segui le bolle argentate",
"st.finn.f2a.t":"Il Polpo Ollie saluta con tutte e OTTO le braccia. «Conta con me — 1, 2, 3, 4, 5, 6, 7, 8! La perla vive oltre l'ottavo corallo», indica con il braccio più lungo.","st.finn.f2a.c0":"🪸 Nuota oltre otto coralli",
"st.finn.f2b.t":"Le bolle argentate portano Finn giù, giù, giù… fino a una conchiglia gigante addormentata. Finn dovrebbe aprirla e basta?","st.finn.f2b.c0":"🚪 Bussa educatamente prima","st.finn.f2b.c1":"🎵 Canta per svegliare la conchiglia",
"st.finn.f3.t":"La conchiglia si apre e — WOW! La perla brilla come una piccola luna. Finn condivide la sua luce con l'angolo più buio del mare, così nessuno ha più paura.","st.finn.f3.m":"La gentilezza e la condivisione rendono ogni tesoro più luminoso.","st.finn.f3.r":"Conta le bolle al tuo prossimo bagno — riesci a scoppiarne esattamente cinque?",
},
nl: {
"st.picnic.title":"De Picknick van Beer Benny","st.picnic.desc":"Benny pakt drie appels in. Met wie zal hij ze delen?","st.picnic.theme":"Rekenen & vriendelijkheid · tellen, delen",
"st.picnic.p1.t":"Beer Benny pakt zijn mand in: één appel, twee appels, DRIE appels! «Een picknick heeft vrienden nodig», zegt hij. Wie zal hij uitnodigen?","st.picnic.p1.c0":"🐰 Nodig konijn Rosie uit","st.picnic.p1.c1":"🦊 Nodig vos Felix uit",
"st.picnic.p2a.t":"Konijn Rosie komt huppelend aan. Drie appels, twee vrienden… «Eén voor jou, één voor mij», zegt Benny, «en één delen we in helften!»","st.picnic.p2a.c0":"🍎 Elk één — dat is eerlijk!","st.picnic.p2a.c1":"🍯 Bewaar er één voor het toetje",
"st.picnic.p2b.t":"Vos Felix heeft veel honger — hij wil TWEE appels! Benny denkt goed na. Dan glimlacht Felix: «Of… we kunnen samen bessen plukken en MEER hebben voor iedereen!»","st.picnic.p2b.c0":"🫐 Pluk samen bessen","st.picnic.p2b.c1":"🍎 Deel de appels toch",
"st.picnic.p3.t":"Het picknickkleed loopt vol: appels, bessen, honingboterhammen en twee heel blije vrienden. Samen tellen maakte alles lekkerder!","st.picnic.p3.m":"Tellen en delen maken goede vrienden — en geweldige picknicks.","st.picnic.p3.r":"Tel bij je volgende snack samen de borden en bekers: één voor elk persoon!",
"st.finn.title":"Finn het Visje","st.finn.desc":"Finn zoekt de glinsterende parel op de zeebodem.","st.finn.theme":"Waterwereld · tellen, vriendelijkheid",
"st.finn.f1.t":"Blub blub! Finn het visje hoort over een glinsterende parel verborgen in het diepe blauw. «Ik zal hem vinden!» Maar de zee is groot. Wie kan helpen?","st.finn.f1.c0":"🐙 Vraag aan Ollie de Octopus","st.finn.f1.c1":"🫧 Volg de zilveren bellen",
"st.finn.f2a.t":"Ollie de Octopus zwaait met alle ACHT armen. «Tel met mij mee — 1, 2, 3, 4, 5, 6, 7, 8! De parel woont voorbij het achtste koraal», wijst hij met zijn langste arm.","st.finn.f2a.c0":"🪸 Zwem voorbij acht koralen",
"st.finn.f2b.t":"De zilveren bellen leiden Finn naar beneden, beneden, beneden… naar een grote slapende schelp. Moet Finn haar zomaar openen?","st.finn.f2b.c0":"🚪 Klop eerst beleefd aan","st.finn.f2b.c1":"🎵 Zing om de schelp te wekken",
"st.finn.f3.t":"De schelp gaat open en — WAUW! De parel gloeit als een piepkleine maan. Finn deelt haar licht met de donkerste hoek van de zee, zodat niemand meer bang is.","st.finn.f3.m":"Beleefdheid en delen maken elke schat helderder.","st.finn.f3.r":"Tel de bellen bij je volgende bad — kun je er precies vijf laten knappen?",
},
ja: {
"st.picnic.title":"くまの ベニーの ピクニック","st.picnic.desc":"ベニーは りんごを みっつ つめる。だれと わけるのかな？","st.picnic.theme":"すうがくと やさしさ · かぞえる、わける",
"st.picnic.p1.t":"くまの ベニーは かごに つめる：りんご 1こ、2こ、3こ！「ピクニックには ともだちが いる」と いう。だれを さそう？","st.picnic.p1.c0":"🐰 うさぎの ロージーを さそう","st.picnic.p1.c1":"🦊 キツネの フェリックスを さそう",
"st.picnic.p2a.t":"うさぎの ロージーが はねて くる。りんご みっつ、ともだち ふたり…「きみに 1つ、ぼくに 1つ」と ベニー。「そして 1つは はんぶんこ！」","st.picnic.p2a.c0":"🍎 ひとり 1こずつ — せいこう！","st.picnic.p2a.c1":"🍯 1つは デザートに とっておく",
"st.picnic.p2b.t":"キツネの フェリックスは おなかが すいていて、りんご 2こが ほしい！ベニーは よく かんがえる。すると フェリックスが わらう。「それとも…いっしょに ベリーを つんで、みんなに もっと ふやそう！」","st.picnic.p2b.c0":"🫐 いっしょに ベリーを つむ","st.picnic.p2b.c1":"🍎 それでも りんごを わける",
"st.picnic.p3.t":"ピクニックの シートが いっぱいに：りんご、ベリー、はちみつサンド、そして とっても しあわせな ふたり。いっしょに かぞえたら もっと おいしく かんじた！","st.picnic.p3.m":"かぞえて わけることは よい ともだちを つくる — そして すばらしい ピクニックも。","st.picnic.p3.r":"つぎの おやつで、おさらと コップを いっしょに かぞえよう：ひとりに ひとつ！",
"st.finn.title":"さかなの フィン","st.finn.desc":"フィンは うみの そこの ひかる しんじゅを さがしている。","st.finn.theme":"みずの せかい · かぞえる、やさしさ",
"st.finn.f1.t":"ぷく ぷく！さかなの フィンは あおい ふかい ところに かくれた ひかる しんじゅの ことを きく。「みつけるよ！」でも うみは ひろい。だれが てつだえる？","st.finn.f1.c0":"🐙 タコの オリーに きく","st.finn.f1.c1":"🫧 ぎんの あわを おう",
"st.finn.f2a.t":"タコの オリーは うでを 8ほん ぜんぶ ふる。「いっしょに かぞえよう — 1、2、3、4、5、6、7、8！しんじゅは 8ばんめの サンゴの むこうに すんでいる」と いちばん ながい うでで さす。","st.finn.f2a.c0":"🪸 サンゴを みっつ とおって およぐ",
"st.finn.f2b.t":"ぎんの あわは フィンを したへ、したへ、したへ…ねむっている おおきな カイのところへ。フィンは そのまま あけていい？","st.finn.f2b.c0":"🚪 まず ていねいに ノック","st.finn.f2b.c1":"🎵 うたを うたって カイを おこす",
"st.finn.f3.t":"カイが ひらいて — わあ！しんじゅは ちいさな つきの ように ひかる。フィンは その ひかりを うみの いちばん くらい かどに わける。もう だれも こわがらない。","st.finn.f3.m":"ていねいと わけあうことは、どんな たからものも もっと かがやかせる。","st.finn.f3.r":"つぎの おふろで あわを かぞえよう — ちょうど みっつ われるかな？",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
