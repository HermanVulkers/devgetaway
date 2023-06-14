import Logo from '../../../assets/logos/logo-no-background.png';
import Image from 'next/image';

import * as Styled from './header.style';
import { AccountMenu } from './account-menu/account-menu';

import { useRouter } from 'next/router';
import Link from 'next/link';

export const Header = () => {
  const router = useRouter();

  return (
    <Styled.Container>
      <Styled.LeftWrapper>
        <Image src={Logo} alt="logo" width={150} priority />
      </Styled.LeftWrapper>
      <Styled.Navigation>
        <Link href="/">Home</Link>
        <Link href="/">How it works</Link>
        {/* <Link href="/">Pricing</Link> */}
      </Styled.Navigation>
      <Styled.RightWrapper>
        <Styled.AccountMenu>
          <AccountMenu />
        </Styled.AccountMenu>
      </Styled.RightWrapper>
    </Styled.Container>
  );
};
