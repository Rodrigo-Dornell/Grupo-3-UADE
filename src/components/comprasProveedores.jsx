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

export function Compras({ proveedoresData }) {
const [listaCantidades, setListaCantidades] = useState({
    Adidas: 0,
    Nike: 0,
    Puma: 0,
});

useEffect(() => {
    const newCantidades = {
    Adidas: 0,
    Nike: 0,
    Puma: 0,
    Otros: 0,
    };

    for (let i = 0; i < proveedoresData.length; i++) {
    const nombreProveedor = proveedoresData[i].nombre;

    if (nombreProveedor.includes("Adidas")) {
        newCantidades.Adidas += 1; 
    } else if (nombreProveedor.includes("Nike")) {
        newCantidades.Nike += 1;
    } else if (nombreProveedor.includes("Puma")) {
        newCantidades.Puma += 1;
    } else {
        newCantidades.Otros+= 1;
    }
    }

    setListaCantidades(newCantidades);
}, [proveedoresData]);

const marcas = ["Adidas", "Nike", "Puma", "Otros"];
const proveedoresDataArray = [
    listaCantidades.Adidas,
    listaCantidades.Nike,
    listaCantidades.Puma,
    listaCantidades.Otros,
];

const data = {
    labels: marcas,
    datasets: [
    {
        label: "Compras",
        data: proveedoresDataArray,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
    ],
};

const options = {};

return <Line options={options} data={data} />;
}
