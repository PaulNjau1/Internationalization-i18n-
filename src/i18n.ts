import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';

i18n
  .use(LanguageDetector) // Automatically detect the user's language
  .use(initReactI18next) // Passes i18n to React
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    fallbackLng: 'en', // Fallback language if the detected language is not available
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
