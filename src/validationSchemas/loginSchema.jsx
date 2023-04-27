import * as yup from 'yup';
import i18n from 'i18n';

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      i18n.t('registration.email.email_match')
    )
    .min(5, i18n.t('registration.email.at_least_five'))
    .required(i18n.t('registration.email.required_field')),
  password: yup
    .string()
    .matches(/^\S+$/, i18n.t('registration.password.no_space'))
    .min(7, i18n.t('registration.password.at_least_seven'))
    .max(32, i18n.t('registration.password.max_tt'))
    .required(i18n.t('registration.password.required')),
});
