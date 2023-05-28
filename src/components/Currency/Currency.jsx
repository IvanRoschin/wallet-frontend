import { useEffect, useState } from 'react';
import { useGetCurrencyQuery } from 'redux/currency/currencyApi';
import { getFormatedSum } from 'helpers/getFormatedSum';

import { Table, Thead, TheadLine, TableColum, Tbody } from './Currency.styled';

export const Currency = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const { data } = useGetCurrencyQuery();

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
          <TableColum>Currency</TableColum>
          <TableColum>Purchase</TableColum>
          <TableColum>Sale</TableColum>
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
