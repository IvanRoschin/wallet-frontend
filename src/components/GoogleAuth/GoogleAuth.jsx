import GooglePic from 'images/svg/google.svg';
import { GoogleLoginButton, GoogleImg } from './GoogleAuth.styled';

export const GoogleAuth = () => {
  return (
    <GoogleLoginButton href="https://wallet-backend-mu.vercel.app/api/auth/google">
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
