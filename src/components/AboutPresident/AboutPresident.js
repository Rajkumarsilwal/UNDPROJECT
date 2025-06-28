import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PresidentImage from '../../pImage.jpg';
import defaultLanguage from '../LanguageConvertor/Languages/en.json';
import { LanguageContext } from '../LanguageConvertor/LanguageContext';
import styles from './AboutPresident.module.css';

const AboutPresident = () => {
  const { language } = useContext(LanguageContext);
  const lang = language ?? defaultLanguage;

  return (
    <Box
      id="about-president"
      role="region"
      aria-label="About the President"
      className={styles.aboutPresidentContainer}
    >
      <LazyLoadImage
        src={PresidentImage}
        alt="President"
        effect="blur"
        className={styles.presidentImage}
      />
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        className={styles.aboutPresidentTitle}
      >
        {lang.aboutPresident.title1}
      </Typography>

      <Typography
        variant="body1"
        className={styles.aboutPresidentText}
      >
        {lang?.aboutPresident?.title1Content}
      </Typography>
    </Box>
  );
};

export default AboutPresident;