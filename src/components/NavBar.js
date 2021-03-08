import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar">
      <img
        src="https://www.pinclipart.com/picdir/big/519-5193111_house-clipart-animated-transparent-house-cartoon-png.png"
        alt="house-logo"
      />
      <h2>Surreal Estate</h2>
      <nav>
        <ul className="navbar-links">
          <li className="navbar-links-item">
            <Link className="item" to="/">
              View Properties
            </Link>
          </li>
          <li className="navbar-links-item">
            <Link className="item" to="/add-property">
              Add a Property
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
