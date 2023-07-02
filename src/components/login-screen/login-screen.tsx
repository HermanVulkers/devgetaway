import { LoadingOverlay } from '@mantine/core';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { Location } from '../../types/location';
import { Footer } from '../common/footer/footer';
import { HomeMap } from '../home-screen/home-map/home-map';
import { AppHighlights } from './app-highlights/app-highlights';
import { Header } from './header/header';
import * as Styled from './login-screen.style';

export const LoginScreen = () => {
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
      <AppHighlights />
      <HomeMap
        disableMarkerInteraction
        locations={locations}
        markersFetched={markersFetched}
      />

      <Footer />
    </Styled.Container>
  );
};
