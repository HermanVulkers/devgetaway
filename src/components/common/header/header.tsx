import Logo from '../../../assets/logos/logo-no-background.png';
import Image from 'next/image';

import * as Styled from './header.style';
import { AccountMenu } from './account-menu/account-menu';

import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();

  return (
    <Styled.Container>
      <Styled.LeftWrapper>
        <Image src={Logo} alt="logo" width={150} />
      </Styled.LeftWrapper>
      <Styled.Navigation>
        <Styled.NavigationItem onClick={() => router.push('/')}>
          Discover
        </Styled.NavigationItem>
        <Styled.NavigationItem>How it works</Styled.NavigationItem>
        <Styled.NavigationItem>Pricing</Styled.NavigationItem>
      </Styled.Navigation>
      <Styled.RightWrapper>
        <Styled.AccountMenu>
          <AccountMenu />
        </Styled.AccountMenu>
      </Styled.RightWrapper>
    </Styled.Container>
  );
};
