import GetawayScreen from '@/components/getaway-screen/getaway-screen';
import { LoginScreen } from '@/components/login-screen/login-screen';
import { Loader } from '@mantine/core';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Getaway() {
  const { status } = useSession();
  const router = useRouter();
  const { homeId } = router.query;
  const [home, setHome] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  async function getHomeById() {
    setIsFetching(true);

    const response = await fetch(`/api/get-home-by-id?homeId=${homeId}`);
    const data = await response.json();

    setHome(data);
    setIsFetching(false);
  }

  useEffect(() => {
    if (homeId) {
      getHomeById();
    }
  }, [homeId]);

  const renderContent = () => {
    if (status === 'loading' || isFetching) {
      return <Loader />;
    } else if (status === 'authenticated') {
      return <GetawayScreen home={home} />;
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
