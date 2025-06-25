import { useState, useEffect } from 'react';

export default function useAccessibilityActions() {
    const [isReadingAloud, setIsReadingAloud] = useState(false);
    const [isHighContrast, setIsHighContrast] = useState(false);
    const [setUtterance] = useState(null);

    // Toggle high contrast CSS class on body
    useEffect(() => {
        if (isHighContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
    }, [isHighContrast]);

    const toggleHighContrast = () => {
        setIsHighContrast(prev => !prev);
    };

    const toggleReadAloud = () => {
        if (isReadingAloud) {
            window.speechSynthesis.cancel();
            setIsReadingAloud(false);
            setUtterance(null);
        } else {
            const textToRead = document.body.innerText;
            const newUtterance = new SpeechSynthesisUtterance(textToRead);

            newUtterance.onend = () => {
                setIsReadingAloud(false);
                setUtterance(null);
            };

            window.speechSynthesis.speak(newUtterance);
            setUtterance(newUtterance);
            setIsReadingAloud(true);
        }
    };

    return {
        isReadingAloud,
        isHighContrast,
        toggleReadAloud,
        toggleHighContrast,
    };
}