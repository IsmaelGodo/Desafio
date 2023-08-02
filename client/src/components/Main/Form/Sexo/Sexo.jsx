import React, { useState } from "react";
import MaleIcon from '../../../../assets/icons/Emojy-Hombre.svg'
import FemaleIcon from '../../../../assets/icons/Emojy-Mujer.svg'


const Sexo = ({ handleGeneroChange, genero }) => {
  const [stylemasc, setStylemasc] = useState("regular");
  const [stylefem, setStylefem] = useState("regular");

  return (
    <>
      <article
        className={`img_genero_${stylemasc}`}
        onClick={() => {
          setStylemasc("selected");
          setStylefem("regular");
          handleGeneroChange("masculino");
        }}
      >
        <img src={MaleIcon} alt="Masculino" />
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
        <img src={FemaleIcon} alt="Femenino" />
        <h3>Femenino</h3>
      </article>
    </>
  );
};

export default Sexo;
