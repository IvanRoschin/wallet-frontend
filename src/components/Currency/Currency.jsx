import axios from 'axios';

const { data } = axios.get(
  'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5'
);
console.log(data);
export const Currency = () => {
  console.log(data);

  return <div>Currency</div>;
};
