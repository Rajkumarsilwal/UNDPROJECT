import React from 'react';
import { Container, Typography } from '@mui/material';
import '../App.css'; 

export const PresidentEndorsement = () => {
  return (
    <Container maxWidth='lg' sx={{ marginTop: 4 }}>
      <div className='president-endorsement'>
      
        {/* Title Section */}
        <Typography variant='h4' component='h1' gutterBottom>
          President's Endorsement
        </Typography>

        {/* Message from the President */}
        <Typography variant='h6' component='h2' gutterBottom>
          Message from the President
        </Typography>
        <Typography variant='body1' color='text.secondary' gutterBottom>
          We are thrilled to announce our unwavering support for the University's
          latest social media campaign. This initiative signifies a crucial
          opportunity for our community to unite, interact, and effect significant
          change. Have thoughts or feedback on our campaign goals? We'd love to
          hear from you!
        </Typography>

        {/* Section: Campaign Goals */}
        <Typography variant='h6' component='h2' gutterBottom>
          Campaign Goals
        </Typography>

        {/* Goal 1 */}
        <Typography variant='h6' component='h3' gutterBottom>
          Empowering Engagement
        </Typography>
        <Typography variant='body1' color='text.secondary' gutterBottom>
          Our primary aim is to foster a vibrant online community where every voice
          is heard and valued. Through active participation and collaboration, we
          can amplify our collective impact and bring about positive change.
        </Typography>

        {/* Goal 2 */}
        <Typography variant='h6' component='h3' gutterBottom>
          Promoting Diversity and Inclusion
        </Typography>
        <Typography variant='body1' color='text.secondary' gutterBottom>
          Diversity is our strength, and inclusivity is our foundation. We strive
          to create an inclusive online space that celebrates diverse perspectives,
          cultures, and experiences.
        </Typography>

        {/* Goal 3 */}
        <Typography variant='h6' component='h3' gutterBottom>
          Driving Innovation
        </Typography>
        <Typography variant='body1' color='text.secondary' gutterBottom>
          Innovation drives progress, and social media is a powerful tool for
          sparking creativity and innovation. We encourage innovative thinking and
          bold ideas that push the boundaries of what's possible.
        </Typography>
      </div>
    </Container>
  );
};
