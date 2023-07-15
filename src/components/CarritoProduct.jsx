import React from "react";

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
      <h2>Carrito de compras</h2>
      <ul>
        {productosEnCarrito.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Carrito;