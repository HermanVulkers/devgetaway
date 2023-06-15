import { useSession } from 'next-auth/react';

import * as Styled from './home-screen.style';
import { Header } from '../common/header/header';
import { HomeMap } from './home-map/home-map';

import { Footer } from '../common/footer/footer';
import { Availability } from './availability/availability';
import { LoadingOverlay } from '@mantine/core';

export const HomeScreen = () => {
  const { status } = useSession();

  if (status === 'loading') {
    return <LoadingOverlay visible />;
  }

  return (
    <Styled.Container>
      <Header />
      <Availability />
      <HomeMap />
      <Footer />
    </Styled.Container>
  );
};
