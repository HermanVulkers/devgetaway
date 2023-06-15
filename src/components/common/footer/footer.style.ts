import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f1faee;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 140px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  /* text-align: left; */
  /* padding: 20px; */
  align-items: center;
`;

export const Anchor = styled.a``;
