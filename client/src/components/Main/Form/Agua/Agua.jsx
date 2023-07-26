import React, { useState } from "react";

const Agua = () => {
  const [cantidadAgua, setCantidadAgua] = useState(0);

  const aumentarAgua = () => {
    setCantidadAgua((prevCantidad) => prevCantidad + 1);
  };

  const disminuirAgua = () => {
    setCantidadAgua((prevCantidad) => (prevCantidad > 0 ? prevCantidad - 1 : 0));
  };

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
