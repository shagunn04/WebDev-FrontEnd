import React from "react";
import Confetti from "react-confetti";

function ConfettiComponent() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={200}
      gravity={0.3}
      recycle={false}
    />
  );
}

export default ConfettiComponent;
