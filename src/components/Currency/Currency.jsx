import { useEffect, useState } from 'react';
import { useGetCurrencyQuery } from 'redux/currency/currencyApi';
import { getFormatedSum } from 'helpers/getFormatedSum';
import { useTranslation } from 'react-i18next';

import { Table, Thead, TheadLine, TableColum, Tbody } from './Currency.styled';

export const Currency = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const { data } = useGetCurrencyQuery();
  const { t } = useTranslation();

  useEffect(() => {
    let result = [];
    if (data === 'undefined' || data?.length === 0) {
      return;
    } else
      result = data?.exchangeRate.filter(
        item =>
          item?.currency === 'USD' ||
          item?.currency === 'EUR' ||
          item?.currency === 'PLN'
      );

    setCurrencyData(result);
  }, [data]);

  return (
    <Table>
      <Thead>
        <TheadLine>
          <TableColum> {t('currencyPage.currency')}</TableColum>
          <TableColum> {t('currencyPage.purchase')}</TableColum>
          <TableColum> {t('currencyPage.sale')}</TableColum>
        </TheadLine>
      </Thead>
      <Tbody>
        {currencyData?.map(({ currency, saleRateNB, purchaseRateNB }) => (
          <TheadLine key={currency}>
            <TableColum>{currency} </TableColum>
            <TableColum>{getFormatedSum(saleRateNB)}</TableColum>
            <TableColum>{getFormatedSum(purchaseRateNB)}</TableColum>
          </TheadLine>
        ))}
      </Tbody>
    </Table>
  );
};
