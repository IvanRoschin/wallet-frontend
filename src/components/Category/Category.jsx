import { useGetAllQuery } from 'redux/category/categoryApi';

export const CategoryList = () => {
  const { data } = useGetAllQuery();
  console.log('data', data);
  return <div>Categories</div>;
};
