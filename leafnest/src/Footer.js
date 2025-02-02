import React from "react";
import { FaGithub } from "react-icons/fa"; 
import "./css/Footer.css";
import {NavLink} from "react-router-dom"
function Footer() {
  return (
    <div className="Footer">
      <div className="About">
        <h1>FAQ'S</h1>
        <NavLink to="/About">
        <h2 >About us</h2>
        </NavLink>
        <h1>Shopping & Returns</h1>
      </div>
      <div className="Copyrights">
        <h2>© 2025 LeafNest Copyrights Reserved</h2>
        <h1>Developed By Shagun</h1>
        <a href="https://github.com/shagunn04" target="_blank" rel="noopener noreferrer">
        <FaGithub className="github-icon"/> Visit Project 
        </a>
      </div>
    </div>
  );
}

export default Footer;
