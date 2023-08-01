import React from "react";
import { v4 as uuidv4 } from "uuid";
import CuidatermIcon from "../../../assets/icons/Cuidaterm-Icon.svg";

const Diagnostic = () => {
  const symthoms = [
    "Fiebre de más de 40ºC.",
    "Calambres musculares.",
    "Mareos, vómitos y/o náuseas.",
    "Agitación y/o desorientación.",
    "Desmayos.",
  ];

  return (
    <>
      <section className="diagnostic-header-section">
        <div>
          <h1>Diagnóstico</h1>
          <img src={CuidatermIcon} alt="" />
        </div>
      </section>

      <section className="diagnostic-response-section">
        <p>
          Querido Vicente, En base a tus datos, hay una posibilidad moderada de
          que sufras un golpe de calor, lo más recomendable es que te protejas
          logrando un buen equilibrio entre hidratación y exposición solar.
        </p>
      </section>

      <section className="diagnostic-synthoms-section">
        <h3>Síntomas de un golpe de calor</h3>
        <ol>
          {symthoms.map((symthom) => (
            <li key={uuidv4()}>{symthom}</li>
          ))}
        </ol>
        <p>
          Si padeces alguno de los síntomas anteriores, acude al centro médico
          más cercano lo antes posible para recibir el tratamiento necesario.
        </p>
      </section>
    </>
  );
};

export default Diagnostic;