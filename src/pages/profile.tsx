import { LoginScreen } from '@/components/login-screen/login-screen';
import { ProfileScreen } from '@/components/profile-screen/profile-screen';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

export default function Profile() {
  const { status } = useSession();

  const renderContent = () => {
    if (status === 'loading') {
      return <div>Loading...</div>;
    } else if (status === 'authenticated') {
      return <ProfileScreen />;
    } else {
      return <LoginScreen />;
    }
  };

  return (
    <>
      <Head>
        <title>devgetaway - profile</title>
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
