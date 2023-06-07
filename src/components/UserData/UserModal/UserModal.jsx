import { useTranslation } from 'react-i18next';
import { ModalText } from './UserModal.styled';
import { ModalButton } from 'components/commonComponents';
import { useDeleteMutation } from 'redux/user/userApi';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import { useAuth } from 'hooks/useAuth';
// import { useLogoutMutation } from 'redux/auth/authApi';

import { ModalWrapper, ModalButtonWrapper } from './UserModal.styled';

export const UserDeleteModal = ({ onClose }) => {
  const [deleteUser] = useDeleteMutation();

  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleDeleteUser = () => {
    onClose();
    deleteUser();
    navigate('/login');
    localStorage.clear();
    toast.success(t('userData.Deleted_user'));
  };

  return (
    <ModalWrapper>
      <ModalText>🐾 {t('userData.Want_delete')}</ModalText>

      <ModalButtonWrapper>
        <ModalButton type="button" onClick={onClose}>
          {t('userData.No')}
        </ModalButton>
        <ModalButton type="button" onClick={handleDeleteUser}>
          {t('userData.Yes')} 🐾
        </ModalButton>
      </ModalButtonWrapper>
    </ModalWrapper>
  );
};

UserDeleteModal.propsType = {
  onClose: PropTypes.func.isRequired,
};
