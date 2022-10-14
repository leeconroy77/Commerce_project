import React from 'react'
import { signInWithGooglePopUp, createUserDocumentFromAuth } from '../../utils/firebase/Firebase'

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}></button>
    </div>
  )
}

export default SignIn