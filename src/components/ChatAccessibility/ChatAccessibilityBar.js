import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import ContrastIcon from '@mui/icons-material/Contrast';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import useMediaQuery from '@mui/material/useMediaQuery';
import Chatbot from '../ChatBox/ChatBot';



const ChatAccessibilityButton = () => {
    const [showChat, setShowChat] = useState(false);
    const [showAccessibilityActions, setShowAccessibilityActions] = useState(false);


    // Use isSmallScreen (700px) for icon-only toggle
    const isSmallScreen = useMediaQuery('(max-width:1209px)');

    const iconFontSize = isSmallScreen ? 'small' : 'medium';
    const buttonWidth = isSmallScreen ? 40 : 140;  // icon-only width vs full width
    const buttonPadding = isSmallScreen ? '8px' : '12px';
    const actionButtonSize = isSmallScreen ? 'small' : 'medium';
    const buttonHeight = 40;


    const accessibilityActions = [
        { icon: <TextIncreaseIcon />, name: 'Increase Font', onClick: ('Increase Font Size') },
        { icon: <TextDecreaseIcon />, name: 'Decrease Font', onClick: ('Decrease Font Size') },
        { icon: <ContrastIcon />, name: 'High Contrast', onClick: () => alert('High Contrast clicked') },
        { icon: <VolumeUpIcon />, name: 'Read Aloud', onClick: () => alert('Read Aloud clicked') },
        { icon: <RestartAltIcon />, name: 'Make Default', onClick: () => window.location.reload() },
    ];

    return (
        <>
            {/* Buttons container */}
            <Box
                className="chat-accessibility-container"
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 'max(1rem, calc((100vw - 1200px) / 1.98 + 1.5rem))',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1,
                    zIndex: 2000,
                }}
            >
                {/* Chat Button */}
                <Button
                    className="chat-toggle-button"
                    variant="contained"
                    color="success"
                    onClick={() => {
                        setShowChat((prev) => !prev);
                        setShowAccessibilityActions(false);
                    }}
                    startIcon={<ChatIcon fontSize={iconFontSize} />}
                    sx={{
                        width: buttonWidth,
                        padding: buttonPadding,
                        height: buttonHeight,
                        backgroundColor: '#009A44',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: showChat ? 1 : 0.5,
                        '&:hover': {
                            opacity: 1,
                        }
                    }}
                >
                    {!isSmallScreen && 'Chat'}
                </Button>

                {/* Accessibility Button + Action Buttons wrapper */}
                <Box sx={{ position: 'relative' }}>
                    <Button
                        className="accessibility-toogle-button"
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            setShowAccessibilityActions((prev) => !prev);
                            setShowChat(false);
                        }}
                        startIcon={<AccessibilityNewIcon fontSize={iconFontSize} />}
                        sx={{
                            width: buttonWidth,
                            padding: buttonPadding,
                            height: buttonHeight,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            opacity: showAccessibilityActions ? 1 : 0.5,
                            transition: 'opacity 0.3s ease',
                            '&:hover': {
                                opacity: 1,
                            },
                        }}
                    >
                        {!isSmallScreen && 'Accessibility'}
                    </Button>

                    {/* Accessibility action buttons vertical above Accessibility */}
                    {showAccessibilityActions && (
                        <Box
                            className="accessibility-toogle-buttons-container"
                            sx={{
                                position: 'absolute',
                                bottom: '100%',
                                right: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                                mb: 1,
                            }}
                        >
                            {accessibilityActions.map(({ icon, name, onClick }) => (
                                <Button
                                    className="accessibility-action-button"
                                    key={name}
                                    variant="outlined"
                                    startIcon={React.cloneElement(icon, { fontSize: iconFontSize })}
                                    size={actionButtonSize}
                                    onClick={() => {
                                        onClick();
                                        setShowAccessibilityActions(false);
                                    }}
                                    sx={{
                                        width: buttonWidth,
                                        padding: buttonPadding,
                                        height: buttonHeight,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: isSmallScreen ? 'center' : 'flex-start',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        fontSize: isSmallScreen ? '0.55rem' : '0.65rem',
                                        lineHeight: 1.2,
                                        backgroundColor: '#ccc',
                                        '&:hover': {
                                            backgroundColor: '#b3b3b3',
                                        },
                                    }}
                                >
                                    {!isSmallScreen && name}
                                </Button>
                            ))}
                        </Box>
                    )}
                </Box>
            </Box>

            {/* Chatbox UI */}
            {showChat && <Chatbot handleClose={() => setShowChat(false)} />}
        </>
    );
};

export default ChatAccessibilityButton;