import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import Switch from 'react-switch';
import toast from 'react-hot-toast';
import { useAddCategoryMutation } from 'redux/category/categoryApi';

import { useTranslation } from 'react-i18next';
import Media from 'react-media';

import {
  DataInputWrapp,
  Form,
  InputWrapper,
  InputComment,
  HiddenInput,
  ErrorMessage,
  SwitchBox,
  SwitchIncome,
  SwitchExpence,
  SwtchCase,
  SwitcherButtonVert,
  SwitcherButtonGor,
  BtnAdd,
  BtnAddWrapper,
  Wrapper,
} from './AddCategoryForm.styled';

export const AddCategoryForm = ({ closeModal }) => {
  const { t } = useTranslation();

  const [addCategory, { isError, isSuccess, error }] = useAddCategoryMutation();
  const [isChecked, setIsChecked] = useState(false);

  const type = isChecked ? 'income' : 'expense';

  const handleSwitchChange = nextChecked => {
    setIsChecked(nextChecked);
    setFieldValue('type', type);
  };

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

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
      nameUk: '',
      nameEn: '',
      type: '' || 'income',
      color: getRandomColor(),
    },
    // validationSchema: userUpdateSchema,

    onSubmit: async values => {
      await addCategory(values);
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error(`${error.data.message}`);
    }
    if (isSuccess) {
      toast.success(t('categoryData.notify.success'));
    }
  }, [isError, isSuccess, error, t]);

  return (
    <DataInputWrapp>
      <Form onSubmit={handleSubmit}>
        {/* Type */}
        <SwitchBox>
          <SwitchIncome type={type}>
            {t('addtransaction.header.income')}
          </SwitchIncome>
          <SwtchCase>
            <Switch
              name="type"
              checked={isChecked}
              onChange={handleSwitchChange}
              className="react-switch"
              height={30}
              width={78}
              handleDiameter={44}
              offColor="#FFFFFF"
              onColor="#FFFFFF"
              offHandleColor="#24CCA7"
              onHandleColor="#FF6596"
              boxShadow={
                isChecked
                  ? '0px 6px 15px rgba(255, 101, 150, 0.5)'
                  : '0px 6px 15px rgba(36, 204, 167, 0.5)'
              }
              uncheckedIcon={false}
              checkedIcon={false}
              uncheckedHandleIcon={
                <>
                  <SwitcherButtonVert />
                  <SwitcherButtonGor />
                </>
              }
              checkedHandleIcon={<SwitcherButtonGor />}
            />
          </SwtchCase>
          <SwitchExpence type={type}>
            {t('addtransaction.header.expense')}
          </SwitchExpence>
        </SwitchBox>

        {/*Wrapper */}
        <Media
          query="(min-width: 768px)"
          render={() => (
            <Wrapper>
              {/* NameEn */}
              <InputWrapper>
                <InputComment
                  name="nameEn"
                  type="text"
                  placeholder={t('categoryData.form.nameEn')}
                  value={values?.nameEn}
                  onChange={handleChange('nameEn')}
                  onBlur={handleBlur('nameEn')}
                />
                {touched.nameEn && errors.nameEn && (
                  <ErrorMessage>{errors.nameEn}</ErrorMessage>
                )}
              </InputWrapper>

              {/* NameUk */}
              <InputWrapper>
                <InputComment
                  name="nameUk"
                  type="text"
                  placeholder={t('categoryData.form.nameUk')}
                  value={values?.nameUk}
                  onChange={handleChange('nameUk')}
                  onBlur={handleBlur('nameUk')}
                />
                {touched.nameUk && errors.nameUk && (
                  <ErrorMessage>{errors.nameUk}</ErrorMessage>
                )}
              </InputWrapper>
            </Wrapper>
          )}
        />

        {/* Color */}
        <InputWrapper>
          <HiddenInput
            name="color"
            type="text"
            placeholder={t('categoryData.form.color')}
            value={values.color}
            onChange={handleChange('color')}
            onBlur={handleBlur('color')}
          />
          {touched.color && errors.color && (
            <ErrorMessage>{errors.color}</ErrorMessage>
          )}
        </InputWrapper>

        {/* BtnAdd */}
        <BtnAddWrapper>
          <BtnAdd type="submit">{t('addtransaction.buttons.add')}</BtnAdd>
        </BtnAddWrapper>
      </Form>
    </DataInputWrapp>
  );
};
