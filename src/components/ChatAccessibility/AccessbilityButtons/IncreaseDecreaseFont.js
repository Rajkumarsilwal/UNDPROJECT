import { useCallback } from 'react';

const selectors = [
    '#headTitleTagline',
    '#president-endorsement-section',
    '#about-president',
    '#post-list',
    '#search-posts-label',
    '#search-posts',
    '.AboutPresident_aboutPresidentTitle__Egmzh',
    '.AboutPresident_aboutPresidentText__Ii7zM',
    '.president-endorsement p',
    '.president-endorsement h4',
    '.president-endorsement h3',
    '.president-endorsement h2',
    '.mobile-menu-link-text',
    '.post-card *',                 // post-card
    '.post-card-box-contains *',    // post-card
    '#footer-content *', // Footer content
    '.HfPsxrwCahDLwEBFT6ep', // About The President
    '.sisaFlQI54dN0AzIeSSF', // Abt the president - Content
    '.navLink'
];

function getFontSize(el) {
    const style = window.getComputedStyle(el);
    return parseFloat(style.fontSize) || 16;
}

export default function useFontScaling(step = 2, min = 16, max = 36) {
    const increaseFont = useCallback(() => {
        const seen = new Set();
        selectors.forEach((sel) => {
            document.querySelectorAll(sel).forEach((el) => {
                if (seen.has(el)) return;
                seen.add(el);
                const currentSize = getFontSize(el);
                const newSize = Math.min(currentSize + step, max);
                el.style.setProperty('font-size', `${newSize}px`, 'important');
            });
        });
    }, [step, max]);

    const decreaseFont = useCallback(() => {
        const seen = new Set();
        selectors.forEach((sel) => {
            document.querySelectorAll(sel).forEach((el) => {
                if (seen.has(el)) return;
                seen.add(el);
                const currentSize = getFontSize(el);
                const newSize = Math.max(currentSize - step, min);
                el.style.setProperty('font-size', `${newSize}px`, 'important');
            });
        });
    }, [step, min]);

    return { increaseFont, decreaseFont };
}
