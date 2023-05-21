import Link from 'next/link';
import * as Styled from './footer.style';

export const Footer = () => {
  return (
    <Styled.Container>
      <Styled.Column></Styled.Column>
      <Styled.Column></Styled.Column>
      <Styled.Column>
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
        <Link href="/privacy-policy">
          <Styled.Anchor>Privacy Policy</Styled.Anchor>
        </Link>
        <Link href="/disclaimer">
          <Styled.Anchor>Disclaimer</Styled.Anchor>
        </Link>
      </Styled.Column>
    </Styled.Container>
  );
};
