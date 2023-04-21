import { UserMenu } from '../UserMenu';
import { Logo } from 'components/Logo';

import { AppWrapper } from '././AppBar.styled';

export const AppBar = () => {
  return (
    <AppWrapper>
      <Logo />
      <UserMenu />
    </AppWrapper>
  );
};
