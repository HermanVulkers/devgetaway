import { LoadingOverlay } from '@mantine/core';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { Location } from '../../types/location';
import { Footer } from '../common/footer/footer';
import { Header } from '../common/header/header';
import { DateFilter } from './date-filter/date-filter';
import { HomeMap } from './home-map/home-map';
import * as Styled from './home-screen.style';

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
