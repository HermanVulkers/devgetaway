import { Header } from './header/header';
import * as Styled from './login-screen.style';
import { Statistics } from './statistics/statistics';
import { MapBox } from './map/map';
import { Steps } from './steps/steps';
import { AccountButtons } from './account-buttons/account-buttons';
import { AppHighlights } from './app-highlights/app-highlights';
import { HomeMap } from '../home-screen/home-map/home-map';
import { Footer } from '../common/footer/footer';

export const LoginScreen = () => {
  return (
    <Styled.Container>
      <Header />
      <AppHighlights />
      <HomeMap disableMarkerInteraction />

      <Footer />
    </Styled.Container>
  );
};
