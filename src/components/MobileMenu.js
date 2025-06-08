import React, { useState } from 'react';
import {
    IconButton,
    Box,
    Typography,
    Collapse,
    List,
    ListItem,
    ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
    { name: 'ACADEMICS', url: 'https://und.edu/academics/index.html' },
    { name: 'ADMISSIONS', url: 'https://und.edu/admissions/index.html' },
    { name: 'RESEARCH', url: 'https://und.edu/research/index.html' },
    { name: 'PROGRAMS', url: 'https://und.edu/programs/index.html' },
    { name: 'ABOUT', url: 'https://und.edu/about/index.html' },
];

export const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Box>
            {/* Toggle Button */}
            <IconButton
                onClick={handleToggle}
                sx={{
                    color: '#009A44',       // green color for icon
                    fontSize: 36,           // bigger icon size
                    width: 48,              // bigger clickable area width
                    height: 48,             // bigger clickable area height
                }}
            >
                {menuOpen ? (
                    <CloseIcon sx={{ fontSize: 36 }} />
                ) : (
                    <MenuIcon sx={{ fontSize: 36 }} />
                )}
            </IconButton>

            {/* Dropdown Menu */}
            <Collapse in={menuOpen} timeout="auto" unmountOnExit>
                <Box
                    sx={{
                        backgroundColor: '#000',       // black background
                        position: 'absolute',
                        top: '75px',                  // below the AppBar
                        left: 0,
                        width: '100%',
                        zIndex: 999,
                        borderTop: '1px solid #444',  // subtle border for black bg
                        color: '#fff',                // white text color inside dropdown
                        padding: '10px 0',
                        '& *': {
                            color: 'inherit',          // force white text color in children
                        },
                    }}
                >
                    <List>
                        {navLinks.map((link) => (
                            <ListItem
                                button
                                key={link.name}
                                component="a"
                                href={link.url}
                                onClick={() => setMenuOpen(false)}
                            >
                                <ListItemText
                                    primary={
                                        <Typography
                                            sx={{
                                                fontSize: '22px',
                                                fontWeight: 'bold',
                                                fontFamily: '"Trade Gothic","Oswald Medium","Oswald",Arial,sans-serif',
                                                letterSpacing: '0.72px',
                                                lineHeight: 1,
                                                textTransform: 'uppercase',
                                                padding: '0.6rem 3rem 0.6rem 25px',
                                                borderBottom: '2px solid rgba(255, 255, 255, 0.16)',
                                                '&:hover, &:focus': {
                                                    color: '#009A44',
                                                },
                                            }}
                                        >
                                            {link.name}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Collapse>
        </Box>
    );
};
