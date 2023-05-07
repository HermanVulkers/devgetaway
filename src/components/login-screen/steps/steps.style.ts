import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  /* background-color: #f1faee; */
  padding: 30px;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-bottom: 2rem;
`;

export const StepNumber = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

export const StepTitle = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: center;
`;
