import '../styles/globals.css';
import '../styles/tailwind.css';

import { AppProps } from 'next/app'
import { Layout } from '../components/Layout';
import { FC } from 'react';
import { AnimateSharedLayout } from 'framer-motion';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <AnimateSharedLayout>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AnimateSharedLayout>
)

export default App;
