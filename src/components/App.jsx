import { Theme } from 'globalStyles/theme';
import { GlobalStyle } from '../globalStyles/globalStyle';

import { RegisterPage } from 'pages/Auth';
import { LoginPage } from 'pages/Auth';

export const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <RegisterPage />
    </Theme>
  );
};
