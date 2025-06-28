import { useState, useEffect } from 'react';

export default function useFontScaling(selector = '#reading-area', step = 1, min = 10, max = 32) {
    const [fontSize, setFontSize] = useState(16); // Default font size

    useEffect(() => {
        const el = document.querySelector(selector);
        if (el) {
            el.style.fontSize = `${fontSize}px`;
        }
    }, [fontSize, selector]);

    const increaseFont = () => {
        setFontSize((prev) => Math.min(prev + step, max));
    };

    const decreaseFont = () => {
        setFontSize((prev) => Math.max(prev - step, min));
    };

    return { fontSize, increaseFont, decreaseFont };
}