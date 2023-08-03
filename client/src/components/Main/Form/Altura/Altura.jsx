import React, { useState } from "react";
import ResetIcon from '../../../../assets/icons/Icono-Resetear.svg'

const Altura = ({
  displayedNumberHeight,
  handleButtonClickHeight,
  handleClearHeight,
}) => {
  //Teclado en pantalla
  return (
    <>
      <input
        className="input_form"
        type="text"
        defaultValue={displayedNumberHeight}
        placeholder="cm"
      />
      <article className="teclado">
        <div className="teclado-row">
          <button onClick={() => handleButtonClickHeight("1")}>1</button>
          <button onClick={() => handleButtonClickHeight("2")}>2</button>
          <button onClick={() => handleButtonClickHeight("3")}>3</button>
        </div>
        <div className="teclado-row">
          <button onClick={() => handleButtonClickHeight("4")}>4</button>
          <button onClick={() => handleButtonClickHeight("5")}>5</button>
          <button onClick={() => handleButtonClickHeight("6")}>6</button>
        </div>
        <div className="teclado-row">
          <button onClick={() => handleButtonClickHeight("7")}>7</button>
          <button onClick={() => handleButtonClickHeight("8")}>8</button>
          <button onClick={() => handleButtonClickHeight("9")}>9</button>
        </div>
        <div className="teclado-row">
          <button className="fake-button">0</button>
          <button onClick={() => handleButtonClickHeight("0")}>0</button>
          <button id="reset-button" onClick={handleClearHeight}>
            <img src={ResetIcon} alt="" /></button>
        </div>
      </article>
    </>
  );
};

export default Altura;
