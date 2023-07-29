import React, {useState} from "react";

const Confirmation = ({dataForm}) => {
  console.log(dataForm);
  return <article>
    <section>
      <p>Sexo</p>
      <p>{dataForm.sex}</p>
    </section>
    <section>
      <p>Edad</p>
      <p>{dataForm.age}Años</p>
    </section>
    <section>
    <p>Sexo</p>
      <p>{dataForm.sex}</p>
    </section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>



  </article>;
};

export default Confirmation;
