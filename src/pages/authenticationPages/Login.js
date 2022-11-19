import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "./../../Firebase/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // function to check the inputs and login the user
  async function doLogin() {
    if (!email) {
      alert("please enter email");
      return;
    }
    if (!password) {
      alert("please enter password");
      return;
    }
    const user = await logInWithEmailAndPassword(email, password);

    if (user) {
      navigate("/home");
    }
  }

  return (
    <>
      <div className="SignUpForm">
        <div className="card">
          <h1>Login</h1>
          <label className="Label">
            Email:
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>{" "}
          </label>
          <br />
          <label className="Label">
            Password:
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </label>
          <br />
          <div className="Button">
            <button
              id="LoginButton"
              onClick={() => {
                doLogin();
              }}
            >
              Login
            </button>
            <button
              id="LoginButton"
              onClick={() => {
                window.location.pathname = "/Signup";
              }}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
