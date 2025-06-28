import { createContext, useState } from 'react';
import en from './Languages/en.json';
import es from './Languages/es.json';

const translations = { en, es };

export const LanguageContext = createContext({
    language: translations.en,
    currentLang: 'en',
    setLanguage: () => { },
});

export const LanguageProvider = ({ children }) => {
    const [currentLang, setCurrentLang] = useState('en');

    const setLanguage = (lang) => {
        if (translations[lang]) {
            setCurrentLang(lang);
        }
    };

    return (
        <LanguageContext.Provider
            value={{
                language: translations[currentLang],
                currentLang,
                setLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
