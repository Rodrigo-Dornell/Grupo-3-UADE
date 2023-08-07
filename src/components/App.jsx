import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from "./NavBar";
import Carro from "./Carrito";
import Grids from "./Grids";
import Proveedor from "./Proveedor";
import Clientes from "./Clientes";
import { proveedores } from "./datos/Proveedores";
import Reportes from './Reportes'

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
          <Route path="/carrito" element={<Carro />} />
          <Route
            path="/Proveedor"
            element={<Proveedor proveedores={proveedores} />}
          />
          <Route path="/Clientes" element={<Clientes />} />
          <Route path="/Reportes" element={<Reportes />} />
          <Route path="/" element={<Grids searchTerm={searchTerm} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
