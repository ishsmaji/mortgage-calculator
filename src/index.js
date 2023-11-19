import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<ThemeProvider theme={theme}>
<CssBaseline></CssBaseline>
<App />

</ThemeProvider>

</React.StrictMode>
);


