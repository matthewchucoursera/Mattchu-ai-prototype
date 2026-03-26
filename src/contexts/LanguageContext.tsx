import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { translations, dateLocales } from "../i18n/translations";
import type { LangCode, TranslationKey } from "../i18n/translations";

interface LanguageContextValue {
  lang: LangCode;
  setLanguage: (lang: LangCode) => void;
  switchLanguage: (lang: LangCode) => void;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLanguage: () => {},
  switchLanguage: () => {},
  isTransitioning: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangCode>("en");
  const [isTransitioning, setIsTransitioning] = useState(false);

  function setLanguage(code: LangCode) {
    setLang(code);
  }

  function switchLanguage(code: LangCode) {
    setIsTransitioning(true);
    setTimeout(() => {
      setLang(code);
      setIsTransitioning(false);
    }, 800);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, switchLanguage, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useT() {
  const { lang } = useLanguage();
  return (key: TranslationKey): string =>
    translations[lang][key] ?? translations.en[key];
}

export function useDateLocale(): string {
  const { lang } = useLanguage();
  return dateLocales[lang];
}
