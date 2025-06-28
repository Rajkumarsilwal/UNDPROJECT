import { useState, useEffect } from 'react';
import './Contrast.css';

export default function SoftContrastToogle() {
    const [isSoftContrast, setSoftContrast] = useState(false);

    useEffect(() => {
        if (isSoftContrast) {
            document.body.classList.add('kindle-mode');
        } else {
            document.body.classList.remove('kindle-mode');
        }
    }, [isSoftContrast]);

    const defaultSoftContrast = () => {
        setSoftContrast(prev => !prev);
    };

    return {
        isSoftContrast,
        defaultSoftContrast,
    };
}