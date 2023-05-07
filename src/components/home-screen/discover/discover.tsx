import * as Styled from './discover.style';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl';
import { useState } from 'react';
import Image from 'next/image';
import { mockDestinations } from '@/fixtures//mock-destinations';

export const Discover = () => {
  const [popupInfo, setPopupInfo] = useState(null);
  const [dateFilter, setDateFilter] = useState({
    start: null,
    end: null,
  });

  const isDestinationAvailable = (destination) => {
    if (!dateFilter.start || !dateFilter.end) return true;

    const startDate = new Date(dateFilter.start);
    const endDate = new Date(dateFilter.end);

    return (
      startDate >= destination.dateRange.start &&
      startDate <= destination.dateRange.end &&
      endDate >= destination.dateRange.start &&
      endDate <= destination.dateRange.end
    );
  };

  const filteredDestinations = mockDestinations.filter(isDestinationAvailable);

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
            <Styled.AvatarContainer>
              <Image
                src={popupInfo.avatar}
                alt={`${popupInfo.firstName}'s avatar`}
                width="60"
                height="60"
              />
            </Styled.AvatarContainer>
            <Styled.PopupDetails>
              <Styled.PopupLocation>{popupInfo.location}</Styled.PopupLocation>
              <Styled.PopupFirstName>
                {popupInfo.firstName}
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
          {filteredDestinations.map((destination) => {
            return (
              <Marker
                key={destination.id}
                longitude={destination.longitude}
                latitude={destination.latitude}
                onClick={() => console.log('clicked')}
                anchor="bottom"
              >
                <Styled.MarkerWrapper>
                  <Image
                    src={destination.avatar}
                    onMouseEnter={() => setPopupInfo(destination)}
                    alt={`${destination.firstName}'s avatar`}
                    width="30"
                    height="30"
                    style={{ borderRadius: '50%', border: '2px solid #3fb1ce' }}
                  />
                  <Styled.DropletTip />
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
