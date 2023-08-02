import React, { useState } from "react";
import GlassImg from "../../../../assets/images/Imagen-Vaso-Margenes.svg";

const Agua = ({ disminuirAgua, aumentarAgua, cantidadAgua }) => {
  return (
    <>
      <article>
        <input
            className="input_form"
            type="text"
            defaultValue={cantidadAgua}
            placeholder="kg"
          />
      </article>

      <article>
        <img src={GlassImg} alt="" />
      </article>
        
      <article>
        <button className="more-water-button" type="button" onClick={disminuirAgua}>
          -
        </button>
        <button className="less-water-button" type="button" onClick={aumentarAgua}>
          +
        </button>
      </article>
    </>
  );
};

export default Agua;
