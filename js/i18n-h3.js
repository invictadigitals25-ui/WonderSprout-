/* ============================================================
   WonderSprout — Wonder Camera object cards
   (id/sw/it/nl/ja)
   keys: cam.aiLooking, cam.tapAnother,
         cam.sees.<id>, cam.rw.<id>, cam.act.<id>.0..2
   ids: apple ball leaf cup teddy spoon banana car book socks drum
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    id: {
      "cam.aiLooking": "🤖 AI WonderSprout sedang melihat…",
      "cam.tapAnother": "👆 Ketuk benda lain untuk memindainya",

      "cam.sees.apple": "apel merah yang mengkilap",
      "cam.rw.apple": "Potong apel jadi dua bersama — ada bintang tersembunyi di dalamnya!",
      "cam.act.apple.0": "Warna: “Bisakah kamu menemukan hal lain yang MERAH?”",
      "cam.act.apple.1": "Matematika: hitung apel di meja — 1, 2, 3!",
      "cam.act.apple.2": "Kehidupan: “Apel tumbuh di pohon, dari bunga-bunga kecil.”",

      "cam.sees.ball": "bola bundar yang memantul",
      "cam.rw.ball": "Coba bola di Taman Fisika, lalu pantulkan bola ASLI dan bandingkan!",
      "cam.act.ball.0": "Fisika: jatuhkan dari lututmu, lalu dari tempat tinggi. Pantulan mana yang lebih besar?",
      "cam.act.ball.1": "Bentuk: gulingkan melingkar. Bola itu bundar — mereka menggelinding!",
      "cam.act.ball.2": "Permainan: gulingkan satu sama lain sambil bilang “gulirkan… tangkap!”",

      "cam.sees.leaf": "daun hijau",
      "cam.rw.leaf": "Kumpulkan 3 daun berbeda dan tekan di dalam buku tebal.",
      "cam.act.leaf.0": "Kehidupan: “Daun meminum sinar matahari dan membantu pohon bernapas.”",
      "cam.act.leaf.1": "Warna: temukan daun hijau, daun kuning, daun cokelat yang renyah.",
      "cam.act.leaf.2": "Cuaca: tiup daunnya — angin membuat daun menari!",

      "cam.sees.cup": "gelas minum",
      "cam.rw.cup": "Saat mandi, isi dan tuang gelas 5 kali sambil berhitung.",
      "cam.act.cup.0": "Air: apakah gelas ini mengapung atau tenggelam? Tebak dulu, lalu uji dengan aman!",
      "cam.act.cup.1": "Matematika: tuang air masuk dan keluar — “penuh” dan “kosong”.",
      "cam.act.cup.2": "Suara: ketuk pelan dengan sendok. Ting!",

      "cam.sees.teddy": "boneka beruang yang empuk",
      "cam.rw.teddy": "Beri Teddy pelukan selamat malam dan ucapkan tiga kata baik.",
      "cam.act.teddy.0": "Perasaan: “Bagaimana perasaan Teddy hari ini? Senang? Mengantuk?”",
      "cam.act.teddy.1": "Berpura-pura: adakan pesta teh dan berbagi dengan Teddy.",
      "cam.act.teddy.2": "Cerita: biarkan Teddy memilih cerita WonderSprout mana yang dibaca!",

      "cam.sees.spoon": "sendok logam yang mengkilap",
      "cam.rw.spoon": "Buat drum sendok yang lembut di 3 panci atau mangkuk berbeda.",
      "cam.act.spoon.0": "Suara: ketuk sendok pelan — panci tinggi, panci rendah. Suara berbeda!",
      "cam.act.spoon.1": "Mengapung/tenggelam: sendok logam biasanya tenggelam. Tebak dulu!",
      "cam.act.spoon.2": "Cahaya: lihat pantulan konyolmu di bagian belakang yang mengkilap!",

      "cam.sees.banana": "pisang kuning",
      "cam.rw.banana": "Kupas pisang sungguhan bersama — siapa dapat bagian mana? Berbagi juga matematika!",
      "cam.act.banana.0": "Warna: temukan 3 benda kuning lagi — matahari, bebek, lemon!",
      "cam.act.banana.1": "Matematika: kupas jadi potongan — berapa potong? Hitung!",
      "cam.act.banana.2": "Indra: cium, raba, cicipi. Manis dan lembut!",

      "cam.sees.car": "mobil mainan kecil",
      "cam.rw.car": "Lombakan dua mobil menuruni ramp bantal. Mana yang lebih cepat? Tebak dulu!",
      "cam.act.car.0": "Fisika: buat ramp dari buku — ramp lebih curam, mobil lebih cepat!",
      "cam.act.car.1": "Matematika: hitung rodanya. Berapa roda punya 2 mobil?",
      "cam.act.car.2": "Permainan: lampu merah, lampu hijau! Dorong dan BERHENTI sesuai perintah.",

      "cam.sees.book": "buku cerita",
      "cam.rw.book": "Baca satu buku hari ini — lalu biarkan anakmu “membacakannya” untukmu.",
      "cam.act.book.0": "Bahasa: sebutkan 3 hal di sampul sebelum membuka.",
      "cam.act.book.1": "Cerita: biarkan anakmu membalik halaman — dia bosnya!",
      "cam.act.book.2": "Peragakan: jadilah tokohnya dengan suara besar dan lucu.",

      "cam.sees.socks": "sepasang kaus kaki",
      "cam.rw.socks": "Saat mencuci berikutnya, anakmu jadi Pencocok Kaus Kaki Resmi.",
      "cam.act.socks.0": "Logika: mencocokkan cucian! Temukan pasangan lewat warna dan pola.",
      "cam.act.socks.1": "Matematika: hitung pasangannya. 2 kaus kaki = 1 pasang!",
      "cam.act.socks.2": "Indra: lembut, elastis, hangat — boneka kaus kaki berikutnya?",

      "cam.sees.drum": "sebuah drum",
      "cam.rw.drum": "Buat drum dari panci dan sendok kayu — berbaris dan mainkan!",
      "cam.act.drum.0": "Suara: pukulan keras dan pukulan berbisik. Rasakan bedanya!",
      "cam.act.drum.1": "Irama: tiru iramaku — bum bum tepuk!",
      "cam.act.drum.2": "Musik: berbaris keliling ruangan mengikuti irama drummu sendiri."
    },

    sw: {
      "cam.aiLooking": "🤖 AI ya WonderSprout inaangalia…",
      "cam.tapAnother": "👆 Gonga kitu kingine ili kukichanganua",

      "cam.sees.apple": "tufaha nyekundu inayong'aa",
      "cam.rw.apple": "Kata tufaha katikati pamoja — kuna nyota iliyofichwa ndani!",
      "cam.act.apple.0": "Rangi: “Unaweza kupata kitu kingine ambacho ni NYEKUNDU?”",
      "cam.act.apple.1": "Hisabati: hesabu matufaha mezani — 1, 2, 3!",
      "cam.act.apple.2": "Maisha: “Matufaha hukua kwenye miti, kutoka maua madogo.”",

      "cam.sees.ball": "mpira wa duara unaoruka",
      "cam.rw.ball": "Jaribu mpira katika Uwanja wa Fizikia, kisha rurusha mpira HALISI na ulinganishe!",
      "cam.act.ball.0": "Fizikia: iidondoshe kutoka gotoni, kisha kutoka juu. Kuruka gani ni kubwa zaidi?",
      "cam.act.ball.1": "Umbo: ipindishe kwa duara. Mipira ni ya duara — inapinduka!",
      "cam.act.ball.2": "Mchezo: ipindishieni kila mmoja na msemee “pindisha… shika!”",

      "cam.sees.leaf": "jani la kijani",
      "cam.rw.leaf": "Kusanya majani 3 tofauti na uyabonyeze katika kitabu kizito.",
      "cam.act.leaf.0": "Maisha: “Majani hunywa mwanga wa jua na husaidia mti kupumua.”",
      "cam.act.leaf.1": "Rangi: pata jani la kijani, jani la njano, jani la kahawia lililokauka.",
      "cam.act.leaf.2": "Hali ya hewa: puliza jani — upepo hufanya majani kucheza!",

      "cam.sees.cup": "kikombe cha kunywea",
      "cam.rw.cup": "Wakati wa kuoga, jaza na mimina kikombe mara 5 ukihesabu.",
      "cam.act.cup.0": "Maji: je kikombe hiki kitaelea au kuzama? Tabiri, kisha jaribu kwa usalama!",
      "cam.act.cup.1": "Hisabati: mimina maji ndani na nje — “kimejaa” na “ki wazi”.",
      "cam.act.cup.2": "Sauti: gonga kwa upole kwa kijiko. Ting!",

      "cam.sees.teddy": "dubu laini wa kumbatia",
      "cam.rw.teddy": "Mpe Teddy kumbatio la usiku mwema na useme maneno matatu mema.",
      "cam.act.teddy.0": "Hisia: “Teddy anajisikiaje leo? Furaha? Mwenye usingizi?”",
      "cam.act.teddy.1": "Kufanya dhana: fanyeni chama cha chai na mshirikishe Teddy.",
      "cam.act.teddy.2": "Hadithi: mwache Teddy achague hadithi ipi ya WonderSprout ya kusoma!",

      "cam.sees.spoon": "kijiko cha chuma kinachong'aa",
      "cam.rw.spoon": "Tengeneza ngoma laini ya kijiko kwenye vyungu au bakuli 3 tofauti.",
      "cam.act.spoon.0": "Sauti: gonga vijiko kwa upole — chungu kirefu, chungu kifupi. Sauti tofauti!",
      "cam.act.spoon.1": "Kuelea/kuzama: vijiko vya chuma huzama kawaida. Tabiri kwanza!",
      "cam.act.spoon.2": "Mwanga: tazama kivuli chako cha kichekesho kwenye nyuma inayong'aa!",

      "cam.sees.banana": "ndizi ya njano",
      "cam.rw.banana": "Menya ndizi halisi pamoja — nani anapata nusu ipi? Kushiriki ni hisabati pia!",
      "cam.act.banana.0": "Rangi: pata vitu vingine 3 vya njano — jua, bata, limao!",
      "cam.act.banana.1": "Hisabati: imenye vipande — vipande vingapi? Hesabu!",
      "cam.act.banana.2": "Hisi: inuke, iguse, ionje. Tamu na laini!",

      "cam.sees.car": "gari dogo la kuchezea",
      "cam.rw.car": "Fanya mbio za magari mawili kwenye mteremko wa matakia. Gani ni la haraka? Tabiri kwanza!",
      "cam.act.car.0": "Fizikia: jengeni mteremko kutoka kitabu — mteremko mwinuko zaidi, gari la haraka zaidi!",
      "cam.act.car.1": "Hisabati: hesabu magurudumu. Magari 2 yana magurudumu mangapi?",
      "cam.act.car.2": "Mchezo: taa nyekundu, taa ya kijani! Sukuma na SIMAMA kwa amri.",

      "cam.sees.book": "kitabu cha hadithi",
      "cam.rw.book": "Soma kitabu kimoja leo — kisha mwache mtoto wako “akisome” kwako.",
      "cam.act.book.0": "Lugha: taja vitu 3 kwenye jalada kabla ya kufungua.",
      "cam.act.book.1": "Hadithi: mwache mtoto wako apindishe kurasa — ndiye bosi!",
      "cam.act.book.2": "Igizeni: kuweni wahusika kwa sauti kubwa za kichekesho.",

      "cam.sees.socks": "jozi ya soksi",
      "cam.rw.socks": "Kwenye nguo ijayo, mtoto wako anakuwa Mlinganishaji Rasmi wa Soksi.",
      "cam.act.socks.0": "Mantiki: kulinganisha nguo! Tafuta jozi kwa rangi na muundo.",
      "cam.act.socks.1": "Hisabati: hesabu jozi. Soksi 2 = jozi 1!",
      "cam.act.socks.2": "Hisi: laini, zinazonyooshwa, joto — puppet za soksi zinazofuata?",

      "cam.sees.drum": "ngoma",
      "cam.rw.drum": "Tengeneza ngoma kutoka chungu na kijiko cha mbao — tembea na ucheze!",
      "cam.act.drum.0": "Sauti: mapigo makubwa na mapigo ya kunong'ona. Hisi tofauti!",
      "cam.act.drum.1": "Mdundo: nakili mdundo wangu — bum bum kofi!",
      "cam.act.drum.2": "Muziki: tembea chumbani kwa mdundo wa ngoma yako mwenyewe."
    },

    it: {
      "cam.aiLooking": "🤖 L'IA di WonderSprout sta guardando…",
      "cam.tapAnother": "👆 Tocca un altro oggetto per scansionarlo",

      "cam.sees.apple": "una mela rossa e lucida",
      "cam.rw.apple": "Tagliate la mela a metà insieme — dentro c'è una stella nascosta!",
      "cam.act.apple.0": "Colore: “Riesci a trovare qualcos'altro che sia ROSSO?”",
      "cam.act.apple.1": "Matematica: conta le mele sul tavolo — 1, 2, 3!",
      "cam.act.apple.2": "Vita: “Le mele crescono sugli alberi, da fiorellini minuscoli.”",

      "cam.sees.ball": "una palla rotonda e rimbalzante",
      "cam.rw.ball": "Prova la palla nel Parco della fisica, poi fai rimbalzare la palla VERA e confronta!",
      "cam.act.ball.0": "Fisica: falla cadere dal ginocchio, poi dall'alto. Quale rimbalzo è più grande?",
      "cam.act.ball.1": "Forme: falla rotolare in cerchio. Le palle sono rotonde — rotolano!",
      "cam.act.ball.2": "Gioco: fatevela rotolare a vicenda dicendo “rotola… prendi!”",

      "cam.sees.leaf": "una foglia verde",
      "cam.rw.leaf": "Raccogli 3 foglie diverse e pressale in un libro pesante.",
      "cam.act.leaf.0": "Vita: “Le foglie bevono la luce del sole e aiutano l'albero a respirare.”",
      "cam.act.leaf.1": "Colore: trova una foglia verde, una gialla e una marrone croccante.",
      "cam.act.leaf.2": "Meteo: soffia sulla foglia — il vento fa danzare le foglie!",

      "cam.sees.cup": "un bicchiere per bere",
      "cam.rw.cup": "Al bagnetto, riempi e versa il bicchiere 5 volte contando.",
      "cam.act.cup.0": "Acqua: questo bicchiere galleggia o affonda? Predici, poi prova in sicurezza!",
      "cam.act.cup.1": "Matematica: versa l'acqua dentro e fuori — “pieno” e “vuoto”.",
      "cam.act.cup.2": "Suono: toccalo piano con un cucchiaio. Ding!",

      "cam.sees.teddy": "un orsetto di peluche da abbracciare",
      "cam.rw.teddy": "Dai a Teddy un abbraccio della buonanotte e di' tre parole gentili.",
      "cam.act.teddy.0": "Sentimenti: “Come si sente Teddy oggi? Felice? Assonnato?”",
      "cam.act.teddy.1": "Far finta: organizzate un tè e condividete con Teddy.",
      "cam.act.teddy.2": "Storia: lascia che Teddy scelga quale storia di WonderSprout leggere!",

      "cam.sees.spoon": "un cucchiaio di metallo lucido",
      "cam.rw.spoon": "Fate un dolce tamburo di cucchiaio su 3 pentole o ciotole diverse.",
      "cam.act.spoon.0": "Suono: batti i cucchiai piano — pentola alta, pentola bassa. Suoni diversi!",
      "cam.act.spoon.1": "Galleggia/affonda: i cucchiai di metallo di solito affondano. Prima predici!",
      "cam.act.spoon.2": "Luce: guarda il tuo buffo riflesso nel retro lucido!",

      "cam.sees.banana": "una banana gialla",
      "cam.rw.banana": "Sbucciate insieme una banana vera — chi prende quale metà? Condividere è anche matematica!",
      "cam.act.banana.0": "Colore: trova altre 3 cose gialle — sole, papera, limone!",
      "cam.act.banana.1": "Matematica: sbucciala a pezzi — quanti pezzi? Contali!",
      "cam.act.banana.2": "Sensi: annusala, toccala, assaggiala. Dolce e morbida!",

      "cam.sees.car": "una piccola macchinina",
      "cam.rw.car": "Fate correre due macchinine giù da una rampa di cuscini. Quale è più veloce? Prima prevedi!",
      "cam.act.car.0": "Fisica: costruite una rampa con un libro — rampa più ripida, macchina più veloce!",
      "cam.act.car.1": "Matematica: contate le ruote. Quante ruote hanno 2 macchinine?",
      "cam.act.car.2": "Gioco: luce rossa, luce verde! Spingete e FERMATEVI al comando.",

      "cam.sees.book": "un libro di storie",
      "cam.rw.book": "Leggi un libro oggi — poi lascia che il tuo bambino te lo “legga” a sua volta.",
      "cam.act.book.0": "Linguaggio: nominate 3 cose sulla copertina prima di aprire.",
      "cam.act.book.1": "Storia: lascia che il tuo bambino giri le pagine — comanda lui!",
      "cam.act.book.2": "Recitatela: siate i personaggi con voci grandi e buffe.",

      "cam.sees.socks": "un paio di calzini",
      "cam.rw.socks": "Al prossimo bucato, il tuo bambino diventa l'Abbinatore Ufficiale di Calzini.",
      "cam.act.socks.0": "Logica: abbinare il bucato! Trovate le coppie per colore e fantasia.",
      "cam.act.socks.1": "Matematica: contate le paia. 2 calzini = 1 paio!",
      "cam.act.socks.2": "Sensi: morbidi, elastici, caldi — poi burattini di calzino?",

      "cam.sees.drum": "un tamburo",
      "cam.rw.drum": "Costruite un tamburo con una pentola e un cucchiaio di legno — marciate e suonate!",
      "cam.act.drum.0": "Suono: colpi forti e colpi sussurrati. Sentite la differenza!",
      "cam.act.drum.1": "Ritmo: copia il mio ritmo — bum bum clap!",
      "cam.act.drum.2": "Musica: marciate per la stanza al ritmo del vostro tamburo."
    },

    nl: {
      "cam.aiLooking": "🤖 De WonderSprout-AI kijkt…",
      "cam.tapAnother": "👆 Tik een ander voorwerp aan om het te scannen",

      "cam.sees.apple": "een glanzende rode appel",
      "cam.rw.apple": "Snijd de appel samen doormidden — er zit een ster verstopt binnenin!",
      "cam.act.apple.0": "Kleur: „Kun je nog iets anders vinden dat ROOD is?”",
      "cam.act.apple.1": "Rekenen: tel de appels op tafel — 1, 2, 3!",
      "cam.act.apple.2": "Leven: „Appels groeien aan bomen, uit piepkleine bloemen.”",

      "cam.sees.ball": "een ronde, stuiterende bal",
      "cam.rw.ball": "Probeer de bal in de Natuurkunde-speeltuin, laat daarna de ECHTE bal stuiteren en vergelijk!",
      "cam.act.ball.0": "Natuurkunde: laat hem van je knie vallen, en dan van hoog. Welke stuit is groter?",
      "cam.act.ball.1": "Vormen: rol hem in een cirkel. Ballen zijn rond — ze rollen!",
      "cam.act.ball.2": "Spel: rol hem naar elkaar en zeg „rollen… vangen!”",

      "cam.sees.leaf": "een groen blad",
      "cam.rw.leaf": "Verzamel 3 verschillende bladeren en pers ze in een zwaar boek.",
      "cam.act.leaf.0": "Leven: „Bladeren drinken zonlicht en helpen de boom ademen.”",
      "cam.act.leaf.1": "Kleur: vind een groen blad, een geel blad en een knisperend bruin blad.",
      "cam.act.leaf.2": "Weer: blaas op het blad — wind laat bladeren dansen!",

      "cam.sees.cup": "een drinkbeker",
      "cam.rw.cup": "Vul en leeg de beker in bad 5 keer terwijl je telt.",
      "cam.act.cup.0": "Water: drijft of zinkt deze beker? Voorspel en test dan veilig!",
      "cam.act.cup.1": "Rekenen: giet water erin en eruit — „vol” en „leeg”.",
      "cam.act.cup.2": "Geluid: tik er zachtjes op met een lepel. Ting!",

      "cam.sees.teddy": "een knuffelige teddybeer",
      "cam.rw.teddy": "Geef Teddy een welterustenknuffel en zeg drie lieve woorden.",
      "cam.act.teddy.0": "Gevoelens: „Hoe voelt Teddy zich vandaag? Blij? Slaperig?”",
      "cam.act.teddy.1": "Doen alsof: houd een theefeestje en deel met Teddy.",
      "cam.act.teddy.2": "Verhaal: laat Teddy kiezen welk WonderSprout-verhaal jullie lezen!",

      "cam.sees.spoon": "een glanzende metalen lepel",
      "cam.rw.spoon": "Maak een zachte lepeltrommel op 3 verschillende pannen of kommen.",
      "cam.act.spoon.0": "Geluid: tik zachtjes op lepels — hoge pan, lage pan. Verschillende geluiden!",
      "cam.act.spoon.1": "Drijven/zinken: metalen lepels zinken meestal. Voorspel eerst!",
      "cam.act.spoon.2": "Licht: bekijk je gekke spiegelbeeld in de glanzende achterkant!",

      "cam.sees.banana": "een gele banaan",
      "cam.rw.banana": "Pel samen een echte banaan — wie krijgt welke helft? Delen is ook rekenen!",
      "cam.act.banana.0": "Kleur: vind nog 3 gele dingen — zon, eend, citroen!",
      "cam.act.banana.1": "Rekenen: pel hem in stukken — hoeveel stukken? Tel ze!",
      "cam.act.banana.2": "Zintuigen: ruik, voel, proef. Zoet en zacht!",

      "cam.sees.car": "een kleine speelgoedauto",
      "cam.rw.car": "Laat twee auto's van een kussenhelling racen. Welke is sneller? Voorspel eerst!",
      "cam.act.car.0": "Natuurkunde: bouw een helling van een boek — steilere helling, snellere auto!",
      "cam.act.car.1": "Rekenen: tel de wielen. Hoeveel wielen hebben 2 auto's?",
      "cam.act.car.2": "Spel: rood licht, groen licht! Duw en STOP op commando.",

      "cam.sees.book": "een verhalenboek",
      "cam.rw.book": "Lees vandaag één boek — en laat je kind het daarna aan jou „voorlezen”.",
      "cam.act.book.0": "Taal: noem 3 dingen op de kaft voordat je opent.",
      "cam.act.book.1": "Verhaal: laat je kind de bladzijden omslaan — hij is de baas!",
      "cam.act.book.2": "Speel het na: wees de personages met grote, gekke stemmen.",

      "cam.sees.socks": "een paar sokken",
      "cam.rw.socks": "Bij de volgende wasbeurt wordt je kind de Officiële Sokkenmatchmaker.",
      "cam.act.socks.0": "Logica: was sorteren! Vind paren op kleur en patroon.",
      "cam.act.socks.1": "Rekenen: tel de paren. 2 sokken = 1 paar!",
      "cam.act.socks.2": "Zintuigen: zacht, rekbaar, warm — daarna sokkenpoppen?",

      "cam.sees.drum": "een trommel",
      "cam.rw.drum": "Maak een trommel van een pan en een houten lepel — marcheer en speel!",
      "cam.act.drum.0": "Geluid: harde slagen en fluisterslagen. Voel het verschil!",
      "cam.act.drum.1": "Ritme: kopieer mijn ritme — boem boem klap!",
      "cam.act.drum.2": "Muziek: marcheer door de kamer op je eigen trommelritme."
    },

    ja: {
      "cam.aiLooking": "🤖 WonderSprout AI が みています…",
      "cam.tapAnother": "👆 ほかの ものを タップして しらべてね",

      "cam.sees.apple": "ぴかぴかの あかい りんご",
      "cam.rw.apple": "りんごを いっしょに はんぶんに きってみよう — なかに ほしが かくれているよ！",
      "cam.act.apple.0": "いろ：「ほかに あかい ものを みつけられるかな？」",
      "cam.act.apple.1": "かず：テーブルの りんごを かぞえよう — 1、2、3！",
      "cam.act.apple.2": "せいかつ：「りんごは きに なるよ。ちいさな はなから できるんだ。」",

      "cam.sees.ball": "まるくて はねる ボール",
      "cam.rw.ball": "ぶつり あそびばで ボールを ためして、それから ほんものの ボールを はねさせて くらべてみよう！",
      "cam.act.ball.0": "ぶつり：ひざの ところから おとして、それから たかい ところから。どっちが おおきく はねる？",
      "cam.act.ball.1": "かたち：まるく ころがしてみよう。ボールは まるいから ころがるんだ！",
      "cam.act.ball.2": "あそび：たがいに ころがして 「ころころ… キャッチ！」と いおう。",

      "cam.sees.leaf": "みどりの はっぱ",
      "cam.rw.leaf": "ちがう はっぱを 3まい あつめて、おもい ほんに はさんで おそう。",
      "cam.act.leaf.0": "せいかつ：「はっぱは おひさまを のんで、きが いきするのを たすけるんだ。」",
      "cam.act.leaf.1": "いろ：みどりの はっぱ、きいろの はっぱ、かしゃっと した ちゃいろの はっぱを みつけよう。",
      "cam.act.leaf.2": "てんき：はっぱに ふーっと ふいてみて — かぜが はっぱを おどらせるよ！",

      "cam.sees.cup": "のみもの コップ",
      "cam.rw.cup": "おふろの ときに、かぞえながら コップに みずを いれて そそぐのを 5かい。",
      "cam.act.cup.0": "みず：この コップは うかぶかな、しずむかな？さきに あててから、あんぜんに ためそう！",
      "cam.act.cup.1": "かず：みずを いれたり だしたり — 「いっぱい」と「からっぽ」。",
      "cam.act.cup.2": "おと：スプーンで そっと たたいてみよう。チーン！",

      "cam.sees.teddy": "ふわふわの テディベア",
      "cam.rw.teddy": "テディに おやすみの ハグをして、やさしい ことばを みっつ いおう。",
      "cam.act.teddy.0": "きもち：「テディは きょう どんな きぶん？うれしい？ねむい？」",
      "cam.act.teddy.1": "ごっこ：おちゃかいを ひらいて、テディと いっしょに わけっこ。",
      "cam.act.teddy.2": "おはなし：テディに WonderSprout の どの おはなしを よむか えらんでもらおう！",

      "cam.sees.spoon": "ぴかぴかの きんぞく スプーン",
      "cam.rw.spoon": "ちがう なべや ボウルを 3つ つかって、やさしい スプーン ドラムを つくろう。",
      "cam.act.spoon.0": "おと：スプーンを そっと たたこう — たかい なべ、ひくい なべ。おとが ちがうね！",
      "cam.act.spoon.1": "うく/しずむ：きんぞくの スプーンは たいてい しずむよ。さきに あててみよう！",
      "cam.act.spoon.2": "ひかり：ぴかぴかの うらに、おかしな じぶんの すがたが うつるよ！",

      "cam.sees.banana": "きいろい バナナ",
      "cam.rw.banana": "ほんものの バナナを いっしょに むこう — どっちの はんぶんが だれの？わけっこも すうがくだよ！",
      "cam.act.banana.0": "いろ：きいろい ものを あと 3つ みつけよう — おひさま、あひる、レモン！",
      "cam.act.banana.1": "かず：きれいに むいて きれいに しよう — なんきれ かな？かぞえてみよう！",
      "cam.act.banana.2": "かんかく：かいで、さわって、あじわおう。あまくて やわらかい！",

      "cam.sees.car": "ちいさな おもちゃの くるま",
      "cam.rw.car": "まくらの さかを 2だい の くるまで きょうそうしよう。どっちが はやい？さきに あててね！",
      "cam.act.car.0": "ぶつり：ほんで さかを つくろう — さかが きついほど、くるまは はやい！",
      "cam.act.car.1": "かず：タイヤを かぞえよう。くるま 2だい で タイヤは なんこ？",
      "cam.act.car.2": "あそび：あか しんごう、あお しんごう！あいずで おして、とまって。",

      "cam.sees.book": "えほん",
      "cam.rw.book": "きょうは 1さつ よんで、それから こどもに はんたいに「よんで」もらおう。",
      "cam.act.book.0": "ことば：ひらく まえに、かいてある ものを 3つ いってみよう。",
      "cam.act.book.1": "おはなし：こどもに ページを めくらせよう — こどもが リーダー！",
      "cam.act.book.2": "えんじてみよう：おおきな こえで おもしろく とうじょう じんぶつに なろう。",

      "cam.sees.socks": "くつした の ペア",
      "cam.rw.socks": "つぎの せんたくの とき、こどもが くつした マッチ しゅにん になるよ。",
      "cam.act.socks.0": "ろんり：せんたくものを あわせよう！いろと もようで ペアを みつけよう。",
      "cam.act.socks.1": "かず：ペアを かぞえよう。くつした 2まい で 1ペア！",
      "cam.act.socks.2": "かんかく：やわらかくて、のびて、あったかい — つぎは くつした にんぎょう？",

      "cam.sees.drum": "たいこ",
      "cam.rw.drum": "なべと きの スプーンで たいこを つくろう — ぎょうしん して たたこう！",
      "cam.act.drum.0": "おと：おおきな おとと、ささやくような おと。ちがいを かんじてみよう！",
      "cam.act.drum.1": "リズム：ぼくの リズムを まねしよう — ドン ドン パン！",
      "cam.act.drum.2": "おんがく：じぶんの たいこの リズムで、へやを ぎょうしん しよう。"
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
