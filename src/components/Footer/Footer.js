import { Box, Container, Typography, Link, Grid, Button } from '@mui/material';
import { Facebook, LinkedIn, Instagram, YouTube, X as XIcon } from '@mui/icons-material';
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
        <Box className={style.ctaSection}>
          <Box>
            <Typography variant="h5" className={style.ctaHeading}>
              {lang.footerContians.title}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="success"
              href="https://und.edu/social-media/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit University of North Dakota social media page"
              className={style.ctaButton}
            >
              und.edu/social-media
            </Button>
          </Box>
        </Box>

        {/* Footer Content 'UND'*/}
        <Grid container spacing={4} mt={4} >
          <Grid item xs={12} sm={6} md={3}
            className={style.footerItem}
            component="Section"
            aria-labelledby="footer-und-heading"
          >
            <Typography
              variant="h6"
              gutterBottom
              id="footer-und-heading"
            >
              {/* {UND} */}
              {lang.footerContians.title1}
            </Typography>
            <Typography
              variant="h7"
            >
              {lang.footerContians.subTitle1[0]}
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}
            className={style.footerItem}
            component="section"
            aria-labelledby="footer-quick-links"
          >
            <Typography
              variant="h6"
              gutterBottom
              id="footer-quick-links"
            >
              {/* Quick Links */}
              {lang.footerContians.links}
            </Typography>
            <ul className={style.linkList}>
              {lang.nav.map(({ nameSmall, url }) => (
                <li key={url}>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Quick Links: $(nameSmall)`}
                  >
                    {nameSmall}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={2}
            className={style.footerItem}
            component="section"
            aria-labelledby="footer-company-heading"
          >
            <Typography
              variant="h6"
              gutterBottom
              id="footer-company-heading"
            >
              {/* Company */}
              {lang.footerContians.title2}
            </Typography>
            <ul className={style.linkList}>
              {lang.footerContians.subTitle2.map(({ topic2, url }) => (
                <li key={url}>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ari-label={`Company Link: ${topic2}`}
                  >
                    {topic2}
                  </Link>
                </li>
              )
              )}
            </ul>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md={2}
            className={style.footerItem}
            component="section"
            aria-labelledby="footer-legal-heading"
          >
            <Typography
              variant="h6"
              gutterBottom
              id="footer-legal-heading"
            >
              {lang.footerContians.title3}
            </Typography>

            <ul className={style.linkList}>
              {lang.footerContians.subTitle3.map(({ topic3, url }) => (
                <li key={url}>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Legal Link: ${topic3}`}
                  >
                    {topic3}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          {/* Follow Us */}
          <Grid item xs={12} sm={6} md={3}
            className={style.footerItem}
            component="section"
            aria-labelledby="footer-social-heading"
          >
            <Typography
              variant="h6"
              gutterBottom
              id="footer-social-heading"
            >
              {lang.footerContians.title4}
            </Typography>

            <Box className={style.socialIcons}
              role="navigation"
              aria-label="Social media links"
            >
              <Link
                href="https://www.instagram.com/uofnorthdakota/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit UND on Instagram"
              >
                <Instagram />
              </Link>

              <Link
                href="http://facebook.com/UofNorthDakota/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit UND on Facebook"
              >
                <Facebook />
              </Link>

              <Link
                href="https://www.linkedin.com/school/uofnorthdakota/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit UND on LinkedIn"
              >
                <LinkedIn />
              </Link>

              <Link
                href="https://www.youtube.com/user/UofNorthDakota/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit UND on YouTube"
              >
                <YouTube />
              </Link>

              <Link
                href="https://x.com/UofNorthDakota/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit UND on X (formerly Twitter)"
              >
                <XIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
