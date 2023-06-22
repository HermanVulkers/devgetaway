import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f1faee;
  height: 100vh;
`;

export const FilterBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #aaf5ff;
  height: 70px;
  column-gap: 5px;
`;

export const Button = styled.button`
  background-color: #565656;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 15px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #656565;
  }
`;

export const FeaturedDestinations = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
