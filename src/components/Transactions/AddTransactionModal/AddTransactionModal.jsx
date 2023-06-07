import { useState } from 'react';
import Modal from 'components/commonComponents/Modal';
import {
  Container,
  ModalName,
  BtnClose,
  BtnCloseX,
  BtnCloseWrapper,
  CloseModalSvg,
} from './AddTransactionModal.styled';
import { AddTransactionForm } from '../AddTransactionForm/AddTransactionForm';
import { useTranslation } from 'react-i18next';
import { useBalanceQuery } from '../../../redux/transactions/transactionsApi';

export const AddTransactionModal = ({ handleButtonToggle }) => {
  const [showModal, setShowModal] = useState(true);
  const { t } = useTranslation();
  const { refetch } = useBalanceQuery();

  const handleModalToggle = () => {
    setShowModal(!showModal);
    handleButtonToggle();
    refetch();
  };

  return (
    <Modal onClose={handleModalToggle}>
      <Container>
        <ModalName>{t('addtransaction.header.title')}</ModalName>
        {/* BtnClose */}
        <BtnCloseWrapper>
          <BtnCloseX onClick={handleButtonToggle}>
            <CloseModalSvg />
          </BtnCloseX>
        </BtnCloseWrapper>

        <AddTransactionForm closeModal={handleModalToggle} />
        <BtnCloseWrapper>
          <BtnClose onClick={handleModalToggle}>
            {t('addtransaction.buttons.cancel')}
          </BtnClose>
        </BtnCloseWrapper>
      </Container>
    </Modal>
  );
};
