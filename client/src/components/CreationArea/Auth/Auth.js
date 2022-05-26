import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { InputComp } from './InputComp';
// import '../../../css/auth.css';
import { GoogleLogin } from 'react-google-login';
import googleLogo from '../../../img/google.png';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../NucPortfolio/Header';
import { signin, signup } from '../../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

export const Auth = ({ scrolled }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState('password');
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPass = () => {
    setShowPassword((showPassword) => (showPassword === 'password' ? 'text' : 'password'));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const switchMode = () => {
    setIsSignup((prev) => !prev);
  };
  const googleSuccess = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      navigate('/post');
    } catch (err) {
      console.log(err);
    }
  };
  const googleError = (err) => {
    console.log(err);
    console.log('Google Sign In was unsuccesfull, Try Again Later');
  };

  return (
    <>
      <Header scrolled={(scrolled = true)} />
      <div id="auth">
        <div className="container auth-container">
          <form className="sign-form row  justify-content-center mt-5" onSubmit={handleSubmit}>
            <div className="h3 text-center mt-4"> {isSignup ? 'Sign Up' : 'Sign In'}</div>
            <div className="input-form">
              {isSignup && (
                <>
                  <InputComp
                    name="firstName"
                    label="First Name"
                    aria-label="First Name"
                    handleChange={handleChange}
                    autoFocus
                  />
                  <InputComp
                    name="lastName"
                    label="Last Name"
                    aria-label="Last Name"
                    handleChange={handleChange}
                    autoFocus
                  />
                </>
              )}
              <InputComp
                name="email"
                label="Email Adress"
                aria-label="Email Adress"
                handleChange={handleChange}
                type="email"
              />
              <InputComp
                name="password"
                label="Password"
                aria-label="Password"
                handleChange={handleChange}
                type={showPassword}
                showPassword={showPassword}
                handleShowPass={handleShowPass}
                autoComplete="on"
              />
              {isSignup && (
                <InputComp
                  name="confirmPassword"
                  label="Confirm Password"
                  aria-label="Confirm Password"
                  handleChange={handleChange}
                  type={showPassword}
                  showPassword={showPassword}
                  handleShowPass={handleShowPass}
                />
              )}
            </div>
            <Button className="sign-btn" type="submit" variant="primary">
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
            <GoogleLogin
              className="sign-btn"
              clientId="38848971145-eaf5f1qon4vbjugn5ra8rukuu8dec2li.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  className="googleButton sign-btn"
                  color="primary"
                  onClick={renderProps.onClick}
                  // disabled={renderProps.disabled}
                  disabled
                >
                  <img src={googleLogo} alt="Google logo" /> Google Sign in
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"
            />

            <Button className="sign-btn" onClick={switchMode} variant="secondary" disabled>
              {isSignup ? 'Sign In' : ' Register'}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
