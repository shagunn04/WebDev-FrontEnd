import React ,{useState} from "react"

function Counter()
{
   const [prevState,setState]=useState(0);
   let response;
   function IncrementClick()
   {
    setState(prevState+1);
   }

   function DecrementClick()
   {
    setState(prevState-1);
   }
   if(prevState%2==0)
   {
    response="Even";
   } 
    else{
        response ="Odd";
    }

    return(
        <div className="Counter">
            <div className="CountCircle">
                <h1>{prevState}</h1>
                </div>
            <div className="Buttons">
                <button className="Decrement" onClick={DecrementClick}> - </button>
                <button className="Increment" onClick={IncrementClick}> + </button>
            </div>
            <div className="review">
                <h1>The number of times you have clicked is {response}</h1>
            </div>
        </div>
    )
}

export default Counter