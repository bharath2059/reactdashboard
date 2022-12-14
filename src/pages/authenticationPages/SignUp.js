import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "./../../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./../styles/style.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);

  //function to check the user inputs and registration.
  const register = () => {
    if (!name) {
      alert("Please enter name");
      return;
    }
    if (!email) {
      alert("Please enter email");
      return;
    }
    if (!password) {
      alert("Please enter password");
      return;
    }
    registerWithEmailAndPassword(name, email, password);
  };
  return (
    <>
      <div className="SignUpForm">
        <div className="card">
          <h1>SignUp</h1>
          <label className="Label">
            Name:
            <br />
            <input
              type="text"
              value={name}
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </label>
          <br />
          <label className="Label">
            Email: <br />
            <input
              type="text"
              value={email}
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </label>{" "}
          <br />
          <label className="Label">
            Password:
            <br />
            <input
              type="text"
              value={password}
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </label>
          <br />
          <div className="Button">
            <button onClick={register}>Register</button>
            <button
              onClick={() => {
                window.location.pathname = "/";
              }}
            >
              Already have an Account?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
