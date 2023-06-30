import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f1faee;
  height: 100vh;
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
