import React from "react";
import "../styles/App.css";
import { Route, Switch } from "react-router-dom";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={Properties} />

        <Route path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
