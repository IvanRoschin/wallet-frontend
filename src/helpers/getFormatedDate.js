export const getFormatedDate = date => {
  // if (!date) {
  //   const formatedDate = '00.00.0000';
  //   return formatedDate;
  // }
  const dateToObject = new Date(date);
  const formatedDate = dateToObject.toLocaleDateString('ua') || '00.00.0000';
  return formatedDate;
};
