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
import { useDispatch } from 'react-redux';
import { setToken } from 'redux/auth/authSlice';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');
  console.log('accessToken', accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToken(accessToken));
  }, [accessToken, dispatch]);

  // useEffect(() => {
  //   // document.title = `Home`;

  //   if (accessToken && refreshToken) {
  //     dispatch(setToken(accessToken));
  //     localStorage.setItem('refreshToken', refreshToken);
  //   }
  // }, [accessToken, dispatch, refreshToken]);

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
