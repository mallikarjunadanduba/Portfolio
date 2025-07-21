import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ sectionRefs, activeItem }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (item) => {
    const ref = sectionRefs[item];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const navItems = ['Home', 'About', 'Services', 'Skills', 'Projects'];

  const drawer = (
    <Box
      sx={{
        textAlign: 'center',
        mt: 2,
        px: 2,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={() => handleNavClick(item)}>
              <ListItemText
                primary={item}
                sx={{
                  textAlign: 'center',
                  color: activeItem === item ? '#FF0050' : '#B0B0B0',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavClick('Contact Me')}>
            <ListItemText
              primary="Contact Me"
              sx={{ textAlign: 'center', color: '#FF0050' }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ width: '100%', position: 'fixed', top: 0, zIndex: 1300 }}>
      <AppBar
        component="nav"
        position="static"
        sx={{
          backgroundColor: '#1E1E1E',
          boxShadow: 'none',
          width: '100%',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left side: Brand */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: 'cursive',
              fontWeight: 600,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box component="span" sx={{ color: '#FF0050', mr: 0.5 }}>
              Mallikarjun
            </Box>
            <Box component="span" sx={{ color: '#ccc' }}>
              Danduba
            </Box>
          </Typography>

          {/* Right side for desktop */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleNavClick(item)}
                sx={{
                  color: activeItem === item ? '#FF0050' : '#B0B0B0',
                  fontWeight: activeItem === item ? 'bold' : 500,
                  textTransform: 'none',
                  fontSize: '1rem',
                }}
              >
                {item}
              </Button>
            ))}
            <Button
              onClick={() => handleNavClick('Contact Me')}
              variant="contained"
              sx={{
                backgroundColor: '#FF0050',
                color: '#fff',
                borderRadius: '8px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#e60045',
                },
              }}
            >
              Contact Me
            </Button>
          </Box>

          {/* Hamburger icon for mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            backgroundColor: '#1E1E1E',
            color: '#fff',
            width: '80vw',
            maxWidth: 280,
            boxSizing: 'border-box',
            overflowX: 'hidden',
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
