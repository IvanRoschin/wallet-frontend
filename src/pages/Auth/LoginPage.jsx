import Media from 'react-media';
import { Logo } from 'components/Logo';
import {
  ContainerPage,
  FormContainerRegsiter,
  ImageContainerReg,
  Text,
  ImageSection,
  Container,
  FormWrapper,
  LogoContainer,
} from './Page.styled';
import { LoginForm } from 'components/Form';
const LoginPage = () => {
  return (
    <Container>
      <ContainerPage>
        <Media
          query="(min-width: 768px)"
          render={() => (
            <ImageSection>
              <ImageContainerReg />
              <Text>Finance App</Text>
            </ImageSection>
          )}
        />
        <FormWrapper>
          <FormContainerRegsiter>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            <LoginForm />
          </FormContainerRegsiter>
        </FormWrapper>
      </ContainerPage>
    </Container>
  );
};

export default LoginPage;
