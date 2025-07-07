import { useCallback } from 'react';

const selectors = [
    '#headTitleTagline',
    '#president-endorsement-section',
    '#about-president',
    '#post-list',
    '#search-posts-label',
    '#search-posts',
    '#footer-und-heading',
    '#footer-quick-links',
    '#footer-company-heading',
    '#footer-legal-heading',
    '#footer-social-heading',
    '.Footer_footerRoot__y8cjJ h5',
    '.Footer_footerRoot__y8cjJ',
    '.Footer_socialIcons__JZqJ0 svg',
    '.AboutPresident_aboutPresidentTitle__Egmzh',
    '.AboutPresident_aboutPresidentText__Ii7zM',
    '.president-endorsement p',
    '.president-endorsement h4',
    '.president-endorsement h3',
    '.president-endorsement h2',
    '.mobile-menu-link-text',
    '.css-2ulfj5-MuiTypography-root', // Fot postcard name
    '.css-ol7wxs-MuiTypography-root', // For postcard Location, Likes and Reposts
    '.css-1coh8cf-MuiTypography-root',
    '.css-177ip5v-MuiTypography-root',
    '.css-hav9kw-MuiTypography-root',
    '.css-ol7wxs-MuiTypography-root',
    '.css-ahj2mt-MuiTypography-root',
    '.css-1vw6mcs-MuiTypography-root',
    '.css-vtncvo-MuiTypography-root',
    '.BbRtadZawZJ1QXQAlzRG h5', // Footer share your thoughts
    '.BbRtadZawZJ1QXQAlzRG h6', // Footer Links Heading
    '.J_yBuGNdyAbTehoIEu1Z a', // Footer Links
    '.css-37jdci-MuiTypography-root', // Footer UND contains
    '.dfqj7miLZJmg3aczuuzL svg', // Footer social media logo
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
