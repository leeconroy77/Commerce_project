import React from 'react';
import { useEffect} from 'react';
import { getRedirectResult} from 'firebase/auth';

import { 
  auth,
  signInWithGooglePopUp, 
  createUserDocumentFromAuth, 
  signInWithGoogleRedirect,
 } from '../../utils/firebase/Firebase';

const SignIn = () => {

  useEffect( () => {
    async function fetchData(){
    const response = await getRedirectResult(auth)
    console.log(response)
    console.log(fetchData())
    
    if(response) {
      const userDocRef = await createUserDocumentFromAuth(response.user)
    }}

  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
    </div>
  )
}

export default SignIn