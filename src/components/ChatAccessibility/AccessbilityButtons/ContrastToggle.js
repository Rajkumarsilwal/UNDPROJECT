import { useState, useEffect } from 'react';
import './Contrast.css';

const contrastTypes = {
    high: 'high-contrast',
    soft: 'kindle-mode',
};

export default function useContrastToggle() {
    const [activeMode, setActiveMode] = useState(null);

    useEffect(() => {
        Object.values(contrastTypes).forEach((contrast) =>
            document.body.classList.remove(contrast)
        );

        if (activeMode && contrastTypes[activeMode]) {
            document.body.classList.add(contrastTypes[activeMode]);
        }

        return () => {
            Object.values(contrastTypes).forEach((contrast) =>
                document.body.classList.remove(contrast)
            );
        };
    }, [activeMode]);

    const toggleHighContrast = () => {
        setActiveMode((prev) => (prev === 'high' ? null : 'high'));
    };

    const toggleSoftContrast = () => {
        setActiveMode((prev) => (prev === 'soft' ? null : 'soft'));
    };

    return {
        isHighContrast: activeMode === 'high',
        isSoftContrast: activeMode === 'soft',
        toggleHighContrast,
        toggleSoftContrast,
    };
}
