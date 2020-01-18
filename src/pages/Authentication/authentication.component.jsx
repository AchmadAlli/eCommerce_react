import React from 'react';
import SignIn from '../../components/Sign-in/sign-in.component';
import SignUp from '../../components/Sign-up/sign-up.component';
import './authentication.style.scss'

const Authentication = () => (
  <div className="auth-wrapper">
    <SignIn />
    <SignUp />
  </div>
);


export default Authentication;