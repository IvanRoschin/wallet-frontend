import { useBalanceQuery } from '../../redux/transactions/transactionsApi';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, BoxText, BalanceText } from './Balance.styled';

export const Balance = () => {
  const { t } = useTranslation();

  const [balance, setBalance] = useState('0.00');
  const { data = [] } = useBalanceQuery();

  useEffect(() => {
    let balance;
    if (!data.length) {
      return;
    } else {
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
