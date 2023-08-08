import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

function Carro() {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("carrito")) {
      setProductosEnCarrito(JSON.parse(localStorage.getItem("carrito")));
    } else {
      localStorage.setItem("carrito", JSON.stringify([]));
      setProductosEnCarrito([]);
    }
  }, []);

  const EliminarFun = (productoId) => {
    const productoIndex = productosEnCarrito.findIndex(
      (producto) => producto.id === productoId
    );

    if (productoIndex !== -1) {
      if (productosEnCarrito[productoIndex].quantity > 1) {
        productosEnCarrito[productoIndex].quantity -= 1;
      } else {
        productosEnCarrito.splice(productoIndex, 1);
      }

      setProductosEnCarrito([...productosEnCarrito]);

      localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
    }
  };

  function prod() {
    let productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
    let arrayProd = productosEnCarrito.map((x) => x.id);
    return arrayProd;
  }

  let nTotal = 0;
  for (let i = 0; i < prod().length; i++) {
    const productoIndex = productosEnCarrito.findIndex(
      (producto) => producto.id === prod()[i]
    );

    if (productoIndex !== -1) {
      nTotal += productosEnCarrito[productoIndex].precio * productosEnCarrito[productoIndex].quantity;
    }
  }

  return (
    <div>
      <h2 className="titulos">Productos en el Carrito</h2>
      <Grid container spacing={2}>
        {productosEnCarrito.map((producto) => (
          <Grid key={producto.id.toString()} item xs={6} md={4}>
            <div className="container">
              <h4 className="pNombre">{producto.nombre}</h4>
              <img src={producto.imagen} alt={producto.nombre} />
              <p className="pPrecio">
                Precio: ${producto.precio * producto.quantity}
              </p>
            </div>
            <button onClick={() => EliminarFun(producto.id)} className="bEliminar"> Eliminar </button>
          </Grid>
        ))}
      </Grid>
      <h2 className="tP">Total: ${nTotal}</h2>
    </div>
  );
}

export default Carro;


