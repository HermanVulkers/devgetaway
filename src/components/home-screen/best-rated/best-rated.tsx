import * as Styled from './best-rated.style';
import { mockDestinations } from '@/fixtures/mock-destinations';

const StarIcon = (props) => {
  return (
    <Styled.StarIcon {...props}>{props.half ? '⭐️' : '⭐️'}</Styled.StarIcon>
  );
};

export const BestRated = () => {
  const bestRatedDestinations = [...mockDestinations]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <Styled.Container>
      <Styled.Title>Best Rated</Styled.Title>
      <Styled.List>
        {bestRatedDestinations.map((destination) => (
          <Styled.ListItem key={destination.id}>
            <Styled.Avatar
              src={destination.avatar}
              alt={`${destination.firstName}'s avatar`}
            />
            <Styled.Info>
              <Styled.Location>{destination.location}</Styled.Location>
              <Styled.Name>{destination.firstName}</Styled.Name>
              <Styled.Rating>
                {Array(Math.floor(destination.rating))
                  .fill()
                  .map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                {destination.rating % 1 !== 0 && <StarIcon half />}
              </Styled.Rating>
            </Styled.Info>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Container>
  );
};
