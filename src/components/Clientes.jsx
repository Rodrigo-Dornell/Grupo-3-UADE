import { useState, useEffect, useCallback } from "react";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedClientes = localStorage.getItem("clientes");
    if (storedClientes) {
      setData(JSON.parse(storedClientes));
    }
  }, []);

  const Eliminar = useCallback(
    (cliente) => {
      const nuevosClientes = data.filter((p) => p.id !== cliente.id);
      setData(nuevosClientes);
      localStorage.setItem("clientes", JSON.stringify(nuevosClientes));
    },
    [data]
  );

  const Agregar = useCallback(
    (nuevoCliente) => {
      const nuevosClientes = [...data, nuevoCliente];
      setData(nuevosClientes);
      localStorage.setItem("clientes", JSON.stringify(nuevosClientes));
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
      localStorage.setItem("clientes", JSON.stringify(editedRows));
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
            Toolbar: () => <CustomToolbar />,
          }}
          EditCommit={EditCommit}
          pageSizeOptions={[5, 10, 50, 100]}
          checkboxSelection
        />
      </div>
      <ClienteForm onAgregar={Agregar} data={data} />
    </div>
  );
}