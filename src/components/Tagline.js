import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { LanguageContext } from './LanguageConvertor/LanguageContext';
import defaultLanguage from './LanguageConvertor/Languages/en.json'


const TaglineSection = () => {
    const { language } = useContext(LanguageContext);
    const tagline = language?.tagLine?.TagLineTitle
        || defaultLanguage?.tagLine?.TagLineTitle;

    return (
        <Typography
            variant="h5"
            sx={{
                marginTop: '12px',
                fontWeight: 'bold',
                color: 'black',
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: { xs: '1.90rem', sm: '2.7rem', md: '3.5rem' },
            }}
        >
            &quot;{tagline}&quot;
        </Typography>
    );
};

export default TaglineSection;
