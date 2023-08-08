
import { Ventas } from "./ventasGrafico";
import { Compras } from "./comprasProveedores";
import Proveedor from "./Proveedor"; 
import 'bootstrap/dist/js/bootstrap.bundle';

function Reportes() {
  const productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const proveedoresData = JSON.parse(localStorage.getItem('proveedores')) || []; // Obtén la información de proveedores

  return (
    <div>
      <h1 className="text-center font-menospace fw-bold lh-base">Reportes</h1>
      <div>
        <p className="m-2">
          <b>Ventas </b> Gráfico
        </p>
        <div
          className="bg-light mx-auto px-2 border border-2 border-primary"
          style={{ width: '450px', height: '230px' }}
        >
          <Ventas productosEnCarrito={productosEnCarrito} />
        </div>
      </div>
      <div>
        <p className="m-2">
          <b>Compras </b> Gráfico
        </p>
        <div
          className="bg-light mx-auto px-2 border border-2 border-primary"
          style={{ width: '450px', height: '230px' }}
        >
          <Compras productosEnCarrito={productosEnCarrito} proveedoresData={proveedoresData} />
        </div>
      </div>
    </div>
  );
}

export default Reportes;
