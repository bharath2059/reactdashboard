import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/authenticationPages/Login";
import SignUp from "./pages/authenticationPages/SignUp";
import SideNavBar from "./NavBar/SideNavBar";

import Dashboard from "./pages/Dashboard";
import CurrencyConvert from "./pages/API/CurrencyConver";
import Dictionary from "./pages/API/Dictionary";
import Weather from "./pages/API/Weather";
import Caluculator from "./pages/Tools/calculator";

import ReactCalendar from "./pages/Tools/calendar";
import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route exact path="/Signup" element={<SignUp />} />
          <Route exact path="/home" element={<Dashboard />}></Route>

          <Route path="currencyConverter" element={<CurrencyConvert />} />
          <Route path="Dictionary" element={<Dictionary />} />
          <Route path="Weather" element={<Weather />} />
          <Route path="calculator" element={<Caluculator />} />
          <Route path="Checklist" element={<ReactCalendar />} />
          <Route path="Profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
