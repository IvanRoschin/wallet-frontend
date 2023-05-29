import { useTranslation } from 'react-i18next';
import Media from 'react-media';

import {
  NavWrapper,
  Link,
  HomeIcon,
  StatisticsIcon,
  CurrencyIcon,
  NavigationButton,
} from './Navigation.styled';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <NavWrapper>
      <Media
        query="(max-width: 767px)"
        render={() => (
          <>
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
              <Link to="/currency">
                <CurrencyIcon alt="Link currency page" />
                <p>{t('navigation.currency')}</p>
              </Link>
            </NavigationButton>
          </>
        )}
      />
      <Media
        query="(min-width: 768px)"
        render={() => (
          <>
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
          </>
        )}
      />
    </NavWrapper>
  );
};

export default Navigation;
