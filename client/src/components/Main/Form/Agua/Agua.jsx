import React, { useState } from "react";

const Agua = ({disminuirAgua,aumentarAgua, cantidadAgua}) => {
  

  return (
    <div>
      <form>
        <label>
          Vasos de agua diarios: {cantidadAgua} 
        </label>
        <br />
        <button type="button" onClick={disminuirAgua}>
          -
        </button>
        <button type="button" onClick={aumentarAgua}>
          +
        </button>
      </form>
    </div>
  );
};

export default Agua;
