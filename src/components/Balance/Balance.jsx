import { useBalanceQuery } from '../../redux/transactions/transactionsApi';
import { useState, useEffect } from 'react';

export const Balance = () => {
  const [balance, setBalance] = useState(null);
  const { data } = useBalanceQuery();

  useEffect(() => {
    if (data) {
      const balance = data[0].balance.toFixed(2);
      setBalance(balance);
    }
  }, [data]);

  return <div>Balance: ₴{balance}</div>;
};
