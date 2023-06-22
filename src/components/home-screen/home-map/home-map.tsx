import * as Styled from './home-map.style';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import { useEffect, useState } from 'react';

import { MapPin } from 'tabler-icons-react';

import { MapDrawer } from '../map-drawer/map-drawer';

interface Location {
  city: string;
  fullName: string;
  homeId: string;
  userId: string;
  latitude: number;
  longitude: number;
}

export const HomeMap = () => {
  const [locations, setLocations] = useState<Location[]>([]);
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
    fetch('/api/get-all-locations')
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        console.log('An error occurred: ', error);
      });
  }, []);

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
                  event.originalEvent.stopPropagation();
                  setDrawerData({ opened: true, data: location });
                }}
                anchor="bottom"
              >
                <Styled.MapPinWrapper>
                  <MapPin fill="#aaf5ff" />
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
