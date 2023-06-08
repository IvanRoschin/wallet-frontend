export const getCategories = array => {
  return array.map(item => {
    let category = Object.assign({}, item);
    // category.value = `${item.nameEn}`;
    // category.label = `${item.nameEn}`;
    return category;
  });
};

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
// export const getRegionsOfCities = array => {
//   return array.map(({ useCounty, stateEn, cityEn, countyEn }) => {
//     return Number(useCounty)
//       ? `${cityEn}, ${countyEn}, ${stateEn} region`
//       : `${cityEn}, ${stateEn} region`;
//   });
// };
