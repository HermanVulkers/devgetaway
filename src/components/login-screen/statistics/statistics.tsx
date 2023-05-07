import * as Styled from './statistics.style';

export const Statistics = () => {
  return (
    <Styled.Container>
      <Styled.Stat>
        <Styled.StatNumber>523</Styled.StatNumber>
        <Styled.StatLabel>Homes signed up</Styled.StatLabel>
      </Styled.Stat>
      <Styled.Stat>
        <Styled.StatNumber>39</Styled.StatNumber>
        <Styled.StatLabel>Swaps completed</Styled.StatLabel>
      </Styled.Stat>
      <Styled.Stat>
        <Styled.StatNumber>20</Styled.StatNumber>
        <Styled.StatLabel>Countries covered</Styled.StatLabel>
      </Styled.Stat>
    </Styled.Container>
  );
};
