import React from 'react';
import { Box, Link } from '@mui/material';

const navigationLinks = [
  { name: 'ACADEMICS', url: 'https://und.edu/academics/index.html' },
  { name: 'ADMISSIONS', url: 'https://und.edu/admissions/index.html' },
  { name: 'RESEARCH', url: 'https://und.edu/research/index.html' },
  { name: 'PROGRAMS', url: 'https://und.edu/programs/index.html' },
  { name: 'ABOUT', url: 'https://und.edu/about/index.html' },
];

export const NavigationLinks = ({ direction = 'row', gap = 5 }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: direction,
        flexWrap: 'wrap', // Allows wrapping on smaller screens
        justifyContent: 'center', // Centers links
        gap: { xs: 2, sm: 4, md: gap }, // Responsive gap
        padding: '10px', // Adds some padding for better spacing
      }}
    >
      {navigationLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          underline="none" // Removes default underline
          sx={{
            color: '#000000', // Default text color
            fontWeight: 'bold',
            fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' }, // Responsive font size
            transition: 'transform 0.2s ease-in-out, color 0.2s ease', // Smooth animation
            '&:hover': {
              transform: 'scale(1.2)', // Enlarge individual element on hover
              color: '#008000', // Change text color to green on hover
            },
          }}
        >
          {link.name}
        </Link>
      ))}
    </Box>
  );
};
