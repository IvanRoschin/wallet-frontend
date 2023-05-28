import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBalanceQuery } from '../../redux/transactions/transactionsApi';
import { useGetPeriodQuery } from '../../redux/transactions/transactionsApi';
import { v4 as uuidv4 } from 'uuid';
import { DoughnutChart } from './Chart';
import { getFormatedSum } from 'helpers/getFormatedSum';
import { useFormik } from 'formik';
import { month, year } from 'helpers/getCurrentPeriod';

import {
  Title,
  ChartWrapper,
  Text,
  Head,
  HeadItem,
  Body,
  BodyItemColor,
  BodyItemCategory,
  BodyItemSum,
  Footer,
  FooterItem,
  FooterExpense,
  FooterIncome,
  SelectInput,
} from './Statistics.styled';

export const Statistics = () => {
  const { t } = useTranslation();

  const monthDataSet = {
    tittle: 'month',
    data: [
      { label: t('diagramTab.optionData.jan'), value: 1, id: 'jan' },
      { label: t('diagramTab.optionData.feb'), value: 2, id: 'feb' },
      { label: t('diagramTab.optionData.mar'), value: 3, id: 'mar' },
      { label: t('diagramTab.optionData.apr'), value: 4, id: 'apr' },
      { label: t('diagramTab.optionData.may'), value: 5, id: 'may' },
      { label: t('diagramTab.optionData.jun'), value: 6, id: 'jun' },
      { label: t('diagramTab.optionData.jul'), value: 7, id: 'jul' },
      { label: t('diagramTab.optionData.aug'), value: 8, id: 'aug' },
      { label: t('diagramTab.optionData.sep'), value: 9, id: 'sep' },
      { label: t('diagramTab.optionData.oct'), value: 10, id: 'oct' },
      { label: t('diagramTab.optionData.nov'), value: 11, id: 'nov' },
      { label: t('diagramTab.optionData.dec'), value: 12, id: 'dec' },
    ],
  };

  const yearDataSet = {
    tittle: 'year',
    data: [
      { label: '2019', value: 2019, id: '19' },
      { label: '2020', value: 2020, id: '20' },
      { label: '2021', value: 2021, id: '21' },
      { label: '2022', value: 2022, id: '22' },
      { label: '2023', value: 2023, id: '23' },
    ],
  };

  const [period, setPeriod] = useState();
  const [balance, setBalance] = useState();
  const [expense, setExpense] = useState();
  const [income, setIncome] = useState();

  const { data: periodCategory } = useGetPeriodQuery(period);
  const { data: periodBalance } = useBalanceQuery(period);

  useEffect(() => {
    if (periodBalance?.length > 0) {
      setBalance(getFormatedSum(periodBalance[0].balance));
      setIncome(getFormatedSum(periodBalance[0].income));
      setExpense(getFormatedSum(periodBalance[0].expense));
    } else if (periodBalance?.balance === 'undefind') {
      return;
    } else if (periodBalance?.expense === 'undefind') {
      return;
    } else if (periodBalance?.income === 'undefind') {
      return;
    } else {
      setBalance('0.00');
      setIncome('0.00');
      setExpense('0.00');
    }

    return;
  }, [
    period,
    periodBalance,
    periodCategory,
    periodCategory?.length,
    periodBalance?.length,
  ]);

  const { handleSubmit, setFieldValue, submitForm } = useFormik({
    initialValues: {
      month,
      year,
    },
    onSubmit: async values => {
      setPeriod(values);
      localStorage.clear();
    },
  });
  const chartData = {
    datasets: [
      {
        data: periodCategory?.map(({ summ }) => summ),
        backgroundColor: periodCategory?.map(({ color }) => color),
        cutout: '70%',
        radius: '95%',
      },
    ],
  };

  return (
    <div>
      <Title>{t('statistics.header')}</Title>
      <ChartWrapper style={{ width: 280 }}>
        <DoughnutChart chartData={chartData} />
        <Text>₴ {balance}</Text>
      </ChartWrapper>
      <div>
        <form onSubmit={handleSubmit}>
          <SelectInput
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                marginTop: '5px',
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                boxShadow: 'none',
                color: 'black',
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: '12px',
                backgroundColor: 'transparent',
                backdropFilter: 'blur(5px)',
                borderRadius: '20px',
                color: state.isFocused ? 'green' : 'grey',
              }),
            }}
            placeholder={t('diagramTab.optionData.month')}
            options={monthDataSet.data}
            name="month"
            onChange={monthValue => {
              setFieldValue('month', monthValue.value);
              submitForm();
            }}
          />
          <SelectInput
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                marginTop: '5px',
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                boxShadow: 'none',
                color: 'black',
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: '12px',
                backgroundColor: 'transparent',
                backdropFilter: 'blur(5px)',
                borderRadius: '20px',
                color: state.isFocused ? 'green' : 'grey',
              }),
            }}
            placeholder={t('diagramTab.optionData.year')}
            options={yearDataSet.data}
            name="year"
            onChange={yearValue => {
              setFieldValue('year', yearValue.value);
              submitForm();
            }}
          />
        </form>
      </div>
      <Head>
        <HeadItem>{t('category')}</HeadItem>
        <HeadItem>{t('sum')}</HeadItem>
      </Head>
      {periodCategory?.map(({ _id, summ, color }) => {
        return (
          <Body key={uuidv4()}>
            <BodyItemColor color={color}></BodyItemColor>
            <BodyItemCategory>{_id} </BodyItemCategory>
            <BodyItemSum>{getFormatedSum(summ)}</BodyItemSum>
          </Body>
        );
      })}
      <Footer>
        <FooterItem>{t('expense')}:</FooterItem>
        <FooterExpense>{expense}</FooterExpense>
      </Footer>
      <Footer>
        <FooterItem>{t('income')}:</FooterItem>
        <FooterIncome>{income}</FooterIncome>
      </Footer>
    </div>
  );
};
