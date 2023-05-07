import * as Styled from './app-highlights.style';

export const AppHighlights = () => {
  return (
    <Styled.Container>
      <Styled.Highlight>
        Ditch the familiar and use workspace exchange to visit
        <Styled.Bold> dream destinations</Styled.Bold>.
      </Styled.Highlight>
      <Styled.Highlight>
        Join a trusted tribe of coding wizards in an exclusive{' '}
        <Styled.Bold>verified devs-only</Styled.Bold> space.
      </Styled.Highlight>
      <Styled.Highlight>
        Rely on a <Styled.Bold>fast internet connection</Styled.Bold> and good
        ergonomic amenities.
      </Styled.Highlight>
    </Styled.Container>
  );
};
