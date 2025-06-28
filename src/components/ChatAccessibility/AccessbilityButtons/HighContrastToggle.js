import { useState, useEffect } from 'react';
import './Contrast.css';

export default function HighContrastToggle() {
    const [isHighContrast, setIsHighContrast] = useState(false);

    // Toggle high contrast CSS class on body
    useEffect(() => {
        if (isHighContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
    }, [isHighContrast]);

    const defaultContrast = () => {
        setIsHighContrast(prev => !prev);
    };


    return {
        isHighContrast,
        defaultContrast,
    };
}