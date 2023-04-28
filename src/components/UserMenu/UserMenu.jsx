import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Media from 'react-media';
import { useLogoutMutation } from 'redux/auth/authApi';
import { authSelectors } from 'redux/selector';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import {
  Container,
  UserMenuText,
  LogoutButton,
  LogoutIcon,
  NavLink,
  MenuText,
  Wrapper,
} from './UserMenu.styled';

export const UserMenu = () => {
  const { t } = useTranslation();

  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const { name, photoURL, id } = useSelector(authSelectors.getUser);
  console.log('photoURL', photoURL);

  function handleLogout() {
    logout(id);
    toast.success(t('logout.status.success'));
    navigate('/login');
  }

  return (
    <Container>
      <Media queries={{ mobile: '(max-width: 767px)' }}>
        {matches =>
          matches.mobile ? (
            <>
              <NavLink to={'/account'}>
                <Wrapper>
                  <img src={photoURL} alt="avatar" width="24px" height="24px" />
                  <MenuText>{t('exitprompt.accaunt')}</MenuText>
                </Wrapper>
                |
              </NavLink>
              <LogoutButton type="button" onClick={handleLogout}>
                <LogoutIcon />
                <MenuText>{t('exitprompt.exit')}</MenuText>
              </LogoutButton>
            </>
          ) : (
            <>
              <UserMenuText>Wellcome</UserMenuText>

              <NavLink to={'/account'}>
                <UserMenuText>
                  <img src={photoURL} alt="avatar" width="24px" height="24px" />
                </UserMenuText>
                {name} |
              </NavLink>
              <LogoutButton type="button" onClick={handleLogout}>
                <LogoutIcon />
                <MenuText>{t('exitprompt.exit')}</MenuText>
              </LogoutButton>
            </>
          )
        }
      </Media>
    </Container>
  );
};
