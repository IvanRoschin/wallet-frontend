import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export default function PrivatRoute({ children }) {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? children : <Navigate to="/login" />}</>;
}
