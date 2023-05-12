import { useGetAllQuery } from 'redux/transactions/transactionsApi';
import { useState, useEffect } from 'react';

export const Transactions = () => {
  const [transaction, setTransaction] = useState({});
  const { data, isFetching } = useGetAllQuery();

  useEffect(() => {
    if (data !== undefined && data.length > 0) {
      let transaction = {};
      transaction = data[0].transaction;
      setTransaction(transaction);
    } else {
      console.log('no transactions');
      return;
    }
  }, [data]);
  console.log(transaction);

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
