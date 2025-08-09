import { useLanguage } from '../contexts/LanguageContext';
import ar from '../locales/ar.json';
import en from '../locales/en.json';

const translations = { ar, en };

export type translationsType = keyof typeof ar;

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: keyof typeof ar): string => {
    return translations[language][key] || key;
  };

  return { t };
};
