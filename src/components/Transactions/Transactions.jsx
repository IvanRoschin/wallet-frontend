import { useGetAllQuery } from 'redux/transactions/transactionsApi';
import { useState, useEffect } from 'react';

export const Transactions = () => {
  const [transaction, setTransaction] = useState({});
  const { data = [] } = useGetAllQuery();

  useEffect(() => {
    if (!data.length) {
      return;
    } else {
      let transaction = {};
      transaction = data[0].transaction;
      setTransaction(transaction);
    }
  }, [data]);
  console.log(transaction);

  return (
    <>
      <div>Transactions </div>
    </>
  );
};
