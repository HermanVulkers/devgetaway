import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 10px;
`;

export const MapContainer = styled.div`
  width: 100%;

  .mapboxgl-map {
    font-family: 'Roboto', sans-serif;
  }

  .mapboxgl-popup-content {
    align-items: center;
    border-radius: 5px;
    display: flex;
    height: fit-content;
    justify-content: center;
    padding: 10px;
    border: 2px solid #3fb1ce;
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

export const Title = styled.h1`
  font-size: 30px;
  margin: 30px 0;
`;

export const Subtitle = styled.h3`
  font-size: 20px;
`;

export const MarkerWrapper = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

export const DropletTip = styled.div`
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 10px;
  height: 10px;
  background-color: #3fb1ce;
  z-index: -1;
`;

export const PopupContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const PopupDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const PopupFirstName = styled.p`
  font-size: 12px;
`;

export const PopupLocation = styled.p`
  font-weight: bold;
  line-height: 0;
  margin-top: 5px;
`;

export const ViewGetawayButton = styled.button`
  background-color: #3fb1ce;
  color: #fff;
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #4fc1de;
  }
`;
