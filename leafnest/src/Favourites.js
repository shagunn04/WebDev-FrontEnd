import React, { useContext, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./css/Favourites.css";
import { Context } from "./GlobalContext/Context";

function Favourites() {
  const { filterNotes } = useContext(Context);
  const [notesFilterState, setNotesFilterState] = useState(false);
  const location = useLocation();

  // Toggle state function
  const handleNotesClick = () => {
    setNotesFilterState((prevState) => !prevState);
    filterNotes("");
  };

  return (
    <div className="Favourite-Container">
      {/* Navbar Section */}
      <div className="Favourite-Navbar">
        {/* Link for "Your Favourites" */}
        <NavLink
          to="/Account/Favourites/FavouriteCards"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Your Favourites
        </NavLink>

        {/* Link for "Your Notes" with filter buttons below it */}
        <div className="notes-section">
          <NavLink
            to="/Account/Favourites/FavouriteNotesSection"
            onClick={handleNotesClick}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Your Notes
          </NavLink>

          {location.pathname === "/Account/Favourites/FavouriteNotesSection" && (
            <div
              className={`notes-filter-buttons ${notesFilterState ? "active" : ""}`}
            >
              <button onClick={() => filterNotes("Watering")}>Watering</button>
              <button onClick={() => filterNotes("Fertilising")}>Fertilising</button>
              <button onClick={() => filterNotes("Repotting")}>Repotting</button>
              <button onClick={() => filterNotes("Pruning")}>Pruning</button>
              <button onClick={() => filterNotes("Trimming")}>Trimming</button>
              <button onClick={() => filterNotes("Pest Control")}>
                Pest Control
              </button>
              <button onClick={() => filterNotes("AeratingSoil")}>
                Aerating Soil
              </button>
              <button onClick={() => filterNotes("Munching")}>Munching</button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="Favourite-Content">
        <Outlet />
      </div>
    </div>
  );
}

export default Favourites;
