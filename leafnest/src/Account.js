import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import "./css/AccountNavbar.css"; // Add your CSS file for styling

import "./css/Account.css";
function AccountNavbar() {
  return (
    <div className="Account">
      {/* Navbar section */}
      <div className="Account-navbar">
        <NavLink to="/Account/Favourites" activeclassname="active">Favourites</NavLink>
        <NavLink to="/Account/Cart" activeclassname="active">Cart</NavLink>
        <NavLink to="/Account/WriteaLetter" activeclassname="active">Write a Letter to us</NavLink>
        <NavLink to="/Account/Blogs" activeclassname="active">Blogs</NavLink>
      </div>
      {/* Main content area */}
      <div className="Account-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AccountNavbar;
