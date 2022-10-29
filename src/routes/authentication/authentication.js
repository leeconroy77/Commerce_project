import React from 'react'

import SignUpForm from "../../components/sign-up-form/SignUp";
import SignInForm from "../../components/Sign-In/SignIn";

import styles from './authenticaton.styles.module.css'
const Authentication = () => {
  return (
    <div className={styles.authenticationContainer} >
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;