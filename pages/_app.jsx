import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProvider } from '../contexts/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppProvider>
  );
}

export default MyApp;
