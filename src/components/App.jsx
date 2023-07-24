import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Routes>
          <Route path="/carro" element={<Carro />} />
          <Route path="/" element={<Grids searchTerm={searchTerm} />} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
