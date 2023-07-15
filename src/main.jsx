import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./scss/Index.scss";
import Product from "./components/Grids.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Product />
  </React.StrictMode>,
  document.getElementById("root")
);