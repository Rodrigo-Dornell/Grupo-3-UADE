import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { productos } from "./datos/Mercaderia.jsx";
import Grid from "@mui/material/Grid";

function Grids(props) {
  const { searchTerm } = props;
  const filteredResults = searchTerm
    ? productos.filter(
        (producto) =>
          producto.nombre &&
          producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : productos;

  const [carrito, setCarrito] = React.useState(
    () => JSON.parse(localStorage.getItem("carrito")) || []
  );

  const agregarAlCarrito = (producto) => {
    const productoAgregado = carrito.find((item) => item.id === producto.id);

    if (productoAgregado === undefined) {
      const nuevosProductosEnCarrito = [...carrito, producto];
      setCarrito(nuevosProductosEnCarrito);
      localStorage.setItem("carrito", JSON.stringify(nuevosProductosEnCarrito));

      Swal.fire({
        title: "¡Producto agregado al carrito!",
        text: `El producto ${producto.nombre} ha sido agregado al carrito.`,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } else {
      const updatedCarrito = carrito.map((item) =>
        item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCarrito(updatedCarrito);
      localStorage.setItem("carrito", JSON.stringify(updatedCarrito));

      Swal.fire({
        title: "El producto ya existe en el carrito",
        text: `El producto ${producto.nombre} ya se encuentra en el carrito.`,
        icon: "info",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  const handleAgregarAlCarrito = (producto) => {
    if (!carrito) {
      setCarrito([]);
    }
    agregarAlCarrito(producto);
  };

  return (
    <div>
      <h1 className="titulos">Productos</h1>
      <Grid container spacing={2}>
        {filteredResults.map((producto) => (
          <Grid key={producto.id.toString()} item xs={6} md={4}>
            <div className="container">
              <h4 className="pNombre">{producto.nombre}</h4>
              <img src={producto.imagen} alt={producto.nombre} />

              <p className="pPrecio">
                Precio: ${producto.precio * producto.quantity}
              </p>
              <p className="pDescripcion">{producto.descripcion}</p>
              <button
                className="botones"
                onClick={() => handleAgregarAlCarrito(producto)}
              >
                Agregar al carrito
              </button>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Grids;
