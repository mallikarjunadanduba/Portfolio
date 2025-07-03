import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Footer = ({ sectionRefs, handleNavClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navItems = ['About', 'Services', 'Resume', 'Skills', 'Projects'];

  const scrollToTop = () => {
    if (sectionRefs['Home']?.current) {
      sectionRefs['Home'].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#1E1E1E',
        color: '#fff',
        px: 1,
        py: 4,
        borderTop: '1px solid #fff',
      
      }}
    >
      {/* Scroll to Top Button - on top border center */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        }}
      >
        <IconButton
          onClick={scrollToTop}
          sx={{
            backgroundColor: '#FF0050',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#e60045',
            },
            borderRadius: '12px',
            p: 1.5,
          }}
        >
          <KeyboardDoubleArrowUpIcon />
        </IconButton>
      </Box>

      {/* Footer Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        {/* Left - Copyright */}
        <Typography variant="body2" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
          Copyright ©2024,&nbsp;
          <Box component="span" sx={{ color: '#FF0050', fontStyle: 'italic' }}>
            Mallikarjun Danduba.
          </Box>{' '}
          All Rights Reserved
        </Typography>

        {/* Right - Nav (Desktop Only) */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleNavClick(item)}
                sx={{
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '1rem',
                  '&:hover': {
                    color: '#FF0050',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Footer;
