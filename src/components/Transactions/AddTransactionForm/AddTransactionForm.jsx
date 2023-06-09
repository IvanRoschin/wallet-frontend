import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import Switch from 'react-switch';
import toast from 'react-hot-toast';
import { useAddMutation } from 'redux/transactions/transactionsApi';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import { English } from 'flatpickr/dist/l10n/default.js';
import { useGetAllQuery } from 'redux/category/categoryApi';
import { getCategoriesUk, getCategoriesEn } from 'helpers/getCategories';
import { useTranslation } from 'react-i18next';
import Media from 'react-media';
import { AddTransaction } from '../../../validationSchemas';

import {
  DataInputWrapp,
  Form,
  InputWrapper,
  Input,
  FlatpickrStyled,
  InputComment,
  InputFlatpickrWrapp,
  SelectInput,
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
} from './AddTransactionForm.styled';
// import { useAuth } from 'hooks/useAuth';

export const AddTransactionForm = ({ closeModal }) => {
  const { data: categories } = useGetAllQuery();
  const { t } = useTranslation();

  const [addTransaction, { isError, isSuccess, error }] = useAddMutation();
  const [results, setResults] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const type = isChecked ? 'income' : 'expense';

  const language = localStorage.getItem('i18nextLng');
  let locale = English;
  let lang = 'en';
  if (language === 'uk' || language.includes('uk')) {
    locale = Ukrainian;
    lang = 'uk';
  }

  // const { user } = useAuth();

  useEffect(() => {
    async function getCategoies() {
      try {
        const data = categories;
        const expense = data?.filter(item => item.type === 'expense');
        const income = data?.filter(item => item.type === 'income');
        if (!isChecked && lang === 'uk') {
          setResults(getCategoriesUk(income));
        }
        if (isChecked && lang === 'uk') {
          setResults(getCategoriesUk(expense));
        }
        if (!isChecked && lang === 'en') {
          setResults(getCategoriesEn(income));
        }
        if (isChecked && lang === 'en') {
          setResults(getCategoriesEn(expense));
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
    getCategoies();
  }, [categories, isChecked, lang, t, type]);

  const handleSwitchChange = nextChecked => {
    setIsChecked(nextChecked);
    setFieldValue('type', type);
  };

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
      type: 'income',
      category: '',
      sum: '',
      date: new Date() || '00.00.0000',
      comment: '',
    },
    validationSchema: AddTransaction,

    onSubmit: async values => {
      await addTransaction(values);
      closeModal();
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error(`${error.data.message}`);
    }
    if (isSuccess) {
      toast.success(t('addtransaction.notify.success'));

      // closeModal();
    }
  }, [isError, isSuccess, error, t]);

  return (
    <DataInputWrapp>
      <Form onSubmit={handleSubmit}>
        {/* Switch */}
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

        {/* Select */}
        <InputWrapper>
          <SelectInput
            type={type}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: 'transparent',
                color: state.isFocused ? 'blue' : 'red',
                fontSize: '18px',
              }),
              option: (baseStyles, state) => {
                let color = 'grey';

                if (!isChecked && state.isFocused) {
                  color = 'green';
                } else if (isChecked && state.isFocused) {
                  color = 'red';
                }

                return {
                  ...baseStyles,
                  fontSize: '14px',
                  textAlign: 'start',
                  borderRadius: '20px',
                  backgroundColor: 'transparent',
                  backdropFilter: 'blur(5px)',
                  color: color,
                  width: '60px',
                };
              },
            }}
            placeholder={t('addtransaction.placeholders.select')}
            options={results}
            onChange={categoryValue => {
              setFieldValue('category', categoryValue);
            }}
          />
          {touched.category && errors.category && (
            <ErrorMessage>{errors.category}</ErrorMessage>
          )}
        </InputWrapper>

        <Media
          query="(max-width: 767px)"
          render={() => (
            <>
              {/* Sum */}
              <InputWrapper>
                <Input
                  type="number"
                  placeholder="0.00"
                  name="sum"
                  value={values?.sum}
                  onChange={handleChange('sum')}
                  onBlur={handleBlur('sum')}
                />
                {touched.sum && errors.sum && (
                  <ErrorMessage>{errors.sum}</ErrorMessage>
                )}
              </InputWrapper>

              {/* Date */}
              <InputFlatpickrWrapp>
                <FlatpickrStyled
                  data-enable-time
                  value={values?.date}
                  options={{
                    disableMobile: false,
                    defaultDate: 'today',
                    enableTime: false,
                    dateFormat: 'd.m.Y',
                    locale: locale,
                    maxDate: 'today',
                    fontSize: '18px',
                  }}
                  onChange={date => {
                    setFieldValue('date', date[0]);
                  }}
                />
              </InputFlatpickrWrapp>
            </>
          )}
        />

        {/*Wrapper */}
        <Media
          query="(min-width: 768px)"
          render={() => (
            <Wrapper>
              {/* Sum */}
              <InputWrapper>
                <Input
                  type="number"
                  placeholder="0.00"
                  name="sum"
                  value={values?.sum}
                  onChange={handleChange('sum')}
                  onBlur={handleBlur('sum')}
                />
                {touched.sum && errors.sum && (
                  <ErrorMessage>{errors.sum}</ErrorMessage>
                )}
              </InputWrapper>

              {/* Date */}
              <InputFlatpickrWrapp>
                <FlatpickrStyled
                  data-enable-time
                  value={values?.date}
                  options={{
                    disableMobile: false,
                    defaultDate: 'today',
                    enableTime: false,
                    dateFormat: 'd.m.Y',
                    locale: locale,
                    maxDate: 'today',
                  }}
                  onChange={date => {
                    setFieldValue('date', date[0]);
                  }}
                />
              </InputFlatpickrWrapp>
            </Wrapper>
          )}
        />

        {/* Comment */}
        <InputWrapper>
          <InputComment
            name="comment"
            type="text"
            placeholder={t('addtransaction.placeholders.comment')}
            value={values?.comment}
            onChange={handleChange('comment')}
            onBlur={handleBlur('comment')}
          />
          {touched.comment && errors.comment && (
            <ErrorMessage>{errors.comment}</ErrorMessage>
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
