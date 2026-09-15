/* WonderSprout learning content — ZH / PT / RU / HI / UR / TR */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  WSI18n.extend("zh", {
    t: { color: ["颜色实验室", "找一找，混一混！"], math: ["数学实验室", "数一数，比一比！"], physics: ["物理游戏", "丢一丢，弹一弹！"], sound: ["声音实验室", "玩一玩，听一听！"], life: ["生命实验室", "种一棵植物！"], weather: ["天气世界", "太阳、雨和风！"], space: ["太空世界", "地球、月亮和太阳！"], water: ["沉与浮", "先猜一猜再玩水！"], shapes: ["形状探险", "找到这些形状！"], pattern: ["规律派对", "接下来是什么？"], sorting: ["分类站", "分一分！"], animals: ["动物朋友", "听听它们说话！"], shadows: ["影子游戏", "光和影！"], flags: ["国旗与国家", "全世界195面国旗！"], english: ["英语启蒙", "单词和小句子！"] },
    i: {
      color: [["红色", "这是红色！像苹果！"], ["蓝色", "这是蓝色！像天空！"], ["黄色", "这是黄色！像太阳！"], ["绿色", "这是绿色！像小草！"], ["粉色", "这是粉色！像火烈鸟！"], ["棕色", "这是棕色！像泰迪熊！"], ["青绿色", "这是青色！像鸭蛋！"], ["淡紫色", "这是淡紫色！像小花！"]],
      math: [["一", "一个苹果！一！"], ["二", "两个苹果！一、二！"], ["三", "三个苹果！一、二、三！"], ["…到20！", "一、二、三——一直数到二十！"]],
      physics: [["掉下去！", "放开它，它就掉下去！"], ["弹起来！", "碰到地面，砰地弹起来！"]],
      sound: [["大声！", "大声！像狮子！吼！"], ["小声…", "小声…像小老鼠。嘘。"], ["高和低音", "小鸟唱得高！鼓声低！"]],
      life: [["种子", "小小的种子睡在土里。"], ["发芽", "水和太阳说：你好，小芽！"], ["长大了！", "长大了！又大又亮！"]],
      weather: [["晴天", "晴天！暖暖亮亮！"], ["下雨", "下雨！滴答滴答！"], ["刮风", "刮风！呼——叶子跳舞！"]],
      space: [["地球", "地球！我们的家，蓝色的！"], ["月亮", "月亮！她一次又一次来看我们！"], ["太阳", "太阳！白天的星星！"]],
      water: [["浮", "浮！像小船一样停在上面！"], ["沉", "沉！像石头一样往下！"]],
      shapes: [["圆形", "圆形！圆圆的像盘子！"], ["正方形", "正方形！四条直边像盒子！"], ["三角形", "三角形！三个角像一块披萨！"]],
      pattern: [["规律！", "红、蓝、红、蓝！它在重复！"], ["接下来？", "接下来是什么？你能猜！"]],
      sorting: [["分类！", "袜子和袜子放一起！"], ["分组！", "衬衫和衬衫放一起！"]],
      animals: [["奶牛", "奶牛！奶牛说哞！"], ["绵羊", "绵羊！绵羊说咩！"], ["狗", "狗！狗说汪汪！"]],
      shadows: [["光", "光像箭一样走直线！"], ["影子", "小熊挡住光，就有了影子！"]],
    },
    p: { tapColour: "点{c}气球！", wrongColour: "这是{c}。找{t}！", countApples: "点所有的苹果！🍎", byTens: "十个十个数！点篮子！🧺", bigger: "点更大的数！", smaller: "点更小的数！", moreLess: "点有{m}块饼干的盘子！🍪", tapShape: "点{s}！", wrongShape: "这是{c}。找{t}！", whatNext: "接下来是什么？🔮", whereGo: "{x}去哪里？", splashIn: "点一个东西溅进水里！💦", predict: "猜一猜！{x}会沉还是浮？", findAnimal: "点{a}！🔎", whoSays: "谁说{s}？🔊", whoShadow: "这是谁的影子？🔦", makeX: "做出{x}！点原料！", whichFlag: "哪面是{c}的国旗？", whichCountry: "这面国旗是哪个国家的？", tapWord: "点{w}！🔊", hearWord: "点图片，听单词！🔊", buildWords: "按顺序点单词！🧩", allFound: "全部找到啦！🎉" },
  });

  WSI18n.extend("pt", {
    t: { color: ["Laboratório de Cores", "Ache e misture!"], math: ["Laboratório de Matemática", "Conte e compare!"], physics: ["Brincadeira de Física", "Solte e quique!"], sound: ["Laboratório de Sons", "Toque e escute!"], life: ["Laboratório da Vida", "Cultive uma planta!"], weather: ["Mundo do Clima", "Sol, chuva e vento!"], space: ["Mundo Espacial", "Terra, Lua e Sol!"], water: ["Flutua ou afunda", "Adivinhe e respingue!"], shapes: ["Safari de Formas", "Ache as formas!"], pattern: ["Festa de Padrões", "O que vem depois?"], sorting: ["Estação de Separar", "Separe tudo!"], animals: ["Amigos Animais", "Ouça-os falar!"], shadows: ["Teatro de Sombras", "Luz e sombra!"], flags: ["Bandeiras e Países", "As 195 bandeiras!"], english: ["Primeiro Inglês", "Palavras e frases!"] },
    i: {
      color: [["VERMELHO", "Isto é vermelho! Como uma maçã!"], ["AZUL", "Isto é azul! Como o céu!"], ["AMARELO", "Isto é amarelo! Como o sol!"], ["VERDE", "Isto é verde! Como grama!"], ["ROSA", "Isto é rosa! Como um flamingo!"], ["MARROM", "Isto é marrom! Como um ursinho!"], ["AZUL-ESVERDEADO", "Isto é turquesa! Como um ovo de pata!"], ["LILÁS", "Isto é lilás! Como a flor!"]],
      math: [["UM", "Uma maçã! Um!"], ["DOIS", "Duas maçãs! Um, dois!"], ["TRÊS", "Três maçãs! Um, dois, três!"], ["…ATÉ 20!", "Um, dois, três… até vinte!"]],
      physics: [["CAI!", "Solte — e cai!"], ["QUICA!", "Bate no chão e boing!"]],
      sound: [["ALTO!", "Alto! Como um leão! Roar!"], ["baixinho…", "Baixinho… como um ratinho. Shhh."], ["AGUDO E GRAVE", "Pássaros cantam agudo! Tambores grave!"]],
      life: [["SEMENTE", "Uma sementinha dorme na terra."], ["BROTO", "Água e sol dizem: olá, broto!"], ["CRESCEU!", "Cresceu! Grande e brilhante!"]],
      weather: [["ENSOLARADO", "Ensolarado! Quente e claro!"], ["CHUVOSO", "Chuvoso! Plic, plic, plic!"], ["VENTANDO", "Ventando! Fuuu! As folhas dançam!"]],
      space: [["TERRA", "A Terra! Nossa casa azul!"], ["LUA", "A Lua! Ela visita sempre!"], ["SOL", "O Sol! Nossa estrela do dia!"]],
      water: [["FLUTUA", "Flutua! Fica em cima como um barco!"], ["AFUNDA", "Afunda! Desce como uma pedra!"]],
      shapes: [["CÍRCULO", "Círculo! Redondo como um prato!"], ["QUADRADO", "Quadrado! Quatro lados retos como uma caixa!"], ["TRIÂNGULO", "Triângulo! Três pontas como uma pizza!"]],
      pattern: [["UM PADRÃO!", "Vermelho, azul, vermelho, azul! Repete!"], ["E AGORA?", "O que vem depois? Você adivinha!"]],
      sorting: [["SEPARE!", "Meias com meias!"], ["GRUPOS!", "Camisas com camisas! Fazemos grupos!"]],
      animals: [["VACA", "A vaca! Ela diz muuu!"], ["OVELHA", "A ovelha! Ela diz béé!"], ["CACHORRO", "O cachorro! Ele diz au au!"]],
      shadows: [["LUZ", "A luz viaja reta como uma flecha!"], ["SOMBRA", "O ursinho bloqueia a luz e faz sombra!"]],
    },
    p: { tapColour: "Toque no balão {c}!", wrongColour: "É {c}. Ache o {t}!", countApples: "Toque todas as maçãs! 🍎", byTens: "Conte de DEZ em DEZ! 🧺", bigger: "Toque no número MAIOR!", smaller: "Toque no número MENOR!", moreLess: "Toque no prato com {m} biscoitos! 🍪", tapShape: "Toque no {s}!", wrongShape: "É um {c}. Ache o {t}!", whatNext: "O que vem depois? 🔮", whereGo: "Onde vai o {x}?", splashIn: "Toque num objeto para respingar! 💦", predict: "Adivinhe! O {x} afunda ou flutua?", findAnimal: "Toque no {a}! 🔎", whoSays: "Quem faz {s}? 🔊", whoShadow: "Quem faz esta sombra? 🔦", makeX: "Faça {x}! Toque nos ingredientes!", whichFlag: "Qual bandeira é do {c}?", whichCountry: "De qual país é esta bandeira?", tapWord: "Toque na {w}! 🔊", hearWord: "Toque na figura — ouça a palavra! 🔊", buildWords: "Toque nas palavras em ordem! 🧩", allFound: "Você achou todos! 🎉" },
  });

  WSI18n.extend("ru", {
    t: { color: ["Лаборатория цвета", "Найди и смешай!"], math: ["Математическая лаборатория", "Считай и сравнивай!"], physics: ["Физика-игра", "Брось — прыг!"], sound: ["Лаборатория звука", "Играй и слушай!"], life: ["Лаборатория жизни", "Вырасти растение!"], weather: ["Мир погоды", "Солнце, дождь и ветер!"], space: ["Космос", "Земля, Луна и Солнце!"], water: ["Плавает или тонет", "Угадай и плюх!"], shapes: ["Сафари фигур", "Найди фигуры!"], pattern: ["Праздник узоров", "Что дальше?"], sorting: ["Станция сортировки", "Сортируй всё!"], animals: ["Друзья-животные", "Послушай их!"], shadows: ["Теневой театр", "Свет и тень!"], flags: ["Флаги и страны", "Все 195 флагов!"], english: ["Первый английский", "Слова и фразы!"] },
    i: {
      color: [["КРАСНЫЙ", "Это красный! Как яблоко!"], ["СИНИЙ", "Это синий! Как небо!"], ["ЖЁЛТЫЙ", "Это жёлтый! Как солнце!"], ["ЗЕЛЁНЫЙ", "Это зелёный! Как трава!"], ["РОЗОВЫЙ", "Это розовый! Как фламинго!"], ["КОРИЧНЕВЫЙ", "Это коричневый! Как мишка!"], ["БИРЮЗОВЫЙ", "Это бирюзовый! Как утиное яйцо!"], ["СИРЕНЕВЫЙ", "Это сиреневый! Как цветок!"]],
      math: [["ОДИН", "Одно яблоко! Один!"], ["ДВА", "Два яблока! Один, два!"], ["ТРИ", "Три яблока! Один, два, три!"], ["…ДО 20!", "Раз, два, три — до двадцати!"]],
      physics: [["ПАДАЕТ!", "Отпусти — и упадёт!"], ["ПРЫГ!", "Стук о пол — и прыг!"]],
      sound: [["ГРОМКО!", "Громко! Как лев! Ррр!"], ["тихо…", "Тихо… как мышка. Тшш."], ["ВЫСОКО И НИЗКО", "Птицы поют высоко! Барабаны низко!"]],
      life: [["СЕМЯНКО", "Маленькое семечко спит в земле."], ["РОСТОК", "Вода и солнце говорят: привет, росток!"], ["ВЫРОСЛО!", "Выросло! Большое и яркое!"]],
      weather: [["СОЛНЕЧНО", "Солнечно! Тепло и ярко!"], ["ДОЖДЬ", "Дождь! Кап-кап-кап!"], ["ВЕТЕР", "Ветер! Ууу! Листья танцуют!"]],
      space: [["ЗЕМЛЯ", "Земля! Наш дом. Голубая!"], ["ЛУНА", "Луна! Она прилетает снова и снова!"], ["СОЛНЦЕ", "Солнце! Наша дневная звезда!"]],
      water: [["ПЛАВАЕТ", "Плавает! Держится сверху, как лодка!"], ["ТОНЕТ", "Тонет! Идёт ко дну, как камень!"]],
      shapes: [["КРУГ", "Круг! Круглый как тарелка!"], ["КВАДРАТ", "Квадрат! Четыре стороны, как коробка!"], ["ТРЕУГОЛЬНИК", "Треугольник! Три угла, как кусок пиццы!"]],
      pattern: [["УЗОР!", "Красный, синий, красный, синий! Повторяется!"], ["ЧТО ДАЛЬШЕ?", "Что дальше? Ты угадаешь!"]],
      sorting: [["СОРТИРУЙ!", "Носки к носкам!"], ["ГРУППЫ!", "Рубашки к рубашкам!"]],
      animals: [["КОРОВА", "Корова! Она говорит му!"], ["ОВЦА", "Овца! Она говорит бе!"], ["СОБАКА", "Собака! Она говорит гав-гав!"]],
      shadows: [["СВЕТ", "Свет летит прямо, как стрела!"], ["ТЕНЬ", "Мишка закрывает свет — и получается тень!"]],
    },
    p: { tapColour: "Нажми на {c} шарик!", wrongColour: "Это {c}. Найди {t}!", countApples: "Нажми все яблоки! 🍎", byTens: "Считай ДЕСЯТКАМИ! 🧺", bigger: "Нажми БОЛЬШЕЕ число!", smaller: "Нажми МЕНЬШЕЕ число!", moreLess: "Нажми тарелку, где {m} печений! 🍪", tapShape: "Нажми на {s}!", wrongShape: "Это {c}. Найди {t}!", whatNext: "Что дальше? 🔮", whereGo: "Куда идёт {x}?", splashIn: "Нажми на предмет — плюх! 💦", predict: "Угадай! {x} тонет или плавает?", findAnimal: "Нажми на {a}! 🔎", whoSays: "Кто говорит {s}? 🔊", whoShadow: "Чья это тень? 🔦", makeX: "Сделай {x}! Нажми на ингредиенты!", whichFlag: "Чей это флаг — {c}?", whichCountry: "Какой стране принадлежит этот флаг?", tapWord: "Нажми на {w}! 🔊", hearWord: "Нажми на картинку — услышь слово! 🔊", buildWords: "Нажимай слова по порядку! 🧩", allFound: "Ты всё нашёл! 🎉" },
  });

  WSI18n.extend("hi", {
    t: { color: ["रंग प्रयोगशाला", "ढूँढो और मिलाओ!"], math: ["गणित प्रयोगशाला", "गिनो और तुलना करो!"], physics: ["भौतिकी खेल", "गिराओ और उछालो!"], sound: ["ध्वनि प्रयोगशाला", "बजाओ और सुनो!"], life: ["जीवन प्रयोगशाला", "पौधा उगाओ!"], weather: ["मौसम की दुनिया", "धूप, बारिश और हवा!"], space: ["अंतरिक्ष लोक", "धरती, चाँद और सूरज!"], water: ["तैरे या डूबे", "पहले सोचो, फिर छपाक!"], shapes: ["आकृति सफारी", "आकृतियाँ ढूँढो!"], pattern: ["पैटर्न पार्टी", "आगे क्या आएगा?"], sorting: ["छँटाई स्टेशन", "अलग-अलग करो!"], animals: ["पशु मित्र", "इनकी बोलियाँ सुनो!"], shadows: ["परछाईं खेल", "रोशनी और छाया!"], flags: ["झंडे और देश", "सारे 195 झंडे!"], english: ["पहली अंग्रेज़ी", "शब्द और छोटे वाक्य!"] },
    i: {
      color: [["लाल", "यह लाल है! सेब जैसा!"], ["नीला", "यह नीला है! आसमान जैसा!"], ["पीला", "यह पीला है! सूरज जैसा!"], ["हरा", "यह हरा है! घास जैसा!"], ["गुलाबी", "यह गुलाबी है! फ्लेमिंगो जैसा!"], ["भूरा", "यह भूरा है! टेडी भालू जैसा!"], ["फ़िरोज़ी", "यह फ़िरोज़ी है! बत्तख के अंडे जैसा!"], ["बैंगनी हल्का", "यह लावेंडर है! फूल जैसा!"]],
      math: [["एक", "एक सेब! एक!"], ["दो", "दो सेब! एक, दो!"], ["तीन", "तीन सेब! एक, दो, तीन!"], ["…बीस तक!", "एक, दो, तीन — बीस तक!"]],
      physics: [["गिराओ!", "छोड़ो — और गिर जाए!"], ["उछलो!", "फ़र्श से टकराकर बोइंग!"]],
      sound: [["ऊँचा!", "ऊँचा! शेर जैसा! रॉर!"], ["धीमे…", "धीमे… नन्हे चूहे जैसा। श्श।"], ["तीखा और भारी", "चिड़िया ऊँचा गाती है! ढोल भारी!"]],
      life: [["बीज", "नन्हा बीज मिट्टी में सो रहा है।"], ["अंकुर", "पानी और सूरज कहें: नमस्ते अंकुर!"], ["बढ़ गया!", "बढ़ गया! बड़ा और चमकीला!"]],
      weather: [["धूप", "धूप! गर्म और चमकीला!"], ["बारिश", "बारिश! टप-टप-टप!"], ["हवा", "हवा! सर्रर! पत्ते नाचें!"]],
      space: [["धरती", "धरती! हमारा नीला घर!"], ["चाँद", "चाँद! बार-बार आता है!"], ["सूरज", "सूरज! हमारा दिन का तारा!"]],
      water: [["तैरे", "तैरे! नाव की तरह ऊपर!"], ["डूबे", "डूबे! पत्थर की तरह नीचे!"]],
      shapes: [["गोला", "गोला! थाली जैसा गोल!"], ["वर्ग", "वर्ग! चार सीधी भुजाएँ, डिब्बे जैसी!"], ["त्रिभुज", "त्रिभुज! तीन कोने, पिज़्ज़ा जैसे!"]],
      pattern: [["पैटर्न!", "लाल, नीला, लाल, नीला! दोहरता है!"], ["आगे क्या?", "आगे क्या आएगा? तुम बताओ!"]],
      sorting: [["छाँटो!", "मोज़े मोज़ों के साथ!"], ["समूह!", "कमीज़ कमीज़ों के साथ!"]],
      animals: [["गाय", "गाय! गाय कहती है मू-मू!"], ["भेड़", "भेड़! भेड़ कहती है मिमियाहट!"], ["कुत्ता", "कुत्ता! कुत्ता कहता है भौ-भौ!"]],
      shadows: [["रोशनी", "रोशनी तीर की तरह सीधी चलती है!"], ["परछाईं", "टेडी रोशनी रोकता है — परछाईं बनती है!"]],
    },
    p: { tapColour: "{c} गुब्बारा दबाओ!", wrongColour: "यह {c} है। {t} ढूँढो!", countApples: "सारे सेब दबाओ! 🍎", byTens: "दस-दस गिनो! टोकरी दबाओ! 🧺", bigger: "बड़ी संख्या दबाओ!", smaller: "छोटी संख्या दबाओ!", moreLess: "{m} कुकीज़ वाली प्लेट दबाओ! 🍪", tapShape: "{s} दबाओ!", wrongShape: "यह {c} है। {t} ढूँढो!", whatNext: "आगे क्या? 🔮", whereGo: "{x} कहाँ जाएगा?", splashIn: "छपाक के लिए कोई चीज़ दबाओ! 💦", predict: "सोचो! {x} डूबेगा या तैरेगा?", findAnimal: "{a} दबाओ! 🔎", whoSays: "{s} कौन कहता है? 🔊", whoShadow: "यह परछाईं किसकी है? 🔦", makeX: "{x} बनाओ! सामग्री दबाओ!", whichFlag: "{c} का झंडा कौन-सा है?", whichCountry: "यह झंडा किस देश का है?", tapWord: "{w} दबाओ! 🔊", hearWord: "चित्र दबाओ — शब्द सुनो! 🔊", buildWords: "शब्दों को क्रम से दबाओ! 🧩", allFound: "सब मिल गए! 🎉" },
  });

  WSI18n.extend("ur", {
    t: { color: ["رنگوں کی لیب", "ڈھونڈو اور ملاؤ!"], math: ["حساب کی لیب", "گنو اور مقابلہ کرو!"], physics: ["طبیعات کھیل", "گراؤ اور اچھالو!"], sound: ["آواز کی لیب", "بجاؤ اور سنو!"], life: ["زندگی کی لیب", "پودا اگاؤ!"], weather: ["موسم کی دنیا", "دھوپ، بارش اور ہوا!"], space: ["خلا کی دنیا", "زمین، چاند اور سورج!"], water: ["تیرے یا ڈوبے", "پہلے سوچو، پھر چھپاک!"], shapes: ["شکلوں کی سیر", "شکلیں ڈھونڈو!"], pattern: ["پیٹرن پارٹی", "آگے کیا آئے گا؟"], sorting: ["چھانٹی اسٹیشن", "الگ الگ کرو!"], animals: ["جانور دوست", "ان کی آوازیں سنو!"], shadows: ["سایہ کھیل", "روشنی اور سایہ!"], flags: ["جھنڈے اور ملک", "سب 195 جھنڈے!"], english: ["پہلی انگریزی", "الفاظ اور چھوٹے جملے!"] },
    i: {
      color: [["لال", "یہ لال ہے! سیب جیسا!"], ["نیلا", "یہ نیلا ہے! آسمان جیسا!"], ["پیلا", "یہ پیلا ہے! سورج جیسا!"], ["سبز", "یہ سبز ہے! گھاس جیسا!"], ["گلابی", "یہ گلابی ہے! فلیمنگو جیسا!"], ["بھورا", "یہ بھورا ہے! ٹیڈی ریچھ جیسا!"], ["فیروزی", "یہ فیروزی ہے! بطخ کے انڈے جیسا!"], ["ہلکا جامنی", "یہ لیونڈر ہے! پھول جیسا!"]],
      math: [["ایک", "ایک سیب! ایک!"], ["دو", "دو سیب! ایک، دو!"], ["تین", "تین سیب! ایک، دو، تین!"], ["…بیس تک!", "ایک، دو، تین — بیس تک!"]],
      physics: [["گراؤ!", "چھوڑو — اور گر جائے!"], ["اچھلو!", "فرش سے ٹکرا کر بوئنگ!"]],
      sound: [["اونچا!", "اونچا! شیر جیسا!"], ["آہستہ…", "آہستہ… ننھے چوہے جیسا۔ شش۔"], ["تیز اور بھاری", "چڑیا اونچا گاتی ہے! ڈھول بھاری!"]],
      life: [["بیج", "ننھا بیج مٹی میں سو رہا ہے۔"], ["اَنکُر", "پانی اور سورج کہیں: سلام اَنکُر!"], ["بڑھ گیا!", "بڑھ گیا! بڑا اور چمکیلا!"]],
      weather: [["دھوپ", "دھوپ! گرم اور روشن!"], ["بارش", "بارش! ٹپ ٹپ ٹپ!"], ["ہوا", "ہوا! سرسر! پتے ناچیں!"]],
      space: [["زمین", "زمین! ہمارا نیلا گھر!"], ["چاند", "چاند! بار بار آتا ہے!"], ["سورج", "سورج! دن کا تارہ!"]],
      water: [["تیرے", "تیرے! کشتی کی طرح اوپر!"], ["ڈوبے", "ڈوبے! پتھر کی طرح نیچے!"]],
      shapes: [["گول", "گول! پلیٹ جیسا!"], ["مربع", "مربع! چار سیدھی جانبیں، ڈبے جیسی!"], ["تکون", "تکون! تین کونے، پیزا جیسے!"]],
      pattern: [["پیٹرن!", "لال، نیلا، لال، نیلا! دہرتا ہے!"], ["آگے کیا؟", "آگے کیا آئے گا؟ تم بتاؤ!"]],
      sorting: [["چھانٹو!", "موزے موزوں کے ساتھ!"], ["گروہ!", "قمیضیں قمیضوں کے ساتھ!"]],
      animals: [["گائے", "گائے! گائے کہتی ہے رنبھانا!"], ["بھیڑ", "بھیڑ! بھیڑ کہتی ہے مں مں!"], ["کتا", "کتا! کتا کہتا ہے بھو بھو!"]],
      shadows: [["روشنی", "روشنی تیر کی طرح سیدھی چلتی ہے!"], ["سایہ", "ٹیڈی روشنی روکتا ہے — سایہ بنتا ہے!"]],
    },
    p: { tapColour: "{c} غبارہ دباؤ!", wrongColour: "یہ {c} ہے۔ {t} ڈھونڈو!", countApples: "سارے سیب دباؤ! 🍎", byTens: "دس دس گنو! ٹوکری دباؤ! 🧺", bigger: "بڑا نمبر دباؤ!", smaller: "چھوٹا نمبر دباؤ!", moreLess: "{m} کوکیز والی پلیٹ دباؤ! 🍪", tapShape: "{s} دباؤ!", wrongShape: "یہ {c} ہے۔ {t} ڈھونڈو!", whatNext: "آگے کیا؟ 🔮", whereGo: "{x} کہاں جائے گا؟", splashIn: "چھپاک کے لیے کوئی چیز دباؤ! 💦", predict: "سوچو! {x} ڈوبے گا یا تیرے گا؟", findAnimal: "{a} دباؤ! 🔎", whoSays: "{s} کون کہتا ہے؟ 🔊", whoShadow: "یہ سایہ کس کا ہے؟ 🔦", makeX: "{x} بناؤ! اجزاء دباؤ!", whichFlag: "{c} کا جھنڈا کون سا ہے؟", whichCountry: "یہ جھنڈا کس ملک کا ہے؟", tapWord: "{w} دباؤ! 🔊", hearWord: "تصویر دباؤ — لفظ سنو! 🔊", buildWords: "الفاظ کو ترتیب سے دباؤ! 🧩", allFound: "سب مل گئے! 🎉" },
  });

  WSI18n.extend("tr", {
    t: { color: ["Renk Laboratuvarı", "Bul ve karıştır!"], math: ["Matematik Laboratuvarı", "Say ve karşılaştır!"], physics: ["Fizik Oyunu", "Bırak ve zıplat!"], sound: ["Ses Laboratuvarı", "Çal ve dinle!"], life: ["Yaşam Laboratuvarı", "Bitki yetiştir!"], weather: ["Hava Dünyası", "Güneş, yağmur ve rüzgâr!"], space: ["Uzay Dünyası", "Dünya, Ay ve Güneş!"], water: ["Yüzer mi batar mı", "Tahmin et ve şaplat!"], shapes: ["Şekil Safarisi", "Şekilleri bul!"], pattern: ["Desen Partisi", "Sırada ne var?"], sorting: ["Ayıklama İstasyonu", "Ayır bakalım!"], animals: ["Hayvan Dostlar", "Konuştuklarını duy!"], shadows: ["Gölge Oyunu", "Işık ve gölge!"], flags: ["Bayraklar ve Ülkeler", "195 bayrağın tümü!"], english: ["İlk İngilizce", "Kelimeler ve cümleler!"] },
    i: {
      color: [["KIRMIZI", "Bu kırmızı! Elma gibi!"], ["MAVİ", "Bu mavi! Gökyüzü gibi!"], ["SARI", "Bu sarı! Güneş gibi!"], ["YEŞİL", "Bu yeşil! Çimen gibi!"], ["PEMBE", "Bu pembe! Flamingo gibi!"], ["KAHVERENGİ", "Bu kahverengi! Oyuncak ayı gibi!"], ["TURKUAZ", "Bu turkuaz! Ördek yumurtası gibi!"], ["LİLÂ", "Bu lilâ! Çiçek gibi!"]],
      math: [["BİR", "Bir elma! Bir!"], ["İKİ", "İki elma! Bir, iki!"], ["ÜÇ", "Üç elma! Bir, iki, üç!"], ["…20'YE!", "Bir, iki, üç — yirmiye kadar!"]],
      physics: [["DÜŞ!", "Bırak — düşer!"], ["ZIPLAR!", "Yere değer ve boyng!"]],
      sound: [["YÜKSEK!", "Yüksek! Aslan gibi! Roar!"], ["sessiz…", "Sessiz… küçük fare gibi. Şşş."], ["İNCE VE PES", "Kuşlar ince öter! Davullar pes!"]],
      life: [["TOHUM", "Minik tohum toprakta uyuyor."], ["FİLİZ", "Su ve güneş der: merhaba filiz!"], ["BÜYÜDÜ!", "Büyüdü! Kocaman ve parlak!"]],
      weather: [["GÜNEŞLİ", "Güneşli! Sıcacık ve aydınlık!"], ["YAĞMURLU", "Yağmurlu! Şıp şıp şıp!"], ["RÜZGÂRLI", "Rüzgârlı! Vuuuş! Yapraklar dans eder!"]],
      space: [["DÜNYA", "Dünya! Evimiz. Mavi olan!"], ["AY", "Ay! Hep tekrar ziyaret eder!"], ["GÜNEŞ", "Güneş! Gündüz yıldızımız!"]],
      water: [["YÜZER", "Yüzer! Tekne gibi üstte!"], ["BATAR", "Batar! Taş gibi dibe!"]],
      shapes: [["DAİRE", "Daire! Taba gibi yuvarlak!"], ["KARE", "Kare! Kutu gibi dört düz kenar!"], ["ÜÇGEN", "Üçgen! Pizza dilimi gibi üç köşe!"]],
      pattern: [["BİR DESEN!", "Kırmızı, mavi, kırmızı, mavi! Tekrarlar!"], ["SIRADA NE?", "Sırada ne var? Sen tahmin et!"]],
      sorting: [["AYIR!", "Çoraplar çoraplarla!"], ["GRUPLAR!", "Gömlekler gömleklerle!"]],
      animals: [["İNEK", "İnek! Möö der!"], ["KOYUN", "Koyun! Mee der!"], ["KÖPEK", "Köpek! Hav hav der!"]],
      shadows: [["IŞIK", "Işık ok gibi düz gider!"], ["GÖLGE", "Ayıcık ışığı keser — gölge olur!"]],
    },
    p: { tapColour: "{c} balona dokun!", wrongColour: "O {c}. {t} rengini bul!", countApples: "Bütün elmalara dokun! 🍎", byTens: "Onar onar say! Sepetlere dokun! 🧺", bigger: "BÜYÜK sayıya dokun!", smaller: "KÜÇÜK sayıya dokun!", moreLess: "{m} kurabiyeli tabağa dokun! 🍪", tapShape: "{s} şekline dokun!", wrongShape: "O bir {c}. {t} şeklini bul!", whatNext: "Sırada ne var? 🔮", whereGo: "{x} nereye gider?", splashIn: "Şaplatmak için bir nesneye dokun! 💦", predict: "Tahmin et! {x} batar mı yüzer mi?", findAnimal: "{a} hayvanına dokun! 🔎", whoSays: "{s} kim diyor? 🔊", whoShadow: "Bu gölge kimin? 🔦", makeX: "{x} yap! Malzemelere dokun!", whichFlag: "Hangi bayrak {c} bayrağı?", whichCountry: "Bu bayrak hangi ülkenin?", tapWord: "{w} kelimesine dokun! 🔊", hearWord: "Resme dokun — kelimeyi duy! 🔊", buildWords: "Kelimeleri sırayla dokun! 🧩", allFound: "Hepsini buldun! 🎉" },
  });
})();
