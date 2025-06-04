import { BrowserRouter as Router } from 'react-router-dom';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Router>
      <Component {...pageProps} />
    </Router>
  );
}

export default MyApp; 