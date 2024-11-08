import React from "react"
import icon from "./Icon.png"
import "./Style.css"

function Header()
{
    return (
        <div className="Header">
            <div className="Icon">
             <img src={icon} alt="Icon"></img>
            </div>
            <div className="Title">
                <h2>Meme Generator</h2>
            </div>
        </div>
    )
}

export default Header;