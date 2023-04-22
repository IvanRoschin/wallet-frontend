import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutQuery } from 'redux/auth/authApi';
import { selectUser } from 'redux/auth/authSlice';

import { toast } from 'react-toastify';

export const UserMenu = () => {
  const { logout } = useLogoutQuery();

  const navigate = useNavigate();
  const { name } = useSelector(selectUser);
  console.log('name', name);

  // const { name } = useSelector(selectUser);
  const { image } = useSelector(selectUser);
  const { id } = useSelector(selectUser);
  console.log('id', id);

  function handleLogout() {
    logout(id);
    toast.success('Logout Successfully');
    navigate('/auth');
  }

  return (
    <div>
      Wellcome
      <img src={image} alt="avatar" /> {name}
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
