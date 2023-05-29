import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import { TransactionItem } from './TransactionItem';
import Media from 'react-media';

import {
  Text,
  Table,
  TableHead,
  TableLine,
  TableColumA,
} from './TransactionItem.styled';

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
    if (data === 'undefined' || data?.length === 0) {
      return;
    } else setTransactions(data);
  }, [data, setTransactions]);

  return (
    <>
      <Media
        query="(max-width: 767px)"
        render={() => (
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
        )}
      />
      <Media
        query="(min-width: 768px)"
        render={() => (
          <>
            <TableHead>
              <thead>
                <TableLine>
                  <TableColumA>{t('date')}</TableColumA>
                  <TableColumA>{t('type')}</TableColumA>
                  <TableColumA>{t('category')}</TableColumA>
                  <TableColumA>{t('comment')}</TableColumA>
                  <TableColumA>{t('sum')}</TableColumA>
                  <TableColumA>{t('balance')}</TableColumA>
                  <TableColumA>{t('deleteprompt.delete')}</TableColumA>
                </TableLine>
              </thead>
            </TableHead>
            <Table>
              <tbody>
                {transactions?.length === 0 ? (
                  <TableLine>
                    <TableColumA>{t('noTransactionText')}</TableColumA>
                  </TableLine>
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
              </tbody>
            </Table>
          </>
        )}
      />
    </>
  );
};
