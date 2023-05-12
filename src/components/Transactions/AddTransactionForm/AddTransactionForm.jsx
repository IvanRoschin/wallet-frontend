import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import Switch from 'react-switch';
import toast from 'react-hot-toast';
import { useAddMutation } from 'redux/transactions/transactionsApi';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import { English } from 'flatpickr/dist/l10n/default.js';
import { getCategoriesUk } from 'helpers/getCategories';
import { useTranslation } from 'react-i18next';

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
} from './AddTransactionForm.styled';
import { useAuth } from 'hooks/useAuth';

export const AddTransactionForm = ({ closeModal }) => {
  const [addTransaction, { isError, isSuccess, error }] = useAddMutation();
  const [results, setResults] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const type = isChecked ? 'income' : 'expense';

  const { t } = useTranslation();

  const language = localStorage.getItem('i18nextLng');
  let locale = English;
  let lang = 'en';
  if (language === 'uk' || language.includes('uk')) {
    locale = Ukrainian;
    lang = 'uk';
  }

  const { user } = useAuth();

  useEffect(() => {
    async function getCategoies() {
      try {
        const data = user.categories;
        const expense = data.filter(item => item.type === 'expense');
        const income = data.filter(item => item.type === 'income');
        console.log('isChecked', isChecked);
        if (!isChecked && lang === 'uk') {
          setResults(getCategoriesUk(income));
        }
        if (isChecked && lang === 'uk') {
          setResults(getCategoriesUk(expense));
        }
        // if (type === 'income' && lang === 'en') {
        //   setResults(getCategories(income));
        // }
        // if (type === 'expense' && lang === 'uk') {
        // setResults(getCategoriesUk(income));
        // }
      } catch (error) {
        console.log(error.message);
        // toast.error(i18n.t('Try_again'));
      }
    }
    getCategoies();
  }, [user.categories, isChecked, lang]);

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
      sum: '' || '0,00',
      date: new Date() || '00.00.0000',
      comment: '',
    },
    // validationSchema: userUpdateSchema,

    onSubmit: async values => {
      await addTransaction(values);
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error(`${error.data.message}`);
    }
    if (isSuccess) {
      toast.success('Successfully added!');
      // closeModal();
    }
  }, [isError, isSuccess, error]);

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
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: 'transparent',
                color: state.isFocused ? 'grey' : 'red',
              }),
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
        <InputWrapper>
          <InputFlatpickrWrapp>
            <FlatpickrStyled
              data-enable-time
              name="date"
              value={values?.date}
              options={{
                maxDate: 'today',
                enableTime: false,
                dateFormat: 'd.m.Y',
                locale: locale,
              }}
              onChange={date => {
                setFieldValue('date', date[0]);
              }}
            />
          </InputFlatpickrWrapp>
        </InputWrapper>

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

        <BtnAdd type="submit">{t('addtransaction.buttons.add')}</BtnAdd>
      </Form>
    </DataInputWrapp>
  );
};
