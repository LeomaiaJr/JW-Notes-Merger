import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import { TRANSLATIONS_EN } from './en/translation';

export const defaultNS = 'ns1';
export const resources = {
  en: {
    translation: TRANSLATIONS_EN,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['ns1', 'ns2'],
    defaultNS,
    resources,
  });
