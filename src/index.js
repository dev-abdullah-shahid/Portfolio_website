import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TitleProvider from './context/TitleContext';

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <TitleProvider>
          <CssBaseline />
          <App />
        </TitleProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
