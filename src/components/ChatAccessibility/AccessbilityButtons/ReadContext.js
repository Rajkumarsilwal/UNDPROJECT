import { useState, useRef } from 'react';

export default function useReadAloud() {
    const [isReadingAloud, setIsReadingAloud] = useState(false);
    const utteranceRef = useRef(null);

    const toggleReadAloud = () => {
        if (isReadingAloud) {
            window.speechSynthesis.cancel();
            utteranceRef.current = null;
            setIsReadingAloud(false);
        } else {
            const text = document.body.innerText || '';
            if (!text) return;

            const u = new SpeechSynthesisUtterance(text);
            u.onend = () => {
                utteranceRef.current = null;
                setIsReadingAloud(false);
            };

            window.speechSynthesis.speak(u);
            utteranceRef.current = u;
            setIsReadingAloud(true);
        }
    };

    return { isReadingAloud, toggleReadAloud };
}
