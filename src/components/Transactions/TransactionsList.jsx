import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import { TransactionItem } from './TransactionItem';
import Media from 'react-media';

import {
  Text,
  Table,
  TableLine,
  TableColumA,
  TableColumDate,
  TableColumType,
  TableColumCategory,
  TableColumComment,
  TableColumBalance,
  TableColumDelete,
  Th,
} from './TransactionItem.styled';

import { useGetAllQuery } from 'redux/transactions/transactionsApi';
import { useDeleteMutation } from 'redux/transactions/transactionsApi';

import toast from 'react-hot-toast';

export const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);
  const [deleteTransaction, { isError, error }] = useDeleteMutation();
  const { data, error: getAllError } = useGetAllQuery();

  const { t } = useTranslation();

  const handleDelete = async id => {
    if (id && !isError) {
      await deleteTransaction(id);
      setTransactions(transactions =>
        transactions.filter(transaction => transaction._id !== id)
      );
      toast.success(t('deleteprompt.notify'));
    } else {
      toast.error(error.data.message);
    }
  };

  useEffect(() => {
    if (data === 'undefined' || data?.length === 0) {
      return;
    } else if (getAllError) {
      toast.error(getAllError.data.message);
    }
    setTransactions(data);
  }, [data, getAllError, setTransactions]);

  return (
    <>
      <Media
        query="(max-width: 767px)"
        render={() => (
          <>
            {transactions === 'undefined' ? (
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
          <Table>
            <Th>
              <tr>
                <TableColumDate>{t('date')}</TableColumDate>
                <TableColumType>{t('type')}</TableColumType>
                <TableColumCategory>{t('category')}</TableColumCategory>
                <TableColumComment>{t('comment')}</TableColumComment>
                <TableColumA>{t('sum')}</TableColumA>
                <TableColumBalance>{t('balance')}</TableColumBalance>
                <TableColumDelete>{t('deleteprompt.delete')}</TableColumDelete>
              </tr>
            </Th>
            <tbody>
              {transactions?.length === 0 ? (
                <TableLine>
                  <TableColumA colSpan="7">
                    {t('noTransactionText')}
                  </TableColumA>
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
        )}
      />
    </>
  );
};
