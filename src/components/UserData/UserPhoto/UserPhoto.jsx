import { useState, useRef } from 'react';
import { useFormik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useAvatarMutation } from 'redux/user/userApi';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

import {
  AvatarWrapper,
  AvatarImg,
  AddAvatarBtn,
  HiddenInput,
  EditPhotoBtn,
  Kamera,
} from './UserPhoto.styled';
import { ReactComponent as AvatarPlus } from 'images/svg/addAvatar.svg';

export const UserPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [updateAvatar] = useAvatarMutation();

  const { t } = useTranslation();
  const { user } = useAuth();

  const filePicker = useRef(null);

  const { handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      photoURL: user?.photoURL,
    },
    onSubmit: async ({ photoURL }) => {
      if (!selectedFile) {
        filePicker.current.click();
        return;
      }
      const data = new FormData();
      data.append('photoURL', selectedFile);
      await updateAvatar(data);
    },
  });

  return (
    <AvatarWrapper onSubmit={handleSubmit}>
      <AddAvatarBtn>
        {user.photoURL ? (
          <AvatarImg src={user.photoURL} alt={user.name} width="233px" />
        ) : (
          <AvatarPlus />
        )}
      </AddAvatarBtn>

      <HiddenInput
        ref={filePicker}
        type="file"
        name="photoURL"
        onChange={e => {
          setSelectedFile(e.currentTarget.files[0]);
          setFieldValue('photoURL', e.currentTarget.files[0]);
          toast.success(i18n.t('userData.Photo_selected'));
        }}
        accept="image/*,.png,.jpg,.gif,.web"
      />

      <EditPhotoBtn type="submit">
        <Kamera />
        <span>{t('userData.Edit_photo')}</span>
      </EditPhotoBtn>
    </AvatarWrapper>
  );
};

export default UserPhoto;
