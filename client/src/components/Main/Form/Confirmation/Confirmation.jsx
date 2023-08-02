import React, { useState, useEffect } from "react";

const Confirmation = ({ dataForm }) => {

  return (
    <article className="grid-container">
      <section>
        <h3>Sexo</h3>
        {dataForm.sex}
      </section>
      <section>
        <h3>Edad</h3>
        {dataForm.age}Años
      </section>
      <section>
        <h3>Altura</h3>
        <p>{dataForm.height}cm</p>
      </section>
      <section>
          <h3>Peso</h3>
        <p>{dataForm.weight}Kg</p>
      </section>
      <section>
          <h3>Hidratacion</h3>
        <p>{dataForm.water_gl} Vasos</p>
      </section>
      <section>
          <h3>Actividad</h3>
        <p>{dataForm.activity}</p>
      </section>
      <section>
          <h3>Enfermedad</h3>
        {dataForm.cardio_dis !== false && <p>{`Cardiopatía`}</p>}
        {dataForm.digest_dis !== false && <p>{`Digestiva`}</p>}
        {dataForm.neuro_dis !== false && <p>{`Neuronal`}</p>}
        {dataForm.lung_dis !== false && <p>{`Pulmonar`}</p>}
      </section>
    </article>
  );
};

export default Confirmation;
