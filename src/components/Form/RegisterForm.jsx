import { useFormik } from 'formik';
import { RegisterSchema } from 'validationSchemas';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import css from './UserPhoneInput.css';
import { useSignupMutation } from 'redux/auth/authApi';
import { useLoginMutation } from 'redux/auth/authApi';

import {
  Input,
  Label,
  InputContainer,
  SvgPerson,
  SvgEnvelope,
  SvgLock,
  SvgPhone,
  RegisterBtn,
  LoginBtn,
  Form,
  Errors,
  OpenEyaIcon,
  ClosedEyaIcon,
  ButtonImg,
} from './Form.styled';
import { GoogleAuth } from 'components/GoogleAuth';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmVisibility, setConfirmVisibility] = useState(false);

  const toggleShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const toggleShowcConfirm = () => {
    setConfirmVisibility(!confirmVisibility);
  };

  const [
    signup,
    { isSuccess: isSignupSuccess, isError: isSignupError, error: SignupError },
  ] = useSignupMutation();

  const [
    login,
    { isSuccess: isLoginSuccess, isError: isLoginError, error: LoginError },
  ] = useLoginMutation();

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      email: '',
      phone: '',
      password: '',
      name: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async ({ name, email, phone, password }) => {
      if (name && email && phone && password) {
        await signup({ name, email, phone, password });
      }
      if (isSignupSuccess) {
        navigate('/login');

        await login(email, password);
      } else {
        toast.success(t('registration.status.error'));
      }
      resetForm();
    },
  });

  useEffect(() => {
    if (isSignupSuccess) {
      toast.success(t('registration.status.success'));
    }
    if (isSignupError) {
      toast.error(SignupError?.data.message);
    }
  }, [isSignupSuccess, isSignupError, SignupError, t]);

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success(t('login.status.success'));
      navigate('/home');
    }
    if (isLoginError) {
      toast.error(LoginError?.data.message);
    }
  }, [isLoginSuccess, isLoginError, LoginError, navigate, t]);

  const validateConfirmPassword = (pass, value) => {
    let error = '';
    if (pass && value) {
      if (pass !== value) {
        error = 'Password not matched';
      }
    }
    return error;
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label htmlFor="email">
            <SvgEnvelope />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('registration.placeholders.e-mail')}
              onChange={handleChange}
              errors={errors}
              value={values.email}
            />
          </Label>
          {errors.email && <Errors>{errors.email}</Errors>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="phone">
            <SvgPhone />
            <PhoneInput
              id="phone"
              name="phone"
              type="tel"
              className={css}
              placeholder={t('registration.placeholders.phone')}
              onlyCountries={['ua']}
              country={'ua'}
              countryCodeEditable={false}
              errors={errors}
              value={values.phone}
              onChange={phone => {
                setFieldValue('phone', `+${phone}`);
              }}
            />
          </Label>
          {errors.phone && <Errors>{errors.phone}</Errors>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password">
            <ButtonImg type="button" onClick={toggleShowPassword}>
              {passwordVisibility ? <OpenEyaIcon /> : <ClosedEyaIcon />}
            </ButtonImg>
            <SvgLock />
            <Input
              id="password"
              name="password"
              type={passwordVisibility ? 'text' : 'password'}
              placeholder={t('registration.placeholders.password')}
              onChange={handleChange}
              values={values.password}
              errors={errors}
            />
          </Label>
          {errors.password && <Errors>{errors.password}</Errors>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="confirm">
            <ButtonImg type="button" onClick={toggleShowcConfirm}>
              {confirmVisibility ? <OpenEyaIcon /> : <ClosedEyaIcon />}
            </ButtonImg>
            <SvgLock />
            <Input
              id="confirm"
              name="confirm"
              type={confirmVisibility ? 'text' : 'password'}
              placeholder={t('registration.placeholders.confirmpassword')}
              onChange={handleChange}
              validate={value =>
                validateConfirmPassword(values.password, value)
              }
              errors={errors}
            />
          </Label>
          {errors.confirm && <Errors>{errors.confirm}</Errors>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="name">
            <SvgPerson />
            <Input
              id="name"
              type="text"
              name="name"
              placeholder={t('registration.placeholders.firstname')}
              onChange={handleChange}
              value={values.name}
              errors={errors}
            />
          </Label>
          {errors.name && <Errors>{errors.name}</Errors>}
        </InputContainer>

        <InputContainer>
          <RegisterBtn type="submit">Submit</RegisterBtn>
        </InputContainer>
      </Form>
      <Link to="/login">
        <LoginBtn type="button">Login</LoginBtn>
      </Link>

      <GoogleAuth />
    </>
  );
};
