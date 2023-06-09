import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  //   signInWithRedirect,
  //   signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../Firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscrible = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('User', currentUser);
    });
    return unsubscrible();
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
