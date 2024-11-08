import React from "react"
import {NavLink} from "react-router-dom"
import "./css/navbar.css"
function Navbar()
{
    return(
        <div className="nav-bar">
        <h1>#VANLIFE</h1> 
        <ul>
            <li>
               <NavLink to="/Host">Account</NavLink>
               
                    <NavLink to="/">About</NavLink>
                <NavLink to="/Vans">Vans</NavLink>
                
            </li>
        </ul>
        </div>
    )
}

export default Navbar;