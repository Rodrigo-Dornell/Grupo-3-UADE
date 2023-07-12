// main.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./scss/Index.scss";
import Product from "./components/Grids.jsx";
import Carrito from './components/carrito.jsx';
import Dark from './components/DarkM.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Product />
    <Carrito />

  </React.StrictMode>,
  document.getElementById("root")
);
