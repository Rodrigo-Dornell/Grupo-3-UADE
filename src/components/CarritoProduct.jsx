import React from "react";
import { productos } from "./datos/Mercaderia";
import Grid from "@mui/material/Grid";
function Carrito() {
  let productosEnCarrito;
  if (localStorage.getItem("carrito")) {
    //cuando ya existe algo en el storage con la clave carrito
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
  } else {
    //no existe nada en el storage
    productosEnCarrito = [];
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
  }

  return (
    <div>
      <h2 className="tituloProductos">Productos en el Carrito</h2>
      <Grid container spacing={2}>
        {productos.map((producto) => (
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

export default Carrito;
