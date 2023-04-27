import Media from 'react-media';
import { Logo } from 'components/Logo';
import { Container } from 'globalStyles/globalStyle';
import {
  ImageContainerReg,
  Text,
  ImageSection,
  FormContainer,
} from './Page.styled';
import { LoginForm } from 'components/Form';
const LoginPage = () => {
  return (
    <Container>
      <Media
        query="(min-width: 768px)"
        render={() => (
          <ImageSection>
            <ImageContainerReg />
            <Text>Finance App</Text>
          </ImageSection>
        )}
      />
      <FormContainer>
        <Logo />
        <LoginForm />
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
