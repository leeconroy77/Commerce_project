import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  ignInWithPopup,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'

import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc 
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAL-2h7WrD_DO7KXAYOfK4jl4quFBksaNo",
  authDomain: "crown-db-e7a81.firebaseapp.com",
  projectId: "crown-db-e7a81",
  storageBucket: "crown-db-e7a81.appspot.com",
  messagingSenderId: "162705164057",
  appId: "1:162705164057:web:fbb3209ba5f9b6538ea788"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()  

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    });
  } catch (error) {
    console.log('error creating the user', error.message)
  }
  }
  return userDocRef;
};