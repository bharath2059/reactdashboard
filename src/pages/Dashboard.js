import React, { useEffect } from "react";
import SideNavBar from "../NavBar/SideNavBar";
import { useState } from "react";

import { auth, db, logout } from "./../Firebase/firebase";

import { useNavigate } from "react-router";
import "./styles/style.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    let user = auth.currentUser;
    console.log(user);
    if (user != null) {
      setName(user.displayName);
    }
  }, []);

  function doLogout() {
    logout();
    navigate("/");
  }
  return (
    <>
      <SideNavBar />
      <div className="Home">
        <div>Hello {"      "}</div>
        <br />
        <h1>{name}</h1>
        <br />
        <button onClick={doLogout}>Logout</button>
      </div>
    </>
  );
};
export default Dashboard;