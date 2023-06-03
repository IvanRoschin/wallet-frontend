import { useState, useEffect } from 'react';
import { useGetAllQuery } from 'redux/category/categoryApi';
import { useDeleteCategoryMutation } from 'redux/category/categoryApi';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import {
  Text,
  Table,
  Thead,
  Tr,
  ThTitle,
  ThColor,
  ThName,
  ThType,
  ThDelete,
  BtnDelete,
  DeleteIcon,
} from './CategoryList.styled';

export const CategoryList = () => {
  const [categories, setCategories] = useState();
  const { data, error: getAllError } = useGetAllQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  const { t } = useTranslation();

  useEffect(() => {
    if (getAllError) {
      toast.error(getAllError.data.message);
    }
    setCategories(data);
  }, [data, getAllError]);
  console.log('categories?.length', categories?.length);
  return (
    <>
      {categories?.length === 0 ? (
        <Text>{t('noTransactionText')}</Text>
      ) : (
        <Table>
          <Thead>
            <Tr>
              <ThTitle>{t('categoryData.color')}</ThTitle>
              <ThTitle>{t('categoryData.name')}</ThTitle>
              <ThTitle>{t('categoryData.type')}</ThTitle>
              <ThTitle>{t('categoryData.delete')}</ThTitle>
            </Tr>
          </Thead>
          <tbody>
            {categories?.map(({ _id, color, nameEn, nameUk, type }) => (
              <Tr key={color}>
                <ThColor style={{ backgroundColor: color }}></ThColor>
                <ThName>{nameUk}</ThName>
                <ThType type={type}>{type}</ThType>
                <ThDelete>
                  <BtnDelete onClick={() => deleteCategory(_id)}>
                    <DeleteIcon />
                  </BtnDelete>
                </ThDelete>
              </Tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
