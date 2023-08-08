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

      // Actualizar el estado con el nuevo arreglo de productos
      setProductosEnCarrito([...productosEnCarrito]);

      // Actualizar el carrito en el localStorage
      localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
    }
  };




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
            <button onClick={() => EliminarFun(producto.id)}> Eliminar </button>
          </Grid>
        ))}
      </Grid>
      
    </div>
  );
}

export default Carro;

