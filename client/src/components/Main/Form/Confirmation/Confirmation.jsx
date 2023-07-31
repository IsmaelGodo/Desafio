import React, {useState, useEffect} from "react";
import axios from "axios";


const Confirmation = ({dataForm}) => {
  console.log(dataForm);
 




  return <article className="grid-container">
    <section>
      <p><h3>Sexo</h3>
      {dataForm.sex}</p>
    </section>
    <section>
      <p><h3>Edad</h3>
      {dataForm.age}Años</p>
    </section>
    <section>
    <p><h3>Altura</h3></p>
      <p>{dataForm.height}cm</p>
    </section>
    <section>
    <p><h3>Peso</h3></p>
      <p>{dataForm.weight}Kg</p>
    </section>
    <section>
    <p><h3>Hidratacion</h3></p>
      <p>{dataForm.water_gl}Vasos</p>
    </section>
    <section>
    <p><h3>Actividad</h3></p>
      <p>{dataForm.activity}</p>
    </section>
    <section>
    <p><h3>Enfermedad</h3></p>
      {dataForm.cardio_dis !== false && <p>{`Cardiopatía`}</p>}
      {dataForm.digest_dis !== false && <p>{`Digestiva`}</p>}
      {dataForm.neuro_dis !== false && <p>{`Neuronal`}</p>}
      {dataForm.lung_dis !== false && <p>{`Pulmonar`}</p>}
    </section>



  </article>;
};

export default Confirmation;
