import { CategoryList } from '.';
import { useTranslation } from 'react-i18next';
import { Title } from './Category.styled';

export const Category = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t('categoryData.title')}</Title>
      <CategoryList />
    </>
  );
};
