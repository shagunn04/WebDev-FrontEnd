import React from "react"

function Roll({handleClick,buttontext})
{
    return(<div className="Roll-Button">
        <button onClick={()=>handleClick(buttontext)} >{buttontext}</button>
    </div>
    )
}

export default Roll;