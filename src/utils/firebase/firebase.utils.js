import { initializeApp } from 'firebase/app'
import {
   getAuth,
  signInWithRedirect, 
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbpDrJTe-52eBqk79ooI2ngir03oUIElk",
  authDomain: "crown-clothing-db-81902.firebaseapp.com",
  projectId: "crown-clothing-db-81902",
  storageBucket: "crown-clothing-db-81902.appspot.com",
  messagingSenderId: "841728212338",
  appId: "1:841728212338:web:e2731e585c7f3747ca31eb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  promt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)