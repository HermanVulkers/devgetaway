import { useSession } from 'next-auth/react';
import { useContext } from 'react';

import * as Styled from './home-screen.style';
import { Header } from '../common/header/header';
import UserContext from '@/context/user-context';
import { Discover } from './discover/discover';
import { RecentlyAdded } from './recently-added/recently-added';
import { BestRated } from './best-rated/best-rated';

export const HomeScreen = () => {
  const { status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <Styled.Container>
      <Header />
      <Discover />
      <Styled.FeaturedDestinations>
        <RecentlyAdded />
        <BestRated />
      </Styled.FeaturedDestinations>
    </Styled.Container>
  );
};
