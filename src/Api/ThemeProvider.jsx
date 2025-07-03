import React from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: { fontFamily: 'Orbitron, sans-serif' },
    h2: { fontFamily: 'Orbitron, sans-serif' },
    h3: { fontFamily: 'Orbitron, sans-serif' },
    h4: { fontFamily: 'Orbitron, sans-serif' },
    h5: { fontFamily: 'Orbitron, sans-serif' },
    h6: { fontFamily: 'Orbitron, sans-serif' },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
