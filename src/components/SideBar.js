import React from "react";
import "../styles/SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ul className="bar">
      <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
      <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
      <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
      <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
      <Link to={`/?query={"city": "London"}`}>London</Link>
    </ul>
  );
};

export default SideBar;
