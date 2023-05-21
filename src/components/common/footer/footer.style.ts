import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f1faee;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  text-align: left;
`;

export const Anchor = styled.a``;
