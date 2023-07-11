import React from "react";
import Grid from "@mui/material/Grid";
import { productos } from "./productos";

function Product() {
  return (
    <Grid container spacing={3}>
      {productos.map((producto) => (
        <Grid key={producto.id} item xs={12} sm={6} md={4}>
          <div className="container">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.id}</h3>
            <h4>{producto.nombre}</h4>
            <p>Precio: {producto.precio}</p>
            <p>{producto.descripcion}</p>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default Product;