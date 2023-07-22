import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrimarySearchAppBar from "./NavBar";
import Carro from "./Carro";
import Grids from "./Grids";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <div>
        <PrimarySearchAppBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Switch>
          <Route path="/carro" component={Carro} />
          <Route exact path="/">
            {window.location.pathname !== "/carro" && (
              <Grids searchTerm={searchTerm} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
