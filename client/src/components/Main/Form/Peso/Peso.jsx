import React, { useState } from "react";

const Peso = () => {
  const [peso, setPeso] = useState(0);

  const handlePesoChange = (event) => {
    setPeso(parseInt(event.target.value));
  };

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
