import { Header } from './header/header';
import * as Styled from './login-screen.style';
import { Statistics } from './statistics/statistics';
import { MapBox } from './map/map';
import { Steps } from './steps/steps';
import { AccountButtons } from './account-buttons/account-buttons';
import { AppHighlights } from './app-highlights/app-highlights';

export const LoginScreen = () => {
  return (
    <Styled.Container>
      <AccountButtons />
      <Header />
      <AppHighlights />
      <MapBox />

      <Steps />
    </Styled.Container>
  );
};
