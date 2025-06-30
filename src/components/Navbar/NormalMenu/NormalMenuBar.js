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
        <div className="navbarWrapper">
            <div className="navbarBox">
                <nav
                    className="navbar"
                    role="navigation"
                    aria-label="Main Site Navigation"
                >
                    <ul
                        className={`navList ${direction}`}
                        data-lang={languageAttribute}
                    >
                        {navigationLinks.map((link) => (
                            <li key={link.name} className={`navItem ${direction}`}>
                                <a
                                    className="navLink"
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NormalMenuBar;
