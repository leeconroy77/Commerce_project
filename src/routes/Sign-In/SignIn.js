import React from 'react';
import { useEffect} from 'react';
import SignUp from '../../components/sign-up-form/SignUp';

import { 

  signInWithGooglePopUp, 
  createUserDocumentFromAuth, 
  
 } from '../../utils/firebase/Firebase';

const SignIn = () => {

 

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUp />
    </div>
  )
}

export default SignIn