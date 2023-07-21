import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./scss/Index.scss";
import Product from "./components/Grids.jsx";
import Carro from './components/Carro.jsx'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
    <Product />
  </React.StrictMode>
);
