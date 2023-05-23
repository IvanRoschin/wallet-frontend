import { useSelector } from 'react-redux';
import { selectPeriodTransaction, selectPeriodBalance } from 'redux/selector';

export const useTrans = () => {
  const periodCategory = useSelector(selectPeriodTransaction);
  const periodBalance = useSelector(selectPeriodBalance);

  return {
    periodCategory,
    periodBalance,
  };
};
