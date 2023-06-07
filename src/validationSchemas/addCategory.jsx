import * as yup from 'yup';
import i18n from 'i18n';

export const AddCategory = yup.object().shape({
  type: yup.string().required(i18n.t('registration.required.name')),
  nameUk: yup.string().required(i18n.t('registration.email.required_field')),
  nameEn: yup.string().required(i18n.t('registration.required.phone')),
  color: yup.string(),
});
