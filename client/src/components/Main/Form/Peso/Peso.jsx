import React, { useState } from "react";

const Peso = ({peso, handlePesoChange}) => {
  

  return (
    <div>
      <form>
        <label>
          Peso: {peso} kg
          <input
            type="range"
            min="0"
            max="200"
            step="0.1"
            value={peso}
            onChange={handlePesoChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Peso;
