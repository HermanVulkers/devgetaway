import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;
  column-gap: 10px;
`;

export const Button = styled.button`
  background-color: #a8dadc;
  color: #1d3557;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #8ab5b7;
  }
`;
