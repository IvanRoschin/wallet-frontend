import { useBalanceQuery } from '../../redux/transactions/transactionsApi';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, BoxText, BalanceText } from './Balance.styled';

export const Balance = () => {
  const { t } = useTranslation();

  const [balance, setBalance] = useState();
  const { data } = useBalanceQuery();

  useEffect(() => {
    if (data === 'undefind') {
      return;
    } else if (!data?.length) {
      setBalance('0.00');
    } else setBalance(data[0]?.balance.toFixed(2));
  }, [data, data?.length]);

  return (
    <Box>
      <BoxText>{t('balanceComponent.yourBalance')}</BoxText>
      <BalanceText>₴ {balance}</BalanceText>
    </Box>
  );
};
