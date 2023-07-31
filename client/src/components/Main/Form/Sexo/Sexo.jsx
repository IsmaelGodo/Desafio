import React, { useState } from "react";

const Sexo = ({ handleGeneroChange, genero }) => {
  
  const [stylemasc, setStylemasc] = useState("regular");
  const [stylefem, setStylefem] = useState("regular");

  return (
    <section className="body_sex">
      <article
        className={`img_genero_${stylemasc}`}
        onClick={() => {
          setStylemasc("selected");
          setStylefem("regular");
          handleGeneroChange("masculino");
        }}
      >
        <img src="/Emojy-Hombre.png" alt="Masculino" />
        <h3>Masculino</h3>
      </article>
      <article
        className={`img_genero_${stylefem}`}
        onClick={() => {
          setStylemasc("regular");
          setStylefem("selected");
          handleGeneroChange("femenino");
        }}
      >
        <img src="/Emojy-Mujer.png" alt="Femenino" />
        <h3>Femenino</h3>
      </article>
    </section>
  );
};

export default Sexo;
