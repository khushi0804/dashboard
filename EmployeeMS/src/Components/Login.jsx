
// This is Frontend window 
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import axios from 'axios';


const Login = () => {
  // these are variables where we store the value and setEmail is use to update the email
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  // for storing my data of emails and passward i will use use states and hooks

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/auth/adminlogin",values)
      .then((result) => console.log(result)).catch(err => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <h2>Login Page</h2>
        {/* now we needed a submit button to call onsubmit event  */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              //   here we are calling set values to update the object
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          <button className="btn btn-primary w-100 rounded-0 mb-3">
            Log in
          </button>

          <div className="mb-2">
            <input type="checkbox" name="tick" id="tick" className="me-2" />
            <label htmlFor="password">
              You are Agree with terms & conditions
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
