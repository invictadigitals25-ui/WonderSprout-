/* WonderSprout story content — part 14: "Benny Bear's Picnic" + "Finn the Little Fish" in pt/ru/hi/ur/tr. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
pt: {
"st.picnic.title":"O Piquenique do Urso Benny","st.picnic.desc":"O Benny leva três maçãs. Com quem as vai partilhar?","st.picnic.theme":"Matemática e bondade · contar, partilhar",
"st.picnic.p1.t":"O Urso Benny arruma o cesto: uma maçã, duas maçãs, TRÊS maçãs! «Um piquenique precisa de amigos», diz ele. Quem deverá convidar?","st.picnic.p1.c0":"🐰 Convida a Coelha Rosie","st.picnic.p1.c1":"🦊 Convida a Raposa Felix",
"st.picnic.p2a.t":"A Coelha Rosie vem a saltitar. Três maçãs, dois amigos… «Uma para ti, uma para mim», diz o Benny, «e uma podemos dividir ao meio!»","st.picnic.p2a.c0":"🍎 Uma para cada — é justo!","st.picnic.p2a.c1":"🍯 Guarda uma para a sobremesa",
"st.picnic.p2b.t":"A Raposa Felix tem muita fome — gostava de TER DUAS maçãs! O Benny pensa bem. Depois o Felix sorri: «Ou… podíamos apanhar bagas juntos e ter MAIS para todos!»","st.picnic.p2b.c0":"🫐 Apanhem bagas juntos","st.picnic.p2b.c1":"🍎 Partilhem as maçãs na mesma",
"st.picnic.p3.t":"A toalha de piquenique enche-se: maçãs, bagas, sandes de mel e dois amigos muito felizes. Contar juntos fez tudo saber melhor!","st.picnic.p3.m":"Contar e partilhar fazem bons amigos — e grandes piqueniques.","st.picnic.p3.r":"No teu próximo lanche, contem juntos os pratos e as chávenas: um para cada pessoa!",
"st.finn.title":"Finn o Peixinho","st.finn.desc":"O Finn procura a pérola brilhante no fundo do mar.","st.finn.theme":"Mundo da água · contar, bondade",
"st.finn.f1.t":"Blub blub! O Finn, o peixinho, ouve falar de uma pérola brilhante escondida no azul profundo. «Vou encontrá-la!» Mas o mar é grande. Quem pode ajudar?","st.finn.f1.c0":"🐙 Pergunta ao Polvo Ollie","st.finn.f1.c1":"🫧 Segue as bolhas prateadas",
"st.finn.f2a.t":"O Polvo Ollie acena com os OITO braços. «Conta comigo — 1, 2, 3, 4, 5, 6, 7, 8! A pérola vive para lá do oitavo coral», aponta com o seu braço mais comprido.","st.finn.f2a.c0":"🪸 Nada para lá de oito corais",
"st.finn.f2b.t":"As bolhas prateadas levam o Finn para baixo, baixo, baixo… até uma concha gigante adormecida. Deverá o Finn abri-la simplesmente?","st.finn.f2b.c0":"🚪 Bate educadamente primeiro","st.finn.f2b.c1":"🎵 Canta para acordar a concha",
"st.finn.f3.t":"A concha abre-se e — UAU! A pérola brilha como uma lua pequenina. O Finn partilha a sua luz com o canto mais escuro do mar, para que ninguém tenha mais medo.","st.finn.f3.m":"A educação e a partilha tornam cada tesouro mais brilhante.","st.finn.f3.r":"Conta as bolhas no teu próximo banho — consegues rebentar exatamente cinco?",
},
ru: {
"st.picnic.title":"Пикник медвежонка Бенни","st.picnic.desc":"Бенни кладёт три яблока. С кем он ими поделится?","st.picnic.theme":"Математика и доброта · счёт, умение делиться",
"st.picnic.p1.t":"Медвежонок Бенни укладывает корзинку: одно яблоко, два яблока, ТРИ яблока! «Пикнику нужны друзья», — говорит он. Кого бы пригласить?","st.picnic.p1.c0":"🐰 Пригласить крольчиху Рози","st.picnic.p1.c1":"🦊 Пригласить лисёнка Феликса",
"st.picnic.p2a.t":"Крольчиха Рози прискакала. Три яблока, два друга… «Одно тебе, одно мне», — говорит Бенни, «а одно разделим пополам!»","st.picnic.p2a.c0":"🍎 По одному каждому — честно!","st.picnic.p2a.c1":"🍯 Оставь одно на десерт",
"st.picnic.p2b.t":"Лисёнок Феликс очень голоден — он хотел бы ДВА яблока! Бенни крепко думает. Потом Феликс улыбается: «Или… мы могли бы вместе собирать ягоды, и ВСЕМ досталось бы БОЛЬШЕ!»","st.picnic.p2b.c0":"🫐 Собирайте ягоды вместе","st.picnic.p2b.c1":"🍎 Всё равно поделитесь яблоками",
"st.picnic.p3.t":"Скатерть для пикника наполняется: яблоки, ягоды, бутерброды с мёдом и два очень счастливых друга. Считать вместе — от этого всё стало вкуснее!","st.picnic.p3.m":"Считать и делиться — так заводят хороших друзей и устраивают чудесные пикники.","st.picnic.p3.r":"В следующий перекус посчитайте вместе тарелки и чашки: по одной на каждого!",
"st.finn.title":"Финн, маленькая рыбка","st.finn.desc":"Финн ищет блестящую жемчужину на дне моря.","st.finn.theme":"Водный мир · счёт, доброта",
"st.finn.f1.t":"Буль-буль! Рыбка Финн слышит о блестящей жемчужине, спрятанной в синей глубине. «Я её найду!» Но море большое. Кто может помочь?","st.finn.f1.c0":"🐙 Спросить осьминога Олли","st.finn.f1.c1":"🫧 Плыть за серебристыми пузырями",
"st.finn.f2a.t":"Осьминог Олли машет ВСЕМИ ВОСЕМЬЮ щупальцами. «Считай со мной — 1, 2, 3, 4, 5, 6, 7, 8! Жемчужина живёт за восьмым кораллом», — показывает он самым длинным щупальцем.","st.finn.f2a.c0":"🪸 Проплыть мимо восьми кораллов",
"st.finn.f2b.t":"Серебристые пузыри ведут Финна вниз, вниз, вниз… к огромной спящей раковине. Стоит ли Финну просто открыть её?","st.finn.f2b.c0":"🚪 Сначала вежливо постучи","st.finn.f2b.c1":"🎵 Спой, чтобы разбудить раковину",
"st.finn.f3.t":"Раковина открывается и — ОГО! Жемчужина светится, как маленькая луна. Финн делится её светом с самым тёмным уголком моря, чтобы никто больше не боялся.","st.finn.f3.m":"Вежливость и умение делиться делают каждое сокровище ярче.","st.finn.f3.r":"Посчитай пузыри в следующее купание — сможешь лопнуть ровно пять?",
},
hi: {
"st.picnic.title":"भालू बेनी का पिकनिक","st.picnic.desc":"बेनी तीन सेब पैक करता है। वह किनके साथ बाँटेगा?","st.picnic.theme":"गणित और दयालुता · गिनती, साझा करना",
"st.picnic.p1.t":"भालू बेनी अपनी टोकरी सजाता है: एक सेब, दो सेब, तीन सेब! «पिकनिक के लिए दोस्त चाहिए», वह कहता है। उसे किसे बुलाना चाहिए?","st.picnic.p1.c0":"🐰 खरगोश रोज़ी को बुलाओ","st.picnic.p1.c1":"🦊 लोमड़ी फ़ेलिक्स को बुलाओ",
"st.picnic.p2a.t":"खरगोश रोज़ी फुदकती हुई आती है। तीन सेब, दो दोस्त… «एक तुम्हारा, एक मेरा», बेनी कहता है, «और एक को हम आधा-आधा बाँट सकते हैं!»","st.picnic.p2a.c0":"🍎 एक-एक — बिल्कुल ठीक!","st.picnic.p2a.c1":"🍯 एक मिठाई के लिए बचा लो",
"st.picnic.p2b.t":"लोमड़ी फ़ेलिक्स बहुत भूखा है — उसे दो सेब चाहिए! बेनी गहराई से सोचता है। फिर फ़ेलिक्स मुस्कुराता है: «या… हम साथ में बेरियाँ तोड़ सकते हैं और सबके लिए और ज्यादा हो जाएगा!»","st.picnic.p2b.c0":"🫐 साथ में बेरियाँ तोड़ो","st.picnic.p2b.c1":"🍎 फिर भी सेब बाँट दो",
"st.picnic.p3.t":"पिकनिक की चादर भर जाती है: सेब, बेरियाँ, शहद के सैंडविच और दो बहुत खुश दोस्त। साथ मिलकर गिनने से सब कुछ और स्वादिष्ट लगा!","st.picnic.p3.m":"गिनना और बाँटना अच्छे दोस्त बनाते हैं — और शानदार पिकनिक भी।","st.picnic.p3.r":"अगली बार नाश्ते में, साथ मिलकर थालियाँ और प्याले गिनो: हर व्यक्ति के लिए एक!",
"st.finn.title":"छोटी मछली फ़िन","st.finn.desc":"फ़िन समुद्र के तल पर चमकदार मोती ढूँढ रहा है।","st.finn.theme":"जल संसार · गिनती, दयालुता",
"st.finn.f1.t":"बुलबुल बुलबुल! छोटी मछली फ़िन गहरे नीले में छिपे एक चमकदार मोती के बारे में सुनता है। «मैं उसे ढूँढ लूँगा!» लेकिन समुद्र बहुत बड़ा है। कौन मदद कर सकता है?","st.finn.f1.c0":"🐙 ऑक्टोपस ऑली से पूछो","st.finn.f1.c1":"🫧 चाँदी जैसे बुलबुलों का पीछा करो",
"st.finn.f2a.t":"ऑक्टोपस ऑली अपनी आठों भुजाएँ हिलाता है। «मेरे साथ गिनो — 1, 2, 3, 4, 5, 6, 7, 8! मोती आठवें मूँगे के आगे रहता है», वह अपनी सबसे लंबी भुजा से इशारा करता है।","st.finn.f2a.c0":"🪸 आठ मूँगों के आगे तैरो",
"st.finn.f2b.t":"चाँदी जैसे बुलबुले फ़िन को नीचे, नीचे, नीचे ले जाते हैं… एक विशाल सोए हुए सीप तक। क्या फ़िन को उसे सीधे खोल देना चाहिए?","st.finn.f2b.c0":"🚪 पहले विनम्रता से खटखटाओ","st.finn.f2b.c1":"🎵 सीप को जगाने के लिए गाओ",
"st.finn.f3.t":"सीप खुलता है और — वाह! मोती एक नन्हे चाँद की तरह चमकता है। फ़िन उसकी रोशनी समुद्र के सबसे अँधेरे कोने से बाँटता है, ताकि अब कोई न डरे।","st.finn.f3.m":"विनम्रता और साझा करना हर खज़ाने को और चमकदार बनाते हैं।","st.finn.f3.r":"अगले स्नान में बुलबुले गिनो — क्या तुम ठीक पाँच फोड़ सकते हो?",
},
ur: {
"st.picnic.title":"ریچھ بینی کا پکنک","st.picnic.desc":"بینی تین سیب پیک کرتا ہے۔ وہ کس کے ساتھ بانٹے گا؟","st.picnic.theme":"ریاضی اور مہربانی · گنتی، شیئرنگ",
"st.picnic.p1.t":"ریچھ بینی اپنی ٹوکری سجاتا ہے: ایک سیب، دو سیب، تین سیب! «پکنک کے لیے دوست چاہیے»، وہ کہتا ہے۔ اسے کسے بلانا چاہیے؟","st.picnic.p1.c0":"🐰 خرگوش روزی کو بلاؤ","st.picnic.p1.c1":"🦊 لومڑی فیلکس کو بلاؤ",
"st.picnic.p2a.t":"خرگوش روزی اچھلتی ہوئی آتی ہے۔ تین سیب، دو دوست… «ایک تمہارا، ایک میرا»، بینی کہتا ہے، «اور ایک کو ہم آدھا آدھا بانٹ سکتے ہیں!»","st.picnic.p2a.c0":"🍎 ایک ایک — بالکل ٹھیک!","st.picnic.p2a.c1":"🍯 ایک مٹھائی کے لیے بچا لو",
"st.picnic.p2b.t":"لومڑی فیلکس بہت بھوکا ہے — اسے دو سیب چاہیے! بینی گہرائی سے سوچتا ہے۔ پھر فیلکس مسکراتا ہے: «یا… ہم ساتھ میں بیریاں توڑ سکتے ہیں اور سب کے لیے اور زیادہ ہو جائے گا!»","st.picnic.p2b.c0":"🫐 ساتھ میں بیریاں توڑو","st.picnic.p2b.c1":"🍎 پھر بھی سیب بانٹ دو",
"st.picnic.p3.t":"پکنک کی چادر بھر جاتی ہے: سیب، بیریاں، شہد کے سینڈوچ اور دو بہت خوش دوست۔ ساتھ مل کر گننے سے سب کچھ اور لذیذ لگا!","st.picnic.p3.m":"گننا اور بانٹنا اچھے دوست بناتے ہیں — اور شاندار پکنک بھی۔","st.picnic.p3.r":"اگلے ناشتے میں ساتھ مل کر پلیٹیں اور پیالے گنو: ہر شخص کے لیے ایک!",
"st.finn.title":"چھوٹی مچھلی فن","st.finn.desc":"فن سمندر کے تہہ میں چمکدار موتی ڈھونڈ رہا ہے۔","st.finn.theme":"پانی کی دنیا · گنتی، مہربانی",
"st.finn.f1.t":"بُلبُل بُلبُل! چھوٹی مچھلی فن گہرے نیلے میں چھپے ایک چمکدار موتی کے بارے میں سنتا ہے۔ «میں اسے ڈھونڈ لوں گا!» لیکن سمندر بہت بڑا ہے۔ کون مدد کر سکتا ہے؟","st.finn.f1.c0":"🐙 آکٹوپس اولی سے پوچھو","st.finn.f1.c1":"🫧 چاندی جیسے بلبلوں کا پیچھا کرو",
"st.finn.f2a.t":"آکٹوپس اولی اپنی آٹھوں بازو ہلاتا ہے۔ «میرے ساتھ گنو — 1، 2، 3، 4، 5، 6، 7، 8! موتی آٹھویں مونگے کے آگے رہتا ہے»، وہ اپنے سب سے لمبے بازو سے اشارہ کرتا ہے۔","st.finn.f2a.c0":"🪸 آٹھ مونگوں کے آگے تیراؤ",
"st.finn.f2b.t":"چاندی جیسے بلبلے فن کو نیچے، نیچے، نیچے لے جاتے ہیں… ایک دیو ہیکل سوئے ہوئے سیپ تک۔ کیا فن کو اسے سیدھا کھول دینا چاہیے؟","st.finn.f2b.c0":"🚪 پہلے ادب سے کھٹکھٹاؤ","st.finn.f2b.c1":"🎵 سیپ کو جگانے کے لیے گائو",
"st.finn.f3.t":"سیپ کھلتا ہے اور — واہ! موتی ایک ننھے چاند کی طرح چمکتا ہے۔ فن اس کی روشنی سمندر کے سب سے اندھیرے کونے سے بانٹتا ہے، تاکہ اب کوئی نہ ڈرے۔","st.finn.f3.m":"ادب اور بانٹنا ہر خزانے کو اور چمکدار بناتے ہیں۔","st.finn.f3.r":"اگلے غسل میں بلبلے گنو — کیا تم بالکل پانچ پھاڑ سکتے ہو؟",
},
tr: {
"st.picnic.title":"Ayı Benny'nin Pikniği","st.picnic.desc":"Benny üç elma topluyor. Onları kiminle paylaşacak?","st.picnic.theme":"Matematik ve iyilik · sayma, paylaşma",
"st.picnic.p1.t":"Ayı Benny sepetini hazırlıyor: bir elma, iki elma, ÜÇ elma! «Piknik için arkadaş gerekir» diyor. Kimi davet etmeli?","st.picnic.p1.c0":"🐰 Tavşan Rosie'yi davet et","st.picnic.p1.c1":"🦊 Tilki Felix'i davet et",
"st.picnic.p2a.t":"Tavşan Rosie zıplayarak geliyor. Üç elma, iki arkadaş… «Biri sana, biri bana» diyor Benny, «birini de yarıya bölüp paylaşırız!»","st.picnic.p2a.c0":"🍎 Herkese birer — adil!","st.picnic.p2a.c1":"🍯 Birini tatlıya sakla",
"st.picnic.p2b.t":"Tilki Felix çok aç — İKİ elma istiyor! Benny iyice düşünüyor. Sonra Felix gülümsüyor: «Ya da… birlikte çilek toplayıp HERKESE DAHA ÇOK çıkartabiliriz!»","st.picnic.p2b.c0":"🫐 Birlikte çilek toplayın","st.picnic.p2b.c1":"🍎 Yine de elmaları paylaşın",
"st.picnic.p3.t":"Piknik örtüsü doluyor: elmalar, çilekler, ballı sandviçler ve iki çok mutlu arkadaş. Birlikte saymak her şeyi daha lezzetli yaptı!","st.picnic.p3.m":"Saymak ve paylaşmak iyi arkadaşlar yapar — ve harika piknikler.","st.picnic.p3.r":"Bir sonraki atıştırmalığında tabakları ve bardakları birlikte sayın: her kişiye bir tane!",
"st.finn.title":"Küçük Balık Finn","st.finn.desc":"Finn denizin dibindeki parlak inciyi arıyor.","st.finn.theme":"Su dünyası · sayma, iyilik",
"st.finn.f1.t":"Gulp gulp! Küçük balık Finn, derin mavide saklı parlak bir inciyi duyuyor. «Onu bulacağım!» Ama deniz büyük. Kim yardım edebilir?","st.finn.f1.c0":"🐙 Ahtapot Ollie'ye sor","st.finn.f1.c1":"🫧 Gümüş baloncukları takip et",
"st.finn.f2a.t":"Ahtapot Ollie SEKİZ kolunun hepsiyle sallıyor. «Benimle say — 1, 2, 3, 4, 5, 6, 7, 8! İnci sekizinci mercanın ötesinde yaşar» diye en uzun koluyla işaret ediyor.","st.finn.f2a.c0":"🪸 Sekiz mercanın ötesine yüz",
"st.finn.f2b.t":"Gümüş baloncuklar Finn'i aşağı, aşağı, aşağı götürüyor… dev, uyuyan bir kabuğa. Finn onu öylece açmalı mı?","st.finn.f2b.c0":"🚪 Önce nazikçe kapıyı çal","st.finn.f2b.c1":"🎵 Kabuğu uyandırmak için şarkı söyle",
"st.finn.f3.t":"Kabuk açılıyor ve — VAY! İnci minik bir ay gibi parlıyor. Finn ışığını denizin en karanlık köşesiyle paylaşıyor, böylece artık kimse korkmuyor.","st.finn.f3.m":"Nezaket ve paylaşmak her hazineyi daha parlak yapar.","st.finn.f3.r":"Bir sonraki banyonda baloncukları say — tam beş tanesini patlatabilir misin?",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
