import { Button, Chip, Drawer, Loader, Skeleton } from '@mantine/core';
import { useEffect, useState } from 'react';
import * as Styled from './map-drawer.style';

import { toTitleCase } from '@/utils/to-title-case';
import { Carousel } from '@mantine/carousel';
import {
  CircleCheck,
  Message2,
  ArrowLeft,
  ArrowRight,
} from 'tabler-icons-react';
import { Portal, Overlay } from '@mantine/core';

export const MapDrawer = ({ drawerData, setDrawerData }) => {
  const [home, setHome] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isPhotoOverlayOpen, setIsPhotoOverlayOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  async function getHomeById() {
    setIsFetching(true);

    const response = await fetch(
      `/api/get-home-by-id?homeId=${drawerData?.data?.homeId}`
    );
    const data = await response.json();

    setHome(data);
    setIsFetching(false);
  }

  useEffect(() => {
    if (drawerData?.data?.homeId) {
      getHomeById();
    }
  }, [drawerData?.data?.homeId]);

  const amenities = Object.entries(home?.amenities || {})
    .filter(([key, value]) => value)
    .map(([key, value]) => key);

  const devAmenities = Object.entries(home?.developerAmenities || {})
    .filter(([key, value]) => value)
    .map(([key, value]) => {
      if (key === 'externalMonitors') {
        return `${toTitleCase(key)}: ${value}`;
      } else if (key === 'internetSpeed') {
        return `${toTitleCase(key)}: ${value} Mbps`;
      } else {
        return toTitleCase(key);
      }
    });

  const closePhotoOverlay = () => {
    setIsPhotoOverlayOpen(false);
  };

  const showNextPhoto = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === home?.s3PhotoUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPreviousPhoto = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === 0 ? home?.s3PhotoUrls.length - 1 : prevIndex - 1
    );
  };

  const homeStatus = home?.status === 'verified' ? 'verified' : 'pending';

  return (
    <Drawer.Root
      opened={drawerData.opened}
      onClose={() => setDrawerData({ ...drawerData, opened: false })}
    >
      <Drawer.Content>
        <Drawer.Header>
          <Chip checked={homeStatus === 'verified' ? true : false}>
            {homeStatus === 'verified'
              ? 'Verified user'
              : 'Verification pending'}
          </Chip>

          <Button
            leftIcon={<Message2 size={24} strokeWidth={2} />}
            compact
            styles={(theme) => ({
              root: {
                fontWeight: 500,
                paddingLeft: 15,
                paddingRight: 15,
                fontSize: 13,
                marginLeft: 15,
              },
            })}
          >
            Contact user
          </Button>

          <Drawer.CloseButton size={24} />
        </Drawer.Header>
        <Styled.Container>
          <Skeleton visible={isFetching}>
            <h4>{home?.address}</h4>
          </Skeleton>

          <Skeleton visible={isFetching}>
            <Styled.Description>{home?.description}</Styled.Description>
          </Skeleton>

          <Skeleton visible={isFetching}>
            <Carousel
              mx="auto"
              withIndicators
              nextControlIcon={<ArrowRight size={16} />}
              previousControlIcon={<ArrowLeft size={16} />}
            >
              {home?.s3PhotoUrls.map(({ url }, index) => (
                <Styled.Photo
                  key={index}
                  src={url}
                  onClick={() => {
                    setSelectedPhotoIndex(index);
                    setIsPhotoOverlayOpen(true);
                  }}
                />
              ))}
            </Carousel>
          </Skeleton>

          {isPhotoOverlayOpen && (
            <Portal>
              <Overlay
                zIndex={1000}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 1001,
                  }}
                  onClick={closePhotoOverlay}
                  compact
                >
                  Close
                </Button>
                <Carousel
                  mx="auto"
                  withIndicators
                  nextControlIcon={<ArrowRight size={16} />}
                  previousControlIcon={<ArrowLeft size={16} />}
                >
                  {home?.s3PhotoUrls.map(({ url }, index) => (
                    <Styled.Photo
                      key={index}
                      src={url}
                      onClick={() => {
                        setSelectedPhotoIndex(index);
                        setIsPhotoOverlayOpen(true);
                      }}
                    />
                  ))}
                </Carousel>
              </Overlay>
            </Portal>
          )}

          <Styled.AmenitiesContainer>
            <Skeleton visible={isFetching}>
              <Styled.Amenities>
                <h4>Amenities</h4>
                <Styled.AmenitiesList>
                  {amenities?.map((amenity, index) => (
                    <Styled.AmenitiesListItem key={index}>
                      {<p>{toTitleCase(amenity)}</p>}
                    </Styled.AmenitiesListItem>
                  ))}
                </Styled.AmenitiesList>
              </Styled.Amenities>
            </Skeleton>

            <Skeleton visible={isFetching}>
              <Styled.DevAmenities>
                <h4>Developer Amenities</h4>
                <Styled.DevAmenitiesList>
                  {devAmenities?.map((amenity, index) => (
                    <Styled.DevAmenitiesListItem key={index}>
                      {<p>{toTitleCase(amenity)}</p>}
                    </Styled.DevAmenitiesListItem>
                  ))}
                </Styled.DevAmenitiesList>
              </Styled.DevAmenities>
            </Skeleton>
          </Styled.AmenitiesContainer>
        </Styled.Container>
      </Drawer.Content>
    </Drawer.Root>
  );
};
