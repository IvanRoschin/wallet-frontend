import { useBalanceQuery } from '../../redux/transactions/transactionsApi';
import { useState, useEffect } from 'react';
import { Box, BoxText, BalanceText } from './Balance.styled';
import { useTranslation } from 'react-i18next';

export const Balance = () => {
  const { t } = useTranslation();

  const [balance, setBalance] = useState(null);
  const { data } = useBalanceQuery();
  console.log('data', data);

  useEffect(() => {
    let balance = '0.00';
    if (data === 0) {
      setBalance(balance);
    } else if (data) {
      balance = data[0].balance.toFixed(2);
      setBalance(balance);
    }
  }, [data]);

  return (
    <Box>
      <BoxText>{t('balanceComponent.yourBalance')}</BoxText>
      <BalanceText>₴ {balance}</BalanceText>
    </Box>
  );
};
