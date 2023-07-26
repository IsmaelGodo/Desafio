import React, { useState } from "react";

const Enfermedad = () => {
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setOpcionesSeleccionadas((prevOpciones) => [...prevOpciones, value]);
    } else {
      setOpcionesSeleccionadas((prevOpciones) =>
        prevOpciones.filter((opcion) => opcion !== value)
      );
    }
  };

  return (
    <div>
      <form>
        <label>
          <input
            type="checkbox"
            name="opcion1"
            value="opcion1"
            checked={opcionesSeleccionadas.includes("opcion1")}
            onChange={handleCheckboxChange}
          />
          Opción 1
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="opcion2"
            value="opcion2"
            checked={opcionesSeleccionadas.includes("opcion2")}
            onChange={handleCheckboxChange}
          />
          Opción 2
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="opcion3"
            value="opcion3"
            checked={opcionesSeleccionadas.includes("opcion3")}
            onChange={handleCheckboxChange}
          />
          Opción 3
        </label>
      </form>
      <p>Opciones seleccionadas: {opcionesSeleccionadas.join(", ") || "Ninguna"}</p>
    </div>
  );
};

export default Enfermedad;
