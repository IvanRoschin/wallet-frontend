import { Theme } from 'globalStyles/theme';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from '../components/Loader';
import { GlobalStyle } from '../globalStyles/globalStyle';

const PrivatRoute = lazy(() =>
  import('../routes/PrivateRouter' /* webpackChunkName: "PrivatRoute" */)
);

const PublickRoute = lazy(() =>
  import('../routes/PublicRouter' /* webpackChunkName: "PublickRoute" */)
);

const RegisterPage = lazy(() =>
  import(
    '../pages/Auth/RegisterPage' /* webpackChunkName: "RegistrationPage" */
  )
);

const LoginPage = lazy(() =>
  import('../pages/Auth/LoginPage' /* webpackChunkName: "LoginPage" */)
);

export const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Suspense fallback={<Loader color="#4a56e2" size="100px" />}>
        <Routes>
          <Route
            path="/register"
            element={
              <PublickRoute>
                <RegisterPage />
              </PublickRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublickRoute>
                <LoginPage />
              </PublickRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </Theme>
  );
};
