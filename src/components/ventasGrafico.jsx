import React from "react";
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
  const productoCantidades = {
    Adidas: 0,
    Nike: 0,
    Puma: 0,
  };

  for (let i = 0; i < productosEnCarrito.length; i++) {
    const nombreProducto = productosEnCarrito[i].nombre;

    if (nombreProducto.includes("Adidas")) {
      productoCantidades.Adidas += 1;
    } else if (nombreProducto.includes("Nike")) {
      productoCantidades.Nike += 1;
    } else if (nombreProducto.includes("Puma")) {
      productoCantidades.Puma += 1;
    }
  }

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
