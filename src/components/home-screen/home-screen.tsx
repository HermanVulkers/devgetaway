import { useSession } from 'next-auth/react';

import * as Styled from './home-screen.style';
import { Header } from '../common/header/header';
import { HomeMap } from './home-map/home-map';

import { Footer } from '../common/footer/footer';
import { LoadingOverlay } from '@mantine/core';
import { DateFilter } from './date-filter/date-filter';
import { useEffect, useState } from 'react';
import { Location } from '../../types/location';

export const HomeScreen = () => {
  const { status } = useSession();
  const [locations, setLocations] = useState<Location[]>([]);

  const [markersFetched, setMarkersFetched] = useState(false);

  useEffect(() => {
    fetch('/api/get-all-locations')
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
        setMarkersFetched(true);
      })
      .catch((error) => {
        console.log('An error occurred: ', error);
      });
  }, []);

  if (status === 'loading') {
    return <LoadingOverlay visible />;
  }

  return (
    <Styled.Container>
      <Header />
      <Styled.FilterBar>
        <DateFilter locations={locations} setLocations={setLocations} />
      </Styled.FilterBar>
      <HomeMap locations={locations} markersFetched={markersFetched} />
      <Footer />
    </Styled.Container>
  );
};
