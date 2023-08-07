import React from 'react';
import { Ventas } from './ventasGrafico';

import 'bootstrap/dist/js/bootstrap.bundle';

function Reportes() {
  const productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

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
          {/* Pasa el arreglo productosEnCarrito como una propiedad */}
          <Ventas productosEnCarrito={productosEnCarrito} />
        </div>
      </div>
    </div>
  );
}

export default Reportes;
