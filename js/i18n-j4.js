/* ============================================================
   WonderSprout — AI parent-copilot replies
   (ko/bn/yo/ha/ig)
   keys: ai.r0 .. ai.r22 (indexed to WSData.AI_KNOWLEDGE order),
         ai.fallback
   NOTE: keyed by INDEX, not entry id — AI_KNOWLEDGE has a
   duplicate id ("sleep" at indexes 8 and 18).
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    ko: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        오늘의 아이디어 세 가지, 호기심 순서대로:
        <ul>
          <li><b>2분 화면:</b> 부모 대시보드에서 <b>오늘의 호기심</b>을 열고 「탐험」 미니 경험을 함께 해 보세요.</li>
          <li><b>5분 손으로:</b> 「진짜 세상」 단계 — 집에 이미 있는 것만 필요해요.</li>
          <li><b>화면 0분, 가장 많이 배우기:</b> 밖에 나가세요. 한 가지를 가리키며 「왜 그럴까…?」 하고 물어보세요. 호기심은 어떤 앱보다 강해요.</li>
        </ul>
        <b>학습 가치:</b> 짧은 화면 + 진짜 세상에서의 이어하기가 WonderSprout 방법의 발견 → 연결 순환을 만들어 줘요.`,

      "ai.r1": `<span class="ai-tag">🛡️ 화면에 대한 생각</span>
        WonderSprout의 규칙: <b>화면 시간은 문이지, 목적지가 아니에요.</b>
        <ul>
          <li>사용 시간을 플랫폼의 미니 경험으로 제한하세요: <b>30초에서 3분</b>.</li>
          <li>화면은 언제나 각 활동 뒤에 오는 <b>「실생활에서 해 보기」</b> 단계와 짝지어 주세요.</li>
          <li>눈이 피곤해하거나 짜증을 내면 — 그것이 멈추고 움직일 신호예요.</li>
        </ul>
        지금 가장 좋은 활동이 밖이라면, WonderSprout은 앱을 끄라고 알려 줄 거예요. 그건 오류가 아니라 기능이에요. 화면 시간에 대한 개인적인 의학적 조언은 소아과 의사가 올바른 출처예요.`,

      "ai.r2": `<span class="ai-tag">💛 따뜻한 답변</span>
        모든 아이는 자기만의 속도로 자라요. 넓은 범위가 정상이고, WonderSprout은 아이를 순위 매기거나 진단하지 않아요.
        <ul>
          <li><b>관찰</b> 탭으로 「아직 / 가끔 / 꾸준히」를 몇 주 동안 기록하세요 — 한 순간순간보다 패턴이 더 중요해요.</li>
          <li>걱정되는 일이 있다면 그 마음은 진짜 대화를 나눌 가치가 있어요: <b>소아과 의사나 아동 발달 전문가와 이야기해 주세요.</b></li>
          <li>그동안 가장 좋은 「개입」은 언제나 같아요: 매일 함께 말하고, 노래하고, 놀고, 읽기.</li>
        </ul>
        WonderSprout AI는 놀이 아이디어를 주고, 의학적 조언은 절대 하지 않아요.`,

      "ai.r3": `<span class="ai-tag">📊 이번 주</span>
        대시보드 데이터를 보면:
        <ul>
          <li><b>가장 많이 탐험한 영역:</b> 과학과 자연 — 「뜨고 가라앉기」와 「자라는 식물」 시뮬레이션이 인기였어요.</li>
          <li><b>늘고 있는 능력:</b> 예측! 시험하기 전에 「가라앉을까?」 하고 묻는 건 큰 생각의 걸음이에요.</li>
          <li><b>다음으로 제안하는 집중:</b> <b>패턴</b> — 빨래할 때 양말을 색으로 분류해 보세요 (화면 없이, 학습은 가득).</li>
        </ul>
        자세한 내용은 부모 대시보드의 <b>주간 보고서</b> 카드에 있어요.`,

      "ai.r4": `<span class="ai-tag">🌧️ 비 오는 날의 호기심</span>
        비는 실험실이에요!
        <ul>
          <li><b>보기:</b> 창가에 앉아 — 「빗방울은 어디로 갈까? 빠를까 느릴까?」</li>
          <li><b>듣기:</b> 창에 맞는 비와 냄비에 맞는 비. 시끄러울까 조용할까?</li>
          <li><b>받기:</b> 컵을 창밖으로 내밀어 (어른과 함께) — 가득 차는 데 얼마나 걸릴까?</li>
          <li><b>그다음 화면:</b> <b>지구와 날씨</b> 세계를 2분. 본 것을 낮/밤과 구름과 연결해요.</li>
        </ul>
        <b>학습 가치:</b> 먼저 진짜 관찰, 그다음 디지털 연결 — WonderSprout의 순환이에요.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        안전한 물건이라면 무엇이든 수업이 될 수 있어요:
        <ul>
          <li>Wonder Camera를 물건에 대면 — 알아보고 <b>호기심 카드</b>를 열어요.</li>
          <li>각 카드는 물건을 배움의 세계(색, 수학, 과학…)에 3가지 짧은 활동과 함께 연결해요.</li>
          <li>모든 카드는 <b>진짜 세상 도전</b>으로 끝나서, 배움이 화면 밖으로 나가게 해요.</li>
        </ul>
        데모를 해 보세요: <b>WonderSprout Camera → 물건을 탭</b>. 개인정보 안내: 인식은 그 순간에만 작동해요 — 아이의 사진은 저장되지 않아요.`,

      "ai.r6": `<span class="ai-tag">📖 이야기 시간</span>
        이야기는 연결의 기계예요:
        <ul>
          <li><b>「Pip와 작은 씨앗」</b> — 자람, 기다림, 자연. 진짜 콩을 심는 것과 짝이 맞아요.</li>
          <li><b>「Bloop의 큰 목욕」</b> — 뜨기와 가라앉기를 예측 순간과 함께. 목욕 시간 실험과 짝이 맞아요.</li>
          <li>아이에게 <b>이야기 길을 고르게</b> 해 주세요 — 결정이 주체성과 언어를 키워요.</li>
        </ul>
        팁: 읽고 나서 「다음엔 뭘 할까?」 하고 물어보고 아이가 이끌게 해 주세요. 그게 「만들기」 단계예요.`,

      "ai.r7": `<span class="ai-tag">🍎 부엌의 호기심</span>
        부엌은 통째로 교과 과정이에요:
        <ul>
          <li><b>수학:</b> 접시에 포도를 세어 담기 — 「하나 더」와 「다 없어졌어」.</li>
          <li><b>과학:</b> 물그릇에서 어떤 음식이 뜰까? (포도? 바나나? 껍질 있을 때와 없을 때!)</li>
          <li><b>감각:</b> 아삭한 것과 부드러운 것, 따뜻한 것과 차가운 것 — 각각 이름을 말해요.</li>
        </ul>
        그다음, Wonder Camera가 어떤 과일이든 호기심 카드로 바꿔 줄 수 있어요.`,

      "ai.r8": `<span class="ai-tag">🌙 잠자기 전 호기심</span>
        예상 가능한 마무리는 완벽한 마무리보다 낫아요. 이 WonderSprout 순서를 해 보세요:
        <ul>
          <li><b>따뜻하게 + 어둡게:</b> 목욕, 그리고 어두운 조명 — 자기 30분 전에는 밝은 화면을 꺼요.</li>
          <li><b>이야기 하나, 같은 자리에서:</b> 「졸린 달님」을 읽으세요 — 따라 할 수 있는 안녕 의식으로 끝나요.</li>
          <li><b>노래 하나:</b> WonderSprout Music의 「자고 있나요?」는 느린 자장가로 만들어졌어요.</li>
          <li><b>세 가지에 안녕:</b> 달님, 장난감 하나, 그리고 서로에게 — 작은 감사 습관.</li>
        </ul>
        <b>학습 가치:</b> 반복되는 순서는 안정감과 차례 생각을 키워요(「먼저 목욕, 그다음 이야기, 그다음 노래」). 잠에 대한 걱정이 계속되면 소아과 의사가 올바른 안내자예요.`,

      "ai.r9": `<span class="ai-tag">💛 큰 마음</span>
        이 나이에는 강한 감정이 정상이에요 — 감정의 뇌는 그것을 표현할 말보다 빨리 자라요.
        <ul>
          <li><b>이름을 붙이면 다스려져요:</b> 「탑이 무너져서 속상했구나.」 감정에 이름을 붙이면 다스릴 언어가 생겨요.</li>
          <li><b>고요한 닻이 되어 주세요:</b> 옆에 앉아, 천천히 숨 쉬고, 기다리세요. 함께 조절이 스스로 조절보다 먼저예요.</li>
          <li><b>폭풍이 지나간 뒤:</b> 꼭 안아 주고, 그다음 부드럽게 다시 이야기해요 — 「탑이 무너졌고, 화가 났고, 우리가 다시 쌓았어.」</li>
        </ul>
        WonderSprout은 절대 진단하지 않아요. 강한 감정이 자주, 세게, 걱정스럽게 느껴진다면, <b>소아과 의사나 아동 발달 전문가와 이야기해 주세요.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 자연의 호기심</span>
        밖은 원래의 교실이에요 — 그리고 무료예요:
        <ul>
          <li><b>색깔 찾기:</b> 초록, 갈색, 노랑, 빨강인 것을 찾아봐요.</li>
          <li><b>소리 세기:</b> 멈추고 들어 보세요 — 서로 다른 소리가 몇 가지? 새, 바람, 자동차…</li>
          <li><b>보물 주머니:</b> 안전한 보물 3개를 모아 (잎, 돌, 나뭇가지) 각각 이름을 말해요.</li>
          <li><b>집에 돌아와서:</b> 생명 연구실을 2분. 본 것을 식물이 자라는 방법과 연결해요.</li>
        </ul>
        <b>학습 가치:</b> 진짜 감각 입력(울퉁불퉁한 땅, 변하는 빛, 살아 있는 소리)은 어떤 화면도 할 수 없는 방식으로 뇌를 키워요.`,

      "ai.r11": `<span class="ai-tag">🚗 여행의 호기심</span>
        긴 이동 시간은 호기심의 시간이에요:
        <ul>
          <li><b>색깔 찾기 놀이:</b> 「빨간색이 보여!」 — 어린아이는 도움받아 놀 수 있어요.</li>
          <li><b>가면서 세기:</b> 트럭, 터널, 다리 — 세면 지루함이 사라져요.</li>
          <li><b>함께 노래하기:</b> WonderSprout Music은 신호가 필요 없어요. 좋아하는 것 3곡을 준비해 두세요.</li>
          <li><b>창밖의 신기함:</b> 지나가는 것을 말해요: 「소! 강! 돌아가는 풍차!」</li>
        </ul>
        여기서는 화면 없는 구간이 최고예요. 가장 힘든 10분을 위해 짧은 이야기 하나를 남겨 두세요.`,

      "ai.r12": `<span class="ai-tag">🎂 축하의 호기심</span>
        생일은 숨겨진 수학 수업이에요:
        <ul>
          <li><b>초를 함께 세어요</b> — 한 해에 하나, 실제 생활에서의 하나씩 세기.</li>
          <li><b>「생일 축하합니다」를 불러요</b> — WonderSprout Music에 노래방 가사가 있어요.</li>
          <li><b>불기 연습:</b> 초를 끄는 것은 말을 위한 진짜 숨 조절이에요.</li>
          <li><b>순간을 남겨요:</b> 그다음 사진과 함께 호기심 일기에 한 줄을 더해요.</li>
        </ul>
        이 나이에는 파티를 짧게 — 한 시간의 기쁨이 세 시간의 지침을 이겨요.`,

      "ai.r13": `<span class="ai-tag">🚽 배변 훈련의 인내</span> 대부분의 아이는 18–36개월 사이에 준비 신호를 보여요 — 나이가 아니라 관심을 보세요. <b>분류 스테이션</b>(젖은 것/마른 것 분류!)과 짝짓고 매 시도를 축하하세요. 실수를 절대 혼내지 마세요. 뇌는 차분한 반복으로 방광을 배워요.`,

      "ai.r14": `<span class="ai-tag">🤝 나누기에 대하여</span> 약 30개월 전에는 「나누기」가 발달상 불가능해요 — 「내 거야!」는 건강한 자아예요. 대신 차례를 말해 주세요: 「네 차례, 그다음 에바 차례.」 <b>패턴 파티</b>의 차례 리듬이 같은 신경 능력을 키워요.`,

      "ai.r15": `<span class="ai-tag">🥦 가리는 식사</span> 어린아이는 새 음식을 받아들이는 데 10–15번의 노출이 필요할 수 있어요. 식사에 압력을 주지 마세요: 어른은 무엇을/언제, 아이는 얼마나를 정해요. <b>수학 연구실</b>에서 포도를 세면 음식이 압력 없이 놀이가 돼요.`,

      "ai.r16": `<span class="ai-tag">🦷 양치 전쟁</span> 첫 이가 나면 하루 두 번 닦으세요. 먼저 아이에게 인형을 「닦게」 해 주세요(<b>동물 친구</b>의 돌봄 놀이처럼). 노래가 시간 맞추기에 도움이 돼요 — 음악 세계의 <b>이 할아버지</b>를 해 보세요.`,

      "ai.r17": `<span class="ai-tag">🗣️ 두 언어</span> 이중 언어 아기는 단어를 섞을 수 있어요 — 혼란이 아니라 정상이에요. 한 부모 한 언어, 한 장소 한 언어 모두 잘돼요. WonderSprout의 언어 선택기로 앱 전체가 부드럽게 전환을 보여 줄 수 있어요.`,

      "ai.r18": `<span class="ai-tag">😴 수면 퇴행</span> 수면 퇴행은 보통 약 4, 8–10, 12–18, 24개월에 와요 — 대개 뇌의 도약이에요. 순서를 지루하고 일정하게 유지하세요. 낮은 밝도에서 <b>안녕, 작은 별아</b> 이야기로 마무리해요.`,

      "ai.r19": `<span class="ai-tag">🌋 던지고 때리기</span> 큰 감정, 작은 말. 감정에 이름을 붙이고 한계는 지키세요: 「던지는 건 안 돼. 많이 화났구나.」 괜찮은 출구를 주세요 — 밖에서 던질 공(물리 놀이터 에너지!). 꾸준함이 친절함이에요.`,

      "ai.r20": `<span class="ai-tag">🖍️ 끄적이기</span> 약 12–15개월부터의 끄적이기는 어깨에서 손목까지의 운동 과학이에요, 아직 「그림」이 아니에요. <b>스튜디오</b>의 그리기 모드는 이를 반영해요: 결과보다 과정. 굵은 크레용과 큰 종이를 주고, 색을 말해 주세요.`,

      "ai.r21": `<span class="ai-tag">🏫 적응하기</span> 짧은 작별, 일정한 데리러 가기, 그리고 위안 물건이 몰래 사라지는 것보다 나아요. 재회의 사진 의식(<b>호기심 일기</b>처럼)이 아이가 당신의 복귀를 예측하도록 도와요 — 예측 가능함이 안정감이에요.`,

      "ai.r22": `<span class="ai-tag">🚗 이동 중</span> 차 안은 이야기의 금광이에요: 「빨간 차! 큰 트럭!」 — <b>국기와 나라</b>와 <b>분류</b>의 어휘가 창밖 보기에 그대로 이어져요. 쉬는 시간에 음악 세계의 <b>바퀴</b> 같은 리듬을 불러요.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    참 좋은 질문이에요! 어린아이와 함께라면 WonderSprout은 거의 모든 것에 이렇게 답해요:
    <ul>
      <li><b>호기심으로 시작해요:</b> 「궁금하다… 넌 어떻게 생각해?」</li>
      <li><b>몸으로 해요:</b> 만지거나, 움직이거나, 흉내 낼 수 있을까?</li>
      <li><b>아주 작게:</b> 이 나이에는 30초에서 3분이 30분 수업보다 나아요.</li>
    </ul>
    아래 질문 중 하나를 눌러 보세요 — 또는 <b>화면 시간</b>, <b>발달 단계</b>, <b>비 오는 날</b>, <b>Wonder Camera</b>, <b>이야기</b>나 <b>오늘 뭐 할까</b>에 대해 물어보세요.`
    },

    bn: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        আজকের জন্য তিনটি ধারণা, বিস্ময়ের ক্রমে:
        <ul>
          <li><b>২ মিনিট স্ক্রিন:</b> প্যারেন্ট ড্যাশবোর্ডে <b>আজকের বিস্ময়</b> খুলুন এবং একসাথে «অন্বেষণ» মাইক্রো-অভিজ্ঞতা করুন।</li>
          <li><b>৫ মিনিট হাতে-কলমে:</b> «বাস্তব জগৎ» ধাপ — শুধু সেই জিনিস দরকার যা ইতিমধ্যে বাড়িতে আছে।</li>
          <li><b>০ মিনিট স্ক্রিন, সবচেয়ে বেশি শেখা:</b> বাইরে যাও। একটি জিনিসের দিকে ইশারা করে জিজ্ঞেস করো «ভাবি কেন…?» কৌতূহল যেকোনো অ্যাপকে হারায়।</li>
        </ul>
        <b>শেখার মূল্য:</b> সংক্ষিপ্ত স্ক্রিন + বাস্তব জগতে পরবর্তী পদক্ষেপ WonderSprout পদ্ধতির «আবিষ্কার করো ← যুক্ত করো» চক্র তৈরি করে।`,

      "ai.r1": `<span class="ai-tag">🛡️ স্ক্রিন দর্শন</span>
        WonderSprout-এর নিয়ম: <b>স্ক্রিন সময় একটি দরজা, গন্তব্য নয়।</b>
        <ul>
          <li>সেশনগুলো প্ল্যাটফর্মের মাইক্রো-অভিজ্ঞতার মধ্যে রাখো: <b>৩০ সেকেন্ড থেকে ৩ মিনিট</b>।</li>
          <li>স্ক্রিনকে সবসময় <b>«বাস্তব জীবনে চেষ্টা করো»</b> ধাপের সাথে জোড়া দাও যা প্রতিটি কার্যকলাপের পরে আসে।</li>
          <li>ক্লান্ত চোখ বা খিটখিটে ভাব লক্ষ্য করো — এটাই থামার আর নড়ার সংকেত।</li>
        </ul>
        যদি এখন সেরা কার্যকলাপ বাইরের হয়, WonderSprout তোমাকে অ্যাপ বন্ধ করতে বলবে। এটি একটি ফিচার, বাগ নয়। স্ক্রিন সীমা সম্পর্কে ব্যক্তিগত চিকিৎসা পরামর্শের জন্য তোমার শিশুরোগ বিশেষজ্ঞ সঠিক উৎস।`,

      "ai.r2": `<span class="ai-tag">💛 স্নেহশীল উত্তর</span>
        প্রতিটি শিশু নিজের ছন্দে বেড়ে ওঠে, এবং একটি বিস্তৃত পরিসর স্বাভাবিক — WonderSprout কখনও শিশুদের ক্রম দেয় না বা রোগ নির্ণয় করে না।
        <ul>
          <li>সপ্তাহ ধরে «এখনও নয় / মাঝে মাঝে / নিয়মিত» ট্র্যাক করতে <b>পর্যবেক্ষণ</b> ট্যাব ব্যবহার করো — একক মুহূর্তের চেয়ে প্যাটার্ন বেশি গুরুত্বপূর্ণ।</li>
          <li>যদি কিছু চিন্তিত করে, সেই অনুভূতির প্রকৃত কথোপকথন প্রাপ্য: <b>অনুগ্রহ করে তোমার শিশুরোগ বিশেষজ্ঞ বা শিশু বিকাশ পেশাদারের সাথে কথা বলো।</b></li>
          <li>এর মধ্যে, সেরা «হস্তক্ষেপ» সবসময় একই: প্রতিদিন একসাথে কথা বলো, গাও, খেলো এবং পড়ো।</li>
        </ul>
        WonderSprout AI খেলার ধারণা দেয়, কখনও চিকিৎসা পরামর্শ নয়।`,

      "ai.r3": `<span class="ai-tag">📊 এই সপ্তাহ</span>
        ড্যাশবোর্ড ডেটার ভিত্তিতে:
        <ul>
          <li><b>সবচেয়ে বেশি অন্বেষিত ক্ষেত্র:</b> বিজ্ঞান ও প্রকৃতি — ভাসা/ডোবা এবং বাড়ন্ত গাছ সিমুলেশন প্রিয় ছিল।</li>
          <li><b>বাড়ছে যে দক্ষতা:</b> অনুমান! পরীক্ষার আগে «এটা কি ডুববে?» জিজ্ঞেস করা চিন্তার একটি বড় পদক্ষেপ।</li>
          <li><b>পরবর্তী প্রস্তাবিত ফোকাস:</b> <b>প্যাটার্ন</b> — কাপড় ধোয়ার সময় মোজা রঙ দিয়ে সাজানোর চেষ্টা করো (শূন্য স্ক্রিন, পূর্ণ শেখা)।</li>
        </ul>
        সম্পূর্ণ বিবরণ প্যারেন্ট ড্যাশবোর্ডে তোমার <b>সাপ্তাহিক রিপোর্ট</b> কার্ডে আছে।`,

      "ai.r4": `<span class="ai-tag">🌧️ বৃষ্টির দিনের বিস্ময়</span>
        বৃষ্টি একটি পরীক্ষাগার!
        <ul>
          <li><b>দেখো:</b> জানালার পাশে বসো — «ফোঁটাগুলো কোথায় যায়? দ্রুত না ধীর?»</li>
          <li><b>শোনো:</b> জানালায় বৃষ্টি বনাম পাত্রে বৃষ্টি। জোরে না আস্তে?</li>
          <li><b>ধরো:</b> জানালা দিয়ে বাইরে একটি কাপ ধরো (একজন বড়ের সাথে) — ভরতে কত সময় লাগে?</li>
          <li><b>তারপর স্ক্রিন:</b> <b>পৃথিবী ও আবহাওয়া</b> জগতের ২ মিনিট, যা দেখেছ তা দিন/রাত এবং মেঘের সাথে যুক্ত করতে।</li>
        </ul>
        <b>শেখার মূল্য:</b> প্রথমে প্রকৃত পর্যবেক্ষণ, তারপর ডিজিটাল সংযোগ — WonderSprout চক্র।`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        যেকোনো নিরাপদ বস্তু একটি পাঠ হতে পারে:
        <ul>
          <li>Wonder Camera কোনো বস্তুর দিকে ধরো — সেটি শনাক্ত করে এবং একটি <b>বিস্ময় কার্ড</b> খুলে দেয়।</li>
          <li>প্রতিটি কার্ড বস্তুটিকে শেখার জগতের সাথে (রঙ, গণিত, বিজ্ঞান…) ৩টি দ্রুত কার্যকলাপের মাধ্যমে যুক্ত করে।</li>
          <li>প্রতিটি কার্ড একটি <b>বাস্তব জগতের চ্যালেঞ্জ</b> দিয়ে শেষ হয়, যাতে শেখা স্ক্রিন থেকে বেরিয়ে আসে।</li>
        </ul>
        ডেমো চেষ্টা করো: <b>WonderSprout Camera → একটি বস্তুতে ট্যাপ করো</b>। গোপনীয়তা নোট: শনাক্তকরণ সেই মুহূর্তে চলে — তোমার শিশুর কোনো ছবি সংরক্ষিত হয় না।`,

      "ai.r6": `<span class="ai-tag">📖 গল্পের সময়</span>
        গল্প সংযোগের মেশিন:
        <ul>
          <li><b>«পিপ এবং ছোট বীজ»</b> — বৃদ্ধি, ধৈর্য এবং প্রকৃতি। সত্যিকারের বীজ বপনের সাথে জোড়া লাগে।</li>
          <li><b>«ব্লুপের বড় স্নান»</b> — ভাসা বনাম ডোবা, অন্তর্নির্মিত অনুমান মুহূর্ত সহ। স্নানের সময়ের পরীক্ষার সাথে জোড়া লাগে।</li>
          <li>তোমার শিশুকে <b>গল্পের পথ বেছে নিতে</b> দাও — সিদ্ধান্ত স্বাধীনতা এবং ভাষা তৈরি করে।</li>
        </ul>
        টিপ: পড়ার পরে জিজ্ঞেস করো «এরপর কী করব?» এবং শিশুকে পরিচালনা করতে দাও। এটাই «সৃষ্টি» স্তর।`,

      "ai.r7": `<span class="ai-tag">🍎 রান্নাঘরের বিস্ময়</span>
        রান্নাঘর একটি সম্পূর্ণ পাঠ্যক্রম:
        <ul>
          <li><b>গণিত:</b> প্লেটে আঙুর গোনো — «আর একটি» এবং «সব শেষ»।</li>
          <li><b>বিজ্ঞান:</b> এক বাটি পানিতে কোন খাবার ভাসে? (আঙুর? কলা? খোসা সহ এবং ছাড়া!)</li>
          <li><b>ইন্দ্রিয়:</b> মচমচে বনাম নরম, গরম বনাম ঠান্ডা — প্রতিটির নাম বলো।</li>
        </ul>
        এরপর, Wonder Camera যেকোনো ফলকে বিস্ময় কার্ডে পরিণত করতে পারে।`,

      "ai.r8": `<span class="ai-tag">🌙 ঘুমানোর সময়ের বিস্ময়</span>
        একটি অনুমানযোগ্য রুটিন নিখুঁত রুটিনকে হারায়। এই WonderSprout রুটিন চেষ্টা করো:
        <ul>
          <li><b>উষ্ণ + ম্লান:</b> স্নান, তারপর কম আলো — ঘুমানোর অন্তত ৩০ মিনিট আগে উজ্জ্বল স্ক্রিন বন্ধ।</li>
          <li><b>একটি গল্প, একই জায়গা:</b> «ঘুমন্ত চাঁদ» পড়ো — এটি একটি শুভরাত্রি আচার দিয়ে শেষ হয় যা তুমি অনুকরণ করতে পারো।</li>
          <li><b>একটি গান:</b> WonderSprout Music-এ «তুমি কি ঘুমাচ্ছ?» একটি ধীর ঘুমপাড়ানি গান হিসেবে তৈরি।</li>
          <li><b>তিনটি জিনিসকে শুভরাত্রি:</b> চাঁদ, একটি খেলনা, এবং একে অপরকে — ছোট্ট কৃতজ্ঞতার অভ্যাস।</li>
        </ul>
        <b>শেখার মূল্য:</b> রুটিন নিরাপত্তা এবং ক্রম চিন্তা তৈরি করে («প্রথমে স্নান, তারপর গল্প, তারপর গান»)। ক্রমাগত ঘুমের চিন্তার জন্য তোমার শিশুরোগ বিশেষজ্ঞ সঠিক পথপ্রদর্শক।`,

      "ai.r9": `<span class="ai-tag">💛 বড় অনুভূতি</span>
        এই বয়সে বড় অনুভূতি স্বাভাবিক — অনুভূতির মস্তিষ্ক এটি বর্ণনা করার শব্দের চেয়ে দ্রুত বাড়ে।
        <ul>
          <li><b>নাম দাও বশ করার জন্য:</b> «টাওয়ার পড়ে গেছে বলে তুমি হতাশ।» অনুভূতির নাম দেওয়া সেগুলো পরিচালনার ভাষা তৈরি করে।</li>
          <li><b>শান্ত নোঙর হও:</b> কাছে বসো, ধীরে শ্বাস নাও, অপেক্ষা করো। সহ-নিয়ন্ত্রণ স্ব-নিয়ন্ত্রণের আগে আসে।</li>
          <li><b>ঝড়ের পরে:</b> একটি আলিঙ্গন, তারপর আলতো করে আবার খেলো — «টাওয়ার পড়েছিল, তুমি রাগান্বিত হয়েছিলে, আমরা আবার বানিয়েছি।»</li>
        </ul>
        WonderSprout কখনও রোগ নির্ণয় করে না। যদি বড় অনুভূতি ঘন ঘন, তীব্র বা চিন্তাজনক মনে হয়, <b>অনুগ্রহ করে তোমার শিশুরোগ বিশেষজ্ঞ বা শিশু বিকাশ পেশাদারের সাথে কথা বলো।</b>`,

      "ai.r10": `<span class="ai-tag">🌳 প্রকৃতির বিস্ময়</span>
        বাইরেটা মূল শ্রেণিকক্ষ — এবং এটি বিনামূল্যে:
        <ul>
          <li><b>রঙ শিকার:</b> সবুজ, বাদামি, হলুদ এবং লাল কিছু খুঁজে নাও।</li>
          <li><b>শব্দ গোনো:</b> থামো এবং শোনো — কতগুলো ভিন্ন শব্দ? পাখি, বাতাস, গাড়ি…</li>
          <li><b>ধনের পকেট:</b> ৩টি নিরাপদ ধন সংগ্রহ করো (পাতা, পাথর, ডাল) এবং প্রতিটির নাম বলো।</li>
          <li><b>বাড়ি ফিরে:</b> জীবন ল্যাবের ২ মিনিট যা দেখেছ তা গাছ কীভাবে বাড়ে তার সাথে যুক্ত করে।</li>
        </ul>
        <b>শেখার মূল্য:</b> প্রকৃত সংবেদনশীল ইনপুট (অসম মাটি, পরিবর্তনশীল আলো, জীবন্ত শব্দ) এমনভাবে মস্তিষ্ক তৈরি করে যা কোনো স্ক্রিন পারে না।`,

      "ai.r11": `<span class="ai-tag">🚗 ভ্রমণের বিস্ময়</span>
        দীর্ঘ ভ্রমণ বিস্ময়ের সময়:
        <ul>
          <li><b>রঙ খোঁজা:</b> «আমি কিছু লাল দেখছি!» — ছোটরা সাহায্য নিয়ে খেলতে পারে।</li>
          <li><b>পথে গোনো:</b> ট্রাক, সুড়ঙ্গ, সেতু — গণনা একঘেয়েমি মারে।</li>
          <li><b>একসাথে গাও:</b> WonderSprout Music-এর সিগন্যাল লাগে না; ৩টি প্রিয় সারিবদ্ধ করো।</li>
          <li><b>জানালার বিস্ময়:</b> যা যায় তা বর্ণনা করো: «একটি গরু! একটি নদী! একটি ঘোরা কল!»</li>
        </ul>
        এখানে স্ক্রিনবিহীন অংশ আদর্শ; সবচেয়ে কঠিন ১০ মিনিটের জন্য একটি ছোট গল্প রেখে দাও।`,

      "ai.r12": `<span class="ai-tag">🎂 উদযাপনের বিস্ময়</span>
        জন্মদিন গোপন গণিতের পাঠ:
        <ul>
          <li><b>মোমবাতি একসাথে গোনো</b> — প্রতি বছরে একটি, বাস্তব জীবনে এক-এক করে গণনা।</li>
          <li><b>«জন্মদিনের শুভেচ্ছা» গাও</b> — এটি WonderSprout Music-এ করাওকে শব্দ সহ আছে।</li>
          <li><b>ফোঁকার অনুশীলন:</b> মোমবাতি নেভানো কথার জন্য প্রকৃত শ্বাস নিয়ন্ত্রণ।</li>
          <li><b>মুহূর্ত সংরক্ষণ করো:</b> পরে একটি ছবি সহ Wonder জার্নালে একটি এন্ট্রি যোগ করো।</li>
        </ul>
        এই বয়সে পার্টি সংক্ষিপ্ত রাখো — এক ঘণ্টার আনন্দ তিন ঘণ্টার ক্লান্তিকে হারায়।`,

      "ai.r13": `<span class="ai-tag">🚽 পটি ধৈর্য</span> বেশিরভাগ শিশু ১৮–৩৬ মাসের মধ্যে প্রস্তুতি দেখায় — বয়স নয়, আগ্রহ লক্ষ্য করো। <b>সাজানোর স্টেশন</b> (ভেজা/শুকনো সাজানো!) এর সাথে জোড়া দাও এবং প্রতিটি চেষ্টা উদযাপন করো। দুর্ঘটনার জন্য কখনও শাস্তি দিও না; মস্তিষ্ক শান্ত পুনরাবৃত্তির মাধ্যমে মূত্রাশয় শেখে।`,

      "ai.r14": `<span class="ai-tag">🤝 ভাগ করা সম্পর্কে</span> প্রায় ৩০ মাসের আগে, «ভাগ করা» বিকাশগতভাবে অসম্ভব — «আমার!» স্বাস্থ্যকর স্বত্বা। এর বদলে পালা বর্ণনা করো: «তোমার পালা, তারপর আভার পালা।» <b>প্যাটার্ন পার্টি</b>-র পালা-পালা ছন্দ একই স্নায়বিক দক্ষতা তৈরি করে।`,

      "ai.r15": `<span class="ai-tag">🥦 বাছাই করে খাওয়া</span> একটি নতুন খাবার গ্রহণ করতে ছোট শিশুর ১০–১৫ বার সংস্পর্শ লাগতে পারে। খাবার চাপমুক্ত রাখো: বড় ঠিক করে কী/কখন, শিশু ঠিক করে কত। <b>গণিত ল্যাব</b>-এ আঙুর গণনা খাবারকে চাপ ছাড়াই খেলার মতো করে তোলে।`,

      "ai.r16": `<span class="ai-tag">🦷 ব্রাশের যুদ্ধ</span> প্রথম দাঁত থেকে দিনে দুবার ব্রাশ করো; আগে তোমার শিশুকে একটি টেডি «ব্রাশ» করতে দাও (<b>প্রাণী বন্ধু</b>-র যত্ন খেলার মতো)। একটি গান সময় ঠিক করতে সাহায্য করে — সংগীত জগতে <b>এই বৃদ্ধ মানুষটি</b> চেষ্টা করো।`,

      "ai.r17": `<span class="ai-tag">🗣️ দুটি ভাষা</span> দ্বিভাষিক শিশুরা শব্দ মেশাতে পারে — এটি স্বাভাবিক, বিভ্রান্তি নয়। এক-অভিভাবক-এক-ভাষা বা এক-স্থান-এক-ভাষা দুটোই কাজ করে। WonderSprout-এর ভাষা নির্বাচক পুরো অ্যাপকে আলতোভাবে পরিবর্তন দেখাতে দেয়।`,

      "ai.r18": `<span class="ai-tag">😴 ঘুমের পতন</span> ঘুমের পতন সাধারণত প্রায় ৪, ৮–১০, ১২–১৮ এবং ২৪ মাসে আসে — সাধারণত মস্তিষ্কের লাফ। রুটিনকে একঘেয়ে এবং ধারাবাহিক রাখো; কম উজ্জ্বলতায় <b>শুভরাত্রি, ছোট্ট তারা</b> গল্প দিয়ে শান্ত হও।`,

      "ai.r19": `<span class="ai-tag">🌋 ছোড়া এবং মারা</span> বড় অনুভূতি, ছোট শব্দ। অনুভূতির নাম দাও, সীমা ধরে রাখো: «আমি তোমাকে ছুড়তে দেব না। তুমি খুব রাগান্বিত।» একটি গ্রহণযোগ্য পথ দাও — বাইরে ছোড়ার জন্য একটি বল (পদার্থবিদ্যা খেলার মাঠের শক্তি!)। ধারাবাহিকতাই দয়া।`,

      "ai.r20": `<span class="ai-tag">🖍️ আঁকিবুকি</span> প্রায় ১২–১৫ মাস থেকে আঁকিবুকি কাঁধ থেকে কব্জি পর্যন্ত মোটর বিজ্ঞান, এখনও «ছবি» নয়। <b>স্টুডিও</b>-র আঁকার মোড এটি প্রতিফলিত করে: ফলের চেয়ে প্রক্রিয়া। মোটা ক্রেয়ন এবং বড় কাগজ দাও; রঙ বর্ণনা করো।`,

      "ai.r21": `<span class="ai-tag">🏫 মানিয়ে নেওয়া</span> সংক্ষিপ্ত বিদায়, ধারাবাহিক তোলা, এবং একটি সান্ত্বনার বস্তু চুপচাপ সরে যাওয়াকে হারায়। পুনর্মিলনের একটি ছবির আচার (<b>Wonder জার্নাল</b>-এর মতো) শিশুকে তোমার ফিরে আসা অনুমান করতে সাহায্য করে — অনুমানযোগ্যতাই নিরাপত্তা।`,

      "ai.r22": `<span class="ai-tag">🚗 চলার পথে</span> গাড়ির যাত্রা বর্ণনার সোনা: «লাল গাড়ি! বড় ট্রাক!» — <b>পতাকা ও দেশ</b> এবং <b>সাজানো</b>-র শব্দভাণ্ডার সরাসরি জানালা দেখায় স্থানান্তরিত হয়। বিরতিতে সংগীত জগতের <b>চাকা</b> ধরনের ছন্দ গাও।`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    কী চমৎকার প্রশ্ন! ছোট শিশুর সাথে প্রায় যেকোনো কিছুতে WonderSprout এভাবে উত্তর দেয়:
    <ul>
      <li><b>বিস্ময় দিয়ে শুরু করো:</b> «আমি ভাবি… তুমি কী মনে করো?»</li>
      <li><b>শারীরিক করো:</b> তুমি কি এটি স্পর্শ করতে, নাড়াতে, বা অভিনয় করতে পারো?</li>
      <li><b>ক্ষুদ্র রাখো:</b> এই বয়সে ৩০ সেকেন্ড থেকে ৩ মিনিট ৩০ মিনিটের পাঠকে হারায়।</li>
    </ul>
    নিচের প্রশ্নগুলোর একটি চেষ্টা করো — অথবা আমাকে <b>স্ক্রিন সময়</b>, <b>বিকাশের মাইলফলক</b>, <b>বৃষ্টির দিন</b>, <b>Wonder Camera</b>, <b>গল্প</b> বা <b>আজ কী করব</b> সম্পর্কে জিজ্ঞেস করো।`
    },

    yo: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        Èyí ni àwọn èrò mẹ́ta fún òní, ní ètò ìyanu:
        <ul>
          <li><b>Ìṣẹ́jú 2 lójú iboju:</b> ṣí <b>Ìyanu Òní</b> lórí pátákó òbí kí ẹ sì ṣe ìrírí kékeré “Ṣàwárí” pọ̀.</li>
          <li><b>Ìṣẹ́jú 5 lọ́wọ́:</b> ìgbésẹ̀ “Ayé Gidi” — ó nílò ohun tí ẹ ti ní ní ilé nìkan.</li>
          <li><b>Ìṣẹ́jú 0 lójú iboju, ìkẹ́kọ̀ọ́ púpọ̀ jùlọ:</b> ẹ jáde sí ìta. Tọ́ka sí ohun kan kí ẹ sì béèrè pé “Mo yanu kí nìdí…?” Ìfẹ́ mọ̀ ń borí ohun èlò èyíkéyìí.</li>
        </ul>
        <b>Iye ìkẹ́kọ̀ọ́:</b> iboju kúkúrú + ìtẹ̀síwájú ní ayé gidi ń kọ́ ìyípo ṢÀWÁRÍ → SO PỌ̀ láti ọ̀nà WonderSprout.`,

      "ai.r1": `<span class="ai-tag">🛡️ Ìmọ̀ ọgbọ́n iboju</span>
        Òfin WonderSprout: <b>àkókò iboju jẹ́ ẹnu-ọ̀nà, kì í ṣe ibi tí a ń lọ.</b>
        <ul>
          <li>Fi àwọn ìjókòó sí àwọn ìrírí kékeré pẹpẹ: <b>ìṣẹ́jú-aaya 30 sí ìṣẹ́jú 3</b>.</li>
          <li>Máa so iboju pọ̀ nígbà gbogbo pẹ̀lú ìgbésẹ̀ <b>“Gbìyànjú rẹ̀ ní ayé gidi”</b> tó ń tẹ̀lé gbogbo iṣẹ́.</li>
          <li>Kíyèsí ojú tí ó rẹ̀ tàbí ìbínú — ìyẹn ni àmì láti dúró kí o sì gbé.</li>
        </ul>
        Bí iṣẹ́ tí ó dára jùlọ bá wà ní ìta báyìí, WonderSprout yóò sọ fún ọ kí o pa ohun èlò náà. Èyí jẹ́ àbùdá, kì í ṣe àṣìṣe. Fún ìmọ̀ràn ìṣègùn tí ó jẹ́ tirẹ lórí ààlà iboju, dókítà ọmọ rẹ ni orísun tó tọ́.`,

      "ai.r2": `<span class="ai-tag">💛 Ìdáhùn onínúure</span>
        Ọmọ kọ̀ọ̀kan máa ń dàgbà ní ètò tirẹ̀, àti pé ibú gbooro jẹ́ àṣà — WonderSprout kì í ṣe ìwọ̀n tàbí ṣàwárí àrùn fún àwọn ọmọ rárá.
        <ul>
          <li>Lo ìpín <b>Àkíyèsí</b> láti tọpinpin “kò tíì / nígbà mìíràn / déédéé” fún ọ̀sẹ̀ — àwọn àpẹẹrẹ ṣe pàtàkì ju àkókò kan lọ.</li>
          <li>Bí ohun kan bá ń dàníyàn, ìmọ̀lára yẹn yẹ ìbánisọ̀rọ̀ gidi: <b>jọ̀wọ́ sọ̀rọ̀ pẹ̀lú dókítà ọmọ rẹ tàbí ọjọ́gbọ́n ìdàgbàsókè ọmọ.</b></li>
          <li>Lákòókò yìí, “ìdásí” tí ó dára jùlọ jẹ́ kan náà nígbà gbogbo: sọ̀rọ̀, kọrin, ṣeré àti kà pọ̀ lójúmọ́.</li>
        </ul>
        WonderSprout AI ń fún ní àwọn èrò ìṣeré, kì í ṣe ìmọ̀ràn ìṣègùn rárá.`,

      "ai.r3": `<span class="ai-tag">📊 Ọ̀sẹ̀ yìí</span>
        Dálé lórí dátà pátákó:
        <ul>
          <li><b>Agbègbè tí a ṣàwárí jùlọ:</b> Ìmọ̀ ẹ̀rọ & Ìṣẹ̀dá — àwọn ìfarawé Lílefo/Ìrìbomi àti Ohun Ọ̀gbìn Ń Dàgbà jẹ́ àyànfẹ́.</li>
          <li><b>Ìmọ̀ tó ń ga:</b> àsọtẹ́lẹ̀! Bíbéèrè “Ṣé yóò rì?” ṣáájú ìdánwò jẹ́ ìgbésẹ̀ ìrònú ńlá.</li>
          <li><b>Ìdojúkọ tí a dábàá tó kàn:</b> <b>àwọn àpẹẹrẹ</b> — gbìyànjú láti to àwọn bàtà nípa àwọ̀ nígbà ìfọ̀ṣọ (iboju òdo, ìkẹ́kọ̀ọ́ kíkún).</li>
        </ul>
        Gbogbo àlàyé wà nínú kààdì <b>Ìjábọ̀ Ọ̀sẹ̀</b> rẹ lórí pátákó òbí.`,

      "ai.r4": `<span class="ai-tag">🌧️ Ìyanu ọjọ́ òjò</span>
        Òjò jẹ́ yàrá ìwádìí!
        <ul>
          <li><b>Wo:</b> jókòó lẹ́gbẹ̀ẹ́ fèrèsé — “Níbo ni àwọn ìṣun ń lọ? Yára tàbí pẹ̀lẹ́?”</li>
          <li><b>Gbọ́:</b> òjò lórí fèrèsé sí òjò lórí ìkòkò. Gbogbo tàbí pẹ̀lẹ́?</li>
          <li><b>Mú:</b> gbé ife jáde ní fèrèsé (pẹ̀lú àgbàlagbà) — ó gba àkókò mélòó láti kún?</li>
          <li><b>Lẹ́yìn náà iboju:</b> ìṣẹ́jú 2 ti ayé <b>Ayé & Ojú Ọjọ́</b> láti so ohun tí ẹ rí pọ̀ mọ́ ọ̀sán/òru àti àwọ̀sánmà.</li>
        </ul>
        <b>Iye ìkẹ́kọ̀ọ́:</b> àkíyèsí gidi kọ́kọ́, ìsopọ̀ oní-nọ́mbà lẹ́yìn — ìyípo WonderSprout.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        Ohun èyíkéyìí tí ó wà ní àìléwu lè di ẹ̀kọ́:
        <ul>
          <li>Tọ́ka Wonder Camera sí ohun kan — ó ń dá a mọ̀ ó sì ń ṣí <b>Kààdì Wonder</b>.</li>
          <li>Kààdì kọ̀ọ̀kan ń so ohun náà pọ̀ mọ́ àwọn ayé ìkẹ́kọ̀ọ́ (àwọ̀, ìṣirò, ìmọ̀ ẹ̀rọ…) pẹ̀lú iṣẹ́ kíkún 3.</li>
          <li>Kààdì kọ̀ọ̀kan ń parí pẹ̀lú <b>ìpenija ayé gidi</b>, kí ìkẹ́kọ̀ọ́ lè kúrò lójú iboju.</li>
        </ul>
        Gbìyànjú ìfihàn: <b>WonderSprout Camera → tẹ ohun kan</b>. Àkíyèsí àṣírí: ìdámọ̀ ń ṣiṣẹ́ fún àkókò náà — kò sí àwòrán ọmọ rẹ tí a fipamọ́.`,

      "ai.r6": `<span class="ai-tag">📖 Àkókò ìtàn</span>
        Àwọn ìtàn jẹ́ ẹ̀rọ ìsopọ̀:
        <ul>
          <li><b>“Pip àti Irúgbìn Kékeré”</b> — ìdàgbàsókè, sùúrù àti ìṣẹ̀dá. Ó bá gbìn irúgbìn gidi mu.</li>
          <li><b>“Ìwẹ̀ Ńlá Bloop”</b> — lílefo sí ìrìbomi pẹ̀lú àkókò àsọtẹ́lẹ̀. Ó bá ìdánwò ìgbà ìwẹ̀ mu.</li>
          <li>Jẹ́ kí ọmọ rẹ <b>yan ọ̀nà ìtàn náà</b> — àwọn ìpinnu ń kọ́ ìgboyà àti èdè.</li>
        </ul>
        Ìmọ̀ràn: lẹ́yìn kíkà, béèrè pé “Kí ni a ó ṣe ní tó kàn?” kí o sì jẹ́ kí ọmọ darí. Ìyẹn ni ìpele ṢẸ̀DÁ.`,

      "ai.r7": `<span class="ai-tag">🍎 Ìyanu ìdáná</span>
        Ìdáná jẹ́ ẹ̀kọ́ kíkún:
        <ul>
          <li><b>Ìṣirò:</b> ka àwọn àjàrà sí abọ — “ọ̀kan sí i” àti “gbogbo rẹ̀ ti tán”.</li>
          <li><b>Ìmọ̀ ẹ̀rọ:</b> oúnjẹ wo ló ń léfòò nínú abọ omi? (Àjàrà? Ọ̀gẹ̀dẹ̀? Pẹ̀lú àti láìsí awọ!)</li>
          <li><b>Ìmọ̀lára:</b> onígbà díẹ̀ sí rírọ̀, gbígbóná sí tútù — sọ orúkọ ọ̀kọ̀ọ̀kan.</li>
        </ul>
        Lẹ́yìn náà, Wonder Camera lè yí èso èyíkéyìí padà sí Kààdì Wonder.`,

      "ai.r8": `<span class="ai-tag">🌙 Ìyanu àkókò oorun</span>
        Ìlànà tí a lè retí borí èyí tí ó pé. Gbìyànjú ìlànà WonderSprout yìí:
        <ul>
          <li><b>Gbígbóná + ìmọ́lẹ̀ kéré:</b> ìwẹ̀, lẹ́yìn náà ìmọ́lẹ̀ kéré — àwọn iboju tó tàn pa ní ó kéré jù ìṣẹ́jú 30 ṣáájú oorun.</li>
          <li><b>Ìtàn kan, ibi kan náà:</b> ka “Òṣùpà Oní oorun” — ó parí pẹ̀lú ìwà ìkálẹ̀ tí o lè tún ṣe.</li>
          <li><b>Orin kan:</b> “Ṣé ó ń sùn?” nínú WonderSprout Music ni a kọ́ gẹ́gẹ́ bí orin oorun pẹ̀lẹ́.</li>
          <li><b>Ìkálẹ̀ sí ohun mẹ́ta:</b> Òṣùpà, ohun ìṣeré kan, àti ara wọn — àṣà ìdúpẹ́ kékeré.</li>
        </ul>
        <b>Iye ìkẹ́kọ̀ọ́:</b> àwọn ìlànà ń kọ́ ààbò àti ìrònú ìtẹ̀lé (“ìwẹ̀ kọ́kọ́, lẹ́yìn náà ìtàn, lẹ́yìn náà orin”). Fún ìdààmú oorun tí ó pẹ́, dókítà ọmọ rẹ ni ìtọ́sọ́nà tó tọ́.`,

      "ai.r9": `<span class="ai-tag">💛 Ìmọ̀lára ńlá</span>
        Ìmọ̀lára ńlá jẹ́ àṣà ní ọjọ́-orí yìí — ọpọlọ ìmọ̀lára ń dàgbà yára ju ọ̀rọ̀ láti ṣàpèjúwe rẹ̀ lọ.
        <ul>
          <li><b>Sọ orúkọ rẹ̀ láti ṣàkóso:</b> “O binú nítorí ilé náà ṣubú.” Sísọ orúkọ ìmọ̀lára ń kọ́ èdè láti ṣàkóso wọn.</li>
          <li><b>Jẹ́ ìdákọ́rọ̀ túbọ̀:</b> jókòó níbẹ̀, mí pẹ̀lẹ́, dúró. Ìdádúró pọ̀ ń wá ṣáájú ìdádúró ara ẹni.</li>
          <li><b>Lẹ́yìn ìjì:</b> ìfẹnukò, lẹ́yìn náà tún ṣe é pẹ̀lẹ́ — “ilé náà ṣubú, o bínú, a tún kọ́ ọ.”</li>
        </ul>
        WonderSprout kì í ṣe àwárí àrùn rárá. Bí ìmọ̀lára ńlá bá jọ pé ó wọ́pọ̀, lágbára tàbí ní ìdààmú, <b>jọ̀wọ́ sọ̀rọ̀ pẹ̀lú dókítà ọmọ rẹ tàbí ọjọ́gbọ́n ìdàgbàsókè ọmọ.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 Ìyanu ìṣẹ̀dá</span>
        Ìta jẹ́ yàrá ìkẹ́kọ̀ọ́ àkọ́kọ́ — ó sì jẹ́ ọfẹ̀:
        <ul>
          <li><b>Wíwá àwọ̀:</b> wá ohun aláwọ̀ ewé, àwọ̀ igi, àwọ̀ yèlò àti àwọ̀ pupa.</li>
          <li><b>Ka ohùn:</b> dúró kí o sì gbọ́ — ohùn mélòó ọ̀tọ̀ọ̀tọ̀? Ẹyẹ, ẹ̀fúùfù, ọkọ̀…</li>
          <li><b>Àpò ìṣúra:</b> ko ìṣúra àìléwu 3 jọ (ẹ̀wẹ̀, òkúta, ọ̀pá) kí o sì sọ orúkọ ọ̀kọ̀ọ̀kan.</li>
          <li><b>Padà sílé:</b> ìṣẹ́jú 2 ti Yàrá Ìgbésí Ayé ń so ohun tí ẹ rí pọ̀ mọ́ bí àwọn ohun ọ̀gbìn ṣe ń dàgbà.</li>
        </ul>
        <b>Iye ìkẹ́kọ̀ọ́:</b> ìfúnni ìmọ̀lára gidi (ilẹ̀ aláìdọ́gba, ìmọ́lẹ̀ tí ń yí padà, ohùn alààyè) ń kọ́ ọpọlọ ní ọ̀nà tí kò sí iboju tí ó lè ṣe.`,

      "ai.r11": `<span class="ai-tag">🚗 Ìyanu ìrìn-àjò</span>
        Ìrìn-àjò gígùn jẹ́ àkókò ìyanu:
        <ul>
          <li><b>Mo rí àwọ̀:</b> “Mo rí ohun PUPA!” — àwọn ọmọ kékeré lè ṣeré pẹ̀lú ìrànlọ́wọ́.</li>
          <li><b>Ka lójú ọ̀nà:</b> àwọn ọkọ̀ ẹrù, ìhò, àwọn afárá — kíkà ń pa àárè.</li>
          <li><b>Kọrin pọ̀:</b> WonderSprout Music kò nílò ìfihan; fi àyànfẹ́ 3 sí ìtẹ̀lé.</li>
          <li><b>Ìyanu fèrèsé:</b> sọ ohun tí ń kọjá: “Màlúù! Odò! Ilé ìyípo ń yí!”</li>
        </ul>
        Àwọn apá tí kò ní iboju dára jùlọ níbí; fi ìtàn kúkúrú kan pamọ́ fún ìṣẹ́jú 10 tí ó le jùlọ.`,

      "ai.r12": `<span class="ai-tag">🎂 Ìyanu àjọyọ̀</span>
        Àwọn ọjọ́ ìbí jẹ́ ẹ̀kọ́ ìṣirò àṣírí:
        <ul>
          <li><b>Ka àwọn àbẹ́là</b> pọ̀ — ọ̀kan fún ọdún kọ̀ọ̀kan, kíkà ọ̀kan-sí-ọ̀kan ní ayé gidi.</li>
          <li><b>Kọ “Ọjọ́ Ìbí Ayọ̀”</b> — ó wà nínú WonderSprout Music pẹ̀lú ọ̀rọ̀ karaoke.</li>
          <li><b>Ìdánilẹ́kọ̀ọ́ ìfẹ́fẹ́:</b> fífẹ́ àbẹ́lá jẹ́ ìṣàkóso ẹ̀mí gidi fún ọ̀rọ̀.</li>
          <li><b>Fi àkókò pamọ́:</b> fi àkọsílẹ̀ sí Ìwé Ìrántí Wonder pẹ̀lú àwòrán lẹ́yìn náà.</li>
        </ul>
        Fi àwọn àjọyọ̀ kúrú ní ọjọ́-orí yìí — wákàtí kan ayọ̀ borí wákàtí mẹ́ta ìrẹ̀wẹ̀sì.`,

      "ai.r13": `<span class="ai-tag">🚽 Sùúrù ìgbẹ́</span> Ọ̀pọ̀lọpọ̀ àwọn ọmọ ń fi ìmúrasílẹ̀ hàn láàárín oṣù 18–36 — kíyèsí ìfẹ́, kì í ṣe ọjọ́-orí. So pọ̀ mọ́ <b>Ìbùdó Ìyàtọ̀sí</b> (ìyàtọ̀sí ọ̀rinrin/tútú!) kí o sì ṣe ayẹyẹ gbogbo ìgbìyànjú. Má ṣe fi ìyà jìyà fún àwọn àṣìṣe; ọpọlọ ń kọ́ àpò ìtọ̀ nípasẹ̀ ìtúnyẹ̀wò túbọ̀.`,

      "ai.r14": `<span class="ai-tag">🤝 Nípa pípín</span> Ṣáájú oṣù ~30, “pípín” kò ṣeé ṣe ní ìdàgbàsókè — “tèmi!” jẹ́ ìwà ara tó ní ìlera. Sọ àwọn ìyípo dípò bẹ́ẹ̀: “Ìyípo rẹ, lẹ́yìn náà ìyípo Ava.” Ìlù ìyípo ti <b>Àjọ Àpẹẹrẹ</b> ń kọ́ ìmọ̀ iṣan kanna.`,

      "ai.r15": `<span class="ai-tag">🥦 Ìjẹun àṣàyàn</span> Ọmọ kékeré lè nílò ìfarakanra 10–15 láti gbà oúnjẹ tuntun. Fi àwọn oúnjẹ sí ìwọ̀n láìsí ìfúnpa: òbí ń pinnu kí/nígbà, ọmọ ń pinnu iye. Kíkà àjàrà nínú <b>Yàrá Ìṣirò</b> ń jẹ́ kí oúnjẹ jẹ́ ìṣeré láìsí ìfúnpa.`,

      "ai.r16": `<span class="ai-tag">🦷 Ìjà fífọ̀ eyín</span> Fọ̀ ní ìgbà méjì lójúmọ́ láti eyín àkọ́kọ́; jẹ́ kí ọmọ rẹ “fọ̀” ìdíìtì kọ́kọ́ (gẹ́gẹ́ bí ìṣeré ìtọ́jú <b>Ọ̀rẹ́ Ẹranko</b>). Orin ń ràn lọ́wọ́ láti ṣe àkókò — gbìyànjú <b>Àgbà Ọkùnrin Yìí</b> nínú ayé Orin.`,

      "ai.r17": `<span class="ai-tag">🗣️ Èdè méjì</span> Àwọn ọmọ oní-èdè méjì lè pò àwọn ọ̀rọ̀ — èyí jẹ́ àṣà, kì í ṣe ìdàrúdàpọ̀. Òbí-kan-èdè-kan tàbí ibi-kan-èdè-kan méjèèjì ń ṣiṣẹ́. Olùyan èdè WonderSprout ń jẹ́ kí gbogbo ohun èlò náà ṣe àpẹẹrẹ ìyípadà pẹ̀lẹ́.`,

      "ai.r18": `<span class="ai-tag">😴 Ìpadàsẹ́yìn oorun</span> Ìpadàsẹ́yìn oorun máa ń wáyé ní nǹkan bí oṣù ~4, 8–10, 12–18 àti 24 — sábà máa ń jẹ́ ìgbésẹ̀ ọpọlọ. Fi ìlànà sí ìbànújẹ́ àti ìbámu; fi ìtàn <b>Ìkálẹ̀, Ìràwọ̀ Kékeré</b> tú lójú iboju kéré.`,

      "ai.r19": `<span class="ai-tag">🌋 Jíjà & Lílu</span> Ìmọ̀lára ńlá, ọ̀rọ̀ kékeré. Sọ orúkọ ìmọ̀lára, dì í mọ́ ààlà: “Èmi kì yóò jẹ́ kí o jì í. O bínú púpọ̀.” Fúnni ní ọ̀nà tó yẹ — bọ́ọ̀lù láti jì ní ìta (agbára Pápá Ìmọ̀ Ẹ̀rọ!). Ìbámu jẹ́ inúure.`,

      "ai.r20": `<span class="ai-tag">🖍️ Kíkọ</span> Kíkọ láti oṣù ~12–15 jẹ́ ìmọ̀ ìṣiṣẹ́ láti èjìká sí ọwọ́, kì í ṣe “àwòrán” síbẹ̀. Ipò kíkọ ti <b>Ilé Ìṣẹ́</b> ń ṣe àfihàn èyí: ìlànà lórí èsì. Fúnni ní kráyọ̀nì tlútlú àti páàpá ńlá; sọ àwọn àwọ̀.`,

      "ai.r21": `<span class="ai-tag">🏫 Ìmúra</span> Ìkálẹ̀ kúkúrú, ìgbà padà dédéé, àti ohun ìtùnú borí jíjá kúrò ní ìkọ̀kọ̀. Ìwà àwòrán ìpàdé (gẹ́gẹ́ bí <b>Ìwé Ìrántí Wonder</b>) ń ràn ọmọ lọ́wọ́ láti retí ìpadà rẹ — ìretí jẹ́ ààbò.`,

      "ai.r22": `<span class="ai-tag">🚗 Ní ìrìn</span> Ìrìn ọkọ̀ jẹ́ wúrà ìtàn: “Ọkọ̀ pupa! Ọkọ̀ ẹrù ńlá!” — àwọn ọ̀rọ̀ <b>Àwọn Àṣíá & Orílẹ̀-èdè</b> àti <b>Ìyàtọ̀sí</b> ń gbé lọ tààrà sí wíwo fèrèsé. Kọ àwọn ìlù ìdí <b>Àwọn Kẹ̀kẹ́ Bọ́ọ̀sì</b> láti ayé Orin nígbà ìdúró.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    Ìbéèrè ẹlẹ́wà kan! Èyí ni ọ̀nà WonderSprout láti dáhùn fún ohun fẹ́rẹ̀ẹ́ pẹ̀lú ọmọ kékeré:
    <ul>
      <li><b>Bẹ̀rẹ̀ pẹ̀lú ìyanu:</b> “Mo yanu… kí ni ÌWỌ rò?”</li>
      <li><b>Sọ ọ́ di ti ara:</b> ṣé o lè fọwọ́ kàn án, gbé e, tàbí ṣe é?</li>
      <li><b>Fi í sí kékeré:</b> ìṣẹ́jú-aaya 30 sí ìṣẹ́jú 3 borí ẹ̀kọ́ ìṣẹ́jú 30 ní ọjọ́-orí yìí.</li>
    </ul>
    Gbìyànjú ọ̀kan nínú àwọn ìbéèrè ní ìsàlẹ̀ — tàbí béèrè lọ́wọ́ mi nípa <b>àkókò iboju</b>, <b>ìgbésẹ̀ ìdàgbàsókè</b>, <b>ọjọ́ òjò</b>, <b>Wonder Camera</b>, <b>àwọn ìtàn</b> tàbí <b>kí ni a ó ṣe lónìí</b>.`
    },

    ha: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        Ga ra'ayoyi uku na yau, a tsarin mamaki:
        <ul>
          <li><b>Minti 2 na allo:</b> buɗe <b>Mamakin Yau</b> akan dashibodin iyaye kuma ku yi ƙaramin gwaji na “Bincika” tare.</li>
          <li><b>Minti 5 na aiki:</b> matakin “Duniyar Gaskiya” — yana buƙatar abubuwan da kuke da su a gida kawai.</li>
          <li><b>Minti 0 na allo, ƙarin koyo:</b> fita waje. Nuna abu ɗaya ka tambaya “Ina mamakin me ya sa…?” Sha'awar sani tana cin kowace app.</li>
        </ul>
        <b>Darajar koyo:</b> ƙaramin allo + ci gaba a duniyar gaskiya yana gina zagayen GANO → HAƊA daga hanyar WonderSprout.`,

      "ai.r1": `<span class="ai-tag">🛡️ Falsafar allo</span>
        Dokar WonderSprout: <b>lokacin allo ƙofa ce, ba wurin zuwa ba.</b>
        <ul>
          <li>Taƙaita zaman zuwa ƙananan gwaje-gwajen dandali: <b>daƙiƙa 30 zuwa minti 3</b>.</li>
          <li>Ka haɗa allo koyaushe da matakin <b>“Gwada shi a rayuwar gaskiya”</b> wanda ke bin kowace aiki.</li>
          <li>Ka lura da idanu masu gajiya ko rashin kwanciyar hankali — wannan shine alamar tsayawa da motsi.</li>
        </ul>
        Idan mafi kyawun aiki a yanzu yana waje, WonderSprout zai gaya maka rufe app ɗin. Wannan sifa ce, ba kuskure ba. Don shawarar likitanci ta musamman game da iyakokin allo, likitan yara shine mafari mai kyau.`,

      "ai.r2": `<span class="ai-tag">💛 Amsa mai tausayi</span>
        Kowane yaro yana girma akan jadawalin kansa, kuma kewayon da ya faɗi al'ada ce — WonderSprout ba ya yi wa yara matsayi ko gwaji.
        <ul>
          <li>Yi amfani da shafin <b>Abubuwan Lura</b> don bin “ba tukuna / wani lokaci / akai-akai” na makonni — tsari yana da mahimmanci fiye da lokaci ɗaya.</li>
          <li>Idan wani abu yana damun ka, wannan jin ya cancanci tattaunawa ta gaskiya: <b>don Allah ka yi magana da likitan yara ko ƙwararren ci gaban yara.</b></li>
          <li>A wannan lokacin, mafi kyawun “shiga tsakani” koyaushe ɗaya ne: yi magana, waƙa, wasa kuma karanta tare kowace rana.</li>
        </ul>
        WonderSprout AI yana ba da ra'ayoyin wasa, ba tabataki shawarar likitanci ba.`,

      "ai.r3": `<span class="ai-tag">📊 Wannan makon</span>
        Bisa ga bayanin dashibodin:
        <ul>
          <li><b>Fanni mafi bincike:</b> Kimiyya & Halitta — kwaikwayon Yawo/Nitsewa da Tsiro Mai Girma sune masu so.</li>
          <li><b>Ƙwarewar da ke ƙaruwa:</b> hasashe! Yin tambaya “Zai nitse?” kafin gwaji babban matakin tunani ne.</li>
          <li><b>Mayar da hankali da aka ba da shawara:</b> <b>tsari</b> — gwada tsara takalma ta launi a lokacin wanki (allo sifili, cikakken koyo).</li>
        </ul>
        Cikakkun bayanai suna cikin katin <b>Rahoton Mako</b> akan dashibodin iyaye.`,

      "ai.r4": `<span class="ai-tag">🌧️ Mamakin ranar ruwa</span>
        Ruwan sama dakin gwaji ne!
        <ul>
          <li><b>Kallo:</b> zauna kusa da taga — “Ina raɓaɓɓun ke zuwa? Da sauri ko a hankali?”</li>
          <li><b>Saurara:</b> ruwan sama akan taga da ruwan sama akan tukunya. Mai ƙarfi ko hankali?</li>
          <li><b>Kama:</b> riƙe kofi a waje da taga (tare da babba) — tsawon wani lokaci don cika?</li>
          <li><b>Sannan allo:</b> minti 2 na duniyar <b>Ƙasa & Yanayi</b> don haɗa abin da kuka gani da rana/dare da gajimare.</li>
        </ul>
        <b>Darajar koyo:</b> lura ta gaskiya tukunna, haɗin dijital daga baya — zagayen WonderSprout.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        Kowace abu mai aminci na iya zama darasi:
        <ul>
          <li>Nuna Wonder Camera zuwa abu — yana gane shi kuma yana buɗe <b>Katin Wonder</b>.</li>
          <li>Kowace kati yana haɗa abun da duniyoyin koyo (launi, lissafi, kimiyya…) tare da ayyuka 3 masu sauri.</li>
          <li>Kowace kati yana ƙarewa da <b>kalubalen duniyar gaskiya</b>, don haka koyo yana barin allo.</li>
        </ul>
        Gwada gwajin: <b>WonderSprout Camera → danna abu</b>. Bayanin sirri: gane yana gudana na ɗan lokaci — babu hotunan yaro da ake adanawa.`,

      "ai.r6": `<span class="ai-tag">📖 Lokacin labari</span>
        Labarai injinan haɗin kai ne:
        <ul>
          <li><b>“Pip da Ƙaramin Irin”</b> — girma, haƙuri da halitta. Yana haɗuwa da dasa wake na gaskiya.</li>
          <li><b>“Babban Wankin Bloop”</b> — yawo da nitsewa tare da lokutan hasashe. Yana haɗuwa da gwaje-gwajen lokacin wanka.</li>
          <li>Bari yaro <b>ya zaɓi hanyar labarin</b> — yanke shawara yana gina ƙarfin hali da harshe.</li>
        </ul>
        Shawara: bayan karatu, tambaya “Me za mu yi na gaba?” kuma bari yaro ya jagoranta. Wannan shine matakin ƘIRƘIRA.`,

      "ai.r7": `<span class="ai-tag">🍎 Mamakin dafa abinci</span>
        Dafa abinci cikakken manhaja ne:
        <ul>
          <li><b>Lissafi:</b> ƙirga inabi akan faranti — “ɗaya ƙari” da “duka sun ƙare”.</li>
          <li><b>Kimiyya:</b> waɗanne abinci ke yawo a cikin kwanon ruwa? (Inabi? Aya? Tare da da ba tare da fatar ba!)</li>
          <li><b>Iyaka:</b> mai kauri da laushi, zafi da sanyi — ka ambaci kowanne.</li>
        </ul>
        Bayan haka, Wonder Camera na iya mayar da kowace 'ya'yan itace zuwa Katin Wonder.`,

      "ai.r8": `<span class="ai-tag">🌙 Mamakin lokacin barci</span>
        Tsarin da za a iya tsammani yana cin cikakke. Gwada wannan tsarin WonderSprout:
        <ul>
          <li><b>Zafi + duhu:</b> wanka, sannan ƙananan fitilu — allo masu haske a kashe aƙalla minti 30 kafin barci.</li>
          <li><b>Labari ɗaya, wuri ɗaya:</b> karanta “Wata Mai Barci” — yana ƙarewa da al'adar dare mai kyau da zaka iya kwafi.</li>
          <li><b>Waƙa ɗaya:</b> “Kana Barci?” a cikin WonderSprout Music an gina shi azaman waƙar barci mai hankali.</li>
          <li><b>Daɗin dare ga abubuwa uku:</b> Wata, wani abu, da juna — ƙaramin al'adar godiya.</li>
        </ul>
        <b>Darajar koyo:</b> tsari yana gina aminci da tunani na jeri (“wanka tukunna, sannan labari, sannan waƙa”). Don damuwa ta dorewa game da barci, likitan yara shine jagora mai kyau.`,

      "ai.r9": `<span class="ai-tag">💛 Manyan ji</span>
        Manyan ji al'ada ne a wannan shekarun — kwakwalwar ji tana girma da sauri fiye da kalmomin bayyana ta.
        <ul>
          <li><b>Ambata don sarrafawa:</b> “Ka damu saboda hasumiyar ta faɗi.” Ambata ji yana gina harshen sarrafa su.</li>
          <li><b>Kasance dangi mai nutsuwa:</b> zauna kusa, ka numfashi a hankali, ka jira. Haɗin gwiwa yana zuwa kafin sarrafa kai.</li>
          <li><b>Bayan hadari:</b> runguma, sannan ka sake yin shi a hankali — “hasumiyar ta faɗi, ka yi fushi, muka sake gina ta.”</li>
        </ul>
        WonderSprout ba ya gwada abin da ba a sani ba. Idan manyan ji sun fi kama da akai-akai, mai ƙarfi ko damuwa, <b>don Allah ka yi magana da likitan yara ko ƙwararren ci gaban yara.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 Mamakin halitta</span>
        Waje shine asalin ɗakin karatu — kuma kyauta ne:
        <ul>
          <li><b>Neman launi:</b> nemo wani abu kore, ruwan kasa, rawaya da ja.</li>
          <li><b>Ƙirga sauti:</b> tsaya ka saurara — sauti nawa daban-daban? Tsuntsaye, iska, motoci…</li>
          <li><b>Aljihar kaya:</b> tattara kaya 3 masu aminci (ganye, dutse, sanda) ka ambaci kowanne.</li>
          <li><b>Komawa gida:</b> minti 2 na Dakin Gwajin Rayuwa yana haɗa abin da kuka gani da yadda tsirrai ke girma.</li>
        </ul>
        <b>Darajar koyo:</b> shigar da hankali na gaskiya (ƙasa marar daidaito, haske mai canzawa, sauti masu rai) yana gina kwakwalwa ta hanyoyin da babu allo zai iya.`,

      "ai.r11": `<span class="ai-tag">🚗 Mamakin tafiya</span>
        Tafiyoyi masu tsawo lokacin mamaki ne:
        <ul>
          <li><b>Ina ganin launi:</b> “Ina ganin wani abu JA!” — ƙananan yara na iya wasa tare da taimako.</li>
          <li><b>Ƙirga a hanya:</b> motocin kaya, rami, gadoji — ƙirgawa yana kashe gajiya.</li>
          <li><b>Waƙa tare:</b> WonderSprout Music ba ya buƙatar sigina; shirya masu so 3.</li>
          <li><b>Mamakin taga:</b> bayyana abin da ke wucewa: “Saniya! Kogi! Injin iska mai juyawa!”</li>
        </ul>
        Sassa marasa allo sun fi kyau a nan; ajiye gajeren labari ɗaya don minti 10 mafi wuya.`,

      "ai.r12": `<span class="ai-tag">🎂 Mamakin biki</span>
        Ranakun haihuwa darussan lissafi ne na sirri:
        <ul>
          <li><b>Ƙirga kyandila</b> tare — ɗaya ga kowace shekara, ƙirgawa ɗaya-biya-ɗaya a rayuwar gaskiya.</li>
          <li><b>Waƙa “Ranar Haihuwa Mai Kyau”</b> — yana cikin WonderSprout Music tare da kalmomin karaoke.</li>
          <li><b>Gwajin hura:</b> hura kyandila shine sarrafa numfashi na gaskiya don magana.</li>
          <li><b>Ajiye lokacin:</b> ƙara shigar Jaridar Wonder tare da hoto daga baya.</li>
        </ul>
        A wannan shekarun a yi bikin a taƙaice — awa ɗaya na farin ciki tana cin awanni uku na wahala.`,

      "ai.r13": `<span class="ai-tag">🚽 Haƙurin bayan gida</span> Yawancin yara suna nuna shiri tsakanin watanni 18–36 — ka lura da sha'awa, ba shekaru ba. Ka haɗa shi da <b>Tashar Tsarawa</b> (tsarawa damina/fanko!) kuma ka yi murna da kowace ƙoƙari. Kada ka azabtar da hatsarori; kwakwalwa tana koyon mafitsara ta hanyar maimaitawa mai nutsuwa.`,

      "ai.r14": `<span class="ai-tag">🤝 Game da rabawa</span> Kafin kimanin watanni ~30, “rabawa” ba zai yiwu ba a fannin ci gaba — “nawa!” cikakkiyar kai ce mai lafiya. Maimakon haka ka bayyana juyawa: “Juyawar ka, sannan juyawar Ava.” Kida na juyawa na <b>Bikin Tsari</b> yana gina ƙwarewar jijiya iri ɗaya.`,

      "ai.r15": `<span class="ai-tag">🥦 Zaɓin abinci</span> Ƙaramin yaro na iya buƙatar maimaitawa 10–15 don karɓar sabon abinci. A riƙe abinci mara matsin lamba: babba yana yanke shawarar me/lokaci, yaro yana yanke shawarar yawa. Ƙirga inabi a cikin <b>Dakin Gwajin Lissafi</b> yana sa abinci ya zama wasa ba tare da matsin lamba ba.`,

      "ai.r16": `<span class="ai-tag">🦷 Yaƙin goge haƙori</span> Goge sau biyu a rana daga haƙori na farko; bari yaro ya “goge” ɗan tsana tukunna (kamar wasan kulawa na <b>Abokan Dabbobi</b>). Waƙa tana taimakawa da lokaci — gwada <b>Wannan Tsohon Mutum</b> a duniyar Kiɗa.`,

      "ai.r17": `<span class="ai-tag">🗣️ Harsuna biyu</span> Jarirai masu harsuna biyu na iya haɗa kalmomi — wannan al'ada ce, ba rudani ba. Iyaye ɗaya-harshe ɗaya ko wuri ɗaya-harshe ɗaya duka suna aiki. Mai zaɓar harshe na WonderSprout yana barin dukan app ɗin ya nuna canzawa a hankali.`,

      "ai.r18": `<span class="ai-tag">😴 Ragewar barci</span> Ragewar barci yawanci yana faruwa a kusan watanni ~4, 8–10, 12–18 da 24 — yawanci tsalle na kwakwalwa. A riƙe tsarin yana da banƙyama kuma akai-akai; a nutsu da labarin <b>Daɗin Dare, Ƙaramin Tauraro</b> a ƙaramin haske.`,

      "ai.r19": `<span class="ai-tag">🌋 Jifa & Buga</span> Manyan ji, ƙananan kalmomi. Ambata jin, riƙe iyaka: “Ba zan bar ka jefa ba. Ka yi fushi sosai.” Ba da hanya mai kyau — ƙwallo don jefa a waje (ƙarfin Filin Kimiyyar Lissafi!). Dorewa ita ce alheri.`,

      "ai.r20": `<span class="ai-tag">🖍️ Zana</span> Zanawa daga kimanin watanni ~12–15 kimiyyar motsi ce daga kafada zuwa wuyan hannu, ba “hotuna” ba tukunna. Yanayin zana na <b>Studio</b> yana nuna haka: tsari akan sakamako. Ba da crayons masu kauri da takarda babba; bayyana launuka.`,

      "ai.r21": `<span class="ai-tag">🏫 Daidaitawa</span> Gaisuwa ta gajere, dawowa akai-akai, da abu mai ta'aziya sun fi ɓacewa a ɓoye. Al'adar hoto ta haɗuwa (kamar <b>Jaridar Wonder</b>) tana taimaka wa yaro ya yi hasashen dawowar ka — tsammani shine aminci.`,

      "ai.r22": `<span class="ai-tag">🚗 A kan hanya</span> Tafiyar mota zinariya ce ta bayani: “Mota ja! Babbar mota!” — ƙamus na <b>Tutoci & Ƙasashe</b> da <b>Tsarawa</b> yana canzawa kai tsaye zuwa kallon taga. Waƙa <b>Ƙafafun Bas</b> irin kida daga duniyar Kiɗa a tsayawa.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    Tambaya mai kyau! Ga yadda WonderSprout ke amsa kusan komai tare da ƙaramin yaro:
    <ul>
      <li><b>Fara da mamaki:</b> “Ina mamaki… me KE KA kewaye?”</li>
      <li><b>Mai da shi na jiki:</b> zaka iya taɓa shi, motsa shi, ko yin shi?</li>
      <li><b>Riƙe shi ƙarami:</b> daƙiƙa 30 zuwa minti 3 suna cin darasi na minti 30 a wannan shekarun.</li>
    </ul>
    Gwada ɗaya daga cikin tambayoyin ƙasa — ko tambaye ni game da <b>lokacin allo</b>, <b>matakai</b>, <b>ranakun ruwa</b>, <b>Wonder Camera</b>, <b>labarai</b> ko <b>me za a yi yau</b>.`
    },

    ig: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        Nke a bụ echiche atọ maka taa, n'usoro ihe ịtụnanya:
        <ul>
          <li><b>Nkeji 2 ihuenyo:</b> mepee <b>Ihe ịtụnanya taa</b> na dashboard nne na nna ma mee ahụmịhe obere «Nyochaa» ọnụ.</li>
          <li><b>Nkeji 5 aka:</b> nzọụkwụ «Ụwa n'ezie» — ọ chọrọ naanị ihe ị nwere n'ụlọ.</li>
          <li><b>Nkeji 0 ihuenyo, ịmụta kachasị:</b> pụọ n'èzí. Tụ aka n'otu ihe ma jụọ «Anọ m na-eche gịnị mere…?» Ịchọ ịmata ihe na-emeri ngwa ọ bụla.</li>
        </ul>
        <b>Uru ịmụta:</b> ihuenyo dị mkpirikpi + ịga n'ihu n'ụwa n'ezie na-ewu usoro CHỌPỤTA → JIKỌỌ site na usoro WonderSprout.`,

      "ai.r1": `<span class="ai-tag">🛡️ Nkà ihe ọmụma ihuenyo</span>
        Iwu WonderSprout: <b>oge ihuenyo bụ ọnụ ụzọ, ọ bụghị ebe a na-aga.</b>
        <ul>
          <li>Debe oge na ahụmịhe obere nke ikpo okwu: <b>nkeji 30 ruo nkeji 3</b>.</li>
          <li>Jikọọ ihuenyo mgbe niile na nzọụkwụ <b>«Nwalee ya na ndụ n'ezie»</b> nke na-eso ọrụ ọ bụla.</li>
          <li>Lelee anya ike gwụrụ ma ọ bụ iwe — nke ahụ bụ ihe ịrịba ama ịkwụsị na ịkwaga.</li>
        </ul>
        Ọ bụrụ na ọrụ kacha mma ugbu a dị n'èzí, WonderSprout ga-agwa gị ka ị mechie ngwa ahụ. Nke ahụ bụ njirimara, ọ bụghị njehie. Maka ndụmọdụ ahụike nke gị gbasara oke ihuenyo, dọkịta nwa gị bụ ebe kwesịrị ekwesị.`,

      "ai.r2": `<span class="ai-tag">💛 Azịza nwere ịhụnanya</span>
        Nwa ọ bụla na-eto n'usoro nke ya, ma oke sara mbara bụ ihe nkịtị — WonderSprout anaghị ekewa ma ọ bụ chọpụta ọrịa ụmụaka.
        <ul>
          <li>Jiri taabụ <b>Nleba anya</b> soro «ọ bụghị ma / mgbe ụfọdụ / mgbe niile» ruo izu — usoro dị mkpa karịa oge otu.</li>
          <li>Ọ bụrụ na ihe na-echegbu gị, mmetụta ahụ kwesịrị mkparịta ụka n'ezie: <b>biko gwa dọkịta nwa gị ma ọ bụ ọkachamara mmepe nwa okwu.</b></li>
          <li>Ka ọ dị ugbu a, «ntinye aka» kacha mma mgbe niile bụ otu: kwuo okwu, bụọ abụ, gwuo egwu ma gụọ ọnụ kwa ụbọchị.</li>
        </ul>
        WonderSprout AI na-enye echiche egwu, ọ dịghị mgbe ọ na-enye ndụmọdụ ahụike.`,

      "ai.r3": `<span class="ai-tag">📊 Izu a</span>
        Dabere na data dashboard:
        <ul>
          <li><b>Mpaghara a nyochachara:</b> Sayensị & Okike — Ise n'elu/Imikpu na Osisi na-eto bụ ihe ndị a hụrụ n'anya.</li>
          <li><b>Nkà na-arịgo:</b> ibu amụma! Ịjụ «Ọ ga-emikpu?» tupu ịnwale bụ nnukwu nzọụkwụ echiche.</li>
          <li><b>Ebe a na-atụ aro ọzọ:</b> <b>usoro</b> — nwalee ịhazi sọks site na agba mgbe ị na-asa ákwà (ihuenyo efu, ịmụta zuru ezu).</li>
        </ul>
        Nkọwa zuru ezu dị na kaadị <b>Akụkọ izu</b> gị na dashboard nne na nna.`,

      "ai.r4": `<span class="ai-tag">🌧️ Ihe ịtụnanya ụbọchị mmiri</span>
        Mmiri ozuzo bụ ụlọ nyocha!
        <ul>
          <li><b>Lee anya:</b> nọdụ n'akụkụ windo — «Ebee ka mmiri ozuzo na-aga? Ọsọ ọsọ ka ọ bụ nwayọ?»</li>
          <li><b>Gee ntị:</b> mmiri ozuzo na windo ma e jiri ya tụnyere mmiri ozuzo na ite. Ụda ka ọ bụ jụụ?</li>
          <li><b>Jide:</b> were iko pụọ na windo (ya na onye toro eto) — oge ole ka ọ ga-ewe iji jupụta?</li>
          <li><b>Mgbe ahụ ihuenyo:</b> nkeji 2 nke ụwa <b>Ụwa & Ihu igwe</b> iji jikọta ihe ị hụrụ na ụbọchị/abalị na ígwé ojii.</li>
        </ul>
        <b>Uru ịmụta:</b> nleba anya n'ezie mbụ, njikọ dijitalụ nke abụọ — usoro WonderSprout.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        Ihe ọ bụla dị nchebe nwere ike ịghọ nkuzi:
        <ul>
          <li>Tụọ Wonder Camera n'ihe — ọ na-amata ya ma mepee <b>Kaadị Wonder</b>.</li>
          <li>Kaadị ọ bụla na-ejikọta ihe ahụ na ụwa ịmụta (agba, mgbakọ na mwepụ, sayensị…) nwere ọrụ ngwa ngwa 3.</li>
          <li>Kaadị ọ bụla na-ejedebe na <b>mma ụwa n'ezie</b>, ka ịmụta wee pụọ na ihuenyo.</li>
        </ul>
        Nwalee ngosi: <b>WonderSprout Camera → pịa ihe</b>. Mara nzuzo: njirimara na-agba n'oge ahụ — a naghị echekwa foto nwa gị.`,

      "ai.r6": `<span class="ai-tag">📖 Oge akụkọ</span>
        Akụkọ bụ igwe njikọ:
        <ul>
          <li><b>«Pip na obere mkpụrụ»</b> — uto, ndidi na okike. Ọ dabara na ịkụ agwa n'ezie.</li>
          <li><b>«Nnukwu ịsa ahụ Bloop»</b> — ise n'elu na imikpu nwere oge ibu amụma. Ọ dabara na nnwale oge ịsa ahụ.</li>
          <li>Hapụ nwa gị <b>họrọ ụzọ akụkọ</b> — mkpebi na-ewu onwe na asụsụ.</li>
        </ul>
        Ndụmọdụ: mgbe ị gụsịrị, jụọ «Gịnị ka anyị ga-eme na-esote?» hapụ nwa ahụ duzie. Nke ahụ bụ ọkwa MEPỤTA.`,

      "ai.r7": `<span class="ai-tag">🍎 Ihe ịtụnanya kichin</span>
        Kichin bụ usoro ọmụmụ zuru oke:
        <ul>
          <li><b>Mgbakọ na mwepụ:</b> gụọ mkpụrụ vaịn n'efere — «otu ọzọ» na «niile agwụla».</li>
          <li><b>Sayensị:</b> nri ole na-ese n'elu mmiri n'ime efere mmiri? (Mkpụrụ vaịn? Unere? Nwere akpụkpọ na enweghị!)</li>
          <li><b>Uche:</b> na-ekpo ọkụ ma e jiri ya tụnyere nro, ọkụ ma e jiri ya tụnyere oyi — kpọọ aha nke ọ bụla.</li>
        </ul>
        Mgbe ahụ, Wonder Camera nwere ike ịgbanwe mkpụrụ osisi ọ bụla ka ọ bụrụ Kaadị Wonder.`,

      "ai.r8": `<span class="ai-tag">🌙 Ihe ịtụnanya oge ụra</span>
        Usoro a pụrị ịtụ anya na-emeri nke zuru oke. Nwalee usoro WonderSprout a:
        <ul>
          <li><b>Ọkụ + gbachiri agbachi:</b> ịsa ahụ, mgbe ahụ ìhè dị ala — ihuenyo na-egbuke egbuke gbanyụrụ ma ọ dịkarịa ala nkeji 30 tupu ụra.</li>
          <li><b>Otu akụkọ, otu ebe:</b> gụọ «Ọnwa na-ehi ụra» — ọ na-ejedebe na emume ehihie ọma ị nwere ike ịmegharị.</li>
          <li><b>Otu abụ:</b> «Ị na-ehi ụra?» na WonderSprout Music ka e wuru dị ka abụ ụra dị nwayọ.</li>
          <li><b>Ehihie ọma nye ihe atọ:</b> Ọnwa, ihe egwuregwu, na ibe — obere omume ekele.</li>
        </ul>
        <b>Uru ịmụta:</b> usoro na-ewu nchekwa na echiche usoro («mbụ ịsa ahụ, mgbe ahụ akụkọ, mgbe ahụ abụ»). Maka nchegbu ụra na-adịgide adịgide, dọkịta nwa gị bụ onye nduzi kwesịrị ekwesị.`,

      "ai.r9": `<span class="ai-tag">💛 Nnukwu mmetụta</span>
        Nnukwu mmetụta bụ ihe nkịtị n'afọ ndụ a — ụbụrụ mmetụta na-eto ngwa ngwa karịa okwu iji kọwaa ya.
        <ul>
          <li><b>Kpọọ aha iji chịkwaa:</b> «I wepụrụ iwe n'ihi na ụlọ elu ahụ dara.» Ịkpọ aha mmetụta na-ewu asụsụ iji chịkwaa ha.</li>
          <li><b>Bụrụ arịlịka jụụ:</b> nọdụ ala nso, kuo ume nwayọ, chere. Nchịkwa ọnụ na-abịa tupu nchịkwa onwe.</li>
          <li><b>Mgbe oké ifufe gasịrị:</b> mmakụ, mgbe ahụ gwuo ya nwayọ — «ụlọ elu ahụ dara, i were iwe, anyị wuru ya ọzọ.»</li>
        </ul>
        WonderSprout anaghị achọpụta ọrịa. Ọ bụrụ na nnukwu mmetụta dị ka ugboro ugboro, ike ma ọ bụ nchegbu, <b>biko gwa dọkịta nwa gị ma ọ bụ ọkachamara mmepe nwa okwu.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 Ihe ịtụnanya okike</span>
        N'èzí bụ ụlọ akwụkwọ mbụ — ọ bụkwa n'efu:
        <ul>
          <li><b>Ịchụ agba:</b> chọta ihe akwụkwọ ndụ akwụkwọ ndụ, aja aja, edo edo na ọbara ọbara.</li>
          <li><b>Gụọ ụda:</b> kwụsị ma gee ntị — ụda ole dị iche? Ụmụ nnụnụ, ifufe, ụgbọ ala…</li>
          <li><b>Akpà akụ:</b> chịkọta akụ 3 dị nchebe (akwụkwọ, nkume, osisi) ma kpọọ aha nke ọ bụla.</li>
          <li><b>Nlaghachi n'ụlọ:</b> nkeji 2 nke Ụlọ nyocha ndụ na-ejikọta ihe ị hụrụ na otu osisi si eto.</li>
        </ul>
        <b>Uru ịmụta:</b> ntinye uche n'ezie (ala na-adịghị mma, ìhè na-agbanwe, ụda dị ndụ) na-ewu ụbụrụ n'ụzọ ihuenyo ọ bụla enweghị ike.`,

      "ai.r11": `<span class="ai-tag">🚗 Ihe ịtụnanya njem</span>
        Njem dị ogologo bụ oge ihe ịtụnanya:
        <ul>
          <li><b>Agba m na-ahụ:</b> «Ana m ahụ ihe ọbara ọbara!» — ụmụaka nwere ike igwu egwu nwere enyemaka.</li>
          <li><b>Gụọ n'ụzọ:</b> gwongworo, ọwara, àkwà mmiri — ịgụta na-egbu ike ọgwụgwụ.</li>
          <li><b>Bụọ abụ ọnụ:</b> WonderSprout Music achọghị mgbaàmà; hazie 3 ndị ị hụrụ n'anya.</li>
          <li><b>Ihe ịtụnanya windo:</b> kọwaa ihe na-agafe: «Ehi! Osimiri! Igwe ikuku na-agbagharị!»</li>
        </ul>
        Akụkụ na-enweghị ihuenyo kacha mma ebe a; debe otu akụkọ dị mkpirikpi maka nkeji 10 kachasị ike.`,

      "ai.r12": `<span class="ai-tag">🎂 Ihe ịtụnanya ememme</span>
        Ụbọchị ọmụmụ bụ nkuzi mgbakọ na mwepụ zoro ezo:
        <ul>
          <li><b>Gụọ kandụl</b> ọnụ — otu maka afọ ọ bụla, ịgụta otu-otu na ndụ n'ezie.</li>
          <li><b>Bụọ «Ụbọchị ọmụmụ obi ụtọ»</b> — ọ dị na WonderSprout Music nwere okwu karaoke.</li>
          <li><b>Mmemme ịfụ:</b> ịfụ kandụl bụ njikwa iku ume n'ezie maka okwu.</li>
          <li><b>Chekwaa oge ahụ:</b> tinye ntinye na akwụkwọ ndetu Wonder nwere foto mgbe e mesịrị.</li>
        </ul>
        Debe oriri dị mkpirikpi n'afọ ndụ a — otu awa ọṅụ na-emeri awa atọ nke ike ọgwụgwụ.`,

      "ai.r13": `<span class="ai-tag">🚽 Ndidi ịsa ahụ</span> Ọtụtụ ụmụaka na-egosi njikere n'etiti ọnwa 18–36 — lee anya na mmasị, ọ bụghị afọ ndụ. Jikọta ya na <b>Ebe nhazi</b> (nhazi mmiri/akọrọ!) ma mee ememe mbọ ọ bụla. Etinyela ntaramahụhụ maka ihe mberede; ụbụrụ na-amụta akpa mmamịrị site na nkwughachi dị jụụ.`,

      "ai.r14": `<span class="ai-tag">🤝 Banyere ịkekọrịta</span> Tupu ihe dị ka ọnwa ~30, «ịkekọrịta» agaghị ekwe omume na mmepe — «nke m!» bụ onwe dị mma. Kọwaa oge kama nke ahụ: «Oge gị, mgbe ahụ oge Ava.» Ụda oge nke <b>Ememme Usoro</b> na-ewu otu nkà akwara ozi.`,

      "ai.r15": `<span class="ai-tag">🥦 Ịhọrọ nri</span> Nwa nwere ike ịchọrọ nkpughe 10–15 iji nabata nri ọhụrụ. Debe nri na-enweghị nrụgide: onye toro eto na-ekpebi ihe/mgbe, nwa na-ekpebi ole. Ịgụta mkpụrụ vaịn na <b>Ụlọ nyocha mgbakọ na mwepụ</b> na-eme ka nri bụrụ egwuregwu na-enweghị nrụgide.`,

      "ai.r16": `<span class="ai-tag">🦷 Agha ịcha eze</span> Saa ugboro abụọ n'ụbọchị site na eze mbụ; hapụ nwa gị «saa» teddy mbụ (dị ka egwuregwu nlekọta nke <b>Enyi anụmanụ</b>). Abụ na-enyere aka na oge — nwalee <b>Nwoke ochie a</b> na ụwa egwu.`,

      "ai.r17": `<span class="ai-tag">🗣️ Asụsụ abụọ</span> Ụmụaka nwere asụsụ abụọ nwere ike ịgwakọta okwu — nke ahụ bụ ihe nkịtị, ọ bụghị mgbagwoju anya. Otu nne na nna otu asụsụ ma ọ bụ otu ebe otu asụsụ ha abụọ na-arụ ọrụ. Nhọrọ asụsụ WonderSprout na-eme ka ngwa niile gosipụta mgbanwe nwayọ.`,

      "ai.r18": `<span class="ai-tag">😴 Nlaghachi ụra</span> Nlaghachi ụra na-adịkarị n'ihe dị ka ọnwa ~4, 8–10, 12–18 na 24 — ọ na-abụkarị mmali ụbụrụ. Debe usoro ahụ na-enweghị isi ma na-adịgide adịgide; jiri akụkọ <b>Ehihie ọma, obere kpakpando</b> mee ka obi dị jụụ na obere ọkụ.`,

      "ai.r19": `<span class="ai-tag">🌋 Ịtụfu na ịkụ ihe</span> Nnukwu mmetụta, obere okwu. Kpọọ aha mmetụta, debe oke: «Agaghị m ahapụ gị ịtụfu. I were ezigbo iwe.» Nye ụzọ dị mma — bọọlụ ị ga-atụfu n'èzí (ike Ụlọ egwuregwu Physics!). Ịdịgide adịgide bụ obiọma.`,

      "ai.r20": `<span class="ai-tag">🖍️ Ịse ihe</span> Ịse ihe site na ihe dị ka ọnwa ~12–15 bụ sayensị moto site na ubu ruo nkwojiaka, ọ bụghị «foto» ka ọ dị. Ụdị ịse nke <b>Studio</b> na-egosipụta nke a: usoro karịa ngwaahịa. Nye crayons buru ibu na akwụkwọ buru ibu; kọwaa agba.`,

      "ai.r21": `<span class="ai-tag">🏫 Ịhazi</span> Nnọọ dị mkpirikpi, nnabata na-adịgide adịgide, na ihe nkasi obi na-emeri ịgbapụ n'ụzọ zoro ezo. Ememe foto nke njikọ (dị ka <b>Akwụkwọ ndetu Wonder</b>) na-enyere nwa aka ịkọ nloghachi gị — ịtụ anya bụ nchekwa.`,

      "ai.r22": `<span class="ai-tag">🚗 Na-aga</span> Njem ụgbọ ala bụ ọla edo nkọwa: «Ụgbọ ala ọbara ọbara! Nnukwu gwongworo!» — okwu nke <b>Ọkọlọtọ & Mba</b> na <b>Nhazi</b> na-ebufe ozugbo na ile anya na windo. Bụọ ụda ụdị <b>Ụkwụ ụgbọ ala</b> site na ụwa egwu na nkwụsị.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    Ajụjụ dị mma! Nke a bụ ụzọ WonderSprout si azaghachi ihe fọrọ nke nta ka ọ bụrụ ihe ọ bụla na nwa nta:
    <ul>
      <li><b>Malite na ihe ịtụnanya:</b> «Anọ m na-eche… gịnị ka GI na-eche?»</li>
      <li><b>Mee ya nke anụ ahụ:</b> ị nwere ike imetụ ya aka, megharịa ya, ma ọ bụ mee ya?</li>
      <li><b>Debe ya obere:</b> nkeji 30 ruo nkeji 3 na-emeri nkuzi nkeji 30 n'afọ ndụ a.</li>
    </ul>
        Nwalee otu n'ime ajụjụ ndị dị n'okpuru — ma ọ bụ jụọ m gbasara <b>oge ihuenyo</b>, <b>usoro mmepe</b>, <b>ụbọchị mmiri ozuzo</b>, <b>Wonder Camera</b>, <b>akụkọ</b> ma ọ bụ <b>ihe a ga-eme taa</b>.`
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
