import { signIn } from 'next-auth/react';

import * as Styled from './account-buttons.style';

export const AccountButtons = () => {
  return (
    <Styled.Container>
      <Styled.Button
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        Sign In
      </Styled.Button>
    </Styled.Container>
  );
};
