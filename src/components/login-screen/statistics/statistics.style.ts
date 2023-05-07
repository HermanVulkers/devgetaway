import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 2rem;
  background-color: aliceblue;
  padding: 30px;
  border-radius: 10px;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatNumber = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

export const StatLabel = styled.span`
  font-size: 1rem;
  color: #333;
`;
