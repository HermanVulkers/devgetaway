import { toTitleCase } from '@/utils/to-title-case';
import { Footer } from '../common/footer/footer';
import { Header } from '../common/header/header';
import * as Styled from './getaway-screen.style';
import { Grid, SimpleGrid } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

export default function GetawayScreen({ home }) {
  const availableAmenities = Object.entries(home?.amenities || {})
    .filter(([key, value]) => value)
    .map(([key, value]) => key);

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

        <div>
          <h3>Available Amenities</h3>
          <ul>
            {availableAmenities?.map((amenity, index) => (
              <li key={index}>
                <p>{toTitleCase(amenity)}</p>
              </li>
            ))}
          </ul>
        </div>
      </Styled.Container>
      <Footer />
    </>
  );
}
