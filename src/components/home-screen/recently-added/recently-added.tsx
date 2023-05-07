import * as Styled from './recently-added.style';

import { mockDestinations } from '@/fixtures/mock-destinations';

export const RecentlyAdded = () => {
  const sortedDestinations = [...mockDestinations].sort(
    (a, b) => b.creationDate - a.creationDate
  );
  const lastThreeDestinations = sortedDestinations.slice(0, 3);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <Styled.Container>
      <Styled.Title>Recently added</Styled.Title>
      <Styled.List>
        {lastThreeDestinations.map((destination) => (
          <Styled.ListItem key={destination.id}>
            <Styled.Avatar
              src={destination.avatar}
              alt={`${destination.firstName}'s avatar`}
            />
            <Styled.Info>
              <Styled.Location>{destination.location}</Styled.Location>
              <Styled.Name>{destination.firstName}</Styled.Name>

              <Styled.AdditionDate>
                Added on {formatDate(destination.creationDate)}
              </Styled.AdditionDate>
            </Styled.Info>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Container>
  );
};
