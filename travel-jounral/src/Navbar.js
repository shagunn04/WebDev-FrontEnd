import React from "react"
import "./Style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Navbar()
{
    return (
        <div className="Heading">
            <div className="globe-icon">
           <FontAwesomeIcon icon={faGlobe} /> 
           </div>
           <h3>my travel journal</h3>
        </div>
    )
}

export default Navbar;