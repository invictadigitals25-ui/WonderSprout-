/* ============================================================
   WonderSprout — Wonder Camera object cards
   (pt/ru/hi/ur/tr)
   keys: cam.aiLooking, cam.tapAnother,
         cam.sees.<id>, cam.rw.<id>, cam.act.<id>.0..2
   ids: apple ball leaf cup teddy spoon banana car book socks drum
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    pt: {
      "cam.aiLooking": "🤖 A IA do WonderSprout está a olhar…",
      "cam.tapAnother": "👆 Toca noutro objeto para o analisar",

      "cam.sees.apple": "uma maçã vermelha e brilhante",
      "cam.rw.apple": "Cortem a maçã ao meio juntos — há uma estrela escondida lá dentro!",
      "cam.act.apple.0": "Cor: «Consegues encontrar mais alguma coisa VERMELHA?»",
      "cam.act.apple.1": "Matemática: conta as maçãs na mesa — 1, 2, 3!",
      "cam.act.apple.2": "Vida: «As maçãs crescem nas árvores, a partir de flores minúsculas.»",

      "cam.sees.ball": "uma bola redonda e saltitante",
      "cam.rw.ball": "Experimenta a bola no Parque da Física, depois faz saltar a bola VERDADEIRA e compara!",
      "cam.act.ball.0": "Física: larga-a do joelho e depois de bem alto. Qual salto é maior?",
      "cam.act.ball.1": "Formas: faz rolar em círculo. As bolas são redondas — rolam!",
      "cam.act.ball.2": "Jogo: rolem a bola um para o outro e digam «rola… apanha!»",

      "cam.sees.leaf": "uma folha verde",
      "cam.rw.leaf": "Recolhe 3 folhas diferentes e prensa-as num livro pesado.",
      "cam.act.leaf.0": "Vida: «As folhas bebem luz do sol e ajudam a árvore a respirar.»",
      "cam.act.leaf.1": "Cor: encontra uma folha verde, uma amarela e uma castanha estaladiça.",
      "cam.act.leaf.2": "Clima: sopra na folha — o vento faz as folhas dançar!",

      "cam.sees.cup": "um copo para beber",
      "cam.rw.cup": "No banho, enche e deita o copo 5 vezes enquanto contam.",
      "cam.act.cup.0": "Água: este copo flutua ou afunda? Prevejam e depois testem com segurança!",
      "cam.act.cup.1": "Matemática: deita água para dentro e para fora — «cheio» e «vazio».",
      "cam.act.cup.2": "Som: bate-lhe devagarinho com uma colher. Dim!",

      "cam.sees.teddy": "um urso de peluche fofinho",
      "cam.rw.teddy": "Dá ao Teddy um abraço de boa noite e diz três palavras simpáticas.",
      "cam.act.teddy.0": "Sentimentos: «Como se sente o Teddy hoje? Feliz? Com sono?»",
      "cam.act.teddy.1": "Faz de conta: façam uma festa do chá e partilhem com o Teddy.",
      "cam.act.teddy.2": "História: deixa o Teddy escolher que história do WonderSprout ler!",

      "cam.sees.spoon": "uma colher de metal brilhante",
      "cam.rw.spoon": "Façam um tambor suave de colher em 3 panelas ou taças diferentes.",
      "cam.act.spoon.0": "Som: bate nas colheres devagar — panela alta, panela baixa. Sons diferentes!",
      "cam.act.spoon.1": "Flutua/afunda: colheres de metal costumam afundar. Prevejam primeiro!",
      "cam.act.spoon.2": "Luz: vê o teu reflexo engraçado na parte brilhante!",

      "cam.sees.banana": "uma banana amarela",
      "cam.rw.banana": "Descasquem juntos uma banana verdadeira — quem fica com que metade? Partilhar também é matemática!",
      "cam.act.banana.0": "Cor: encontra mais 3 coisas amarelas — sol, pato, limão!",
      "cam.act.banana.1": "Matemática: parte-a em bocados — quantos bocados? Conta-os!",
      "cam.act.banana.2": "Sentidos: cheira, toca, prova. Doce e macia!",

      "cam.sees.car": "um carrinho de brincar",
      "cam.rw.car": "Façam uma corrida com dois carros numa rampa de almofadas. Qual é mais rápido? Prevejam primeiro!",
      "cam.act.car.0": "Física: construam uma rampa com um livro — rampa mais inclinada, carro mais rápido!",
      "cam.act.car.1": "Matemática: contem as rodas. Quantas rodas têm 2 carros?",
      "cam.act.car.2": "Jogo: luz vermelha, luz verde! Empurrem e PAREM ao sinal.",

      "cam.sees.book": "um livro de histórias",
      "cam.rw.book": "Leiam um livro hoje — e depois deixa o teu filho «lê-lo» para ti.",
      "cam.act.book.0": "Linguagem: digam 3 coisas da capa antes de abrir.",
      "cam.act.book.1": "História: deixa o teu filho virar as páginas — ele é que manda!",
      "cam.act.book.2": "Representem: sejam as personagens com vozes grandes e tolas.",

      "cam.sees.socks": "um par de meias",
      "cam.rw.socks": "Na próxima lavandaria, o teu filho passa a ser o Emparelhador Oficial de Meias.",
      "cam.act.socks.0": "Lógica: emparelhar a roupa! Encontrem pares por cor e padrão.",
      "cam.act.socks.1": "Matemática: contem os pares. 2 meias = 1 par!",
      "cam.act.socks.2": "Sentidos: macias, elásticas, quentinhas — fantoches de meia a seguir?",

      "cam.sees.drum": "um tambor",
      "cam.rw.drum": "Façam um tambor com uma panela e uma colher de pau — marchem e toquem!",
      "cam.act.drum.0": "Som: batidas fortes e batidas sussurradas. Sintam a diferença!",
      "cam.act.drum.1": "Ritmo: copia o meu ritmo — bum bum clap!",
      "cam.act.drum.2": "Música: marchem pela sala ao ritmo do vosso próprio tambor."
    },

    ru: {
      "cam.aiLooking": "🤖 ИИ WonderSprout смотрит…",
      "cam.tapAnother": "👆 Нажмите другой предмет, чтобы его распознать",

      "cam.sees.apple": "блестящее красное яблоко",
      "cam.rw.apple": "Разрежьте яблоко пополам вместе — внутри спрятана звезда!",
      "cam.act.apple.0": "Цвет: «Можешь найти что-то ещё КРАСНОЕ?»",
      "cam.act.apple.1": "Математика: посчитай яблоки на столе — 1, 2, 3!",
      "cam.act.apple.2": "Жизнь: «Яблоки растут на деревьях, из крошечных цветов.»",

      "cam.sees.ball": "круглый прыгучий мяч",
      "cam.rw.ball": "Попробуй мяч на Физической площадке, потом попрыгай настоящим мячом и сравни!",
      "cam.act.ball.0": "Физика: брось его с колена, а потом с высоты. Какой отскок больше?",
      "cam.act.ball.1": "Формы: покати его по кругу. Мячи круглые — они катятся!",
      "cam.act.ball.2": "Игра: катайте мяч друг другу и говорите «кати… лови!»",

      "cam.sees.leaf": "зелёный лист",
      "cam.rw.leaf": "Собери 3 разных листа и засуши их в тяжёлой книге.",
      "cam.act.leaf.0": "Жизнь: «Листья пьют солнечный свет и помогают дереву дышать.»",
      "cam.act.leaf.1": "Цвет: найди зелёный лист, жёлтый лист и хрустящий коричневый.",
      "cam.act.leaf.2": "Погода: подуй на лист — ветер заставляет листья танцевать!",

      "cam.sees.cup": "чашка для питья",
      "cam.rw.cup": "Во время купания наполняй и выливай чашку 5 раз, считая вслух.",
      "cam.act.cup.0": "Вода: эта чашка поплывёт или утонет? Предскажи, потом аккуратно проверь!",
      "cam.act.cup.1": "Математика: наливай и выливай воду — «полная» и «пустая».",
      "cam.act.cup.2": "Звук: легонько постучи ложкой. Дзинь!",

      "cam.sees.teddy": "мягкий плюшевый мишка",
      "cam.rw.teddy": "Обними Тедди на ночь и скажи три добрых слова.",
      "cam.act.teddy.0": "Чувства: «Как себя чувствует Тедди сегодня? Весело? Сонно?»",
      "cam.act.teddy.1": "Воображение: устройте чаепитие и поделитесь с Тедди.",
      "cam.act.teddy.2": "История: пусть Тедди выберет, какую сказку WonderSprout читать!",

      "cam.sees.spoon": "блестящая металлическая ложка",
      "cam.rw.spoon": "Устройте нежный барабан из ложки на 3 разных кастрюлях или мисках.",
      "cam.act.spoon.0": "Звук: легонько стучи ложками — высокая кастрюля, низкая. Разные звуки!",
      "cam.act.spoon.1": "Плавает/тонет: металлические ложки обычно тонут. Сначала предскажи!",
      "cam.act.spoon.2": "Свет: посмотри на своё забавное отражение в блестящей стороне!",

      "cam.sees.banana": "жёлтый банан",
      "cam.rw.banana": "Почистьте настоящий банан вместе — кому какая половина? Делиться — это тоже математика!",
      "cam.act.banana.0": "Цвет: найди ещё 3 жёлтых предмета — солнце, утка, лимон!",
      "cam.act.banana.1": "Математика: раздели его на кусочки — сколько кусочков? Посчитай!",
      "cam.act.banana.2": "Чувства: понюхай, потрогай, попробуй. Сладкий и мягкий!",

      "cam.sees.car": "маленькая игрушечная машинка",
      "cam.rw.car": "Устройте гонку двух машинок по горке из подушек. Какая быстрее? Сначала предскажи!",
      "cam.act.car.0": "Физика: построй горку из книги — круче горка, быстрее машина!",
      "cam.act.car.1": "Математика: посчитай колёса. Сколько колёс у 2 машинок?",
      "cam.act.car.2": "Игра: красный свет, зелёный свет! Толкай и СТОП по команде.",

      "cam.sees.book": "книжка со сказками",
      "cam.rw.book": "Прочитай сегодня одну книгу — а потом пусть ребёнок «прочитает» её тебе.",
      "cam.act.book.0": "Речь: назови 3 предмета на обложке до того, как открыть.",
      "cam.act.book.1": "История: пусть ребёнок переворачивает страницы — он тут главный!",
      "cam.act.book.2": "Разыграйте: будьте героями с громкими и смешными голосами.",

      "cam.sees.socks": "пара носков",
      "cam.rw.socks": "В следующую стирку ребёнок становится Главным Подборщиком Носков.",
      "cam.act.socks.0": "Логика: подбор белья! Ищите пары по цвету и узору.",
      "cam.act.socks.1": "Математика: посчитай пары. 2 носка = 1 пара!",
      "cam.act.socks.2": "Чувства: мягкие, тянущиеся, тёплые — дальше носочные куклы?",

      "cam.sees.drum": "барабан",
      "cam.rw.drum": "Сделайте барабан из кастрюли и деревянной ложки — маршируйте и играйте!",
      "cam.act.drum.0": "Звук: громкие удары и тихие удары. Почувствуй разницу!",
      "cam.act.drum.1": "Ритм: повтори мой ритм — бум бум хлоп!",
      "cam.act.drum.2": "Музыка: маршируйте по комнате под свой собственный барабанный ритм."
    },

    hi: {
      "cam.aiLooking": "🤖 WonderSprout AI देख रहा है…",
      "cam.tapAnother": "👆 किसी और वस्तु को स्कैन करने के लिए टैप करें",

      "cam.sees.apple": "एक चमकता लाल सेब",
      "cam.rw.apple": "सेब को मिलकर आधा काटो — अंदर एक तारा छिपा है!",
      "cam.act.apple.0": "रंग: «क्या तुम कुछ और लाल रंग का ढूँढ़ सकते हो?»",
      "cam.act.apple.1": "गणित: मेज़ पर सेब गिनो — १, २, ३!",
      "cam.act.apple.2": "जीवन: «सेब पेड़ों पर उगते हैं, नन्हे फूलों से।»",

      "cam.sees.ball": "एक गोल, उछलती गेंद",
      "cam.rw.ball": "भौतिकी के मैदान में गेंद आज़माओ, फिर असली गेंद उछालो और तुलना करो!",
      "cam.act.ball.0": "भौतिकी: इसे घुटने से गिराओ, फिर ऊँचाई से। कौन सी उछाल बड़ी है?",
      "cam.act.ball.1": "आकार: इसे गोल घुमाओ। गेंदें गोल होती हैं — लुढ़कती हैं!",
      "cam.act.ball.2": "खेल: एक-दूसरे को लुढ़काओ और कहो «लुढ़काओ… पकड़ो!»",

      "cam.sees.leaf": "एक हरा पत्ता",
      "cam.rw.leaf": "३ अलग-अलग पत्ते जमा करो और भारी किताब में दबाकर रखो।",
      "cam.act.leaf.0": "जीवन: «पत्ते धूप पीते हैं और पेड़ को साँस लेने में मदद करते हैं।»",
      "cam.act.leaf.1": "रंग: एक हरा पत्ता, एक पीला पत्ता, एक कुरकुरा भूरा पत्ता खोजो।",
      "cam.act.leaf.2": "मौसम: पत्ते पर फूँक मारो — हवा पत्तों को नचाती है!",

      "cam.sees.cup": "एक पीने का कप",
      "cam.rw.cup": "नहाने के समय, गिनते हुए कप को ५ बार भरो और उँडेलो।",
      "cam.act.cup.0": "पानी: यह कप तैरेगा या डूबेगा? अनुमान लगाओ, फिर सुरक्षित रूप से जाँचो!",
      "cam.act.cup.1": "गणित: पानी अंदर डालो और बाहर — «भरा» और «खाली»।",
      "cam.act.cup.2": "ध्वनि: चम्मच से हल्के से टैप करो। टिंग!",

      "cam.sees.teddy": "एक गले लगाने वाला टेडी भालू",
      "cam.rw.teddy": "टेडी को शुभ रात्रि का गला लगाओ और तीन प्यारे शब्द कहो।",
      "cam.act.teddy.0": "भावनाएँ: «आज टेडी कैसा महसूस कर रहा है? खुश? उनींदा?»",
      "cam.act.teddy.1": "कल्पना: चाय पार्टी करो और टेडी के साथ बाँटो।",
      "cam.act.teddy.2": "कहानी: टेडी को चुनने दो कि WonderSprout की कौन सी कहानी पढ़ें!",

      "cam.sees.spoon": "एक चमकता धातु का चम्मच",
      "cam.rw.spoon": "३ अलग-अलग पतीलों या कटोरों पर चम्मच का कोमल ढोल बनाओ।",
      "cam.act.spoon.0": "ध्वनि: चम्मच हल्के से टैप करो — ऊँची पतीली, नीची पतीली। अलग-अलग आवाज़ें!",
      "cam.act.spoon.1": "तैरना/डूबना: धातु के चम्मच आमतौर पर डूबते हैं। पहले अनुमान लगाओ!",
      "cam.act.spoon.2": "प्रकाश: चमकदार पीठ में अपनी मज़ेदार परछाई देखो!",

      "cam.sees.banana": "एक पीला केला",
      "cam.rw.banana": "मिलकर असली केला छिलो — कौन सा आधा किसे? बाँटना भी गणित है!",
      "cam.act.banana.0": "रंग: ३ और पीली चीज़ें खोजो — सूरज, बत्तख, नींबू!",
      "cam.act.banana.1": "गणित: इसे टुकड़ों में छिलो — कितने टुकड़े? गिनो!",
      "cam.act.banana.2": "इंद्रियाँ: सूँघो, छुओ, चखो। मीठा और नरम!",

      "cam.sees.car": "एक छोटी खिलौना कार",
      "cam.rw.car": "तकिए की ढलान पर दो कारों की दौड़ लगाओ। कौन तेज़? पहले अनुमान लगाओ!",
      "cam.act.car.0": "भौतिकी: किताब से ढलान बनाओ — ज़्यादा ढलान, ज़्यादा तेज़ कार!",
      "cam.act.car.1": "गणित: पहिए गिनो। २ कारों में कितने पहिए होते हैं?",
      "cam.act.car.2": "खेल: लाल बत्ती, हरी बत्ती! संकेत पर धक्का दो और रुको।",

      "cam.sees.book": "एक कहानी की किताब",
      "cam.rw.book": "आज एक किताब पढ़ो — फिर अपने बच्चे को उसे तुम्हें «पढ़ने» दो।",
      "cam.act.book.0": "भाषा: खोलने से पहले कवर पर ३ चीज़ों के नाम बताओ।",
      "cam.act.book.1": "कहानी: बच्चे को पन्ने पलटने दो — वह बॉस है!",
      "cam.act.book.2": "अभिनय करो: बड़ी, मज़ेदार आवाज़ों में किरदार बनो।",

      "cam.sees.socks": "जुराबों की एक जोड़ी",
      "cam.rw.socks": "अगली धुलाई में, तुम्हारा बच्चा आधिकारिक जुराब मिलानकर्ता बनेगा।",
      "cam.act.socks.0": "तर्क: कपड़ों का मिलान! रंग और पैटर्न से जोड़ियाँ खोजो।",
      "cam.act.socks.1": "गणित: जोड़ियाँ गिनो। २ जुराबें = १ जोड़ी!",
      "cam.act.socks.2": "इंद्रियाँ: नरम, खिंचने वाली, गर्म — आगे जुराब की कठपुतलियाँ?",

      "cam.sees.drum": "एक ढोल",
      "cam.rw.drum": "पतीली और लकड़ी के चम्मच से ढोल बनाओ — मार्च करो और बजाओ!",
      "cam.act.drum.0": "ध्वनि: तेज़ थाप और फुसफुसाती थाप। अंतर महसूस करो!",
      "cam.act.drum.1": "लय: मेरी लय नक़ल करो — धम धम ताली!",
      "cam.act.drum.2": "संगीत: अपने ही ढोल की थाप पर कमरे में मार्च करो।"
    },

    ur: {
      "cam.aiLooking": "🤖 WonderSprout AI دیکھ رہا ہے…",
      "cam.tapAnother": "👆 کسی اور چیز کو اسکین کرنے کے لیے ٹیپ کریں",

      "cam.sees.apple": "ایک چمکتا سرخ سیب",
      "cam.rw.apple": "سیب کو مل کر آدھا کاٹیں — اندر ایک ستارہ چھپا ہے!",
      "cam.act.apple.0": "رنگ: «کیا تم کچھ اور سرخ رنگ کا ڈھونڈ سکتے ہو؟»",
      "cam.act.apple.1": "ریاضی: میز پر سیب گنیں — ۱، ۲، ۳!",
      "cam.act.apple.2": "زندگی: «سیب درختوں پر اگتے ہیں، ننھے پھولوں سے۔»",

      "cam.sees.ball": "ایک گول، اچھلتی گیند",
      "cam.rw.ball": "طبیعیات کے میدان میں گیند آزمائیں، پھر اصل گیند اچھالیں اور موازنہ کریں!",
      "cam.act.ball.0": "طبیعیات: اسے گھٹنے سے گرائیں، پھر اونچائی سے۔ کون سی اچھال بڑی ہے؟",
      "cam.act.ball.1": "شکلیں: اسے گول گھمائیں۔ گیندیں گول ہوتی ہیں — لڑھکتی ہیں!",
      "cam.act.ball.2": "کھیل: ایک دوسرے کو لڑھکائیں اور کہیں «لڑھکاؤ… پکڑو!»",

      "cam.sees.leaf": "ایک ہرا پتّا",
      "cam.rw.leaf": "۳ مختلف پتّے جمع کریں اور بھاری کتاب میں دبا کر رکھیں۔",
      "cam.act.leaf.0": "زندگی: «پتّے دھوپ پیتے ہیں اور درخت کو سانس لینے میں مدد دیتے ہیں۔»",
      "cam.act.leaf.1": "رنگ: ایک ہرا پتّا، ایک پیلا پتّا، ایک کرکرا بھورا پتّا ڈھونڈیں۔",
      "cam.act.leaf.2": "موسم: پتّے پر پھونک ماریں — ہوا پتّوں کو نچاتی ہے!",

      "cam.sees.cup": "ایک پینے کا کپ",
      "cam.rw.cup": "نہانے کے وقت، گنتے ہوئے کپ کو ۵ بار بھریں اور انڈیلیں۔",
      "cam.act.cup.0": "پانی: کیا یہ کپ تیرے گا یا ڈوبے گا؟ اندازہ لگائیں، پھر حفاظت سے آزمائیں!",
      "cam.act.cup.1": "ریاضی: پانی اندر ڈالیں اور باہر — «بھرا» اور «خالی»۔",
      "cam.act.cup.2": "آواز: چمچ سے ہلکے سے ٹیپ کریں۔ ٹنگ!",

      "cam.sees.teddy": "ایک گلے لگانے والا ٹیڈی بیئر",
      "cam.rw.teddy": "ٹیڈی کو شب بخیر کا گلہ لگائیں اور تین پیارے الفاظ کہیں۔",
      "cam.act.teddy.0": "جذبات: «آج ٹیڈی کیسا محسوس کر رہا ہے؟ خوش؟ نیند والا؟»",
      "cam.act.teddy.1": "خیال: چائے پارٹی کریں اور ٹیڈی کے ساتھ بانٹیں۔",
      "cam.act.teddy.2": "کہانی: ٹیڈی کو چننے دیں کہ WonderSprout کی کون سی کہانی پڑھیں!",

      "cam.sees.spoon": "ایک چمکتا دھاتی چمچ",
      "cam.rw.spoon": "۳ مختلف دیگچیوں یا پیالوں پر چمچ کا نرم ڈھول بنائیں۔",
      "cam.act.spoon.0": "آواز: چمچ ہلکے سے ٹیپ کریں — اونچی دیگچی، نیچی دیگچی۔ مختلف آوازیں!",
      "cam.act.spoon.1": "تیرنا/ڈوبنا: دھاتی چمچ عام طور پر ڈوبتے ہیں۔ پہلے اندازہ لگائیں!",
      "cam.act.spoon.2": "روشنی: چمکدار پچھلی طرف اپنا مزاحیہ عکس دیکھیں!",

      "cam.sees.banana": "ایک پیلا کیلا",
      "cam.rw.banana": "مل کر اصل کیلا چھیلیں — کون سا آدھا کسے؟ بانٹنا بھی ریاضی ہے!",
      "cam.act.banana.0": "رنگ: ۳ اور پیلی چیزیں ڈھونڈیں — سورج، بطخ، لیموں!",
      "cam.act.banana.1": "ریاضی: اسے ٹکڑوں میں چھیلیں — کتنے ٹکڑے؟ گنیں!",
      "cam.act.banana.2": "حواس: سونگھیں، چھوئیں، چکھیں۔ میٹھا اور نرم!",

      "cam.sees.car": "ایک چھوٹی کھلونا کار",
      "cam.rw.car": "تکیے کی ڈھلوان پر دو کاروں کی دوڑ لگائیں۔ کون تیز؟ پہلے اندازہ لگائیں!",
      "cam.act.car.0": "طبیعیات: کتاب سے ڈھلوان بنائیں — زیادہ ڈھلوان، زیادہ تیز کار!",
      "cam.act.car.1": "ریاضی: پہیے گنیں۔ ۲ کاروں میں کتنے پہیے ہوتے ہیں؟",
      "cam.act.car.2": "کھیل: لال بتی، ہری بتی! اشارے پر دھکیلیں اور رکیں۔",

      "cam.sees.book": "ایک کہانی کی کتاب",
      "cam.rw.book": "آج ایک کتاب پڑھیں — پھر اپنے بچے کو اسے آپ کو «پڑھنے» دیں۔",
      "cam.act.book.0": "زبان: کھولنے سے پہلے جلد پر ۳ چیزوں کے نام بتائیں۔",
      "cam.act.book.1": "کہانی: بچے کو صفحے پلٹنے دیں — وہ باس ہے!",
      "cam.act.book.2": "اداکاری کریں: بڑی، مزاحیہ آوازوں میں کردار بنیں۔",

      "cam.sees.socks": "جوراوں کا ایک جوڑا",
      "cam.rw.socks": "اگلی دھلائی میں، آپ کا بچہ سرکاری جورا ملانے والا بنے گا۔",
      "cam.act.socks.0": "منطق: کپڑوں کا ملاپ! رنگ اور نقش سے جوڑے ڈھونڈیں۔",
      "cam.act.socks.1": "ریاضی: جوڑے گنیں۔ ۲ جورے = ۱ جوڑا!",
      "cam.act.socks.2": "حواس: نرم، کھنچنے والے، گرم — آگے جوروں کی کٹھ پتلیاں؟",

      "cam.sees.drum": "ایک ڈھول",
      "cam.rw.drum": "دیگچی اور لکڑی کے چمچ سے ڈھول بنائیں — مارچ کریں اور بجائیں!",
      "cam.act.drum.0": "آواز: تیز تھاپ اور سرگوشی والی تھاپ۔ فرق محسوس کریں!",
      "cam.act.drum.1": "لے: میری لے نقل کریں — دھم دھم تالی!",
      "cam.act.drum.2": "موسیقی: اپنے ہی ڈھول کی تھاپ پر کمرے میں مارچ کریں۔"
    },

    tr: {
      "cam.aiLooking": "🤖 WonderSprout yapay zekâsı bakıyor…",
      "cam.tapAnother": "👆 Taramak için başka bir nesneye dokun",

      "cam.sees.apple": "parlak kırmızı bir elma",
      "cam.rw.apple": "Elmayı birlikte ikiye kesin — içinde gizli bir yıldız var!",
      "cam.act.apple.0": "Renk: «Başka KIRMIZI bir şey bulabilir misin?»",
      "cam.act.apple.1": "Matematik: masadaki elmaları say — 1, 2, 3!",
      "cam.act.apple.2": "Yaşam: «Elmalar ağaçlarda, minicik çiçeklerden büyür.»",

      "cam.sees.ball": "yuvarlak, zıplayan bir top",
      "cam.rw.ball": "Topu Fizik Oyun Alanı'nda dene, sonra GERÇEK topu zıplat ve karşılaştır!",
      "cam.act.ball.0": "Fizik: dizinden bırak, sonra yüksekten. Hangi zıplama daha büyük?",
      "cam.act.ball.1": "Şekil: daire içinde yuvarla. Toplar yuvarlaktır — yuvarlanırlar!",
      "cam.act.ball.2": "Oyun: birbirinize yuvarlayın ve «yuvarla… yakala!» deyin.",

      "cam.sees.leaf": "yeşil bir yaprak",
      "cam.rw.leaf": "3 farklı yaprak topla ve kalın bir kitapta presle.",
      "cam.act.leaf.0": "Yaşam: «Yapraklar güneşi içer ve ağacın nefes almasına yardım eder.»",
      "cam.act.leaf.1": "Renk: yeşil bir yaprak, sarı bir yaprak, çıtır kahverengi bir yaprak bul.",
      "cam.act.leaf.2": "Hava: yaprağa üfle — rüzgâr yaprakları dans ettirir!",

      "cam.sees.cup": "bir içme bardağı",
      "cam.rw.cup": "Banyo zamanı, sayarken bardağı 5 kez doldur ve dök.",
      "cam.act.cup.0": "Su: bu bardak yüzer mi batar mı? Tahmin et, sonra güvenle dene!",
      "cam.act.cup.1": "Matematik: suyu içine ve dışına dök — «dolu» ve «boş».",
      "cam.act.cup.2": "Ses: kaşıkla hafifçe vur. Tıng!",

      "cam.sees.teddy": "sarılası bir oyuncak ayı",
      "cam.rw.teddy": "Teddy'ye iyi geceler sarılması ver ve üç nazik söz söyle.",
      "cam.act.teddy.0": "Duygular: «Teddy bugün nasıl hissediyor? Mutlu mu? Uykulu mu?»",
      "cam.act.teddy.1": "Hayal: çay partisi yapın ve Teddy ile paylaşın.",
      "cam.act.teddy.2": "Hikâye: hangi WonderSprout hikâyesini okuyacağımıza Teddy karar versin!",

      "cam.sees.spoon": "parlak metal bir kaşık",
      "cam.rw.spoon": "3 farklı tencere veya kâsede kaşıkla yumuşak bir davul yapın.",
      "cam.act.spoon.0": "Ses: kaşıklara hafifçe vur — yüksek tencere, alçak tencere. Farklı sesler!",
      "cam.act.spoon.1": "Yüzer/batar: metal kaşıklar genelde batar. Önce tahmin et!",
      "cam.act.spoon.2": "Işık: parlak arkadaki komik yansımana bak!",

      "cam.sees.banana": "sarı bir muz",
      "cam.rw.banana": "Gerçek bir muzu birlikte soyun — hangi yarı kime? Paylaşmak da matematik!",
      "cam.act.banana.0": "Renk: 3 sarı şey daha bul — güneş, ördek, limon!",
      "cam.act.banana.1": "Matematik: parçalara ayır — kaç parça? Say!",
      "cam.act.banana.2": "Duyular: kokla, dokun, tat. Tatlı ve yumuşak!",

      "cam.sees.car": "küçük bir oyuncak araba",
      "cam.rw.car": "İki arabayı yastık rampasından yarıştırın. Hangisi daha hızlı? Önce tahmin et!",
      "cam.act.car.0": "Fizik: kitaptan bir rampa yap — daha dik rampa, daha hızlı araba!",
      "cam.act.car.1": "Matematik: tekerlekleri say. 2 arabanın kaç tekerleği var?",
      "cam.act.car.2": "Oyun: kırmızı ışık, yeşil ışık! Komutla it ve DUR.",

      "cam.sees.book": "bir hikâye kitabı",
      "cam.rw.book": "Bugün bir kitap oku — sonra çocuğunun sana «okumasına» izin ver.",
      "cam.act.book.0": "Dil: açmadan önce kapaktaki 3 şeyi söyle.",
      "cam.act.book.1": "Hikâye: çocuğunun sayfaları çevirmesine izin ver — patron o!",
      "cam.act.book.2": "Canlandırın: büyük, komik seslerle karakterler olun.",

      "cam.sees.socks": "bir çift çorap",
      "cam.rw.socks": "Bir sonraki çamaşırda çocuğun Resmî Çorap Eşleştiricisi olur.",
      "cam.act.socks.0": "Mantık: çamaşır eşleştirme! Renk ve desene göre çift bul.",
      "cam.act.socks.1": "Matematik: çiftleri say. 2 çorap = 1 çift!",
      "cam.act.socks.2": "Duyular: yumuşak, esnek, sıcak — sırada çorap kuklalar mı?",

      "cam.sees.drum": "bir davul",
      "cam.rw.drum": "Tencere ve tahta kaşıktan bir davul yap — marş yap ve çal!",
      "cam.act.drum.0": "Ses: yüksek vuruşlar ve fısıltı vuruşları. Farkı hisset!",
      "cam.act.drum.1": "Ritim: ritmimi taklit et — bum bum alkış!",
      "cam.act.drum.2": "Müzik: kendi davul ritminle odada marş yap."
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
