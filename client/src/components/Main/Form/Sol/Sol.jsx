import React, {useState} from "react";

const Sol = ({disminuirSol, aumentarSol, cantidadSol}) => {
 

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
