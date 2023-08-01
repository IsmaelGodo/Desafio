import React, { useState } from "react";
import ResetIcon from '../../../../assets/icons/Icono-Resetear.svg'

const Edad = ({ handleEdadChange, handleClearAge, edad }) => {
  return (
    <>
      <input
        className="input_form"
        type="text"
        defaultValue={edad}
        placeholder="años"
      />
      <article className="teclado">
        <div className="teclado-row">
          <button onClick={() => handleEdadChange("1")}>1</button>
          <button onClick={() => handleEdadChange("2")}>2</button>
          <button onClick={() => handleEdadChange("3")}>3</button>
        </div>
        <div className="teclado-row">
          <button onClick={() => handleEdadChange("4")}>4</button>
          <button onClick={() => handleEdadChange("5")}>5</button>
          <button onClick={() => handleEdadChange("6")}>6</button>
        </div>
        <div className="teclado-row">
          <button onClick={() => handleEdadChange("7")}>7</button>
          <button onClick={() => handleEdadChange("8")}>8</button>
          <button onClick={() => handleEdadChange("9")}>9</button>
        </div>
        <div className="teclado-row">
          <button className="fake-button">0</button>
          <button onClick={() => handleEdadChange("0")}>0</button>
          <button id="reset-button" onClick={handleClearAge}>
            <img src={ResetIcon} alt="" /></button>
        </div>
      </article>
    </>
  );
};

export default Edad;
