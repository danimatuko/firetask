import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme, Textarea } from '@chakra-ui/react';
import FirestoreProvider from './context/FireStoreContext';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,

  styles: {
    global: {
      body: {
        bg: '#f4f4f4',
      },
      'input, textarea, select': {
        color: 'gray.500',
      },
    },
  },
  colors: {
    brand: {
      50: '#ecefff',
      100: '#cbceeb',
      200: '#a9aed6',
      300: '#888ec5',
      400: '#666db3',
      500: '#4d5499',
      600: '#3c4178',
      700: '#2a2f57',
      800: '#181c37',
      900: '#080819',
    },
    light: '#f4f4f4',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider
      theme={theme}
      resetCSS>
      <AuthContextProvider>
        <FirestoreProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FirestoreProvider>
      </AuthContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
