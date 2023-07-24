import React from "react";
import { productos } from "./datos/Mercaderia";
import Grid from "@mui/material/Grid";
function Carro() {
  let productosEnCarrito;
  if (localStorage.getItem("carrito")) {
    // Cuando ya existe algo en el storage con la clave carrito
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
  } else {
    // No existe nada en el storage
    productosEnCarrito = [];
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
  }

  return (
    <div>
      <h2 className="titulos">Productos en el Carrito</h2>
      <Grid container spacing={2}>
        {productosEnCarrito.map((producto) => ( // Utiliza productosEnCarrito para mapear los productos en el carrito
          <Grid key={producto.id.toString()} item xs={6} md={4}>
            <div className="container">
              <h4 className="pNombre">{producto.nombre}</h4>
              <img src={producto.imagen} alt={producto.nombre} />
              <p className="pPrecio">Precio: {producto.precio}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Carro;
