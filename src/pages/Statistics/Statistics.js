import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetByCategoryQuery } from 'redux/transactions/transactionsApi';
import { v4 as uuidv4 } from 'uuid';
import { DoughnutChart } from './Chart';
import {
  Title,
  ChartWrapper,
  Head,
  HeadItem,
  Body,
  BodyItemColor,
  BodyItemCategory,
  BodyItemSum,
} from './Statistics.styled';

export const Statistics = () => {
  const { t } = useTranslation();
  const { data } = useGetByCategoryQuery();

  const [transactions, setTransactions] = useState();

  useEffect(() => {
    if (data === 'undefined') {
      return;
    } else {
      setTransactions(data);
    }
  }, [data]);

  const [chartData] = useState({
    // labels: data?.map(({ _id }) => _id),
    datasets: [
      {
        label: 'Category',
        data: data?.map(({ balance }) => balance),
        backgroundColor: data?.map(({ color }) => color),
      },
    ],
  });

  return (
    <div>
      <Title>{t('statistics.header')}</Title>
      <ChartWrapper style={{ width: 280 }}>
        <DoughnutChart chartData={chartData} />
      </ChartWrapper>
      <Head>
        <HeadItem>{t('category')}</HeadItem>
        <HeadItem>{t('sum')}</HeadItem>
      </Head>
      {transactions?.map(({ _id, balance, color }) => {
        return (
          <Body key={uuidv4()}>
            <BodyItemColor color={color}></BodyItemColor>
            <BodyItemCategory>{_id} </BodyItemCategory>
            <BodyItemSum>{balance}</BodyItemSum>
          </Body>
        );
      })}
    </div>
  );
};
