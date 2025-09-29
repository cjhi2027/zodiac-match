// PrimeVue 테마는 기본값 사용
import { createPinia } from "pinia";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import "./main.css";
import router from "./router";

// 다국어 설정
const i18n = createI18n({
  legacy: false,
  locale: "ko",
  fallbackLocale: "en",
  messages: {
    ko: {
      app: {
        title: "띠별 궁합",
        subtitle: "12간지로 알아보는 커플 궁합 매칭 서비스",
      },
      ui: {
        myInfo: "내 정보",
        partnerInfo: "상대방 정보",
        zodiacSelect: "띠 선택",
        birthYearSelect: "생년 선택",
        checkCompatibility: "궁합 확인하기",
        checkAgain: "다시 확인하기",
        selectBirthYear: "생년을 선택하세요",
        yearSuffix: "년",
        zodiacSuffix: "띠",
        inputRequired: "내 정보와 상대방 정보를 모두 입력해주세요",
        resultTitle: "궁합 결과",
        language: "언어",
        korean: "한국어",
        english: "English",
      },
      zodiac: {
        mouse: "쥐",
        ox: "소",
        tiger: "호랑이",
        rabbit: "토끼",
        dragon: "용",
        snake: "뱀",
        horse: "말",
        goat: "양",
        monkey: "원숭이",
        rooster: "닭",
        dog: "개",
        pig: "돼지",
        features: {
          mouse: "계산기보다 빠른 두뇌, 완벽한 준비성의 달인 쥐띠!",
          ox: "끈기와 성실함으로 모든 것을 해내는 소띠!",
          tiger: "용맹하고 대담한 성격의 호랑이띠!",
          rabbit: "온화하고 예술적 감각이 뛰어난 토끼띠!",
          dragon: "강력한 리더십과 카리스마의 용띠!",
          snake: "신비롭고 지혜로운 뱀띠!",
          horse: "자유롭고 활발한 성격의 말띠!",
          goat: "온순하고 예술적인 감성의 양띠!",
          monkey: "영리하고 재치있는 원숭이띠!",
          rooster: "정확하고 체계적인 닭띠!",
          dog: "충성스럽고 정의로운 개띠!",
          pig: "순수하고 관대한 돼지띠!",
        },
      },
      compatibility: {
        excellent: "완벽한 궁합! 두 사람은 천생연분입니다.",
        veryGood: "매우 좋은 궁합! 서로를 잘 이해하고 보완합니다.",
        good: "좋은 궁합! 노력하면 더욱 좋아질 수 있습니다.",
        fair: "보통 궁합! 서로의 차이를 인정하고 이해하세요.",
        poor: "어려운 궁합! 하지만 사랑이 있다면 극복할 수 있습니다.",
      },
      compatibilityDetail: {
        title: "상세 궁합",
        viewDetail: "상세설명 보기",
        backToResult: "궁합 결과로 돌아가기",
        basicDescription: "기본 설명",
        cautionPoints: "주의할 점",
        dateRecommendation: "추천 데이트",


        
        mouse: {
          mouse: {
            witty: "두 뇌회전 챔피언이 만나면, 정보와 센스가 폭발하지만, 누가 먼저 번뜩일지 기싸움도 치열합니다!",
            elaboration: "쥐띠와 쥐띠는 현실적인 고민과 미래 계획에서 늘 논리로 치닫는 커플로, 서로를 경쟁자이자 파트너로 인식합니다. 계획, 분석, 실무 능력에서 상호 존중하지만, 양쪽의 과한 계산과 자존심이 충돌할 때는 힘겨운 신경전도 벌어집니다. 감정적 배려만 조금 더 챙긴다면, 바쁜 일상 속 최고 전략가 콤비로 지루할 수 없는 연애가 됩니다. 현실·실속파의 쿨한 매력이 빛납니다.",
            detailed: {
              basic: "쥐띠 x 쥐띠는 '두 전략가의 스크럼'입니다. 주말 나들이 하나도 검색 키워드 분담, 동선 최적화, 대기시간·비용 시뮬레이션까지 역할을 나눠 움직입니다. 한 명은 정보 크롤링과 비교표 제작, 다른 한 명은 예산·리스크 가드레일과 체크리스트 총괄을 맡으면 실행 속도가 비약적으로 빨라집니다. 대화는 빠르고 논리적이며, 일과 삶의 영역을 가리지 않고 개선 아이디어가 쏟아집니다. 집안일은 SOP(표준 절차)화되어 낭비가 줄고, 재무·건강·자기계발은 지표 관리로 정착됩니다. 서로의 '정확함'과 '일관성'을 최고 가치로 인정할 때, 이 커플은 작은 목표를 빠르게 성취하며 장기 플랜도 흔들림 없이 구현합니다.",
              caution: "문제는 '내 방식이 더 효율적'이라는 자존심 충돌과 '속도전 피로'입니다. 일정 변경, 지출 항목, 우선순위 같은 사소한 주제도 각자의 로직으로 정당화하려다 논쟁이 길어질 수 있습니다. 감정 표현이 축약되어 '차갑다'는 인상이 생기기 쉬운 점도 리스크입니다. 해결법은 회의 전 의사결정 기준(예산→시간→취향 등)을 서열화하고, 안건별 결정권자를 명시해 재논쟁을 차단하는 것입니다. 피드백은 '칭찬 1→교정 1'의 페어로 전달하고, 주 1회 20분 '감정 회고'를 고정해 고마움·서운함을 한 문장씩 기록하세요. 협업은 경쟁보다 빠르다는 경험이 축적되면, 경쟁심은 자연스레 공동 성과 욕구로 전환됩니다.",
              dateRecommendation: "정보와 성취가 결합된 코스가 최적입니다. 대형 전시에서 섹션별 '배운 점 Top3'를 적어 비교하거나, 방탈출·추리 보드게임에서 기록 담당/추론 담당/시간 관리 담당으로 분업해 공략하세요. 브루어리 투어는 테이스팅 노트를 만들어 '재방문 점수'를 매기면 다음 코스 설계가 쉬워집니다. 1박 2일은 핵심 스폿만 고정하고 나머지는 버퍼로 남겨 리스크를 줄이세요. 하루 마무리는 카페에서 '하이라이트 1·불필요 1·개선 1'를 정리하고, 감정 대화 15분을 의식적으로 확보하면 '계산 너머의 온기'가 유지됩니다."
            }
          },
          ox: {
            witty: "쥐의 촘촘한 계획과 소의 든든한 추진력! 설계는 하늘, 실행은 땅, 둘이 뭉치면 무적입니다!",
            elaboration: "머리 좋은 쥐띠가 그려낸 궤도 위에 한결같이 걸어가는 소띠의 인내와 성실이 더해집니다. 실리와 안전을 중시, 금전 걱정이 적어 생활 기반이 탄탄합니다. 단, 쥐의 조급함과 소의 느림이 부딪치면 속 터질 수 있기에, 일정, 의사결정에서 타협이 중요합니다. 각각의 장점을 살리면 인생 프로젝트, 가정, 사업 어디서나 흔들림없는 파워 궁합이 됩니다.",
            detailed: {
              basic: "쥐띠의 탐색·기획력과 소띠의 묵직한 실행력이 맞물리면 생활 전반이 '착실 모드'로 전환됩니다. 집 꾸미기만 해도 쥐띠가 평면도·가구 리스트·견적 비교표를 만들고, 소띠가 직접 측정·설치·정리로 완결도를 높입니다. 재무 영역에서는 쥐띠가 상품 조건을 비교해 포트폴리오를 설계하고, 소띠가 꾸준히 납입·점검해 복리 효과를 극대화합니다. 여행은 쥐가 루트·예약·보험을, 소가 운전·수하물·체력을 맡아 피로를 분산합니다. 위기 상황에서도 쥐는 대안 시나리오를, 소는 끝까지 밀어붙이는 지구력을 제공해 '계획→실행→피드백' 루프가 안정적으로 작동합니다. 장기 목표에 강한, 믿고 가는 조합입니다.",
              caution: "핵심 리스크는 속도 차와 완고함입니다. 쥐띠가 변화 신호를 포착해 경로 수정을 제안하면, 소띠는 '이미 정한 대로 하자'며 버틸 수 있고, 반대로 소가 꾸준히 밀어붙일 때 쥐가 리스크를 근거로 제동을 걸면 답답함이 커집니다. 분쟁 예방을 위해 일정에는 '결정 타임박스'와 '노딜 존(변경 불가 구간)'을 함께 두고, 금전·가사·여가의 최종 결정권을 항목별로 분산하세요. 감정적 평가 대신 '비용·시간·만족도' 지표로 논의하면 설득의 장이 열립니다. 칭찬은 즉시, 보완 제안은 데이터와 함께—이 원칙만 지켜도 고집 싸움은 합리적 합의로 전환됩니다.",
              dateRecommendation: "정보+안정의 묶음 코스를 추천합니다. 홈퍼니싱 매장 체험 후 소박한 식당에서 예산을 잡는 '미니 프로젝트 데이트', 산업 박람회 관람 후 카페에서 메모를 공유해 '다음 액션 1개'를 정하는 방식이 잘 맞습니다. 주말엔 텃밭·반려식물 가꾸기처럼 결과물이 남는 활동이 소띠의 꾸준함과 쥐띠의 실용성을 동시에 만족시킵니다. 트레킹·둘레길은 소의 페이스로 걷고, 쥐는 경로·간식·안전을 챙기면 완벽합니다. 여행은 핵심 3스폿만 고정, 매일 밤 만족도 별점으로 다음 날 일정을 미세 조정하세요."
            }
          },
          tiger: {
            witty: "쥐의 치밀함과 호랑이의 리더십! 열정과 현실의 대결, 서로에게서 배우는 변화의 콤비!",
            elaboration: "쥐의 치밀함과 현실감, 호랑이의 추진력과 모험심이 만나 강렬하게 끌리지만, 스타일이 달라 충돌도 많습니다. 도전할 때는 호랑이가 리드, 실리 결정은 쥐가 앞장섭니다. 독립심과 주도권을 나누면 함께 성장하지만, 서로의 다름을 인정하지 않으면 자주 다툽니다. 유머와 신뢰로 균형을 맞추면 남다른 에너지 커플, 목표 집중형 듀오로 발전합니다.",
            detailed: {
              basic: "전략가(쥐)와 선봉장(호랑이)의 팀플입니다. 세일·한정판 공략에서 쥐가 카드 혜택·재고·픽업 동선을 최적화하면, 호랑이는 오픈런 대기·빠른 결제로 돌파합니다. 주말 코스는 쥐가 전시·루프탑·맛집을 촘촘히 연결하고, 호랑이가 현장 분위기에 맞춰 즉흥 이벤트를 얹어 에너지를 끌어올립니다. 기록·정리·후기를 맡는 쥐와 리드·체험·사진 연출을 맡는 호랑이의 분업은 성취와 재미를 동시에 보장합니다. 큰 목표일수록 호랑이의 추진과 쥐의 리스크 관리가 상승효과를 내 '속도와 안전'이 공존하는 가속형 파트너십이 완성됩니다.",
              caution: "리스크는 '속도 불일치'와 '주도권 충돌'입니다. 호랑이가 질러놓은 약속을 쥐가 사후 정리하느라 지치거나, 쥐가 만든 룰을 호랑이가 답답하다며 무시하면 불만이 누적됩니다. 해결책은 '작전명' 시스템입니다. 사건마다 리더를 명시하고, 다른 한쪽은 참모로 보조합니다. 예산 초과·시간 지연 등의 임계치(예: 10% 초과 시 중지)를 미리 합의하고, 감정 고조 시 10분 타임아웃 후 문자로 핵심만 정리해 공유하세요. 피드백은 '칭찬→제안→합의' 3단 루틴으로 마무리하면 자존심 손상 없이 정리됩니다.",
              dateRecommendation: "액티브+전략형 코스가 어울립니다. 오전엔 방탈출 '하드 모드'로 두뇌를 가동하고, 오후엔 클라이밍·카트·서바이벌 같은 익스트림 액티비티로 호랑이의 에너지를 풀어주세요. 저녁엔 전망 좋은 레스토랑에서 쥐가 하루의 베스트·러닝 포인트를 정리해 마무리합니다. 1박 2일은 '계획 70%+자유 30%' 구조가 최적이고, 밤에는 전략 보드게임으로 지적 친밀감을 높이세요. 분기 1회 '도전 데이'를 정해 번지·패러글라이딩 등 버킷리스트를 함께 갱신하면 관계의 활력이 유지됩니다."
            }
          },
          rabbit: {
            witty: "지혜와 감성의 합! 실속과 배려가 흐르지만, 때로는 결정장애의 긴 미팅도 예상됩니다!",
            elaboration: "쥐띠는 전략·실속을 중시하고, 토끼띠는 감수성·평화를 챙깁니다. 대화를 따뜻하게 많이 하지만, 결정을 미루는 경향도 있습니다. 서로의 소심함을 이해하면 공감과 위로가 넘치는 관계로, 결단이 필요한 순간엔 양쪽 다 한 발 용기를 내면 좋습니다. 평화를 사랑하는 조합, 고민 해결에는 신중함이 최대치로 발휘됩니다.",
            detailed: {
              basic: "쥐의 이성적 가이드와 토끼의 섬세한 조율이 만나 포근한 생활 리듬을 만듭니다. 집에서는 쥐가 가계·일정을 정리하고, 토끼가 인테리어·식단·음악으로 공간의 온도를 올립니다. 문제 상황에서도 쥐가 대안과 절차를 제시하면, 토끼는 주변 사람의 감정을 살피며 부드럽게 실행해 마찰을 줄입니다. 북카페·소극장 공연·작은 마켓처럼 조용하지만 이야깃거리가 많은 장소에서 두 사람의 대화는 가장 빛납니다. 서로의 '속삭임'을 잘 듣고 기록하는 습관이 쌓일수록 유대감은 깊어지고, 안정 속 설렘이 오래 유지됩니다.",
              caution: "둘 다 갈등 회피 성향이 있어 불편함을 미루다 '조용한 단절'이 생길 수 있습니다. 쥐의 직설은 차갑게, 토끼의 신호 숨김은 갑작스런 폭발로 받아들여지기 쉽습니다. 주 1회 '티 타임 20분'을 고정해 불만을 1문장으로만 말하고, 상대는 재진술·공감만 하며 해결책은 다음날 제안하는 규칙을 세우세요. 결정 지연을 막기 위해 '72시간 룰'(정보 수집→옵션 3개 정리→기준표로 결정)을 적용하고, 메시지는 I-메시지로 바꾸면 상처가 줄어듭니다. 감정이 흔들리는 날에는 분석을 멈추고 산책·차 한 잔으로 속도를 낮추세요.",
              dateRecommendation: "소규모 갤러리 투어 후 스케치북에 '오늘의 장면'을 서로 그려보거나, 향수·캔들·꽃 클래스에서 취향을 시각화해 보세요. 한적한 숲길 산책 뒤 피크닉 매트를 펴고 '감정 카드'로 대화를 이어가면 마음의 온도가 올라갑니다. 1박 2일은 한옥 스테이·정원 호텔처럼 잔잔한 공간을 고르고, 밤에는 음악 플레이리스트를 번갈아 틀며 사연을 나누세요. 집에서는 계절별 레시피를 함께 만들고 폴라로이드·다이어리에 기록하면 '우리만의 기억 아카이브'가 쌓여 관계가 더욱 단단해집니다."
            }
          },
          dragon: {
            witty: "꾀돌이와 카리스마 명장! 계획이 번쩍, 실행이 폭발하는 드림팀!",
            elaboration: "쥐띠의 정보력과 용띠의 비전이 결합하면 아이디어가 계획이 되고, 계획이 성과로 전환되는 속도가 남다릅니다. 쥐띠는 근거와 타이밍을 집요하게 다지고, 용띠는 네트워크와 카리스마로 길을 넓혀 돌파구를 만듭니다. 다만 자존심과 주도권이 충돌하면 판이 쉽게 얼어붙습니다. '큰 그림은 용, 세부는 쥐'처럼 역할을 선명히 나누고, 실험→피드백→확대의 루틴을 합의하면 창업·재테크·프로젝트 어디서든 훨씬 멀리, 안정적으로 나아갈 수 있습니다.",
            detailed: {
              basic: "쥐띠와 용띠의 궁합은 '정밀한 전략가'와 '비전을 설계하는 리더'의 상호 보완입니다. 신사업을 검토할 때 쥐띠가 TAM·경쟁사·원가구조를 정리한 리서치 파일을 내놓으면, 용띠는 시장 타이밍과 포지셔닝을 직관적으로 포착해 한 단계 높은 목표를 제시합니다. 발표 자리에서도 쥐띠는 수치·프로세스를, 용띠는 메시지·스토리텔링을 담당해 설득력을 키웁니다. 일상에서도 비슷합니다. 여행은 쥐띠가 교통·예산·동선을 잡고, 용띠는 현지 네트워킹·사진 스폿·하이라이트 연출로 '기억에 남는 장면'을 만들어줍니다. 두 사람은 '계획의 탄탄함'과 '스케일의 과감함'을 동시에 챙기며, 목표가 클수록 성과가 기하급수적으로 커지는 가속형 파트너가 됩니다.",
              caution: "가장 큰 리스크는 '프라이드 충돌'과 '리스크 감수 성향의 차이'입니다. 용띠는 빠른 결단과 외연 확장을 선호해 '지금 가자'를 외치고, 쥐띠는 근거 부족과 실행 리스크를 들어 속도 조절을 요구합니다. 이 간극이 반복되면 용은 쥐를 '소극적'이라, 쥐는 용을 '무모하다'고 규정하게 됩니다. 해결책은 회의 프레임의 표준화입니다. 의사결정 전 용띠는 목적·파급효과·승리 조건을 3문장으로, 쥐띠는 비용·리스크·마일스톤을 3항목으로 제시하고, 논쟁은 '파일럿→데이터 검증→확대'로 귀결시키세요. 칭찬은 즉시 공개 채널에서, 수정 제안은 데이터와 함께 일대일로 전달하면 자존심 손상을 줄일 수 있습니다.",
              dateRecommendation: "두 사람에겐 스케일과 전략이 함께 살아 있는 데이트가 맞습니다. 낮에는 대형 전시·산업 박람회에서 미래 기술을 체험하고, 섹션별로 '가치/실현 가능성/영향도' 점수를 매겨 토론하세요. 저녁에는 루프탑·전망대·파인다이닝을 이어 '장면의 완성'을 즐기고, 돌아오는 길에 3가지 러닝 포인트를 음성 메모로 정리합니다. 주말에는 사회 공헌 활동(플로깅, 환경 캠페인 스태프 등)을 함께하며 '우리의 비전'을 현실 감각과 연결해 보세요. 1박 2일 여행은 '핵심 일정 70%+자유 30%' 구조가 최적이며, 밤에는 보드게임 '디플로머시'나 전략 게임으로 지적 친밀감을 더하면 좋습니다."
            }
          },
          snake: {
            witty: "머릿속 계산이 번쩍이는 브레인 콤비! 지혜와 냉정, 주도권이 톱니처럼 맞물립니다.",
            elaboration: "쥐띠의 기민한 정보력과 뱀띠의 잔잔하지만 깊은 통찰이 맞물리면, 복잡한 의사결정에서 놀랄 만큼 흔들림이 없습니다. 쥐띠가 데이터·사례를 모아 바탕을 닦고, 뱀띠가 맥락·장기 변수·심리를 읽어 최종 선택을 정교하게 다듭습니다. 다만 표현이 절제되어 감정이 묻히기 쉬우므로, 정기적으로 감정 확인 루틴을 넣으면 안정감은 유지하면서도 친밀도는 꾸준히 상승합니다. '신중함+속도'의 균형이 명확해질수록 둘의 시너지는 배가됩니다.",
            detailed: {
              basic: "이 조합은 '사실에 강한 쥐'와 '해석에 강한 뱀'이 역할을 나눠 최적점을 찾는 구조입니다. 이사·이직·투자처럼 변수 많은 선택 앞에서 쥐띠는 데이터 수집(가격 추세, 금리, 통근 시간, 대안 시나리오)을 빠르게 완성하고, 뱀띠는 그 정보를 바탕으로 장기 리스크와 관계·건강·심리적 비용까지 고려해 결론을 정제합니다. 주말에는 북서점에서 서로에게 맞는 도서를 추천하고, 밤에는 클래식 공연·다큐멘터리로 대화를 확장합니다. 집에서는 미니멀한 살림 루틴과 기록 습관이 자연히 자리 잡아, 생활의 마찰을 최소화합니다. 감정보다는 의미를 중시하지만, 바로 그 단단함이 위기 대응력으로 이어지는 '조용한 엘리트형' 궁합입니다.",
              caution: "두 사람 모두 표현이 절제되어 '무심함'으로 오해받기 쉽고, 속도 차가 갈등의 씨앗이 됩니다. 뱀띠의 심사숙고가 길어지면 쥐띠는 '기회를 놓친다'고 느끼고, 쥐띠의 속도전은 뱀띠에게 '깊이가 부족하다'로 비칩니다. 해결책은 ①결정 데드라인과 최소 정보 기준을 사전에 합의, ②논의는 '사실→해석→감정' 3단으로 구조화, ③주 1회 '노 분석 데이'로 감각적 활동만 하는 것입니다. 피드백은 '칭찬 1→수정 제안 1'의 페어로 전달하고, 피곤한 날에는 텍스트보다 음성 메모로 감정을 먼저 공유하면 불필요한 오해를 줄일 수 있습니다.",
              dateRecommendation: "조용하지만 밀도 높은 활동이 잘 맞습니다. 북서점 랠리 후 서로에게 '3개월 내 읽을 책 1권'을 선물하고, 와인 바에서는 인덱스 카드에 오늘의 인상 문장을 적어 교환하세요. 미술 전시는 오디오가이드 없이 20분 후 각자 1점만 골라 토론하면 대화가 깊어집니다. 주말엔 역사 도시 골목 투어, 저녁에는 집에서 체스·크로스워드·추리소설 낭독회를 여는 '사색의 시간'을 만들어 보세요. 분기마다 '생활 줄이기 프로젝트(버리기·정리·자동화)'를 함께 진행하면 생활 효율과 만족도가 동반 상승합니다."
            }
          },
          horse: {
            witty: "계산파 쥐와 즉흥파 말! 속도와 질주, 긴장과 웃음이 반복되는 변화무쌍 콤비!",
            elaboration: "쥐띠의 안전 레일과 말띠의 질주 본능이 결합하면 '안전하게 멀리 가는' 그림이 완성됩니다. 쥐띠는 예산·시간·리스크를 다지고, 말띠는 현장에서 즉흥력과 체력으로 장면을 살립니다. 다만 자유와 안정의 우선순위가 다르기 때문에, 일정에 '자유 블록'을 고정하고 지출은 '한도만 합의'하는 합리적 느슨함이 필요합니다. 그 균형만 찾으면 신선함과 실용성이 공존하는 관계로 오래 달릴 수 있습니다.",
            detailed: {
              basic: "둘은 '가드레일을 까는 사람(쥐)'과 '그 위를 달리는 사람(말)'입니다. 캠핑을 가면 쥐띠가 체크리스트·기상 확인·비상약을 챙기고, 말띠는 텐트 설치·불멍 세팅·액티비티 진행으로 현장을 생동감 있게 만듭니다. 도시 데이트에서도 쥐띠가 루트·예약·예산을, 말띠가 플리마켓·버스킹·페스티벌 같은 즉흥 콘텐트를 얹어 '지루할 틈 없는 하루'를 만들죠. 업무·취미에서도 쥐는 운영과 품질, 말은 아이디어와 추진을 맡으면 속도와 안정이 동시에 확보됩니다. 서로의 차이를 '브레이크와 엑셀'로 받아들이면, 장거리 주행에 강한 든든한 팀이 됩니다.",
              caution: "말띠에게 과한 관리감은 족쇄로, 쥐띠에게 무계획은 스트레스로 느껴집니다. 매달 '버킷리스트 vs 안전리스트'를 서로 교환해 욕구를 가시화하고, 일정에는 20~30%의 자유 시간을 고정하세요. 지출은 카테고리 한도만 정하고 세부는 각자 재량으로 두면 분쟁이 줄어듭니다. 갈등이 오르면 즉시 장소를 바꿔 걷기 대화로 전환하면 감정이 가라앉습니다. 결정은 '빠른 시범→리뷰→확대' 순서를 합의하고, SNS·연락 빈도 같은 민감한 영역은 쓰기 계약처럼 문서화하면 오해의 여지를 최소화할 수 있습니다.",
              dateRecommendation: "낮에는 라이딩·SUP·클라이밍 같은 체험형 활동으로 말띠의 에너지를 풀어주고, 쥐띠는 사전 예약·안전 점검으로 안정망을 깔아주세요. 저녁엔 루프탑에서 일몰을 보며 '베스트 순간 3가지'를 공유해 감정 연결을 강화합니다. 1박 2일은 '계획 60%+즉흥 40%' 구성이 적절하고, 돌아오는 길엔 사진 정리·비용 정산을 함께해 기억을 한 번 더 즐기세요. 분기 1회 '노폰 데이트'를 지정해 디지털 피로를 덜면 만족도가 장기적으로 유지됩니다."
            }
          },
          goat: {
            witty: "꼼꼼+순함! 실속과 감성이 교차하는 따뜻한 밸런스",
            elaboration: "쥐띠의 실용 설계 위에 양띠의 감성 디테일이 더해지면 '살기 좋은 일상'이 완성됩니다. 쥐띠는 수납·청소·예산으로 기반을 만들고, 양띠는 조명·패브릭·향·음악으로 공간의 온도를 올립니다. 다만 결정 속도와 표현 방식이 달라 답답함이 생길 수 있으니, 의사결정은 '감정 확인→옵션 3개→마감 시간' 순서로, 대화는 I-메시지로 표준화하세요. 그렇게만 하면 현실과 감성이 균형 잡힌, 오래가는 따뜻한 커플로 자리 잡습니다.",
            detailed: {
              basic: "이 조합은 '실리의 뼈대(쥐)'에 '감성의 질감(양)'을 입히는 팀플입니다. 집에서는 쥐띠가 수납 동선·가전 사용 루틴·가계부 자동화를 구축하고, 양띠가 조명 색온도·소프트 텍스타일·향 선택으로 집을 쉼터로 바꿉니다. 갈등 상황에서도 쥐가 해결책과 절차를 제시하면, 양은 주변 사람의 감정과 분위기를 살피며 실행이 부드럽게 흐르도록 돕습니다. 주말에는 플리마켓·공방 체험·소규모 클래식 공연 같은 잔잔한 활동에서 서로의 장점이 특히 잘 드러납니다. 쥐가 현실을, 양이 마음을 챙기며 '지속 가능한 행복'을 만들어가는 조합입니다.",
              caution: "양의 공감은 큰 자산이지만 결정이 늦어지면 쥐가 답답해지고, 쥐의 직설이 이어지면 양은 마음을 닫습니다. 의사결정은 ①감정 확인, ②현실 옵션 3개 정리, ③마감 시간 설정의 3단계를 습관화하세요. 표현은 비난이 아닌 I-메시지('나는 ~라고 느꼈어')로 바꾸고, 양은 감정만 말하고 선택을 미루지 않기, 쥐는 해결책 전에 공감 한 문장을 넣기 규칙을 세우면 충돌이 크게 줄어듭니다. 민감한 주제는 20분 타이머로 제한하고, 결론은 메모로 남겨 재논쟁을 방지하세요.",
              dateRecommendation: "소규모 전시 후 폴라로이드에 '오늘의 감정'을 한 줄로 적어 교환하거나, 꽃·도자기·베이킹 클래스에서 작은 결과물을 함께 만들어 보세요. 한적한 해변 산책+피크닉은 양의 감수성과 쥐의 실용성이 자연스럽게 만나는 코스입니다. 집에서는 파스타를 함께 만들고 캔들 불빛 아래 플레이리스트를 공유하면 감정의 온도가 올라갑니다. 분기별로 '홈 리프레시 데이'를 잡아 침구·러그·그린 플랜트를 갱신하면 생활 만족도와 애정 지표가 함께 상승합니다."
            }
          },
          monkey: {
            witty: "꾀돌이와 영리함이 만나면, 아이디어와 장난이 쉴 새 없이 터지는 유쾌 브레인 커플!",
            elaboration: "쥐띠와 원숭이띠는 아이디어·재치·속도가 비슷해 '두뇌가 즐거운 연애'를 합니다. 신상 맛집 공략도 프로젝트가 되고, 사이드 프로젝트는 밈과 유머로 지치지 않죠. 다만 둘 다 주도권에 민감해 논쟁이 길어질 수 있고, 재미만 좇다 실행이 헐거워질 위험도 있습니다. 월간 목표 1개를 정해 마감·역할·보상을 합의하고, 회의는 짧게—대신 결과물은 남기세요. 유머로 분위기를 풀되 핵심 1문장은 반드시 합의하면, 성장과 즐거움이 동시에 굴러갑니다.",
            detailed: {
              basic: "둘은 리서치 속도와 센스가 비슷해 작은 일도 금세 '작은 프로젝트'가 됩니다. 신상 카페를 찾으면 쥐띠가 예약·동선·예산을, 원숭이는 SNS 리서치·사진 콘셉트·리뷰 포인트를 맡아 함께 '가이드 카드'를 만들죠. 업무·취미에서도 합이 좋아 뉴스레터 발행, 스몰 비즈니스 테스트 같은 사이드 프로젝트를 쉽게 시작합니다. 실패해도 서로의 농담과 위로로 회복 탄력성이 높습니다. 대화 주제는 기술·콘텐츠·트렌드로 끝없이 확장되고, 함께 있을 때 시간 체감이 짧아지는 '몰입형' 궁합입니다.",
              caution: "문제는 '재미의 관성'과 '주도권 게임'입니다. 할 말이 많은 두 사람은 토론이 길어져 결론이 흐려지거나, 정작 실행력이 분산되기 쉽습니다. 월간 목표 하나를 정하고 마감·역할·보상을 명확히 합의하세요. 회의는 25분 포모도로 2세트로 제한하고, 마지막 5분은 '오늘의 산출물'에만 집중합니다. 논쟁이 길어지면 '농담 1개→핵심 1문장→결론 1개'로 리셋하면 공기 흐름이 즉시 바뀝니다. 과몰입 방지를 위해 '노폰 데이트'도 정례화하세요.",
              dateRecommendation: "퀴즈 나이트, 보드게임 카페의 협동전·대전전을 번갈아 즐기고, 방탈출은 하드 모드에 도전해 협력 루틴을 다듬어 보세요. 도시 야간 산책 중 즉흥 스트리트 공연 관람, 짧은 릴스·틱톡 챌린지 촬영 같은 가벼운 놀이도 잘 맞습니다. 당일치기 기차 여행은 쥐가 표·루트를, 원숭이가 현장 콘텐츠·사진 스폿을 맡으면 '짧지만 꽉 찬' 만족이 보장됩니다. 하루가 끝나면 각자 3줄 요약을 공유해 다음 데이트의 퀄리티를 올리세요."
            }
          },
          rooster: {
            witty: "꼼꼼 끝판왕끼리 만남! 빈틈없이 완벽을 추구하니, 잔소리와 박수 모두 넘칩니다.",
            elaboration: "쥐띠의 전체 설계와 닭띠의 디테일 검수가 맞물리면 생활 품질이 급상승합니다. 이사 준비만 해도 쥐띠가 예산·업체 비교표를 만들고, 닭띠는 체크리스트로 포장·라벨링·동선 최적화를 완성합니다. 다만 완벽주의가 피로를 부를 수 있으니 '오늘은 80점이면 OK' 합의와 '칭찬 20초 먼저' 규칙을 도입하세요. 역할을 가끔 바꿔보면 상대의 관점이 보이고 고집이 누그러집니다.",
            detailed: {
              basic: "이 궁합은 '기획자(쥐)'와 '감사관(닭)'의 만남입니다. 집 수리만 해도 쥐띠가 업체 견적·공사 기간·자재 비교표를 만들고, 닭띠는 체크리스트로 현장 점검·하자 기록·검수 기준을 세분화합니다. 재무 관리에서는 월말 결산·영수증 스캔·카테고리 규칙이 정착되어 누수 지출이 줄어듭니다. 프로젝트성 활동에서 두 사람의 강점은 더욱 또렷합니다. 쥐는 전체 일정과 이해관계자를, 닭은 준수 사항·리스크 포인트를 챙겨 결과물의 신뢰도를 끌어올립니다. 함께할수록 생활이 단정해지고, 목표 달성률이 꾸준히 상승하는 '품질 보증'형 커플입니다.",
              caution: "완벽주의의 그림자가 피로로 이어질 수 있습니다. 작은 실수에도 지적이 오가면 그 순간의 의도와 무관하게 잔소리로 받아들여집니다. '칭찬 먼저 20초' 규칙을 도입하고, 일과 가정 모두에서 '오늘은 80점이면 OK' 합의를 세우세요. 역할은 '기획(쥐)·감사(닭)'로 구분하되, 월 1회는 서로의 영역을 일부 교대해 관점을 체험해 보세요. 감정이 올라가면 체크리스트를 잠시 접고 산책으로 전환, 돌아와 핵심 3가지만 합의하는 루틴을 만들면 고집이 빠르게 누그러집니다.",
              dateRecommendation: "쿠킹 클래스에서 레시피를 표준작업서처럼 정리하고, 역할(셰프/어시스턴트)을 바꿔가며 완성도를 겨뤄보세요. 과학관·테크 전시 후 '가장 실용적인 아이템' 투표, 도서관에서 '서로를 위한 실용 서적 1권' 고르기 같은 활동도 어울립니다. 1박 2일 여행은 '체크리스트 챌린지'를 도입해 누가 더 간단·핵심만 담아 짤 수 있는지 겨루되, 밤에는 체크리스트를 접고 즉흥 산책과 대화로 완급을 조절하세요."
            }
          },
          dog: {
            witty: "실리파X의리파, 신뢰와 책임이 단단한 베스트 듀오!",
            elaboration: "쥐띠의 합리와 개띠의 의리가 만나면 '믿고 가는 동반자'가 됩니다. 쥐띠는 문제를 구조화·해결하는 데 강하고, 개띠는 끝까지 지키는 힘과 따뜻함으로 관계의 온도를 유지합니다. 다만 현실·원칙 중심으로 흐르면 감정이 메마를 수 있으니, '오늘의 고마움 한 줄' 메시지와 월 1회 서프라이즈 데이를 정례화하세요. 재정·가사 규칙은 문서화해 오해를 차단하면, 신뢰는 더 견고해집니다.",
            detailed: {
              basic: "이 조합은 '합리의 설계자(쥐)'와 '의리의 수호자(개)'가 팀을 이루는 모습입니다. 집안 일은 쥐띠가 계획표를 만들고, 개띠가 꾸준히 지켜 신뢰를 쌓습니다. 위기에도 개띠는 먼저 옆을 지키고, 쥐띠는 해결책을 내어 실질적 돌파구를 만듭니다. 취미·여가도 안정적입니다. 쥐가 정보·예산을 챙기고, 개는 준비물·안전·시간 약속을 철저히 지켜 일정이 부드럽게 흘러갑니다. 친구 같은 편안함과 파트너십이 공존해 장기 프로젝트(저축·집 마련·여행 버킷리스트)에서 특히 강점을 보이는 '성실형' 커플입니다.",
              caution: "현실·원칙 중심으로만 흐르면 감정의 윤활유가 마릅니다. '오늘의 고마움 한 줄'을 잠들기 전 메시지로 주고받고, 월 1회 '서프라이즈 데이'를 지정하여 작은 편지·간식·산책 루트를 준비해 보세요. 갈등 시에는 '사실→느낌→요청' 포맷으로 이야기하면 상처 없이 합의점에 도달합니다. 재정·가사·여가 규칙은 문서화해 해석의 여지를 줄이고, 명절·가족 이벤트처럼 민감한 사안은 사전 합의 체크리스트로 감정 프레임을 보호하세요.",
              dateRecommendation: "둘레길·캠핑·반려견 카페처럼 소박하지만 성취와 휴식이 있는 코스가 잘 맞습니다. 영화 후엔 감상 포인트 3개를 번갈아 말하며 대화를 확장하고, 주 1회는 함께 요리해 '우리만의 시그니처 메뉴'를 만들어 보세요. 1박 2일은 숲속 글램핑에서 별 보기와 아침 러닝으로 루틴을 공유하면 결속이 강해집니다. 계절마다 작은 봉사활동을 함께 하면 '우리가 함께 지키는 가치'가 생겨 관계의 의미가 더 단단해집니다."
            }
          },
          pig: {
            witty: "꼼꼼한 쥐와 넉넉한 돼지! 실리와 따뜻함이 결합해 늘 편안한 든든 커플!",
            elaboration: "쥐띠의 치밀함과 돼지띠의 포용이 만나면 '편안하지만 실속 있는' 일상이 완성됩니다. 쥐띠가 장보기·예산·동선을 최적화하고, 돼지띠는 요리·정리·환대로 집을 따뜻하게 채웁니다. 속도 차로 주도권이 한쪽으로 기울 수 있으니, 주말 일정·지출·집안일의 책임자를 번갈아 맡는 '주도권 로테이션'과 여유 블록을 일정에 고정하세요. 칭찬은 즉시, 요청은 부드럽게—이 두 가지만 지켜도 마찰은 줄고 만족은 커집니다.",
            detailed: {
              basic: "둘은 '실속의 설계자(쥐)'와 '포용의 연출가(돼지)'입니다. 장보기는 쥐띠가 전단·앱·동선을 최적화해 비용과 시간을 줄이고, 돼지띠는 재료를 따뜻한 식탁으로 바꾸는 재주가 있습니다. 손님이 오면 쥐는 좌석 배치·타임라인을, 돼지는 메뉴·음악·분위기를 맡아 집을 편안한 라운지로 만듭니다. 스트레스 많은 날엔 돼지가 먼저 품어주고, 다음 날 쥐가 해결책을 제시해 균형을 찾습니다. 일상의 작은 성취(한 주의 미션, 정리정돈, 건강 루틴)가 차곡차곡 쌓이며 '편안한데 발전하는' 관계가 완성됩니다.",
              caution: "속도와 관성의 차이가 마찰을 만듭니다. 돼지띠가 과하게 양보하면 주도권이 한쪽으로 쏠리고, 쥐띠가 조급하면 피로가 커집니다. 해결책은 ①'주도권 로테이션'으로 주말 일정·지출·집안일 책임자를 번갈아 맡기, ②일정에 휴식 블록을 고정해 여유를 보호하기, ③칭찬은 즉시·요청은 부드럽게 전달하기입니다. 재정은 한도와 목적을 합의하고, 감정은 '지금 내 속도는 ~'처럼 상태를 수시로 선언해 오해를 줄이세요. 주간 회고에서 만족도·개선 아이디어를 1개씩만 내면 변화가 부담 없이 이어집니다.",
              dateRecommendation: "맛집 투어 후 '만족도·가성비·재방문' 별점 놀이를 하거나, 집에서 홈파티를 열어 시그니처 메뉴를 함께 만들어 보세요. 온천·스파·리조트의 휴식형 여행은 돼지띠의 여유와 쥐띠의 실리를 동시에 만족시킵니다. 로컬 시장·농원 체험 같은 소박한 활동은 하루의 밀도를 높이고, 저녁엔 와인 한 잔과 플레이리스트로 하루를 정리하세요. 분기별로 '우리 집 미식 주간'을 정해 각자 1메뉴를 책임지면 성취와 재미가 함께 쌓입니다."
            }
          }
        }
      },
    },
    en: {
      app: {
        title: "Zodiac Compatibility",
        subtitle: "Couple matching service based on 12 zodiac animals",
      },
      ui: {
        myInfo: "My Info",
        partnerInfo: "Partner Info",
        zodiacSelect: "Zodiac Select",
        birthYearSelect: "Birth Year",
        checkCompatibility: "Check Compatibility",
        checkAgain: "Check Again",
        selectBirthYear: "Select birth year",
        yearSuffix: "",
        zodiacSuffix: "",
        inputRequired: "Please enter both your info and partner's info",
        resultTitle: "Compatibility Result",
        language: "Language",
        korean: "한국어",
        english: "English",
      },
      zodiac: {
        mouse: "Rat",
        ox: "Ox",
        tiger: "Tiger",
        rabbit: "Rabbit",
        dragon: "Dragon",
        snake: "Snake",
        horse: "Horse",
        goat: "Goat",
        monkey: "Monkey",
        rooster: "Rooster",
        dog: "Dog",
        pig: "Pig",
        features: {
          mouse: "Faster than a calculator, master of perfect preparation!",
          ox: "Achieves everything with persistence and sincerity!",
          tiger: "Brave and bold personality!",
          rabbit: "Gentle and artistically gifted!",
          dragon: "Powerful leadership and charisma!",
          snake: "Mysterious and wise!",
          horse: "Free-spirited and active personality!",
          goat: "Gentle and artistic sensibility!",
          monkey: "Clever and witty!",
          rooster: "Accurate and systematic!",
          dog: "Loyal and just!",
          pig: "Pure and generous!",
        },
      },
      compatibility: {
        excellent: "Perfect match! You are made for each other.",
        veryGood:
          "Very good match! You understand and complement each other well.",
        good: "Good match! With effort, it can become even better.",
        fair: "Average match! Accept and understand each other's differences.",
        poor: "Challenging match! But with love, you can overcome anything.",
      },
      compatibilityDetail: {
        title: "Detailed Compatibility",
        viewDetail: "View Details",
        backToResult: "Back to Compatibility Result",
        basicDescription: "Basic Description",
        cautionPoints: "Points to Note",
        dateRecommendation: "Recommended Dates",
        mouse: {
          mouse: {
            witty: "When two brain-rotation champions meet, information and sense explode, but the battle of wits over who will sparkle first is fierce!",
            elaboration: "Rat and Rat are a couple who always approach realistic concerns and future plans with logic, recognizing each other as competitors and partners. They respect each other's planning, analytical, and practical abilities, but a tough battle of nerves occurs when excessive calculation and pride clash on both sides. If they take care of emotional consideration a little more, they become a top strategist duo that makes busy daily life an unboring romance. The cool charm of realistic and practical people shines.",
            detailed: {
              basic: "The meeting of Rat and Rat is a 'meeting of two strategists', where meticulous calculation and quick judgment are doubled. Both are exceptionally intelligent and have excellent practical sense, prioritizing efficiency and substance in daily life. In love, they respect each other's quickness and wit, with conversations that never stop and life plans carefully laid out. Since they value information and networking socially, they provide developmental stimulation to each other when together. This couple has the power to quickly build a stable foundation and easily become 'realistic best partners' in daily life and future planning.",
              caution: "The biggest risk factors in this combination are 'excessive competitiveness' and 'impatience'. Both Rats prefer quick decisions and have strong tendencies to take control, which can lead to frequent power struggles. Also, since both are calculative and agile, they may prioritize substance over emotional exchange, making the relationship feel cold. Especially when their different approaches clash even in small matters, it can easily escalate into arguments. At such times, they should recognize each other as 'colleague strategists' rather than 'rivals' and choose cooperation over competition. Developing the habit of expressing emotions honestly can make the relationship warmer.",
              dateRecommendation: "Intellectual and active dates suit Rat and Rat couples well. For example, information exchange activities like exhibitions, fairs, and library visits satisfy both people's curiosity and wit. Also, activities that require both brain battles and cooperation, such as board games, quiz competitions, and escape rooms, are interesting. For travel, a style of moving efficiently with a tight schedule suits them, and adding spontaneous small pleasures in between makes the relationship more dynamic. However, after dates, sharing emotions in warm cafes or quiet restaurants and taking care of 'emotion beyond calculation' makes the relationship smoother."
            }
          },
          ox: {
            witty: "The Rat's meticulous plans and the Ox's solid drive! Design is heaven, execution is earth, if they unite, they are invincible!",
            elaboration: "The patience and sincerity of the Ox, who consistently walks on the path drawn by the intelligent Rat, are added. They prioritize practicality and safety, and financial worries are few, making their life foundation solid. However, if Rat's impatience and Ox's slowness clash, it can be frustrating, so compromise is important in scheduling and decision-making. If they leverage each other's strengths, they become an unshakable power match in life projects, family, and business.",
            detailed: {
              basic: "The meeting of Rat and Ox is considered a representative 'realistic stable type' compatibility in Eastern astrology. The Rat's quick brain that analyzes situations quickly and meticulously, and the Ox's slow but deep execution power that steps into reality step by step with uprightness and responsibility, complement each other well.",
              caution: "The biggest issue in this combination is the 'difference in speed' and 'stubbornness'. Rats can't stand frustrating things and want to quickly draw conclusions in unexpected situations. On the other hand, Oxes think slowly and leisurely, and once they make a decision, they don't change it easily.",
              dateRecommendation: "The recommended date for this couple is a program that harmoniously contains 'information + stability'. For example, at exhibitions or fairs where new and useful information is shared, or museum visits where the Rat's curiosity is satisfied, and at a warm atmosphere cafe or comfortable Korean restaurant next to it, the Ox's leisurely nature shines through conversation."
            }
          },
          tiger: {
            witty: "The Rat's meticulousness and the Tiger's leadership! A combo of passion vs. reality, learning change from each other!",
            elaboration: "The Rat's meticulousness and realism, combined with the Tiger's drive and adventurous spirit, create a strong attraction, but their differing styles often lead to clashes. When facing challenges, the Tiger leads, while the Rat takes charge of practical decisions. They grow together by sharing independence and initiative, but if they don't acknowledge each other's differences, they often argue. If they balance with humor and trust, they develop into a unique energetic couple, a goal-focused duo.",
            detailed: {
              basic: "The meeting of Rat and Tiger is a combination of 'strategy and boldness'. When the witty and calculative Rat quickly reads the situation, the Tiger boldly pushes forward with action and drive. Like a strategist and general, they balance ideas and execution, creating powerful synergy. The Rat reduces risks with detailed planning, while the Tiger opens new paths with bold decisions. In love, the Rat provides care and realistic advice without reservation, while the Tiger expresses passionate love, creating a vibrant relationship. This couple shows terrifying development speed when they acknowledge each other's strengths.",
              caution: "The biggest variables in this combination are 'balance of speed' and 'power struggles'. The Rat values meticulous calculation and stability, being cautious about hasty decisions, while the Tiger prefers bold adventure and breakthrough. This difference can make the Rat see the Tiger as 'reckless' and the Tiger see the Rat as 'timid'. Also, both signs have strong pride and desire for leadership, so repeated opinion conflicts can make the relationship uncomfortable. Rather than competing for initiative in love and daily life, they should cooperate by dividing roles - one handling design and management, the other execution and challenge. Rather than emotional responses, persuasion through objective data and realistic examples is effective.",
              dateRecommendation: "Dates that combine strategy and adventure suit Rat and Tiger couples well. For example, at escape rooms or board game cafes, the Rat's brain and Tiger's drive combine to create a sense of achievement. Also, challenging activities like bungee jumping, survival games, and hiking satisfy the Tiger's passion while the Rat's meticulousness shines in preparation and safety management. For travel, the Rat manages schedules and budgets while the Tiger leads spontaneous activities on-site. After activities, having time to discuss and organize each other's differences at a quiet restaurant strengthens the relationship."
            }
          },
          rabbit: {
            witty: "A combination of wisdom and emotion! Practicality and consideration flow, but sometimes long meetings due to decision paralysis are expected!",
            elaboration: "The Rat prioritizes strategy and practicality, while the Rabbit values sensitivity and peace. They have many warm conversations but tend to postpone decisions. If they understand each other's timidity, their relationship overflows with empathy and comfort, and when a decision is needed, it's good for both to take a step forward with courage. A peace-loving combination, caution is maximized in problem-solving.",
            detailed: {
              basic: "Rat and Rabbit form a warm relationship that understands and cares for each other. The realistic Rat and emotional Rabbit meet to create balance.",
              caution: "Both signs have timid tendencies and tend to postpone decisions. It's important to encourage each other.",
              dateRecommendation: "We recommend dates in a quiet and comfortable atmosphere. Walking in cafes or parks, or watching movies at home are good."
            }
          },
          dragon: {
            witty: "Schemer and charismatic master! Plans sparkle, execution explodes, a dream team!",
            elaboration: "The Rat's ideas and the Dragon's drive are powerful from the start. If they support and acknowledge each other, great goals are achieved perfectly. If they only watch out for pride or power struggles, they show the strongest teamwork in both work and romance. They are a complete couple in problem-solving, decision-making, and execution.",
            detailed: {
              basic: "Rat and Dragon show perfect teamwork that complements each other's strengths. The Rat's planning ability and the Dragon's execution power meet to achieve great results.",
              caution: "Both signs have strong pride, which can lead to power struggles. It's important to acknowledge and respect each other.",
              dateRecommendation: "We recommend dates where you can feel challenge and achievement. New sports or hobbies, or projects where you can achieve goals together are good."
            }
          },
          snake: {
            witty: "A brainy combo where calculations flash in their minds! Wisdom, coolness, and initiative interlock like gears.",
            elaboration: "Caution and analytical ability are excellent, making deep contemplation and practical problem-solving their strengths. Emotional expression may be limited, leading to emotional distance, but trust can be built through honest conversation. A serious couple that lasts long with meticulousness and internal cooperation. Emotional communication practice is needed.",
            detailed: {
              basic: "The Rat's keen information sense and the Snake's deep insight combine to form a 'thoughtful brain duo'. In variable-rich decision-making like investments, career paths, or moving, the Rat gathers data and options, and the Snake weaves together context, long-term prospects, and psychological variables to converge on a near-correct answer. On weekends, they recommend each other's interests at bookstores, and at night, they expand conversations with documentaries and classic films. They prioritize meaning over emotion, but that very aspect stabilizes their relationship.",
              caution: "Both are calm and analytical, so their expressions can be lacking, easily leading to misunderstandings of 'indifference'. Also, if the Snake's prudence is prolonged, the Rat feels 'opportunities are missed', and the Rat's speed-driven approach makes the Snake feel 'lacking in depth'. For joint decision-making, use a '3-step checklist (facts → interpretation → emotions)' and be sure to express emotions in the final step. Agree on a decision deadline and minimum information criteria, and enjoy only sensory dates on a weekly 'No Analysis Day' to restore balance.",
              dateRecommendation: "After a bookstore rally, exchange personalized book gifts, and at a wine bar, share impressive sentences using index cards. For exhibition viewing, discuss only one impressive piece after 20 minutes each without an audio guide for a dense conversation. On weekends, take a historical city alley tour, and in the evening, hold a puzzle/chess/mystery novel reading session at home to consciously create 'time for contemplation'."
            }
          },
          horse: {
            witty: "Calculative Rat and impulsive Horse! A versatile combo where speed and sprint, tension and laughter repeat!",
            elaboration: "The planned Rat and the free Horse are fresh at first, but in daily life, financial, time, and lifestyle conflicts arise. Flexible conversation, appropriate compromise, and respect for each other's styles are essential. They can be an intense couple who learn and grow from each other's different ways of life, but if stubbornness is strong, it can be difficult.",
            detailed: {
              basic: "The Rat lays the safety rails, and the Horse gallops on them. When camping, the Rat handles checklists, groceries, and weather checks, while the Horse takes charge of tent setup, bonfire arrangements, and activities, bringing the site to life. Even for city dates, if the Rat manages the budget and route, and the Horse adds spontaneous courses like flea markets, busking, and festivals, there's never a dull moment. The more they accept each other's differences as 'speed regulators', the longer the freshness lasts.",
              caution: "Excessive management is stressful for the freedom-loving Horse, and lack of planning is stressful for the stability-important Rat. Exchange 'bucket lists vs. safety lists' once a month to visualize each other's desires, and always secure free time blocks in the schedule. For expenses, set a limit and allow spontaneity within it, and the Rat should prepare only 'minimum safety measures' and then leave the lead to the Horse. When conflicts arise, a rule of taking a 5-minute walk and then returning to say only 'one core sentence' is effective.",
              dateRecommendation: "The Rat sets '3 key spots' and the Horse fills in between them for an ideal 'framework date'. For example, if the Rat picks restaurants, cafes, and observatories, the Horse discovers walking paths, photo zones, and events to complete the course. For festivals and concerts, if the Rat handles tickets and transportation, and the Horse takes charge of on-site atmosphere, photos, and reviews, both are satisfied. For a 1-night, 2-day trip, the Rat confirms accommodation and transportation, and the Horse spontaneously picks local activities in a '50:50' approach that's safest."
            }
          },
          goat: {
            witty: "Meticulous + Gentle! A warm balance where practicality and emotion intersect.",
            elaboration: "The Rat focuses on reality, the Goat on consideration and emotion. The Goat embraces the Rat's worries, and the Rat realistically complements the Goat's relaxedness. Respecting strengths and compensating for weaknesses makes them a peaceful and warm couple. They may be shaken if sensitive, but they last long with a balance of emotional comfort and practical advice.",
            detailed: {
              basic: "The Rat's realistic guidance and the Goat's delicate care add a cozy texture to life. At home, the Rat organizes household accounts and schedules, and the Goat takes charge of interior design, meal planning, and atmosphere, creating a 'desirable living space'. Even in problematic situations, if the Rat suggests alternatives, the Goat gently executes them while considering the feelings of those around them. Their conversations shine brightest in places that are not noisy but have plenty to talk about, such as book cafes, small performances, and small markets. This is a combination where intimacy deepens the better they listen to each other's 'whispers'.",
              caution: "Both signs have sensitive tendencies and can be shaken by small things. It's important to care for and comfort each other.",
              dateRecommendation: "We recommend dates in a warm and comfortable atmosphere. Walking in nature, appreciating art, or cooking at home are good."
            }
          },
          monkey: {
            witty: "When a trickster and a clever one meet, ideas and mischief burst forth endlessly, a cheerful brainy couple!",
            elaboration: "With similar minds and senses, both conversation and collaboration flow creatively and energetically. Problem-solving and competition also resolve positively, leaving no room for boredom. By taking care of emotional exchange, they can become the best cheerful lovers. This is the best compatibility showing growth and development.",
            detailed: {
              basic: "Rat and Monkey form a cheerful relationship that acknowledges each other's intelligence and wit. Creative ideas and lively conversation are characteristic.",
              caution: "Both signs are clever and witty, which can create competitive consciousness. It's important to acknowledge and cooperate with each other.",
              dateRecommendation: "We recommend creative and fun dates. Games, puzzles, or new hobby activities are good."
            }
          },
          rooster: {
            witty: "Meticulous ultimate kings meet! Pursuing perfection without a flaw, nagging and applause both overflow.",
            elaboration: "Planning and management, supervision and evaluation perfectly interlock. They achieve the best results, but as they argue over even minute standards, emotional support must also be taken care of. As a perfectionist couple, they should occasionally take the time to grasp the essence and see the big picture to last long.",
            detailed: {
              basic: "Rat and Rooster both have perfectionist tendencies, so they understand each other well. They form a systematic and planned relationship.",
              caution: "Both signs have a strong tendency to pursue perfection, so they can be stressed by small things. It's important to encourage and support each other.",
              dateRecommendation: "We recommend systematic and planned dates. Pre-planned trips, systematic activities, or goal achievement projects are good."
            }
          },
          dog: {
            witty: "Realist X Loyalist, a best duo with strong trust and responsibility!",
            elaboration: "When a realist and a loyalist meet, it's a compatibility that leaves behind reliability and trust. If they honestly communicate and show consideration for differences in principles, practicality, and emotional expression, it will lead to long-term stability. Their strong point is a family-like reliability.",
            detailed: {
              basic: "Rat and Dog form a reliable relationship that trusts and depends on each other. The realistic Rat and loyal Dog meet to provide stability.",
              caution: "Both signs have strong principles, which can lead to stubbornness conflicts. It's important to respect and consider each other's values.",
              dateRecommendation: "We recommend dates where you can feel trust and stability. Family gatherings, traditional activities, or time for each other are good."
            }
          },
          pig: {
            witty: "Meticulous Rat and generous Pig! A reliable couple always comfortable with a combination of practicality and warmth!",
            elaboration: "The Rat makes meticulous plans, and the Pig cherishes each other with generosity and warmth. The Rat handles practical problem-solving, and the Pig provides comfort. Conflicts are resolved gently with generosity, and power struggles are also handled with consideration. Personality differences lead to a rich relationship through communication.",
            detailed: {
              basic: "Rat and Pig form a warm relationship that complements each other. The realistic Rat and generous Pig meet to create balance.",
              caution: "There may be conflicts due to personality differences between the two signs. It's important to understand and care for each other.",
              dateRecommendation: "We recommend dates in a comfortable and warm atmosphere. Time at home, delicious food, or rest in nature are good."
            }
          }
        }
      },
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

// PrimeVue 기본 설정
app.use(PrimeVue);

app.mount("#app");
