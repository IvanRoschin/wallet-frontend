import Media from 'react-media';
import { Logo } from 'components/Logo';
// import { Container } from 'globalStyles/globalStyle';
import {
  ImageContainerLog,
  Text,
  ImageSection,
  FormContainer,
  PageContainer,
  LeftSide,
  RightSide,
} from './Page.styled';
import { LoginForm } from 'components/Form';

const LoginPage = () => {
  return (
    // <Container>
    <PageContainer>
      <LeftSide>
        <Media
          query="(min-width: 768px)"
          render={() => (
            <ImageSection>
              <ImageContainerLog />
              <Text>Finance App</Text>
            </ImageSection>
          )}
        />
      </LeftSide>
      <RightSide>
        <FormContainer>
          <Logo />
          <LoginForm />
        </FormContainer>
      </RightSide>
    </PageContainer>
    // </Container>
  );
};

export default LoginPage;
