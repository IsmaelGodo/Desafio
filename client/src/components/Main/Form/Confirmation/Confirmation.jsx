import React, { useState, useEffect } from "react";

const Confirmation = ({ dataForm }) => {

  return (
    <article className="grid-container">
      <div>
        <h3>Sexo</h3>
        {dataForm.sex}
      </div>
      <div>
        <h3>Edad</h3>
        {dataForm.age} años
      </div>
      <div>
        <h3>Altura</h3>
        <p>{dataForm.height} cm</p>
      </div>
      <div>
          <h3>Peso</h3>
        <p>{dataForm.weight} kg</p>
      </div>
      <div>
          <h3>Hidratacion</h3>
        <p>{dataForm.water_gl} vasos</p>
      </div>
      <div>
          <h3>Actividad</h3>
        <p>{dataForm.activity}</p>
      </div>
      <div>
          <h3>Enfermedad</h3>
        {dataForm.cardio_dis !== false && <p>{`Cardiopatía`}</p>}
        {dataForm.digest_dis !== false && <p>{`Digestiva`}</p>}
        {dataForm.neuro_dis !== false && <p>{`Neuronal`}</p>}
        {dataForm.lung_dis !== false && <p>{`Pulmonar`}</p>}
      </div>
    </article>
  );
};

export default Confirmation;
