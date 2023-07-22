import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrimarySearchAppBar from "./NavBar";
import Carro from "./Carro";
import Grids from "./Grids";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Router>
      <div>
        <PrimarySearchAppBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
        <Switch>
          <Route exact path="/carro" component={Carro} />
          <Route
            path="/"
            component={() => <Grids searchTerm={searchTerm} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
