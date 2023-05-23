// import { useFormik } from 'formik';
// import { SelectInput } from './Statistics.styled';
// import { useTranslation } from 'react-i18next';
// import { useState } from 'react';

// //   useEffect(() => {
// //     const valuesEqualLastValues = (lastValues, props.formik.values);
// //     const valuesEqualInitialValues =
// //       props.formik.values === props.formik.initialValues;

// //     if (!valuesEqualLastValues) {
// //       updateState(props.formik.values);
// //     }

// //     if (!valuesEqualLastValues && !valuesEqualInitialValues) {
// //       props.formik.submitForm();
// //     }
// //   }, [
// //     lastValues,
// //     props.formik.values,
// //     props.formik.initialValues,
// //     props.onChange,
// //     props.formik,
// //   ]);

// //   return null;
// // };

// export const DateForm = props => {
//   const { t } = useTranslation();

//   const monthDataSet = {
//     tittle: 'month',
//     data: [
//       { label: t('diagramTab.optionData.jan'), value: 1, id: 'jan' },
//       { label: t('diagramTab.optionData.feb'), value: 2, id: 'feb' },
//       { label: t('diagramTab.optionData.mar'), value: 3, id: 'mar' },
//       { label: t('diagramTab.optionData.apr'), value: 4, id: 'apr' },
//       { label: t('diagramTab.optionData.may'), value: 5, id: 'may' },
//       { label: t('diagramTab.optionData.jun'), value: 6, id: 'jun' },
//       { label: t('diagramTab.optionData.jul'), value: 7, id: 'jul' },
//       { label: t('diagramTab.optionData.aug'), value: 8, id: 'aug' },
//       { label: t('diagramTab.optionData.sep'), value: 9, id: 'sep' },
//       { label: t('diagramTab.optionData.oct'), value: 10, id: 'oct' },
//       { label: t('diagramTab.optionData.nov'), value: 11, id: 'nov' },
//       { label: t('diagramTab.optionData.dec'), value: 12, id: 'dec' },
//     ],
//   };

//   const yearDataSet = {
//     tittle: 'year',
//     data: [
//       { label: '2019', value: 2019, id: '19' },
//       { label: '2020', value: 2020, id: '20' },
//       { label: '2021', value: 2021, id: '21' },
//       { label: '2022', value: 2022, id: '22' },
//       { label: '2023', value: 2023, id: '23' },
//     ],
//   };

//   const date = new Date();
//   const month = date.getUTCMonth() + 1; //months from 1-12
//   const year = date.getUTCFullYear();

//   const [period, setPeriod] = useState({ month, year });

//   const { handleSubmit, setFieldValue, submitForm } = useFormik({
//     initialValues: {
//       month,
//       year,
//     },
//     onSubmit: async values => {
//       setPeriod(values);
//       console.log('values', values);
//       console.log('period', period);
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <SelectInput
//           styles={{
//             control: (baseStyles, state) => ({
//               ...baseStyles,
//               marginTop: '5px',
//               backgroundColor: 'transparent',
//               borderColor: 'transparent',
//               boxShadow: 'none',
//               color: 'black',
//             }),
//             option: (baseStyles, state) => ({
//               ...baseStyles,
//               fontSize: '12px',
//               backgroundColor: 'transparent',
//               backdropFilter: 'blur(5px)',
//               borderRadius: '20px',
//               color: state.isFocused ? 'green' : 'grey',
//             }),
//           }}
//           placeholder={t('diagramTab.optionData.month')}
//           options={monthDataSet.data}
//           name="month"
//           onChange={monthValue => {
//             setFieldValue('month', monthValue.value);
//             submitForm();
//           }}
//         />
//         <SelectInput
//           styles={{
//             control: (baseStyles, state) => ({
//               ...baseStyles,
//               marginTop: '5px',
//               backgroundColor: 'transparent',
//               borderColor: 'transparent',
//               boxShadow: 'none',
//               color: 'black',
//             }),
//             option: (baseStyles, state) => ({
//               ...baseStyles,
//               fontSize: '12px',
//               backgroundColor: 'transparent',
//               backdropFilter: 'blur(5px)',
//               borderRadius: '20px',
//               color: state.isFocused ? 'green' : 'grey',
//             }),
//           }}
//           placeholder={t('diagramTab.optionData.year')}
//           options={yearDataSet.data}
//           name="year"
//           onChange={yearValue => {
//             setFieldValue('year', yearValue.value);
//             submitForm();
//           }}
//         />
//       </form>
//     </div>
//   );
// };
