import { Button, Drawer, Loader, Skeleton } from '@mantine/core';
import { useEffect, useState } from 'react';
import * as Styled from './map-drawer.style';

import { toTitleCase } from '@/utils/to-title-case';
import { Carousel } from '@mantine/carousel';
import { Message2 } from 'tabler-icons-react';

export const MapDrawer = ({ drawerData, setDrawerData }) => {
  const [home, setHome] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

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

  return (
    <Drawer.Root
      opened={drawerData.opened}
      onClose={() => setDrawerData({ ...drawerData, opened: false })}
    >
      <Drawer.Content>
        <Drawer.Header>
          <Button
            variant={'gradient'}
            gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            radius="xl"
            leftIcon={<Message2 size={24} strokeWidth={2} />}
            compact
            styles={(theme) => ({
              root: {
                fontWeight: 500,
                paddingLeft: 15,
                paddingRight: 15,
              },
            })}
          >
            Contact owner
          </Button>

          <Drawer.CloseButton size={24} />
        </Drawer.Header>
        <Styled.Container>
          {/* {isFetching && (
          <Styled.Loader>
            <Loader size="sm" />
          </Styled.Loader>
        )} */}

          <Skeleton visible={isFetching}>
            <h4>{home?.city}</h4>
          </Skeleton>

          <Skeleton visible={isFetching}>
            <Styled.Description>{home?.description}</Styled.Description>
          </Skeleton>

          <Skeleton visible={isFetching}>
            <Carousel mx="auto" withIndicators>
              {home?.s3PhotoUrls.map(({ url }, index) => (
                <Styled.Photo key={index} src={url} />
              ))}
            </Carousel>
          </Skeleton>

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
