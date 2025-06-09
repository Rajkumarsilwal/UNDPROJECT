import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  useMediaQuery,
} from '@mui/material';
import './App.css';
import logo from './logo.svg';
import { PresidentEndorsement } from './components/PresidentEndorsement';
import { AboutPresident } from './components/AboutPresident';
import { Footer } from './components/Footer';
import PostList from './components/PostList';
// import Chatbot from './components/chatbot';
import NavigationLinks from './components/Navbar/NormalMenu/NormalMenuBar';
import MobileMenu from './components/Navbar/MobileMenu/MobileMenu';
import Chatbot from './components/ChatBox/ChatBot';
// import MobileMenu from './components/MobileMenu';
// import NavigationLinks from './components/NavigationLinks';



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
        position="fixed" // change from "sticky" to "fixed"
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {isMobile && <MobileMenu />}
              <img
                src={logo}
                alt="Logo"
                style={{
                  maxWidth: '100%',
                  width: 'auto',
                  height: '45px',
                }}
              />
            </Box>
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
      <Box sx={{ textAlign: 'center', mt: isDesktop ? '160px' : '90px', mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: 'black',
            fontFamily: 'arial',
            fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
          }}
        >
          "Leading With Purpose"
        </Typography>
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

      <Chatbot />
      <Footer />
    </Box>
  );
}

export default App;

