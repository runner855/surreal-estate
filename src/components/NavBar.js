import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <img
          src="https://www.pinclipart.com/picdir/big/519-5193111_house-clipart-animated-transparent-house-cartoon-png.png"
          alt="house-logo"
        />
        <ul className="navbar-links">
          <ul className="navbar-links-item">
            <li>
              <Link className="item" to="/">
                View Properties
              </Link>
            </li>
            <li>
              <Link className="item" to="/add-property">
                Add a Property
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
