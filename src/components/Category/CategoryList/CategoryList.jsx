import { useState, useEffect } from 'react';
import { useGetAllQuery } from 'redux/category/categoryApi';
import { useDeleteCategoryMutation } from 'redux/category/categoryApi';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { CategoryItem } from '../CategoryItem';
import { Text, Table, Thead, Tr, ThTitle } from './CategoryList.styled';

export const CategoryList = () => {
  const [categories, setCategories] = useState();
  const { data, error: getAllError } = useGetAllQuery();
  const [deleteCategory, { isError, error }] = useDeleteCategoryMutation();

  const { t } = useTranslation();

  const handleDelete = async id => {
    if (id && !isError) {
      await deleteCategory(id);
      setCategories(categories =>
        categories.filter(category => category._id !== id)
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
    setCategories(data);
  }, [data, getAllError, setCategories]);

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
          {categories?.map(category => (
            <CategoryItem
              key={category._id}
              {...category}
              onDelete={handleDelete}
            />
          ))}
        </Table>
      )}
    </>
  );
};
