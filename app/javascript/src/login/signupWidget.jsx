import React, { useState } from "react";
import { safeCredentials, handleErrors } from "../utils/fetchHelper";
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';

const SignUpWidget = ({ toggle }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const handleSignUp = (e) => {
    e.preventDefault();
    setUser({
      error: "",
    });
    fetch("/api/users", safeCredentials({
      method: "POST",
      body: JSON.stringify({
        user: {
          email: e.target.email.value,
          username: e.target.username.value,
          password: e.target.password.value,
        },
      }),
    }))
      .then(handleErrors)
      .then((data) => {
        if (data.success) {
          const params = new URLSearchParams(window.location.search);
          const redirect_url = params.get("redirect_url") || "/tweets";
          window.location = redirect_url;
        }
      })
      .catch(error => {
        setUser({ error: "Could not sign up." });
      });
  };
  return (
    <div className="sign-up">
      <div className="container form-container rounded">
        <a className="back-to-home" href="/">
          X
        </a>
        <div className="row">
          <div className="col-12">
            <form className="form-signup" onSubmit={handleSignUp}>
              <TwitterIcon className="twitter-icon" />
              <h1 className="h3 mb-3 fw-normal">Create an Account</h1>
              <input
                type="text"
                className="form-control form-email mb-3"
                placeholder="email"
                name="email"
                required=""
                autoFocus=""
              />
              <input
                type="text"
                className="form-control form-username mb-3"
                placeholder="username"
                name="username"
                required=""
                autoFocus=""
              />
              <input
                type="password"
                className="form-control form-password mb-3"
                placeholder="password"
                name="password" 
                required=""
              />
              <button
                className="w-50 btn btn-lg btn-primary mt-2 submit-button"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <p className='bottom-text'>Already have an account?</p> 
        <Button className='toggle-button' onClick={toggle}>Sign In</Button>
      </div>
    </div>
  );
};

export default SignUpWidget;