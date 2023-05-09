import { useSelector } from 'react-redux';
import {
  selectToken,
  selectStatus,
  selectUser,
  selectBalance,
  selectIsLoggedIn,
  selectError,
} from 'redux/selector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const status = useSelector(selectStatus);
  const user = useSelector(selectUser);
  const balance = useSelector(selectBalance);
  const error = useSelector(selectError);
  const token = useSelector(selectToken);

  return {
    isLoggedIn,
    status,
    user,
    balance,
    error,
    token,
  };
};
