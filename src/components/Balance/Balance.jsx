import { useTranslation } from 'react-i18next';
import { Box, BoxText, BalanceText } from './Balance.styled';
import { useBalanceQuery } from '../../redux/transactions/transactionsApi';
import { getFormatedSum } from 'helpers/getFormatedSum';
import { useState, useEffect } from 'react';

export const Balance = () => {
  const { t } = useTranslation();

  const [balance, setBalance] = useState();

  const { data } = useBalanceQuery();
  useEffect(() => {
    if (data === 'undefind') {
      return;
    } else if (!data?.length) {
      setBalance('0.00');
    } else {
      setBalance(getFormatedSum(data[0].balance));
    }
  }, [data, data?.length]);

  return (
    <Box>
      <BoxText>{t('balanceComponent.yourBalance')}</BoxText>
      <BalanceText>₴ {balance}</BalanceText>
    </Box>
  );
};
