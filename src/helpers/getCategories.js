export const getCategories = array => {
  return array.map(item => {
    let category = Object.assign({}, item);
    // category.value = `${item.nameEn}`;
    // category.label = `${item.nameEn}`;
    return category;
  });
};

export const getCategoriesUk = array => {
  return array.map(({ nameUk, nameEn, type }) => ({
    label: nameUk,
    value: nameUk,
    nameUk,
    nameEn,
    type,
  }));
};

// export const getRegionsOfCities = array => {
//   return array.map(({ useCounty, stateEn, cityEn, countyEn }) => {
//     return Number(useCounty)
//       ? `${cityEn}, ${countyEn}, ${stateEn} region`
//       : `${cityEn}, ${stateEn} region`;
//   });
// };
