import { Box, Container, Typography, Link, Grid, Button } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Telegram, Instagram, YouTube } from '@mui/icons-material';
import { LanguageContext } from '../LanguageConvertor/LanguageContext';
import defaultLanguage from '../LanguageConvertor/Languages/en.json';
import style from './Footer.module.css';
import { useContext } from 'react';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const lang = language || defaultLanguage;
  console.log('lang value::', lang);

  return (
    <Box component="footer" className={style.footerRoot} role="contentinfo">
      <Container maxWidth="lg">
        {/* CTA Section */}
        <Box className={style.ctaSection}>
          <Box>
            <Typography variant="h5" className={style.ctaHeading}>
              {lang?.footerContians?.title}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="success"
              href="https://und.edu/social-media"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit University of North Dakota social media page"
              className={style.ctaButton} // optional for extra custom styles
            >
              und.edu/social-media
            </Button>
          </Box>
        </Box>

        {/* Footer Content */}
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>UND</Typography>
            <Typography variant="body2">© 2025 University of North Dakota</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul className={style.linkList}>
              {lang.nav.map(({ nameSmall, url }) => (
                <li key={url}>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  // className={style.footerLink}
                  >
                    {nameSmall}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>Company</Typography>
            <ul className={style.linkList}>
              {lang.footerContians.subTitle2.map(({ topic2, url }) => (
                <li key={url}>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {topic2}
                  </Link>
                </li>
              )
              )}
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>Legal</Typography>
            <ul className={style.linkList}>
              {lang.footerContians.subTitle3.map(({ topic3, url }) => (
                <li key={url}>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {topic3}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <Box className={style.socialIcons}>
              <Link href="#"><Facebook /></Link>
              <Link href="#"><Twitter /></Link>
              <Link href="#"><LinkedIn /></Link>
              <Link href="#"><Telegram /></Link>
              <Link href="#"><Instagram /></Link>
              <Link href="#"><YouTube /></Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
