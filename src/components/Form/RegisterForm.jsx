import { useFormik } from 'formik';
import { RegisterSchema } from 'validationSchemas';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

import {
  Input,
  Label,
  InputContainer,
  SvgAccount,
  SvgEnvelope,
  SvgLock,
  RegisterBtn,
  LoginBtn,
  Form,
  Errors,
} from './Form.styled';
import { useSignupMutation } from 'redux/auth/authApi';

export const RegisterForm = () => {
  const navigate = useNavigate();

  const [
    signup,
    { isSuccess: isSignupSucees, isError: isSignupError, error: SignupError },
  ] = useSignupMutation();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      phone: '',
      password: '',
      name: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async ({ name, email, password }) => {
      if (name && email && password) {
        await signup({ name, email, password });
      } else {
        toast.error('Please fill all fields');
      }
    },
  });

  useEffect(() => {
    if (isSignupSucees) {
      navigate('/login');
    }
    if (isSignupError) {
      console.log(SignupError.data.message);
      toast.error(SignupError.data.message);
    }
  }, [isSignupSucees, isSignupError, SignupError, navigate]);

  const validatePassword = values => {
    let error = '';
    const passwordRegex = /(?=.*[0-9])/;
    if (!values) {
      error = '*Required';
    } else if (values.length < 8) {
      error = '*Password must be 8 characters long.';
    } else if (!passwordRegex.test(values)) {
      error = '*Invalid password. Must contain one number.';
    }
    return error;
  };

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
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={handleChange}
            errors={errors}
            value={values.email}
          />
          {errors.email && <Errors>{errors.email}</Errors>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="phone">
            <SvgLock />
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Phone number"
            onChange={handleChange}
            errors={errors}
            value={values.phone}
          />
          {errors.phone && <Errors>{errors.phone}</Errors>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password">
            <SvgLock />
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
            validate={validatePassword}
            errors={errors}
          />
          {errors.password && <Errors>{errors.password}</Errors>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="confirm">
            <SvgLock />
          </Label>
          <Input
            id="confirm"
            name="confirm"
            type="password"
            placeholder="confirmPassword"
            onChange={handleChange}
            validate={value => validateConfirmPassword(values.password, value)}
            errors={errors}
          />
          {errors.confirm && <Errors>{errors.confirm}</Errors>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="name">
            <SvgAccount />
          </Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="First name"
            onChange={handleChange}
            value={values.name}
            errors={errors}
          />
          {errors.name && <Errors>{errors.name}</Errors>}
        </InputContainer>
        <InputContainer>
          <RegisterBtn type="submit">Submit</RegisterBtn>
        </InputContainer>
      </Form>
      <Link to="/wallet_frontend/login">
        <LoginBtn type="button">Log in </LoginBtn>
      </Link>
    </>
  );
};
