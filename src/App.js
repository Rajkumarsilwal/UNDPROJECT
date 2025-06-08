// import React from 'react';
// import { AppBar, Toolbar, Container, Box, Typography } from '@mui/material';
// import './App.css';
// import logo from './logo.svg';
// import { PresidentEndorsement } from './components/PresidentEndorsement';
// import { AboutPresident } from './components/AboutPresident';
// import { NavigationLinks } from './components/NavigationLinks';
// import { Footer } from './components/Footer';
// import PostList from './components/PostList';
// import Chatbot from './components/chatbot';

// function App() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh', // Ensures the page takes the full viewport height
//       }}
//     >
//       {/* Header */}
//       <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
//         <Container maxWidth="lg" disableGutters>
//           <Toolbar
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               height: '75px',
//             }}
//           >
//             {/* UND Logo */}
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <img
//                 src={logo}
//                 alt="Logo"
//                 style={{
//                   maxWidth: '100%',
//                   width: 'auto',
//                   height: '45px',
//                 }}
//               />
//             </Box>
//           </Toolbar>
//         </Container>

//         {/* Navigation Toolbar */}
//         <Box sx={{ backgroundColor: '#FFF' }}>
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               height: '85px',
//             }}
//           >
//             <NavigationLinks gap={19} />
//           </Box>
//         </Box>
//       </AppBar>

//       {/* Tagline Section */}
//       <Box sx={{ textAlign: 'center', mt: 2, mb: 4 }}>
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: 'bold',
//             color: 'black',
//             fontFamily: 'arial',
//             fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
//           }}
//         >
//           "Leading With Purpose"
//         </Typography>
//       </Box>

//       {/* Main Content */}
//       <Container
//         maxWidth="lg"
//         sx={{
//           flex: 1,
//           marginTop: '20px',
//           marginBottom: '40px',
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             gap: 5,
//           }}
//         >
//           {/* Left Content Section */}
//           <Box sx={{ flex: 2 }}>
//             <PresidentEndorsement />
//           </Box>
//           {/* Right Content Section */}
//           <Box sx={{ flex: 1 }}>
//             <AboutPresident />
//           </Box>
//         </Box>
//         {/* Post List Section */}
//         <PostList />

//       </Container>
//       {/* Chatbot Floating Box */}
//       <Chatbot />
//       {/* Footer */}
//       <Footer />
//     </Box>
//   );
// }

// export default App;


// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Container,
//   Box,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import './App.css';
// import logo from './logo.svg';
// import { PresidentEndorsement } from './components/PresidentEndorsement';
// import { AboutPresident } from './components/AboutPresident';
// import { NavigationLinks } from './components/NavigationLinks';
// import { MobileMenu } from './components/MobileMenu';
// import { Footer } from './components/Footer';
// import PostList from './components/PostList';
// import Chatbot from './components/chatbot';

// function App() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh',
//       }}
//     >
//       {/* Header */}
//       <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
//         <Container maxWidth="lg" disableGutters>
//           <Toolbar
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               height: '75px',
//               px: 2,
//             }}
//           >
//             <Box
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 2,
//               }}
//             >
//               {/* Hamburger on Mobile */}
//               {isMobile && <MobileMenu />}

//               {/* UND Logo */}
//               <img
//                 src={logo}
//                 alt="Logo"
//                 style={{
//                   maxWidth: '100%',
//                   width: 'auto',
//                   height: '45px',
//                 }}
//               />
//             </Box>
//           </Toolbar>
//         </Container>

//         {/* Desktop Navigation Links */}
//         {!isMobile && (
//           <Box sx={{ backgroundColor: '#FFF' }}>
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 height: '85px',
//               }}
//             >
//               <NavigationLinks gap={19} />
//             </Box>
//           </Box>
//         )}
//       </AppBar>

//       {/* Tagline Section */}
//       <Box sx={{ textAlign: 'center', mt: 2, mb: 4 }}>
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: 'bold',
//             color: 'black',
//             fontFamily: 'arial',
//             fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
//           }}
//         >
//           "Leading With Purpose"
//         </Typography>
//       </Box>

//       {/* Main Content */}
//       <Container
//         maxWidth="lg"
//         sx={{
//           flex: 1,
//           marginTop: '20px',
//           marginBottom: '40px',
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             gap: 5,
//           }}
//         >
//           <Box sx={{ flex: 2 }}>
//             <PresidentEndorsement />
//           </Box>
//           <Box sx={{ flex: 1 }}>
//             <AboutPresident />
//           </Box>
//         </Box>

//         <PostList />
//       </Container>

//       <Chatbot />
//       <Footer />
//     </Box>
//   );
// }

// export default App;

// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Container,
//   Box,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import './App.css';
// import logo from './logo.svg';
// import { PresidentEndorsement } from './components/PresidentEndorsement';
// import { AboutPresident } from './components/AboutPresident';
// import { Footer } from './components/Footer';
// import PostList from './components/PostList';
// import Chatbot from './components/chatbot';
// import { MobileMenu } from './components/MobileMenu';
// import { NavigationLinks } from './components/NavigationLinks';

// function App() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh',
//       }}
//     >
//       {/* Header */}
//       <AppBar position="sticky" sx={{ backgroundColor: 'black', position: 'relative' }}>
//         <Container maxWidth="lg" disableGutters>
//           <Toolbar
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               height: '75px',
//               px: 2,
//             }}
//           >
//             <Box
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 2,
//               }}
//             >
//               {/* Show hamburger menu only on mobile */}
//               {isMobile && <MobileMenu />}

//               {/* UND Logo */}
//               <img
//                 src={logo}
//                 alt="Logo"
//                 style={{
//                   maxWidth: '100%',
//                   width: 'auto',
//                   height: '45px',
//                 }}
//               />
//             </Box>
//           </Toolbar>
//         </Container>

//         {/* Show desktop navigation links only on desktop */}
//         {!isMobile && (
//           <Box sx={{ backgroundColor: '#FFF' }}>
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 height: '85px',
//               }}
//             >
//               <NavigationLinks gap={19} />
//             </Box>
//           </Box>
//         )}
//       </AppBar>

//       {/* Tagline Section */}
//       <Box sx={{ textAlign: 'center', mt: 2, mb: 4 }}>
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: 'bold',
//             color: 'black',
//             fontFamily: 'arial',
//             fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
//           }}
//         >
//           "Leading With Purpose"
//         </Typography>
//       </Box>

//       {/* Main Content */}
//       <Container
//         maxWidth="lg"
//         sx={{
//           flex: 1,
//           marginTop: '20px',
//           marginBottom: '40px',
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             gap: 5,
//           }}
//         >
//           <Box sx={{ flex: 2 }}>
//             <PresidentEndorsement />
//           </Box>
//           <Box sx={{ flex: 1 }}>
//             <AboutPresident />
//           </Box>
//         </Box>

//         <PostList />
//       </Container>

//       <Chatbot />
//       <Footer />
//     </Box>
//   );
// }

// export default App;

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
import Chatbot from './components/chatbot';
import { MobileMenu } from './components/MobileMenu';
import { NavigationLinks } from './components/NavigationLinks';

function App() {
  // Custom media queries for breakpoint 1023px
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
      <AppBar position="sticky" sx={{ backgroundColor: 'black', position: 'relative' }}>
        <Container maxWidth="lg" disableGutters>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '75px',
              px: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              {/* Show hamburger menu only on mobile (≤1023px) */}
              {isMobile && <MobileMenu />}

              {/* UND Logo */}
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

        {/* Show desktop navigation links only on desktop (>1023px) */}
        {isDesktop && (
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
        )}
      </AppBar>

      {/* Tagline Section */}
      <Box sx={{ textAlign: 'center', mt: 2, mb: 4 }}>
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
