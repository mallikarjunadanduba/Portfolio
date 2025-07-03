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
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false); // Close drawer after navigation
  };

  const navItems = ['Home', 'About', 'Services', 'Skills', 'Projects'];

  const drawer = (
    <Box onClick={() => setMobileOpen(false)} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(item)}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText
                primary={item}
                sx={{ color: activeItem === item ? '#FF0050' : '#B0B0B0' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: '#1E1E1E', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: 'cursive',
              fontWeight: 600,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              flexGrow: { xs: 1, sm: 0 },
            }}
          >
            <Box component="span" sx={{ color: '#FF0050', mr: 0.5 }}>Mallikarjun</Box>
            <Box component="span" sx={{ color: '#ccc' }}>Danduba</Box>
          </Typography>

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

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

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
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;

