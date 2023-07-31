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
        value="opcion1"
        checked={actividad === "opcion1"}
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
        value="opcion2"
        checked={actividad === "opcion2"}
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
        value="opcion3"
        checked={actividad === "opcion3"}
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
        value="opcion4"
        checked={actividad === "opcion4"}
        onChange={handleActividadChange}
      />
      <label className={`activity-label`} htmlFor="opcion4">
        Muy a menudo
      </label>
    </>
  );
};

export default Actividad;
