import { useTranslation } from 'react-i18next';

import {
  NavWrapper,
  Link,
  HomeIcon,
  StatisticsIcon,
  CurrencyIcon,
  NavigationButton,
  AccountIcon,
} from './Navigation.styled';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <NavWrapper>
      <NavigationButton>
        <Link to="/home">
          <HomeIcon alt="Link to home page" />
          <p>{t('navigation.home')}</p>
        </Link>
      </NavigationButton>
      <NavigationButton>
        <Link to="/statistic">
          <StatisticsIcon alt="Link statistic page" />
          <p>{t('navigation.statistics')}</p>
        </Link>
      </NavigationButton>
      <NavigationButton>
        <Link to="/account">
          <AccountIcon alt="Link account page" />
          <p>{t('navigation.account')}</p>
        </Link>
      </NavigationButton>
      <NavigationButton>
        <Link to="/currency">
          <CurrencyIcon alt="Link currency page" />
        </Link>
      </NavigationButton>
    </NavWrapper>
  );
};

export default Navigation;
