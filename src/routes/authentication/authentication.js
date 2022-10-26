import React from 'react'



import SignUpForm from "../../components/sign-up-form/SignUp";
import SignInForm from "../../components/Sign-In/SignIn";

import "./authenticaton.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;