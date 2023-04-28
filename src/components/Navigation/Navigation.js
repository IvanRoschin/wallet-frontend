import { useTranslation } from 'react-i18next';

import {
  NavWrapper,
  Link,
  HomeIcon,
  StatisticsIcon,
  CurrencyIcon,
  NavigationButton,
  LinkName,
} from './Navigation.styled';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <NavWrapper>
      <NavigationButton>
        <Link to="/home">
          <HomeIcon alt="Link to home page" />
          <LinkName>{t('navigation.home')}</LinkName>
        </Link>
      </NavigationButton>
      <NavigationButton>
        <Link to="/">
          <StatisticsIcon alt="Link statistic page" />
          <LinkName>{t('navigation.statistics')}</LinkName>
        </Link>
      </NavigationButton>
      <NavigationButton>
        <Link to="/">
          <CurrencyIcon alt="Link currency page" />
          <LinkName>{t('navigation.statistics')}</LinkName>
        </Link>
      </NavigationButton>
    </NavWrapper>
  );
};

export default Navigation;
