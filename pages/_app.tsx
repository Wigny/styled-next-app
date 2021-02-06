import '../styles/globals.css';
import '../styles/tailwind.css';

import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App;
