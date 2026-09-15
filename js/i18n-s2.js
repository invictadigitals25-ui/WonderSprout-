/* WonderSprout story content — part 2: "Pip and the Little Seed" in pt/ru/hi/ur/tr. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
pt: {
"st.pip.title":"Pip e a Sementinha","st.pip.desc":"Pip o broto acorda debaixo da terra. Ajuda o Pip a escolher como crescer!","st.pip.theme":"Laboratório da Vida · crescimento, água, luz do sol",
"st.pip.s1.t":"Bem fundo debaixo da terra, uma sementinha chamada Pip acorda. «Está escuro aqui», sussurra Pip. «Quero ver o mundo!»","st.pip.s1.c0":"💧 Empurra para cima em direção à água","st.pip.s1.c1":"☀️ Empurra para cima em direção ao calor",
"st.pip.s2w.t":"Pip segue a água fresca e — PUM! — um brotinho verde rompe a terra. «Olá, mundo!» diz Pip. Uma nuvem de chuva passa a flutuar.","st.pip.s2w.c0":"🌧️ Pede um gole à nuvem","st.pip.s2w.c1":"🐝 Cumprimenta primeiro a abelha",
"st.pip.s2s.t":"Pip segue o sol quente e — PUM! — um brotinho verde rompe a terra. «Olá, mundo!» diz Pip. O sol sorri lá de cima.","st.pip.s2s.c0":"☀️ Agradece ao sol pelo calor","st.pip.s2s.c1":"🐝 Cumprimenta primeiro a abelha",
"st.pip.s3bee.t":"Uma abelha fofinha chega a zumbir. «Bzzz! Olá, brotinho! As abelhas ajudam as flores a crescer. Queres ser amiga das flores?»","st.pip.s3bee.c0":"🌸 Sim! Ser amiga das flores",
"st.pip.s3.t":"Pip cresce um pouco todos os dias. Uma folha… duas folhas… três! Mas Pip tem sede E quer sol. O que deverá Pip fazer?","st.pip.s3.c0":"💧 Bebe água primeiro","st.pip.s3.c1":"☀️ Estica-te para o sol primeiro","st.pip.s3.c2":"🎵 Canta uma canção de crescimento",
"st.pip.s4song.t":"Pip canta «Cresce, cresce, cresce!» A abelha dança. A nuvem chove um bocadinho. O sol espreita. Todos ajudam Pip a crescer!","st.pip.s4song.c0":"🌱 Continua a crescer!",
"st.pip.s4.t":"Água nas raízes, sol nas folhas — Pip sente um pequeno alto no cimo. Um botão! «Algo maravilhoso está a chegar», zumbe a abelha.","st.pip.s4.c0":"🌼 Abre o botão!",
"st.pip.s5.t":"PUM! Pip torna-se uma linda flor dourada! A abelha dança, a nuvem aplaude com chuva, e uma menina sussurra: «Olá, Pip». Água + sol + tempo + amigos = uma maravilha!","st.pip.s5.m":"Tudo cresce com um pouco de água, um pouco de sol e muita paciência.","st.pip.s5.r":"Planta um feijão num copo com algodão húmido. Rega-o todos os dias e vê o TEU próprio Pip crescer!",
},
ru: {
"st.pip.title":"Пип и маленькое семечко","st.pip.desc":"Росток Пип просыпается под землёй. Помоги Пипу выбрать, как расти!","st.pip.theme":"Лаборатория жизни · рост, вода, солнечный свет",
"st.pip.s1.t":"Глубоко под землёй просыпается крошечное семечко по имени Пип. «Здесь темно», — шепчет Пип. «Я хочу увидеть мир!»","st.pip.s1.c0":"💧 Толкайся вверх к воде","st.pip.s1.c1":"☀️ Толкайся вверх к теплу",
"st.pip.s2w.t":"Пип следует за прохладной водой и — ХЛОП! — крошечный зелёный росток пробивает землю. «Привет, мир!» — говорит Пип. Мимо проплывает дождевое облако.","st.pip.s2w.c0":"🌧️ Попроси у облака попить","st.pip.s2w.c1":"🐝 Сначала поздоровайся с пчелой",
"st.pip.s2s.t":"Пип следует за тёплым солнцем и — ХЛОП! — крошечный зелёный росток пробивает землю. «Привет, мир!» — говорит Пип. Солнце улыбается сверху.","st.pip.s2s.c0":"☀️ Поблагодари солнце за тепло","st.pip.s2s.c1":"🐝 Сначала поздоровайся с пчелой",
"st.pip.s3bee.t":"Прилетает пушистая пчела и жужжит. «Бззз! Привет, росток! Пчёлы помогают цветам расти. Хочешь дружить с цветами?»","st.pip.s3bee.c0":"🌸 Да! Дружить с цветами",
"st.pip.s3.t":"Пип растёт каждый день. Один лист… два листа… три! Но Пип хочет пить И хочет солнца. Что делать Пипу?","st.pip.s3.c0":"💧 Сначала попей воды","st.pip.s3.c1":"☀️ Сначала потянись к солнцу","st.pip.s3.c2":"🎵 Спой песенку роста",
"st.pip.s4song.t":"Пип поёт «Расти, расти, расти!» Пчела танцует. Облако немного дождит. Солнце выглядывает. Все помогают Пипу расти!","st.pip.s4song.c0":"🌱 Продолжай расти!",
"st.pip.s4.t":"Вода на корнях, солнце на листьях — Пип чувствует маленький бугорок наверху. Бутон! «Скоро будет чудо», — гудит пчела.","st.pip.s4.c0":"🌼 Раскрой бутон!",
"st.pip.s5.t":"ХЛОП! Пип становится красивым золотым цветком! Пчела танцует, облако хлопает дождём, а девочка шепчет: «Привет, Пип». Вода + солнце + время + друзья = чудо!","st.pip.s5.m":"Всё растёт с капелькой воды, капелькой солнца и большим терпением.","st.pip.s5.r":"Посади фасоль в стакан с мокрой ватой. Поливай каждый день и смотри, как растёт ТВОЙ собственный Пип!",
},
hi: {
"st.pip.title":"पिप और नन्हा बीज","st.pip.desc":"अंकुर पिप ज़मीन के नीचे जागता है। पिप को चुनने में मदद करो कि कैसे बढ़े!","st.pip.theme":"जीवन प्रयोगशाला · वृद्धि, पानी, सूर्य का प्रकाश",
"st.pip.s1.t":"मिट्टी के बहुत नीचे, पिप नाम का एक नन्हा बीज जागता है। «यहाँ अँधेरा है», पिप फुसफुसाता है। «मैं दुनिया देखना चाहता हूँ!»","st.pip.s1.c0":"💧 पानी की ओर ऊपर धकेलो","st.pip.s1.c1":"☀️ गर्माहट की ओर ऊपर धकेलो",
"st.pip.s2w.t":"पिप ठंडे पानी का पीछा करता है और — पॉप! — एक नन्हा हरा अंकुर मिट्टी तोड़कर निकलता है। «नमस्ते दुनिया!» पिप कहता है। एक बारिश का बादल तैरता हुआ आता है।","st.pip.s2w.c0":"🌧️ बादल से एक घूँट माँगो","st.pip.s2w.c1":"🐝 पहले मधुमक्खी को नमस्ते कहो",
"st.pip.s2s.t":"पिप गर्म धूप का पीछा करता है और — पॉप! — एक नन्हा हरा अंकुर मिट्टी तोड़कर निकलता है। «नमस्ते दुनिया!» पिप कहता है। सूरज ऊपर से मुस्कुराता है।","st.pip.s2s.c0":"☀️ गर्माहट के लिए सूरज का धन्यवाद करो","st.pip.s2s.c1":"🐝 पहले मधुमक्खी को नमस्ते कहो",
"st.pip.s3bee.t":"एक रोएँदार मधुमक्खी भिनभिनाती हुई आती है। «भनभन! नमस्ते नन्हे अंकुर! मधुमक्खियाँ फूलों को बढ़ने में मदद करती हैं। क्या तुम फूलों की दोस्त बनना चाहोगे?»","st.pip.s3bee.c0":"🌸 हाँ! फूलों की दोस्त बनूँगा",
"st.pip.s3.t":"पिप हर दिन थोड़ा ऊँचा होता है। एक पत्ता… दो पत्ते… तीन! लेकिन पिप को प्यास भी है और धूप भी चाहिए। पिप को क्या करना चाहिए?","st.pip.s3.c0":"💧 पहले पानी पियो","st.pip.s3.c1":"☀️ पहले सूरज की ओर तनो","st.pip.s3.c2":"🎵 बढ़ने का गाना गाओ",
"st.pip.s4song.t":"पिप गाता है «बढ़ो, बढ़ो, बढ़ो!» मधुमक्खी नाचती है। बादल थोड़ी बारिश करता है। सूरज झाँकता है। सब पिप को बढ़ने में मदद करते हैं!","st.pip.s4song.c0":"🌱 बढ़ते रहो!",
"st.pip.s4.t":"जड़ों पर पानी, पत्तों पर धूप — पिप को ऊपर एक छोटी सी उभार महसूस होती है। एक कली! «कुछ अद्भुत आ रहा है», मधुमक्खी गुनगुनाती है।","st.pip.s4.c0":"🌼 कली खोलो!",
"st.pip.s5.t":"पॉप! पिप एक सुंदर सुनहरा फूल बन जाता है! मधुमक्खी नाचती है, बादल बारिश से ताली बजाता है, और एक छोटी बच्ची फुसफुसाती है: «नमस्ते, पिप»। पानी + धूप + समय + दोस्त = एक चमत्कार!","st.pip.s5.m":"हर चीज़ थोड़े पानी, थोड़ी धूप और बहुत धैर्य से बढ़ती है।","st.pip.s5.r":"गीले रुई वाले कप में एक बीन लगाओ। रोज़ पानी दो और देखो तुम्हारा अपना पिप कैसे बढ़ता है!",
},
ur: {
"st.pip.title":"پپ اور ننھا بیج","st.pip.desc":"انکر پپ زمین کے نیچے جاگتا ہے۔ پپ کی مدد کرو کہ کیسے بڑھے!","st.pip.theme":"زندگی لیبارٹری · نشوونما، پانی، سورج کی روشنی",
"st.pip.s1.t":"مٹی کے بہت نیچے، پپ نام کا ایک ننھا بیج جاگتا ہے۔ «یہاں اندھیرا ہے»، پپ سرگوشی کرتا ہے۔ «میں دنیا دیکھنا چاہتا ہوں!»","st.pip.s1.c0":"💧 پانی کی طرف اوپر دھکیلو","st.pip.s1.c1":"☀️ گرمائش کی طرف اوپر دھکیلو",
"st.pip.s2w.t":"پپ ٹھنڈے پانی کا پیچھا کرتا ہے اور — پوپ! — ایک ننھا ہرا انکر مٹی توڑ کر نکلتا ہے۔ «سلام دنیا!» پپ کہتا ہے۔ بارش کا ایک بادل تیرتا ہوا آتا ہے۔","st.pip.s2w.c0":"🌧️ بادل سے ایک گھونٹ مانگو","st.pip.s2w.c1":"🐝 پہلے شہد کی مکھی کو سلام کہو",
"st.pip.s2s.t":"پپ گرم دھوپ کا پیچھا کرتا ہے اور — پوپ! — ایک ننھا ہرا انکر مٹی توڑ کر نکلتا ہے۔ «سلام دنیا!» پپ کہتا ہے۔ سورج اوپر سے مسکراتا ہے۔","st.pip.s2s.c0":"☀️ گرمائش کے لیے سورج کا شکریہ ادا کرو","st.pip.s2s.c1":"🐝 پہلے شہد کی مکھی کو سلام کہو",
"st.pip.s3bee.t":"ایک روئیں دار شہد کی مکھی بھنبھناتی ہوئی آتی ہے۔ «بھن بھن! سلام ننھے انکر! مکھیاں پھولوں کو بڑھنے میں مدد دیتی ہیں۔ کیا تم پھولوں کی دوست بننا چاہو گے؟»","st.pip.s3bee.c0":"🌸 ہاں! پھولوں کی دوست بنوں گا",
"st.pip.s3.t":"پپ ہر روز تھوڑا اونچا ہوتا ہے۔ ایک پتا… دو پتے… تین! لیکن پپ کو پیاس بھی ہے اور دھوپ بھی چاہیے۔ پپ کو کیا کرنا چاہیے؟","st.pip.s3.c0":"💧 پہلے پانی پیو","st.pip.s3.c1":"☀️ پہلے سورج کی طرف تنو","st.pip.s3.c2":"🎵 بڑھنے کا گانا گائو",
"st.pip.s4song.t":"پپ گاتا ہے «بڑھو، بڑھو، بڑھو!» مکھی ناچتی ہے۔ بادل تھوڑی بارش کرتا ہے۔ سورج جھانکتا ہے۔ سب پپ کو بڑھنے میں مدد دیتے ہیں!","st.pip.s4song.c0":"🌱 بڑھتے رہو!",
"st.pip.s4.t":"جڑوں پر پانی، پتوں پر دھوپ — پپ کو اوپر ایک چھوٹی سی ابھار محسوس ہوتی ہے۔ ایک کلی! «کچھ شاندار آ رہا ہے»، مکھی گنگناتی ہے۔","st.pip.s4.c0":"🌼 کلی کھولو!",
"st.pip.s5.t":"پوپ! پپ ایک خوبصورت سنہرا پھول بن جاتا ہے! مکھی ناچتی ہے، بادل بارش سے تالیاں بجاتا ہے، اور ایک چھوٹی بچی سرگوشی کرتی ہے: «سلام، پپ»۔ پانی + دھوپ + وقت + دوست = ایک عجوبہ!","st.pip.s5.m":"ہر چیز تھوڑے پانی، تھوڑی دھوپ اور بہت صبر سے بڑھتی ہے۔","st.pip.s5.r":"گیلی روئی والے کپ میں ایک بین لگائو۔ روزانہ پانی دو اور دیکھو تمہارا اپنا پپ کیسے بڑھتا ہے!",
},
tr: {
"st.pip.title":"Pip ve Küçük Tohum","st.pip.desc":"Filiz Pip yerin altında uyanıyor. Pip'in nasıl büyüyeceğini seçmesine yardım et!","st.pip.theme":"Yaşam Laboratuvarı · büyüme, su, güneş ışığı",
"st.pip.s1.t":"Toprağın derinliklerinde Pip adında minicik bir tohum uyanır. «Burası karanlık» diye fısıldar Pip. «Dünyayı görmek istiyorum!»","st.pip.s1.c0":"💧 Suya doğru yukarı it","st.pip.s1.c1":"☀️ Sıcaklığa doğru yukarı it",
"st.pip.s2w.t":"Pip serin suyu takip eder ve — POP! — minicik yeşil bir filiz toprağı yarar. «Merhaba dünya!» der Pip. Bir yağmur bulutu süzülerek geçer.","st.pip.s2w.c0":"🌧️ Buluttan bir yudum su iste","st.pip.s2w.c1":"🐝 Önce arıya merhaba de",
"st.pip.s2s.t":"Pip sıcak güneşi takip eder ve — POP! — minicik yeşil bir filiz toprağı yarar. «Merhaba dünya!» der Pip. Güneş yukarıdan gülümser.","st.pip.s2s.c0":"☀️ Sıcaklık için güneşe teşekkür et","st.pip.s2s.c1":"🐝 Önce arıya merhaba de",
"st.pip.s3bee.t":"Tüylü bir arı vızıldayarak gelir. «Vızzz! Merhaba küçük filiz! Arılar çiçeklerin büyümesine yardım eder. Çiçek arkadaşı olmak ister misin?»","st.pip.s3bee.c0":"🌸 Evet! Çiçek arkadaşı olayım",
"st.pip.s3.t":"Pip her gün biraz daha uzar. Bir yaprak… iki yaprak… üç! Ama Pip hem susuz HEM de güneş istiyor. Pip ne yapmalı?","st.pip.s3.c0":"💧 Önce su iç","st.pip.s3.c1":"☀️ Önce güneşe uzan","st.pip.s3.c2":"🎵 Bir büyüme şarkısı söyle",
"st.pip.s4song.t":"Pip «Büyü, büyü, büyü!» diye şarkı söyler. Arı dans eder. Bulut biraz yağmur yağdırır. Güneş başını uzatır. Herkes Pip'in büyümesine yardım eder!","st.pip.s4song.c0":"🌱 Büyümeye devam et!",
"st.pip.s4.t":"Köklerde su, yapraklarda güneş — Pip tepede küçük bir tümsek hisseder. Bir tomurcuk! «Harika bir şey geliyor» diye mırıldanır arı.","st.pip.s4.c0":"🌼 Tomurcuğu aç!",
"st.pip.s5.t":"POP! Pip güzel mi güzel altın rengi bir çiçek olur! Arı dans eder, bulut yağmurla alkışlar ve küçük bir kız fısıldar: «Merhaba, Pip». Su + güneş + zaman + arkadaşlar = bir mucize!","st.pip.s5.m":"Her şey biraz su, biraz güneş ve bolca sabırla büyür.","st.pip.s5.r":"Islak pamuklu bir bardağa bir fasulye ek. Her gün sula ve KENDİ Pip'inin büyümesini izle!",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
