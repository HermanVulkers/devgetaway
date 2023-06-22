import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 30px;
  gap: 20px;
`;

export const Photo = styled.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
`;

export const AmenitiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Amenities = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  padding: 10px 20px;
`;

export const DeveloperAmenities = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  padding: 10px 20px;
  height: fit-content;
  background-color: #aaf5ff;
`;
