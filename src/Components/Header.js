import React from "react";

import "./Header.css";
import "./Result.css"
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Movies</Link>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Watch List</NavLink>
          </li>
          <li>
            <NavLink to="/watched">Watched</NavLink>
          </li>
          <li>
            <NavLink to="/add" className="btn">
              Add
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
