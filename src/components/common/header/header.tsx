import { Button, Chip } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { Diamond } from 'tabler-icons-react';

import { AvailabilitySetter } from '@/components/home-screen/availability-setter/availability-setter';

import Logo from '../../../assets/logos/logo-no-background.png';
import { AccountMenu } from './account-menu/account-menu';
import * as Styled from './header.style';

export const Header = () => {
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
        <AvailabilitySetter />
        {/* <Chip checked={true} variant="outline">
          Messaging enabled
        </Chip> */}
        <Styled.AccountMenu>
          <AccountMenu />
        </Styled.AccountMenu>
      </Styled.RightWrapper>
    </Styled.Container>
  );
};
