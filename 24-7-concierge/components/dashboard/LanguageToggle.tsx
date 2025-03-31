"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="bg-gray-100 px-4 py-2 rounded border text-sm"
    >
      {lang === "en" ? "🇸🇦 عربي" : "🇬🇧 English"}
    </button>
  );
}
