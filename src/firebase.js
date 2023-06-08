// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBJp6PLKztVTxAhg2Nwf9NbBGwbWhz3e9c',
  authDomain: 'social-taco.firebaseapp.com',
  projectId: 'social-taco',
  storageBucket: 'social-taco.appspot.com',
  messagingSenderId: '1036643497353',
  appId: '1:1036643497353:web:d051cebcd58c35f7c41d58',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
