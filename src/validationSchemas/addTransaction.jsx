import * as yup from 'yup';
import i18n from 'i18n';

export const AddTransaction = yup.object().shape({
  type: yup.string().required(i18n.t('registration.required.name')),
  date: yup.string().required(i18n.t('registration.email.required_field')),
  category: yup.object().required(i18n.t('registration.required.phone')),
  comment: yup.string(),
  sum: yup.string().required(i18n.t('registration.required.repeated_password')),
});
