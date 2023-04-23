import * as Yup from 'yup';
import i18n from 'i18n';

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      i18n.t('Only_cyrillic_latin')
    )
    .required(i18n.t('registration.required.name')),
  email: Yup.string()
    .matches(
      // /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/,
      /^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      i18n.t('registration.email.email_match')
    )
    .min(5, i18n.t('registration.email.at_least_five'))
    .required(i18n.t('registration.email.required_field')),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Invalid phone number(+380111111111)')
    .min(13)
    .max(13),
  // .required('Required field'),
  password: Yup.string()
    .matches(/^\S+$/, i18n.t('registration.password.no_space'))
    .min(7, i18n.t('registration.password.at_least_seven'))
    .max(32, i18n.t('registration.password.max_tt'))
    .required(i18n.t('registration.password.required')),
  confirm: Yup.string()
    .oneOf(
      [Yup.ref('password'), null],
      i18n.t('registration.password.passwords_match')
    )
    .required(i18n.t('registration.required.repeated_password')),
});
