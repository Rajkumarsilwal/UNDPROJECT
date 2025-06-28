import { useState, useEffect } from 'react';

export default function useFontScaling(selector = 'body', step = 1, min = 10, max = 32) {
    // Initialize font size (in px)
    const [fontSize, setFontSize] = useState(() => {
        // Try to read current font size from the element or fallback
        const el = document.querySelector(selector);
        if (!el) return 16; // default font size

        const style = window.getComputedStyle(el);
        const size = parseFloat(style.fontSize);
        return size || 16;
    });

    // Apply font size to the element
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
