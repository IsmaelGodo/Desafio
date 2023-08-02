import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CuidatermIcon from "../../../assets/icons/Cuidaterm-Icon.svg";
import NavBar from "../Home/NavBar/NavBar";
import Cookies from "js-cookie";
import axios from "axios";

const Diagnostic = () => {

  // const [userLogged, setUserLogged] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user_id = Cookies.get("user-logged");

    const getUserData = async () => {
      try {
        const response = await axios.get(
          `/api/users?user_id=${parseInt(user_id)}`
        );
        const user = await response.data;
        console.log(user[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  const symthoms = [
    "Fiebre de más de 40ºC.",
    "Calambres musculares.",
    "Mareos, vómitos y/o náuseas.",
    "Agitación y/o desorientación.",
    "Desmayos.",
  ];

  return (
    
    <>
        <section className="diagnostic-section">
      <article className="diagnostic-header-article">
        <div>
          <h1>Diagnóstico</h1>
          <img src={CuidatermIcon} alt="" />
        </div>
      </article>

      <article className="diagnostic-response-article">
        <p>Querido Vicente,</p>
        <p>
          En base a tus datos, hay una posibilidad moderada de que sufras un
          golpe de calor, lo más recomendable es que te protejas logrando un
          buen equilibrio entre hidratación y exposición solar.
        </p>
      </article>

      <article className="diagnostic-synthoms-article">
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
      </article>
    </section>
    <NavBar />
    </>
  );
};

export default Diagnostic;
