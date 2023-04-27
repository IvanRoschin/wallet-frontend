import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAAK2KUH8CPk_RaDTLbaX7LChkQS5NbuZI',
  authDomain: 'thematic-bounty-383420.firebaseapp.com',
  projectId: 'thematic-bounty-383420',
  storageBucket: 'thematic-bounty-383420.appspot.com',
  messagingSenderId: '1008625055558',
  appId: '1:1008625055558:web:fa4a8fcc944cd006881747',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
