"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="text-sm font-medium text-[var(--apple-gray)] hover:text-[var(--foreground)] transition-colors"
    >
      {lang === "en" ? "🇸🇦 عربي" : "🇬🇧 English"}
    </button>
  );
}
