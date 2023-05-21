import * as Styled from './home-map.style';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { mockDestinations } from '@/fixtures/mock-destinations';
import { MapPin } from 'tabler-icons-react';

interface Location {
  city: string;
  fullName: string;
  id: string;
  latitude: number;
  longitude: number;
}

export const HomeMap = () => {
  const [popupInfo, setPopupInfo] = useState<Location>(null);
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
            {/* <Styled.AvatarContainer>
              <Image
                src={popupInfo?.avatar}
                alt={`${popupInfo.fullName}'s avatar`}
                width="60"
                height="60"
              />
            </Styled.AvatarContainer> */}
            <Styled.PopupDetails>
              <Styled.PopupLocation>{popupInfo.city}</Styled.PopupLocation>
              <Styled.PopupFirstName>
                {popupInfo.fullName}
              </Styled.PopupFirstName>
              <Styled.ViewGetawayButton>
                View destination
              </Styled.ViewGetawayButton>
            </Styled.PopupDetails>
          </Styled.PopupContainer>
        </Popup>
      )
    );
  };

  // fetch locations from get-all-locations api route
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    fetch('/api/get-all-locations')
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
      });
  }, []);

  console.log(locations);

  return (
    <Styled.Container>
      <Styled.MapContainer>
        <Map
          initialViewState={{ latitude: 20, longitude: 0, zoom: 1 }}
          minZoom={1}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          style={{ width: '100%', height: 400 }}
          scrollZoom={false}
        >
          {locations.map((location) => {
            return (
              <Marker
                key={location.id}
                longitude={location.longitude}
                latitude={location.latitude}
                onClick={() => console.log('clicked')}
                anchor="bottom"
              >
                <Styled.MarkerWrapper
                  onMouseEnter={() => setPopupInfo(location)}
                >
                  {/* <Image
                    src={location?.avatar}
                    onMouseEnter={() => setPopupInfo(location)}
                    alt={`${location.fullName}'s avatar`}
                    width="30"
                    height="30"
                    style={{ borderRadius: '50%', border: '2px solid #3fb1ce' }}
                  /> */}
                  <MapPin />
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
