import React, { useState } from "react";

const Peso = ({ peso, handlePesoChange, handleClearWeight }) => {
  return (
    <div>
      <input className="input_form" type="text" value={peso} placeholder="Kg" />
      <article className="teclado">
        <section>
          <button onClick={() => handlePesoChange("1")}>1</button>
          <button onClick={() => handlePesoChange("2")}>2</button>
          <button onClick={() => handlePesoChange("3")}>3</button>
        </section>
        <section>
          <button onClick={() => handlePesoChange("4")}>4</button>
          <button onClick={() => handlePesoChange("5")}>5</button>
          <button onClick={() => handlePesoChange("6")}>6</button>
        </section>
        <section>
          <button onClick={() => handlePesoChange("7")}>7</button>
          <button onClick={() => handlePesoChange("8")}>8</button>
          <button onClick={() => handlePesoChange("9")}>9</button>
        </section>
        <section>
          <button onClick={() => handlePesoChange("0")}>0</button>
        </section>
        <button onClick={handleClearWeight}>Clear</button>
      </article>
    </div>
  );
};

export default Peso;
