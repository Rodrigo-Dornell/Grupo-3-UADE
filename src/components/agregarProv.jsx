import { useState } from "react";

const ProveedorForm = ({ onAgregar, data, setData }) => {
  const [nombre, setNombre] = useState("");
  const [cuit, setCuit] = useState("");

  const handleSubmit = (e) => {
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
    <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center" }}>
      <div>
        <label className="NombreA">Nombre:</label>
        <input className="input"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label className="CuitA">CUIT:</label>
        <input className="input"
          type="text"
          value={cuit}
          onChange={(e) => setCuit(e.target.value)}
        />
      </div>
      <button type="submit"><h4 className="BotonA" >Agregar Proveedor</h4></button>
    </form>
  );
};

export default ProveedorForm;
