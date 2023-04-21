import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutQuery } from 'redux/auth/authApi';
import { selectAuth } from 'redux/auth/authSlice';

import { toast } from 'react-toastify';

export const UserMenu = () => {
  const { logout } = useLogoutQuery();

  const navigate = useNavigate();

  const { name } = useSelector(selectAuth);
  const { avatar } = useSelector(selectAuth);
  const { id } = useSelector(selectAuth);
  console.log('id', id);

  function handleLogout() {
    logout(id);
    toast.success('Logout Successfully');
    navigate('/auth');
  }

  return (
    <div>
      Wellcome
      <img src={avatar} alt="avatar" /> {name}
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
