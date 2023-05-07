import * as Styled from './header.style';
import Logo from '../../../assets/logos/logo-no-background.png';
import Image from 'next/image';

export const Header = () => {
  return (
    <Styled.Container>
      <Image src={Logo} alt="logo" width={300} />
    </Styled.Container>
  );
};
