import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  background-color: #a8dadc;
  height: fit-content;
  padding: 10px;
  align-items: center;
  font-size: 13px;
`;

export const Highlight = styled.div`
  width: 27%;
  padding: 10px;
  border-radius: 10px;
`;

export const Bold = styled.span`
  font-weight: bold;
`;
