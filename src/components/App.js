import React from "react";
import "../styles/App.css";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2>Surreal Estate</h2>
      <ul className="navbar-links-item">
        <li>View Properties</li>

        <li>Add a Property</li>
      </ul>
    </div>
  );
}

export default App;
