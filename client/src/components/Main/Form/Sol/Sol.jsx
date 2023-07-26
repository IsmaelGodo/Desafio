import React, {useState} from "react";

const Sol = () => {
  const [cantidadSol, setCantidadSol] = useState(0);

  const aumentarSol = () => {
    setCantidadSol((prevCantidad) => prevCantidad + 1);
  };

  const disminuirSol = () => {
    setCantidadSol((prevCantidad) => (prevCantidad > 0 ? prevCantidad - 1 : 0));
  };

  return <div>
  <form>
    <label>
      Horas de sol diarias: {cantidadSol} 
    </label>
    <br />
    <button type="button" onClick={disminuirSol}>
      -
    </button>
    <button type="button" onClick={aumentarSol}>
      +
    </button>
  </form>
</div>
};

export default Sol;
