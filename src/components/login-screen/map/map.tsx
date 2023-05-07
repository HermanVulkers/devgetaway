import { useState } from 'react';
import * as Styled from './map.style';
import Map, { Marker } from 'react-map-gl';

export const MapBox = () => {
  return (
    <Styled.Container>
      <Map
        initialViewState={{ latitude: 20, longitude: 0, zoom: 0.9 }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        // onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        style={{ width: '100%', height: 600 }}
        interactive={false}
      ></Map>
    </Styled.Container>
  );
};
