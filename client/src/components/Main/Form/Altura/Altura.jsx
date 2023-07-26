import React, { useState } from "react";

const Altura = ({handleAlturaChange, altura}) => {
  
  

  return (
    <div>
      <form>
        <label>
          Altura: {altura}cm
          <input
            type="range"
            min="50"
            max="250"
            step="0.1"
            value={altura}
            onChange={handleAlturaChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Altura;
