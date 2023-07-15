import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { productos } from "./datos/Mercaderia.jsx";
import Grid from "@mui/material/Grid";

function Product() {
  const history = useHistory();
  const [productosEnCarrito, setProductosEnCarrito] = React.useState([]);

  const agregarAlCarrito = (producto) => {
    let productoAgregado = productosEnCarrito.find(
      (elem) => elem.id === producto.id
    );

    if (productoAgregado === undefined) {
      let nuevosProductosEnCarrito = [...productosEnCarrito, producto];
      setProductosEnCarrito(nuevosProductosEnCarrito);
      localStorage.setItem("carrito", JSON.stringify(nuevosProductosEnCarrito));

      Swal.fire({
        title: "¡Producto agregado al carrito!",
        text: `El producto ${producto.nombre} ha sido agregado al carrito.`,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } else {
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
    agregarAlCarrito(producto);
    history.push("/carrito");
  };

  return (
    <div>
      <h2 className="tituloProductos">Productos</h2>
      <Grid container spacing={2}>
        {productos.map((producto) => (
          <Grid key={producto.id.toString()} item xs={6} md={4}>
            <div className="container">
              <h4 className="pNombre">{producto.nombre}</h4>
              <img src={producto.imagen} alt={producto.nombre} />
              <p className="pPrecio">Precio: {producto.precio}</p>
              <p className="pDescripcion">{producto.descripcion}</p>
              <button
                className="boton"
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

export default Product;

