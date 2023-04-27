import Media from 'react-media';
import { Logo } from 'components/Logo';
import { Container } from 'globalStyles/globalStyle';

import {
  ImageContainerReg,
  Text,
  ImageSection,
  FormContainer,
  PageContainer,
  LeftSide,
  RightSide,
} from './Page.styled';
import { RegisterForm } from 'components/Form';
const RegisterPage = () => {
  return (
    <Container>
      <PageContainer>
        <LeftSide>
          <Media
            query="(min-width: 768px)"
            render={() => (
              <ImageSection>
                <ImageContainerReg />
                <Text>Finance App</Text>
              </ImageSection>
            )}
          />
        </LeftSide>
        <RightSide>
          <FormContainer>
            <Logo />
            <RegisterForm />
          </FormContainer>
        </RightSide>
      </PageContainer>
    </Container>
  );
};

export default RegisterPage;
