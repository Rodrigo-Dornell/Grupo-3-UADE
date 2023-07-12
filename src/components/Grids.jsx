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
            <h4 className="pNombre">{producto.nombre}</h4>
            <p className="pPrecio">Precio: {producto.precio}</p>
            <p className="pDescripcion">{producto.descripcion}</p>
            <h3>{producto.id}</h3>
            <button>
              <h4 className="boton">agregar al carrito</h4>
            </button>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default Product;
