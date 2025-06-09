import React from 'react';
import { Box, Link } from '@mui/material';

const navigationLinks = [
  { name: 'ACADEMICS', url: 'https://und.edu/academics/index.html' },
  { name: 'ADMISSIONS', url: 'https://und.edu/admissions/index.html' },
  { name: 'RESEARCH', url: 'https://und.edu/research/index.html' },
  { name: 'PROGRAMS', url: 'https://und.edu/programs/index.html' },
  { name: 'ABOUT', url: 'https://und.edu/about/index.html' },
];

const NavigationLinks = ({ direction = 'row', gap = 5 }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: direction,
        // Wrap for widths less than 1150px to avoid overflow, nowrap for larger screens
        flexWrap: { xs: 'wrap', md: 'wrap', lg: 'nowrap' },
        justifyContent: 'center',
        gap: { xs: 3, sm: 5, md: 6, lg: gap },
        padding: '10px',
        overflowX: { xs: 'visible', md: 'visible', lg: 'auto' },
        whiteSpace: 'nowrap', // prevent breaking of link text
      }}
    >
      {navigationLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          underline="none"
          sx={{
            color: '#000000',
            fontWeight: 'bold',
            fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem', lg: '1.2rem' },
            transition: 'transform 0.2s ease-in-out, color 0.2s ease',
            '&:hover': {
              transform: 'scale(1.2)',
              color: '#009A44',
            },
            whiteSpace: 'nowrap',
          }}
        >
          {link.name}
        </Link>
      ))}
    </Box>
  );
};
export default NavigationLinks;