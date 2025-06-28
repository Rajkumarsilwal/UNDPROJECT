import { useContext } from 'react';
import { Container, Typography } from '@mui/material';
import '../App.css';
import { LanguageContext } from './LanguageConvertor/LanguageContext';
import defaultLanguage from './LanguageConvertor/Languages/es.json';


const PresidentEndorsement = () => {
  const { language } = useContext(LanguageContext);
  const lang = language || defaultLanguage;
  if (!lang || !lang?.president) return null;

  return (
    <Container
      maxWidth="lg"
      sx={{ marginTop: 1 }}
      component="section"
      id="president-endorsement-section"
      aria-labelledby="president-endorsement-heading"
    >
      <div className="president-endorsement">

        {/* Title Section */}
        <Typography variant='h4' component='h1' gutterBottom>
          {lang.president.presidentsEndorsement}
        </Typography>

        {/* Message from the President */}
        <Typography variant='h6' component='h2' gutterBottom>
          {lang.president.messageFromPresident}
        </Typography>

        {/* Message Contains*/}
        <Typography variant='body1' gutterBottom>
          {lang.president.messageContent}
        </Typography>

        {/* Section: Campaign Goals */}
        <Typography variant='h6' component='h2' gutterBottom>
          {lang.president.campaignGoals}
        </Typography>

        {/* Goal 1 */}
        <Typography variant='h6' component='h3' gutterBottom>
          {lang.president.goal1Title}
        </Typography>

        {/* Goal 1 contains*/}
        <Typography variant='body1' gutterBottom>
          {lang.president.goal1Content}
        </Typography>

        {/* Goal 2 */}
        <Typography variant='h6' component='h3' gutterBottom>
          {lang.president.goal2Title}
        </Typography>

        {/* Goal 2 Contains */}
        <Typography variant='body1' gutterBottom>
          {lang.president.goal2Content}
        </Typography>

        {/* Goal 3 */}
        <Typography variant='h6' component='h3' gutterBottom>
          {lang.president.goal3Title}
        </Typography>

        {/* Goal 3 Contains*/}
        <Typography variant='body1' gutterBottom>
          {lang.president.goal3Content}
        </Typography>

      </div>
    </Container>
  );
};

export default PresidentEndorsement;


