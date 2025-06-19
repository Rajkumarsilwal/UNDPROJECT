import React, { useContext } from 'react';
import { LanguageContext } from '../../LanguageConvertor/LanguageContext';
import './NormalMenuBar.css';

const defaultnavigationLinks = [
    { name: 'ACADEMICS', url: 'https://und.edu/academics/index.html' },
    { name: 'ADMISSIONS', url: 'https://und.edu/admissions/index.html' },
    { name: 'RESEARCH', url: 'https://und.edu/research/index.html' },
    { name: 'PROGRAMS', url: 'https://und.edu/programs/index.html' },
    { name: 'ABOUT', url: 'https://und.edu/about/index.html' },
];

const NormalMenuBar = ({ direction = 'row' }) => {
    const { language, currentLang } = useContext(LanguageContext);
    const navigationLinks = language?.nav || defaultnavigationLinks;
    const languageAttribute = currentLang || 'en';

    return (
        <nav>
            <div className="menuContainer"
                data-lang={languageAttribute}
                style={{ flexDirection: direction }}>
                {navigationLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        className="menuLink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default NormalMenuBar;
