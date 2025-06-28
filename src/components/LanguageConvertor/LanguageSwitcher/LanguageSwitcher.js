import React, { useState, useEffect, useContext } from 'react';
import './LanguageSwitcher.css';
import { LanguageContext } from '../LanguageContext';

const languages = [
    { value: 'en', label: 'English', shortLabel: 'EN', flag: '🇺🇸' },
    { value: 'es', label: 'Español', shortLabel: 'ES', flag: '🇪🇸' },
];

export default function LanguageSwitcher() {
    const { currentLang, setLanguage } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSelect = (value) => {
        setLanguage(value);
        setIsOpen(false);
    };

    const currentLabel = languages.find((lang) => lang.value === currentLang);

    return (
        <div className="language-switcher-container">
            <button
                type="button"
                aria-label={`Switch language. Current language is ${currentLabel.label}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                className={`language-switcher-button ${isMobile ? 'mobile' : 'desktop'}`}
            >
                <span>
                    {currentLabel.flag} {isMobile ? currentLabel.shortLabel : currentLabel.label}
                </span>

                <span
                    className={`language-switcher-arrow ${isMobile ? 'mobile' : 'desktop'}`}
                    aria-hidden="true"
                >
                    {isOpen ? '✕' : '▾'}
                </span>
            </button>

            {isOpen && (
                <div
                    role="listbox"
                    className={`language-switcher-dropdown ${isMobile ? 'mobile' : 'desktop'}`}>
                    {languages.map((lang) => (
                        <div
                            key={lang.value}
                            role="option"
                            aria-selected={lang.value === currentLang}
                            onClick={() => handleSelect(lang.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') handleSelect(lang.value);
                            }}
                            tabIndex={0}
                            className="language-switcher-item"
                        >
                            {lang.flag} {isMobile ? lang.shortLabel : lang.label}
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
}
