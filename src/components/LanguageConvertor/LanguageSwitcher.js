// import React, { useState } from 'react';
// import { Button, Menu, MenuItem } from '@mui/material';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { useTranslation } from 'react-i18next';

// const LanguageSwitcher = () => {
//     const { i18n } = useTranslation();
//     const [anchorEl, setAnchorEl] = useState(null);

//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = (lang) => {
//         setAnchorEl(null);
//         if (lang) {
//             i18n.changeLanguage(lang);
//         }
//     };

//     return (
//         <>
//             <Button onClick={handleClick} endIcon={<ArrowDropDownIcon />} color="inherit">
//                 Language
//             </Button>

//             <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose(null)}>
//                 <MenuItem onClick={() => handleClose('en')}>English</MenuItem>
//                 <MenuItem onClick={() => handleClose('es')}>Español</MenuItem>
//             </Menu>
//         </>
//     );
// };
import React, { useState } from 'react';
import downArrow from '../../downarrow_image.svg';

const languages = [
    { value: 'en', label: 'English', flag: '🇺🇸' },
    { value: 'es', label: 'Español', flag: '🇪🇸' },
];

export default function LanguageSwitcher() {
    const [currentLang, setCurrentLang] = useState('en');
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value) => {
        setCurrentLang(value);
        setIsOpen(false);
    };

    const currentLabel = languages.find(lang => lang.value === currentLang);

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '125px',
                    height: '40px',
                    backgroundColor: '#000',
                    color: '#fff',
                    border: '1px solid #009A44',
                    borderRadius: '10px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 10px',
                }}
            >
                <span>{currentLabel.flag} {currentLabel.label}</span>
                <span style={{ fontSize: '18px' }}>{isOpen ? 'X' : '▾'}</span>
            </button>

            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '45px',
                        backgroundColor: '#000',
                        border: '1px solid #009A44',
                        borderRadius: '10px',
                        width: '125px',
                        zIndex: 999,
                    }}
                >
                    {languages.map(lang => (
                        <div
                            key={lang.value}
                            onClick={() => handleSelect(lang.value)}
                            style={{
                                padding: '10px',
                                color: '#fff',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            {lang.flag} {lang.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
