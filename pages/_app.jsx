import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
// import { BookProvider } from '../contexts/BookContext';

function MyApp({ Component, pageProps }) {
  return (
    // <BookProvider>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    // </BookProvider>
  );
}

export default MyApp;
