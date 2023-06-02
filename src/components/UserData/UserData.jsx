import { useState } from 'react';
import UserPhoto from 'components/UserData/UserPhoto';
import Modal from 'components/commonComponents/Modal';
import { UserDeleteModal } from './UserModal';
import {
  Title,
  UserSection,
  UserContainer,
  UserDataList,
  UserThumb,
} from './UserData.styled';
import UserDataItem from 'components/UserData/UserDataItem';
import DeleteUser from 'components/UserData/DeleteUser';
import { useTranslation } from 'react-i18next';

export const UserData = () => {
  const [showModal, setShowModal] = useState(false);
  const [isDeleteUserModalOpen, toggleDeleteUserModal] = useState(false);

  const { t } = useTranslation();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Title>{t('userData.My_information')}:</Title>
      <UserContainer>
        <UserSection>
          <UserPhoto />
          <UserThumb>
            <UserDataList>
              <UserDataItem />
            </UserDataList>
            <DeleteUser onOpen={() => toggleDeleteUserModal(true)} />
            {isDeleteUserModalOpen ? (
              <Modal onClose={toggleModal}>
                <UserDeleteModal onClose={() => toggleDeleteUserModal(false)} />
              </Modal>
            ) : null}
          </UserThumb>
        </UserSection>
      </UserContainer>
    </>
  );
};
