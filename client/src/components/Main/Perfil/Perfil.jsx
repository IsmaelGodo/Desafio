import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NavBar from "../Home/NavBar/NavBar";
import Cookies from "js-cookie";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Perfil = () => {
  const navigate = useNavigate();
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
          username:
            prof.username.charAt(0).toUpperCase() +
            prof.username.slice(1).toLowerCase(),
          email: prof.email,
        }));
        setProfile(newProfile);
        //console.log(user[0]);
        try {
          const response = await axios.get(
            `http://localhost:4000/api/dataform?user_id=${parseInt(
              user[0].user_id
            )}`
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
            activity: diag.activity,
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

  const handleClick = async () => {
    try {
      const response = await fetch("/auth/logout");
      const data = await response.json();
      console.log(data);
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="header-perfil-section header_form-section-confirmation">
        <div className="header-perfil-div">
          <Link className="header-perfil-link" to={"/form"}>
            Repetir formulario
          </Link>
          <a className="header-perfil-link" onClick={handleClick}>
            Salir
          </a>
        </div>
        <h1>
          Bienvenido/a:{" "}
          {profile.length > 0 ? profile[0].username : "Loading..."}
        </h1>
      </section>

      <section className="body-form-section">
        <div>
          <article className="grid-container">
            <div>
              <h3>Sexo</h3>
              <p>{diagData.length > 0 ? diagData[0].sex : "Loading..."}</p>
            </div>
            <div>
              <h3>Edad</h3>
              <p>{diagData.length > 0 ? diagData[0].age : "Loading..."} años</p>
            </div>
            <div>
              <h3>Altura</h3>

              <p>
                {diagData.length > 0 ? diagData[0].height : "Loading..."} cm
              </p>
            </div>
            <div>
              <h3>Peso</h3>

              <p>
                {diagData.length > 0 ? diagData[0].weight : "Loading..."} kg
              </p>
            </div>
            <div>
              <h3>Hidratacion</h3>

              <p>
                {diagData.length > 0 ? diagData[0].water_gl : "Loading..."}{" "}
                vasos
              </p>
            </div>
            <div>
              <h3>Actividad</h3>

              <p>{diagData.length > 0 ? diagData[0].activity : "Loading..."}</p>
            </div>
            <div>
              <h3>Enfermedad</h3>

              {diagData.length > 0 && diagData[0].cardio_dis !== false && (
                <p>{`Cardiopatía`}</p>
              )}
              {diagData.length > 0 && diagData[0].digest_dis !== false && (
                <p>{`Digestiva`}</p>
              )}
              {diagData.length > 0 && diagData[0].neuro_dis !== false && (
                <p>{`Neuronal`}</p>
              )}
              {diagData.length > 0 && diagData[0].lung_dis !== false && (
                <p>{`Pulmonar`}</p>
              )}
            </div>
          </article>
        </div>
      </section>
      <NavBar />
    </>
  );
};

export default Perfil;
