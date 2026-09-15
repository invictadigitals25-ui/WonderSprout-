/* WonderSprout story content — part 10: "Milo's Rainy Day" + "The Sleepy Moon" in pt/ru/hi/ur/tr. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
pt: {
"st.milo.title":"O Dia de Chuva do Milo","st.milo.desc":"O Milo acorda com chuva. Saltar em poças ou construir um forte de cobertores?","st.milo.theme":"Terra e Clima · chuva, escolhas, brincadeira aconchegante",
"st.milo.m1.t":"Ping… pong… ping. O Milo acorda com chuva na janela. «Hoje não há sol», suspira. «Mas os dias de chuva também podem ser maravilhosos!»","st.milo.m1.c0":"🥾 Calça as botas e sai","st.milo.m1.c1":"🛋️ Constrói um forte de cobertores",
"st.milo.m2a.t":"Splash! Splash! O Milo salta na maior poça de sempre. As gotas fazem-lhe cócegas no nariz e uma minhoquinha sai para dizer olá.","st.milo.m2a.c0":"💦 Salta em MAIS uma poça","st.milo.m2a.c1":"👂 Ouve a chuva cantar",
"st.milo.m2b.t":"O Milo constrói um forte aconchegante com cobertores e cadeiras. Lá dentro é quente, macio e secreto — a caverna perfeita para um dia de chuva.","st.milo.m2b.c0":"🔦 Faz sombras chinesas","st.milo.m2b.c1":"🎵 Canta uma canção de chuva",
"st.milo.m3a.t":"A chuva pára e… olha! Um arco-íris gigante atravessa o céu. «Depois da chuva vem o sol», sorri o Milo, salpicado de poças e feliz.","st.milo.m3a.m":"A chuva ajuda as flores a beber — e depois da chuva, às vezes um arco-íris!","st.milo.m3a.r":"No próximo dia de chuva, oiçam a chuva juntos — e depois vão procurar poças (ou um arco-íris!).",
"st.milo.m3b.t":"O forte de cobertores brilha com sombras e canções sonolentas. Lá fora, a chuva canta boa noite. «Os dias de chuva são dias aconchegantes», sussurra o Milo.","st.milo.m3b.m":"Todo o tipo de dia pode ser um dia maravilhoso.","st.milo.m3b.r":"Construam juntos um forte de cobertores e leiam lá dentro uma história à luz da lanterna.",
"st.moon.title":"A Lua Sonolenta","st.moon.desc":"A Lua não consegue adormecer. Podes ajudar?","st.moon.theme":"Espaço · hora de dormir, contar, rotinas",
"st.moon.n1.t":"Bem acima das nuvens, a Lua boceja um grande bocejo prateado. Mas as estrelas brilham tanto — a Lua simplesmente não consegue dormir!","st.moon.n1.c0":"⭐ Contem as estrelas juntos","st.moon.n1.c1":"🎵 Cantem uma canção de embalar à Lua",
"st.moon.n2a.t":"«Uma… duas… três… quatro… cinco», contam. As estrelas brilham mais suave a cada número, orgulhosas de serem contadas. Os olhos da Lua ficam pesados.","st.moon.n2a.c0":"🌙 Digam boa noite a cada estrela",
"st.moon.n2b.t":"Cantam uma canção de embalar suave e lenta. As estrelas abrandam o brilho para acompanhar a melodia, baloiçando como pequenos candeeiros de noite. A Lua sorri com sono.","st.moon.n2b.c0":"☁️ Tapem a Lua com nuvens",
"st.moon.n3.t":"Uma nuvem fofa aproxima-se como um cobertor. «Boa noite, Lua. Boa noite, estrelas. Boa noite, tu». Tudo está calmo, aconchegante e escuro — o mundo inteiro está a dormir.","st.moon.n3.m":"Uma rotina suave ajuda toda a gente — até a Lua — a adormecer.","st.moon.n3.r":"Esta noite, digam boa noite a três coisas: à Lua, a um brinquedo favorito, e um ao outro.",
},
ru: {
"st.milo.title":"Дождливый день Мило","st.milo.desc":"Мило просыпается под дождь. Прыгать по лужам или строить форт из одеял?","st.milo.theme":"Земля и погода · дождь, выбор, уютная игра",
"st.milo.m1.t":"Кап… кап… кап. Мило просыпается от дождя за окном. «Сегодня нет солнца», — вздыхает он. «Но дождливые дни тоже могут быть чудесными!»","st.milo.m1.c0":"🥾 Надень сапоги и выходи","st.milo.m1.c1":"🛋️ Построй форт из одеял",
"st.milo.m2a.t":"Брызг! Брызг! Мило прыгает в самую большую лужу на свете. Капли щекочут ему нос, и червячок выглядывает поздороваться.","st.milo.m2a.c0":"💦 Прыгни ещё в ОДНУ лужу","st.milo.m2a.c1":"👂 Послушай, как поёт дождь",
"st.milo.m2b.t":"Мило строит уютный форт из одеял и стульев. Внутри тепло, мягко и таинственно — идеальная пещера для дождливого дня.","st.milo.m2b.c0":"🔦 Сделай теневые фигурки","st.milo.m2b.c1":"🎵 Спой песенку про дождь",
"st.milo.m3a.t":"Дождь прекращается и… смотри! Гигантская радуга растянулась по небу. «После дождя выходит солнце», — улыбается Мило, весь в брызгах и счастливый.","st.milo.m3a.m":"Дождь помогает цветам пить — а после дождя иногда бывает радуга!","st.milo.m3a.r":"В следующий дождливый день послушайте дождь вместе — а потом пойдите искать лужи (или радугу!).",
"st.milo.m3b.t":"Форт из одеял светится тенями кукол и сонными песнями. Снаружи дождь поёт «спокойной ночи». «Дождливые дни — уютные дни», — шепчет Мило.","st.milo.m3b.m":"Любой день может быть чудесным.","st.milo.m3b.r":"Постройте вместе форт из одеял и прочитайте внутри одну сказку с фонариком.",
"st.moon.title":"Сонная Луна","st.moon.desc":"Луна не может уснуть. Поможешь?","st.moon.theme":"Космос · время сна, счёт, режим",
"st.moon.n1.t":"Высоко над облаками Луна зевает большим серебряным зевком. Но звёзды сверкают так ярко — Луна просто не может уснуть!","st.moon.n1.c0":"⭐ Считайте звёзды вместе","st.moon.n1.c1":"🎵 Спойте Луне колыбельную",
"st.moon.n2a.t":"«Одна… две… три… четыре… пять», — считаете вы. Звёзды светятся всё мягче с каждой цифрой, гордые тем, что их считают. Глаза Луны тяжелеют.","st.moon.n2a.c0":"🌙 Пожелайте спокойной ночи каждой звезде",
"st.moon.n2b.t":"Вы поёте мягкую, медленную колыбельную. Звёзды замедляют мерцание в такт мелодии, покачиваясь, как маленькие ночники. Луна сонно улыбается.","st.moon.n2b.c0":"☁️ Укройте Луну облаками",
"st.moon.n3.t":"Пушистое облако подплывает, как одеяло. «Спокойной ночи, Луна. Спокойной ночи, звёзды. Спокойной ночи, ты». Всё тихо, уютно и темно — весь мир спит.","st.moon.n3.m":"Мягкий режим помогает всем — даже Луне — уснуть.","st.moon.n3.r":"Сегодня вечером пожелайте спокойной ночи трём вещам: Луне, любимой игрушке и друг другу.",
},
hi: {
"st.milo.title":"मिलो का बारिश वाला दिन","st.milo.desc":"मिलो बारिश के साथ जागता है। कीचड़ में कूदें या कंबल का किला बनाएँ?","st.milo.theme":"पृथ्वी और मौसम · बारिश, विकल्प, आरामदेह खेल",
"st.milo.m1.t":"टप… टप… टप। मिलो खिड़की पर बारिश के साथ जागता है। «आज धूप नहीं है», वह आह भरता है। «लेकिन बारिश वाले दिन भी अद्भुत हो सकते हैं!»","st.milo.m1.c0":"🥾 बूट पहनो और बाहर जाओ","st.milo.m1.c1":"🛋️ कंबल का किला बनाओ",
"st.milo.m2a.t":"छपाक! छपाक! मिलो सबसे बड़े कीचड़ में कूदता है। बूँदें उसकी नाक गुदगुदाती हैं और एक छोटा कीड़ा नमस्ते कहने निकलता है।","st.milo.m2a.c0":"💦 एक और कीचड़ में कूदो","st.milo.m2a.c1":"👂 बारिश का गाना सुनो",
"st.milo.m2b.t":"मिलो कंबल और कुर्सियों से आरामदेह किला बनाता है। अंदर गर्म, नरम और रहस्यमय है — बारिश वाले दिन के लिए बिल्कुल सही गुफा।","st.milo.m2b.c0":"🔦 परछाई की कठपुतलियाँ बनाओ","st.milo.m2b.c1":"🎵 बारिश का गाना गाओ",
"st.milo.m3a.t":"बारिश रुकती है और… देखो! एक विशाल इंद्रधनुष आसमान में फैलता है। «बारिश के बाद धूप आती है», मिलो मुस्कुराता है, कीचड़ से सना और खुश।","st.milo.m3a.m":"बारिश फूलों को पानी पीने में मदद करती है — और बारिश के बाद, कभी-कभी इंद्रधनुष!","st.milo.m3a.r":"अगले बारिश वाले दिन, साथ मिलकर बारिश सुनो — फिर कीचड़ ढूँढो (या इंद्रधनुष!).",
"st.milo.m3b.t":"कंबल का किला परछाइयों और नींद भरे गानों से चमकता है। बाहर, बारिश शुभ रात्रि गाती है। «बारिश वाले दिन आरामदेह दिन होते हैं», मिलो फुसफुसाता है।","st.milo.m3b.m":"हर तरह का दिन एक अद्भुत दिन हो सकता है।","st.milo.m3b.r":"साथ मिलकर कंबल का किला बनाओ और टॉर्च की रोशनी में अंदर एक कहानी पढ़ो।",
"st.moon.title":"नींद में डूबा चाँद","st.moon.desc":"चाँद सो नहीं पा रहा। क्या तुम मदद करोगे?","st.moon.theme":"अंतरिक्ष · सोने का समय, गिनती, दिनचर्या",
"st.moon.n1.t":"बादलों के बहुत ऊपर, चाँद एक बड़ी चाँदी सी जम्हाई लेता है। लेकिन तारे इतनी चमक से टिमटिमा रहे हैं — चाँद बस सो ही नहीं पा रहा!","st.moon.n1.c0":"⭐ साथ मिलकर तारे गिनो","st.moon.n1.c1":"🎵 चाँद को लोरी गाओ",
"st.moon.n2a.t":"«एक… दो… तीन… चार… पाँच», तुम गिनते हो। हर संख्या के साथ तारे और कोमल चमकते हैं, गिने जाने पर गर्वित। चाँद की आँखें भारी होने लगती हैं।","st.moon.n2a.c0":"🌙 हर तारे को शुभ रात्रि कहो",
"st.moon.n2b.t":"तुम एक कोमल, धीमी लोरी गाते हो। तारे धुन के साथ अपनी टिमटिमाहट धीमी कर लेते हैं, छोटे नाइट-लैंप की तरह झूलते हुए। चाँद नींद में मुस्कुराता है।","st.moon.n2b.c0":"☁️ चाँद को बादलों से ढको",
"st.moon.n3.t":"एक रुई जैसा बादल कंबल की तरह ऊपर आता है। «शुभ रात्रि, चाँद। शुभ रात्रि, तारो। शुभ रात्रि, तुम»। सब शांत, आरामदेह और अँधेरा है — पूरी दुनिया सो रही है।","st.moon.n3.m":"एक कोमल दिनचर्या सबकी मदद करती है — चाँद की भी — सोने में।","st.moon.n3.r":"आज रात, तीन चीज़ों को शुभ रात्रि कहो: चाँद को, एक पसंदीदा खिलौने को, और एक-दूसरे को।",
},
ur: {
"st.milo.title":"میلو کا بارش والا دن","st.milo.desc":"میلو بارش کے ساتھ جاگتا ہے۔ کیچڑ میں کودیں یا کمبل کا قلعہ بنائیں؟","st.milo.theme":"زمین اور موسم · بارش، انتخاب، آرام دہ کھیل",
"st.milo.m1.t":"ٹپ… ٹپ… ٹپ۔ میلُو کھڑکی پر بارش کے ساتھ جاگتا ہے۔ «آج دھوپ نہیں ہے»، وہ آہ بھرتا ہے۔ «لیکن بارش والے دن بھی شاندار ہو سکتے ہیں!»","st.milo.m1.c0":"🥾 بوٹ پہنو اور باہر جاؤ","st.milo.m1.c1":"🛋️ کمبل کا قلعہ بنائو",
"st.milo.m2a.t":"چھپاک! چھپاک! میلُو سب سے بڑے کیچڑ میں کودتا ہے۔ بوندیں اس کی ناک گدگدی کرتی ہیں اور ایک چھوٹا کیڑا سلام کہنے نکلتا ہے۔","st.milo.m2a.c0":"💦 ایک اور کیچڑ میں کودو","st.milo.m2a.c1":"👂 بارش کا گانا سنو",
"st.milo.m2b.t":"میلُو کمبل اور کرسیوں سے آرام دہ قلعہ بناتا ہے۔ اندر گرم، نرم اور پراسرار ہے — بارش والے دن کے لیے بالکل صحیح غار۔","st.milo.m2b.c0":"🔦 سایوں کی کٹھ پتلیاں بنائو","st.milo.m2b.c1":"🎵 بارش کا گانا گائو",
"st.milo.m3a.t":"بارش رکتی ہے اور… دیکھو! ایک دیو ہیکل قوس قزح آسمان میں پھیلتا ہے۔ «بارش کے بعد دھوپ آتی ہے»، میلُو مسکراتا ہے، کیچڑ سے سنا ہوا اور خوش۔","st.milo.m3a.m":"بارش پھولوں کو پانی پینے میں مدد دیتی ہے — اور بارش کے بعد، کبھی کبھی قوس قزح!","st.milo.m3a.r":"اگلے بارش والے دن، ساتھ مل کر بارش سنو — پھر کیچڑ ڈھونڈو (یا قوس قزح!).",
"st.milo.m3b.t":"کمبل کا قلعہ سائوں اور نیند بھرے گانوں سے چمکتا ہے۔ باہر، بارش شب بخیر گاتی ہے۔ «بارش والے دن آرام دہ دن ہوتے ہیں»، میلُو سرگوشی کرتا ہے۔","st.milo.m3b.m":"ہر قسم کا دن ایک شاندار دن ہو سکتا ہے۔","st.milo.m3b.r":"ساتھ مل کر کمبل کا قلعہ بنائو اور ٹارچ کی روشنی میں اندر ایک کہانی پڑھو۔",
"st.moon.title":"نیند میں ڈوبا چاند","st.moon.desc":"چاند سو نہیں پا رہا۔ کیا تم مدد کرو گے؟","st.moon.theme":"خلا · سونے کا وقت، گنتی، معمول",
"st.moon.n1.t":"بادلوں کے بہت اوپر، چاند ایک بڑی چاندی سی جمائی لیتا ہے۔ لیکن ستارے اتنی چمک سے جھلملا رہے ہیں — چاند بس سو ہی نہیں پا رہا!","st.moon.n1.c0":"⭐ ساتھ مل کر ستارے گنیں","st.moon.n1.c1":"🎵 چاند کو لوری سنائیں",
"st.moon.n2a.t":"«ایک… دو… تین… چار… پانچ»، تم گنتے ہو۔ ہر عدد کے ساتھ ستارے اور نرم جھلملاتے ہیں، گنے جانے پر فخر محسوس کرتے ہوئے۔ چاند کی آنکھیں بھاری ہونے لگتی ہیں۔","st.moon.n2a.c0":"🌙 ہر ستارے کو شب بخیر کہیں",
"st.moon.n2b.t":"تم ایک نرم، دھیمی لوری گاتے ہو۔ ستارے دھن کے ساتھ اپنی جھلملاہٹ سست کر لیتے ہیں، چھوٹے نائٹ لیمپ کی طرح جھولتے ہوئے۔ چاند نیند میں مسکراتا ہے۔","st.moon.n2b.c0":"☁️ چاند کو بادلوں سے ڈھانپیں",
"st.moon.n3.t":"ایک روئی جیسا بادل کمبل کی طرح اوپر آتا ہے۔ «شب بخیر، چاند۔ شب بخیر، ستارو۔ شب بخیر، تم»۔ سب خاموش، آرام دہ اور اندھیرا ہے — پوری دنیا سو رہی ہے۔","st.moon.n3.m":"ایک نرم معمول سب کی مدد کرتا ہے — چاند کی بھی — سونے میں۔","st.moon.n3.r":"آج رات، تین چیزوں کو شب بخیر کہیں: چاند کو، ایک پسندیدہ کھلونے کو، اور ایک دوسرے کو۔",
},
tr: {
"st.milo.title":"Milo'nun Yağmurlu Günü","st.milo.desc":"Milo yağmurla uyanıyor. Su birikintilerinde zıplamak mı battaniye kalesi mi?","st.milo.theme":"Dünya ve Hava · yağmur, seçimler, sıcak oyun",
"st.milo.m1.t":"Tıp… tıp… tıp. Milo penceredeki yağmurla uyanıyor. «Bugün güneş yok» diye iç çekiyor. «Ama yağmurlu günler de harika olabilir!»","st.milo.m1.c0":"🥾 Çizmelerini giy ve dışarı çık","st.milo.m1.c1":"🛋️ Battaniyeden kale yap",
"st.milo.m2a.t":"Şap! Şup! Milo en büyük su birikintisine atlıyor. Yağmur damlaları burnunu gıdıklıyor ve küçük bir solucan merhaba demeye çıkıyor.","st.milo.m2a.c0":"💦 BİR su birikintisine daha atla","st.milo.m2a.c1":"👂 Yağmurun şarkısını dinle",
"st.milo.m2b.t":"Milo battaniye ve sandalyelerle sıcak bir kale yapıyor. İçerisi sıcak, yumuşak ve gizli — yağmurlu gün için mükemmel mağara.","st.milo.m2b.c0":"🔦 Gölge kuklaları yap","st.milo.m2b.c1":"🎵 Bir yağmur şarkısı söyle",
"st.milo.m3a.t":"Yağmur duruyor ve… bak! Devasa bir gökkuşağı gökyüzünde uzanıyor. «Yağmurdan sonra güneş gelir» diye gülümsüyor Milo, su sıçramış ve mutlu.","st.milo.m3a.m":"Yağmur çiçeklerin su içmesine yardım eder — ve yağmurdan sonra bazen gökkuşağı çıkar!","st.milo.m3a.r":"Bir sonraki yağmurlu gün birlikte yağmuru dinleyin — sonra su birikintileri (ya da gökkuşağı!) bulmaya gidin.",
"st.milo.m3b.t":"Battaniye kalesi kukla gölgeleri ve uykulu şarkılarla parlıyor. Dışarıda yağmur iyi geceler şarkısı söylüyor. «Yağmurlu günler sıcak günlerdir» diye fısıldıyor Milo.","st.milo.m3b.m":"Her tür gün harika bir gün olabilir.","st.milo.m3b.r":"Birlikte bir battaniye kalesi yapın ve içinde el feneri ışığında bir hikâye okuyun.",
"st.moon.title":"Uykulu Ay","st.moon.desc":"Ay bir türlü uyuyamıyor. Yardım eder misin?","st.moon.theme":"Uzay · yatma zamanı, sayma, rutinler",
"st.moon.n1.t":"Bulutların çok üstünde Ay kocaman gümüş bir esneme yapıyor. Ama yıldızlar o kadar parlak parlıyor ki — Ay bir türlü uyuyamıyor!","st.moon.n1.c0":"⭐ Yıldızları birlikte sayın","st.moon.n1.c1":"🎵 Ay'a bir ninni söyleyin",
"st.moon.n2a.t":"«Bir… iki… üç… dört… beş» diye sayıyorsunuz. Yıldızlar her sayıda daha yumuşak parlıyor, sayılmaktan gururlu. Ay'ın gözleri ağırlaşıyor.","st.moon.n2a.c0":"🌙 Her yıldıza iyi geceler deyin",
"st.moon.n2b.t":"Yumuşak, yavaş bir ninni söylüyorsunuz. Yıldızlar parıltılarını melodiye uyacak kadar yavaşlatıyor, küçük gece lambaları gibi sallanıyorlar. Ay uykulu uykulu gülümsüyor.","st.moon.n2b.c0":"☁️ Ay'ı bulutlarla örtün",
"st.moon.n3.t":"Pofuduk bir bulut battaniye gibi üstüne çekiliyor. «İyi geceler, Ay. İyi geceler, yıldızlar. İyi geceler, sen.» Her şey sessiz, sıcak ve karanlık — bütün dünya uyuyor.","st.moon.n3.m":"Nazik bir rutin herkesin — Ay'ın bile — uykuya dalmasına yardım eder.","st.moon.n3.r":"Bu gece üç şeye iyi geceler deyin: Ay'a, sevdiğiniz bir oyuncağa ve birbirinize.",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
