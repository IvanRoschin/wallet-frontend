import { useFormik } from 'formik';
import { RegisterSchema } from 'validationSchemas';
// import { Link } from 'react-router-dom';

import {
  Input,
  Label,
  InputContainer,
  SvgAccount,
  SvgEnvelope,
  SvgLock,
  RegisterBtn,
  LoginBtn,
  ErrorText,
  Form,
} from './Form.styled';
import { useSignupMutation } from '../../redux/auth/authApi';

export const RegisterForm = () => {
  const [signup] = useSignupMutation();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      phone: '',
      password: '',
      name: '',
    },
    validationSchema: RegisterSchema,

    onSubmit: async values => {
      console.log('values', values);
      await signup(values);
    },
  });

  return (
    <div>
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
              value={values.email}
            />
          </Label>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="phone">
            <SvgLock />
            <Input
              id="phone"
              name="phone"
              placeholder="Phone number"
              onChange={handleChange}
              value={values.phone}
            ></Input>
          </Label>
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password">
            <SvgLock />
            <Input
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
            ></Input>
          </Label>
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
            ></Input>
          </Label>
        </InputContainer>

        <RegisterBtn type="submit">Submit</RegisterBtn>
      </Form>
      {/* <Link to="/wallet_frontend/login"> */}
      <LoginBtn type="button">Log in </LoginBtn>
      {/* </Link> */}
    </div>
  );
};
