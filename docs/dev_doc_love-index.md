# 12간지 띠별 궁합 웹앱 개발 문서

## 📋 프로젝트 개요

**프로젝트명**: 12간지 띠별 궁합 웹 애플리케이션 (LoveIndex)  
**목적**: 생년월일 또는 띠 선택을 통한 커플 궁합 확인 서비스  
**타겟**: 한국 및 글로벌 사용자  
**개발 기간**: 2024년 9월 24일 ~ 15일  
**기술 스택**: Vue.js 3 + TypeScript + Vite + Tailwind CSS

---

## 🛠 아키텍처 구조

### **프론트엔드 아키텍처**
- **Vue.js 3.5.18** 기반 SPA (Single Page Application)
- **TypeScript 5.8.0** 완전 지원
- **Vite 7.0.6** 빌드 도구 및 개발 서버
- **Vue Router 4.5.1** 클라이언트 사이드 라우팅
- **Vue i18n 9.14.5** 다국어 지원

### **상태 관리**
- **Pinia 3.0.3** - 중앙 집중식 상태 관리
- **VueUse 13.9.0** - Vue 컴포저블 유틸리티

### **UI/스타일링**
- **Tailwind CSS 4.1.13** - 유틸리티 CSS 프레임워크
- **PrimeVue 4.3.9** - Vue UI 컴포넌트 라이브러리
- **PrimeIcons 7.0.0** - 아이콘 라이브러리

### **폼 관리 & 검증**
- **VeeValidate 4.15.1** - 폼 검증 라이브러리
- **@vee-validate/zod 4.15.1** - Zod 스키마 검증

---

## 🎨 디자인 시스템

### **테마 시스템**
- **커스텀 CSS 변수** 기반 테마 시스템
- **다국어 지원** (한국어, 영어)
- **한글 폰트**: 시스템 기본 폰트 스택
- **커스텀 색상 팔레트** (primary: #dc3545)

### **색상 시스템**
- **Primary**: #dc3545 (빨간색 그라데이션)
- **Secondary**: 회색 계열
- **Background**: #fffef5 (크림색)
- **Text**: #333 (진한 회색)
- **카드 뒷면**: #ffb4b4 (핑크), #b4d4ff (하늘색)

### **반응형 브레이크포인트**
- **모바일**: 768px 이하
- **데스크톱**: 769px 이상

---

## 📁 프로젝트 구조

```
loveindex/
├── public/                    # 정적 파일
│   ├── attached_assets/       # 동물 이미지 리소스
│   │   ├── animal/           # 12간지 동물 이미지 (원본)
│   │   ├── animal_128/       # 128px 크기 이미지
│   │   ├── animal_character/ # 캐릭터 이미지
│   │   ├── animal_character_480/ # 480px 캐릭터 이미지
│   │   └── animal_character_orig/ # 원본 캐릭터 이미지
│   ├── sns-icons/            # SNS 아이콘들
│   ├── favicon.ico           # 파비콘
│   └── favicon.svg           # SVG 파비콘
├── src/
│   ├── components/           # Vue 컴포넌트
│   │   ├── HomePage.vue      # 메인 홈페이지 컴포넌트
│   │   ├── Animal-Selector.vue # 동물 선택 그리드
│   │   ├── Animal-Result.vue # 궁합 결과 표시
│   │   ├── Animal-Result-Detail.vue # 상세 궁합 정보
│   │   ├── Animal-BirthYear.vue # 생년 선택 컴포넌트
│   │   └── LanguageSelector.vue # 언어 선택기
│   ├── views/                # 페이지 뷰
│   │   ├── Home.vue          # 메인 랜딩 페이지
│   │   ├── Info-My.vue       # 내 정보 입력 페이지
│   │   ├── Info-Partner.vue  # 상대방 정보 입력 페이지
│   │   ├── Result-Brief.vue  # 간단한 결과 페이지
│   │   ├── Result-Detail.vue # 상세 결과 페이지
│   │   ├── Home-About.vue    # 소개 페이지 (한국어)
│   │   ├── Home-About-en.vue # 소개 페이지 (영어)
│   │   ├── Home-Privacy.vue  # 개인정보처리방침 (한국어)
│   │   ├── Home-Privacy-en.vue # 개인정보처리방침 (영어)
│   │   ├── Home-Terms.vue    # 이용약관 (한국어)
│   │   └── Home-Terms-en.vue # 이용약관 (영어)
│   ├── lib/                  # 유틸리티 및 로직
│   │   └── animal.ts         # 12간지 데이터 및 궁합 계산 로직
│   ├── locales/              # 다국어 번역 파일
│   │   ├── ko.ts            # 한국어 번역
│   │   └── en.ts            # 영어 번역
│   ├── i18n/                 # 국제화 설정
│   │   └── index.ts         # i18n 설정
│   ├── router/               # 라우팅 설정
│   │   └── index.ts         # Vue Router 설정
│   ├── stores/               # Pinia 스토어
│   │   └── counter.ts       # 예시 스토어
│   ├── main.ts              # 애플리케이션 진입점
│   ├── main.css             # 메인 스타일시트
│   └── style.css            # 추가 스타일
├── docs/                     # 문서
│   ├── dev_doc_love-index.md # 개발 문서
│   ├── 12animal_character.txt  # 12간지 캐릭터 설명
│   ├── 12x12_2.xlsx         # 궁합 매트릭스 데이터
│   ├── 12x12_simple.txt     # 간단한 궁합 데이터
│   ├── 12x12.csv            # CSV 형태 궁합 데이터
│   └── 12x12.xlsx           # Excel 형태 궁합 데이터
├── dist/                     # 빌드 결과물
├── package.json             # 프로젝트 의존성
├── vite.config.ts           # Vite 설정
├── tailwind.config.js       # Tailwind CSS 설정
├── tsconfig.json            # TypeScript 설정
└── vercel.json              # Vercel 배포 설정
```

---

## 🧩 핵심 컴포넌트 상세

### **1. HomePage.vue - 메인 홈페이지**
**기능**: 사용자 정보 입력 및 궁합 확인 시작점
- **내 정보 섹션**: 띠 선택 또는 생년 입력
- **상대방 정보 섹션**: 띠 선택 또는 생년 입력
- **탭 전환**: 띠 선택 ↔ 생년 입력 모드
- **궁합 확인 버튼**: 양쪽 정보 입력 완료 시 활성화
- **언어 선택기**: 한국어/영어 전환

**주요 로직**:
```typescript
// 최종 띠 계산 (생년 우선, 띠 선택 보조)
const getMyFinalZodiac = (): ZodiacAnimal | undefined => {
  if (myActiveIndex.value === 1 && myBirthYear.value) {
    return getAnimalByYear(parseInt(myBirthYear.value));
  }
  return myZodiac.value;
};
```

### **2. Animal-Selector.vue - 동물 선택 그리드**
**기능**: 12간지 동물 선택 인터페이스
- **그리드 레이아웃**: 12개 동물을 그리드로 배치
- **자동 스크롤**: 모바일에서 좌우 자동 스크롤
- **선택 피드백**: 선택된 동물 하이라이트
- **이미지 최적화**: 다양한 크기의 동물 이미지 제공

**주요 기능**:
- 모바일 자동 스크롤 (0.15px/프레임)
- 사용자 상호작용 시 2초 정지 후 재개
- 선택 시 자동 스크롤 중단 및 재시작

### **3. Animal-Result.vue - 궁합 결과 표시**
**기능**: 궁합 점수 및 설명 표시
- **점수 애니메이션**: 0부터 실제 점수까지 카운트업
- **프로그래스바**: 점수에 따른 시각적 표시
- **단계별 표시**: 점수 → 설명 → 버튼 순서로 애니메이션
- **색상 구분**: 점수별 다른 색상 (빨강/노랑/초록/파랑)

**애니메이션 로직**:
```typescript
// 점수 애니메이션 (점수당 20ms)
const duration = targetScore * 20;
const steps = 60;
const stepDuration = duration / steps;

// 단계별 표시 타이밍
setTimeout(() => {
  showWitty.value = true;        // 재치있는 설명
  showElaboration.value = true;  // 부연설명
}, duration);

setTimeout(() => {
  showButton.value = true;       // 버튼 활성화
}, duration + 600);
```

### **4. Animal-Result-Detail.vue - 상세 궁합 정보**
**기능**: 궁합의 상세한 분석 및 조언
- **접을 수 있는 섹션**: 기본 설명, 주의점, 데이트 추천
- **토글 애니메이션**: 섹션별 펼치기/접기
- **상세 정보**: 각 띠 조합별 맞춤형 내용
- **공유 기능**: 결과 공유 버튼

### **5. Info-My.vue / Info-Partner.vue - 정보 입력 페이지**
**기능**: 개별 정보 입력 페이지
- **카드 뒤집기 효과**: 3D 카드 뒤집기 애니메이션
- **생년 모달**: 생년 입력을 위한 모달 창
- **단계별 진행**: 내 정보 → 상대방 정보 → 결과
- **언어 설정**: 페이지별 언어 선택

**카드 뒤집기 애니메이션**:
```css
/* 첫 선택: 크기 변화 + 회전 */
@keyframes cardFlipFirst {
  0% { transform: scale(1.5) rotateY(0deg); }
  50% { transform: scale(1.25) rotateY(90deg); }
  100% { transform: scale(1) rotateY(0deg); }
}

/* 재선택: 회전만 */
@keyframes cardFlip {
  0% { transform: scale(1) rotateY(0deg); }
  50% { transform: scale(1) rotateY(90deg); }
  100% { transform: scale(1) rotateY(0deg); }
}
```

---

## 🔢 궁합 계산 로직

### **12x12 궁합 매트릭스**
```typescript
const compatibilityMatrix = [
  [80, 100, 80, 60, 100, 80, 40, 60, 100, 60, 80, 80], // 쥐
  [100, 80, 80, 80, 60, 100, 60, 40, 80, 100, 60, 80], // 소
  [80, 80, 80, 100, 80, 40, 100, 80, 40, 60, 100, 80], // 호랑이
  [60, 80, 100, 80, 40, 100, 80, 100, 60, 40, 80, 100], // 토끼
  [100, 60, 80, 40, 80, 100, 80, 60, 100, 80, 40, 60], // 용
  [80, 100, 40, 100, 100, 80, 60, 80, 40, 100, 60, 40], // 뱀
  [40, 60, 100, 80, 80, 60, 80, 100, 80, 60, 100, 80], // 말
  [60, 40, 80, 100, 60, 80, 100, 80, 60, 40, 80, 100], // 양
  [100, 80, 40, 60, 100, 40, 80, 60, 80, 100, 60, 40], // 원숭이
  [60, 100, 60, 40, 80, 100, 60, 40, 100, 80, 40, 60], // 닭
  [80, 60, 100, 80, 40, 60, 100, 80, 60, 40, 80, 100], // 개
  [80, 80, 80, 100, 60, 40, 80, 100, 40, 60, 100, 80], // 돼지
];
```

### **궁합 점수 계산**
```typescript
export function getCompatibilityScore(
  zodiac1: ZodiacAnimal,
  zodiac2: ZodiacAnimal
): number {
  const index1 = animalData.findIndex(z => z.id === zodiac1.id);
  const index2 = animalData.findIndex(z => z.id === zodiac2.id);
  return compatibilityMatrix[index1][index2];
}
```

### **생년으로 띠 계산**
```typescript
export function getAnimalByYear(year: number): ZodiacAnimal {
  const index = (year - 1900) % 12;
  return animalData[index];
}
```

---

## 🎭 애니메이션 시스템

### **1. 카드 뒤집기 애니메이션**
- **3D 회전 효과**: `transform: rotateY()` 사용
- **크기 변화**: 첫 선택 시 1.5배 → 1배 축소
- **타이밍**: 0.6초 동안 진행
- **단계별 처리**: 0.3초에 이미지 변경, 0.6초에 완료

### **2. 점수 카운트업 애니메이션**
- **점진적 증가**: 60단계로 나누어 부드럽게 증가
- **동적 지속시간**: 점수 × 20ms (100점 = 2초)
- **프로그래스바**: CSS `width` 속성으로 시각화

### **3. 페이드인/슬라이드 애니메이션**
- **설명 텍스트**: `fadeIn` 클래스로 페이드인
- **버튼**: `slide-up` 클래스로 아래에서 위로 슬라이드
- **토스트 메시지**: `toast-slide-up` 애니메이션

### **4. 자동 스크롤 애니메이션**
- **모바일 그리드**: 좌우 자동 스크롤 (0.15px/프레임)
- **사용자 상호작용**: 2초 정지 후 재개
- **방향 전환**: 끝에 도달 시 반대 방향으로 전환

---

## 🌐 다국어 지원 (i18n)

### **지원 언어**
- **한국어 (ko)**: 기본 언어
- **영어 (en)**: 글로벌 사용자 대상

### **언어 감지 및 저장**
```typescript
// 브라우저 언어 감지 + localStorage 저장
const supportedLocales = ['ko', 'en'];
const browserLang = navigator.language.split('-')[0];
const savedLocale = localStorage.getItem('zodiac-locale') || 
  (supportedLocales.includes(browserLang) ? browserLang : 'en');
```

### **번역 키 구조**
```typescript
// 예시: 궁합 상세 정보
compatibilityDetail: {
  title: "궁합 상세",
  chemistryPoint: "우리의 케미포인트", // 최근 변경됨
  cautionPoints: "주의할 점",
  dateRecommendation: "데이트 추천",
  goodGiftFor: "에게 좋은 선물",
  shareTitle: "결과 공유하기",
  viewDetail: "상세 보기"
}
```

---

## 🛣 라우팅 구조

### **라우트 정의**
```typescript
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/animal", name: "animalHome", component: HomePage },
  { path: "/animal/info-my", name: "animalInfoMy", component: InfoMy },
  { path: "/animal/info-partner", name: "animalInfoPartner", component: InfoPartner },
  { path: "/animal/result-brief", name: "animalResultBrief", component: ResultBrief },
  { path: "/animal/result-detail", name: "animalResultDetail", component: ResultDetail },
  { path: "/about", name: "about", component: HomeAbout },
  { path: "/about-en", name: "aboutEn", component: HomeAboutEn },
  { path: "/privacy", name: "privacy", component: HomePrivacy },
  { path: "/privacy-en", name: "privacyEn", component: HomePrivacyEn },
  { path: "/terms", name: "terms", component: HomeTerms },
  { path: "/terms-en", name: "termsEn", component: HomeTermsEn }
];
```

### **사용자 플로우**
1. **홈페이지** (`/`) → 메인 랜딩
2. **동물 선택** (`/animal`) → 정보 입력
3. **내 정보** (`/animal/info-my`) → 내 띠 선택
4. **상대방 정보** (`/animal/info-partner`) → 상대방 띠 선택
5. **간단한 결과** (`/animal/result-brief`) → 궁합 점수 표시
6. **상세 결과** (`/animal/result-detail`) → 상세 분석

---

## 📱 반응형 디자인

### **모바일 우선 설계**
- **브레이크포인트**: 768px
- **터치 친화적**: 큰 버튼, 적절한 간격
- **자동 스크롤**: 모바일에서 동물 선택 그리드 자동 스크롤

### **데스크톱 최적화**
- **그리드 레이아웃**: 12개 동물을 4x3 그리드로 배치
- **호버 효과**: 마우스 오버 시 상호작용 피드백
- **키보드 네비게이션**: 접근성 고려

---

## 🚀 배포 환경

### **Vercel 배포**
- **정적 사이트 호스팅**: Vite 빌드 결과물 배포
- **자동 배포**: GitHub 연동으로 push 시 자동 배포
- **CDN**: 글로벌 콘텐츠 전송
- **환경 설정**: `vercel.json`으로 라우팅 설정

### **빌드 최적화**
- **코드 스플리팅**: 라우트별 청크 분리
- **이미지 최적화**: 다양한 크기의 이미지 제공
- **번들 압축**: gzip 압축으로 로딩 속도 향상

---

## 📈 성능 지표

### **빌드 성능**
- **개발 서버 시작**: < 3초
- **HMR 업데이트**: < 1초
- **프로덕션 빌드**: < 30초

### **런타임 성능**
- **초기 로딩**: < 3초
- **페이지 전환**: < 200ms
- **애니메이션**: 60fps 유지

### **번들 크기**
- **JavaScript**: ~500KB (gzipped)
- **CSS**: ~50KB (gzipped)
- **이미지**: ~200KB (12개 동물 이미지)

---

## 🧪 테스트

### **테스트 환경**
- **Vitest 3.2.4**: 단위 테스트 프레임워크
- **Vue Test Utils 2.4.6**: Vue 컴포넌트 테스트
- **JSDOM 26.1.0**: DOM 환경 시뮬레이션

### **테스트 커버리지**
- **컴포넌트 테스트**: 주요 컴포넌트 동작 검증
- **유틸리티 함수**: 궁합 계산 로직 테스트
- **라우팅**: 페이지 전환 테스트

---

## 🔧 개발 도구

### **빌드 도구**
- **Vite 7.0.6**: 빠른 개발 서버 및 빌드
- **TypeScript 5.8.0**: 타입 안정성
- **PostCSS 8.5.6**: CSS 처리
- **Autoprefixer 10.4.21**: CSS 벤더 프리픽스

### **개발 환경**
- **Vue DevTools**: 브라우저 개발자 도구
- **Hot Module Replacement**: 실시간 코드 변경
- **TypeScript 컴파일러**: 타입 체크

### **코드 품질**
- **ESLint**: 코드 린팅 (간접적)
- **Prettier**: 코드 포맷팅 (간접적)
- **TypeScript**: 정적 타입 검사

---

## 🎯 향후 개선 계획

### **단기 (1-3개월)**
- [ ] 추가 궁합 요소 (혈액형, 별자리, MBTI)
- [ ] PWA 기능 추가 (오프라인 지원)
- [ ] 성능 최적화 (이미지 지연 로딩)
- [ ] 접근성 개선 (ARIA 라벨, 키보드 네비게이션)

### **중기 (3-6개월)**
- [ ] 사용자 통계 수집 및 분석
- [ ] 소셜 공유 기능 (카카오톡, 페이스북)
- [ ] 모바일 앱 개발 (React Native)
- [ ] 다국어 확장 (일본어, 중국어)

### **장기 (6개월+)**
- [ ] AI 기반 궁합 분석
- [ ] 커뮤니티 기능 (사용자 후기, 댓글)
- [ ] 프리미엄 서비스 (상세 분석, 개인화)
- [ ] API 서비스 제공

---

## 📊 데이터 구조

### **12간지 동물 데이터**
```typescript
interface ZodiacAnimal {
  id: string;           // 고유 식별자
  name: string;         // 한국어 이름
  nameEn: string;       // 영어 이름
  image: string;        // 이미지 경로
  wittyKey: string;     // 재치있는 설명 키
  wittyKeyEn: string;   // 영어 재치있는 설명 키
}
```

### **궁합 상세 정보**
```typescript
interface CompatibilityDetail {
  result: {
    summary: string;      // 간단한 요약
    description: string;  // 상세 설명
  };
  detailed: {
    basic: {
      summaryKey: string;      // 기본 설명 요약 키
      descriptionKey: string;  // 기본 설명 상세 키
    };
    caution: {
      summaryKey: string;      // 주의점 요약 키
      descriptionKey: string;  // 주의점 상세 키
    };
    dateRecommendation: {
      summaryKey: string;      // 데이트 추천 요약 키
      descriptionKey: string;  // 데이트 추천 상세 키
    };
  };
}
```

---

## 🔍 주요 기능 상세

### **1. 띠 선택 시스템**
- **이미지 기반 선택**: 12개 동물 이미지를 그리드로 배치
- **생년 자동 계산**: 생년 입력 시 자동으로 띠 계산
- **시각적 피드백**: 선택된 동물 하이라이트 표시
- **모바일 최적화**: 터치 친화적 인터페이스

### **2. 궁합 계산 엔진**
- **12x12 매트릭스**: 모든 띠 조합의 궁합 점수
- **점수 범위**: 40-100점 (40점 단위로 구분)
- **색상 구분**: 점수별 다른 색상 (빨강/노랑/초록/파랑)
- **상세 분석**: 각 조합별 맞춤형 설명 제공

### **3. 애니메이션 시스템**
- **카드 뒤집기**: 3D 회전 효과로 선택 피드백
- **점수 카운트업**: 0부터 실제 점수까지 부드럽게 증가
- **단계별 표시**: 점수 → 설명 → 버튼 순서로 애니메이션
- **자동 스크롤**: 모바일에서 동물 선택 그리드 자동 스크롤

### **4. 다국어 지원**
- **자동 감지**: 브라우저 언어 설정 자동 감지
- **수동 선택**: 사용자가 직접 언어 선택 가능
- **지속성**: localStorage에 언어 설정 저장
- **실시간 전환**: 페이지 새로고침 없이 언어 변경

---

## 🎨 UI/UX 디자인 원칙

### **사용자 경험**
- **직관적 인터페이스**: 2단계 간단한 프로세스
- **시각적 피드백**: 모든 상호작용에 즉각적인 피드백
- **모바일 우선**: 모바일 사용자를 위한 최적화
- **접근성**: 키보드 네비게이션 및 스크린 리더 지원

### **디자인 일관성**
- **컬러 팔레트**: 일관된 색상 사용
- **타이포그래피**: 통일된 폰트 크기 및 간격
- **애니메이션**: 부드럽고 자연스러운 전환 효과
- **레이아웃**: 그리드 기반 일관된 레이아웃

---

## 🔧 기술적 특징

### **Vue.js 3 Composition API**
- **반응성 시스템**: `ref`, `computed`, `reactive` 활용
- **라이프사이클**: `onMounted`, `onUnmounted` 등 적절한 사용
- **컴포넌트 통신**: Props, Emits를 통한 부모-자식 통신
- **TypeScript 통합**: 완전한 타입 안정성

### **성능 최적화**
- **코드 스플리팅**: 라우트별 청크 분리
- **이미지 최적화**: 다양한 크기의 이미지 제공
- **메모이제이션**: `computed` 속성으로 불필요한 재계산 방지
- **지연 로딩**: 필요시에만 컴포넌트 로드

### **개발자 경험**
- **TypeScript**: 완전한 타입 지원
- **Vite**: 빠른 개발 서버 및 HMR
- **Vue DevTools**: 브라우저 개발자 도구 지원
- **ESLint/Prettier**: 코드 품질 및 일관성 유지

---

*이 문서는 프로젝트 진행에 따라 지속적으로 업데이트됩니다.*  
*최종 수정일: 2024년 12월*