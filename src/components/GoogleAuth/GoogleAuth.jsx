import GooglePic from 'images/svg/google.svg';
import { GoogleLoginButton, GoogleImg } from './GoogleAuth.styled';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const GoogleAuth = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoogleSignIn = async () => {
    try {
      // Perform any necessary sign-in logic here
      // For example, you can make an API request to initiate the sign-in process

      // Display success toast
      toast.success(t('login.status.success'));

      // Perform navigation
      navigate('/home');
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('Oops! Something went wrong.');
    }
  };

  return (
    <GoogleLoginButton
      href="https://wallet-backend-mu.vercel.app/api/auth/google"
      onClick={handleGoogleSignIn}
    >
      <GoogleImg src={GooglePic} alt="Google" />
      Google
    </GoogleLoginButton>
  );
};

// import GoogleButton from 'react-google-button';
// import { UserAuth } from '../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

// export const GoogleAuth = () => {
//   const { googleSignIn } = UserAuth();
//   const { user } = UserAuth();
//   const navigate = useNavigate();

//   const handleGoogleSignIn = async () => {
//     try {
//       await googleSignIn();
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   useEffect(() => {
//     if (user !== null) {
//       navigate('/home');
//     }
//   }, [navigate, user]);

//   return (
//     <div>
//       GoogleAuth
//       <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
//     </div>
//   );
// };
