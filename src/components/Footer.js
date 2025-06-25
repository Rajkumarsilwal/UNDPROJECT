import React, { useContext } from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import '../App.css';
import defaultLanguage from './LanguageConvertor/Languages/en.json'
import { LanguageContext } from './LanguageConvertor/LanguageContext';

const Footer = () => {

  const { language } = useContext(LanguageContext);
  const lang = language || defaultLanguage;

  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: 'black',
        color: 'white',
        py: 2.5, // Default padding
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          {/* Call-to-Action */}
          <Box>
            <Typography
              variant='body1'
              align='center'
              sx={{
                fontSize: 'clamp(8px, 4.3vw, 19.2px)',
                fontWeight: 'bold',
                textAlign: 'left',
              }}
            >
              {lang.footerContians.title}{" "}
              <Link
                href='https://und.edu/social-media'
                color='inherit'
                underline='hover'
                sx={{
                  fontWeight: 'bold',
                  fontSize: 'clamp(8px, 4.3vw, 19.2px)',
                  '&:hover': {
                    color: '#009A44 ',
                  },
                }}
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
