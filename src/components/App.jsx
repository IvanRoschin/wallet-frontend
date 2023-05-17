import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Loader } from '../components/Loader';
import { GlobalStyle } from '../globalStyles/globalStyle';
import FontStyles from 'globalStyles/fontStyles';
import { Toaster } from 'react-hot-toast';
import { useCurrentQuery } from 'redux/user/userApi';
import { useAuth } from 'hooks/useAuth';
import toast from 'react-hot-toast';
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

const fetchData = async () => {
  try {
    await fetch('http://localhost:3030/api');
  } catch (err) {
    if (err.message === 'net::ERR_CONNECTION_REFUSED') {
      console.log('Connection refused. Please check your network connection.');
    } else {
      console.log('An error occurred. Please try again later.');
      toast.error('Connection refused. Please check your network connection');
    }
  }
};

export const App = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const { token } = useAuth();
  useCurrentQuery(null, { skip: !token });

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
