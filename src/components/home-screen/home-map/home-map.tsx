import * as Styled from './home-map.style';
import Map, { Marker, NavigationControl, Source } from 'react-map-gl';
import { useEffect, useMemo, useState } from 'react';

import { MapPin } from 'tabler-icons-react';

import { MapDrawer } from '../map-drawer/map-drawer';

import { Location } from '../../../types/location';

interface HomeMapProps {
  disableMarkerInteraction?: boolean;
  locations: Location[];
  markersFetched?: boolean;
}

export const HomeMap = ({
  locations,
  disableMarkerInteraction,
  markersFetched,
}: HomeMapProps) => {
  const [viewState, setViewState] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1,
  });
  const [drawerData, setDrawerData] = useState<{
    opened: boolean;
    data: Location | null;
  }>({ opened: false, data: null });

  useEffect(() => {
    fetch('https://freeipapi.com/api/json')
      .then((response) => response.json())
      .then((data) => {
        setViewState({
          latitude: data.latitude,
          longitude: data.longitude,
          zoom: 3,
        });
      })
      .catch((error) => console.log('An error occurred: ', error));
  }, []);

  return (
    <Styled.Container>
      <Styled.MapContainer>
        <MapDrawer drawerData={drawerData} setDrawerData={setDrawerData} />
        <Map
          {...viewState}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          minZoom={1}
          onClick={() => setDrawerData({ opened: false, data: null })}
          onMove={(e) => setViewState(e.viewState)}
          scrollZoom={false}
        >
          {locations.map((location) => {
            return (
              <Marker
                key={location.homeId}
                longitude={location.longitude}
                latitude={location.latitude}
                onClick={(event) => {
                  if (!disableMarkerInteraction) {
                    event.originalEvent.stopPropagation();
                    setDrawerData({ opened: true, data: location });
                  }
                }}
                anchor="bottom"
              >
                <Styled.MapPinWrapper
                  className={markersFetched ? 'animate' : ''}
                >
                  <MapPin strokeWidth={1} fill={'white'} size={28} />
                </Styled.MapPinWrapper>
              </Marker>
            );
          })}

          <Styled.NavigationControlContainer>
            <NavigationControl showCompass={false} />
          </Styled.NavigationControlContainer>
        </Map>
      </Styled.MapContainer>
    </Styled.Container>
  );
};
