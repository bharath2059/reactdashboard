import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "./../../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./../styles/style.css";
import Dashboard from "../Dashboard";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

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
