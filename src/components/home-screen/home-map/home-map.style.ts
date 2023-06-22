import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 10px;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  /* flex-grow: 1; */

  .mapboxgl-map {
    font-family: 'Roboto', sans-serif;
  }

  .mapboxgl-ctrl-bottom-left,
  .mapboxgl-ctrl-bottom-right {
    display: none;
  }
`;

export const NavigationControlContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const MapPinWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    filter: drop-shadow(0px 5px 1px rgb(0 0 0 / 0.2));
  }

  transition: transform 0.1s;

  &:hover {
    transform: scale(1.2);
  }
`;
