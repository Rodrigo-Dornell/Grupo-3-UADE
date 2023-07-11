import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./scss/Index.scss";
import Product from "./components/Grids.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Product />
  </React.StrictMode>
);
