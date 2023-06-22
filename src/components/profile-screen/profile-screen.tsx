import { Header } from '../common/header/header';
import * as Styled from './profile-screen.style';

import { HomeForm } from './home-form/home-form';
import { AboutMeForm } from './about-me-form';

export const ProfileScreen = () => {
  return (
    <Styled.Container>
      <Header />

      <Styled.ContentContainer>
        <Styled.House>
          <HomeForm />
        </Styled.House>

        <Styled.AboutMe>
          <AboutMeForm />
        </Styled.AboutMe>
      </Styled.ContentContainer>
    </Styled.Container>
  );
};
