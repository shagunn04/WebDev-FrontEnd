import React,{useContext} from "react"
import { Context } from "./GlobalContext/Context";
import IncomeCard from "./IncomeCard"
import Graph from "./Graph";
import "./css/Income.css"
function Income()
{
    const {RentVans} =useContext(Context);
    const IncomeCards = RentVans.map((van) => (
        <IncomeCard
            key={van.selectedVan.id}
            id={van.selectedVan.id}
            img={van.selectedVan.image}
            title={van.selectedVan.title}
            price={van.selectedVan.price}
            type={van.type}
            days={van.days}
        />
    )
    );

    const graphData = RentVans.map((van, index) => ({
        day: index + 1, 
        expense: van.selectedVan.price * van.days * (van.type === "-" ? -1 : 1), 
    }));

    return(<div className="Incomepage">
       <div className="Graph">
                <Graph data={graphData} />  
            </div>
        <div className="IncomeCard-List">
            {IncomeCards}
        </div>

    </div>
       
    )
}

export default Income;