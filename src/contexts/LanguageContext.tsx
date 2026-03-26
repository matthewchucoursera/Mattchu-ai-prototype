import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { translations, dateLocales } from "../i18n/translations";
import type { LangCode, TranslationKey } from "../i18n/translations";

interface LanguageContextValue {
  lang: LangCode;
  setLanguage: (lang: LangCode) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLanguage] = useState<LangCode>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLanguage }}>
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
