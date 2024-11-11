import React from "react"
import "./css/error.css"
import { Link } from "react-router-dom";

function Error()
{
    return(<div className="Error404">
        <h1>Sorry the page you were looking for was not found !</h1>
       
        <Link to="/Vans" >
        <button> ← Return to Vans</button>
        </Link>
    </div>

    )
}
export default Error;