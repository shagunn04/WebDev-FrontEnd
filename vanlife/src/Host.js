import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./css/Host.css"; // Importing the CSS file for styling

function HostNavbar() {
    return (
        <div className="Host">
            <div className="Host-Navbar">
                <nav className="Host-Navbar__nav">
                    {/* Add 'end' to the Dashboard route */}
                    <NavLink to="/Host" className="Host-Navbar__link" end>
                        DashBoard
                    </NavLink>
                    <NavLink to="/Host/Income" className="Host-Navbar__link">
                        Income
                    </NavLink>
                    <NavLink to="/Host/FavVans" className="Host-Navbar__link">
                        FavVans
                    </NavLink>
                    <NavLink to="/Host/Reviews" className="Host-Navbar__link">
                        Reviews
                    </NavLink>
                </nav>
            </div>
            <Outlet /> {/* Renders the nested route content */}
        </div>
    );
}

export default HostNavbar;
