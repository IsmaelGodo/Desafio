import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NavBar from "../Home/NavBar/NavBar";
import { UserLoggedContext } from "../../../context/userLoggedContext";

const Perfil = () => {

  const { userLogged } = useContext(UserLoggedContext);

  const [diagData, setDiagData] = useState([]);

  console.log(userLogged.user_id)

  // useEffect(() => {
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:4000/api/dataform?user_id=${parseInt(userLogged.user_id)}`
  //     );
  //     const data = response.data;
  //     setDiagData(data);
  //     console.log(diagData);
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };fetchData();
  // }, []);
  //Objeto de prueba
  const dataMentira = {
    name: "Federico",
    sex: "Masculino",
    age: "33",
    height: "180",
    weight: "600",
    water_gl: "4",
    activity: "Moderada",
    cardio_dis: false,
    digest_dis: false,
    neuro_dis: true,
    lung_dis: true,
  };

  return (
    <>
      <section className="header_perfil-section">
        <h1>{dataMentira.name}</h1>
      </section>

      <section className="body-form-section">
        <div>
          <article className="grid-container">
            <section>
              <p>
                <h3>Sexo</h3>
                {dataMentira.sex}
              </p>
            </section>
            <section>
              <p>
                <h3>Edad</h3>
                {dataMentira.age}Años
              </p>
            </section>
            <section>
              <p>
                <h3>Altura</h3>
              </p>
              <p>{dataMentira.height}cm</p>
            </section>
            <section>
              <p>
                <h3>Peso</h3>
              </p>
              <p>{dataMentira.weight}Kg</p>
            </section>
            <section>
              <p>
                <h3>Hidratacion</h3>
              </p>
              <p>{dataMentira.water_gl}Vasos</p>
            </section>
            <section>
              <p>
                <h3>Actividad</h3>
              </p>
              <p>{dataMentira.activity}</p>
            </section>
            <section>
              <p>
                <h3>Enfermedad</h3>
              </p>
              {dataMentira.cardio_dis !== false && <p>{`Cardiopatía`}</p>}
              {dataMentira.digest_dis !== false && <p>{`Digestiva`}</p>}
              {dataMentira.neuro_dis !== false && <p>{`Neuronal`}</p>}
              {dataMentira.lung_dis !== false && <p>{`Pulmonar`}</p>}
            </section>
          </article>
          ;
        </div>
        ;
      </section>
      <NavBar />
    </>
  );
};

export default Perfil;
export default Perfil;
