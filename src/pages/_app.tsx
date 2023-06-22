import { GlobalStyle } from '@/styles/globalStyle';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '@/context/user-context';
import { MantineProvider } from '@mantine/core';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <UserProvider>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: 'light',
              fontSizes: {
                xs: '0.7rem',
                sm: '0.85rem',
                md: '1rem',
                lg: '1.1rem',
                xl: '1.3rem',
              },
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            <GlobalStyle />
            <Component {...pageProps} />
            <Analytics />
          </MantineProvider>
        </UserProvider>
      </SessionProvider>
    </>
  );
}
