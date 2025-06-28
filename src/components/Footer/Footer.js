import { useContext } from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import defaultLanguage from '../LanguageConvertor/Languages/en.json';
import { LanguageContext } from '../LanguageConvertor/LanguageContext';
import style from './Footer.module.css';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const lang = language ?? defaultLanguage;

  return (
    <Box
      id="footer-contains"
      component="footer"
      className={style.footerContainer}
      role="footerinfo"
      aria-label="University social media campign footer"
    >
      <Container maxWidth='lg'>
        <Box
          className={style.footerInner}
        >
          {/* Call-to-Action */}
          <Box>
            <Typography
              className={style.footerText}
              variant='body1'
            >
              {lang.footerContians.title}{" "}
              <Link
                className={style.footerLink}
                href="https://und.edu/social-media"
                aria-label="Visit University of North Dakota social media page"
                target="_blank"
                rel="noopener noreferrer"
              >
                und.edu/social-media
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
