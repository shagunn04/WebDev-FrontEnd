import React, { useContext, useEffect, useState } from "react";
import { Context } from "./GlobalContext/Context";
import image from "./User-logo.webp";
import "./css/DashBoard.css";
import PieChart from "./PieChart.js";

function DashBoard() {
    const [balance, setBalance] = useState(0);
    const [vansPlus, setPlus] = useState(0);
    const [vansMinus, setMinus] = useState(0);
    const [left, setLeft] = useState(0);
    
    const { RentVans } = useContext(Context);

    useEffect(() => {
        let totalBalance = 0;
        let balanceminus = 0;
        let totalPlus = 0;
        let totalMinus = 0;
        let remaining = 0;

        RentVans.forEach(Van => {
            if (Van.type === "+") {
                totalBalance += Van.selectedVan.price * Van.days;
                totalPlus += 1;
            } else {
                totalMinus += 1;
                if (totalBalance > 0) {
                    balanceminus = Van.selectedVan.price * Van.days;
                    if (totalBalance - balanceminus > 0) {
                        totalBalance -= balanceminus;
                    } else {
                        remaining = balanceminus - totalBalance;
                        totalBalance = 0;
                    }
                }
            }
        });

        setBalance(totalBalance);
        setPlus(totalPlus);
        setMinus(totalMinus);
        setLeft(remaining);
    }, [RentVans]);

    return (
        <div className="DashBoard">
            <div className="User-Profile">
                <div className="Profile-Text">
                    <h1>Welcome Sarim Malik!</h1>
                    <h2>Account Balance</h2>
                    {balance === 0 ? (
                        <h3>You have paid ${left} through different payment methods</h3>
                    ) : (
                        <h2>$ {balance}</h2>
                    )}
                </div>
                <div className="User-Image">
                    <img src={image} alt="User-Image" />
                </div>
            </div>

            <div className="Activity">
                <h1>Activity</h1>
                <div className="Activity-Content">
                    <div className="Activity-Metrics">
                        <h1 style={{ color: "green" }}>
                            Vans you've rented to other users - {vansPlus}
                        </h1>
                        <h1 style={{ color: "grey" }}>
                            Vans you've rented from other users - {vansMinus}
                        </h1>
                    </div>

                    {/* Render the PieChart component */}
                    <div className="Activity-Pie">
                        <PieChart plusCount={vansPlus} minusCount={vansMinus} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;
