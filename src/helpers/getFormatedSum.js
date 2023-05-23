export const getFormatedSum = data => {
  const formatedSum = data.toFixed(2).toLocaleString('uk-UA');
  const separator = ' ';
  return formatedSum.replace(
    /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
    '$1' + separator
  );
};
