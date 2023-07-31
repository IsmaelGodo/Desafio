import React, { useState } from "react";
import ResetIcon from '../../../../assets/icons/Icono-Resetear.svg'

const Peso = ({ peso, handlePesoChange, handleClearWeight }) => {
  return (
    <>
      <input className="input_form" type="text" value={peso} placeholder="kg" />
      <article className="teclado">
        <div className="teclado-row">
          <button onClick={() => handlePesoChange("1")}>1</button>
          <button onClick={() => handlePesoChange("2")}>2</button>
          <button onClick={() => handlePesoChange("3")}>3</button>
        </div>
        <div className="teclado-row">
          <button onClick={() => handlePesoChange("4")}>4</button>
          <button onClick={() => handlePesoChange("5")}>5</button>
          <button onClick={() => handlePesoChange("6")}>6</button>
        </div>
        <div className="teclado-row">
          <button onClick={() => handlePesoChange("7")}>7</button>
          <button onClick={() => handlePesoChange("8")}>8</button>
          <button onClick={() => handlePesoChange("9")}>9</button>
        </div>
        <div className="teclado-row">
          <button className="fake-button">0</button>
          <button onClick={() => handlePesoChange("0")}>0</button>
          <button id="reset-button" onClick={handleClearWeight}>
            <img src={ResetIcon} alt="" />
          </button>
        </div>
      </article>
    </>
  );
};

export default Peso;
