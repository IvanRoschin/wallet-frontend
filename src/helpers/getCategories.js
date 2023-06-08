export const getCategoriesUk = array => {
  return array.map(({ nameUk, type, color }) => ({
    label: nameUk,
    value: nameUk,
    type,
    color,
  }));
};

export const getCategoriesEn = array => {
  return array.map(({ nameEn, type, color }) => ({
    label: nameEn,
    value: nameEn,
    type,
    color,
  }));
};
