import React, { useState, useEffect } from "react";
import Instruction from "./Instruction";
import Data from "./Data";
import Dices from "./Dices";
import Roll from "./Roll";
import ConfettiComponent from "./Confetti";
import "./style.css";

function App() {
  const [dices, setdices] = useState(
    Data.map((dice) => ({
      id: dice.id,
      value: dice.value,
      freeze: dice.freeze,
    }))
  );

  const [buttontext, setbuttontext] = useState("Roll");

  function handleClickdice(id) {
    setdices((prevdices) =>
      prevdices.map((dice) =>
        dice.id === id ? { ...dice, freeze: !dice.freeze } : dice
      )
    );
    console.log("You Clicked dice " + dices);
  }

  function handleClickbutton(buttontext) {
    if (buttontext === "Roll") {
      setdices((prevdices) =>
        prevdices.map((dice) =>
          dice.freeze
            ? dice
            : { ...dice, value: Math.floor(Math.random() * 6) + 1 }
        )
      );
    } else {
      setdices((prevdices) =>
        prevdices.map((dice) => ({
          ...dice,
          freeze: false,
          value: Math.floor(Math.random() * 6) + 1,
        }))
      );
    }

    console.log("You clicked button" + dices);
  }

  useEffect(() => {
    const value = dices[0].value;
    const allEqual = dices.every(dice => dice.value === value);

    if (allEqual) {
      setbuttontext("Reset Game");
    } else {
      setbuttontext("Roll");
    }
  }, [dices]);

  return (
    <div className="App">
      <Instruction />
      <div className="dice-container">
        {dices.map((dice) => (
          <Dices
            key={dice.id}
            id={dice.id}
            value={dice.value}
            freeze={dice.freeze}
            handleClick={handleClickdice}
          />
        ))}
      </div>
      <Roll handleClick={handleClickbutton} buttontext={buttontext} />
      {dices.every(dice => dice.value === dices[0].value) && <ConfettiComponent />}
    </div>
  );
}

export default App;
