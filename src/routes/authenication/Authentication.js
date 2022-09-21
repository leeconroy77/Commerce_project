import SignUpForm from '../../components/sign-up-form/SignUp';
import SignInForm from '../../components/signIn/SignIn';

import './authentication.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;