import React from "react";
import { auth, logout } from "../Firebase/firebase";
import { useState, useEffect } from "react";
import SideNavBar from "../NavBar/SideNavBar";
import { useNavigate } from "react-router";
import "./styles/style.css";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //to check whether user is logged in or not.
  useEffect(() => {
    let user = auth.currentUser;
    if (!user) {
      return navigate("/");
    }
  }, []);
  useEffect(() => {
    let user = auth.currentUser;
    console.log(user);
    if (user != null) {
      setName(user.displayName);
      setEmail(user.email);
    }
  }, []);
  function doLogout() {
    logout();
    navigate("/");
  }
  return (
    <>
      <SideNavBar />
      <div className="profile">
        <h1>User Information</h1>
        <li>
          name : {name} <br />
        </li>
        <li>
          email : {email}
          <br />
        </li>
        <div className="logout">
          <button className="logoutbutton" onClick={doLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
