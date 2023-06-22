import { useSession } from 'next-auth/react';

import * as Styled from './home-screen.style';
import { Header } from '../common/header/header';
import { HomeMap } from './home-map/home-map';

import { Footer } from '../common/footer/footer';
import { DateSelector } from './date-selector/date-selector';
import { LoadingOverlay } from '@mantine/core';

export const HomeScreen = () => {
  const { status } = useSession();

  if (status === 'loading') {
    return <LoadingOverlay visible />;
  }

  return (
    <Styled.Container>
      <Header />
      <Styled.FilterBar>
        <DateSelector text="Filter by date" />
      </Styled.FilterBar>
      <HomeMap />
      <Footer />
    </Styled.Container>
  );
};
