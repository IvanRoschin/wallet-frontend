import { getFormatedDate } from 'helpers/getFormatedDate';
import { getFormatedSum } from 'helpers/getFormatedSum';
import { getPlusMinus } from 'helpers/getPlusMinus';
import { useTranslation } from 'react-i18next';
import { useBalanceQuery } from '../../redux/transactions/transactionsApi';

import Media from 'react-media';

import {
  Table,
  TableLine,
  TableColumA,
  TableColumB,
  TableColumSum,
  DeleteIcon,
  BtnDelete,
  TableColumDate,
  TableColumType,
  TableColumCategory,
  TableColumComment,
  TableColumBalance,
  TableColumDelete,
} from './TransactionItem.styled';

export const TransactionItem = ({
  _id,
  date,
  type,
  category,
  comment,
  sum,
  balance,
  onDelete,
}) => {
  const { refetch } = useBalanceQuery();

  const { t } = useTranslation();

  const handleClick = () => {
    onDelete(_id);
    refetch();
  };

  return (
    <>
      <Media
        query="(max-width: 767px)"
        render={() => (
          <>
            <Table type={type}>
              <thead>
                <TableLine>
                  <TableColumA>{t('date')}</TableColumA>
                  <TableColumB>{getFormatedDate(date)}</TableColumB>
                </TableLine>
                <TableLine>
                  <TableColumA>{t('type')}</TableColumA>
                  <TableColumB>{getPlusMinus(type)}</TableColumB>
                </TableLine>
                <TableLine>
                  <TableColumA>{t('category')}</TableColumA>
                  <TableColumB>{category.label}</TableColumB>
                </TableLine>
                <TableLine>
                  <TableColumA>{t('comment')}</TableColumA>
                  <TableColumB>{comment}</TableColumB>
                </TableLine>
                <TableLine>
                  <TableColumA>{t('sum')}</TableColumA>
                  <TableColumSum type={type}>
                    {getFormatedSum(sum)}
                  </TableColumSum>
                </TableLine>
                <TableLine>
                  <TableColumA>{t('balance')}</TableColumA>
                  <TableColumB>{getFormatedSum(balance)}</TableColumB>
                </TableLine>
                <TableLine>
                  <TableColumA>{t('deleteprompt.delete')}</TableColumA>
                  <TableColumB>
                    <BtnDelete type="button" onClick={handleClick}>
                      <DeleteIcon width={20} height={20} />
                    </BtnDelete>
                  </TableColumB>
                </TableLine>
              </thead>
            </Table>
          </>
        )}
      />
      <Media
        query="(min-width: 768px)"
        render={() => (
          <TableLine>
            <TableColumDate>{getFormatedDate(date)}</TableColumDate>
            <TableColumType>{getPlusMinus(type)}</TableColumType>
            <TableColumCategory>{category.label}</TableColumCategory>
            <TableColumComment>{comment}</TableColumComment>
            <TableColumSum type={type}>{getFormatedSum(sum)}</TableColumSum>
            <TableColumBalance>{getFormatedSum(balance)}</TableColumBalance>
            <TableColumDelete>
              <BtnDelete type="button" onClick={handleClick}>
                <DeleteIcon width={20} height={20} />
              </BtnDelete>
            </TableColumDelete>
          </TableLine>
        )}
      />
    </>
  );
};
