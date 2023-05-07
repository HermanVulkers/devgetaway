import * as Styled from './steps.style';

export const Steps = () => {
  return (
    <Styled.Container>
      <Styled.Step>
        <Styled.StepNumber>1</Styled.StepNumber>
        <Styled.StepTitle>List your home</Styled.StepTitle>
        <Styled.StepDescription>
          Add your home to SwapCoders with photos and a description of the area.
        </Styled.StepDescription>
      </Styled.Step>
      <Styled.Step>
        <Styled.StepNumber>2</Styled.StepNumber>
        <Styled.StepTitle>Browse homes</Styled.StepTitle>
        <Styled.StepDescription>
          Find a home you like and send a message to the owner to propose a
          swap.
        </Styled.StepDescription>
      </Styled.Step>
      <Styled.Step>
        <Styled.StepNumber>3</Styled.StepNumber>
        <Styled.StepTitle>Agree and swap</Styled.StepTitle>
        <Styled.StepDescription>
          Once you've agreed on the details of the swap, finalize the
          arrangements and enjoy your new home!
        </Styled.StepDescription>
      </Styled.Step>
    </Styled.Container>
  );
};
