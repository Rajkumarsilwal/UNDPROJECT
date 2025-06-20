import React, { useContext } from 'react';
import { Container, Typography } from '@mui/material';
import '../App.css';
import { LanguageContext } from './LanguageConvertor/LanguageContext';
import defaultLanguage from './LanguageConvertor/Languages/es.json'


const PresidentEndorsement = () => {
  const { language } = useContext(LanguageContext);

  // Incase the language doesnt get loaded from LanguageContext
  const lang = language || defaultLanguage;

  if (!lang || !lang?.president) return null;

  return (
    <Container maxWidth='lg' sx={{ marginTop: 1 }}>
      <div className='president-endorsement'>

        {/* Title Section */}
        <Typography variant='h4' component='h1' gutterBottom>
          {lang.president.presidentsEndorsement}
          {/* President's Endorsement */}
        </Typography>

        {/* Message from the President */}
        <Typography variant='h6' component='h2' gutterBottom>
          {lang.president.messageFromPresident}
        </Typography>
        <Typography variant='body1' color='text.secondary' gutterBottom>
          {lang.president.messageContent}
          {/* We are thrilled to announce our unwavering support for the University's
          latest social media campaign. This initiative signifies a crucial
          opportunity for our community to unite, interact, and effect significant
          change. Have thoughts or feedback on our campaign goals? We'd love to
          hear from you! */}
        </Typography>

        {/* Section: Campaign Goals */}
        <Typography variant='h6' component='h2' gutterBottom>
          {lang.president.campaignGoals}
          {/* Campaign Goals */}
        </Typography>

        {/* Goal 1 */}
        <Typography variant='h6' component='h3' gutterBottom>
          {lang.president.goal1Title}
          {/* Empowering Engagement */}
        </Typography>
        <Typography variant='body1' color='text.secondary' gutterBottom>
          {lang.president.goal1Content}
          {/* Our primary aim is to foster a vibrant online community where every voice
          is heard and valued. Through active participation and collaboration, we
          can amplify our collective impact and bring about positive change. */}
        </Typography>

        {/* Goal 2 */}
        <Typography variant='h6' component='h3' gutterBottom>
          {lang.president.goal2Title}
          {/* Promoting Diversity and Inclusion */}
        </Typography>
        <Typography variant='body1' color='text.secondary' gutterBottom>
          {lang.president.goal2Content}
          {/* Diversity is our strength, and inclusivity is our foundation. We strive
          to create an inclusive online space that celebrates diverse perspectives,
          cultures, and experiences. */}
        </Typography>

        {/* Goal 3 */}
        <Typography variant='h6' component='h3' gutterBottom>
          {lang.president.goal3Title}
          {/* Driving Innovation */}
        </Typography>
        <Typography variant='body1' color='text.secondary' gutterBottom>
          {lang.president.goal3Content}
          {/* Innovation drives progress, and social media is a powerful tool for
          sparking creativity and innovation. We encourage innovative thinking and
          bold ideas that push the boundaries of what's possible. */}
        </Typography>
      </div>
    </Container>
  );
};

export default PresidentEndorsement;


