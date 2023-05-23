import { useSelector } from 'react-redux';
import {
  selectToken,
  selectStatus,
  selectUser,
  selectIsLoggedIn,
  selectError,
} from 'redux/selector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const status = useSelector(selectStatus);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const token = useSelector(selectToken);
  return {
    isLoggedIn,
    status,
    user,
    error,
    token,
  };
};
