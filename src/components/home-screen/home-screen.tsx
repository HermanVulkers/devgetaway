import { useSession } from 'next-auth/react';
import { useContext } from 'react';

import * as Styled from './home-screen.style';
import { Header } from '../common/header/header';
import UserContext from '@/context/user-context';
import { HomeMap } from './home-map/home-map';
import { RecentlyAdded } from './recently-added/recently-added';
import { BestRated } from './best-rated/best-rated';
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
      {/* <Styled.FeaturedDestinations>
        <RecentlyAdded />
        <BestRated />
      </Styled.FeaturedDestinations> */}
    </Styled.Container>
  );
};
