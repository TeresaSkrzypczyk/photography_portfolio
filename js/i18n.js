import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";
import translationEng from "../locales/en/translation.json";
import translationPl from "../locales/pl/translation.json";

i18n
    .use(XHR)
    .use(LanguageDetector)
    .init({
        debug: true,
        lng: "en",
        fallbackLng: "en",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        },

        resources: {
            en: {
                translations: translationEng
            },
            pl: {
                translations: translationPl
            }
        },

        ns: ["translations"],
        defaultNS: "translations"
    });

export default i18n;
