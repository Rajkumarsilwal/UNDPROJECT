import React from 'react';
import { AppBar, Toolbar, Container, Box, Typography } from '@mui/material';
import './App.css';
import logo from './logo.svg';
import SearchBar from './components/SearchBar';
import { PresidentEndorsement } from './components/PresidentEndorsement';
import { AboutPresident } from './components/AboutPresident';
import { NavigationLinks } from './components/NavigationLinks';
import { Footer } from './components/Footer';
import PostList from './components/PostList'; 

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures the page takes the full viewport height
      }}
    >
      {/* Header */}
      <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
        <Container maxWidth="lg" disableGutters>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '75px',
            }}
          >
            {/* UND Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            {/* Search Component */}
            <SearchBar />
          </Toolbar>
        </Container>

        {/* Navigation Toolbar */}
        <Box sx={{ backgroundColor: '#FFF' }}>
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
      </AppBar>

      {/* Tagline Section */}
      <Box sx={{ textAlign: 'center', mt: 2, mb: 4 }}> {/* Margin for spacing */}
        <Typography
          variant="h5" // Slightly larger font size
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
          flex: 1, // Makes the content fill the remaining space
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
          {/* Left Content Section */}
          <Box sx={{ flex: 2 }}>
            <PresidentEndorsement />
          </Box>
          {/* Right Content Section */}
          <Box sx={{ flex: 1 }}>
            <AboutPresident />
          </Box>
        </Box>
        {/* Post List Section */}
        <PostList />
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default App;
