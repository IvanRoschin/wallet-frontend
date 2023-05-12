import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from '../components/Loader';
import { GlobalStyle } from '../globalStyles/globalStyle';
import FontStyles from 'globalStyles/fontStyles';
import { Toaster } from 'react-hot-toast';
import { useCurrentQuery } from 'redux/user/userApi';
// import { useEffect } from 'react';
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

const DashboardPage = lazy(() =>
  import(
    '../pages/Dashboard/DashboardPage' /* webpackChunkName: "DashboardPage" */
  )
);

const UserPage = lazy(() =>
  import('../pages/UserPage/UserPage' /* webpackChunkName: "UserPage" */)
);

export const App = () => {
  const data = useCurrentQuery();
  console.log('data', data);

  return (
    <>
      <GlobalStyle />
      <FontStyles />
      <Toaster position="top-right" reverseOrder={false} />
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
          <Route
            path="/home"
            element={
              <PrivatRoute>
                <DashboardPage />
              </PrivatRoute>
            }
          />
          <Route
            path="/account"
            element={
              <PrivatRoute>
                <UserPage />
              </PrivatRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
