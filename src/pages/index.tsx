import Head from 'next/head';
import { LoginScreen } from '@/components/login-screen/login-screen';
import { useSession } from 'next-auth/react';
import { HomeScreen } from '@/components/home-screen/home-screen';
import { LoadingOverlay } from '@mantine/core';

export default function Home() {
  const { status } = useSession();

  const renderContent = () => {
    if (status === 'loading') {
      return <LoadingOverlay visible />;
    } else if (status === 'authenticated') {
      return <HomeScreen />;
    } else {
      return <LoginScreen />;
    }
  };

  return (
    <>
      <Head>
        <title>devgetaway - explore</title>
        <meta
          name="description"
          content="devgetaway - workspace exchange for software developers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{renderContent()}</main>
    </>
  );
}
