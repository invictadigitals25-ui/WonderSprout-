/* ============================================================
   WonderSprout — AI parent-copilot replies
   (pt/ru/hi/ur/tr)
   keys: ai.r0 .. ai.r22 (indexed to WSData.AI_KNOWLEDGE order),
         ai.fallback
   NOTE: keyed by INDEX, not entry id — AI_KNOWLEDGE has a
   duplicate id ("sleep" at indexes 8 and 18).
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    pt: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        Aqui estão três ideias para hoje, por ordem de deslumbramento:
        <ul>
          <li><b>2 minutos de ecrã:</b> abre o <b>Deslumbramento do Dia</b> no painel dos pais e façam juntos a micro-experiência «Explorar».</li>
          <li><b>5 minutos práticos:</b> o passo «Mundo real» — só precisa de coisas que já tens em casa.</li>
          <li><b>0 minutos de ecrã, máxima aprendizagem:</b> vão lá para fora. Apontem para uma coisa e perguntem «porque será…?» A curiosidade ganha a qualquer app.</li>
        </ul>
        <b>Valor de aprendizagem:</b> ecrã curto + continuação no mundo real constrói o ciclo DESCOBRIR → LIGAR do método WonderSprout.`,

      "ai.r1": `<span class="ai-tag">🛡️ Filosofia do ecrã</span>
        A regra do WonderSprout: <b>o tempo de ecrã é uma porta, não um destino.</b>
        <ul>
          <li>Mantém as sessões nas micro-experiências da plataforma: <b>30 segundos a 3 minutos</b>.</li>
          <li>Emparelha sempre o ecrã com o passo <b>«Experimenta na vida real»</b> que segue cada atividade.</li>
          <li>Atenção aos olhos cansados ou à irritação — é o sinal para parar e mexer.</li>
        </ul>
        Se a melhor atividade agora for lá fora, o WonderSprout vai dizer-te para fechar a app. Isso é uma funcionalidade, não um defeito. Para orientação médica personalizada sobre limites de ecrã, o teu pediatra é a fonte certa.`,

      "ai.r2": `<span class="ai-tag">💛 Resposta com carinho</span>
        Cada criança cresce ao seu ritmo e uma faixa ampla é normal — o WonderSprout nunca classifica nem diagnostica crianças.
        <ul>
          <li>Usa o separador <b>Observações</b> para acompanhar «ainda não / às vezes / consistentemente» ao longo de semanas — os padrões importam mais do que momentos isolados.</li>
          <li>Se algo te preocupa, esse sentimento merece uma conversa a sério: <b>fala com o teu pediatra ou um profissional do desenvolvimento infantil.</b></li>
          <li>Entretanto, a melhor «intervenção» é sempre a mesma: falar, cantar, brincar e ler juntos todos os dias.</li>
        </ul>
        O WonderSprout AI dá ideias lúdicas, nunca conselhos médicos.`,

      "ai.r3": `<span class="ai-tag">📊 Esta semana</span>
        Com base nos dados do painel:
        <ul>
          <li><b>Área mais explorada:</b> Ciência e Natureza — as simulações Flutua/Afunda e Planta a Crescer foram as favoritas.</li>
          <li><b>Competência em ascensão:</b> a previsão! Perguntar «vai afundar?» antes de testar é um grande passo de raciocínio.</li>
          <li><b>Foco sugerido a seguir:</b> <b>padrões</b> — experimenta separar meias por cor na lavandaria (zero ecrãs, aprendizagem total).</li>
        </ul>
        Todos os detalhes estão no teu cartão <b>Relatório semanal</b> no painel dos pais.`,

      "ai.r4": `<span class="ai-tag">🌧️ Deslumbramento de dia chuvoso</span>
        A chuva é um laboratório!
        <ul>
          <li><b>Observar:</b> sentem-se à janela — «Para onde vão as gotas? Rápido ou devagar?»</li>
          <li><b>Ouvir:</b> chuva no vidro contra chuva numa panela. Alto ou baixo?</li>
          <li><b>Apanhar:</b> estendam um copo pela janela (com um adulto) — quanto tempo até encher?</li>
          <li><b>Depois o ecrã:</b> 2 minutos do mundo <b>Terra e Clima</b> para ligar o que viram ao dia/noite e às nuvens.</li>
        </ul>
        <b>Valor de aprendizagem:</b> primeiro a observação real, depois a ligação digital — o ciclo WonderSprout.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        Qualquer objeto seguro pode virar uma lição:
        <ul>
          <li>Aponta a Wonder Camera a um objeto — identifica-o e abre um <b>Cartão Wonder</b>.</li>
          <li>Cada cartão liga o objeto a mundos de aprendizagem (cor, matemática, ciência…) com 3 atividades rápidas.</li>
          <li>Cada cartão termina com um <b>desafio do mundo real</b>, para que a aprendizagem saia do ecrã.</li>
        </ul>
        Experimenta a demo: <b>WonderSprout Camera → toca num objeto</b>. Nota de privacidade: o reconhecimento corre no momento — não são guardadas fotos do teu filho.`,

      "ai.r6": `<span class="ai-tag">📖 Hora do conto</span>
        As histórias são máquinas de ligação:
        <ul>
          <li><b>«Pip e a Sementinha»</b> — crescimento, paciência e natureza. Combina com plantar um feijão de verdade.</li>
          <li><b>«O Grande Banho do Bloop»</b> — flutuar contra afundar com momentos de previsão integrados. Combina com testes na banheira.</li>
          <li>Deixa o teu filho <b>escolher o caminho da história</b> — decidir constrói autonomia e linguagem.</li>
        </ul>
        Dica: depois de ler, pergunta «O que fazemos a seguir?» e deixa a criança dirigir. Esse é o nível CRIAR.`,

      "ai.r7": `<span class="ai-tag">🍎 Deslumbramento na cozinha</span>
        A cozinha é um currículo completo:
        <ul>
          <li><b>Matemática:</b> contem uvas para um prato — «mais uma» e «acabaram todas».</li>
          <li><b>Ciência:</b> que alimentos flutuam numa taça de água? (Uva? Banana? Com e sem casca!)</li>
          <li><b>Sentidos:</b> estaladiço contra macio, quente contra frio — nomeiem cada um.</li>
        </ul>
        Depois, a Wonder Camera pode transformar qualquer fruta num Cartão Wonder.`,

      "ai.r8": `<span class="ai-tag">🌙 Deslumbramento da hora de dormir</span>
        Uma rotina previsível ganha a uma perfeita. Experimenta esta rotina WonderSprout:
        <ul>
          <li><b>Quente + ténue:</b> banho e depois luz baixa — ecrãs brilhantes desligados pelo menos 30 minutos antes de deitar.</li>
          <li><b>Um conto, o mesmo sítio:</b> leiam «A Lua Sonolenta» — termina com um ritual de boa noite que podem copiar.</li>
          <li><b>Uma canção:</b> «Estás a dormir?» no WonderSprout Music foi feita como canção de embalar lenta.</li>
          <li><b>Boa noite a três coisas:</b> à Lua, a um brinquedo e um ao outro — um pequeno hábito de gratidão.</li>
        </ul>
        <b>Valor de aprendizagem:</b> as rotinas constroem segurança e pensamento sequencial («primeiro o banho, depois o conto, depois a canção»). Para preocupações persistentes com o sono, o teu pediatra é o guia certo.`,

      "ai.r9": `<span class="ai-tag">💛 Emoções grandes</span>
        Emoções intensas são normais nesta idade — o cérebro emocional cresce mais depressa do que as palavras para o descrever.
        <ul>
          <li><b>Nomear para domar:</b> «Estás frustrado porque a torre caiu.» Nomear emoções constrói a linguagem para as gerir.</li>
          <li><b>Sê a âncora calma:</b> senta-te perto, respira devagar, espera. A co-regulação vem antes da autorregulação.</li>
          <li><b>Depois da tempestade:</b> um abraço e depois revivam com calma — «a torre caiu, ficaste zangado, reconstruímo-la.»</li>
        </ul>
        O WonderSprout nunca diagnostica. Se as emoções intensas parecerem frequentes, fortes ou preocupantes, <b>fala com o teu pediatra ou um profissional do desenvolvimento infantil.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 Deslumbramento da natureza</span>
        O ar livre é a sala de aula original — e é grátis:
        <ul>
          <li><b>Caça às cores:</b> encontrem algo verde, castanho, amarelo e vermelho.</li>
          <li><b>Contar sons:</b> parem e oiçam — quantos sons diferentes? Pássaros, vento, carros…</li>
          <li><b>Bolso dos tesouros:</b> recolham 3 tesouros seguros (folha, pedra, pau) e nomeiem cada um.</li>
          <li><b>De volta a casa:</b> 2 minutos do Laboratório de Vida ligam o que viram a como as plantas crescem.</li>
        </ul>
        <b>Valor de aprendizagem:</b> a entrada sensorial real (terreno irregular, luz a mudar, sons vivos) constrói cérebros de formas que nenhum ecrã consegue.`,

      "ai.r11": `<span class="ai-tag">🚗 Deslumbramento em viagem</span>
        Viagens longas são tempo de deslumbramento:
        <ul>
          <li><b>Vejo vejo cores:</b> «Vejo uma coisa VERMELHA!» — os pequeninos conseguem jogar com ajuda.</li>
          <li><b>Contar pelo caminho:</b> camiões, túneis, pontes — contar mata o tédio.</li>
          <li><b>Cantar juntos:</b> o WonderSprout Music não precisa de rede; põe 3 favoritas na fila.</li>
          <li><b>Deslumbramentos da janela:</b> narram o que passa: «Uma vaca! Um rio! Um moinho a girar!»</li>
        </ul>
        Os troços sem ecrã são ideais aqui; guarda uma história curta para os 10 minutos mais duros.`,

      "ai.r12": `<span class="ai-tag">🎂 Deslumbramento de festa</span>
        Os aniversários são aulas de matemática secretas:
        <ul>
          <li><b>Contem as velas</b> juntos — uma por ano, contagem um a um na vida real.</li>
          <li><b>Cantem «Parabéns»</b> — está no WonderSprout Music com letra de karaoke.</li>
          <li><b>Praticar soprar:</b> soprar velas é controlo real da respiração para a fala.</li>
          <li><b>Guarda o momento:</b> acrescenta depois uma entrada no Diário Wonder com uma foto.</li>
        </ul>
        Nesta idade mantém as festas curtas — uma hora de alegria ganha a três horas de excesso.`,

      "ai.r13": `<span class="ai-tag">🚽 Paciência com o bacio</span> A maioria das crianças mostra sinais entre os 18 e os 36 meses — repara no interesse, não na idade. Combina com a <b>Estação de separação</b> (separar molhado/seco!) e celebra cada tentativa. Nunca castigues os acidentes; o cérebro aprende a bexiga por repetição calma.`,

      "ai.r14": `<span class="ai-tag">🤝 Sobre partilhar</span> Antes dos ~30 meses, «partilhar» é desenvolvimentalmente impossível — «é meu!» é um eu saudável. Narra as voltas em vez disso: «A tua vez, depois a vez da Ava.» O ritmo de turnos da <b>Festa dos padrões</b> constrói a mesma competência neural.`,

      "ai.r15": `<span class="ai-tag">🥦 Comer de forma seletiva</span> Uma criança pequena pode precisar de 10 a 15 exposições para aceitar um alimento novo. Mantém as refeições sem pressão: o adulto decide o quê/quando, a criança decide quanto. Contar uvas no <b>Laboratório de Matemática</b> torna a comida lúdica sem pressão.`,

      "ai.r16": `<span class="ai-tag">🦷 Batalhas da escovagem</span> Escova duas vezes por dia desde o primeiro dente; deixa o teu filho «escovar» primeiro um peluche (como o jogo de cuidados dos <b>Amigos Animais</b>). Uma canção ajuda com o tempo — experimenta <b>Este velhote</b> no mundo da Música.`,

      "ai.r17": `<span class="ai-tag">🗣️ Duas línguas</span> Bebés bilingues podem misturar palavras — é normal, não é confusão. Um-pai-uma-língua ou um-lugar-uma-língua funcionam ambos. O seletor de idioma do WonderSprout deixa toda a app modelar a troca com suavidade.`,

      "ai.r18": `<span class="ai-tag">😴 Regressões do sono</span> As regressões do sono costumam surgir por volta dos ~4, 8–10, 12–18 e 24 meses — normalmente um salto cerebral. Mantém a rotina aborrecida e consistente; relaxem com a história <b>Boa noite, estrelinha</b> a baixa luminosidade.`,

      "ai.r19": `<span class="ai-tag">🌋 Atirar e bater</span> Emoções grandes, palavras pequenas. Nomeia o sentimento, mantém o limite: «Não vou deixar-te atirar. Estás muito zangado.» Oferece uma saída aceitável — uma bola para atirar lá fora (energia do Parque da Física!). A consistência é gentileza.`,

      "ai.r20": `<span class="ai-tag">🖍️ Rabiscos</span> Rabiscar a partir dos ~12–15 meses é ciência motora do ombro ao pulso, ainda não são «desenhos». O modo de desenho do <b>Estúdio</b> reflete isto: processo acima do produto. Oferece lápis grossos e papel grande; narra as cores.`,

      "ai.r21": `<span class="ai-tag">🏫 Adaptar-se</span> Despedidas curtas, recolhas consistentes e um objeto de conforto ganham a esgueirar-se. Um ritual com foto do reencontro (como o <b>Diário Wonder</b>) ajuda a criança a prever o teu regresso — a previsibilidade é segurança.`,

      "ai.r22": `<span class="ai-tag">🚗 Em movimento</span> As viagens de carro são ouro de narração: «Carro vermelho! Camião grande!» — o vocabulário de <b>Bandeiras e Países</b> e <b>Separação</b> transfere-se diretamente para olhar pela janela. Cantem os ritmos ao estilo <b>As rodas do autocarro</b> do mundo da Música nas paragens.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    Que pergunta bonita! Eis a forma WonderSprout de responder a quase tudo com uma criança pequena:
    <ul>
      <li><b>Começa pelo deslumbramento:</b> «Pergunto-me… o que achas TU?»</li>
      <li><b>Torna-o físico:</b> consegues tocar-lhe, movê-lo ou representá-lo?</li>
      <li><b>Mantém-no minúsculo:</b> 30 segundos a 3 minutos ganha a uma lição de 30 minutos nesta idade.</li>
    </ul>
    Experimenta uma das perguntas abaixo — ou pergunta-me sobre <b>tempo de ecrã</b>, <b>etapas</b>, <b>dias de chuva</b>, a <b>Wonder Camera</b>, <b>histórias</b> ou <b>o que fazer hoje</b>.`
    },

    ru: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        Вот три идеи на сегодня, в порядке удивления:
        <ul>
          <li><b>2 минуты экрана:</b> откройте <b>Чудо дня</b> на родительской панели и сделайте вместе микро-опыт «Исследовать».</li>
          <li><b>5 минут своими руками:</b> шаг «Реальный мир» — нужны только вещи, которые уже есть дома.</li>
          <li><b>0 минут экрана, максимум обучения:</b> выходите на улицу. Покажите на что-нибудь и спросите «Интересно, почему…?» Любопытство побеждает любое приложение.</li>
        </ul>
        <b>Учебная ценность:</b> короткий экран + продолжение в реальном мире строит цикл ОТКРЫТЬ → СВЯЗАТЬ из метода WonderSprout.`,

      "ai.r1": `<span class="ai-tag">🛡️ Философия экрана</span>
        Правило WonderSprout: <b>экранное время — это дверь, а не пункт назначения.</b>
        <ul>
          <li>Ограничьте сессии микро-опытами платформы: <b>от 30 секунд до 3 минут</b>.</li>
          <li>Всегда сочетайте экран с шагом <b>«Попробуй в реальной жизни»</b>, который идёт после каждого занятия.</li>
          <li>Следите за уставшими глазами или капризами — это сигнал остановиться и подвигаться.</li>
        </ul>
        Если лучшее занятие сейчас на улице, WonderSprout скажет вам закрыть приложение. Это функция, а не ошибка. За персональной медицинской консультацией о границах экрана обращайтесь к педиатру.`,

      "ai.r2": `<span class="ai-tag">💛 Заботливый ответ</span>
        Каждый ребёнок растёт в своём темпе, и широкий диапазон — это нормально. WonderSprout никогда не оценивает и не диагностирует детей.
        <ul>
          <li>Используйте вкладку <b>Наблюдения</b>, чтобы отслеживать «ещё нет / иногда / постоянно» неделями — закономерности важнее отдельных моментов.</li>
          <li>Если что-то вас тревожит, это чувство заслуживает настоящего разговора: <b>пожалуйста, поговорите с педиатром или специалистом по детскому развитию.</b></li>
          <li>Тем временем лучшая «интервенция» всегда одна: говорить, петь, играть и читать вместе каждый день.</li>
        </ul>
        WonderSprout AI даёт игровые идеи, никогда не медицинские советы.`,

      "ai.r3": `<span class="ai-tag">📊 Эта неделя</span>
        По данным панели:
        <ul>
          <li><b>Самая изученная область:</b> Наука и природа — симуляции «Плавает/тонет» и «Растущее растение» были любимыми.</li>
          <li><b>Растущий навык:</b> предсказание! Вопрос «Утонет ли?» до проверки — большой шаг в мышлении.</li>
          <li><b>Предлагаемый фокус дальше:</b> <b>узоры</b> — попробуйте сортировать носки по цвету во время стирки (ноль экранов, полное обучение).</li>
        </ul>
        Все подробности — в карточке <b>Недельный отчёт</b> на родительской панели.`,

      "ai.r4": `<span class="ai-tag">🌧️ Дождливое чудо</span>
        Дождь — это лаборатория!
        <ul>
          <li><b>Смотреть:</b> сядьте у окна — «Куда бегут капли? Быстро или медленно?»</li>
          <li><b>Слушать:</b> дождь по стеклу против дождя по кастрюле. Громко или тихо?</li>
          <li><b>Ловить:</b> подставьте стакан за окно (со взрослым) — сколько времени, чтобы наполнить?</li>
          <li><b>Потом экран:</b> 2 минуты мира <b>Земля и погода</b>, чтобы связать увиденное с днём/ночью и облаками.</li>
        </ul>
        <b>Учебная ценность:</b> сначала настоящее наблюдение, потом цифровая связь — цикл WonderSprout.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        Любой безопасный предмет может стать уроком:
        <ul>
          <li>Наведите Wonder Camera на предмет — она распознает его и откроет <b>Карточку Wonder</b>.</li>
          <li>Каждая карточка связывает предмет с обучающими мирами (цвет, математика, наука…) через 3 быстрых занятия.</li>
          <li>Каждая карточка заканчивается <b>заданием в реальном мире</b>, чтобы обучение покинуло экран.</li>
        </ul>
        Попробуйте демо: <b>WonderSprout Camera → нажмите на предмет</b>. О конфиденциальности: распознавание работает в моменте — фотографии вашего ребёнка не сохраняются.`,

      "ai.r6": `<span class="ai-tag">📖 Время сказки</span>
        Сказки — это машины связи:
        <ul>
          <li><b>«Пип и маленькое семечко»</b> — рост, терпение и природа. Сочетается с посадкой настоящей фасолины.</li>
          <li><b>«Большое купание Блупа»</b> — плавать против тонуть со встроенными моментами предсказания. Сочетается с опытами в ванне.</li>
          <li>Пусть ребёнок <b>выбирает путь сказки</b> — решения строят самостоятельность и речь.</li>
        </ul>
        Совет: после чтения спросите «Что делаем дальше?» и пусть ребёнок руководит. Это уровень СОЗДАВАТЬ.`,

      "ai.r7": `<span class="ai-tag">🍎 Кухонное чудо</span>
        Кухня — это полная программа:
        <ul>
          <li><b>Математика:</b> считайте виноградины на тарелку — «ещё одна» и «всё кончилось».</li>
          <li><b>Наука:</b> какие продукты плавают в миске с водой? (Виноград? Банан? С кожурой и без!)</li>
          <li><b>Чувства:</b> хрустящее против мягкого, тёплое против холодного — называйте каждое.</li>
        </ul>
        Потом Wonder Camera может превратить любой фрукт в Карточку Wonder.`,

      "ai.r8": `<span class="ai-tag">🌙 Чудо перед сном</span>
        Предсказуемое укладывание лучше идеального. Попробуйте этот ритуал WonderSprout:
        <ul>
          <li><b>Тепло + приглушённо:</b> ванна, потом тусклый свет — яркие экраны выключены минимум за 30 минут до сна.</li>
          <li><b>Одна сказка, то же место:</b> прочитайте «Сонную Луну» — она заканчивается ритуалом доброй ночи, который можно повторить.</li>
          <li><b>Одна песня:</b> «Ты спишь?» в WonderSprout Music сделана как медленная колыбельная.</li>
          <li><b>Спокойной ночи трём вещам:</b> Луне, игрушке и друг другу — маленькая привычка благодарности.</li>
        </ul>
        <b>Учебная ценность:</b> ритуалы строят чувство безопасности и последовательное мышление («сначала ванна, потом сказка, потом песня»). При стойких проблемах со сном ваш педиатр — правильный проводник.`,

      "ai.r9": `<span class="ai-tag">💛 Большие чувства</span>
        Сильные чувства в этом возрасте нормальны — эмоциональный мозг растёт быстрее, чем слова, чтобы его описать.
        <ul>
          <li><b>Назвать, чтобы укротить:</b> «Ты расстроен, потому что башня упала.» Называние чувств строит язык, чтобы ими управлять.</li>
          <li><b>Будьте спокойным якорем:</b> сядьте рядом, дышите медленно, ждите. Сорегуляция идёт раньше саморегуляции.</li>
          <li><b>После бури:</b> объятие, потом мягко проиграйте заново — «башня упала, ты злился, мы построили её снова.»</li>
        </ul>
        WonderSprout никогда не ставит диагнозы. Если сильные чувства кажутся частыми, интенсивными или тревожными, <b>пожалуйста, поговорите с педиатром или специалистом по детскому развитию.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 Природное чудо</span>
        Улица — это изначальный класс, и он бесплатный:
        <ul>
          <li><b>Охота за цветами:</b> найдите что-то зелёное, коричневое, жёлтое и красное.</li>
          <li><b>Считать звуки:</b> остановитесь и слушайте — сколько разных звуков? Птицы, ветер, машины…</li>
          <li><b>Карман сокровищ:</b> соберите 3 безопасных сокровища (лист, камень, палку) и назовите каждое.</li>
          <li><b>Дома:</b> 2 минуты Лаборатории жизни свяжут увиденное с тем, как растут растения.</li>
        </ul>
        <b>Учебная ценность:</b> настоящий сенсорный опыт (неровная земля, меняющийся свет, живые звуки) строит мозг так, как не может ни один экран.`,

      "ai.r11": `<span class="ai-tag">🚗 Чудо в дороге</span>
        Долгие поездки — это время удивления:
        <ul>
          <li><b>Я вижу цвет:</b> «Я вижу что-то КРАСНОЕ!» — малыши могут играть с помощью.</li>
          <li><b>Считать по дороге:</b> грузовики, туннели, мосты — счёт убивает скуку.</li>
          <li><b>Петь вместе:</b> WonderSprout Music не нужна связь; поставьте 3 любимых в очередь.</li>
          <li><b>Чудеса за окном:</b> рассказывайте, что проезжает: «Корова! Река! Вращающаяся мельница!»</li>
        </ul>
        Здесь идеальны отрезки без экрана; приберегите одну короткую сказку на самые трудные 10 минут.`,

      "ai.r12": `<span class="ai-tag">🎂 Праздничное чудо</span>
        Дни рождения — это тайные уроки математики:
        <ul>
          <li><b>Считайте свечи</b> вместе — по одной на год, счёт один-к-одному в реальной жизни.</li>
          <li><b>Спойте «С днём рождения»</b> — она есть в WonderSprout Music со словами для караоке.</li>
          <li><b>Тренировка дуть:</b> задувание свечей — это настоящий контроль дыхания для речи.</li>
          <li><b>Сохраните момент:</b> потом добавьте запись в Дневник Wonder с фотографией.</li>
        </ul>
        В этом возрасте делайте праздники короткими — час радости лучше трёх часов перегрузки.`,

      "ai.r13": `<span class="ai-tag">🚽 Терпение с горшком</span> Большинство детей показывают готовность между 18 и 36 месяцами — следите за интересом, а не за возрастом. Сочетайте со <b>Станцией сортировки</b> (сортировка мокрое/сухое!) и отмечайте каждую попытку. Никогда не наказывайте за промахи; мозг учится контролю мочевого пузыря через спокойное повторение.`,

      "ai.r14": `<span class="ai-tag">🤝 О том, чтобы делиться</span> До ~30 месяцев «делиться» развивающе невозможно — «моё!» это здоровая самость. Вместо этого озвучивайте очереди: «Твоя очередь, потом очередь Авы.» Ритм очерёдности <b>Вечеринки узоров</b> строит тот же нейронный навык.`,

      "ai.r15": `<span class="ai-tag">🥦 Привередливость в еде</span> Малышу может понадобиться 10–15 знакомств, чтобы принять новую еду. Держите приёмы пищи без давления: взрослый решает что/когда, ребёнок — сколько. Счёт виноградин в <b>Математической лаборатории</b> делает еду игровой без давления.`,

      "ai.r16": `<span class="ai-tag">🦷 Битвы за чистку зубов</span> Чистите дважды в день с первого зуба; пусть ребёнок сначала «почистит» плюшевого мишку (как игра в заботу из <b>Друзей-животных</b>). Песня помогает со временем — попробуйте <b>Этот старичок</b> в мире Музыки.`,

      "ai.r17": `<span class="ai-tag">🗣️ Два языка</span> Двуязычные малыши могут смешивать слова — это нормально, а не путаница. Работают и «один родитель — один язык», и «одно место — один язык». Переключатель языка WonderSprout позволяет всему приложению мягко показывать переключение.`,

      "ai.r18": `<span class="ai-tag">😴 Откаты сна</span> Регрессии сна обычно приходят около ~4, 8–10, 12–18 и 24 месяцев — обычно это скачок мозга. Держите ритуал скучным и постоянным; успокаивайтесь со сказкой <b>Спокойной ночи, звёздочка</b> при низкой яркости.`,

      "ai.r19": `<span class="ai-tag">🌋 Бросание и драки</span> Большие чувства, маленькие слова. Назовите чувство, держите границу: «Я не дам тебе бросать. Ты очень зол.» Предложите приемлемый выход — мяч, чтобы бросать на улице (энергия Физической площадки!). Последовательность — это доброта.`,

      "ai.r20": `<span class="ai-tag">🖍️ Каракули</span> Каракули с ~12–15 месяцев — это моторная наука от плеча к запястью, ещё не «рисунки». Режим рисования <b>Студии</b> отражает это: процесс важнее результата. Предложите толстые мелки и большой лист; озвучивайте цвета.`,

      "ai.r21": `<span class="ai-tag">🏫 Адаптация</span> Короткие прощания, постоянные возвращения и предмет-утешитель лучше, чем ускользнуть незаметно. Фото-ритуал воссоединения (как <b>Дневник Wonder</b>) помогает ребёнку предсказать ваш приход — предсказуемость это безопасность.`,

      "ai.r22": `<span class="ai-tag">🚗 В движении</span> Поездки на машине — золотая жила для рассказов: «Красная машина! Большой грузовик!» — словарь <b>Флагов и стран</b> и <b>Сортировки</b> прямо переносится на наблюдение из окна. Пойте ритмы в стиле <b>Колёса автобуса</b> из мира Музыки на остановках.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    Какой чудесный вопрос! Вот как WonderSprout отвечает почти на всё с малышом:
    <ul>
      <li><b>Начните с удивления:</b> «Интересно… а ТЫ как думаешь?»</li>
      <li><b>Сделайте это телесным:</b> можно это потрогать, подвигать или разыграть?</li>
      <li><b>Держите крошечным:</b> от 30 секунд до 3 минут в этом возрасте лучше 30-минутного урока.</li>
    </ul>
    Попробуйте один из вопросов ниже — или спросите меня про <b>экранное время</b>, <b>этапы развития</b>, <b>дождливые дни</b>, <b>Wonder Camera</b>, <b>сказки</b> или <b>что делать сегодня</b>.`
    },

    hi: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        आज के लिए तीन विचार, आश्चर्य के क्रम में:
        <ul>
          <li><b>२ मिनट स्क्रीन:</b> पैरेंट डैशबोर्ड पर <b>आज का आश्चर्य</b> खोलें और मिलकर «खोजें» सूक्ष्म-अनुभव करें।</li>
          <li><b>५ मिनट हाथ से:</b> «असली दुनिया» कदम — इसके लिए सिर्फ़ वही चीज़ें चाहिए जो पहले से घर पर हैं।</li>
          <li><b>० मिनट स्क्रीन, सबसे ज़्यादा सीख:</b> बाहर जाओ। किसी एक चीज़ की ओर इशारा करो और पूछो «पता नहीं क्यों…?» जिज्ञासा किसी भी ऐप से बेहतर है।</li>
        </ul>
        <b>सीखने का मूल्य:</b> छोटी स्क्रीन + असली दुनिया में आगे का कदम WonderSprout विधि का «खोजो ← जोड़ो» चक्र बनाता है।`,

      "ai.r1": `<span class="ai-tag">🛡️ स्क्रीन दर्शन</span>
        WonderSprout का नियम: <b>स्क्रीन समय एक दरवाज़ा है, मंज़िल नहीं।</b>
        <ul>
          <li>सत्रों को मंच के सूक्ष्म-अनुभवों तक सीमित रखें: <b>३० सेकंड से ३ मिनट</b>।</li>
          <li>स्क्रीन को हमेशा <b>«असली ज़िंदगी में आज़माओ»</b> कदम के साथ जोड़ें जो हर गतिविधि के बाद आता है।</li>
          <li>थकी आँखों या चिड़चिड़ापन पर ध्यान दें — यही रुकने और हिलने-डुलने का संकेत है।</li>
        </ul>
        अगर अभी सबसे अच्छी गतिविधि बाहर की है, तो WonderSprout आपको ऐप बंद करने को कहेगा। यह फ़ीचर है, बग नहीं। स्क्रीन सीमाओं पर व्यक्तिगत चिकित्सा सलाह के लिए आपका बाल रोग विशेषज्ञ सही स्रोत है।`,

      "ai.r2": `<span class="ai-tag">💛 स्नेहपूर्ण उत्तर</span>
        हर बच्चा अपनी गति से बढ़ता है, और व्यापक दायरा सामान्य है — WonderSprout बच्चों को कभी रैंक या निदान नहीं देता।
        <ul>
          <li>हफ़्तों तक «अभी नहीं / कभी-कभी / लगातार» ट्रैक करने के लिए <b>अवलोकन</b> टैब का उपयोग करें — क्षणों से ज़्यादा पैटर्न मायने रखते हैं।</li>
          <li>अगर कुछ चिंताजनक है, उस भावना के लिए असली बातचीत ज़रूरी है: <b>कृपया अपने बाल रोग विशेषज्ञ या बाल विकास विशेषज्ञ से बात करें।</b></li>
          <li>इस बीच, सबसे अच्छा «हस्तक्षेप» हमेशा वही है: रोज़ मिलकर बात करो, गाओ, खेलो और पढ़ो।</li>
        </ul>
        WonderSprout AI खेल-कूद के विचार देता है, चिकित्सा सलाह कभी नहीं।`,

      "ai.r3": `<span class="ai-tag">📊 इस सप्ताह</span>
        डैशबोर्ड डेटा के आधार पर:
        <ul>
          <li><b>सबसे ज़्यादा खोजा गया क्षेत्र:</b> विज्ञान और प्रकृति — तैरना/डूबना और बढ़ता पौधा सिमुलेशन पसंदीदा रहे।</li>
          <li><b>बढ़ती कौशल:</b> अनुमान! परखने से पहले «क्या यह डूबेगा?» पूछना सोच का बड़ा कदम है।</li>
          <li><b>आगे सुझाया गया फ़ोकस:</b> <b>पैटर्न</b> — कपड़े धोते समय जुराबों को रंग से छाँटने की कोशिश करें (शून्य स्क्रीन, पूरी सीख)।</li>
        </ul>
        पूरा विवरण पैरेंट डैशबोर्ड पर आपके <b>साप्ताहिक रिपोर्ट</b> कार्ड में है।`,

      "ai.r4": `<span class="ai-tag">🌧️ बारिश का आश्चर्य</span>
        बारिश एक प्रयोगशाला है!
        <ul>
          <li><b>देखो:</b> खिड़की के पास बैठो — «बूँदें कहाँ जाती हैं? तेज़ या धीमी?»</li>
          <li><b>सुनो:</b> खिड़की पर बार बनाम बर्तन पर बारिश। तेज़ या धीमी?</li>
          <li><b>पकड़ो:</b> खिड़की से बाहर कप पकड़ो (किसी बड़े के साथ) — भरने में कितनी देर?</li>
          <li><b>फिर स्क्रीन:</b> <b>पृथ्वी और मौसम</b> दुनिया के २ मिनट, ताकि जो देखा उसे दिन/रात और बादलों से जोड़ा जा सके।</li>
        </ul>
        <b>सीखने का मूल्य:</b> पहले असली अवलोकन, फिर डिजिटल संबंध — WonderSprout चक्र।`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        कोई भी सुरक्षित वस्तु एक पाठ बन सकती है:
        <ul>
          <li>Wonder Camera को किसी वस्तु पर लगाओ — वह उसे पहचानती है और <b>Wonder कार्ड</b> खोलती है।</li>
          <li>हर कार्ड वस्तु को सीखने की दुनियाओं (रंग, गणित, विज्ञान…) से ३ त्वरित गतिविधियों के साथ जोड़ता है।</li>
          <li>हर कार्ड <b>असली दुनिया की चुनौती</b> पर खत्म होता है, ताकि सीख स्क्रीन से बाहर निकले।</li>
        </ul>
        डेमो आज़माओ: <b>WonderSprout Camera → किसी वस्तु को टैप करो</b>। गोपनीयता नोट: पहचान उसी क्षण चलती है — आपके बच्चे की कोई तस्वीर संग्रहीत नहीं होती।`,

      "ai.r6": `<span class="ai-tag">📖 कहानी का समय</span>
        कहानियाँ जुड़ाव की मशीनें हैं:
        <ul>
          <li><b>«पिप और नन्हा बीज»</b> — विकास, धैर्य और प्रकृति। असली बीज बोने के साथ जोड़ें।</li>
          <li><b>«ब्लूप का बड़ा स्नान»</b> — तैरना बनाम डूबना, अंतर्निहित अनुमान क्षणों के साथ। स्नान के समय की परख के साथ जोड़ें।</li>
          <li>अपने बच्चे को <b>कहानी का रास्ता चुनने</b> दें — फ़ैसले पहल और भाषा बनाते हैं।</li>
        </ul>
        सुझाव: पढ़ने के बाद पूछें «अब क्या करें?» और बच्चे को निर्देश देने दें। यही «सृजन» स्तर है।`,

      "ai.r7": `<span class="ai-tag">🍎 रसोई का आश्चर्य</span>
        रसोई एक पूरा पाठ्यक्रम है:
        <ul>
          <li><b>गणित:</b> प्लेट में अंगूर गिनो — «एक और» और «सब ख़त्म»।</li>
          <li><b>विज्ञान:</b> पानी के कटोरे में कौन से खाद्य तैरते हैं? (अंगूर? केला? छिलके सहित और बिना!)</li>
          <li><b>इंद्रियाँ:</b> कुरकुरा बनाम नरम, गरम बनाम ठंडा — हर एक का नाम बताओ।</li>
        </ul>
        इसके बाद Wonder Camera किसी भी फल को Wonder कार्ड में बदल सकती है।`,

      "ai.r8": `<span class="ai-tag">🌙 सोने के समय का आश्चर्य</span>
        अनुमानित दिनचर्या पूर्ण दिनचर्या से बेहतर है। यह WonderSprout दिनचर्या आज़माएँ:
        <ul>
          <li><b>गरम + मंद:</b> स्नान, फिर कम रोशनी — सोने से कम से कम ३० मिनट पहले तेज़ स्क्रीन बंद।</li>
          <li><b>एक कहानी, वही जगह:</b> «सुस्त चाँद» पढ़ें — यह शुभ रात्रि अनुष्ठान पर ख़त्म होती है जिसे आप दोहरा सकते हैं।</li>
          <li><b>एक गीत:</b> WonderSprout Music में «क्या तुम सो रहे हो?» धीमी लोरी के रूप में बनी है।</li>
          <li><b>तीन चीज़ों को शुभ रात्रि:</b> चाँद, एक खिलौना, और एक-दूसरे को — नन्ही कृतज्ञता की आदत।</li>
        </ul>
        <b>सीखने का मूल्य:</b> दिनचर्या सुरक्षा और क्रम-चिंतन बनाती है («पहले स्नान, फिर कहानी, फिर गीत»)। लगातार नींद की चिंताओं के लिए आपका बाल रोग विशेषज्ञ सही मार्गदर्शक है।`,

      "ai.r9": `<span class="ai-tag">💛 बड़ी भावनाएँ</span>
        इस उम्र में तीव्र भावनाएँ सामान्य हैं — भावनाओं का दिमाग़ उसे बताने वाले शब्दों से तेज़ बढ़ता है।
        <ul>
          <li><b>नाम दो तो वश में आए:</b> «टावर गिर गया इसलिए तुम निराश हो।» भावनाओं का नाम देना उन्हें सँभालने की भाषा बनाता है।</li>
          <li><b>शांत लंगर बने रहो:</b> पास बैठो, धीरे साँस लो, इंतज़ार करो। सह-नियमन आत्म-नियमन से पहले आता है।</li>
          <li><b>तूफ़ान के बाद:</b> एक गले लगाना, फिर धीरे से दोहराओ — «टावर गिरा, तुम्हें गुस्सा आया, हमने उसे फिर बनाया।»</li>
        </ul>
        WonderSprout कभी निदान नहीं करता। अगर बड़ी भावनाएँ बार-बार, तीव्र या चिंताजनक लगें, <b>कृपया अपने बाल रोग विशेषज्ञ या बाल विकास विशेषज्ञ से बात करें।</b>`,

      "ai.r10": `<span class="ai-tag">🌳 प्रकृति का आश्चर्य</span>
        बाहर की दुनिया मूल कक्षा है — और वह मुफ़्त है:
        <ul>
          <li><b>रंग खोजो:</b> हरा, भूरा, पीला और लाल कुछ ढूँढो।</li>
          <li><b>आवाज़ें गिनो:</b> रुको और सुनो — कितनी अलग आवाज़ें? पक्षी, हवा, गाड़ियाँ…</li>
          <li><b>खज़ाना जेब:</b> ३ सुरक्षित खज़ाने इकट्ठा करो (पत्ता, पत्थर, डंडी) और हर एक का नाम बताओ।</li>
          <li><b>घर लौटकर:</b> जीवन प्रयोगशाला के २ मिनट जो देखा उसे पौधों के बढ़ने से जोड़ते हैं।</li>
        </ul>
        <b>सीखने का मूल्य:</b> असली संवेदी अनुभव (ऊँची-नीची ज़मीन, बदलती रोशनी, जीवंत आवाज़ें) दिमाग़ को ऐसे विकसित करते हैं जैसे कोई स्क्रीन नहीं कर सकती।`,

      "ai.r11": `<span class="ai-tag">🚗 यात्रा का आश्चर्य</span>
        लंबी यात्राएँ आश्चर्य का समय हैं:
        <ul>
          <li><b>रंग देखो:</b> «मैं कुछ लाल देख रहा हूँ!» — छोटे बच्चे मदद से खेल सकते हैं।</li>
          <li><b>रास्ते में गिनो:</b> ट्रक, सुरंगें, पुल — गिनती ऊब मिटाती है।</li>
          <li><b>मिलकर गाओ:</b> WonderSprout Music को सिग्नल नहीं चाहिए; ३ पसंदीदा क़तार में लगाओ।</li>
          <li><b>खिड़की के आश्चर्य:</b> जो गुज़रे उसका वर्णन करो: «एक गाय! एक नदी! एक घूमती चक्की!»</li>
        </ul>
        यहाँ बिना स्क्रीन के पड़ाव आदर्श हैं; सबसे कठिन १० मिनटों के लिए एक छोटी कहानी बचाकर रखें।`,

      "ai.r12": `<span class="ai-tag">🎂 उत्सव का आश्चर्य</span>
        जन्मदिन छिपे हुए गणित के पाठ हैं:
        <ul>
          <li><b>मोमबत्तियाँ गिनो</b> मिलकर — हर साल एक, असली ज़िंदगी में एक-एक गिनती।</li>
          <li><b>«जन्मदिन मुबारक» गाओ</b> — यह WonderSprout Music में कराओके बोलों के साथ है।</li>
          <li><b>फूँकने का अभ्यास:</b> मोमबत्तियाँ बुझाना बोलने के लिए असली साँस नियंत्रण है।</li>
          <li><b>पल संजोओ:</b> बाद में तस्वीर के साथ Wonder जर्नल में एक प्रविष्टि जोड़ो।</li>
        </ul>
        इस उम्र में पार्टियाँ छोटी रखें — एक घंटे की ख़ुशी तीन घंटे की थकान से बेहतर है।`,

      "ai.r13": `<span class="ai-tag">🚽 पॉटी का धैर्य</span> ज़्यादातर बच्चे १८–३६ महीनों के बीच तत्परता दिखाते हैं — उम्र नहीं, रुचि देखें। इसे <b>छँटाई केंद्र</b> (गीला/सूखा छाँटना!) के साथ जोड़ें और हर कोशिश का जश्न मनाएँ। दुर्घटनाओं पर कभी दंड न दें; दिमाग़ शांत दोहराव से मूत्राशय सीखता है।`,

      "ai.r14": `<span class="ai-tag">🤝 बाँटने के बारे में</span> लगभग ३० महीनों से पहले «बाँटना» विकासात्मक रूप से असंभव है — «मेरा!» स्वस्थ स्वत्व है। इसके बजाय बारी बताएँ: «तुम्हारी बारी, फिर ऐवा की बारी।» <b>पैटर्न पार्टी</b> का बारी-बारी लय वही तंत्रिका कौशल बनाता है।`,

      "ai.r15": `<span class="ai-tag">🥦 नखरे वाला खाना</span> एक छोटे बच्चे को नया खाना स्वीकारने के लिए १०–१५ बार संपर्क चाहिए हो सकते हैं। भोजन को दबावमुक्त रखें: बड़ा तय करता है क्या/कब, बच्चा तय करता है कितना। <b>गणित प्रयोगशाला</b> में अंगूर गिनना भोजन को दबाव के बिना खेल बनाता है।`,

      "ai.r16": `<span class="ai-tag">🦷 ब्रश करने की लड़ाई</span> पहले दाँत से दिन में दो बार ब्रश करें; पहले अपने बच्चे को टेडी को «ब्रश» करने दें (<b>पशु मित्र</b> की देखभाल खेल की तरह)। समय तय करने में गीत मदद करता है — संगीत दुनिया में <b>यह बूढ़ा आदमी</b> आज़माएँ।`,

      "ai.r17": `<span class="ai-tag">🗣️ दो भाषाएँ</span> द्विभाषी शिशु शब्द मिला सकते हैं — यह सामान्य है, भ्रम नहीं। एक-अभिभावक-एक-भाषा या एक-स्थान-एक-भाषा दोनों काम करते हैं। WonderSprout का भाषा चयनकर्ता पूरे ऐप को कोमलता से बदलाव दिखाता है।`,

      "ai.r18": `<span class="ai-tag">😴 नींद की गिरावट</span> नींद की वापसी आमतौर पर ~४, ८–१०, १२–१८ और २४ महीनों पर आती है — आमतौर पर दिमाग़ की छलाँग। दिनचर्या को उबाऊ और स्थिर रखें; कम चमक पर <b>शुभ रात्रि, नन्हे तारे</b> कहानी से शांत हों।`,

      "ai.r19": `<span class="ai-tag">🌋 फेंकना और मारना</span> बड़ी भावनाएँ, छोटे शब्द। भावना का नाम दो, सीमा बनाए रखो: «मैं तुम्हें फेंकने नहीं दूँगा। तुम बहुत गुस्से में हो।» एक ठीक रास्ता दो — बाहर फेंकने के लिए गेंद (भौतिकी के मैदान की ऊर्जा!)। स्थिरता ही दया है।`,

      "ai.r20": `<span class="ai-tag">🖍️ लकीरें खींचना</span> ~१२–१५ महीनों से लकीरें खींचना कंधे से कलाई का मोटर विज्ञान है, अभी «तस्वीरें» नहीं। <b>स्टूडियो</b> का चित्रण मोड इसे दर्शाता है: उत्पाद से ज़्यादा प्रक्रिया। मोटे क्रेयॉन और बड़ा काग़ज़ दें; रंगों का वर्णन करें।`,

      "ai.r21": `<span class="ai-tag">🏫 घुलना-मिलना</span> छोटी विदाई, स्थिर वापसी, और एक सांत्वना वस्तु चुपचाप खिसक जाने से बेहतर हैं। मिलन का तस्वीर अनुष्ठान (<b>Wonder जर्नल</b> जैसा) बच्चे को आपकी वापसी का अनुमान लगाने में मदद करता है — पूर्वानुमान ही सुरक्षा है।`,

      "ai.r22": `<span class="ai-tag">🚗 चलते-फिरते</span> कार की सवारी वर्णन का सोना है: «लाल कार! बड़ा ट्रक!» — <b>झंडे और देश</b> और <b>छँटाई</b> की शब्दावली सीधे खिड़की देखने में बदल जाती है। रुकने पर संगीत दुनिया से <b>पहियों</b> जैसे लय गाएँ।`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    क्या प्यारा सवाल है! छोटे बच्चे के साथ लगभग किसी भी सवाल का WonderSprout तरीक़ा यह है:
    <ul>
      <li><b>आश्चर्य से शुरू करो:</b> «मुझे आश्चर्य है… तुम क्या सोचते हो?»</li>
      <li><b>इसे शारीरिक बनाओ:</b> क्या तुम इसे छू सकते हो, हिला सकते हो, या नाटक कर सकते हो?</li>
      <li><b>इसे नन्हा रखो:</b> इस उम्र में ३० सेकंड से ३ मिनट ३०-मिनट के पाठ से बेहतर हैं।</li>
    </ul>
    नीचे दिए प्रश्नों में से एक आज़माओ — या मुझसे <b>स्क्रीन समय</b>, <b>विकास मील के पत्थर</b>, <b>बारिश के दिन</b>, <b>Wonder Camera</b>, <b>कहानियाँ</b> या <b>आज क्या करें</b> के बारे में पूछो।`
    },

    ur: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        آج کے لیے تین تجاویز، حیرت کے ترتیب میں:
        <ul>
          <li><b>۲ منٹ اسکرین:</b> والدین کے ڈیش بورڈ پر <b>آج کا عجوبہ</b> کھولیں اور مل کر «دریافت کریں» کا خرد تجربہ کریں۔</li>
          <li><b>۵ منٹ عملی:</b> «حقیقی دنیا» کا قدم — اس کے لیے صرف وہی چیزیں چاہیے جو پہلے سے گھر پر موجود ہیں۔</li>
          <li><b>۰ منٹ اسکرین، سب سے زیادہ سیکھنا:</b> باہر جائیں۔ کسی ایک چیز کی طرف اشارہ کریں اور پوچھیں «پتا نہیں کیوں…؟» تجسس کسی بھی ایپ سے بہتر ہے۔</li>
        </ul>
        <b>سیکھنے کی قدر:</b> مختصر اسکرین + حقیقی دنیا میں اگلا قدم WonderSprout طریقے کا «دریافت کرو ← جوڑو» چکر بناتا ہے۔`,

      "ai.r1": `<span class="ai-tag">🛡️ اسکرین فلسفہ</span>
        WonderSprout کا اصول: <b>اسکرین وقت ایک دروازہ ہے، منزل نہیں۔</b>
        <ul>
          <li>جلسوں کو پلیٹ فارم کے خرد تجربات تک محدود رکھیں: <b>۳۰ سیکنڈ سے ۳ منٹ</b>۔</li>
          <li>اسکرین کو ہمیشہ <b>«حقیقی زندگی میں آزمائیں»</b> قدم کے ساتھ جوڑیں جو ہر سرگرمی کے بعد آتا ہے۔</li>
          <li>تھکی آنکھوں یا چڑچڑاہٹ پر دھیان دیں — یہی رکنے اور حرکت کرنے کا اشارہ ہے۔</li>
        </ul>
        اگر ابھی بہترین سرگرمی باہر کی ہے، تو WonderSprout آپ کو ایپ بند کرنے کو کہے گا۔ یہ خصوصیت ہے، خرابی نہیں۔ اسکرین حدود پر ذاتی طبی مشورے کے لیے آپ کا بچوں کا ڈاکٹر صحیح ذریعہ ہے۔`,

      "ai.r2": `<span class="ai-tag">💝 محبت بھرا جواب</span>
        ہر بچہ اپنی رفتار سے بڑھتا ہے، اور وسیع دائرہ معمول ہے — WonderSprout بچوں کو کبھی درجہ بندی یا تشخیص نہیں دیتا۔
        <ul>
          <li>ہفتوں تک «ابھی نہیں / کبھی کبھی / مستقل» ٹریک کرنے کے لیے <b>مشاہدات</b> ٹیب استعمال کریں — لمحات سے زیادہ پیٹرن اہم ہیں۔</li>
          <li>اگر کچھ تشویشناک ہے، اس احساس کے لیے حقیقی گفتگو ضروری ہے: <b>براہ کرم اپنے بچوں کے ڈاکٹر یا بچوں کی نشوونما کے ماہر سے بات کریں۔</b></li>
          <li>اس دوران، بہترین «مداخلت» ہمیشہ وہی ہے: روزانہ مل کر بات کریں، گائیں، کھیلیں اور پڑھیں۔</li>
        </ul>
        WonderSprout AI کھیل کود کے خیالات دیتا ہے، طبی مشورے کبھی نہیں۔`,

      "ai.r3": `<span class="ai-tag">📊 اس ہفتے</span>
        ڈیش بورڈ ڈیٹا کی بنیاد پر:
        <ul>
          <li><b>سب سے زیادہ دریافت شدہ شعبہ:</b> سائنس اور فطرت — تیرنا/ڈوبنا اور بڑھتا پودا سمولیشن پسندیدہ رہے۔</li>
          <li><b>بڑھتی مہارت:</b> اندازہ! آزمانے سے پہلے «کیا یہ ڈوبے گا؟» پوچھنا سوچ کا بڑا قدم ہے۔</li>
          <li><b>آگے تجویز کردہ فوکس:</b> <b>نقش و نگار</b> — کپڑے دھوتے وقت جوروں کو رنگ سے چھانٹنے کی کوشش کریں (صفر اسکرین، مکمل سیکھنا)۔</li>
        </ul>
        مکمل تفصیل والدین کے ڈیش بورڈ پر آپ کے <b>ہفتہ وار رپورٹ</b> کارڈ میں ہے۔`,

      "ai.r4": `<span class="ai-tag">🌧️ بارش کا عجوبہ</span>
        بارش ایک تجربہ گاہ ہے!
        <ul>
          <li><b>دیکھیں:</b> کھڑکی کے پاس بیٹھیں — «قطرے کہاں جاتے ہیں؟ تیز یا سست؟»</li>
          <li><b>سنیں:</b> کھڑکی پر بارش بمقابلہ برتن پر بارش۔ بلند یا دھیمی؟</li>
          <li><b>پکڑیں:</b> کھڑکی سے باہر کپ پکڑیں (کسی بڑے کے ساتھ) — بھرنے میں کتنی دیر؟</li>
          <li><b>پھر اسکرین:</b> <b>زمین اور موسم</b> دنیا کے ۲ منٹ، تاکہ جو دیکھا اسے دن/رات اور بادل سے جوڑا جا سکے۔</li>
        </ul>
        <b>سیکھنے کی قدر:</b> پہلے حقیقی مشاہدہ، پھر ڈیجیٹل تعلق — WonderSprout چکر۔`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        کوئی بھی محفوظ چیز سبق بن سکتی ہے:
        <ul>
          <li>Wonder Camera کو کسی چیز پر لگائیں — وہ اسے پہچانتی ہے اور <b>Wonder کارڈ</b> کھولتی ہے۔</li>
          <li>ہر کارڈ چیز کو سیکھنے کی دنیاؤں (رنگ، ریاضی، سائنس…) سے ۳ فوری سرگرمیوں کے ساتھ جوڑتا ہے۔</li>
          <li>ہر کارڈ <b>حقیقی دنیا کے چیلنج</b> پر ختم ہوتا ہے، تاکہ سیکھنا اسکرین سے باہر نکلے۔</li>
        </ul>
        ڈیمو آزمائیں: <b>WonderSprout Camera → کسی چیز کو ٹیپ کریں</b>۔ رازداری نوٹ: پہچان اسی لمحے چلتی ہے — آپ کے بچے کی کوئی تصویر محفوظ نہیں ہوتی۔`,

      "ai.r6": `<span class="ai-tag">📖 کہانی کا وقت</span>
        کہانیاں تعلق کی مشینیں ہیں:
        <ul>
          <li><b>«پپ اور ننھا بیج»</b> — نشوونما، صبر اور فطرت۔ اصل بیج بونے کے ساتھ ملائیں۔</li>
          <li><b>«بلوپ کا بڑا غسل»</b> — تیرنا بمقابلہ ڈوبنا، اندازے کے لمحوں کے ساتھ۔ غسل کے وقت کی آزمائش کے ساتھ ملائیں۔</li>
          <li>اپنے بچے کو <b>کہانی کا راستہ چننے</b> دیں — فیصلے پہل اور زبان بناتے ہیں۔</li>
        </ul>
        مشورہ: پڑھنے کے بعد پوچھیں «اب کیا کریں؟» اور بچے کو ہدایت کرنے دیں۔ یہی «تخلیق» سطح ہے۔`,

      "ai.r7": `<span class="ai-tag">🍎 باورچی خانے کا عجوبہ</span>
        باورچی خانہ ایک مکمل نصاب ہے:
        <ul>
          <li><b>ریاضی:</b> پلیٹ میں انگور گنیں — «ایک اور» اور «سب ختم»۔</li>
          <li><b>سائنس:</b> پانی کے پیالے میں کون سی غذائیں تیرتی ہیں؟ (انگور؟ کیلا؟ چھلکے سمیت اور بغیر!)</li>
          <li><b>حواس:</b> کرکرا بمقابلہ نرم، گرم بمقابلہ ٹھنڈا — ہر ایک کا نام بتائیں۔</li>
        </ul>
        اس کے بعد Wonder Camera کسی بھی پھل کو Wonder کارڈ میں بدل سکتی ہے۔`,

      "ai.r8": `<span class="ai-tag">🌙 سونے کے وقت کا عجوبہ</span>
        متوقع معمول کامل معمول سے بہتر ہے۔ یہ WonderSprout معمول آزمائیں:
        <ul>
          <li><b>گرم + مدھم:</b> غسل، پھر کم روشنی — سونے سے کم از کم ۳۰ منٹ پہلے روشن اسکرین بند۔</li>
          <li><b>ایک کہانی، وہی جگہ:</b> «خوابیدہ چاند» پڑھیں — یہ شب بخیر کے رسم پر ختم ہوتی ہے جسے آپ دہرا سکتے ہیں۔</li>
          <li><b>ایک گیت:</b> WonderSprout Music میں «کیا تم سو رہے ہو؟» دھیمی لوری کے طور پر بنی ہے۔</li>
          <li><b>تین چیزوں کو شب بخیر:</b> چاند، ایک کھلونا، اور ایک دوسرے کو — ننھی شکرگزاری کی عادت۔</li>
        </ul>
        <b>سیکھنے کی قدر:</b> معمولات تحفظ اور ترتیب کی سوچ بناتے ہیں («پہلے غسل، پھر کہانی، پھر گیت»)۔ مسلسل نیند کی تشویش کے لیے آپ کا بچوں کا ڈاکٹر صحیح رہنما ہے۔`,

      "ai.r9": `<span class="ai-tag">💝 بڑے جذبات</span>
        اس عمر میں شدید جذبات معمول ہیں — جذبات کا دماغ اسے بتانے والے الفاظ سے تیز بڑھتا ہے۔
        <ul>
          <li><b>نام دو تو قابو آئے:</b> «ٹاور گر گیا اس لیے تم مایوس ہو۔» جذبات کا نام دینا انہیں سنبھالنے کی زبان بناتا ہے۔</li>
          <li><b>پرسکون لنگر بنے رہو:</b> قریب بیٹھو، آہستہ سانس لو، انتظار کرو۔ باہمی ضابطہ خود ضابطے سے پہلے آتا ہے۔</li>
          <li><b>طوفان کے بعد:</b> ایک گلے لگانا، پھر آہستہ سے دہراؤ — «ٹاور گرا، تمہیں غصہ آیا، ہم نے اسے دوبارہ بنایا۔»</li>
        </ul>
        WonderSprout کبھی تشخیص نہیں کرتا۔ اگر بڑے جذبات بار بار، شدید یا تشویشناک لگیں، <b>براہ کرم اپنے بچوں کے ڈاکٹر یا بچوں کی نشوونما کے ماہر سے بات کریں۔</b>`,

      "ai.r10": `<span class="ai-tag">🌳 فطرت کا عجوبہ</span>
        باہر کی دنیا اصل کلاس روم ہے — اور وہ مفت ہے:
        <ul>
          <li><b>رنگ ڈھونڈو:</b> سبز، بھورا، پیلا اور سرخ کچھ تلاش کرو۔</li>
          <li><b>آوازیں گنو:</b> رکو اور سنو — کتنی مختلف آوازیں؟ پرندے، ہوا، گاڑیاں…</li>
          <li><b>خزانے کی جیب:</b> ۳ محفوظ خزانے جمع کرو (پتہ، پتھر، لکڑی) اور ہر ایک کا نام بتاؤ۔</li>
          <li><b>گھر واپس:</b> زندگی لیبارٹری کے ۲ منٹ جو دیکھا اسے پودوں کے بڑھنے سے جوڑتے ہیں۔</li>
        </ul>
        <b>سیکھنے کی قدر:</b> حقیقی حسی تجربہ (اونچی نیچی زمین، بدلتی روشنی، زندہ آوازیں) دماغ کو ایسے بناتا ہے جیسا کوئی اسکرین نہیں کر سکتی۔`,

      "ai.r11": `<span class="ai-tag">🚗 سفر کا عجوبہ</span>
        لمبے سفر حیرت کا وقت ہیں:
        <ul>
          <li><b>رنگ دیکھو:</b> «میں کچھ سرخ دیکھ رہا ہوں!» — چھوٹے بچے مدد سے کھیل سکتے ہیں۔</li>
          <li><b>راستے میں گنو:</b> ٹرک، سرنگیں، پل — گنتی اکتاہٹ مٹاتی ہے۔</li>
          <li><b>مل کر گاؤ:</b> WonderSprout Music کو سگنل نہیں چاہیے؛ ۳ پسندیدہ قطار میں لگاؤ۔</li>
          <li><b>کھڑکی کے عجوبے:</b> جو گزرے اس کا بیان کرو: «ایک گائے! ایک دریا! ایک گھومتی چکی!»</li>
        </ul>
        یہاں بغیر اسکرین کے حصے مثالی ہیں؛ سب سے مشکل ۱۰ منٹوں کے لیے ایک چھوٹی کہانی بچا کر رکھیں۔`,

      "ai.r12": `<span class="ai-tag">🎂 جشن کا عجوبہ</span>
        سالگرہ چھپے ہوئے ریاضی کے اسباق ہیں:
        <ul>
          <li><b>موم بتیاں گنو</b> مل کر — ہر سال ایک، حقیقی زندگی میں ایک ایک گنتی۔</li>
          <li><b>«سالگرہ مبارک» گاؤ</b> — یہ WonderSprout Music میں کراوکی بولوں کے ساتھ ہے۔</li>
          <li><b>پھونکنے کی مشق:</b> موم بتیاں بجھانا بولنے کے لیے حقیقی سانس کنٹرول ہے۔</li>
          <li><b>لمحہ محفوظ کرو:</b> بعد میں تصویر کے ساتھ Wonder جریدے میں ایک اندراج شامل کرو۔</li>
        </ul>
        اس عمر میں پارٹیاں مختصر رکھیں — ایک گھنٹے کی خوشی تین گھنٹے کی تھکن سے بہتر ہے۔`,

      "ai.r13": `<span class="ai-tag">🚽 پاٹی کا صبر</span> زیادہ تر بچے ۱۸–۳۶ مہینوں کے درمیان تیار دکھاتے ہیں — عمر نہیں، دلچسپی دیکھیں۔ اسے <b>چھانٹ مرکز</b> (گیلا/خشک چھانٹنا!) کے ساتھ ملائیں اور ہر کوشش کا جشن منائیں۔ حادثات پر کبھی سزا نہ دیں؛ دماغ پرسکون دہراؤ سے مثانہ سیکھتا ہے۔`,

      "ai.r14": `<span class="ai-tag">🤝 بانٹنے کے بارے میں</span> تقریباً ۳۰ مہینوں سے پہلے «بانٹنا» نشوونما کے لحاظ سے ناممکن ہے — «میرا!» صحت مند خودی ہے۔ اس کے بجائے باری بتائیں: «تمہاری باری، پھر ایوا کی باری۔» <b>نقش و نگار پارٹی</b> کی باری باری لے وہی عصبی مہارت بناتی ہے۔`,

      "ai.r15": `<span class="ai-tag">🥦 نخرے والا کھانا</span> ایک چھوٹے بچے کو نیا کھانا قبول کرنے کے لیے ۱۰–۱۵ بار رابطہ چاہیے ہو سکتا ہے۔ کھانوں کو دباؤ سے پاک رکھیں: بڑا طے کرتا ہے کیا/کب، بچہ طے کرتا ہے کتنا۔ <b>ریاضی لیبارٹری</b> میں انگور گننا کھانے کو دباؤ کے بغیر کھیل بناتا ہے۔`,

      "ai.r16": `<span class="ai-tag">🦷 برش کرنے کی جنگ</span> پہلے دانت سے دن میں دو بار برش کریں؛ پہلے اپنے بچے کو ٹیڈی کو «برش» کرنے دیں (<b>جانور دوست</b> کی دیکھ بھال کھیل کی طرح)۔ وقت طے کرنے میں گیت مدد کرتا ہے — موسیقی دنیا میں <b>یہ بوڑھا آدمی</b> آزمائیں۔`,

      "ai.r17": `<span class="ai-tag">🗣️ دو زبانیں</span> دو لسانی بچے الفاظ ملا سکتے ہیں — یہ معمول ہے، الجھن نہیں۔ ایک والدین ایک زبان یا ایک جگہ ایک زبان دونوں کام کرتے ہیں۔ WonderSprout کا زبان چنندہ پورے ایپ کو نرمی سے تبدیلی دکھاتا ہے۔`,

      "ai.r18": `<span class="ai-tag">😴 نیند کی واپسی</span> نیند کی واپسی عام طور پر ~۴، ۸–۱۰، ۱۲–۱۸ اور ۲۴ مہینوں پر آتی ہے — عموماً دماغ کی چھلانگ۔ معمول کو بور اور مستقل رکھیں؛ کم چمک پر <b>شب بخیر، ننھے تارے</b> کہانی سے پرسکون ہوں۔`,

      "ai.r19": `<span class="ai-tag">🌋 پھینکنا اور مارنا</span> بڑے جذبات، چھوٹے الفاظ۔ جذبے کا نام دو، حد قائم رکھو: «میں تمہیں پھینکنے نہیں دوں گا۔ تم بہت غصے میں ہو۔» ایک ٹھیک راستہ دو — باہر پھینکنے کے لیے گیند (طبیعیات کے میدان کی توانائی!)۔ مستقل مزاجی ہی مہربانی ہے۔`,

      "ai.r20": `<span class="ai-tag">🖍️ لکیریں کھینچنا</span> ~۱۲–۱۵ مہینوں سے لکیریں کھینچنا کندھے سے کلائی کا موٹر سائنس ہے، ابھی «تصویریں» نہیں۔ <b>اسٹوڈیو</b> کا نقشہ کاری موڈ اسے ظاہر کرتا ہے: نتیجے سے زیادہ عمل۔ موٹے کریون اور بڑا کاغذ دیں؛ رنگوں کا بیان کریں۔`,

      "ai.r21": `<span class="ai-tag">🏫 گھلنا ملنا</span> مختصر الوداع، مستقل واپسی، اور ایک تسلی کی چیز چپکے سے کھسک جانے سے بہتر ہیں۔ ملاپ کی تصویر کی رسم (<b>Wonder جریدہ</b> جیسی) بچے کو آپ کی واپسی کا اندازہ لگانے میں مدد کرتی ہے — پیش گوئی ہی تحفظ ہے۔`,

      "ai.r22": `<span class="ai-tag">🚗 چلتے پھرتے</span> کار کی سواری بیان کا سونا ہے: «سرخ کار! بڑا ٹرک!» — <b>جھنڈے اور ممالک</b> اور <b>چھانٹ</b> کی لغت براہ راست کھڑکی دیکھنے میں بدل جاتی ہے۔ رکنے پر موسیقی دنیا سے <b>پہیوں</b> جیسی لے گائیں۔`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    کیا پیارا سوال ہے! چھوٹے بچے کے ساتھ تقریباً ہر سوال کا WonderSprout طریقہ یہ ہے:
    <ul>
      <li><b>حیرت سے شروع کرو:</b> «میں سوچتا ہوں… تم کیا سمجھتے ہو؟»</li>
      <li><b>اسے جسمانی بناؤ:</b> کیا تم اسے چھو سکتے ہو، ہلا سکتے ہو، یا نقل کر سکتے ہو؟</li>
      <li><b>اسے ننھا رکھو:</b> اس عمر میں ۳۰ سیکنڈ سے ۳ منٹ ۳۰ منٹ کے سبق سے بہتر ہیں۔</li>
    </ul>
    نیچے دیے سوالات میں سے ایک آزمائیں — یا مجھ سے <b>اسکرین وقت</b>، <b>نشوونما کے مراحل</b>، <b>بارش کے دن</b>، <b>Wonder Camera</b>، <b>کہانیاں</b> یا <b>آج کیا کریں</b> کے بارے میں پوچھیں۔`
    },

    tr: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        Bugün için üç fikir, hayret sırasına göre:
        <ul>
          <li><b>2 dakika ekran:</b> Ebeveyn panelinde <b>Günün Harikası</b>'nı açın ve birlikte «Keşfet» mikro deneyimini yapın.</li>
          <li><b>5 dakika uygulamalı:</b> «Gerçek Dünya» adımı — sadece evde zaten olan şeylere ihtiyaç duyar.</li>
          <li><b>0 dakika ekran, en çok öğrenme:</b> Dışarı çıkın. Bir şeye işaret edin ve «acaba neden…?» diye sorun. Merak her uygulamayı yener.</li>
        </ul>
        <b>Öğrenme değeri:</b> kısa ekran + gerçek dünya takibi, WonderSprout yöntemindeki KEŞFET → BAĞLA döngüsünü kurar.`,

      "ai.r1": `<span class="ai-tag">🛡️ Ekran felsefesi</span>
        WonderSprout'un kuralı: <b>ekran süresi bir kapıdır, varış noktası değil.</b>
        <ul>
          <li>Oturumları platformun mikro deneyimleriyle sınırlı tutun: <b>30 saniye ile 3 dakika</b>.</li>
          <li>Ekranı her zaman her aktiviteyi takip eden <b>«Gerçek hayatta dene»</b> adımıyla eşleştirin.</li>
          <li>Yorgun gözlere veya huysuzluğa dikkat edin — bu durup hareket etmenin işaretidir.</li>
        </ul>
        Şu an en iyi aktivite dışarıdaysa, WonderSprout uygulamayı kapatmanı söyler. Bu bir özellik, hata değil. Ekran sınırları hakkında kişisel tıbbi rehberlik için çocuk doktorun doğru kaynaktır.`,

      "ai.r2": `<span class="ai-tag">💛 Şefkatli cevap</span>
        Her çocuk kendi temposunda büyür ve geniş bir aralık normaldir — WonderSprout çocukları asla sıralamaz veya teşhis koymaz.
        <ul>
          <li>Haftalar boyunca «henüz değil / bazen / düzenli olarak» takip etmek için <b>Gözlemler</b> sekmesini kullanın — kalıplar tek anlardan daha önemlidir.</li>
          <li>Bir şey seni endişelendiriyorsa, bu duygu gerçek bir konuşmayı hak eder: <b>lütfen çocuk doktorunla veya çocuk gelişimi uzmanıyla konuş.</b></li>
          <li>Bu arada en iyi «müdahale» her zaman aynıdır: her gün birlikte konuşun, şarkı söyleyin, oynayın ve okuyun.</li>
        </ul>
        WonderSprout AI eğlenceli fikirler verir, asla tıbbi tavsiye vermez.`,

      "ai.r3": `<span class="ai-tag">📊 Bu hafta</span>
        Panel verilerine göre:
        <ul>
          <li><b>En çok keşfedilen alan:</b> Bilim ve Doğa — Yüzer/Batar ve Büyüyen Bitki simülasyonları favoriydi.</li>
          <li><b>Yükselen beceri:</b> tahmin! Test etmeden önce «Batacak mı?» diye sormak büyük bir düşünme adımıdır.</li>
          <li><b>Sonraki önerilen odak:</b> <b>kalıplar</b> — çamaşır yıkarken çorapları renge göre sıralamayı deneyin (sıfır ekran, tam öğrenme).</li>
        </ul>
        Tüm ayrıntılar ebeveyn panelindeki <b>Haftalık Rapor</b> kartında.`,

      "ai.r4": `<span class="ai-tag">🌧️ Yağmurlu gün harikası</span>
        Yağmur bir laboratuvardır!
        <ul>
          <li><b>İzle:</b> pencere kenarına oturun — «Damlalar nereye gidiyor? Hızlı mı yavaş mı?»</li>
          <li><b>Dinle:</b> cama vuran yağmur ile tencereye vuran yağmur. Yüksek mi alçak mı?</li>
          <li><b>Yakala:</b> bir bardağı pencereden dışarı tutun (bir yetişkinle) — dolması ne kadar sürer?</li>
          <li><b>Sonra ekran:</b> gördüklerinizi gündüz/gece ve bulutlarla bağlamak için <b>Yeryüzü ve Hava</b> dünyasından 2 dakika.</li>
        </ul>
        <b>Öğrenme değeri:</b> önce gerçek gözlem, sonra dijital bağlantı — WonderSprout döngüsü.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        Herhangi bir güvenli nesne bir derse dönüşebilir:
        <ul>
          <li>Wonder Camera'yı bir nesneye yöneltin — onu tanımlar ve bir <b>Wonder Kartı</b> açar.</li>
          <li>Her kart nesneyi 3 hızlı aktiviteyle öğrenme dünyalarına (renk, matematik, bilim…) bağlar.</li>
          <li>Her kart bir <b>gerçek dünya göreviyle</b> biter, böylece öğrenme ekrandan çıkar.</li>
        </ul>
        Demoyu deneyin: <b>WonderSprout Camera → bir nesneye dokunun</b>. Gizlilik notu: tanıma anlık çalışır — çocuğunuzun hiçbir fotoğrafı saklanmaz.`,

      "ai.r6": `<span class="ai-tag">📖 Masal zamanı</span>
        Masallar bağlantı makineleridir:
        <ul>
          <li><b>«Pip ve Küçük Tohum»</b> — büyüme, sabır ve doğa. Gerçek bir fasulye dikmekle eşleşir.</li>
          <li><b>«Bloop'un Büyük Banyosu»</b> — yerleşik tahmin anlarıyla yüzmek ve batmak. Banyo zamanı deneyleriyle eşleşir.</li>
          <li>Çocuğunuzun <b>masalın yolunu seçmesine</b> izin verin — kararlar özgüven ve dil geliştirir.</li>
        </ul>
        İpucu: okuduktan sonra «Şimdi ne yapalım?» diye sorun ve çocuğun yönetmesine izin verin. Bu YARAT seviyesidir.`,

      "ai.r7": `<span class="ai-tag">🍎 Mutfak harikası</span>
        Mutfak tam bir müfredattır:
        <ul>
          <li><b>Matematik:</b> tabağa üzüm sayın — «bir tane daha» ve «hepsi bitti».</li>
          <li><b>Bilim:</b> bir kase suda hangi yiyecekler yüzer? (Üzüm? Muz? Kabuklu ve kabuksuz!)</li>
          <li><b>Duyular:</b> çıtır ile yumuşak, sıcak ile soğuk — her birini adlandırın.</li>
        </ul>
        Ardından Wonder Camera herhangi bir meyveyi Wonder Kartına dönüştürebilir.`,

      "ai.r8": `<span class="ai-tag">🌙 Uyku öncesi harikası</span>
        Öngörülebilir bir yatma rutini mükemmel olandan daha iyidir. Bu WonderSprout rutinini deneyin:
        <ul>
          <li><b>Sıcak + loş:</b> banyo, sonra kısık ışık — yatmadan en az 30 dakika önce parlak ekranlar kapalı.</li>
          <li><b>Bir masal, aynı yer:</b> «Uykulu Ay»'ı okuyun — kopyalayabileceğiniz bir iyi geceler ritüeliyle biter.</li>
          <li><b>Bir şarkı:</b> WonderSprout Music'teki «Uyuyor musun?» yavaş bir ninni olarak tasarlandı.</li>
          <li><b>Üç şeye iyi geceler:</b> Ay'a, bir oyuncağa ve birbirimize — küçük bir şükran alışkanlığı.</li>
        </ul>
        <b>Öğrenme değeri:</b> rutinler güven ve sıralı düşünmeyi kurar («önce banyo, sonra masal, sonra şarkı»). Sürekli uyku endişeleri için çocuk doktorun doğru rehberdir.`,

      "ai.r9": `<span class="ai-tag">💛 Büyük duygular</span>
        Bu yaşta yoğun duygular normaldir — duygu beyni onu tarif edecek kelimelerden daha hızlı büyür.
        <ul>
          <li><b>Evcilleştirmek için adlandır:</b> «Kule yıkıldığı için hayal kırıklığına uğradın.» Duyguları adlandırmak onları yönetecek dili kurar.</li>
          <li><b>Sakin çapa ol:</b> yakına otur, yavaşça nefes al, bekle. Eş-düzenleme öz-düzenlemeden önce gelir.</li>
          <li><b>Fırtınadan sonra:</b> bir sarılma, sonra nazikçe tekrar oynayın — «kule yıkıldı, kızdın, yeniden inşa ettik.»</li>
        </ul>
        WonderSprout asla teşhis koymaz. Büyük duygular sık, yoğun veya endişe verici görünüyorsa, <b>lütfen çocuk doktorunla veya çocuk gelişimi uzmanıyla konuş.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 Doğa harikası</span>
        Açık hava özgün sınıftır — ve ücretsizdir:
        <ul>
          <li><b>Renk avı:</b> yeşil, kahverengi, sarı ve kırmızı bir şey bulun.</li>
          <li><b>Ses sayma:</b> durun ve dinleyin — kaç farklı ses? Kuşlar, rüzgâr, arabalar…</li>
          <li><b>Hazine cebi:</b> 3 güvenli hazine toplayın (yaprak, taş, çubuk) ve her birini adlandırın.</li>
          <li><b>Eve dönünce:</b> Yaşam Laboratuvarı'ndan 2 dakika, gördüklerinizi bitkilerin nasıl büyüdüğüne bağlar.</li>
        </ul>
        <b>Öğrenme değeri:</b> gerçek duyusal girdi (düz olmayan zemin, değişen ışık, canlı sesler) beyinleri hiçbir ekranın yapamayacağı şekilde geliştirir.`,

      "ai.r11": `<span class="ai-tag">🚗 Yolculuk harikası</span>
        Uzun yolculuklar hayret zamanıdır:
        <ul>
          <li><b>Renk görmece:</b> «KIRMIZI bir şey görüyorum!» — küçükler yardımla oynayabilir.</li>
          <li><b>Yol boyunca say:</b> kamyonlar, tüneller, köprüler — saymak sıkıntıyı öldürür.</li>
          <li><b>Birlikte şarkı:</b> WonderSprout Music sinyal gerektirmez; 3 favoriyi sıraya koyun.</li>
          <li><b>Pencere harikaları:</b> geçeni anlatın: «Bir inek! Bir nehir! Dönen bir yel değirmeni!»</li>
        </ul>
        Ekransız bölümler burada idealdir; en zor 10 dakika için kısa bir masal saklayın.`,

      "ai.r12": `<span class="ai-tag">🎂 Kutlama harikası</span>
        Doğum günleri gizli matematik dersleridir:
        <ul>
          <li><b>Mumları birlikte sayın</b> — yılda bir tane, gerçek hayatta birebir sayma.</li>
          <li><b>«İyi ki Doğdun» söyleyin</b> — WonderSprout Music'te karaoke sözleriyle var.</li>
          <li><b>Üfleme pratiği:</b> mumları üflemek konuşma için gerçek nefes kontrolüdür.</li>
          <li><b>Anı sakla:</b> sonra fotoğrafıyla bir Wonder Günlüğü girişi ekleyin.</li>
        </ul>
        Bu yaşta partileri kısa tutun — bir saatlik sevinç üç saatlik yorgunluğu yener.`,

      "ai.r13": `<span class="ai-tag">🚽 Tuvalet sabrı</span> Çocukların çoğu 18–36 ay arasında hazır olduklarını gösterir — yaşa değil ilgiye bakın. <b>Sıralama İstasyonu</b> (ıslak/kuru sıralama!) ile eşleştirin ve her denemeyi kutlayın. Kazaları asla cezalandırmayın; beyin mesaneyi sakin tekrarla öğrenir.`,

      "ai.r14": `<span class="ai-tag">🤝 Paylaşmak üzerine</span> ~30 aydan önce «paylaşmak» gelişimsel olarak imkânsızdır — «benim!» sağlıklı bir benliktir. Bunun yerine sıraları anlatın: «Senin sıran, sonra Ava'nın sırası.» <b>Kalıp Partisi</b>'nin sırayla ritmi aynı nöral beceriyi kurar.`,

      "ai.r15": `<span class="ai-tag">🥦 Seçici yemek</span> Küçük bir çocuk yeni bir yiyeceği kabul etmek için 10–15 kez karşılaşmaya ihtiyaç duyabilir. Öğünleri baskısız tutun: ebeveyn neyi/ne zaman, çocuk ne kadar olduğuna karar verir. <b>Matematik Laboratuvarı</b>'nda üzüm saymak yiyeceği baskısız eğlenceli yapar.`,

      "ai.r16": `<span class="ai-tag">🦷 Fırçalama savaşları</span> İlk diştan itibaren günde iki kez fırçalayın; çocuğunuzun önce bir oyuncağı «fırçalamasına» izin verin (<b>Hayvan Dostları</b>'ndaki bakım oyunu gibi). Bir şarkı süreyi tutmaya yardımcı olur — Müzik dünyasında <b>Bu Yaşlı Adam</b>'ı deneyin.`,

      "ai.r17": `<span class="ai-tag">🗣️ İki dil</span> İki dilli bebekler kelimeleri karıştırabilir — bu normaldir, kafa karışıklığı değil. Bir-ebeveyn-bir-dil veya bir-yer-bir-dil her ikisi de işe yarar. WonderSprout'un dil seçicisi tüm uygulamanın geçişi nazikçe modellemesini sağlar.`,

      "ai.r18": `<span class="ai-tag">😴 Uyku gerilemeleri</span> Uyku gerilemeleri genellikle ~4, 8–10, 12–18 ve 24. aylarda görülür — genellikle bir beyin sıçramasıdır. Rutini sıkıcı ve tutarlı tutun; düşük parlaklıkta <b>İyi Geceler, Küçük Yıldız</b> masalıyla sakinleşin.`,

      "ai.r19": `<span class="ai-tag">🌋 Atma ve vurma</span> Büyük duygular, küçük kelimeler. Duyguyu adlandır, sınırı koru: «Atmana izin vermeyeceğim. Çok kızmışsın.» Uygun bir çıkış öner — dışarıda atılacak bir top (Fizik Oyun Alanı enerjisi!). Tutarlılık nezakettir.`,

      "ai.r20": `<span class="ai-tag">🖍️ Karalama</span> ~12–15 aydan itibaren karalama omuzdan bileğe motor bilimidir, henüz «resim» değildir. <b>Stüdyo</b>'nun çizim modu bunu yansıtır: sonuçtan çok süreç. Kalın mum boyalar ve büyük kâğıt verin; renkleri anlatın.`,

      "ai.r21": `<span class="ai-tag">🏫 Alışmak</span> Kısa vedalar, tutarlı almalar ve bir teselli nesnesi sıvışmaktan daha iyidir. Kavuşmanın fotoğraflı bir ritüeli (<b>Wonder Günlüğü</b> gibi) çocuğun dönüşünü öngörmesine yardımcı olur — öngörülebilirlik güvendir.`,

      "ai.r22": `<span class="ai-tag">🚗 Yolda</span> Araba yolculukları anlatım hazinesidir: «Kırmızı araba! Büyük kamyon!» — <b>Bayraklar ve Ülkeler</b> ve <b>Sıralama</b> kelime dağarcığı doğrudan pencereden izlemeye aktarılır. Molalarda Müzik dünyasından <b>Tekerlekler</b> tarzı ritimleri söyleyin.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    Ne güzel bir soru! Küçük bir çocukla neredeyse her şeye WonderSprout'un cevabı şöyle:
    <ul>
      <li><b>Hayretle başla:</b> «Acaba… SEN ne düşünüyorsun?»</li>
      <li><b>Fiziksel yap:</b> ona dokunabilir, hareket ettirebilir veya canlandırabilir misin?</li>
      <li><b>Minicik tut:</b> bu yaşta 30 saniye ile 3 dakika, 30 dakikalık bir dersi yener.</li>
    </ul>
    Aşağıdaki sorulardan birini deneyin — veya bana <b>ekran süresi</b>, <b>gelişim adımları</b>, <b>yağmurlu günler</b>, <b>Wonder Camera</b>, <b>masallar</b> veya <b>bugün ne yapmalı</b> hakkında sorun.`
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
