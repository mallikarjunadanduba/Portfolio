// App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Api/ThemeProvider';
import LandingPage from './Components/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LandingPage />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
