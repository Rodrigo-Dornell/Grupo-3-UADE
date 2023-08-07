import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import { useState, useCallback } from "react";
import { clientes } from "./datos/Cliente";
import ClienteForm from "./agregar/agregarProv";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nombre", headerName: "Nombre", width: 130, editable: true },
  { field: "cuit", headerName: "CUIT", width: 130, editable: true },
  {
    field: "eliminar",
    headerName: "Eliminar",
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <button onClick={() => Eliminar(params.row)}>Eliminar</button>
    ),
  },
];
const CustomToolbar = () => {
  return <GridToolbarContainer></GridToolbarContainer>;
};
export default function Clientes() {
  const [data, setData] = useState(clientes);

  const Eliminar = useCallback(
    (cliente) => {
      const nuevosClientes = data.filter((p) => p.id !== clientes.id);
      setData(nuevosCliente);
      localStorage.setItem("clientes", JSON.stringify(nuevosClientes));
    },
    [data]
  );

  const Agregar = useCallback(
    (nuevoCliente) => {
      setData((prevData) => [...prevData, nuevoCliente]);
      localStorage.setItem(
        "Clientes",
        JSON.stringify([...data, nuevoCliente])
      );
    },
    [data]
  );

  const EditCommit = useCallback(
    (params) => {
      const editedRows = data.map((row) => {
        if (row.id === params.id) {
          return { ...row, [params.field]: params.props.value };
        }
        return row;
      });

      setData(editedRows);
      localStorage.setItem("Clientes", JSON.stringify(editedRows));
    },
    [data]
  );

  return (
    <div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns.map((column) =>
            column.field === "eliminar"
              ? {
                  ...column,
                  renderCell: (params) => (
                    <button onClick={() => Eliminar(params.row)}>
                      Eliminar
                    </button>
                  ),
                }
              : column
          )}
          components={{
            Toolbar: () => <div>
                <CustomToolbar/>
                </div>,
          }}
          EditCommit={EditCommit}
          pageSizeOptions={[5, 10, 50, 100]}
          checkboxSelection
        />
      </div>
      <ClienteForm data={data} onAgregar={Agregar} />
    </div>
  );
}
