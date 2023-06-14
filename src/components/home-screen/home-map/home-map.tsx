import * as Styled from './home-map.style';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl';
import { useEffect, useState } from 'react';

import { MapPin } from 'tabler-icons-react';
import { useRouter } from 'next/router';

interface Location {
  city: string;
  fullName: string;
  homeId: string;
  userId: string;
  latitude: number;
  longitude: number;
}

export const HomeMap = () => {
  const [popupInfo, setPopupInfo] = useState<Location>(null);
  const [locations, setLocations] = useState<Location[]>([]);
  const router = useRouter();
  // const [dateFilter, setDateFilter] = useState({
  //   start: null,
  //   end: null,
  // });

  // const isDestinationAvailable = (destination) => {
  //   if (!dateFilter.start || !dateFilter.end) return true;

  //   const startDate = new Date(dateFilter.start);
  //   const endDate = new Date(dateFilter.end);

  //   return (
  //     startDate >= destination.dateRange.start &&
  //     startDate <= destination.dateRange.end &&
  //     endDate >= destination.dateRange.start &&
  //     endDate <= destination.dateRange.end
  //   );
  // };

  // const filteredDestinations = mockDestinations.filter(isDestinationAvailable);

  const handleLocationClick = (homeId: string) => {
    // push to /getaway/:homeId
    router.push(`/getaway/${homeId}`);
  };

  const renderPopup = () => {
    return (
      popupInfo && (
        <Popup
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeButton={false}
          onClose={() => setPopupInfo(null)}
        >
          <Styled.PopupContainer>
            <Styled.PopupDetails>
              <Styled.PopupLocation>{popupInfo.city}</Styled.PopupLocation>
              <Styled.PopupFirstName>
                {popupInfo.fullName}
              </Styled.PopupFirstName>
              <Styled.ViewGetawayButton
                onClick={() => handleLocationClick(popupInfo.homeId)}
              >
                View destination
              </Styled.ViewGetawayButton>
            </Styled.PopupDetails>
          </Styled.PopupContainer>
        </Popup>
      )
    );
  };

  useEffect(() => {
    fetch('/api/get-all-locations')
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
      });
  }, []);

  return (
    <Styled.Container>
      <Styled.MapContainer>
        <Map
          initialViewState={{ latitude: 20, longitude: 0, zoom: 1.5 }}
          minZoom={1}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          style={{ width: '100%', height: 400 }}
          scrollZoom={false}
        >
          {locations.map((location) => {
            return (
              <Marker
                key={location.homeId}
                longitude={location.longitude}
                latitude={location.latitude}
                onClick={() => console.log('clicked')}
                anchor="bottom"
              >
                <Styled.MarkerWrapper
                  onMouseEnter={() => setPopupInfo(location)}
                >
                  <MapPin fill="white" />
                </Styled.MarkerWrapper>
              </Marker>
            );
          })}
          {renderPopup()}
          <Styled.NavigationControlContainer>
            <NavigationControl showCompass={false} />
          </Styled.NavigationControlContainer>
        </Map>
      </Styled.MapContainer>
    </Styled.Container>
  );
};
