import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  useMediaQuery,
} from '@mui/material';
import './App.css';
import logo from './logo.svg';
import PresidentEndorsement from './components/PresidentEndorsement';
import AboutPresident from './components/AboutPresident/AboutPresident';
import Footer from './components/Footer/Footer';
import PostList from './components/PostList';
import NavigationLinks from './components/Navbar/NormalMenu/NormalMenuBar';
import MobileMenu from './components/Navbar/MobileMenu/MobileMenu';
import LanguageSwitcher from './components/LanguageConvertor/LanguageSwitcher/LanguageSwitcher';
import ChatAccessibilityButton from './components/ChatAccessibility/ChatAccessibilityBar';
import TaglineSection from './components/Tagline/Tagline';



function App() {
  // Custom media queries for breakpoint 1210px
  const isDesktop = useMediaQuery('(min-width:1210px)');
  const isMobile = useMediaQuery('(max-width:1209px)');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Header */}
      <AppBar
        position="fixed" // For fixed 
        sx={{
          backgroundColor: 'black',
          zIndex: 1300, // keep it above other elements like Chatbot
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '75px',
              px: 2,
            }}
          >
            <Box className="UND-Logo-Gap-Size"
              sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              {isMobile && <MobileMenu />}
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  height: { xs: 32, sm: 45, md: 60 },
                  maxWidth: { xs: '80%', sm: '100%' },
                  width: 'auto',
                }}
              />
            </Box>
            <LanguageSwitcher />
          </Toolbar>

        </Container>

        {isDesktop && (
          <Box sx={{ backgroundColor: '#FFF', borderTop: '1px solid #333' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '85px',
              }}
            >
              <NavigationLinks gap={19} />
            </Box>
          </Box>
        )}
      </AppBar>

      {/* Tagline Section */}
      <Box sx={{ textAlign: 'center', mt: isDesktop ? '160px' : '90px', mb: 2 }}>
        <TaglineSection />
      </Box>


      {/* Main Content */}
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          marginTop: '20px',
          marginBottom: '40px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 5,
          }}
        >
          <Box sx={{ flex: 2 }}>
            <PresidentEndorsement />
          </Box>
          <Box sx={{ flex: 1 }}>
            <AboutPresident />
          </Box>
        </Box>

        <PostList />
      </Container>

      <ChatAccessibilityButton />
      <Footer />
    </Box>
  );
}

export default App;
