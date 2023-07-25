import React, { useState, useEffect } from "react";
import { safeCredentials, handleErrors } from "../utils/fetchHelper";
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';

const SignInWidget = ({ toggle }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      error: "",
    });
    fetch("/api/sessions", safeCredentials({
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
        setUser({ error: "Could not sign in." });
      });
  };
  return (
    <div className="sign-in">
      <div className="container form-container rounded">
        <a className="back-to-home" href="/">
          X
        </a>
        <div className="row">
          <div className="col-12">
            <form className="form-signin" onSubmit={handleSubmit}>
              <TwitterIcon className="twitter-icon" />
              <h1 className="h3 mb-3 fw-normal">Sign In</h1>
              <input
                type="text"
                className="form-control mb-3"
                name="email"
                placeholder="email"
                required=""
                autoFocus=""
              />
              <input
                type="text"
                className="form-control mb-3"
                name="username"
                placeholder="username"
                required=""
                autoFocus=""
              />
              <input
                type="password"
                className="form-control mb-3"
                name="password"
                placeholder="password"
                required=""
              />
              <button
                className="w-50 btn btn-lg btn-primary mt-2 submit-button"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
        <p className='bottom-text'>Don't have an account?</p> 
        <Button className='toggle-button' onClick={toggle}>Sign Up</Button>
      </div>
    </div>
  );
};

export default SignInWidget;