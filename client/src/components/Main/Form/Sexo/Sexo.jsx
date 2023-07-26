import React, { useState } from "react";

const Sexo = ({handleGeneroChange, genero}) => {

 return <div>
    <form>


      <h3>Sexo:{genero}</h3>
      <input
        type="radio"
        id="hombre"
        name="genero"
        value="hombre"
        checked={genero === 'hombre'}
        onChange={handleGeneroChange}
      />
      <label htmlFor="hombre">Hombre</label>

      <input
        type="radio"
        id="mujer"
        name="genero"
        value="mujer"
        checked={genero === 'mujer'}
        onChange={handleGeneroChange}
      />
      <label htmlFor="mujer">Mujer</label>
    </form>

  </div>;
};

export default Sexo;
