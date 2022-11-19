import React, { useEffect } from "react";
import SideNavBar from "../NavBar/SideNavBar";
import { useState } from "react";

import { auth, logout } from "./../Firebase/firebase";

import { useNavigate } from "react-router";
import "./styles/style.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  //getting the user details
  useEffect(() => {
    let user = auth.currentUser;
    console.log(user);
    if (user != null) {
      setName(user.displayName);
    }
  }, []);
  //function to logout
  function doLogout() {
    logout();
    navigate("/");
  }
  return (
    <>
      <SideNavBar />
      <div className="profile">
        <p>Hello!</p>
        <br></br>
        <h1>{name}</h1>
        <p>Welcome to Our React App</p>
        <button className="logoutbutton" onClick={doLogout}>
          Logout
        </button>
      </div>
    </>
  );
};
export default Dashboard;
