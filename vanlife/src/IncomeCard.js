import React from "react";
import "./css/IncomeCard.css";
import {NavLink} from "react-router-dom"
function IncomeCard({ img, title, price, type, days,id }) {
    const expense = type === "-" ? price * days : price * days;
    
    return (
        <div className="IncomeCard">
            <div className="Income-img">
                <img src={img} alt="Image" />
            </div>
            <div className="Income-text">
                <h1>{title}</h1>
                <h1>{price}/day</h1>
                {type === '-' && (
  <NavLink to={`/Host/Income/WriteReview/${id}`} className="Write-Review">
    Write a Review
  </NavLink>
)}
            </div>
            <div
                className="Income-expense"
                style={{
                    color: type === "-" ? "red" : "green",
                    fontWeight: "bold",
                    fontSize: "18px",
                }}
            >
                <h1>{type === "-" ? `- ${expense}` : `+ ${expense}`}</h1>
            </div>
            <div className="Income-expense-day">
                <h3 style={{ color:  " rgb(99, 64, 64)"}}>Rented for {days} days</h3>
             
               
            </div>
        </div>
    );
}

export default IncomeCard;
