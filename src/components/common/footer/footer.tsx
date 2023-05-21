import Link from 'next/link';
import * as Styled from './footer.style';
import { SimpleGrid } from '@mantine/core';

export const Footer = () => {
  return (
    <Styled.Container>
      <Styled.LeftColumn>
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
      </Styled.LeftColumn>
      <Styled.CenterColumn>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </Styled.CenterColumn>
      <Styled.RightColumn>
        <Link href="/disclaimer">Disclaimer</Link>
      </Styled.RightColumn>
    </Styled.Container>
  );
};
