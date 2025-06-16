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
import './MobileMenu.css';

const navLinks = [
    { name: 'ACADEMICS', url: 'https://und.edu/academics/index.html' },
    { name: 'ADMISSIONS', url: 'https://und.edu/admissions/index.html' },
    { name: 'RESEARCH', url: 'https://und.edu/research/index.html' },
    { name: 'PROGRAMS', url: 'https://und.edu/programs/index.html' },
    { name: 'ABOUT', url: 'https://und.edu/about/index.html' },
];

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Box>
            {/* Toggle Button */}
            <IconButton
                onClick={handleToggle}
                className="mobile-menu-button"
            >
                {menuOpen ? (
                    <CloseIcon className="mobile-menu-close-icon" />
                ) : (
                    <MenuIcon className="mobile-menu-open-icon" />
                )}
            </IconButton>

            {/* Dropdown Menu */}
            <Collapse in={menuOpen} timeout="auto" unmountOnExit>
                <Box className="mobile-menu-dropdown">
                    <List>
                        {navLinks.map((link) => (
                            <ListItem
                                button
                                key={link.name}
                                component="a"
                                href={link.url}
                                onClick={() => setMenuOpen(false)}
                                className="mobile-menu-list-item"
                            >
                                <ListItemText
                                    primary={
                                        <Typography className="mobile-menu-link-text">
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

export default MobileMenu;