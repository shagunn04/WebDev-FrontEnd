import React from "react";
import "./css/About.css";
import { FaCopyright } from 'react-icons/fa'; 

function Footer() {
    return (
        <div className="Footer">
            <h3 className="footer-text">
                <span className="copyright-icon">
                    <FaCopyright />
                </span>
                2024 #VANLIFE Copyrights reserved
            </h3>
        </div>
    );
}

export default Footer;
