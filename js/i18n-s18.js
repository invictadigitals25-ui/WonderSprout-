/* WonderSprout story content — part 18: "Where Is Beep?" + "Duckling's Bath Day" in pt/ru/hi/ur/tr. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
pt: {
"st.beep.title":"Onde Está o Beep?","st.beep.desc":"O robô Beep está escondido. Consegues encontrá-lo pelo bipe?","st.beep.theme":"Permanência do objeto · ouvir, cuca",
"st.beep.h1.t":"«Bip bip!» ri-se o robô Beep, e esconde-se em algum lado no parque. Podes OUVI-LO mas não o podes VER. De onde vem aquele bipe?","st.beep.h1.c0":"🛝 Olha debaixo do escorrega","st.beep.h1.c1":"🎠 Olha atrás do baloiço",
"st.beep.h2a.t":"Levantas… nenhum Beep debaixo do escorrega! «Bip bip!» o som volta — mais perto desta vez. O Beep ainda está escondido, e ainda existe!","st.beep.h2a.c0":"🏖️ Olha na caixa de areia",
"st.beep.h2b.t":"Espreita… nenhum Beep atrás do baloiço! «Bip bip!» Ele está a rir-se noutro lado. Mesmo quando não vês o Beep, ele continua lá!","st.beep.h2b.c0":"🪑 Olha debaixo do banco",
"st.beep.h3.t":"Levantas a toalhinha azul e… «BIP BIP!» Ali está ele! O Beep salta e dá-te um abraço de robô. Campeão da cuca!","st.beep.h3.m":"As coisas continuam a existir mesmo quando não as vês — é uma grande descoberta do cérebro!","st.beep.h3.r":"Joguem à cuca, ou escondam um brinquedo debaixo de um copo e deixa a tua criança encontrá-lo.",
"st.duck.title":"O Dia de Banho do Patinho","st.duck.desc":"O Patinho não está seguro da hora do banho. Chapinha devagar e descobre o que flutua!","st.duck.theme":"Flutuar e Afundar · confiança na água",
"st.duck.s1.t":"Splash! O Patinho caminha a bambolear-se para o banho quente. «Será que a água é grande demais para um pato pequeno?» sussurra.","st.duck.s1.c0":"💧 Toca na água devagar","st.duck.s1.c1":"🛁 Traz primeiro o barquinho amarelo",
"st.duck.s2.t":"O Patinho mergulha um pé palmeado… e depois PUM — está a flutuar! «Eu flutuo! EU FLUTUO!» grasna de alegria.","st.duck.s2.c0":"🫧 Sopra ondas de bolhas","st.duck.s2.c1":"🦆 Rodopia em círculos felizes",
"st.duck.s2b.t":"O barquinho amarelo baloiça em cima. «Flutua — e eu também vou flutuar!» diz o Patinho corajoso, saltando para dentro.","st.duck.s2b.c0":"🫧 Sopra ondas de bolhas","st.duck.s2b.c1":"🦆 Corre com o barquinho amarelo",
"st.duck.s3.t":"Bolhas por todo o lado! O Patinho rebenta uma com o bico — PUM! A hora do banho é a melhor.","st.duck.s3.c0":" Grasnando um final feliz",
"st.duck.end.t":"«Até amanhã, água!» diz o Patinho, flutuando como um profissional. FIM — agora experimenta flutuar no banho com os teus brinquedos!",
},
ru: {
"st.beep.title":"Где Бип?","st.beep.desc":"Робот Бип прячется. Сможешь найти его по писку?","st.beep.theme":"Постоянство объекта · слушать, ку-ку",
"st.beep.h1.t":"«Бип-бип!» хихикает робот Бип и прячется где-то на площадке. Ты можешь его СЛЫШАТЬ, но не можешь ВИДЕТЬ. Откуда этот писк?","st.beep.h1.c0":"🛝 Посмотри под горкой","st.beep.h1.c1":"🎠 Посмотри за качелями",
"st.beep.h2a.t":"Ты поднимаешь… под горкой Бипа нет! «Бип-бип!» — звук снова, на этот раз ближе. Бип всё ещё прячется, и он всё ещё существует!","st.beep.h2a.c0":"🏖️ Посмотри в песочнице",
"st.beep.h2b.t":"Взгляд… за качелями Бипа нет! «Бип-бип!» Он хихикает где-то ещё. Даже когда ты не видишь Бипа, он всё равно там!","st.beep.h2b.c0":"🪑 Посмотри под скамейкой",
"st.beep.h3.t":"Ты поднимаешь маленькое синее полотенце и… «БИП-БИП!» Вот он! Бип вскакивает и обнимает тебя, как робот. Чемпион ку-ку!","st.beep.h3.m":"Вещи существуют, даже когда ты их не видишь, — это большое открытие для мозга!","st.beep.h3.r":"Поиграйте в ку-ку или спрячьте игрушку под стакан и пусть ребёнок её найдёт.",
"st.duck.title":"Банный день Утёнка","st.duck.desc":"Утёнок не уверен насчёт купания. Пошлёпай по воде осторожно и узнай, что плавает!","st.duck.theme":"Тонет и плавает · уверенность в воде",
"st.duck.s1.t":"Плеск! Утёнок вперевалку идёт к тёплой ванне. «А вода не слишком большая для маленькой уточки?» — шепчет он.","st.duck.s1.c0":"💧 Трогай воду медленно","st.duck.s1.c1":"🛁 Сначала принеси жёлтую лодочку",
"st.duck.s2.t":"Утёнок опускает одну перепончатую лапку… и вдруг ПЛЮХ — он плавает! «Я плаваю! Я ПЛАВАЮ!» — радостно крякает он.","st.duck.s2.c0":"🫧 Выдувай волны пузырей","st.duck.s2.c1":"🦆 Кружись радостными кругами",
"st.duck.s2b.t":"Маленькая жёлтая лодочка покачивается сверху. «Она плавает — и я тоже буду!» — говорит храбрый Утёнок, запрыгивая внутрь.","st.duck.s2b.c0":"🫧 Выдувай волны пузырей","st.duck.s2b.c1":"🦆 Устрой гонку с жёлтой лодочкой",
"st.duck.s3.t":"Пузыри повсюду! Утёнок лопает один клювом — ПЛЮХ! Время купания — лучшее время.","st.duck.s3.c0":" Крякни счастливый финал",
"st.duck.end.t":"«До завтра, вода!» — говорит Утёнок, плавая как профи. КОНЕЦ — а теперь попробуй плавать в ванне со своими игрушками!",
},
hi: {
"st.beep.title":"बीप कहाँ है?","st.beep.desc":"रोबोट बीप छिपा हुआ है। क्या तुम उसे उसकी आवाज़ से ढूँढ सकते हो?","st.beep.theme":"वस्तु की स्थायित्व · सुनना, छिपन-छिपाई",
"st.beep.h1.t":"«बीप बीप!» रोबोट बीप हँसता है, और खेल के मैदान में कहीं छिप जाता है। तुम उसे सुन सकते हो लेकिन देख नहीं सकते। वह बीप कहाँ से आ रही है?","st.beep.h1.c0":"🛝 फिसलपट्टी के नीचे देखो","st.beep.h1.c1":"🎠 झूले के पीछे देखो",
"st.beep.h2a.t":"तुम उठाते हो… फिसलपट्टी के नीचे बीप नहीं! «बीप बीप!» आवाज़ फिर आती है — इस बार और नज़दीक। बीप अब भी छिपा है, और अब भी मौजूद है!","st.beep.h2a.c0":"🏖️ रेत के डिब्बे में देखो",
"st.beep.h2b.t":"झॉक… झूले के पीछे बीप नहीं! «बीप बीप!» वह कहीं और हँस रहा है। जब तुम बीप को देख नहीं सकते, तब भी वह वहीं है!","st.beep.h2b.c0":"🪑 बेंच के नीचे देखो",
"st.beep.h3.t":"तुम नीला छोटा तौलिया उठाते हो और… «बीप बीप!» वह यहीं है! बीप कूदता है और तुम्हें रोबोट गले लगाता है। छिपन-छिपाई के चैंपियन!","st.beep.h3.m":"चीज़ें तब भी मौजूद रहती हैं जब तुम उन्हें देख नहीं सकते — यह दिमाग की बड़ी खोज है!","st.beep.h3.r":"छिपन-छिपाई खेलो, या एक खिलौना कप के नीचे छिपाओ और अपने बच्चे को उसे ढूँढने दो।",
"st.duck.title":"बत्तख के बच्चे का स्नान दिवस","st.duck.desc":"बत्तख का बच्चा स्नान के बारे में अनिश्चित है। धीरे से छपछप करो और पता लगाओ क्या तैरता है!","st.duck.theme":"तैरना और डूबना · पानी में भरोसा",
"st.duck.s1.t":"छपाक! बत्तख का बच्चा डगमगाता हुआ गर्म स्नान की ओर जाता है। «क्या पानी छोटी बत्तख के लिए बहुत बड़ा है?» वह फुसफुसाता है।","st.duck.s1.c0":"💧 धीरे से पानी छुओ","st.duck.s1.c1":"🛁 पहले पीली नाव लाओ",
"st.duck.s2.t":"बत्तख का बच्चा एक जालीदार पैर डुबोता है… फिर पॉप — वह तैर रहा है! «मैं तैरता हूँ! मैं तैरता हूँ!» वह खुशी से टर्र-टर्र करता है।","st.duck.s2.c0":"🫧 बुलबुलों की लहरें फूँको","st.duck.s2.c1":"🦆 खुश दायरों में घूमो",
"st.duck.s2b.t":"छोटी पीली नाव ऊपर डोलती है। «वह तैरती है — और मैं भी तैरूँगा!» बहादुर बत्तख कहता है, अंदर कूदते हुए।","st.duck.s2b.c0":"🫧 बुलबुलों की लहरें फूँको","st.duck.s2b.c1":"🦆 पीली नाव से दौड़ लगाओ",
"st.duck.s3.t":"हर जगह बुलबुले! बत्तख का बच्चा अपनी चोंच से एक फोड़ता है — पॉप! स्नान का समय सबसे अच्छा समय है।","st.duck.s3.c0":" खुशी का अंत टर्र-टर्र करो",
"st.duck.end.t":"«कल मिलेंगे, पानी!» बत्तख का बच्चा कहता है, पेशेवर की तरह तैरता हुआ। समाप्त — अब अपने खिलौनों के साथ स्नान में तैरना आज़माओ!",
},
ur: {
"st.beep.title":"بیپ کہاں ہے؟","st.beep.desc":"روبوٹ بیپ چھپا ہوا ہے۔ کیا تم اسے اس کی آواز سے ڈھونڈ سکتے ہو؟","st.beep.theme":"چیز کا تسلسل · سننا، چھپن چھپائی",
"st.beep.h1.t":"«بیپ بیپ!» روبوٹ بیپ ہنستا ہے، اور کھیل کے میدان میں کہیں چھپ جاتا ہے۔ تم اسے سن سکتے ہو لیکن دیکھ نہیں سکتے۔ وہ بیپ کہاں سے آ رہی ہے؟","st.beep.h1.c0":"🛝 پھسلن پٹی کے نیچے دیکھو","st.beep.h1.c1":"🎠 جھولے کے پیچھے دیکھو",
"st.beep.h2a.t":"تم اٹھاتے ہو… پھسلن پٹی کے نیچے بیپ نہیں! «بیپ بیپ!» آواز پھر آتی ہے — اس بار اور قریب۔ بیپ اب بھی چھپا ہے، اور اب بھی موجود ہے!","st.beep.h2a.c0":"🏖️ ریت کے ڈبے میں دیکھو",
"st.beep.h2b.t":"جھانک… جھولے کے پیچھے بیپ نہیں! «بیپ بیپ!» وہ کہیں اور ہنس رہا ہے۔ جب تم بیپ کو دیکھ نہیں سکتے، تب بھی وہ وہیں ہے!","st.beep.h2b.c0":"🪑 بینچ کے نیچے دیکھو",
"st.beep.h3.t":"تم نیلا چھوٹا تولیہ اٹھاتے ہو اور… «بیپ بیپ!» وہ یہیں ہے! بیپ کودتا ہے اور تمہیں روبوٹ گلے لگاتا ہے۔ چھپن چھپائی کے چیمپئن!","st.beep.h3.m":"چیزیں تب بھی موجود رہتی ہیں جب تم انہیں دیکھ نہیں سکتے — یہ دماغ کی بڑی دریافت ہے!","st.beep.h3.r":"چھپن چھپائی کھیلو، یا ایک کھلونا کپ کے نیچے چھپاؤ اور اپنے بچے کو اسے ڈھونڈنے دو۔",
"st.duck.title":"بطخ کے بچے کا غسل کا دن","st.duck.desc":"بطخ کا بچہ غسل کے بارے میں غیر یقینی ہے۔ آہستہ سے چھپاک کرو اور پتا لگائو کیا تیرتا ہے!","st.duck.theme":"تیرنا اور ڈوبنا · پانی میں اعتماد",
"st.duck.s1.t":"چھپاک! بطخ کا بچہ ڈگمگاتا ہوا گرم غسل کی طرف جاتا ہے۔ «کیا پانی چھوٹی بطخ کے لیے بہت بڑا ہے؟» وہ سرگوشی کرتا ہے۔","st.duck.s1.c0":"💧 آہستہ سے پانی چھوؤ","st.duck.s1.c1":"🛁 پہلے پیلی کشتی لائو",
"st.duck.s2.t":"بطخ کا بچہ ایک جالی دار پاؤں ڈبوتا ہے… پھر پلاپ — وہ تیر رہا ہے! «میں تیرتا ہوں! میں تیرتا ہوں!» وہ خوشی سے ٹراٹ کرتا ہے۔","st.duck.s2.c0":"🫧 بلبلوں کی لہریں پھونکو","st.duck.s2.c1":"🦆 خوش دائروں میں گھومو",
"st.duck.s2b.t":"چھوٹی پیلی کشتی اوپر ڈولتی ہے۔ «وہ تیرتی ہے — اور میں بھی تیروں گا!» بہادر بطخ کہتا ہے، اندر کودتے ہوئے۔","st.duck.s2b.c0":"🫧 بلبلوں کی لہریں پھونکو","st.duck.s2b.c1":"🦆 پیلی کشتی سے دوڑ لگائو",
"st.duck.s3.t":"ہر جگہ بلبلے! بطخ کا بچہ اپنی چونچ سے ایک پھاڑتا ہے — پلاپ! غسل کا وقت سب سے اچھا وقت ہے۔","st.duck.s3.c0":" خوشی کا انجام ٹراٹ کرو",
"st.duck.end.t":"«کل ملیں گے، پانی!» بطخ کا بچہ کہتا ہے، پیشہ ور کی طرح تیرتا ہوا۔ ختم — اب اپنے کھلونوں کے ساتھ غسل میں تیرنا آزماؤ!",
},
tr: {
"st.beep.title":"Beep Nerede?","st.beep.desc":"Robot Beep saklanıyor. Onu ötüşünden bulabilir misin?","st.beep.theme":"Nesne kalıcılığı · dinleme, ce-e",
"st.beep.h1.t":"«Bip bip!» diye kıkırdar Robot Beep ve oyun parkında bir yere saklanır. Onu DUYABİLİRSİN ama GÖREMEZSİN. O bip nereden geliyor?","st.beep.h1.c0":"🛝 Kaydırağın altına bak","st.beep.h1.c1":"🎠 Salıncağın arkasına bak",
"st.beep.h2a.t":"Kaldırıyorsun… kaydırağın altında Beep yok! «Bip bip!» ses yine geliyor — bu sefer daha yakın. Beep hâlâ saklanıyor ve hâlâ var!","st.beep.h2a.c0":"🏖️ Kum havuzuna bak",
"st.beep.h2b.t":"Bakış… salıncağın arkasında Beep yok! «Bip bip!» Başka bir yerde kıkırdıyor. Beep'i göremesen bile, o hâlâ orada!","st.beep.h2b.c0":"🪑 Bankın altına bak",
"st.beep.h3.t":"Küçük mavi havluyu kaldırıyorsun ve… «BİP BİP!» İşte orada! Beep zıplıyor ve sana bir robot sarılması veriyor. Ce-e şampiyonu!","st.beep.h3.m":"Nesneler göremesen de var olmaya devam eder — bu büyük bir beyin keşfi!","st.beep.h3.r":"Ce-e oynayın, ya da bir oyuncağı bardağın altına saklayın ve çocuğunun bulmasına izin verin.",
"st.duck.title":"Ördek Yavrusunun Banyo Günü","st.duck.desc":"Ördek yavrusu banyo zamanından emin değil. Nazikçe şapırdat ve neyin yüzdüğünü öğren!","st.duck.theme":"Yüzme ve Batma · suya güven",
"st.duck.s1.t":"Şap! Ördek yavrusu paytak paytak sıcak banyoya yürür. «Su küçük bir ördek için fazla büyük mü?» diye fısıldar.","st.duck.s1.c0":"💧 Suya yavaşça dokun","st.duck.s1.c1":"🛁 Önce sarı tekneyi getir",
"st.duck.s2.t":"Ördek yavrusu bir perdeli ayağını daldırır… sonra ŞLOP — yüzüyor! «Yüzüyorum! YÜZÜYORUM!» diye sevinçle vaklar.","st.duck.s2.c0":"🫧 Köpük dalgaları üfle","st.duck.s2.c1":"🦆 Mutlu halkalarda dön",
"st.duck.s2b.t":"Küçük sarı tekne üstte sallanır. «O yüzüyor — ben de yüzeceğim!» der cesur ördek yavrusu, içeri atlayarak.","st.duck.s2b.c0":"🫧 Köpük dalgaları üfle","st.duck.s2b.c1":"🦆 Sarı tekneyle yarış yap",
"st.duck.s3.t":"Her yerde köpükler! Ördek yavrusu birini gagasıyla patlatır — ŞLOP! Banyo zamanı en güzel zaman.","st.duck.s3.c0":" Mutlu bir son vakla",
"st.duck.end.t":"«Yarın görüşürüz, su!» der ördek yavrusu, bir profesyonel gibi yüzerek. SON — şimdi oyuncaklarınla banyoda yüzmeyi dene!",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
