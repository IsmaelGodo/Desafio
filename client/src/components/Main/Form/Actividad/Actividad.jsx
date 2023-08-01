import React, { useState } from "react";

const Actividad = ({ handleActividadChange, actividad }) => {
  
  return (
    <>
      {/* <button onClick={() => handleActividadChange("1")}>1</button> */}
      <input
        className={`activity-input`}
        type="radio"
        id="opcion1"
        name="actividad"
        value="Solo salgo a pasear"
        checked={actividad === "Solo salgo a pasear"}
        onChange={handleActividadChange}
      />
      <label className={`activity-label`} htmlFor="opcion1">
        Solo salgo a pasear
      </label>

      <input
        className={`activity-input`}
        type="radio"
        id="opcion2"
        name="actividad"
        value="Cada ciertas horas"
        checked={actividad === "Cada ciertas horas"}
        onChange={handleActividadChange}
      />
      <label className={`activity-label`} htmlFor="opcion2">
        Cada ciertas horas
      </label>

      <input
        className={`activity-input`}
        type="radio"
        id="opcion3"
        name="actividad"
        value="Con frecuencia"
        checked={actividad === "Con frecuencia"}
        onChange={handleActividadChange}
      />
      <label className={`activity-label`} htmlFor="opcion3">
        Con frecuencia
      </label>

      <input
        className={`activity-input`}
        type="radio"
        id="opcion4"
        name="actividad"
        value="Muy a menudo"
        checked={actividad === "Muy a menudo"}
        onChange={handleActividadChange}
      />
      <label className={`activity-label`} htmlFor="opcion4">
        Muy a menudo
      </label>
    </>
  );
};

export default Actividad;
