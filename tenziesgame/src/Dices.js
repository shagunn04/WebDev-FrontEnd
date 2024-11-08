import React from "react";

function Dices({ id, value, freeze, handleClick }) {
    return (
        <div className={freeze ? "dice-frozen" : "dice-unfrozen"} onClick={() => handleClick(id)}>
            <h2>{value}</h2>
        </div>
    );
}

export default Dices;
