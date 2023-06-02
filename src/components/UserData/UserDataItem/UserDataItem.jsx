import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import css from './UserPhoneInput.css';
import React, { useState, useCallback } from 'react';
import { useEditMutation } from 'redux/user/userApi';
import { useFormik } from 'formik';

// import { userUpdateSchema } from 'helpers/validationSchemas';

import {
  DataInputWrapp,
  Form,
  Label,
  Input,
  InputWrapper,
  EditBtn,
  ErrorMessage,
  IconPen,
  SaveIcon,
} from './UserDataItem.styled';
// import { detectLanguage } from 'helpers/detectLanguage';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'hooks/useAuth';

const UserDataItem = () => {
  const [editUser] = useEditMutation();
  const { t } = useTranslation();
  const { user } = useAuth();

  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isEmailDisabled, setIsEmailDisabled] = useState(true);
  const [isPhoneDisabled, setIsPhoneDisabled] = useState(true);

  const iconColorDisabled = 'rgba(0,0,0,0.6)';

  const isAnyEditing = !isNameDisabled || !isEmailDisabled || !isPhoneDisabled;

  const onSubmitClick = useCallback(
    (event, field, errors) => {
      if (errors && Object.keys(errors).length) return;
      setTimeout(() => {
        if (field === 'name') setIsNameDisabled(!isNameDisabled);
        if (field === 'email') setIsEmailDisabled(!isEmailDisabled);
        if (field === 'phone') setIsPhoneDisabled(!isPhoneDisabled);
      }, 0);

      return true;
    },
    [isNameDisabled, isEmailDisabled, isPhoneDisabled]
  );

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: user.name || 'New User',
      email: user.email,
      phone: user.phone || '+380000000000',
    },
    // validationSchema: userUpdateSchema,

    onSubmit: async values => {
      await editUser(values);
    },
  });

  return (
    <div>
      <DataInputWrapp>
        <Form onSubmit={handleSubmit}>
          {/* Name */}
          <InputWrapper>
            <Label>{t('Name')}:</Label>
            <Input
              type="text"
              name="name"
              value={values.name}
              placeholder={user?.name}
              disabled={isNameDisabled}
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
              isactive={isNameDisabled ? 0 : 1}
            />
            {touched.name && errors.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
            {isNameDisabled && (
              <EditBtn
                type="submit"
                disabled={isAnyEditing}
                className={isAnyEditing ? '' : 'btn-active'}
                onClick={() => setIsNameDisabled(!isNameDisabled)}
              >
                <IconPen fill={isAnyEditing ? iconColorDisabled : undefined} />
              </EditBtn>
            )}
            {!isNameDisabled && (
              <EditBtn
                type="submit"
                className="btn-active"
                onClick={e => {
                  onSubmitClick(e, 'name', errors);
                }}
              >
                <SaveIcon />
              </EditBtn>
            )}
          </InputWrapper>

          {/* Email */}
          <InputWrapper>
            <Label>{t('Email')}:</Label>
            <Input
              type="text"
              name="email"
              value={values.email}
              placeholder={user?.email}
              disabled={isEmailDisabled}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              isactive={isEmailDisabled ? 0 : 1}
            />
            {touched.email && errors.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
            {isEmailDisabled && (
              <EditBtn
                type="submit"
                disabled={isAnyEditing}
                onClick={() => setIsEmailDisabled(!isEmailDisabled)}
                className={isAnyEditing ? '' : 'btn-active'}
              >
                <IconPen fill={isAnyEditing ? iconColorDisabled : undefined} />
              </EditBtn>
            )}
            {!isEmailDisabled && (
              <EditBtn
                type="submit"
                className="btn-active"
                onClick={e => onSubmitClick(e, 'email', errors)}
              >
                <SaveIcon />
              </EditBtn>
            )}
          </InputWrapper>

          {/* Phone */}
          <InputWrapper>
            <Label>{t('Phone')}:</Label>
            <PhoneInput
              name="phone"
              type="tel"
              // disabled={isPhoneDisabled}
              className={css}
              onlyCountries={['ua']}
              country={'ua'}
              countryCodeEditable={false}
              errors={errors}
              value={user?.phone}
              onChange={phone => {
                setFieldValue('phone', `+${phone}`);
              }}
              style={{
                border: `${
                  isPhoneDisabled
                    ? '1px solid transparent'
                    : '1px solid #24CCA7'
                }`,
                borderRadius: 30,
                backgroundColor: `${
                  isPhoneDisabled ? 'transparent' : '#ffffff'
                }`,
              }}
            />
            {touched.phone && errors.phone && (
              <ErrorMessage>{errors.phone}</ErrorMessage>
            )}
            {isPhoneDisabled && (
              <EditBtn
                type="submit"
                disabled={isAnyEditing}
                className={isAnyEditing ? '' : 'btn-active'}
                onClick={() => setIsPhoneDisabled(!isPhoneDisabled)}
              >
                <IconPen fill={isAnyEditing ? iconColorDisabled : undefined} />
              </EditBtn>
            )}
            {!isPhoneDisabled && (
              <EditBtn
                type="submit"
                className="btn-active"
                onClick={e => onSubmitClick(e, 'phone', errors)}
              >
                <SaveIcon />
              </EditBtn>
            )}
          </InputWrapper>
        </Form>
      </DataInputWrapp>
    </div>
  );
};

export default UserDataItem;
