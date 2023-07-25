import { useState } from "react";

const ClienteForm = ({ onAgregar, data, setData }) => {
  const [nombre, setNombre] = useState("");
  const [cuit, setCuit] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    if (!nombre || !cuit) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    const nuevoCliente = {
      id: data.length + 1, 
      nombre: nombre,
      cuit: cuit,
    };

    onAgregar(nuevoCliente);

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
      <button type="submit">Agregar Cliente</button>
    </form>
  );
};

export default ClienteForm;
