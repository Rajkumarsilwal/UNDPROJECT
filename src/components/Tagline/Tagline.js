import { useContext } from 'react';
import { Typography } from '@mui/material';
import { LanguageContext } from '../LanguageConvertor/LanguageContext';
import defaultLanguage from '../LanguageConvertor/Languages/en.json';
import styles from './Tagline.module.css';


const TaglineSection = () => {
    const { language } = useContext(LanguageContext);
    const tagline = language?.tagLine?.TagLineTitle || defaultLanguage?.tagLine?.TagLineTitle;
    return (
        <Typography
            id="headTitleTagline"
            className={styles.headTitleTagline}
            role="heading"
            variant="h1"
        >
            &quot;{tagline}&quot;
        </Typography>
    );
};

export default TaglineSection;
