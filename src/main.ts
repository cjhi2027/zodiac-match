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
