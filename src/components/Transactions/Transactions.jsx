import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import { TransactionItem } from './TransactionItem';
import { Text } from './TransactionItem.styled';

import { useGetAllQuery } from 'redux/transactions/transactionsApi';
import { useDeleteMutation } from 'redux/transactions/transactionsApi';

import toast from 'react-hot-toast';

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [deleteTransaction, { isError, error }] = useDeleteMutation();
  const { data } = useGetAllQuery();

  const { t } = useTranslation();

  const handleDelete = async id => {
    if (id && !isError) {
      await deleteTransaction(id);
      setTransactions(transactions =>
        transactions.filter(transaction => transaction.id !== id)
      );
      toast.success(t('deleteprompt.notify'));
    } else {
      toast.error(error.data.message);
    }
  };

  useEffect(() => {
    if (data === 'undefind') {
      return;
    } else {
      setTransactions(data);
    }
  }, [data, setTransactions]);

  return (
    <>
      {transactions?.length === 0 ? (
        <Text>{t('noTransactionText')}</Text>
      ) : (
        <>
          {transactions?.map(transaction => (
            <TransactionItem
              key={transaction._id}
              {...transaction}
              onDelete={handleDelete}
            />
          ))}
        </>
      )}
    </>
  );
};
