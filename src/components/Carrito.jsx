import React from 'react';
import Grid from "@mui/material/Grid";

function Carro() {
  let productosEnCarrito;
  if (localStorage.getItem("carrito")) {
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
  } else {
    productosEnCarrito = [];
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
  }

  const EliminarFun = (productoId) => {
    // Encontrar el índice del producto con el mismo id en el arreglo productosEnCarrito
    const productoIndex = productosEnCarrito.findIndex(producto => producto.id === productoId);
    
    if (productoIndex !== -1) {
      // Eliminar el producto del arreglo productosEnCarrito utilizando splice
      productosEnCarrito.splice(productoIndex, 1);
      
      // Actualizar el storage con el nuevo arreglo de productosEnCarrito
      localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
      
      // Forzar una actualización del componente para que refleje los cambios
      window.location.reload();
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
              <p className="pPrecio">Precio: {producto.precio}</p>
            </div>
            <button onClick={() => EliminarFun(producto.id)}> Eliminar </button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Carro;
