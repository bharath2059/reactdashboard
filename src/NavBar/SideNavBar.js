import "./../pages/styles/style.css";
import React from "react";
import { SideNavBarData } from "./SideNavBarData";
import { useNavigate } from "react-router-dom";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function SideNavBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="sideNavBar">
        <ul className="sideNavBarList">
          {SideNavBarData.map((key, val) => {
            return (
              <li
                val={val}
                className="row"
                id={window.location.pathname == key.Link ? "active" : ""}
                onClick={() => {
                  navigate(key.Link);
                }}
              >
                {""}
                <div id="Logo">{key.Logo}</div>
                {""}
                <div id="title">{key.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default SideNavBar;
