import * as Styled from './header.style';
import Logo from '../../../assets/logos/logo-no-background.png';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { Button } from '@mantine/core';

export const Header = () => {
  return (
    <>
      <Styled.UnderConstruction>Under Construction</Styled.UnderConstruction>
      <Styled.Container>
        <Image src={Logo} alt="logo" width={200} />
        <Button
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
          styles={{
            root: {
              position: 'absolute',
              right: 20,
              top: 20,
            },
          }}
        >
          Sign In
        </Button>
      </Styled.Container>
    </>
  );
};
