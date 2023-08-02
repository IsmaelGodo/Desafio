import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NavBar from "../Home/NavBar/NavBar";
import Cookies from "js-cookie";
//import { UserLoggedContext } from "../../../context/userLoggedContext";

const Perfil = () => {

  // const { userLogged } = useContext(UserLoggedContext)

  const [diagData, setDiagData] = useState([]);
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const user_id = Cookies.get("user-logged");

    const getUserData = async () => {
      try {
        const response = await axios.get(
          `/api/users?user_id=${parseInt(user_id)}`
        );
        const user = await response.data;
        const newProfile = user.map((prof, index) => ({
          key: index,
          user_id: prof.user_id,
          username: prof.username.charAt(0).toUpperCase() + prof.username.slice(1).toLowerCase(),
          email: prof.email,
          
        }));
        setProfile(newProfile);
        //console.log(user[0]);
        try {
          const response = await axios.get(
            `http://localhost:4000/api/dataform?user_id=${parseInt(user[0].user_id)}`
          );
          const data = await response.data;
          const newDignostic = data.map((diag, index) => ({
            key: index,
            user_id: diag.user_id,
            age: diag.age,
            sex: diag.sex,
            height: diag.height,
            weight: diag.weight,
            water_gl: diag.water_gl,
            activity:diag.activity,
            cardio_dis: diag.cardio_dis,
            digest_dis: diag.digest_dis,
            neuro_dis: diag.neuro_dis,
            lung_dis: diag.lung_dis,
            
          }));
          setDiagData(newDignostic);
        } catch (error) {
          console.log("Error:", error);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);
//  console.log(diagData[0]);
 // console.log(profile[0])


  // //Objeto de prueba
  // const dataMentira = {
  //   name: "Federico",
  //   sex: "Masculino",
  //   age: "33",
  //   height: "180",
  //   weight: "600",
  //   water_gl: "4",
  //   activity: "Moderada",
  //   cardio_dis: false,
  //   digest_dis: false,
  //   neuro_dis: true,
  //   lung_dis: true,
  // };

  return (
    <>
      <section className="header_perfil-section">
        <h1>Bienvenido/a: {profile.length > 0 ? profile[0].username : 'Loading...'}</h1>
        
      </section>

      <section className="body-form-section">
        <div>
          <article className="grid-container">
            <section>
              <p>
                <h3>Sexo</h3>
                {diagData.length > 0 ? diagData[0].sex : 'Loading...'}
              </p>
            </section>
            <section>
              <p>
                <h3>Edad</h3>
                {diagData.length > 0 ? diagData[0].age : 'Loading...'}Años
              </p>
            </section>
            <section>
              <p>
                <h3>Altura</h3>
              </p>
              <p>{diagData.length > 0 ? diagData[0].height : 'Loading...'}cm</p>
            </section>
            <section>
              <p>
                <h3>Peso</h3>
              </p>
              <p>{diagData.length > 0 ? diagData[0].weight : 'Loading...'}Kg</p>
            </section>
            <section>
              <p>
                <h3>Hidratacion</h3>
              </p>
              <p>{diagData.length > 0 ? diagData[0].water_gl : 'Loading...'}Vasos</p>
            </section>
            <section>
              <p>
                <h3>Actividad</h3>
              </p>
              <p>{diagData.length > 0 ? diagData[0].activity : 'Loading...'}</p>
            </section>
            <section>
              <p>
                <h3>Enfermedad</h3>
              </p>
              {diagData.length > 0 && diagData[0].cardio_dis !== false && <p>{`Cardiopatía`}</p>}
              {diagData.length > 0 && diagData[0].digest_dis !== false && <p>{`Digestiva`}</p>}
              {diagData.length > 0 && diagData[0].neuro_dis !== false && <p>{`Neuronal`}</p>}
              {diagData.length > 0 && diagData[0].lung_dis !== false && <p>{`Pulmonar`}</p>}
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
