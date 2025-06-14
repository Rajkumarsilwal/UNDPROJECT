import React, { useState, useEffect } from 'react';

const languages = [
    { value: 'en', label: 'English', shortLabel: 'EN', flag: '🇺🇸' },
    { value: 'es', label: 'Español', shortLabel: 'ES', flag: '🇪🇸' },
];

export default function LanguageSwitcher() {
    const [currentLang, setCurrentLang] = useState('en');
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
        setCurrentLang(value);
        setIsOpen(false);
    };

    const currentLabel = languages.find((lang) => lang.value === currentLang);

    const boxStyle = {
        width: isMobile ? '80px' : '140px',
        height: isMobile ? '36px' : '40px',
        fontSize: isMobile ? '14px' : '16px',
        backgroundColor: '#000',
        color: '#fff',
        border: '1px solid #009A44',
        borderRadius: '10px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px',
        userSelect: 'none',
    };

    const dropdownStyle = {
        position: 'absolute',
        top: isMobile ? '38px' : '42px',
        backgroundColor: '#000',
        border: '1px solid #009A44',
        borderRadius: '10px',
        width: boxStyle.width,
        zIndex: 9999,
    };

    const itemStyle = {
        padding: '8px 10px',
        color: '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: boxStyle.fontSize,
        userSelect: 'none',
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                style={boxStyle}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span>
                    {currentLabel.flag} {isMobile ? currentLabel.shortLabel : currentLabel.label}
                </span>
                <span style={{ fontSize: '18px', color: '#009A44' }}>
                    {isOpen ? '✕' : '▾'}
                </span>
            </button>

            {isOpen && (
                <div role="listbox" style={dropdownStyle}>
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
                            style={itemStyle}
                        >
                            {lang.flag} {isMobile ? lang.shortLabel : lang.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
