import React, { useState, useEffect } from "react";
import { safeCredentials, handleErrors } from "../utils/fetchHelper";
import SignInWidget from "./signinWidget";
import SignUpWidget from "./signupWidget";
import "./sign.scss";

const Login = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true);

  useEffect(() => {
    fetch("/api/authenticated")
      .then(handleErrors)
      .then((data) => {
        setAuthenticated(data.authenticated);
        console.log(data);
      });
  }, []); 

  const toggle = () => {
    setShowSignUp(!showSignUp);
  };

  if (sessionStorage.getItem('authenticated')) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-9 col-lg-6 mx-auto my-4">
            <div className="border p-4">
              <p className="mb-0">You are already logged in 🙂</p>
              <p className="mb-0"><a href="/tweets">click here</a> to go to your homepage!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      {showSignUp ? <SignUpWidget toggle={toggle} /> : <SignInWidget toggle={toggle} />}
    </React.Fragment>
  );
};

export default Login;