import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 15px;
  padding: 0 16px 20px 16px;
`;

export const Loader = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
`;

export const Photo = styled.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
`;

export const Description = styled.p``;

export const AmenitiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Amenities = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  // no styling on list items
`;

export const AmenitiesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const AmenitiesListItem = styled.li``;

export const DevAmenities = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
`;

export const DevAmenitiesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const DevAmenitiesListItem = styled.li``;
