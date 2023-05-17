import { useEffect, useState } from 'react';
import { useGetByCategoryQuery } from 'redux/transactions/transactionsApi';
import { v4 as uuidv4 } from 'uuid';

export const Statistics = () => {
  const [transactions, setTransactions] = useState();
  const { data } = useGetByCategoryQuery();

  useEffect(() => {
    if (data === 'undefined') {
      return;
    } else {
      setTransactions(data);
    }
  }, [data]);

  return (
    <div>
      Statistics
      <ul>
        {transactions?.map(({ _id, balance }) => (
          <li key={uuidv4()}>
            {_id.category} - {balance}
          </li>
        ))}
      </ul>
    </div>
  );
};
