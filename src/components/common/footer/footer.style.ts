import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f1faee;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100px;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;
