import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Ventas({ productosEnCarrito }) {
  const [productoCantidades, setProductoCantidades] = useState({
    Adidas: 0,
    Nike: 0,
    Puma: 0,
  });

  useEffect(() => {
    const newCantidades = {
      Adidas: 0,
      Nike: 0,
      Puma: 0,
    };

    for (let i = 0; i < productosEnCarrito.length; i++) {
      const nombreProducto = productosEnCarrito[i].nombre;

      if (nombreProducto.includes("Adidas")) {
        newCantidades.Adidas += productosEnCarrito[i].quantity;
      } else if (nombreProducto.includes("Nike")) {
        newCantidades.Nike += productosEnCarrito[i].quantity;
      } else if (nombreProducto.includes("Puma")) {
        newCantidades.Puma += productosEnCarrito[i].quantity;
      }
    }

    setProductoCantidades(newCantidades);
  }, [productosEnCarrito]);

  const marcas = ["Adidas", "Nike", "Puma"];
  const carritoData = [
    productoCantidades.Adidas,
    productoCantidades.Nike,
    productoCantidades.Puma,
  ];

  const data = {
    labels: marcas,
    datasets: [
      {
        label: "Ventas",
        data: carritoData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {};

  return <Line options={options} data={data} />;
}
