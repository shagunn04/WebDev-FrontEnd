import React, { useContext } from "react";
import { Context } from "./GlobalContext/Context";
import { useSearchParams } from "react-router-dom";

function FilterButton({ category, value }) {
  const { toggleFilter } = useContext(Context);
  const [searchParams] = useSearchParams();

  const isActive = 
    category === "price"
      ? parseInt(searchParams.get("minPrice")) === parseInt(value.split("-")[0])
      : searchParams.getAll(category).includes(value);

  const buttonStyle = {
    backgroundColor: isActive ? "#b18cd9" : " #cfa38c",
    color: "#fff",
    fontSize:"1.5rem",
    padding: "10px 20px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  };

  return (
    <button
      style={buttonStyle}
      className="Filter-Button"
      onClick={() => toggleFilter(category, value)}
    >
      {value}
    </button>
  );
}

export default FilterButton;
