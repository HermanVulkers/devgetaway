import Link from 'next/link';
import * as Styled from './footer.style';

export const Footer = () => {
  return (
    <Styled.Container>
      <Styled.Column></Styled.Column>
      <Styled.Column>
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/disclaimer">Disclaimer</Link>
      </Styled.Column>
      <Styled.Column></Styled.Column>
    </Styled.Container>
  );
};
