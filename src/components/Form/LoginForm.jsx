import { useFormik } from 'formik';
import { LoginSchema } from 'validationSchemas';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

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
} from './Form.styled';
import { useLoginMutation } from 'redux/auth/authApi';

export const LoginForm = () => {
  const navigate = useNavigate();

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
      console.log('values', values);
      await login(values);
      toast.error('Please fill all fields');
    },
  });

  useEffect(() => {
    if (isLoginSuccess) {
      console.log('isLoginSuccess', isLoginSuccess);
      toast.success(LoginError?.data.message);
      console.log('here must been redirect');
      navigate('/home');
    }
    if (isLoginError) {
      console.log(isLoginError?.data.message);
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
            <SvgLock />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
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
