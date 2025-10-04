import { createI18n } from 'vue-i18n';
import ko from '../locales/ko';
import en from '../locales/en';

// 브라우저 언어 감지 + 지원 언어 확인
const supportedLocales = ['ko', 'en']; // 지원 언어 목록 (추후 확장 가능)
const browserLang = navigator.language.split('-')[0];
const savedLocale = localStorage.getItem('zodiac-locale') || 
  (supportedLocales.includes(browserLang) ? browserLang : 'en');

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: "en",
  messages: {
    ko,
    en
  },
});

export default i18n;
