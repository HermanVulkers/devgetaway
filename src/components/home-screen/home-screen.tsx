import { useSession } from 'next-auth/react';

import * as Styled from './home-screen.style';
import { Header } from '../common/header/header';
import { HomeMap } from './home-map/home-map';

import { Footer } from '../common/footer/footer';
import { AvailabilitySetter } from './availability-setter/availability-setter';
import { LoadingOverlay } from '@mantine/core';
import { DateFilter } from './date-filter/date-filter';

export const HomeScreen = () => {
  const { status } = useSession();

  if (status === 'loading') {
    return <LoadingOverlay visible />;
  }

  return (
    <Styled.Container>
      <Header />
      <Styled.FilterBar>
        <DateFilter />
      </Styled.FilterBar>
      <HomeMap />
      <Footer />
    </Styled.Container>
  );
};
