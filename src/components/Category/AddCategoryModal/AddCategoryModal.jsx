import { useState } from 'react';
import Modal from 'components/commonComponents/Modal';
import {
  Container,
  ModalName,
  BtnClose,
  BtnCloseX,
  BtnCloseWrapper,
  CloseModalSvg,
} from './AddCategoryModal.styled';
import { AddCategoryForm } from '../AddCategoryForm/AddCategoryForm';
import { useTranslation } from 'react-i18next';

export const AddCategoryModal = ({ handleButtonToggle }) => {
  const [showModal, setShowModal] = useState(true);
  const { t } = useTranslation();

  const handleModalToggle = () => {
    setShowModal(!showModal);
    handleButtonToggle();
  };

  return (
    <Modal onClose={handleModalToggle}>
      <Container>
        <ModalName>{t('categoryData.form.title')}</ModalName>
        {/* BtnClose */}
        <BtnCloseWrapper>
          <BtnCloseX onClick={handleButtonToggle}>
            <CloseModalSvg />
          </BtnCloseX>
        </BtnCloseWrapper>
        <AddCategoryForm closeModal={handleModalToggle} />
        <BtnCloseWrapper>
          <BtnClose onClick={handleModalToggle}>
            {t('addtransaction.buttons.cancel')}
          </BtnClose>
        </BtnCloseWrapper>
      </Container>
    </Modal>
  );
};
