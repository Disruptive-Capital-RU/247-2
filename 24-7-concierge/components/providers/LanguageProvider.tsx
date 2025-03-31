"use client";

import { createContext, useContext, useState } from "react";

type Language = "en" | "ar";

const LanguageContext = createContext<{
  lang: Language;
  toggleLang: () => void;
}>({ lang: "en", toggleLang: () => {} });

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}
