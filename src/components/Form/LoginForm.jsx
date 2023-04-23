import { useFormik } from 'formik';
import { LoginSchema } from 'validationSchemas';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import {
  Input,
  Label,
  InputContainer,
  SvgEnvelope,
  SvgLock,
  RegisterBtnLp,
  LoginBtnLp,
  Form,
  Errors,
  OpenEyaIcon,
  ClosedEyaIcon,
  ButtonImg,
} from './Form.styled';
import { useLoginMutation } from 'redux/auth/authApi';

export const LoginForm = () => {
  const { t } = useTranslation();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const [
    login,
    { isSuccess: isLoginSuccess, isError: isLoginError, error: LoginError },
  ] = useLoginMutation();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async values => {
      await login(values);
      toast.error('Please fill all fields');
    },
  });

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success(LoginError?.data.message);
      navigate('/home');
    }
    if (isLoginError) {
      toast.error(isLoginError?.data.message);
    }
  }, [isLoginSuccess, isLoginError, LoginError, navigate]);

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
              placeholder="E-mail"
              onChange={handleChange}
              errors={errors}
              value={values.email}
            />
          </Label>
          {errors.email && <Errors>{errors.email}</Errors>}
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
              placeholder={t('Password')}
              onChange={handleChange}
              value={values.password}
              errors={errors}
            />
          </Label>
          {errors.password && <Errors>{errors.password}</Errors>}
        </InputContainer>

        <InputContainer>
          <LoginBtnLp type="submit">Submit</LoginBtnLp>
        </InputContainer>
      </Form>
      <Link to="/register">
        <RegisterBtnLp type="button">Register</RegisterBtnLp>
      </Link>
    </>
  );
};
