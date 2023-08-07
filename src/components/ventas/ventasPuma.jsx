import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function VentasMa() {
  const productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  const carritoData = productosEnCarrito.map((producto) => producto.cantidad);

  const data = {
    labels: meses,
    datasets: [
      {
        label: 'Ventas',
        data: carritoData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {};

  return <Line options={options} data={data} />;
}