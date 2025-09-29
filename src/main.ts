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
              basic: "쥐띠와 쥐띠의 만남은 동양 사주에서도 대표적인 '현실적 안정형' 궁합으로 꼽힙니다. 빠르고 치밀하게 상황을 분석하는 쥐띠의 재빠른 두뇌와, 우직하고 책임감 넘치게 현실을 한 걸음씩 밟아가는 쥐띠의 느리지만 깊은 실행력이 잘 보완됩니다.",
              caution: "이 조합에서 가장 큰 이슈는 바로 '속도의 차이'와 '완고함'입니다. 쥐띠는 답답한 것을 견디지 못하고, 예상치 못한 상황에서 빨리 결론을 내리고 싶어 합니다.",
              dateRecommendation: "이 커플에게 추천하는 데이트는 '정보+안정'을 조화롭게 담은 프로그램입니다. 예를 들어 새롭고 유익한 정보를 나누는 전시회나 박람회, 박물관 탐방 등에서 쥐띠의 호기심이 충족됩니다."
            }
          },
          ox: {
            witty: "쥐의 촘촘한 계획과 소의 든든한 추진력! 설계는 하늘, 실행은 땅, 둘이 뭉치면 무적입니다!",
            elaboration: "머리 좋은 쥐띠가 그려낸 궤도 위에 한결같이 걸어가는 소띠의 인내와 성실이 더해집니다. 실리와 안전을 중시, 금전 걱정이 적어 생활 기반이 탄탄합니다. 단, 쥐의 조급함과 소의 느림이 부딪치면 속 터질 수 있기에, 일정, 의사결정에서 타협이 중요합니다. 각각의 장점을 살리면 인생 프로젝트, 가정, 사업 어디서나 흔들림없는 파워 궁합이 됩니다.",
            detailed: {
              basic: "쥐띠와 소띠의 만남은 동양 사주에서도 대표적인 '현실적 안정형' 궁합으로 꼽힙니다. 빠르고 치밀하게 상황을 분석하는 쥐띠의 재빠른 두뇌와, 우직하고 책임감 넘치게 현실을 한 걸음씩 밟아가는 소띠의 느리지만 깊은 실행력이 잘 보완됩니다.",
              caution: "이 조합에서 가장 큰 이슈는 바로 '속도의 차이'와 '완고함'입니다. 쥐띠는 답답한 것을 견디지 못하고, 예상치 못한 상황에서 빨리 결론을 내리고 싶어 합니다. 반면 소띠는 느긋하게 시간을 두고 생각하고, 한 번 세운 결정을 쉽게 바꾸지 않습니다.",
              dateRecommendation: "이 커플에게 추천하는 데이트는 '정보+안정'을 조화롭게 담은 프로그램입니다. 예를 들어 새롭고 유익한 정보를 나누는 전시회나 박람회, 박물관 탐방 등에서 쥐띠의 호기심이 충족되고, 바로 옆의 따뜻한 분위기 카페나 편한 한정식 식당에서 대화를 나누며 소띠의 느긋함이 빛을 발합니다."
            }
          },
          tiger: {
            witty: "쥐의 치밀함과 호랑이의 리더십! 열정과 현실의 대결, 서로에게서 배우는 변화의 콤비!",
            elaboration: "쥐의 치밀함과 현실감, 호랑이의 추진력과 모험심이 만나 강렬하게 끌리지만, 스타일이 달라 충돌도 많습니다. 도전할 때는 호랑이가 리드, 실리 결정은 쥐가 앞장섭니다. 독립심과 주도권을 나누면 함께 성장하지만, 서로의 다름을 인정하지 않으면 자주 다툽니다. 유머와 신뢰로 균형을 맞추면 남다른 에너지 커플, 목표 집중형 듀오로 발전합니다.",
            detailed: {
              basic: "쥐띠와 호랑이띠는 서로 다른 매력으로 끌리는 조합입니다. 쥐띠의 신중함과 호랑이띠의 대담함이 만나 균형을 이룹니다.",
              caution: "두 띠 모두 주도권을 원하는 성향이 강해 갈등이 생길 수 있습니다. 서로의 차이를 인정하고 존중하는 것이 중요합니다.",
              dateRecommendation: "모험적인 활동과 안정적인 활동을 조화롭게 섞은 데이트를 추천합니다. 등산이나 새로운 체험과 함께 편안한 대화 시간도 갖는 것이 좋습니다."
            }
          },
          rabbit: {
            witty: "지혜와 감성의 합! 실속과 배려가 흐르지만, 때로는 결정장애의 긴 미팅도 예상됩니다!",
            elaboration: "쥐띠는 전략·실속을 중시하고, 토끼띠는 감수성·평화를 챙깁니다. 대화를 따뜻하게 많이 하지만, 결정을 미루는 경향도 있습니다. 서로의 소심함을 이해하면 공감과 위로가 넘치는 관계로, 결단이 필요한 순간엔 양쪽 다 한 발 용기를 내면 좋습니다. 평화를 사랑하는 조합, 고민 해결에는 신중함이 최대치로 발휘됩니다.",
            detailed: {
              basic: "쥐띠와 토끼띠는 서로를 이해하고 배려하는 따뜻한 관계를 형성합니다. 현실적인 쥐띠와 감성적인 토끼띠가 만나 균형을 이룹니다.",
              caution: "두 띠 모두 소심한 성향이 있어 결정을 미루는 경향이 있습니다. 서로 용기를 북돋아주는 것이 중요합니다.",
              dateRecommendation: "조용하고 편안한 분위기의 데이트를 추천합니다. 카페나 공원에서의 산책, 또는 집에서의 영화 감상 등이 좋습니다."
            }
          },
          dragon: {
            witty: "꾀돌이와 카리스마 명장! 계획이 번쩍, 실행이 폭발하는 드림팀!",
            elaboration: "쥐띠의 아이디어와 용띠의 추진력은 시작부터 파워풀합니다. 서로 밀어주고 인정하면 대단한 목표도 찰떡같이 이뤄냅니다. 자존심이나 주도권 싸움만 조심하면, 일·연애 모두에서 가장 강력한 팀워크를 보여줍니다. 문제해결과 결정, 추진에서 완성형 커플입니다.",
            detailed: {
              basic: "쥐띠와 용띠는 서로의 강점을 보완하는 완벽한 팀워크를 보여줍니다. 쥐띠의 계획성과 용띠의 실행력이 만나 큰 성과를 이룹니다.",
              caution: "두 띠 모두 자존심이 강해 주도권 싸움이 있을 수 있습니다. 서로를 인정하고 존중하는 마음이 중요합니다.",
              dateRecommendation: "도전적이고 성취감을 느낄 수 있는 데이트를 추천합니다. 새로운 스포츠나 취미 활동, 또는 함께 목표를 달성할 수 있는 프로젝트가 좋습니다."
            }
          },
          snake: {
            witty: "머릿속 계산이 번쩍이는 브레인 콤비! 지혜와 냉정, 주도권이 톱니처럼 맞물립니다.",
            elaboration: "신중함, 분석 능력이 뛰어나서 깊은 고민과 실질적 문제 해결이 강점입니다. 감정 표현은 적어 정서적 거리감이 있을 수 있지만, 솔직한 대화로 신뢰를 쌓아갑니다. 꼼꼼함·내면적 협력으로 오래가는 진중한 커플. 감정적 소통 연습이 필요합니다.",
            detailed: {
              basic: "쥐띠와 뱀띠는 모두 신중하고 분석적인 성향을 가지고 있어 서로를 잘 이해합니다. 깊이 있는 대화와 현실적인 문제 해결에 강점을 보입니다.",
              caution: "두 띠 모두 감정 표현이 적어 정서적 거리감이 생길 수 있습니다. 솔직한 대화와 감정적 소통이 필요합니다.",
              dateRecommendation: "지적이고 조용한 분위기의 데이트를 추천합니다. 도서관, 박물관, 또는 조용한 카페에서의 대화가 좋습니다."
            }
          },
          horse: {
            witty: "계산파 쥐와 즉흥파 말! 속도와 질주, 긴장과 웃음이 반복되는 변화무쌍 콤비!",
            elaboration: "계획적인 쥐와 자유로운 말은 초기엔 신선하지만, 일상에서 금전·시간·생활방식이 충돌합니다. 유연한 대화와 적절한 타협, 각자의 스타일 존중이 필수입니다. 각기 다른 삶의 모습에서 배우고 성장할 수 있는 강렬한 커플이지만, 고집이 강하면 쉽지 않을 수도 있습니다.",
            detailed: {
              basic: "쥐띠와 말띠는 서로 다른 매력으로 끌리는 조합입니다. 쥐띠의 계획성과 말띠의 자유로움이 만나 새로운 에너지를 만들어냅니다.",
              caution: "계획적인 쥐띠와 즉흥적인 말띠의 성향 차이로 갈등이 생길 수 있습니다. 서로의 스타일을 존중하고 타협하는 것이 중요합니다.",
              dateRecommendation: "자유롭고 활기찬 데이트를 추천합니다. 야외 활동, 페스티벌, 또는 새로운 장소 탐방 등이 좋습니다."
            }
          },
          goat: {
            witty: "꼼꼼+순함! 실속과 감성이 교차하는 따뜻한 밸런스",
            elaboration: "쥐는 현실, 양은 배려와 감성에 집중합니다. 양띠가 쥐의 걱정을 포용, 쥐가 양의 느긋함을 현실적으로 보완합니다. 장점 존중, 단점 보완하면 평화롭고 따듯한 커플, 예민하면 흔들릴 수 있지만 감성적 위로와 실질적 조언의 균형으로 오래 지속됩니다.",
            detailed: {
              basic: "쥐띠와 양띠는 서로를 보완하는 따뜻한 관계를 형성합니다. 현실적인 쥐띠와 감성적인 양띠가 만나 균형을 이룹니다.",
              caution: "두 띠 모두 예민한 성향이 있어 작은 일에도 흔들릴 수 있습니다. 서로를 배려하고 위로하는 마음이 중요합니다.",
              dateRecommendation: "따뜻하고 편안한 분위기의 데이트를 추천합니다. 자연 속 산책, 예술 작품 감상, 또는 집에서의 요리 등이 좋습니다."
            }
          },
          monkey: {
            witty: "꾀돌이와 영리함이 만나면, 아이디어와 장난이 쉴 새 없이 터지는 유쾌 브레인 커플!",
            elaboration: "머리와 센스가 비슷해 대화와 협업 모두 창의적이고 활기차게 흐릅니다. 문제해결·경쟁도 긍정적으로 풀려서 지루할 틈이 없습니다. 감정 교류를 챙기면서 최고의 유쾌 연인이 될 수 있습니다. 성장과 발전이 보이는 최고 궁합입니다.",
            detailed: {
              basic: "쥐띠와 원숭이띠는 서로의 지능과 재치를 인정하는 유쾌한 관계를 형성합니다. 창의적인 아이디어와 활기찬 대화가 특징입니다.",
              caution: "두 띠 모두 영리하고 재치가 있어 경쟁 의식이 생길 수 있습니다. 서로를 인정하고 협력하는 마음이 중요합니다.",
              dateRecommendation: "창의적이고 재미있는 데이트를 추천합니다. 게임, 퍼즐, 또는 새로운 취미 활동 등이 좋습니다."
            }
          },
          rooster: {
            witty: "꼼꼼 끝판왕끼리 만남! 빈틈없이 완벽을 추구하니, 잔소리와 박수 모두 넘칩니다.",
            elaboration: "계획과 관리, 감시와 평가가 완벽하게 맞물립니다. 최고의 결과를 내지만, 세세한 기준까지 다투기도 하는 만큼 감정적 지지도 꼭 챙겨야 합니다. 완벽주의 커플답게 본질 파악, 큰 그림 보는 여유도 종종 가져야 오래가요.",
            detailed: {
              basic: "쥐띠와 닭띠는 모두 완벽주의 성향을 가지고 있어 서로를 잘 이해합니다. 체계적이고 계획적인 관계를 형성합니다.",
              caution: "두 띠 모두 완벽을 추구하는 성향이 강해 작은 일에도 스트레스를 받을 수 있습니다. 서로를 격려하고 지지하는 것이 중요합니다.",
              dateRecommendation: "체계적이고 계획적인 데이트를 추천합니다. 미리 계획된 여행, 체계적인 활동, 또는 목표 달성 프로젝트가 좋습니다."
            }
          },
          dog: {
            witty: "실리파X의리파, 신뢰와 책임이 단단한 베스트 듀오!",
            elaboration: "현실파와 의리파가 만나면 든든함과 신뢰가 남는 궁합입니다. 원칙과 실리, 감정 방식의 차이만 솔직하게 대화하고 배려하면 오랫동안 안정적으로 이어갑니다. 가족 같은 든든함이 강점.",
            detailed: {
              basic: "쥐띠와 개띠는 서로를 신뢰하고 의지하는 든든한 관계를 형성합니다. 현실적인 쥐띠와 의리있는 개띠가 만나 안정감을 줍니다.",
              caution: "두 띠 모두 원칙이 강해 고집이 부딪힐 수 있습니다. 서로의 가치관을 존중하고 배려하는 것이 중요합니다.",
              dateRecommendation: "신뢰와 안정감을 느낄 수 있는 데이트를 추천합니다. 가족 모임, 전통적인 활동, 또는 서로를 위한 시간이 좋습니다."
            }
          },
          pig: {
            witty: "꼼꼼한 쥐와 넉넉한 돼지! 실리와 따뜻함이 결합해 늘 편안한 든든 커플!",
            elaboration: "쥐는 치밀한 계획, 돼지는 너그러움과 포근함으로 서로를 든든히 아껴줍니다. 쥐가 현실 고민 해결, 돼지가 위로 담당. 갈등은 넉넉함으로 부드럽게 해결하며, 주도권 싸움도 배려로 넘깁니다. 성격차는 소통으로 풍성한 관계",
            detailed: {
              basic: "쥐띠와 돼지띠는 서로를 보완하는 따뜻한 관계를 형성합니다. 현실적인 쥐띠와 너그러운 돼지띠가 만나 균형을 이룹니다.",
              caution: "두 띠의 성격 차이로 인한 갈등이 있을 수 있습니다. 서로를 이해하고 배려하는 마음이 중요합니다.",
              dateRecommendation: "편안하고 따뜻한 분위기의 데이트를 추천합니다. 집에서의 시간, 맛있는 음식, 또는 자연 속 휴식 등이 좋습니다."
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
              basic: "The meeting of Rat and Rat is considered a representative 'realistic stable type' compatibility in Eastern astrology. The Rat's quick brain that analyzes situations quickly and meticulously, and the Rat's slow but deep execution power that steps into reality step by step with uprightness and responsibility, complement each other well.",
              caution: "The biggest issue in this combination is the 'difference in speed' and 'stubbornness'. Rats can't stand frustrating things and want to quickly draw conclusions in unexpected situations.",
              dateRecommendation: "The recommended date for this couple is a program that harmoniously contains 'information + stability'. For example, at exhibitions or fairs where new and useful information is shared, or museum visits where the Rat's curiosity is satisfied."
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
              basic: "Rat and Tiger are a combination that attracts each other with different charms. The Rat's prudence and the Tiger's boldness meet to create balance.",
              caution: "Both signs have a strong tendency to want initiative, which can lead to conflicts. It's important to acknowledge and respect each other's differences.",
              dateRecommendation: "We recommend dates that harmoniously mix adventurous and stable activities. It's good to have comfortable conversation time along with hiking or new experiences."
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
              basic: "Rat and Snake both have cautious and analytical tendencies, so they understand each other well. They show strengths in deep conversation and realistic problem-solving.",
              caution: "Both signs have limited emotional expression, which can create emotional distance. Honest conversation and emotional communication are needed.",
              dateRecommendation: "We recommend dates in an intellectual and quiet atmosphere. Libraries, museums, or conversation in quiet cafes are good."
            }
          },
          horse: {
            witty: "Calculative Rat and impulsive Horse! A versatile combo where speed and sprint, tension and laughter repeat!",
            elaboration: "The planned Rat and the free Horse are fresh at first, but in daily life, financial, time, and lifestyle conflicts arise. Flexible conversation, appropriate compromise, and respect for each other's styles are essential. They can be an intense couple who learn and grow from each other's different ways of life, but if stubbornness is strong, it can be difficult.",
            detailed: {
              basic: "Rat and Horse are a combination that attracts each other with different charms. The Rat's planning ability and the Horse's freedom meet to create new energy.",
              caution: "The difference between the planned Rat and the impulsive Horse can lead to conflicts. It's important to respect and compromise with each other's styles.",
              dateRecommendation: "We recommend free and energetic dates. Outdoor activities, festivals, or exploring new places are good."
            }
          },
          goat: {
            witty: "Meticulous + Gentle! A warm balance where practicality and emotion intersect.",
            elaboration: "The Rat focuses on reality, the Goat on consideration and emotion. The Goat embraces the Rat's worries, and the Rat realistically complements the Goat's relaxedness. Respecting strengths and compensating for weaknesses makes them a peaceful and warm couple. They may be shaken if sensitive, but they last long with a balance of emotional comfort and practical advice.",
            detailed: {
              basic: "Rat and Goat form a warm relationship that complements each other. The realistic Rat and emotional Goat meet to create balance.",
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
