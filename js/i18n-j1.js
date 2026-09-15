/* ============================================================
   WonderSprout — AI parent-copilot replies
   (es/fr/de/ar/zh)
   keys: ai.r0 .. ai.r22 (indexed to WSData.AI_KNOWLEDGE order),
         ai.fallback
   NOTE: keyed by INDEX, not by entry id, because AI_KNOWLEDGE
   contains a duplicate id ("sleep" at indexes 8 and 18).
   HTML structure is preserved verbatim.
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    es: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        Aquí tienes tres ideas para hoy, en orden de asombro:
        <ul>
          <li><b>2 minutos de pantalla:</b> abre la <b>Maravilla del Día</b> en el panel para padres y haced juntos la micro-experiencia «Explorar».</li>
          <li><b>5 minutos prácticos:</b> el paso «Mundo real» — solo necesita cosas que ya tenéis en casa.</li>
          <li><b>0 minutos de pantalla, máximo aprendizaje:</b> salid fuera. Señalad algo y preguntad «¿por qué será…?» La curiosidad gana a cualquier app.</li>
        </ul>
        <b>Valor de aprendizaje:</b> pantalla corta + seguimiento en el mundo real construye el ciclo DESCUBRIR → CONECTAR del método WonderSprout.`,

      "ai.r1": `<span class="ai-tag">🛡️ Filosofía de pantalla</span>
        La regla de WonderSprout: <b>el tiempo de pantalla es una puerta, no un destino.</b>
        <ul>
          <li>Limita las sesiones a las micro-experiencias de la plataforma: <b>de 30 segundos a 3 minutos</b>.</li>
          <li>Empareja siempre la pantalla con el paso <b>«Pruébalo en la vida real»</b> que sigue a cada actividad.</li>
          <li>Atento a los ojos cansados o al malestar — es la señal para parar y moverse.</li>
        </ul>
        Si la mejor actividad ahora es al aire libre, WonderSprout te dirá que cierres la app. Es una función, no un fallo. Para orientación médica personalizada sobre límites de pantalla, tu pediatra es la fuente adecuada.`,

      "ai.r2": `<span class="ai-tag">💛 Respuesta con cariño</span>
        Cada niño crece a su propio ritmo y un rango amplio es normal — WonderSprout nunca clasifica ni diagnostica a los niños.
        <ul>
          <li>Usa la pestaña <b>Observaciones</b> para seguir «aún no / a veces / con constancia» durante semanas — los patrones importan más que los momentos sueltos.</li>
          <li>Si algo te preocupa, ese sentimiento merece una conversación real: <b>por favor, habla con tu pediatra o con un profesional del desarrollo infantil.</b></li>
          <li>Mientras tanto, la mejor «intervención» es siempre la misma: hablar, cantar, jugar y leer juntos cada día.</li>
        </ul>
        WonderSprout AI ofrece ideas de juego, nunca consejos médicos.`,

      "ai.r3": `<span class="ai-tag">📊 Esta semana</span>
        Según los datos del panel:
        <ul>
          <li><b>Área más explorada:</b> Ciencia y Naturaleza — las simulaciones de Flota/Hunde y Planta que crece fueron las favoritas.</li>
          <li><b>Habilidad en alza:</b> ¡la predicción! Preguntar «¿se hundirá?» antes de probar es un gran paso de pensamiento.</li>
          <li><b>Enfoque sugerido después:</b> <b>patrones</b> — probad a ordenar calcetines por color al hacer la colada (cero pantallas, aprendizaje completo).</li>
        </ul>
        Todos los detalles están en tu tarjeta <b>Informe semanal</b> del panel para padres.`,

      "ai.r4": `<span class="ai-tag">🌧️ Asombro de día lluvioso</span>
        ¡La lluvia es un laboratorio!
        <ul>
          <li><b>Observar:</b> sentaos junto a la ventana — «¿Adónde van las gotas? ¿Rápido o despacio?»</li>
          <li><b>Escuchar:</b> lluvia en el cristal frente a lluvia en una olla. ¿Fuerte o suave?</li>
          <li><b>Atrapar:</b> sacad un vaso por la ventana (con un adulto) — ¿cuánto tarda en llenarse?</li>
          <li><b>Luego pantalla:</b> 2 minutos del mundo <b>Tierra y Clima</b> para conectar lo visto con el día/la noche y las nubes.</li>
        </ul>
        <b>Valor de aprendizaje:</b> primero la observación real, después la conexión digital — el ciclo WonderSprout.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        Cualquier objeto seguro puede convertirse en una lección:
        <ul>
          <li>Apunta la Wonder Camera a un objeto — lo identifica y abre una <b>Tarjeta Wonder</b>.</li>
          <li>Cada tarjeta conecta el objeto con mundos de aprendizaje (color, matemáticas, ciencia…) con 3 actividades rápidas.</li>
          <li>Toda tarjeta termina con un <b>reto del mundo real</b>, para que el aprendizaje salga de la pantalla.</li>
        </ul>
        Prueba la demo: <b>WonderSprout Camera → toca un objeto</b>. Nota de privacidad: el reconocimiento funciona en el momento — no se guardan fotos de tu hijo.`,

      "ai.r6": `<span class="ai-tag">📖 Hora del cuento</span>
        Los cuentos son máquinas de conexión:
        <ul>
          <li><b>«Pip y la semillita»</b> — crecimiento, paciencia y naturaleza. Combina con plantar una judía de verdad.</li>
          <li><b>«El gran baño de Bloop»</b> — flotar frente a hundirse con momentos de predicción integrados. Combina con las pruebas en el baño.</li>
          <li>Deja que tu hijo <b>elija el camino del cuento</b> — decidir construye iniciativa y lenguaje.</li>
        </ul>
        Consejo: después de leer, pregunta «¿Qué hacemos ahora?» y deja que el niño dirija. Ese es el nivel CREAR.`,

      "ai.r7": `<span class="ai-tag">🍎 Asombro en la cocina</span>
        La cocina es un currículo completo:
        <ul>
          <li><b>Matemáticas:</b> contad uvas en un plato — «una más» y «ya no queda».</li>
          <li><b>Ciencia:</b> ¿qué alimentos flotan en un bol con agua? (¿Uva? ¿Plátano? ¡Con piel y sin piel!)</li>
          <li><b>Sentidos:</b> crujiente frente a blando, caliente frente a frío — nombrad cada uno.</li>
        </ul>
        Después, la Wonder Camera puede convertir cualquier fruta en una Tarjeta Wonder.`,

      "ai.r8": `<span class="ai-tag">🌙 Asombro a la hora de dormir</span>
        Una rutina previsible gana a una perfecta. Prueba esta rutina WonderSprout:
        <ul>
          <li><b>Cálido + tenue:</b> baño y luego luces bajas — pantallas brillantes apagadas al menos 30 minutos antes de dormir.</li>
          <li><b>Un cuento, el mismo sitio:</b> leed «La Luna soñolienta» — termina con un ritual de buenas noches que podéis copiar.</li>
          <li><b>Una canción:</b> «¿Estás dormido?» en WonderSprout Music está construida como nana lenta.</li>
          <li><b>Buenas noches a tres cosas:</b> la Luna, un juguete y el uno al otro — un pequeño hábito de gratitud.</li>
        </ul>
        <b>Valor de aprendizaje:</b> las rutinas construyen seguridad y pensamiento secuencial («primero el baño, luego el cuento, luego la canción»). Para preocupaciones persistentes sobre el sueño, tu pediatra es la guía adecuada.`,

      "ai.r9": `<span class="ai-tag">💛 Emociones grandes</span>
        Las emociones intensas son normales a esta edad — el cerebro emocional crece más rápido que las palabras para describirlo.
        <ul>
          <li><b>Nombrarlo para domarlo:</b> «Estás frustrado porque la torre se cayó.» Nombrar las emociones construye el lenguaje para gestionarlas.</li>
          <li><b>Sé el ancla tranquila:</b> siéntate cerca, respira despacio, espera. La corregulación va antes que la autorregulación.</li>
          <li><b>Después de la tormenta:</b> un abrazo y luego repasadlo con calma — «la torre se cayó, te enfadaste, la reconstruimos.»</li>
        </ul>
        WonderSprout nunca diagnostica. Si las emociones intensas parecen frecuentes, muy fuertes o preocupantes, <b>por favor habla con tu pediatra o con un profesional del desarrollo infantil.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 Asombro en la naturaleza</span>
        El aire libre es el aula original — y es gratis:
        <ul>
          <li><b>Caza de colores:</b> encontrad algo verde, marrón, amarillo y rojo.</li>
          <li><b>Conteo de sonidos:</b> parad y escuchad — ¿cuántos sonidos distintos? Pájaros, viento, coches…</li>
          <li><b>Bolsillo de tesoros:</b> recoged 3 tesoros seguros (hoja, piedra, palo) y nombrad cada uno.</li>
          <li><b>De vuelta a casa:</b> 2 minutos del Laboratorio de Vida conectan lo visto con cómo crecen las plantas.</li>
        </ul>
        <b>Valor de aprendizaje:</b> la entrada sensorial real (terreno irregular, luz cambiante, sonidos vivos) construye el cerebro de formas que ninguna pantalla puede.`,

      "ai.r11": `<span class="ai-tag">🚗 Asombro en el viaje</span>
        Los viajes largos son tiempo de asombro:
        <ul>
          <li><b>Veo veo de colores:</b> «¡Veo algo ROJO!» — los peques pueden jugar con ayuda.</li>
          <li><b>Contar por el camino:</b> camiones, túneles, puentes — contar mata el aburrimiento.</li>
          <li><b>Cantar juntos:</b> WonderSprout Music no necesita cobertura; prepara 3 favoritas.</li>
          <li><b>Maravillas de la ventanilla:</b> narrad lo que pasa: «¡Una vaca! ¡Un río! ¡Un molino girando!»</li>
        </ul>
        Los tramos sin pantalla son ideales aquí; guarda un cuento corto para los 10 minutos más duros.`,

      "ai.r12": `<span class="ai-tag">🎂 Asombro de celebración</span>
        Los cumpleaños son lecciones de matemáticas encubiertas:
        <ul>
          <li><b>Contad las velas</b> juntos — una por año, conteo uno a uno en la vida real.</li>
          <li><b>Cantad «Cumpleaños feliz»</b> — está en WonderSprout Music con letra de karaoke.</li>
          <li><b>Práctica de soplar:</b> soplar las velas es control real del aliento para el habla.</li>
          <li><b>Guarda el momento:</b> añade después una entrada al Diario Wonder con una foto.</li>
        </ul>
        A esta edad, las fiestas deben ser cortas — una hora de alegría gana a tres horas de agobio.`,

      "ai.r13": `<span class="ai-tag">🚽 Paciencia con el orinal</span> La mayoría de los niños muestran señales entre los 18 y los 36 meses — fíjate en el interés, no en la edad. Combínalo con la <b>Estación de clasificación</b> (¡clasificar mojado/seco!) y celebra cada intento. Nunca castigues los accidentes; el cerebro aprende el control de la vejiga mediante repetición tranquila.`,

      "ai.r14": `<span class="ai-tag">🤝 Sobre compartir</span> Antes de los ~30 meses, «compartir» es imposible evolutivamente — «¡mío!» es un yo sano. Narra los turnos en su lugar: «Tu turno, luego el turno de Ava.» El ritmo de turnos de la <b>Fiesta de patrones</b> construye la misma habilidad neuronal.`,

      "ai.r15": `<span class="ai-tag">🥦 Comer de forma selectiva</span> Un niño pequeño puede necesitar de 10 a 15 exposiciones para aceptar un alimento nuevo. Mantén las comidas sin presión: el adulto decide qué y cuándo, el niño decide cuánto. Contar uvas en el <b>Laboratorio de Matemáticas</b> hace que la comida sea divertida sin presión.`,

      "ai.r16": `<span class="ai-tag">🦷 Batallas con el cepillado</span> Cepilla dos veces al día desde el primer diente; deja que tu hijo «cepille» primero a un peluche (igual que el juego de cuidados de <b>Amigos los animales</b>). Una canción ayuda con el tiempo — prueba <b>Este viejecito</b> en el mundo de Música.`,

      "ai.r17": `<span class="ai-tag">🗣️ Dos idiomas</span> Los bebés bilingües pueden mezclar palabras — es normal, no confusión. Funciona tanto un progenitor-un idioma como un lugar-un idioma. El selector de idioma de WonderSprout permite que toda la app modele el cambio con suavidad.`,

      "ai.r18": `<span class="ai-tag">😴 Retrocesos del sueño</span> Las regresiones del sueño suelen llegar hacia los ~4, 8–10, 12–18 y 24 meses — normalmente un salto cerebral. Mantén la rutina aburrida y constante; relajaos con el cuento <b>Buenas noches, estrellita</b> a bajo brillo.`,

      "ai.r19": `<span class="ai-tag">🌋 Tirar y pegar</span> Emociones grandes, palabras pequeñas. Nombra la emoción y mantén el límite: «No voy a dejar que tires. Estás muy enfadado.» Ofrece una salida válida — una pelota para tirar fuera (¡energía del Patio de Física!). La constancia es amabilidad.`,

      "ai.r20": `<span class="ai-tag">🖍️ Garabatos</span> Los garabatos desde los ~12–15 meses son ciencia motora del hombro a la muñeca, todavía no «dibujos». El modo de dibujo del <b>Estudio</b> lo refleja: proceso por encima de resultado. Ofrece ceras gruesas y papel grande; narra los colores.`,

      "ai.r21": `<span class="ai-tag">🏫 Adaptarse</span> Despedidas cortas, recogidas constantes y un objeto de consuelo ganan al escabullirse. Un ritual con foto del reencuentro (como el <b>Diario Wonder</b>) ayuda al niño a predecir tu vuelta — la previsibilidad es seguridad.`,

      "ai.r22": `<span class="ai-tag">🚗 En movimiento</span> Los viajes en coche son oro para narrar: «¡Coche rojo! ¡Camión grande!» — el vocabulario de <b>Banderas y países</b> y <b>Clasificación</b> se transfiere directamente a mirar por la ventanilla. Cantad los ritmos tipo <b>Las ruedas del autobús</b> del mundo de Música en las paradas.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    ¡Qué pregunta más bonita! Así responde WonderSprout a casi todo con un niño pequeño:
    <ul>
      <li><b>Empieza por el asombro:</b> «Me pregunto… ¿tú qué crees?»</li>
      <li><b>Hazlo físico:</b> ¿puedes tocarlo, moverlo o representarlo?</li>
      <li><b>Mantenlo minúsculo:</b> de 30 segundos a 3 minutos gana a una lección de 30 minutos a esta edad.</li>
    </ul>
    Prueba una de las preguntas de abajo — o pregúntame por el <b>tiempo de pantalla</b>, los <b>hitos</b>, los <b>días de lluvia</b>, la <b>Wonder Camera</b>, los <b>cuentos</b> o <b>qué hacer hoy</b>.`
    },

    fr: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        Voici trois idées pour aujourd'hui, dans l'ordre de l'émerveillement :
        <ul>
          <li><b>2 minutes d'écran :</b> ouvre l'<b>Émerveillement du jour</b> sur le tableau de bord parent et fais la micro-expérience « Explorer » ensemble.</li>
          <li><b>5 minutes pratiques :</b> l'étape « Monde réel » — elle ne demande que des choses que tu as déjà à la maison.</li>
          <li><b>0 minute d'écran, maximum d'apprentissage :</b> sors dehors. Montre une chose et demande « je me demande pourquoi… ? » La curiosité bat n'importe quelle appli.</li>
        </ul>
        <b>Valeur d'apprentissage :</b> écran court + prolongement dans le monde réel construit la boucle DÉCOUVRIR → RELIER de la méthode WonderSprout.`,

      "ai.r1": `<span class="ai-tag">🛡️ Philosophie de l'écran</span>
        La règle de WonderSprout : <b>le temps d'écran est une porte, pas une destination.</b>
        <ul>
          <li>Limite les séances aux micro-expériences de la plateforme : <b>30 secondes à 3 minutes</b>.</li>
          <li>Associe toujours l'écran à l'étape <b>« Essaie-le en vrai »</b> qui suit chaque activité.</li>
          <li>Surveille les yeux fatigués ou l'agitation — c'est le signal pour arrêter et bouger.</li>
        </ul>
        Si la meilleure activité du moment est dehors, WonderSprout te dira de fermer l'appli. C'est une fonctionnalité, pas un bug. Pour un avis médical personnalisé sur les limites d'écran, ton pédiatre est la bonne source.`,

      "ai.r2": `<span class="ai-tag">💛 Réponse bienveillante</span>
        Chaque enfant grandit à son propre rythme et une large fourchette est normale — WonderSprout ne classe ni ne diagnostique jamais les enfants.
        <ul>
          <li>Utilise l'onglet <b>Observations</b> pour suivre « pas encore / parfois / régulièrement » sur des semaines — les tendances comptent plus que les moments isolés.</li>
          <li>Si quelque chose t'inquiète, ce sentiment mérite une vraie conversation : <b>parle-en à ton pédiatre ou à un professionnel du développement de l'enfant.</b></li>
          <li>En attendant, la meilleure « intervention » est toujours la même : parler, chanter, jouer et lire ensemble chaque jour.</li>
        </ul>
        WonderSprout AI donne des idées de jeu, jamais de conseils médicaux.`,

      "ai.r3": `<span class="ai-tag">📊 Cette semaine</span>
        D'après les données du tableau de bord :
        <ul>
          <li><b>Domaine le plus exploré :</b> Sciences et Nature — les simulations Flotte/Coule et Plante qui pousse étaient les favorites.</li>
          <li><b>Compétence en progression :</b> la prédiction ! « Va-t-il couler ? » avant de tester est une grande étape de réflexion.</li>
          <li><b>Focus suggéré ensuite :</b> les <b>motifs</b> — essaie de trier les chaussettes par couleur à la lessive (zéro écran, apprentissage complet).</li>
        </ul>
        Tous les détails se trouvent dans ta carte <b>Rapport hebdomadaire</b> du tableau de bord parent.`,

      "ai.r4": `<span class="ai-tag">🌧️ Émerveillement sous la pluie</span>
        La pluie est un laboratoire !
        <ul>
          <li><b>Regarder :</b> asseyez-vous près de la fenêtre — « Où vont les gouttes ? Vite ou lentement ? »</li>
          <li><b>Écouter :</b> la pluie sur la vitre contre la pluie sur une casserole. Fort ou doux ?</li>
          <li><b>Attraper :</b> tends un gobelet par la fenêtre (avec un adulte) — combien de temps pour le remplir ?</li>
          <li><b>Ensuite l'écran :</b> 2 minutes du monde <b>Terre et Météo</b> pour relier ce que vous avez vu au jour/à la nuit et aux nuages.</li>
        </ul>
        <b>Valeur d'apprentissage :</b> d'abord l'observation réelle, ensuite la connexion numérique — la boucle WonderSprout.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        N'importe quel objet sûr peut devenir une leçon :
        <ul>
          <li>Pointe la Wonder Camera sur un objet — elle l'identifie et ouvre une <b>Carte Wonder</b>.</li>
          <li>Chaque carte relie l'objet aux mondes d'apprentissage (couleur, maths, science…) avec 3 activités rapides.</li>
          <li>Chaque carte se termine par un <b>défi du monde réel</b>, pour que l'apprentissage quitte l'écran.</li>
        </ul>
        Essaie la démo : <b>WonderSprout Camera → touche un objet</b>. Note de confidentialité : la reconnaissance s'exécute sur l'instant — aucune photo de ton enfant n'est conservée.`,

      "ai.r6": `<span class="ai-tag">📖 L'heure du conte</span>
        Les histoires sont des machines à lien :
        <ul>
          <li><b>« Pip et la petite graine »</b> — croissance, patience et nature. À pairer avec la plantation d'un vrai haricot.</li>
          <li><b>« Le grand bain de Bloop »</b> — flotter contre couler avec des moments de prédiction intégrés. À pairer avec les tests du bain.</li>
          <li>Laisse ton enfant <b>choisir le chemin de l'histoire</b> — décider construit l'autonomie et le langage.</li>
        </ul>
        Astuce : après la lecture, demande « Que fait-on ensuite ? » et laisse l'enfant diriger. C'est le niveau CRÉER.`,

      "ai.r7": `<span class="ai-tag">🍎 Émerveillement en cuisine</span>
        La cuisine est un programme complet :
        <ul>
          <li><b>Maths :</b> compte des grains de raisin sur une assiette — « un de plus » et « il n'y en a plus ».</li>
          <li><b>Science :</b> quels aliments flottent dans un bol d'eau ? (Raisin ? Banane ? Pelée ou non pelée !)</li>
          <li><b>Sens :</b> croquant contre moelleux, chaud contre froid — nommez chacun.</li>
        </ul>
        Ensuite, la Wonder Camera peut transformer n'importe quel fruit en Carte Wonder.`,

      "ai.r8": `<span class="ai-tag">🌙 Émerveillement du coucher</span>
        Une routine prévisible vaut mieux qu'une parfaite. Essaie cette routine WonderSprout :
        <ul>
          <li><b>Chaud + tamisé :</b> le bain, puis des lumières basses — écrans lumineux éteints au moins 30 minutes avant le coucher.</li>
          <li><b>Une histoire, toujours au même endroit :</b> lis « La Lune endormie » — elle se termine par un rituel du soir que tu peux copier.</li>
          <li><b>Une chanson :</b> « Frère Jacques » dans WonderSprout Music est conçue comme une berceuse lente.</li>
          <li><b>Bonne nuit à trois choses :</b> la Lune, un jouet, et l'un à l'autre — une petite habitude de gratitude.</li>
        </ul>
        <b>Valeur d'apprentissage :</b> les routines construisent la sécurité et la pensée séquentielle (« d'abord le bain, puis l'histoire, puis la chanson »). Pour des inquiétudes persistantes sur le sommeil, ton pédiatre est le bon guide.`,

      "ai.r9": `<span class="ai-tag">💛 Grandes émotions</span>
        Les émotions intenses sont normales à cet âge — le cerveau émotionnel grandit plus vite que les mots pour le décrire.
        <ul>
          <li><b>Nommer pour apprivoiser :</b> « Tu es frustré parce que la tour est tombée. » Nommer les émotions construit le langage pour les gérer.</li>
          <li><b>Reste l'ancre calme :</b> assieds-toi près, respire lentement, attends. La co-régulation vient avant l'auto-régulation.</li>
          <li><b>Après la tempête :</b> un câlin, puis rejoue-le doucement — « la tour est tombée, tu étais en colère, on l'a reconstruite. »</li>
        </ul>
        WonderSprout ne diagnostique jamais. Si les émotions intenses semblent fréquentes, fortes ou inquiétantes, <b>parle-en à ton pédiatre ou à un professionnel du développement de l'enfant.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 Émerveillement nature</span>
        Le plein air est la salle de classe originelle — et c'est gratuit :
        <ul>
          <li><b>Chasse aux couleurs :</b> trouve quelque chose de vert, marron, jaune et rouge.</li>
          <li><b>Compter les sons :</b> arrête-toi et écoute — combien de sons différents ? Oiseaux, vent, voitures…</li>
          <li><b>Poche à trésors :</b> récoltez 3 trésors sûrs (feuille, caillou, bâton) et nommez chacun.</li>
          <li><b>De retour à la maison :</b> 2 minutes du Labo Vie relient ce que vous avez vu à la façon dont les plantes poussent.</li>
        </ul>
        <b>Valeur d'apprentissage :</b> l'entrée sensorielle réelle (sol irrégulier, lumière changeante, sons vivants) construit le cerveau d'une façon qu'aucun écran ne peut.`,

      "ai.r11": `<span class="ai-tag">🚗 Émerveillement en voyage</span>
        Les longs trajets sont du temps d'émerveillement :
        <ul>
          <li><b>Jeu des couleurs :</b> « Je vois quelque chose de ROUGE ! » — les tout-petits peuvent jouer avec de l'aide.</li>
          <li><b>Compter en route :</b> camions, tunnels, ponts — compter tue l'ennui.</li>
          <li><b>Chanter ensemble :</b> WonderSprout Music n'a pas besoin de réseau ; mets 3 favorites en file.</li>
          <li><b>Merveilles de la vitre :</b> raconte ce qui passe : « Une vache ! Une rivière ! Un moulin qui tourne ! »</li>
        </ul>
        Les portions sans écran sont idéales ici ; garde une courte histoire pour les 10 minutes les plus dures.`,

      "ai.r12": `<span class="ai-tag">🎂 Émerveillement de fête</span>
        Les anniversaires sont des leçons de maths secrètes :
        <ul>
          <li><b>Comptez les bougies</b> ensemble — une par année, comptage un à un dans la vraie vie.</li>
          <li><b>Chantez « Joyeux anniversaire »</b> — il est dans WonderSprout Music avec les paroles karaoké.</li>
          <li><b>Entraînement à souffler :</b> souffler les bougies est un vrai contrôle du souffle pour la parole.</li>
          <li><b>Garde le moment :</b> ajoute ensuite une entrée au Journal Wonder avec une photo.</li>
        </ul>
        À cet âge, garde les fêtes courtes — une heure de joie vaut mieux que trois heures de submersion.`,

      "ai.r13": `<span class="ai-tag">🚽 Patience du pot</span> La plupart des enfants montrent des signes entre 18 et 36 mois — observe l'intérêt, pas l'âge. Associe-le à la <b>Station de tri</b> (tri humide/sec !) et célèbre chaque essai. Ne punis jamais les accidents ; le cerveau apprend la vessie par répétition calme.`,

      "ai.r14": `<span class="ai-tag">🤝 Sur le partage</span> Avant ~30 mois, « partager » est développementalement impossible — « à moi ! » est un soi sain. Raconte les tours à la place : « Ton tour, puis le tour d'Ava. » Le rythme de tours de la <b>Fête des motifs</b> construit la même compétence neuronale.`,

      "ai.r15": `<span class="ai-tag">🥦 Manger difficile</span> Un tout-petit peut avoir besoin de 10 à 15 expositions pour accepter un nouvel aliment. Garde les repas sans pression : le parent décide quoi/quand, l'enfant décide combien. Compter des raisins dans le <b>Labo Maths</b> rend la nourriture ludique sans pression.`,

      "ai.r16": `<span class="ai-tag">🦷 Batailles du brossage</span> Brosse deux fois par jour dès la première dent ; laisse ton enfant « brosser » d'abord une peluche (comme le jeu de soins des <b>Amis les animaux</b>). Une chanson aide à tenir le temps — essaie <b>Ce vieux monsieur</b> dans le monde Musique.`,

      "ai.r17": `<span class="ai-tag">🗣️ Deux langues</span> Les bébés bilingues peuvent mélanger les mots — c'est normal, pas de la confusion. Un-parent-une-langue ou un-lieu-une-langue fonctionnent tous les deux. Le sélecteur de langue de WonderSprout permet à toute l'appli de modéliser le changement en douceur.`,

      "ai.r18": `<span class="ai-tag">😴 Régressions du sommeil</span> Les régressions du sommeil surviennent souvent vers ~4, 8–10, 12–18 et 24 mois — généralement un bond cérébral. Garde la routine ennuyeuse et constante ; détendez-vous avec l'histoire <b>Bonne nuit, petite étoile</b> à faible luminosité.`,

      "ai.r19": `<span class="ai-tag">🌋 Jeter et frapper</span> Grandes émotions, petits mots. Nomme l'émotion, tiens la limite : « Je ne te laisserai pas jeter. Tu es très en colère. » Propose une sortie acceptable — une balle à lancer dehors (énergie du Terrain de physique !). La constance est de la bienveillance.`,

      "ai.r20": `<span class="ai-tag">🖍️ Gribouillage</span> Le gribouillage dès ~12–15 mois est de la science motrice de l'épaule au poignet, pas encore des « dessins ». Le mode dessin du <b>Studio</b> le reflète : le processus avant le produit. Propose de gros crayons et du grand papier ; raconte les couleurs.`,

      "ai.r21": `<span class="ai-tag">🏫 S'adapter</span> Des au revoir courts, des récupérations constantes et un objet de réconfort valent mieux que s'éclipser. Un rituel photo des retrouvailles (comme le <b>Journal Wonder</b>) aide l'enfant à prévoir ton retour — la prévisibilité est la sécurité.`,

      "ai.r22": `<span class="ai-tag">🚗 En route</span> Les trajets en voiture sont de l'or narratif : « Voiture rouge ! Gros camion ! » — le vocabulaire de <b>Drapeaux et pays</b> et du <b>Tri</b> se transfère directement à l'observation par la vitre. Chantez les rythmes à la <b>Les roues de l'autobus</b> du monde Musique aux arrêts.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    Voilà une jolie question ! Voici la façon WonderSprout de répondre à presque tout avec un tout-petit :
    <ul>
      <li><b>Commence par l'émerveillement :</b> « Je me demande… qu'est-ce que TU en penses ? »</li>
      <li><b>Rends-le physique :</b> peux-tu le toucher, le bouger ou le mimer ?</li>
      <li><b>Garde-le minuscule :</b> 30 secondes à 3 minutes battent une leçon de 30 minutes à cet âge.</li>
    </ul>
    Essaie une des questions ci-dessous — ou demande-moi à propos du <b>temps d'écran</b>, des <b>étapes</b>, des <b>jours de pluie</b>, de la <b>Wonder Camera</b>, des <b>histoires</b> ou de <b>quoi faire aujourd'hui</b>.`
    },

    de: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        Hier sind drei Ideen für heute, in der Reihenfolge des Staunens:
        <ul>
          <li><b>2 Minuten Bildschirm:</b> Öffne das <b>Wunder des Tages</b> im Eltern-Dashboard und macht die Mikro-Erfahrung „Entdecken“ zusammen.</li>
          <li><b>5 Minuten Mitmachen:</b> Der Schritt „Echte Welt“ — er braucht nur Dinge, die ihr schon zu Hause habt.</li>
          <li><b>0 Minuten Bildschirm, meistes Lernen:</b> Geht raus. Zeigt auf etwas und fragt „Ich frage mich, warum…?“ Neugier schlägt jede App.</li>
        </ul>
        <b>Lernwert:</b> kurzer Bildschirm + Anschluss in der echten Welt baut die ENTDECKEN → VERBINDEN-Schleife der WonderSprout-Methode.`,

      "ai.r1": `<span class="ai-tag">🛡️ Bildschirm-Philosophie</span>
        Die WonderSprout-Regel: <b>Bildschirmzeit ist eine Tür, kein Ziel.</b>
        <ul>
          <li>Beschränke Sitzungen auf die Mikro-Erfahrungen der Plattform: <b>30 Sekunden bis 3 Minuten</b>.</li>
          <li>Kopple den Bildschirm immer mit dem Schritt <b>„Probier es im echten Leben“</b>, der jeder Aktivität folgt.</li>
          <li>Achte auf müde Augen oder Quengelei — das ist das Signal zum Aufhören und Bewegen.</li>
        </ul>
        Wenn die beste Aktivität gerade draußen ist, sagt dir WonderSprout, dass du die App schließen sollst. Das ist eine Funktion, kein Fehler. Für persönliche medizinische Beratung zu Bildschirmgrenzen ist dein Kinderarzt die richtige Quelle.`,

      "ai.r2": `<span class="ai-tag">💛 Fürsorgliche Antwort</span>
        Jedes Kind wächst in seinem eigenen Tempo, und eine breite Spanne ist normal — WonderSprout bewertet oder diagnostiziert Kinder nie.
        <ul>
          <li>Nutze den Tab <b>Beobachtungen</b>, um „noch nicht / manchmal / beständig“ über Wochen zu verfolgen — Muster zählen mehr als einzelne Momente.</li>
          <li>Wenn dich etwas beunruhigt, verdient dieses Gefühl ein echtes Gespräch: <b>Bitte sprich mit deinem Kinderarzt oder einer Fachperson für kindliche Entwicklung.</b></li>
          <li>Bis dahin ist die beste „Intervention“ immer dieselbe: täglich zusammen reden, singen, spielen und lesen.</li>
        </ul>
        WonderSprout AI gibt spielerische Ideen, niemals medizinische Ratschläge.`,

      "ai.r3": `<span class="ai-tag">📊 Diese Woche</span>
        Basierend auf den Dashboard-Daten:
        <ul>
          <li><b>Meisterkundeter Bereich:</b> Wissenschaft & Natur — die Simulationen Schwimmt/Sinkt und Wachsende Pflanze waren die Favoriten.</li>
          <li><b>Steigende Fähigkeit:</b> Vorhersage! „Wird es sinken?“ vor dem Testen ist ein großer Denkschritt.</li>
          <li><b>Als Nächstes vorgeschlagen:</b> <b>Muster</b> — versucht beim Wäschewaschen Socken nach Farbe zu sortieren (null Bildschirme, volles Lernen).</li>
        </ul>
        Alle Details findest du in deiner <b>Wochenbericht</b>-Karte im Eltern-Dashboard.`,

      "ai.r4": `<span class="ai-tag">🌧️ Regenwunder</span>
        Regen ist ein Labor!
        <ul>
          <li><b>Schauen:</b> Setzt euch ans Fenster — „Wohin gehen die Tropfen? Schnell oder langsam?“</li>
          <li><b>Hören:</b> Regen auf dem Fenster gegen Regen auf einem Topf. Laut oder leise?</li>
          <li><b>Fangen:</b> Haltet einen Becher zum Fenster hinaus (mit einem Erwachsenen) — wie lange bis er voll ist?</li>
          <li><b>Dann Bildschirm:</b> 2 Minuten der Welt <b>Erde & Wetter</b>, um das Gesehene mit Tag/Nacht und Wolken zu verbinden.</li>
        </ul>
        <b>Lernwert:</b> zuerst echte Beobachtung, dann digitale Verbindung — die WonderSprout-Schleife.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        Jedes sichere Objekt kann eine Lektion werden:
        <ul>
          <li>Richte die Wonder Camera auf ein Objekt — sie erkennt es und öffnet eine <b>Wonder-Karte</b>.</li>
          <li>Jede Karte verbindet das Objekt mit Lernwelten (Farbe, Mathe, Wissenschaft…) mit 3 schnellen Aktivitäten.</li>
          <li>Jede Karte endet mit einer <b>Herausforderung in der echten Welt</b>, damit das Lernen den Bildschirm verlässt.</li>
        </ul>
        Probier die Demo: <b>WonderSprout Camera → tippe ein Objekt an</b>. Hinweis zum Datenschutz: Die Erkennung läuft im Moment — es werden keine Fotos deines Kindes gespeichert.`,

      "ai.r6": `<span class="ai-tag">📖 Vorlesezeit</span>
        Geschichten sind Verbindungsmaschinen:
        <ul>
          <li><b>„Pip und das kleine Samenkorn“</b> — Wachstum, Geduld und Natur. Passt dazu, eine echte Bohne zu pflanzen.</li>
          <li><b>„Bloops großes Bad“</b> — schwimmen gegen sinken mit eingebauten Vorhersage-Momenten. Passt zu Tests in der Badewanne.</li>
          <li>Lass dein Kind <b>den Weg der Geschichte wählen</b> — Entscheidungen bauen Eigenständigkeit und Sprache auf.</li>
        </ul>
        Tipp: Frage nach dem Lesen „Was machen wir als Nächstes?“ und lass das Kind bestimmen. Das ist die Stufe ERSCHAFFEN.`,

      "ai.r7": `<span class="ai-tag">🍎 Küchenwunder</span>
        Die Küche ist ein vollständiger Lehrplan:
        <ul>
          <li><b>Mathe:</b> Zählt Weintrauben auf einen Teller — „eine mehr“ und „alle weg“.</li>
          <li><b>Wissenschaft:</b> Welche Lebensmittel schwimmen in einer Schüssel Wasser? (Weintraube? Banane? Mit und ohne Schale!)</li>
          <li><b>Sinne:</b> knackig gegen weich, warm gegen kalt — benennt jedes.</li>
        </ul>
        Danach kann die Wonder Camera jede Frucht in eine Wonder-Karte verwandeln.`,

      "ai.r8": `<span class="ai-tag">🌙 Einschlaf-Wunder</span>
        Eine vorhersehbare Routine schlägt eine perfekte. Probier diese WonderSprout-Routine:
        <ul>
          <li><b>Warm + gedimmt:</b> Bad, dann gedämpftes Licht — helle Bildschirme mindestens 30 Minuten vor dem Schlafengehen aus.</li>
          <li><b>Eine Geschichte, derselbe Platz:</b> Lest „Der schläfrige Mond“ — sie endet mit einem Gutenachtritual, das du übernehmen kannst.</li>
          <li><b>Ein Lied:</b> „Bruder Jakob“ in WonderSprout Music ist als langsames Schlaflied gebaut.</li>
          <li><b>Gute Nacht zu drei Dingen:</b> dem Mond, einem Spielzeug und einander — eine kleine Dankbarkeitsgewohnheit.</li>
        </ul>
        <b>Lernwert:</b> Routinen bauen Sicherheit und Sequenzdenken („erst Bad, dann Geschichte, dann Lied“). Bei anhaltenden Schlaf-Sorgen ist dein Kinderarzt der richtige Ratgeber.`,

      "ai.r9": `<span class="ai-tag">💛 Große Gefühle</span>
        Große Gefühle sind in diesem Alter normal — das Gefühlsgehirn wächst schneller als die Worte, es zu beschreiben.
        <ul>
          <li><b>Benennen, um zu zähmen:</b> „Du bist frustriert, weil der Turm umgefallen ist.“ Gefühle zu benennen baut die Sprache, sie zu steuern.</li>
          <li><b>Bleib der ruhige Anker:</b> Setz dich in die Nähe, atme langsam, warte. Koregulation kommt vor Selbstregulation.</li>
          <li><b>Nach dem Sturm:</b> eine Umarmung, dann spielt es sanft nach — „der Turm fiel, du warst wütend, wir haben ihn neu gebaut.“</li>
        </ul>
        WonderSprout diagnostiziert nie. Wenn große Gefühle häufig, heftig oder beunruhigend wirken, <b>sprich bitte mit deinem Kinderarzt oder einer Fachperson für kindliche Entwicklung.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 Naturwunder</span>
        Draußen ist das ursprüngliche Klassenzimmer — und es ist kostenlos:
        <ul>
          <li><b>Farbsuche:</b> Finde etwas Grünes, Braunes, Gelbes und Rotes.</li>
          <li><b>Klänge zählen:</b> Bleibt stehen und hört — wie viele verschiedene Geräusche? Vögel, Wind, Autos…</li>
          <li><b>Schatztasche:</b> Sammelt 3 sichere Schätze (Blatt, Stein, Stock) und benennt jeden.</li>
          <li><b>Zurück zu Hause:</b> 2 Minuten im Lebens-Labor verbinden das Gesehene damit, wie Pflanzen wachsen.</li>
        </ul>
        <b>Lernwert:</b> echte Sinneseindrücke (unebener Boden, wechselndes Licht, lebendige Geräusche) bauen Gehirne auf eine Weise, die kein Bildschirm kann.`,

      "ai.r11": `<span class="ai-tag">🚗 Reisewunder</span>
        Lange Fahrten sind Staunen-Zeit:
        <ul>
          <li><b>Farben-Spionage:</b> „Ich sehe etwas ROTES!“ — Kleinkinder können mit Hilfe mitspielen.</li>
          <li><b>Mitzählen:</b> Lastwagen, Tunnel, Brücken — Zählen vertreibt Langeweile.</li>
          <li><b>Mitsingen:</b> WonderSprout Music braucht kein Netz; stelle 3 Favoriten in die Warteschlange.</li>
          <li><b>Fensterwunder:</b> Erzählt, was vorbeizieht: „Eine Kuh! Ein Fluss! Eine sich drehende Windmühle!“</li>
        </ul>
        Bildschirmfreie Abschnitte sind hier ideal; heb eine kurze Geschichte für die härtesten 10 Minuten auf.`,

      "ai.r12": `<span class="ai-tag">🎂 Feier-Wunder</span>
        Geburtstage sind versteckte Mathestunden:
        <ul>
          <li><b>Zählt die Kerzen</b> zusammen — eine pro Jahr, Eins-zu-eins-Zählen im echten Leben.</li>
          <li><b>Singt „Alles Gute zum Geburtstag“</b> — es ist in WonderSprout Music mit Karaoke-Text.</li>
          <li><b>Puste-Übung:</b> Kerzen auszublasen ist echte Atemkontrolle für die Sprache.</li>
          <li><b>Halt den Moment fest:</b> Füge danach einen Eintrag im Wonder-Journal mit Foto hinzu.</li>
        </ul>
        Haltet Feiern in diesem Alter kurz — eine Stunde Freude schlägt drei Stunden Überforderung.`,

      "ai.r13": `<span class="ai-tag">🚽 Töpfchen-Geduld</span> Die meisten Kinder zeigen Bereitschaft zwischen 18 und 36 Monaten — achte auf Interesse, nicht auf das Alter. Kombiniere es mit der <b>Sortierstation</b> (nass/trocken sortieren!) und feiere jeden Versuch. Bestrafe Unfälle nie; das Gehirn lernt Blasen durch ruhige Wiederholung.`,

      "ai.r14": `<span class="ai-tag">🤝 Über das Teilen</span> Vor etwa 30 Monaten ist „Teilen“ entwicklungsmäßig unmöglich — „meins!“ ist gesunde Selbstwerdung. Beschreibe stattdessen die Runden: „Deine Runde, dann Avas Runde.“ Der Rundenrhythmus der <b>Musterparty</b> baut dieselbe neuronale Fähigkeit auf.`,

      "ai.r15": `<span class="ai-tag">🥦 Wählerisches Essen</span> Ein Kleinkind braucht vielleicht 10–15 Kontakte, um ein neues Lebensmittel zu akzeptieren. Halte Mahlzeiten druckfrei: Der Erwachsene bestimmt was/wann, das Kind bestimmt wie viel. Weintrauben im <b>Mathe-Labor</b> zu zählen macht Essen spielerisch ohne Druck.`,

      "ai.r16": `<span class="ai-tag">🦷 Zahnputz-Kämpfe</span> Putze ab dem ersten Zahn zweimal täglich; lass dein Kind zuerst einen Teddy „putzen“ (wie das Pflegespiel der <b>Tierfreunde</b>). Ein Lied hilft beim Timing — probier <b>Dieser alte Mann</b> in der Musik-Welt.`,

      "ai.r17": `<span class="ai-tag">🗣️ Zwei Sprachen</span> Zweisprachige Babys können Wörter mischen — das ist normal, keine Verwirrung. Ein-Elternteil-eine-Sprache oder ein-Ort-eine-Sprache funktionieren beide. Die Sprachauswahl von WonderSprout lässt die ganze App den Wechsel sanft vorleben.`,

      "ai.r18": `<span class="ai-tag">😴 Schlaf-Rückschritte</span> Schlafregressionen treten häufig um ~4, 8–10, 12–18 und 24 Monate auf — meist ein Gehirn-Sprung. Halt die Routine langweilig und beständig; entspannt mit der Geschichte <b>Gute Nacht, kleiner Stern</b> bei niedriger Helligkeit.`,

      "ai.r19": `<span class="ai-tag">🌋 Werfen & Schlagen</span> Große Gefühle, kleine Worte. Benenne das Gefühl, halte die Grenze: „Ich lasse dich nicht werfen. Du bist so wütend.“ Biete ein okayes Ventil — einen Ball zum Werfen draußen (Physik-Spielplatz-Energie!). Beständigkeit ist Freundlichkeit.`,

      "ai.r20": `<span class="ai-tag">🖍️ Kritzeln</span> Kritzeln ab ~12–15 Monaten ist Schulter-zu-Handgelenk-Motorik, noch keine „Bilder“. Der Zeichenmodus des <b>Studios</b> spiegelt das: Prozess vor Produkt. Biete dicke Buntstifte und großes Papier; beschreibe die Farben.`,

      "ai.r21": `<span class="ai-tag">🏫 Eingewöhnen</span> Kurze Abschiede, beständiges Abholen und ein Trostobjekt schlagen sich davonzuschleichen. Ein Foto-Ritual der Wiedervereinigung (wie das <b>Wonder-Journal</b>) hilft dem Kind, deine Rückkehr vorherzusehen — Vorhersehbarkeit ist Sicherheit.`,

      "ai.r22": `<span class="ai-tag">🚗 Unterwegs</span> Autofahrten sind Erzähl-Gold: „Rotes Auto! Großer Laster!“ — das Vokabular von <b>Flaggen & Länder</b> und <b>Sortieren</b> überträgt sich direkt aufs Fenstergucken. Singt die <b>Die Räder vom Bus</b>-artigen Rhythmen der Musik-Welt bei Stopps.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    Das ist eine schöne Frage! So antwortet WonderSprout auf fast alles mit einem Kleinkind:
    <ul>
      <li><b>Fang mit Staunen an:</b> „Ich frage mich… was denkst DU?“</li>
      <li><b>Mach es körperlich:</b> Kannst du es anfassen, bewegen oder nachspielen?</li>
      <li><b>Halt es winzig:</b> 30 Sekunden bis 3 Minuten schlagen in diesem Alter eine 30-Minuten-Lektion.</li>
    </ul>
    Probier eine der Fragen unten — oder frag mich nach <b>Bildschirmzeit</b>, <b>Meilensteinen</b>, <b>Regentagen</b>, der <b>Wonder Camera</b>, <b>Geschichten</b> oder <b>was wir heute machen</b>.`
    },

    ar: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        إليك ثلاث أفكار لليوم، بترتيب التعجّب:
        <ul>
          <li><b>دقيقتان على الشاشة:</b> افتح <b>عجيبة اليوم</b> على لوحة الوالدين ونفّذا معًا التجربة المصغّرة «استكشف».</li>
          <li><b>٥ دقائق عملية:</b> خطوة «العالم الحقيقي» — لا تحتاج إلا أشياء لديكم في البيت أصلًا.</li>
          <li><b>صفر دقائق شاشة، أقصى تعلّم:</b> اخرجا إلى الخارج. أشيرا إلى شيء واسألا «أتساءل لماذا…؟» الفضول يتفوّق على أي تطبيق.</li>
        </ul>
        <b>القيمة التعلّمية:</b> شاشة قصيرة + متابعة في العالم الحقيقي تبني حلقة «اكتشف ← اربط» من منهج WonderSprout.`,

      "ai.r1": `<span class="ai-tag">🛡️ فلسفة الشاشة</span>
        قاعدة WonderSprout: <b>وقت الشاشة بابٌ لا وجهة.</b>
        <ul>
          <li>أبقِ الجلسات ضمن التجارب المصغّرة للمنصة: <b>من ٣٠ ثانية إلى ٣ دقائق</b>.</li>
          <li>اقترن الشاشة دائمًا بخطوة <b>«جرّبه في الحياة الواقعية»</b> التي تتبع كل نشاط.</li>
          <li>انتبه لعيون متعبة أو انزعاج — تلك إشارة للتوقف والحركة.</li>
        </ul>
        إذا كان أفضل نشاط الآن في الخارج، فسيخبرك WonderSprout بإغلاق التطبيق. هذه ميزة لا خلل. للإرشاد الطبي الشخصي حول حدود الشاشة، طبيب الأطفال هو المصدر المناسب.`,

      "ai.r2": `<span class="ai-tag">💛 إجابة محبة</span>
        كل طفل ينمو على إيقاعه، ومدى واسع من الطبيعي — لا يرتّب WonderSprout الأطفال ولا يشخّصهم أبدًا.
        <ul>
          <li>استخدم تبويب <b>الملاحظات</b> لتتبّع «ليس بعد / أحيانًا / باستمرار» عبر الأسابيع — الأنماط أهم من اللحظات المفردة.</li>
          <li>إن أقلقك شيء، فهذا الشعور يستحق محادثة حقيقية: <b>من فضلك تحدّث إلى طبيب الأطفال أو مختص في نمو الطفل.</b></li>
          <li>في الأثناء، أفضل «تدخّل» هو نفسه دائمًا: تحدّثا، غنّيا، العبا واقرآ معًا يوميًا.</li>
        </ul>
        يقدّم WonderSprout AI أفكارًا مرحة، ولا يقدّم نصائح طبية أبدًا.`,

      "ai.r3": `<span class="ai-tag">📊 هذا الأسبوع</span>
        بناءً على بيانات لوحة التحكم:
        <ul>
          <li><b>أكثر مجال استكشافًا:</b> العلوم والطبيعة — كانت محاكاتا «الطفو والغرق» و«النبات الذي ينمو» المفضلتين.</li>
          <li><b>مهارة صاعدة:</b> التنبؤ! السؤال «هل سيغرق؟» قبل التجربة خطوة تفكير كبيرة.</li>
          <li><b>التركيز المقترح تاليًا:</b> <b>الأنماط</b> — جرّبا فرز الجوارب حسب اللون وقت الغسيل (بلا شاشات، بتعلّم كامل).</li>
        </ul>
        كل التفاصيل في بطاقة <b>التقرير الأسبوعي</b> على لوحة الوالدين.`,

      "ai.r4": `<span class="ai-tag">🌧️ تعجّب يوم ممطر</span>
        المطر مختبر!
        <ul>
          <li><b>شاهد:</b> اجلسا قرب النافذة — «إلى أين تذهب القطرات؟ بسرعة أم ببطء؟»</li>
          <li><b>استمع:</b> المطر على الزجاج مقابل المطر على قدر. عالٍ أم خافت؟</li>
          <li><b>التقط:</b> أمسكا كوبًا خارج النافذة (مع بالغ) — كم يستغرق ليُمتلئ؟</li>
          <li><b>ثم الشاشة:</b> دقيقتان في عالم <b>الأرض والطقس</b> لربط ما رأيتماه بالنهار/الليل والغيوم.</li>
        </ul>
        <b>القيمة التعلّمية:</b> الملاحظة الحقيقية أولًا، والربط الرقمي ثانيًا — حلقة WonderSprout.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        أي غرض آمن يمكن أن يصبح درسًا:
        <ul>
          <li>وجّه Wonder Camera إلى غرض — تتعرّف عليه وتفتح <b>بطاقة Wonder</b>.</li>
          <li>كل بطاقة تربط الغرض بعوالم تعلّم (لون، رياضيات، علوم…) مع ٣ أنشطة سريعة.</li>
          <li>كل بطاقة تنتهي بـ<b>تحدٍّ في العالم الحقيقي</b>، ليخرج التعلّم من الشاشة.</li>
        </ul>
        جرّب العرض: <b>WonderSprout Camera ← المس غرضًا</b>. ملاحظة الخصوصية: التعرّف يعمل لحظيًا — لا تُحفظ صور لطفلك.`,

      "ai.r6": `<span class="ai-tag">📖 وقت القصة</span>
        القصص آلات ربط:
        <ul>
          <li><b>«بيب والبذرة الصغيرة»</b> — النمو والصبر والطبيعة. يُقرن بزراعة بذرة حقيقية.</li>
          <li><b>«استحمام بلوب الكبير»</b> — الطفو مقابل الغرق مع لحظات تنبؤ مدمجة. يُقرن بتجارب وقت الاستحمام.</li>
          <li>دع طفلك <b>يختار مسار القصة</b> — القرارات تبني المبادرة واللغة.</li>
        </ul>
        نصيحة: بعد القراءة، اسأل «ماذا نفعل الآن؟» ودع الطفل يقود. هذا مستوى «الابتكار».`,

      "ai.r7": `<span class="ai-tag">🍎 تعجّب المطبخ</span>
        المطبخ منهج كامل:
        <ul>
          <li><b>رياضيات:</b> عدّا عنبًا على طبق — «واحدة أخرى» و«انتهى كله».</li>
          <li><b>علوم:</b> أي أطعمة تطفو في وعاء ماء؟ (عنب؟ موز؟ بقشره وبدونه!)</li>
          <li><b>حواس:</b> مقرمش مقابل طري، دافئ مقابل بارد — سمّيا كل واحد.</li>
        </ul>
        بعدها يمكن لـ Wonder Camera أن تحوّل أي فاكهة إلى بطاقة Wonder.`,

      "ai.r8": `<span class="ai-tag">🌙 تعجّب وقت النوم</span>
        روتين متوقع يتفوّق على روتين مثالي. جرّب هذا الروتين من WonderSprout:
        <ul>
          <li><b>دافئ + خافت:</b> استحمام ثم إضاءة خافتة — الشاشات المضيئة مطفأة قبل النوم بـ٣٠ دقيقة على الأقل.</li>
          <li><b>قصة واحدة، المكان نفسه:</b> اقرأ «القمر الناعس» — تنتهي بطقس وداع يمكنك تقليده.</li>
          <li><b>أغنية واحدة:</b> «هل أنت نائم؟» في WonderSprout Music مبنيّة كتهويدة بطيئة.</li>
          <li><b>قل تصبح على الخير لثلاثة أشياء:</b> القمر، ولعبة، ولبعضكما — عادة امتنان صغيرة.</li>
        </ul>
        <b>القيمة التعلّمية:</b> الروتين يبني الأمان والتفكير التسلسلي («الاستحمام أولًا، ثم القصة، ثم الأغنية»). للقلق المستمر بشأن النوم، طبيب الأطفال هو المرشد المناسب.`,

      "ai.r9": `<span class="ai-tag">💛 مشاعر كبيرة</span>
        المشاعر الكبيرة طبيعية في هذا العمر — دماغ المشاعر ينمو أسرع من الكلمات التي تصفه.
        <ul>
          <li><b>سمّه لتروّضه:</b> «أنت محبط لأن البرج سقط.» تسمية المشاعر تبني اللغة لإدارتها.</li>
          <li><b>كن المرساة الهادئة:</b> اجلس قريبًا، تنفّس ببطء، انتظر. التنظيم المشترك يسبق التنظيم الذاتي.</li>
          <li><b>بعد العاصفة:</b> عناق، ثم أعد سرد الموقف بلطف — «البرج سقط، شعرت بالغضب، وأعدنا بناءه.»</li>
        </ul>
        لا يشخّص WonderSprout أبدًا. إذا بدت المشاعر الكبيرة متكررة أو شديدة أو مقلقة، <b>من فضلك تحدّث إلى طبيب الأطفال أو مختص في نمو الطفل.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 تعجّب الطبيعة</span>
        الهواء الطلق هو الصف الأصلي — وهو مجاني:
        <ul>
          <li><b>بحث عن الألوان:</b> اعثرا على شيء أخضر وبني وأصفر وأحمر.</li>
          <li><b>عدّ الأصوات:</b> توقّفا واستمعا — كم صوتًا مختلفًا؟ طيور، رياح، سيارات…</li>
          <li><b>جيب الكنوز:</b> اجمعا ٣ كنوز آمنة (ورقة، حجر، غصن) وسمّيا كل واحد.</li>
          <li><b>في البيت:</b> دقيقتان في مختبر الحياة تربطان ما رأيتماه بكيفية نمو النباتات.</li>
        </ul>
        <b>القيمة التعلّمية:</b> المدخلات الحسية الحقيقية (أرض غير مستوية، ضوء متغيّر، أصوات حيّة) تبني الدماغ بطرق لا تستطيعها أي شاشة.`,

      "ai.r11": `<span class="ai-tag">🚗 تعجّب السفر</span>
        الرحلات الطويلة وقت للتعجّب:
        <ul>
          <li><b>أرى شيئًا ملوّنًا:</b> «أرى شيئًا أحمر!» — يستطيع الصغار اللعب بمساعدة.</li>
          <li><b>عدّوا في الطريق:</b> شاحنات، أنفاق، جسور — العدّ يقتل الملل.</li>
          <li><b>غنّوا معًا:</b> WonderSprout Music لا يحتاج شبكة؛ جهّز ٣ مفضّلات.</li>
          <li><b>عجائب النافذة:</b> احكِ ما يمرّ: «بقرة! نهر! طاحونة تدور!»</li>
        </ul>
        الفترات بلا شاشة مثالية هنا؛ احتفظ بقصة قصيرة لأصعب ١٠ دقائق.`,

      "ai.r12": `<span class="ai-tag">🎂 تعجّب الاحتفال</span>
        أعياد الميلاد دروس رياضيات سرّية:
        <ul>
          <li><b>عدّا الشموع</b> معًا — واحدة لكل سنة، عدّ واحد لواحد في الحياة الواقعية.</li>
          <li><b>غنّيا «عيد ميلاد سعيد»</b> — موجودة في WonderSprout Music مع كلمات كاريوكي.</li>
          <li><b>تمرين النفخ:</b> إطفاء الشموع تحكّم حقيقي بالنَفَس من أجل الكلام.</li>
          <li><b>احفظا اللحظة:</b> أضيفا بعد ذلك إدخالًا في مجلّة Wonder مع صورة.</li>
        </ul>
        أبقِ الحفلات قصيرة في هذا العمر — ساعة من الفرح تتفوّق على ثلاث ساعات من الإرهاق.`,

      "ai.r13": `<span class="ai-tag">🚽 صبر التدريب على الحمام</span> يُظهر معظم الأطفال استعدادًا بين ١٨ و٣٦ شهرًا — راقب الاهتمام لا العمر. اربطه بـ<b>محطة الفرز</b> (فرز المبلل/الجاف!) واحتفل بكل محاولة. لا تعاقب على الحوادث أبدًا؛ الدماغ يتعلّم التحكم بالمثانة عبر التكرار الهادئ.`,

      "ai.r14": `<span class="ai-tag">🤝 عن المشاركة</span> قبل نحو ٣٠ شهرًا، «المشاركة» مستحيلة نمائيًا — «لي أنا!» هي ذاتية سليمة. احكِ الأدوار بدلًا من ذلك: «دورك، ثم دور آفا.» إيقاع تبادل الأدوار في <b>حفلة الأنماط</b> يبني المهارة العصبية نفسها.`,

      "ai.r15": `<span class="ai-tag">🥦 الانتقائية في الأكل</span> قد يحتاج الطفل الصغير إلى ١٠–١٥ محاولة لتقبّل طعام جديد. أبقِ الوجبات بلا ضغط: البالغ يقرر ماذا ومتى، والطفل يقرر كم. عدّ العنب في <b>مختبر الرياضيات</b> يجعل الطعام مرحًا بلا ضغط.`,

      "ai.r16": `<span class="ai-tag">🦷 معارك التفريش</span> فرّش مرتين يوميًا منذ أول سن؛ دع طفلك «يفرّش» دمية أولًا (مثل لعبة العناية في <b>أصدقاء الحيوانات</b>). أغنية تساعد في ضبط الوقت — جرّب <b>هذا الرجل العجوز</b> في عالم الموسيقى.`,

      "ai.r17": `<span class="ai-tag">🗣️ لغتان</span> قد يخلط الأطفال ثنائيو اللغة الكلمات — هذا طبيعي وليس ارتباكًا. «والد واحد لغة واحدة» أو «مكان واحد لغة واحدة» كلاهما يعمل. مبدّل لغة WonderSprout يتيح للتطبيق كله أن يمثّل التبديل بلطف.`,

      "ai.r18": `<span class="ai-tag">😴 انتكاسات النوم</span> تحدث انتكاسات النوم عادة نحو ٤ و٨–١٠ و١٢–١٨ و٢٤ شهرًا — وغالبًا قفزة دماغية. أبقِ الروتين مملًا وثابتًا؛ استرخيا بقصة <b>تصبح على خير يا نجمة صغيرة</b> بإضاءة منخفضة.`,

      "ai.r19": `<span class="ai-tag">🌋 الرمي والضرب</span> مشاعر كبيرة، كلمات صغيرة. سمّ الشعور وثبّت الحد: «لن أدعك ترمي. أنت غاضب جدًا.» اعرض مخرجًا مقبولًا — كرة ليرميها في الخارج (طاقة ملعب الفيزياء!). الثبات هو اللطف.`,

      "ai.r20": `<span class="ai-tag">🖍️ الشخبطة</span> الشخبطة من نحو ١٢–١٥ شهرًا هي علم حركي من الكتف إلى المعصم، وليست «صورًا» بعد. وضع الرسم في <b>الاستوديو</b> يعكس ذلك: العملية قبل الناتج. وفّر أقلامًا سميكة وورقًا كبيرًا؛ واحكِ عن الألوان.`,

      "ai.r21": `<span class="ai-tag">🏫 الاستقرار</span> وداعات قصيرة، واستلام ثابت، وغرض للطمأنينة تتفوّق على الاختفاء خلسة. طقس صورة للقاء (مثل <b>مجلّة Wonder</b>) يساعد الطفل على توقّع عودتك — التوقّع هو الأمان.`,

      "ai.r22": `<span class="ai-tag">🚗 في الطريق</span> رحلات السيارة ذهب للسرد: «سيارة حمراء! شاحنة كبيرة!» — مفردات <b>الأعلام والدول</b> و<b>الفرز</b> تنتقل مباشرة إلى مراقبة النافذة. غنّيا إيقاعات <b>عجلات الباص</b> من عالم الموسيقى عند التوقف.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    يا لها من سؤال جميل! هكذا يجيب WonderSprout على كل شيء تقريبًا مع طفل صغير:
    <ul>
      <li><b>ابدأ بالتعجّب:</b> «أتساءل… ماذا تعتقد أنت؟»</li>
      <li><b>اجعله حركيًا:</b> هل يمكنك لمسه أو تحريكه أو تمثيله؟</li>
      <li><b>أبقه صغيرًا:</b> من ٣٠ ثانية إلى ٣ دقائق تتفوّق على درس من ٣٠ دقيقة في هذا العمر.</li>
    </ul>
    جرّب أحد أسئلة الرقائق أدناه — أو اسألني عن <b>وقت الشاشة</b>، أو <b>المراحل</b>، أو <b>الأيام الممطرة</b>، أو <b>Wonder Camera</b>، أو <b>القصص</b> أو <b>ماذا نفعل اليوم</b>.`
    },

    zh: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        这里有三个今天的点子，按好奇程度排列：
        <ul>
          <li><b>2 分钟屏幕：</b>在家长仪表盘打开<b>今日好奇</b>，一起做「探索」微体验。</li>
          <li><b>5 分钟动手：</b>「真实世界」这一步 —— 只需要你家里已有的东西。</li>
          <li><b>0 分钟屏幕、最多学习：</b>到外面去。指着一个东西问「我在想，为什么会……？」好奇心胜过任何应用。</li>
        </ul>
        <b>学习价值：</b>短时间屏幕 + 真实世界的后续，能建立 WonderSprout 方法里的「发现 → 连接」循环。`,

      "ai.r1": `<span class="ai-tag">🛡️ 屏幕理念</span>
        WonderSprout 的规则：<b>屏幕时间是一扇门，不是终点。</b>
        <ul>
          <li>把每次使用限制在平台的微体验内：<b>30 秒到 3 分钟</b>。</li>
          <li>永远把屏幕和每个活动之后的<b>「在真实生活里试一试」</b>这一步配对。</li>
          <li>留意眼睛疲惫或烦躁 —— 那就是该停下来动一动的信号。</li>
        </ul>
        如果现在最好的活动在外面，WonderSprout 会告诉你关掉应用。这是设计，不是缺陷。关于屏幕时长的个性化医学建议，儿科医生才是正确的来源。`,

      "ai.r2": `<span class="ai-tag">💛 温柔的回答</span>
        每个孩子都按自己的节奏成长，很宽的范围都属正常 —— WonderSprout 从不给孩子排名或下诊断。
        <ul>
          <li>用<b>观察</b>标签页，在几周里记录「还没有 / 有时 / 经常」—— 规律比单个时刻更重要。</li>
          <li>如果有什么让你担心，那份感受值得一场真正的对话：<b>请和儿科医生或儿童发展专业人士聊一聊。</b></li>
          <li>同时，最好的「干预」永远一样：每天一起说话、唱歌、玩耍和阅读。</li>
        </ul>
        WonderSprout AI 给的是好玩的点子，从不给医学建议。`,

      "ai.r3": `<span class="ai-tag">📊 本周</span>
        根据仪表盘数据：
        <ul>
          <li><b>探索最多的领域：</b>科学与自然 —— 「浮/沉」和「生长的植物」模拟最受欢迎。</li>
          <li><b>上升中的能力：</b>预测！在试之前先问「它会沉吗？」是很重要的一步思考。</li>
          <li><b>接下来建议的重点：</b><b>图案</b> —— 洗衣时试着按颜色给袜子分类（零屏幕，满满的学习）。</li>
        </ul>
        完整细节在家长仪表盘的<b>每周报告</b>卡片里。`,

      "ai.r4": `<span class="ai-tag">🌧️ 雨天好奇</span>
        雨就是一个实验室！
        <ul>
          <li><b>看：</b>坐在窗边 ——「雨滴去哪里了？快还是慢？」</li>
          <li><b>听：</b>雨打玻璃和雨打锅子比一比。大声还是小声？</li>
          <li><b>接：</b>把杯子伸出窗外（要有大人在）—— 多久能接满？</li>
          <li><b>然后上屏幕：</b>玩 2 分钟<b>地球与天气</b>世界，把看到的和白天/黑夜、云朵连起来。</li>
        </ul>
        <b>学习价值：</b>先真实观察，再数字连接 —— 这就是 WonderSprout 循环。`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        任何安全的物品都能变成一堂课：
        <ul>
          <li>把 Wonder Camera 对准一个物品 —— 它会认出来并打开一张<b>好奇卡</b>。</li>
          <li>每张卡把物品和学习世界连起来（颜色、数学、科学……），配 3 个小活动。</li>
          <li>每张卡都以一个<b>真实世界挑战</b>结束，让学习离开屏幕。</li>
        </ul>
        试试演示：<b>WonderSprout Camera → 点一个物品</b>。隐私说明：识别只在当下进行 —— 不会保存你孩子的任何照片。`,

      "ai.r6": `<span class="ai-tag">📖 故事时间</span>
        故事是连接的机器：
        <ul>
          <li><b>《Pip 和小种子》</b>—— 成长、耐心和自然。可以配着种一颗真的豆子。</li>
          <li><b>《Bloop 的大澡盆》</b>—— 浮与沉，还内置预测时刻。可以配着洗澡时做实验。</li>
          <li>让孩子<b>选择故事的走向</b> —— 做决定能培养自主性和语言。</li>
        </ul>
        小提示：读完后问「我们接下来做什么？」让孩子来指挥。那就是「创造」这一层。`,

      "ai.r7": `<span class="ai-tag">🍎 厨房里的好奇</span>
        厨房就是一整套课程：
        <ul>
          <li><b>数学：</b>把葡萄数到盘子里 ——「再来一个」和「全没了」。</li>
          <li><b>科学：</b>哪些食物会浮在一碗水里？（葡萄？香蕉？带皮和去皮比一比！）</li>
          <li><b>感官：</b>脆的和软的、热的和冷的 —— 每一个都说一说。</li>
        </ul>
        之后，Wonder Camera 能把任何水果变成一张好奇卡。`,

      "ai.r8": `<span class="ai-tag">🌙 睡前好奇</span>
        可预测的收尾比完美的收尾更有用。试试这个 WonderSprout 流程：
        <ul>
          <li><b>温暖 + 昏暗：</b>先洗澡，再调暗灯光 —— 睡前至少 30 分钟关掉亮屏幕。</li>
          <li><b>一个故事、同一个地方：</b>读《想睡的月亮》—— 结尾有一段你可以照做的晚安仪式。</li>
          <li><b>一首歌：</b>WonderSprout Music 里的《你睡着了吗？》就是为慢速摇篮曲设计的。</li>
          <li><b>对三样东西说晚安：</b>月亮、一个玩具，还有彼此 —— 一个小小的感恩习惯。</li>
        </ul>
        <b>学习价值：</b>固定流程能建立安全感和顺序思维（「先洗澡，再故事，再唱歌」）。如果睡眠问题持续，儿科医生是正确的指引。`,

      "ai.r9": `<span class="ai-tag">💛 大大的情绪</span>
        这个年龄有强烈情绪很正常 —— 情绪脑长得比能描述它的词汇快。
        <ul>
          <li><b>说出来才能驯服它：</b>「塔倒了，你很受挫。」说出情绪，就建立了管理情绪的语言。</li>
          <li><b>做那个平静的锚：</b>坐在旁边，慢慢呼吸，等着。先有共同调节，才有自我调节。</li>
          <li><b>风暴过后：</b>抱一抱，然后轻轻复盘 ——「塔倒了，你很生气，我们又把它搭好了。」</li>
        </ul>
        WonderSprout 从不下诊断。如果强烈情绪显得频繁、剧烈或令人担忧，<b>请和儿科医生或儿童发展专业人士聊一聊。</b>`,

      "ai.r10": `<span class="ai-tag">🌳 自然好奇</span>
        户外是最原始的教室 —— 而且免费：
        <ul>
          <li><b>找颜色：</b>找出绿色、棕色、黄色和红色的东西。</li>
          <li><b>数声音：</b>停下来听一听 —— 有几种不同的声音？鸟、风、汽车……</li>
          <li><b>宝贝口袋：</b>收集 3 个安全的宝贝（叶子、石头、树枝），每一个都说名字。</li>
          <li><b>回到家：</b>玩 2 分钟生命实验室，把看到的和植物怎么生长连起来。</li>
        </ul>
        <b>学习价值：</b>真实的感觉输入（不平的地面、变化的光线、鲜活的声音）以屏幕无法做到的方式塑造大脑。`,

      "ai.r11": `<span class="ai-tag">🚗 旅途好奇</span>
        长途旅行就是好奇时间：
        <ul>
          <li><b>颜色找一找：</b>「我看到红色的东西！」—— 小孩子有人帮忙也能玩。</li>
          <li><b>一路数：</b>卡车、隧道、桥 —— 数数能赶跑无聊。</li>
          <li><b>一起唱：</b>WonderSprout Music 不需要信号；先排好 3 首最爱。</li>
          <li><b>窗外的奇观：</b>把路过的讲出来：「一头牛！一条河！一个转着的风车！」</li>
        </ul>
        这种时候最适合不碰屏幕的时段；把一个短故事留到最难熬的 10 分钟。`,

      "ai.r12": `<span class="ai-tag">🎂 庆祝好奇</span>
        生日是藏着数学的课：
        <ul>
          <li><b>一起数蜡烛</b> —— 一年一根，在真实生活里做一对一计数。</li>
          <li><b>唱《祝你生日快乐》</b>—— WonderSprout Music 里有卡拉OK歌词版。</li>
          <li><b>练习吹气：</b>吹蜡烛是真正的呼吸控制，对说话很有用。</li>
          <li><b>留下这一刻：</b>之后在好奇日志里加一条，配一张照片。</li>
        </ul>
        这个年龄派对要短 —— 一小时的快乐胜过三小时的过载。`,

      "ai.r13": `<span class="ai-tag">🚽 如厕的耐心</span> 大多数孩子在 18–36 个月之间显现准备迹象 —— 看兴趣，不看年龄。可以和<b>分类站</b>配对（干湿分类！），并且庆祝每一次尝试。永远不要因为意外而惩罚；大脑是通过平静的重复学会控制膀胱的。`,

      "ai.r14": `<span class="ai-tag">🤝 关于分享</span> 大约 30 个月之前，「分享」在发展上是不可能的 ——「我的！」是健康的自我意识。改说轮流：「你先，然后轮到 Ava。」<b>图案派对</b>里的轮流节奏能建立同样的神经技能。`,

      "ai.r15": `<span class="ai-tag">🥦 挑食</span> 小孩子可能需要 10–15 次接触才会接受一种新食物。让用餐没有压力：大人决定吃什么、什么时候吃，孩子决定吃多少。在<b>数学实验室</b>里数葡萄，能让食物变得好玩而没有压力。`,

      "ai.r16": `<span class="ai-tag">🦷 刷牙大战</span> 从第一颗牙开始每天刷两次；先让孩子给泰迪熊「刷牙」（就像<b>动物朋友</b>里的照顾游戏）。一首歌能帮助计时 —— 试试音乐世界里的<b>这个老爷爷</b>。`,

      "ai.r17": `<span class="ai-tag">🗣️ 两种语言</span> 双语宝宝可能会混用词语 —— 这很正常，不是混淆。「一人一语」或「一地一语」都有效。WonderSprout 的语言选择器让整个应用温和地示范切换。`,

      "ai.r18": `<span class="ai-tag">😴 睡眠退步</span> 睡眠倒退常出现在约 4、8–10、12–18 和 24 个月 —— 通常是大脑的一次跃升。让流程保持无聊又稳定；用<b>晚安，小星星</b>这个故事在低亮度下收尾。`,

      "ai.r19": `<span class="ai-tag">🌋 扔东西和打人</span> 情绪很大，词汇很少。说出感受，守住界限：「我不能让你扔。你非常生气。」提供一个可以接受的出口 —— 一个可以到外面扔的球（物理游乐场的能量！）。稳定就是善意。`,

      "ai.r20": `<span class="ai-tag">🖍️ 涂鸦</span> 大约 12–15 个月开始的涂鸦，是从肩到手腕的运动科学，还不是「图画」。<b>工作室</b>的绘画模式就呼应这一点：过程重于成果。提供粗蜡笔和大纸；说一说颜色。`,

      "ai.r21": `<span class="ai-tag">🏫 适应新环境</span> 简短的道别、稳定的接送，加一个安抚物，胜过偷偷溜走。一个重逢的照片仪式（就像<b>好奇日志</b>）能帮助孩子预测你会回来 —— 可预测就是安全感。`,

      "ai.r22": `<span class="ai-tag">🚗 在路上</span> 开车途中是讲述的黄金时间：「红车！大卡车！」—— <b>国旗与国家</b>和<b>分类</b>的词汇能直接迁移到看窗外。停车时唱一唱音乐世界里<b>巴士轮子</b>那种节奏。`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    这个问题真好！用 WonderSprout 的方式，几乎什么都能这样回答小孩子：
    <ul>
      <li><b>从好奇开始：</b>「我在想……你觉得呢？」</li>
      <li><b>让它动起来：</b>你能摸一摸、动一动，或者演一演吗？</li>
      <li><b>保持很短：</b>在这个年龄，30 秒到 3 分钟胜过 30 分钟的一堂课。</li>
    </ul>
    试试下面的一个问题标签 —— 或者问我关于<b>屏幕时间</b>、<b>发展里程碑</b>、<b>雨天</b>、<b>Wonder Camera</b>、<b>故事</b>或者<b>今天做什么</b>。`
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
