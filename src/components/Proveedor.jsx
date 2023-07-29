import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import { useState, useCallback } from "react";
import { proveedores } from "./datos/Proveedores";
import ProveedorForm from "./agregarProv";
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

export default function Proveedor() {
  const [data, setData] = useState(proveedores);

  const Eliminar = useCallback(
    (proveedor) => {
      const nuevosProveedores = data.filter((p) => p.id !== proveedor.id);
      setData(nuevosProveedores);
      localStorage.setItem("proveedores", JSON.stringify(nuevosProveedores));
    },
    [data]
  );

  const Agregar = useCallback(
    (nuevoProveedor) => {
      setData((prevData) => [...prevData, nuevoProveedor]);
      localStorage.setItem(
        "proveedores",
        JSON.stringify([...data, nuevoProveedor])
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
      localStorage.setItem("proveedores", JSON.stringify(editedRows));
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
      <ProveedorForm data={data} onAgregar={Agregar} />
    </div>
  );
}
