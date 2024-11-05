import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";

import ruTranslation from "./locales/ru.json";
import engTranslation from "./locales/eng.json";
import uzTranslation from "./locales/uz.json";

const language = localStorage.getItem("i18nextLng") || "uz";

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    lng: language, // Default til
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
      eng: { translation: engTranslation },
    },
  });

export default i18n;
