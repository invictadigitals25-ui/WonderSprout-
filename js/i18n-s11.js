/* WonderSprout story content — part 11: "Milo's Rainy Day" + "The Sleepy Moon" in id/sw/it/nl/ja. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
id: {
"st.milo.title":"Hari Hujan Milo","st.milo.desc":"Milo terbangun oleh hujan. Lompat genangan atau bikin benteng selimut?","st.milo.theme":"Bumi & Cuaca · hujan, pilihan, bermain hangat",
"st.milo.m1.t":"Tik… tik… tik. Milo terbangun oleh hujan di jendela. «Hari ini tidak ada matahari,» ia menghela napas. «Tapi hari hujan tetap bisa menakjubkan!»","st.milo.m1.c0":"🥾 Pakai sepatu bot dan keluar","st.milo.m1.c1":"🛋️ Bangun benteng selimut",
"st.milo.m2a.t":"Byur! Byur! Milo melompat ke genangan terbesar sepanjang masa. Tetes hujan menggelitik hidungnya dan seekor cacing kecil keluar menyapa.","st.milo.m2a.c0":"💦 Lompat ke SATU genangan lagi","st.milo.m2a.c1":"👂 Dengarkan hujan bernyanyi",
"st.milo.m2b.t":"Milo membangun benteng hangat dari selimut dan kursi. Di dalamnya hangat, lembut, dan rahasia — gua sempurna untuk hari hujan.","st.milo.m2b.c0":"🔦 Buat wayang bayangan","st.milo.m2b.c1":"🎵 Nyanyikan lagu hari hujan",
"st.milo.m3a.t":"Hujan berhenti dan… lihat! Pelangi raksasa membentang di langit. «Setelah hujan datang matahari,» Milo tersenyum, basah cipratan dan bahagia.","st.milo.m3a.m":"Hujan membantu bunga minum — dan setelah hujan, kadang ada pelangi!","st.milo.m3a.r":"Hari hujan berikutnya, dengarkan hujan bersama — lalu cari genangan (atau pelangi!).",
"st.milo.m3b.t":"Benteng selimut bercahaya dengan bayangan wayang dan lagu-lagu mengantuk. Di luar, hujan menyanyikan selamat malam. «Hari hujan adalah hari yang hangat,» bisik Milo.","st.milo.m3b.m":"Setiap jenis hari bisa menjadi hari yang menakjubkan.","st.milo.m3b.r":"Bangun benteng selimut bersama dan baca satu cerita di dalamnya dengan senter.",
"st.moon.title":"Bulan yang Mengantuk","st.moon.desc":"Bulan tidak bisa tidur. Bisa bantu?","st.moon.theme":"Luar Angkasa · waktu tidur, berhitung, rutinitas",
"st.moon.n1.t":"Jauh di atas awan, Bulan menguap lebar-lebar berwarna perak. Tapi bintang-bintang berkelap-kelip begitu terang — Bulan benar-benar tidak bisa tidur!","st.moon.n1.c0":"⭐ Hitung bintang bersama","st.moon.n1.c1":"🎵 Nyanyikan Bulan lagu pengantar tidur",
"st.moon.n2a.t":"«Satu… dua… tiga… empat… lima,» kalian menghitung. Bintang-bintang bersinar lebih lembut setiap angka, bangga karena dihitung. Mata Bulan makin berat.","st.moon.n2a.c0":"🌙 Ucapkan selamat malam pada setiap bintang",
"st.moon.n2b.t":"Kalian menyanyikan lagu pengantar tidur yang lembut dan lambat. Bintang-bintang memperlambat kelap-kelipnya mengikuti melodi, berayun seperti lampu tidur kecil. Bulan tersenyum mengantuk.","st.moon.n2b.c0":"☁️ Selimuti Bulan dengan awan",
"st.moon.n3.t":"Awan lembut naik seperti selimut. «Selamat malam, Bulan. Selamat malam, bintang. Selamat malam, kamu.» Semuanya tenang, hangat, dan gelap — seluruh dunia tertidur.","st.moon.n3.m":"Rutinitas yang lembut membantu semua orang — bahkan Bulan — untuk tidur.","st.moon.n3.r":"Malam ini, ucapkan selamat malam pada tiga hal: Bulan, mainan kesayangan, dan satu sama lain.",
},
sw: {
"st.milo.title":"Siku la Mvua la Milo","st.milo.desc":"Milo anaamka na mvua. Kuruka madimbwi au kujenga ngome ya mablanketi?","st.milo.theme":"Dunia na Hali ya Hewa · mvua, uchaguzi, kucheza kwa starehe",
"st.milo.m1.t":"Tone… tone… tone. Milo anaamka na mvua kwenye dirisha. «Hakuna jua leo,» analalamika. «Lakini siku za mvua zinaweza kuwa za kushangaza!»","st.milo.m1.c0":"🥾 Vaa viatu vya mvua na utoka nje","st.milo.m1.c1":"🛋️ Jenga ngome ya mablanketi",
"st.milo.m2a.t":"Bushi! Bushi! Milo anaruka kwenye dimbwi kubwa zaidi. Matone ya mvua yanamfanya pua yake kuvuliwa na mnyoo mdogo anatokea kusalimu.","st.milo.m2a.c0":"💦 Ruka kwenye dimbwi MOJA zaidi","st.milo.m2a.c1":"👂 Sikiliza mvua ikiimba",
"st.milo.m2b.t":"Milo anajenga ngome ya starehe kutoka mablanketi na viti. Ndani ni joto, laini na siri — pango kamilifu la siku ya mvua.","st.milo.m2b.c0":"🔦 Tengeneza sanamu za kivuli","st.milo.m2b.c1":"🎵 Imba wimbo wa siku ya mvua",
"st.milo.m3a.t":"Mvua inasimama na… tazama! Upinde wa mvua mkubwa unavuka anga. «Baada ya mvua kunakuwa jua,» Milo anatabasamu, amelowa na ana furaha.","st.milo.m3a.m":"Mvua husaidia maua kunywa — na baada ya mvua, wakati mwingine upinde wa mvua!","st.milo.m3a.r":"Siku ya mvua ijayo, sikilizeni mvua pamoja — kisha nendeni kutafuta madimbwi (au upinde wa mvua!).",
"st.milo.m3b.t":"Ngome ya mablanketi inang'aa na vivuli na nyimbo za usingizi. Nje, mvua inaimba usiku mwema. «Siku za mvua ni siku za starehe,» Milo anasema taratibu.","st.milo.m3b.m":"Kila aina ya siku inaweza kuwa siku ya kushangaza.","st.milo.m3b.r":"Jengeni ngome ya mablanketi pamoja na msome hadithi moja ndani yake kwa mwanga wa tochi.",
"st.moon.title":"Mwezi Mwenye Usingizi","st.moon.desc":"Mwezi hauwezi kulala. Unaweza kusaidia?","st.moon.theme":"Anga · wakati wa kulala, kuhesabu, ratiba",
"st.moon.n1.t":"Juu kabisa ya mawingu, Mwezi anapiga miayo mikubwa ya fedha. Lakini nyota zinang'aa sana — Mwezi hawezi kulala!","st.moon.n1.c0":"⭐ Hesabu nyota pamoja","st.moon.n1.c1":"🎵 Imbia Mwezi wimbo wa usingizi",
"st.moon.n2a.t":"«Moja… mbili… tatu… nne… tano,» mnahesabu. Nyota zinang'aa kwa upole zaidi kila nambari, zinajivunia kuhesabiwa. Macho ya Mwezi yanakuwa mazito.","st.moon.n2a.c0":"🌙 Sema usiku mwema kwa kila nyota",
"st.moon.n2b.t":"Mnaimba wimbo wa usingizi laini na wa polepole. Nyota zinapunguza kung'aa kwao kulingana na wimbo, zikizunguka kama taa ndogo za usiku. Mwezi anatabasamu kwa usingizi.","st.moon.n2b.c0":"☁️ Funika Mwezi kwa mawingu",
"st.moon.n3.t":"Wingu laini linasogea kama blanketi. «Usiku mwema, Mwezi. Usiku mwema, nyota. Usiku mwema, wewe.» Kila kitu ni tulivu, starehe na giza — dunia nzima imelala.","st.moon.n3.m":"Ratiba laini husaidia kila mtu — hata Mwezi — kulala.","st.moon.n3.r":"Leo usiku, sema usiku mwema kwa vitu vitatu: Mwezi, kifaa unachopenda, na kila mmoja.",
},
it: {
"st.milo.title":"La Giornata Piovosa di Milo","st.milo.desc":"Milo si sveglia con la pioggia. Saltare nelle pozzanghere o costruire un forte di coperte?","st.milo.theme":"Terra e Meteo · pioggia, scelte, gioco accogliente",
"st.milo.m1.t":"Goccia… goccia… goccia. Milo si sveglia con la pioggia sulla finestra. «Oggi niente sole», sospira. «Ma i giorni di pioggia possono comunque essere meravigliosi!»","st.milo.m1.c0":"🥾 Metti gli stivali e vai fuori","st.milo.m1.c1":"🛋️ Costruisci un forte di coperte",
"st.milo.m2a.t":"Splash! Splash! Milo salta nella pozzanghera più grande di sempre. Le gocce gli fanno il solletico al naso e un vermetto esce a salutare.","st.milo.m2a.c0":"💦 Salta in UN'ALTRA pozzanghera","st.milo.m2a.c1":"👂 Ascolta la pioggia cantare",
"st.milo.m2b.t":"Milo costruisce un forte accogliente con coperte e sedie. Dentro è caldo, morbido e segreto — la grotta perfetta per un giorno di pioggia.","st.milo.m2b.c0":"🔦 Fai le ombre cinesi","st.milo.m2b.c1":"🎵 Canta una canzone di pioggia",
"st.milo.m3a.t":"La pioggia si ferma e… guarda! Un arcobaleno gigante attraversa il cielo. «Dopo la pioggia arriva il sole», sorride Milo, schizzato di pozzanghere e felice.","st.milo.m3a.m":"La pioggia aiuta i fiori a bere — e dopo la pioggia, a volte un arcobaleno!","st.milo.m3a.r":"Il prossimo giorno di pioggia, ascoltate la pioggia insieme — poi andate a cercare pozzanghere (o un arcobaleno!).",
"st.milo.m3b.t":"Il forte di coperte brilla di ombre e canzoni assonnate. Fuori, la pioggia canta la buonanotte. «I giorni di pioggia sono giorni accoglienti», sussurra Milo.","st.milo.m3b.m":"Ogni tipo di giorno può essere un giorno meraviglioso.","st.milo.m3b.r":"Costruite insieme un forte di coperte e leggeteci dentro una storia con la torcia.",
"st.moon.title":"La Luna Sonnolenta","st.moon.desc":"La Luna non riesce ad addormentarsi. Puoi aiutare?","st.moon.theme":"Spazio · nanna, contare, routine",
"st.moon.n1.t":"Lassù sopra le nuvole, la Luna sbadiglia un grande sbadiglio d'argento. Ma le stelle brillano così forte — la Luna proprio non riesce a dormire!","st.moon.n1.c0":"⭐ Contate le stelle insieme","st.moon.n1.c1":"🎵 Cantate una ninna nanna alla Luna",
"st.moon.n2a.t":"«Una… due… tre… quattro… cinque», contate. Le stelle brillano più dolcemente a ogni numero, fiere di essere contate. Gli occhi della Luna si fanno pesanti.","st.moon.n2a.c0":"🌙 Dite buonanotte a ogni stella",
"st.moon.n2b.t":"Cantate una ninna nanna dolce e lenta. Le stelle rallentano il loro brillare seguendo la melodia, dondolando come piccole lucine notturne. La Luna sorride assonnata.","st.moon.n2b.c0":"☁️ Rimboccate la Luna con le nuvole",
"st.moon.n3.t":"Una nuvola soffice sale come una coperta. «Buonanotte, Luna. Buonanotte, stelle. Buonanotte, tu». Tutto è tranquillo, accogliente e buio — il mondo intero dorme.","st.moon.n3.m":"Una routine dolce aiuta tutti — anche la Luna — ad addormentarsi.","st.moon.n3.r":"Stasera, dite buonanotte a tre cose: alla Luna, a un giocattolo preferito, e l'uno all'altro.",
},
nl: {
"st.milo.title":"Milo's Regenachtige Dag","st.milo.desc":"Milo wordt wakker met regen. Plassenpringen of een dekenfort bouwen?","st.milo.theme":"Aarde & Weer · regen, keuzes, knus spel",
"st.milo.m1.t":"Druppel… druppel… druppel. Milo wordt wakker met regen op het raam. «Geen zon vandaag», zucht hij. «Maar regenachtige dagen kunnen ook geweldig zijn!»","st.milo.m1.c0":"🥾 Doe laarzen aan en ga naar buiten","st.milo.m1.c1":"🛋️ Bouw een dekenfort",
"st.milo.m2a.t":"Plons! Plons! Milo springt in de grootste plas ooit. Regendruppels kriebelen zijn neus en een wormpje komt gedag zeggen.","st.milo.m2a.c0":"💦 Spring in NOG een plas","st.milo.m2a.c1":"👂 Luister naar de regen die zingt",
"st.milo.m2b.t":"Milo bouwt een knus fort van dekens en stoelen. Binnen is het warm, zacht en geheim — de perfecte regenachtige-daggrot.","st.milo.m2b.c0":"🔦 Maak schimspelpoppen","st.milo.m2b.c1":"🎵 Zing een regenlied",
"st.milo.m3a.t":"De regen stopt en… kijk! Een reuzenregenboog spant over de hemel. «Na regen komt zonneschijn», glimlacht Milo, plasgespetterd en blij.","st.milo.m3a.m":"Regen helpt de bloemen drinken — en na regen, soms een regenboog!","st.milo.m3a.r":"Luister de volgende regenachtige dag samen naar de regen — en ga dan plassen zoeken (of een regenboog!).",
"st.milo.m3b.t":"Het dekenfort gloeit van schimspelpoppen en slaperige liedjes. Buiten zingt de regen welterusten. «Regenachtige dagen zijn knusse dagen», fluistert Milo.","st.milo.m3b.m":"Elke soort dag kan een geweldige dag zijn.","st.milo.m3b.r":"Bouw samen een dekenfort en lees er met zaklamplicht één verhaal in voor.",
"st.moon.title":"De Slaperige Maan","st.moon.desc":"De Maan kan niet in slaap vallen. Kun jij helpen?","st.moon.theme":"Ruimte · bedtijd, tellen, routines",
"st.moon.n1.t":"Hoog boven de wolken gaapt de Maan een grote zilveren geeuw. Maar de sterren fonkelen zo helder — de Maan kan gewoon niet slapen!","st.moon.n1.c0":"⭐ Tel de sterren samen","st.moon.n1.c1":"🎵 Zing de Maan een slaapliedje",
"st.moon.n2a.t":"«Eén… twee… drie… vier… vijf», tellen jullie. De sterren glimmen zachter bij elk getal, trots om geteld te worden. De ogen van de Maan worden zwaar.","st.moon.n2a.c0":"🌙 Zeg elke ster welterusten",
"st.moon.n2b.t":"Jullie zingen een zacht, langzaam slaapliedje. De sterren vertragen hun fonkelen op de melodie, wiegend als kleine nachtlampjes. De Maan glimlacht slaperig.","st.moon.n2b.c0":"☁️ Dek de Maan toe met wolken",
"st.moon.n3.t":"Een pluizige wolk schuift op als een deken. «Welterusten, Maan. Welterusten, sterren. Welterusten, jij.» Alles is stil, knus en donker — de hele wereld slaapt.","st.moon.n3.m":"Een zachte routine helpt iedereen — zelfs de Maan — in slaap te vallen.","st.moon.n3.r":"Zeg vanavond welterusten tegen drie dingen: de Maan, een lievelingsspeeltje, en elkaar.",
},
ja: {
"st.milo.title":"マイロの あめのひ","st.milo.desc":"マイロは あめで めが さめる。みずたまりで はねる？それとも かんたを つくる？","st.milo.theme":"ちきゅうと てんき · あめ、せんたく、あたたかい あそび",
"st.milo.m1.t":"ぽつん… ぽつん… ぽつん。マイロは まどの あめで めが さめる。「きょうは おひさま いないね」と ためいき。「でも あめのひも すてきに なるよ！」","st.milo.m1.c0":"🥾 ながぐつを はいて そとへ","st.milo.m1.c1":"🛋️ モーフで おしろを つくる",
"st.milo.m2a.t":"ばしゃ！ばしゃ！マイロは いちばん おおきな みずたまりに とびこむ。あめのしずくが はなを くすぐって、ちいさな みみずが こんにちはと でてくる。","st.milo.m2a.c0":"💦 もう いっこ みずたまりに とぶ","st.milo.m2a.c1":"👂 あめの うたを きく",
"st.milo.m2b.t":"マイロは モーフと いすで あたたかい おしろを つくる。なかは あたたかくて、やわらかくて、ひみつ — あめのひに ぴったりの どうくつ。","st.milo.m2b.c0":"🔦 かげえを つくる","st.milo.m2b.c1":"🎵 あめのひの うたを うたう",
"st.milo.m3a.t":"あめが やんで… みて！おおきな にじが そらに かかる。「あめのあとは おひさま」と マイロは わらう。みずしぶきで びしょぬれでも うれしい。","st.milo.m3a.m":"あめは おはなに みずを あげる — そして あめのあとは、ときどき にじが でる！","st.milo.m3a.r":"つぎの あめのひは、いっしょに あめの おとを きいて — それから みずたまり（それとも にじ）を さがしに いこう！",
"st.milo.m3b.t":"モーフの おしろは かげえと ねむたい うたで ひかる。そとでは あめが おやすみを うたう。「あめのひは あたたかい ひ」と マイロは ささやく。","st.milo.m3b.m":"どんな ひでも、すてきな ひに なるよ。","st.milo.m3b.r":"いっしょに モーフの おしろを つくって、なかで でんちゅうの ひかりで おはなしを 1つ よもう。",
"st.moon.title":"ねむたい おつきさま","st.moon.desc":"おつきさまが ねむれない。てつだえるかな？","st.moon.theme":"うちゅう · ねるじかん、かぞえる、まいにちの くりかえし",
"st.moon.n1.t":"くもの はるか うえで、おつきさまが おおきな ぎんの あくび。でも ほしが あまりに あかるく きらきら — おつきさまは ぜんぜん ねむれない！","st.moon.n1.c0":"⭐ ほしを いっしょに かぞえる","st.moon.n1.c1":"🎵 おつきさまに こもりうたを うたう",
"st.moon.n2a.t":"「ひとつ… ふたつ… みっつ… よっつ… いつつ」と かぞえる。かずごとに ほしは やさしく ひかる、かぞえられて ほこらしい。おつきさまの めが おもくなる。","st.moon.n2a.c0":"🌙 ほしに ひとつずつ おやすみを いう",
"st.moon.n2b.t":"やさしい ゆっくりの こもりうたを うたう。ほしは きょくに あわせて きらめきを ゆるやかに、ちいさな ナイトランプのよう。おつきさまは ねむそうに わらう。","st.moon.n2b.c0":"☁️ くもで おつきさまを おおってあげる",
"st.moon.n3.t":"ふわふわの くもが モーフのように せまる。「おやすみ、おつきさま。おやすみ、ほしたち。おやすみ、きみ」すべて しずかで、あたたかくて、くらい — せかいじゅうが ねている。","st.moon.n3.m":"やさしい まいにちの くりかえしは だれでも — おつきさまでも — ねむらせてくれる。","st.moon.n3.r":"こんやは みっつに おやすみを いおう：おつきさま、すきな おもちゃ、そして おたがい。",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
