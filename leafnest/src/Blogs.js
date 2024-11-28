import React, { useContext, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./css/Blogs.css";
import { Context } from "./GlobalContext/Context";

// Importing React Icons for up and down arrows
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Blogs() {
  const { sortBlogs } = useContext(Context);
  const location = useLocation();
  const [blogsFilterState, setBlogsFilterState] = useState(false);

  // Toggle filter visibility
  const toggleFilter = () => {
    setBlogsFilterState((prevState) => !prevState);
  };

  return (
    <div className="Blogs-section">
      <div className="Blogs-NavBar">
        <NavLink
          to="/Account/Blogs/NewBlog"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          New Blog
        </NavLink>

        <div className="YourBlogs-bar">
          <NavLink
            onClick={toggleFilter}
            to="/Account/Blogs/YourBlogs"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Your Blogs 
            <span className={`arrow ${blogsFilterState ? "up" : "down"}`}>
              {blogsFilterState ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </NavLink>

          {location.pathname === "/Account/Blogs/YourBlogs" && (
            <div className={`YourBlogs-filter ${blogsFilterState ? "active" : ""}`}>
              <div className="SortByDate">
                <button>Date</button>
                <button onClick={() => sortBlogs("Date", "LH")}>Oldest-Newest</button>
                <button onClick={() => sortBlogs("Date", "HL")}>Newest-Oldest</button>
              </div>

              <div className="SortByViews">
                <button>Views</button>
                <button onClick={() => sortBlogs("Views", "LH")}>Low-High</button>
                <button onClick={() => sortBlogs("Views", "HL")}>High-Low</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="Blogs-Section">
        <Outlet />
      </div>
    </div>
  );
}

export default Blogs;
