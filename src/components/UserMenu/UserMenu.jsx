import { useNavigate } from 'react-router-dom';
import Media from 'react-media';
import { useLogoutMutation } from 'redux/auth/authApi';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'hooks/useAuth';
import { LangSwitcher } from '../../components/LangSwitcher';

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
  const { user } = useAuth();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const { name, photoURL, _id } = user;

  function handleLogout() {
    logout(_id);
    navigate('/login');
    localStorage.clear();
    toast.success(t('logout.status.success'));
  }

  return (
    <Container>
      <Media queries={{ mobile: '(max-width: 767px)' }}>
        {matches =>
          matches.mobile ? (
            <>
              <NavLink to={'/account'}>
                <Wrapper>
                  <LangSwitcher />
                  {/* <img src={photoURL} alt="avatar" width="24px" height="24px" />
                  <MenuText>{t('exitprompt.accaunt')}</MenuText> */}
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
              <UserMenuText>{t('wellcome')}</UserMenuText>
              <LangSwitcher />
              <NavLink to={'/account'}>
                <UserMenuText>
                  <img src={photoURL} alt="avatar" width="24px" height="24px" />
                </UserMenuText>
                {user.name ? name : 'user'}
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
