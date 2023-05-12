import { useGetAllQuery } from 'redux/transactions/transactionsApi';
import { useState, useEffect } from 'react';

export const Transactions = () => {
  const [transaction, setTransaction] = useState({});
  const { data } = useGetAllQuery();

  useEffect(() => {
    let transaction;
    if (data === undefined || !data.length) {
      return;
    } else {
      transaction = data[0].transaction;
      setTransaction(transaction);
    }
  }, [data]);
  console.log('transaction', transaction);

  return (
    <>
      {/* {transaction?.length === 0 ? (
        <p>Your contactlist is empty</p>
      ) : (
        <table>
          <head>
            <tr>
              <td>Date</td>
              <td>Type</td>
              <td>Comment</td>
              <td>Sum</td>
              <td>Balance</td>
              <td>Delete</td>
            </tr>
          </head>
          <tbody>
            {transactions.map(transaction => (
              <td key={transaction._id} {...transaction} />
            ))}
          </tbody>
        </table>
      )} */}
    </>
  );
};
