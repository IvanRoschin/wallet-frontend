import { useFormik } from 'formik';
import { RegisterSchema } from 'validationSchemas';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

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
  OpenEyaIcon,
  ClosedEyaIcon,
  ButtonImg,
} from './Form.styled';
import { useSignupMutation } from 'redux/auth/authApi';

export const RegisterForm = () => {
  const { t } = useTranslation();

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmVisibility, setConfirmVisibility] = useState(false);

  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const toggleShowcConfirm = () => {
    setConfirmVisibility(!confirmVisibility);
  };

  const [
    signup,
    { isSuccess: isSignupSuccess, isError: isSignupError, error: SignupError },
    // { isSuccess: isSignupSuccess, isError: isSignupError, error: SignupError },
  ] = useSignupMutation();
  console.log('isSignupSuccess', isSignupSuccess);
  console.log('SignupError', SignupError);

  const { values, errors, handleChange, handleSubmit } = useFormik({
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
      } else {
        toast.error('Please fill all fields');
      }
    },
  });

  useEffect(() => {
    if (isSignupSuccess) {
      console.log('isSignupSuccess', isSignupSuccess);
      toast.success('Signup Succes');
      console.log('here must been redirect');
      navigate('/login');
    }
    if (isSignupError) {
      console.log('SignupError', SignupError?.data.message);

      console.log(SignupError?.data.message);
      toast.error(SignupError?.data.message);
    }
  }, [isSignupSuccess, isSignupError, SignupError, navigate]);

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
              placeholder="E-mail"
              onChange={handleChange}
              errors={errors}
              value={values.email}
            />
          </Label>
          {errors.email && <Errors>{errors.email}</Errors>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="phone">
            <SvgLock />
            <Input
              id="phone"
              name="phone"
              placeholder="Phone number"
              onChange={handleChange}
              errors={errors}
              value={values.phone}
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
              placeholder={t('Password')}
              onChange={handleChange}
              value={values.password}
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
              placeholder={t('Confirm_Password')}
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
            <SvgAccount />
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="First name"
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
    </>
  );
};
