import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PresidentImage from '../pImage.jpg';
import defaultLanguage from './LanguageConvertor/Languages/en.json'
import { LanguageContext } from './LanguageConvertor/LanguageContext';

const AboutPresident = () => {
  const { language } = useContext(LanguageContext);

  // Incase the language doesnt get loaded from LanguageContext
  const lang = language || defaultLanguage;

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: '#f4f4f4',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      {/* Lazy loading of image for optimization */}
      <LazyLoadImage
        src={PresidentImage}
        alt='President'
        effect='blur'
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '0px',
          marginBottom: '16px',
          boxShadow: '2px 2px 10px rgba(226, 220, 220, 0.2)',
        }}
      />

      {/* Text Section */}
      <Typography variant='h4' gutterBottom>
        {/* About The President */}
        {lang.aboutPresident.title1}
      </Typography>
      <Typography
        variant='body1'
        color='text.secondary'
        gutterBottom
        sx={{
          textAlign: 'justify',
          marginBottom: 0,
        }}
      >
        {lang.aboutPresident.title1Content}
        {/* Dr. Andrew Armacost was chosen by the State Board of Higher Education to serve as the University of North Dakota’s UND 13th president. Armacost began his tenure as UND President on June 1, 2020. Armacost served as the Dean of the Faculty at the U.S. Air Force Academy. With more than 30 years on active duty and 20 years at the Academy, Armacost served in the rank of Brigadier General as the chief academic officer for this nationally renowned institution. */}
      </Typography>
    </Box>
  );
};

export default AboutPresident;
