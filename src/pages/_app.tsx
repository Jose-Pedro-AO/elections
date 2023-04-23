import { DefaultLayout, LoginLayout } from '@/components/Layout';
import '@/styles/globals.css';
import { GlobalStyle } from '../styles/globalStyles';
import type { AppProps } from 'next/app';

import AuthProvider from '../contexts/auth';
// import PrivateRoute from '../components/Layout/protectedRoute';

interface ComponentWithLayout {
  layout?: React.ComponentType;
}

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as ComponentWithLayout)?.layout || DefaultLayout;

  return (
    <>
      {/* <AuthProvider> */}
      <GlobalStyle />
      <Layout>
        {/* <PrivateRoute> */}
        <Component {...pageProps} />
        {/* </PrivateRoute> */}
      </Layout>
      {/* </AuthProvider> */}
    </>
  );
}
