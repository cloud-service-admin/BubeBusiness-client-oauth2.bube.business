import envConfig from '@configs/env/envConfig.config';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

let debug = false;
const APP_MODE = envConfig.VITE_APP_MODE;

if (
  APP_MODE === 'development' ||
  APP_MODE === 'test' ||
  APP_MODE === 'test-development'
) {
  debug = true;
} else {
  debug = false;
}

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'vi',
    fallbackLng: 'vi',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: [],
    debug,
    react: {
      bindI18n: 'languageChanged',
      useSuspense: true,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
