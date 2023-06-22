import Logo from '../../../assets/logos/logo-no-background.png';
import Image from 'next/image';

import * as Styled from './header.style';
import { AccountMenu } from './account-menu/account-menu';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { DateSelector } from '@/components/home-screen/date-selector/date-selector';
import { Button } from '@mantine/core';
import { Diamond } from 'tabler-icons-react';

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
        <DateSelector text="Set availibility" variant="availibility" />
        <Button
          variant="gradient"
          gradient={{ from: 'yellow', to: 'red', deg: 60 }}
          leftIcon={<Diamond size={18} />}
          radius="xl"
          compact
          styles={(theme) => ({
            root: {
              fontWeight: 500,
              paddingLeft: 15,
              paddingRight: 15,
            },
          })}
        >
          5
        </Button>
        <Styled.AccountMenu>
          <AccountMenu />
        </Styled.AccountMenu>
      </Styled.RightWrapper>
    </Styled.Container>
  );
};
