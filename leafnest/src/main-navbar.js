import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "./images/leafnest-logo.png"; // Assuming logo is in images folder
import Footer from "./Footer";
import "./css/main-navbar.css";

function MainNavbar() {
  return (
    <div className="page">
      <div className="Navbar">
        <div className="Brand-Name">
          <img src={logo} alt="LeafNest Logo" className="Logo" />
          <h1>LeafNest</h1>
        </div>

        <div className="Main-Navbar-Links">
          <NavLink
            to="/Home"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <h1>Home</h1>
          </NavLink>

          <NavLink
            to="/Account"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <h1>Account</h1>
          </NavLink>

          <NavLink
            to="/Nest"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <h1>Nest</h1>
          </NavLink>
        </div>
      </div>

      
      <div className="content">
        <Outlet />
      </div>
      
      <Footer />
    </div>
  );
}

export default MainNavbar;
