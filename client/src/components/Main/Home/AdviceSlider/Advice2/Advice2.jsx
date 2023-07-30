import React from "react";
import BottleImg from '../../../../../assets/images/Imagen-Botella.svg'

const Advice2 = () => {
  return (
    <article>
      <div className="advice-text">
        <h1>Llévate siempre una botella de agua para hidratarte</h1>
      </div>
      <div className="advice-image">
        <img src={BottleImg} alt="" />
      </div>
    </article>
  );
};

export default Advice2;
