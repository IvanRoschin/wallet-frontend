import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export default function PublickRoute({ children }) {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? <Navigate to="/home" /> : children}</>;
}
