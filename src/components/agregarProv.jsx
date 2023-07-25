import { useState } from "react";

const ProveedorForm = ({ onAgregar, data, setData }) => {
  const [nombre, setNombre] = useState("");
  const [cuit, setCuit] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    if (!nombre || !cuit) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    const nuevoProveedor = {
      id: data.length + 1, 
      nombre: nombre,
      cuit: cuit,
    };

    onAgregar(nuevoProveedor);

    setNombre("");
    setCuit("");
  };

  return (
    <form onSubmit={Submit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label>CUIT:</label>
        <input
          type="text"
          value={cuit}
          onChange={(e) => setCuit(e.target.value)}
        />
      </div>
      <button type="submit">Agregar Proveedor</button>
    </form>
  );
};

export default ProveedorForm;
