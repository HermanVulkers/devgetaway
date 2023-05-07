import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafffd;
`;

export const MapContainer = styled.div`
  width: 80%;
  height: 400px;
  margin-bottom: 2rem;
`;

export const Map = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
