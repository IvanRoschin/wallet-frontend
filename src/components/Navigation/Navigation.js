import { useTranslation } from 'react-i18next';

import {
  NavWrapper,
  Link,
  HomeIcon,
  StatisticsIcon,
  NavigationButton,
  LinkName,
} from './Navigation.styled';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <NavWrapper>
      <NavigationButton>
        <Link to="/">
          <HomeIcon alt="Link to home page" />
          <LinkName>{t('navigation.home')}</LinkName>
        </Link>
      </NavigationButton>
      <NavigationButton>
        <Link to="/">
          <StatisticsIcon alt="Link to home page" />
          <LinkName>{t('navigation.statistics')}</LinkName>
        </Link>
      </NavigationButton>
    </NavWrapper>
  );
};

export default Navigation;
