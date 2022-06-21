import i18n from 'i18n-js';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { contact } from '../i18n/contact.translate';
import { footer } from '../i18n/footer.translate';
import { home } from '../i18n/home.translate';
import { navbar } from '../i18n/nav-bar.translate';
import { project } from '../i18n/project.translate';
import { whatsapp } from '../i18n/whatsapp-float.translate';
import { work } from '../i18n/work.translate';

interface LanguageProps {
  [key: string]: {
    [key: string]: {
      [key: string]: any;
    };
  };
}

export const useI18n = () => {
  const { locale } = useRouter();

  const i18nConfig = useCallback(() => {
    const languages: LanguageProps = {
      pt: {
        ...home.pt,
        ...work.pt,
        ...project.pt,
        ...contact.pt,
        ...whatsapp.pt,
        ...footer.pt,
        ...navbar.pt
      },
      en: {
        ...home.en,
        ...work.en,
        ...project.en,
        ...contact.en,
        ...whatsapp.en,
        ...footer.en,
        ...navbar.en
      }
    };
    i18n.translations = {
      pt: languages['pt'],
      en: languages['en']
    };

    i18n.defaultLocale = 'pt';
    i18n.locale = locale || 'pt';
    i18n.fallbacks = true;
  }, [locale]);

  return {
    i18nConfig
  };
};
