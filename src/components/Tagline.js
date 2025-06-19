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
                fontWeight: 'bold',
                color: 'black',
                fontFamily: 'arial',
                fontSize: { xs: '2.8rem', sm: '3rem', md: '3.5rem' },
            }}
        >
            &quot; {tagline} &quot;
        </Typography>
    );
};

export default TaglineSection;
