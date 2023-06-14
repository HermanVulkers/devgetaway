import { toTitleCase } from '@/utils/to-title-case';
import { Footer } from '../common/footer/footer';
import { Header } from '../common/header/header';
import * as Styled from './getaway-screen.style';
import { Grid, SimpleGrid } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

export default function GetawayScreen({ home }) {
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
    <>
      <Header />
      <Styled.Container>
        <h1>{home?.city}</h1>

        <p>{home?.description}</p>

        <Styled.PhotoGrid>
          {home?.s3PhotoUrls.map(({ url }, index) => (
            <Styled.Photo key={index} src={url} />
          ))}
        </Styled.PhotoGrid>

        <Styled.AmenitiesContainer>
          <Styled.Amenities>
            <h3>Amenities</h3>
            <ul>
              {amenities?.map((amenity, index) => (
                <li key={index}>
                  <p>{toTitleCase(amenity)}</p>
                </li>
              ))}
            </ul>
          </Styled.Amenities>

          <Styled.DeveloperAmenities>
            <h3>Developer Amenities</h3>
            <ul>
              {devAmenities?.map((amenity, index) => (
                <li key={index}>
                  <p>{toTitleCase(amenity)}</p>
                </li>
              ))}
            </ul>
          </Styled.DeveloperAmenities>
        </Styled.AmenitiesContainer>
      </Styled.Container>
      <Footer />
    </>
  );
}
