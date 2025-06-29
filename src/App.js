
import React, { useEffect } from 'react';
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
  const isDesktop = useMediaQuery('(min-width:1210px)');
  const isMobile = useMediaQuery('(max-width:1209px)');

  useEffect(() => {
    fetch('https://chatgptapi-8lgp.onrender.com/warmup').catch(() => { });
  }, []);

  return (
    <Box className="app-container" role="main">
      {/* Header */}
      <AppBar position="fixed" className="app-header" role="banner">
        <Container maxWidth="lg" disableGutters>
          <Toolbar className="app-header-toolbar">
            <Box className="app-logo-container">
              {isMobile && <MobileMenu />}
              <img
                src={logo}
                alt="University Logo"
                className="app-logo"
              />
            </Box>
            <LanguageSwitcher />
          </Toolbar>
        </Container>

        {isDesktop && (
          <Box className="app-desktop-nav-container" role="navigation" aria-label="Main Navigation">
            <Box className="app-desktop-nav-links">
              <NavigationLinks gap={19} />
            </Box>
          </Box>
        )}
      </AppBar>

      {/* Tagline Section */}
      <Box
        className={`app-tagline-section ${isDesktop ? 'desktop' : 'mobile'}`}
        aria-label="Site Tagline Section"
      >
        <TaglineSection />
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" className="app-main-content">
        <Box className="app-main-content-sections">
          <Box className="app-endorsement-section" aria-labelledby="president-endorsement-heading">
            <PresidentEndorsement />
          </Box>
          <Box className="app-about-president-section" aria-labelledby="about-president-heading">
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
