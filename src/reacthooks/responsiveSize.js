import { useMediaQuery } from '@mui/material';

export default function useResponsive() {
    const isDesktop = useMediaQuery('(min-width:1210px)');
    const isMobile = useMediaQuery('(max-width:1209px)');

    return { isDesktop, isMobile };
}