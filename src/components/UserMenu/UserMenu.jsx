import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from 'redux/auth/authApi';
import { authSelectors } from 'redux/selector';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import {
  Container,
  UserMenuText,
  LogoutButton,
  LogoutIcon,
} from './UserMenu.styled';

export const UserMenu = () => {
  const { t } = useTranslation();

  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const { name, image, id } = useSelector(authSelectors.getUser);

  function handleLogout() {
    logout(id);
    toast.success('Logout Successfully');
    console.log('Тут має бути редірект на логін');
    navigate('/login');
  }

  return (
    <Container>
      <UserMenuText>Wellcome</UserMenuText>
      <UserMenuText>
        <img src={image} alt="avatar" width="24px" height="24px" />
      </UserMenuText>
      {name} |
      <LogoutButton type="button" onClick={handleLogout}>
        <LogoutIcon />
        <span>{t('exitprompt.exit')}</span>
      </LogoutButton>
    </Container>
  );
};
