import React from "react";
import "./css/About.css";
import { FaCopyright, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <div className="Footer">
            <h3 className="footer-text">
                <span className="copyright-icon">
                    <FaCopyright />
                </span>
                2024 #VANLIFE Copyrights reserved
            </h3>
            
            {/* Add hover effect to this text */}
            <h2 className="developer-name">Developed by Sarim Malik</h2>
            
            {/* GitHub link with hover effect */}
            <a 
                href="https://github.com/SarimMalik01/WebDevelopment-Projects/tree/main/vanlife"
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
            >
                <FaGithub className="github-icon" /> Visit Project
            </a>
        </div>
    );
}

export default Footer;
