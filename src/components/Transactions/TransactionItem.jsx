import { getFormatedDate } from 'helpers/getFormatedDate';
import { getFormatedSum } from 'helpers/getFormatedSum';
import { getPlusMinus } from 'helpers/getPlusMinus';
import { useTranslation } from 'react-i18next';
// import { useState } from 'react';

import {
  Table,
  TableLine,
  TableColumA,
  TableColumB,
  TableColumSum,
  DeleteIcon,
  BtnDelete,
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
  const { t } = useTranslation();

  const handleClick = () => {
    onDelete(_id);
  };
  // const [openModal, setOpenModal] = useState(false);

  return (
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
          <TableColumSum type={type}>{getFormatedSum(sum)}</TableColumSum>
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
  );
};
