import { VentasAd } from "./ventas/ventasAdidas";
import { VentasNi } from "./ventas/ventasNike";
import { VentasMa } from "./ventas/ventasPuma";

import "bootstrap/dist/js/bootstrap.bundle";
function Reportes() {
  return (
    <div>
      <h1 className=" text-center font-menospace fw-bold lh-base">Reportes</h1>
      <div>
        <p className="m-2">
          <b>Ventas Adidas </b>Gráfico
        </p>
        <div
          className="bg-light mx-auto px-2 border border-2 border-primary"
          style={{ width: "450px", height: "230px" }}
        >
          <VentasAd />
        </div>
      </div>

      <div>
        <p className="m-2">
          <b>Ventas Puma </b>Gráfico
        </p>
        <div
          className="bg-light mx-auto px-2 border border-2 border-primary"
          style={{ width: "450px", height: "230px" }}
        >
          <VentasMa />
        </div>
      </div>

      <div>
        <p className="m-2">
          <b>Ventas Nike </b>Gráfico
        </p>
        <div
          className="bg-light mx-auto px-2 border border-2 border-primary"
          style={{ width: "450px", height: "230px" }}
        >
          <VentasNi/>
        </div>
      </div>
    </div>
  );
}

export default Reportes;
