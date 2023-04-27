import * as yup from 'yup';
import i18n from 'i18n';

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      i18n.t('Only_cyrillic_latin')
    )
    .required(i18n.t('registration.required.name')),
  email: yup
    .string()
    .matches(
      /^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      i18n.t('registration.email.email_match')
    )
    .min(5, i18n.t('registration.email.at_least_five'))
    .required(i18n.t('registration.email.required_field')),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, 'Invalid phone number(+380111111111)')
    .min(13)
    .max(13),
  // .required('Required field'),
  password: yup
    .string()
    .matches(/^\S+$/, i18n.t('registration.password.no_space'))
    .min(7, i18n.t('registration.password.at_least_seven'))
    .max(32, i18n.t('registration.password.max_tt'))
    .required(i18n.t('registration.password.required')),
  confirm: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      i18n.t('registration.password.passwords_match')
    )
    .required(i18n.t('registration.required.repeated_password')),
});
