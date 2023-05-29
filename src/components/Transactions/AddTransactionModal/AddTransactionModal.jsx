import { useState } from 'react';
import Modal from 'components/Modal';
import { Container, ModalName, BtnClose } from './AddTransactionModal.styled';
import { AddTransactionForm } from '../AddTransactionForm/AddTransactionForm';
import { useTranslation } from 'react-i18next';

export const AddTransactionModal = ({ handleButtonToggle }) => {
  const [showModal, setShowModal] = useState(true);
  const { t } = useTranslation();

  const handleModalToggle = () => {
    setShowModal(!showModal);
    handleButtonToggle();
  };

  return (
    <Modal onClose={handleModalToggle}>
      <Container>
        <ModalName>{t('addtransaction.header.title')}</ModalName>
        <AddTransactionForm closeModal={handleModalToggle} />
        <BtnClose onClick={handleModalToggle}>
          {t('addtransaction.buttons.cancel')}
        </BtnClose>
      </Container>
    </Modal>
  );
};

export default AddTransactionModal;
