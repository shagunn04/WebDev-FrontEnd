// Header.js
import Context from './Context/Declare';
import './Unorder.css';  
import reactLogo from './logo.svg'; 
import React, { useContext } from 'react';

function Header() {
    const { isDark, toggle } = useContext(Context);
    
    return (
        <header className={isDark ? "nav-bar-dark" : "nav-bar-light"}>
            <div className="nav-bar-cover">
                <div className="logo-container">
                    <img src={reactLogo} alt="React Logo" className="react-logo" />
                </div>
                <h2 className="nav-bar-title">React Facts</h2>
            </div>
            <ul className="nav-links">
                <li>Light</li>
                <div className="toggle-container">
                    <label className="toggle">
                        <input type="checkbox" checked={isDark} onChange={toggle} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <li>Dark</li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Git</a></li>
            </ul>
        </header>
    );
}

export default Header;
