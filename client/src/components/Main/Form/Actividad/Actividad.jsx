import React, { useState } from "react";

const Actividad = ({handleActividadChange, actividad}) => {
 

  return (
    <div>
      <form>
        <h3>Actividad: {actividad}</h3>
        <button onClick={() => handleActividadChange('1')}>1</button>
        <input
          type="radio"
          id="opcion1"
          name="actividad"
          value="opcion1"
          checked={actividad === "opcion1"}
          onChange={handleActividadChange}
        />
        <label htmlFor="opcion1">Opción 1</label>

        <input
          type="radio"
          id="opcion2"
          name="actividad"
          value="opcion2"
          checked={actividad === "opcion2"}
          onChange={handleActividadChange}
        />
        <label htmlFor="opcion2">Opción 2</label>

        <input
          type="radio"
          id="opcion3"
          name="actividad"
          value="opcion3"
          checked={actividad === "opcion3"}
          onChange={handleActividadChange}
        />
        <label htmlFor="opcion3">Opción 3</label>

        <input
          type="radio"
          id="opcion4"
          name="actividad"
          value="opcion4"
          checked={actividad === "opcion4"}
          onChange={handleActividadChange}
        />
        <label htmlFor="opcion4">Opción 4</label>
      </form>
    </div>
  );
};

export default Actividad;
