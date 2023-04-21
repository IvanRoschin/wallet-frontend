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
import { RegisterForm } from 'components/Form';
const RegisterPage = () => {
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
            <RegisterForm />
          </FormContainerRegsiter>
        </FormWrapper>
      </ContainerPage>
    </Container>
  );
};

export default RegisterPage;
