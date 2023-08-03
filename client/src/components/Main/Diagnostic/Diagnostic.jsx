import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CuidatermIcon from "../../../assets/icons/Cuidaterm-Icon.svg";
import NavBar from "../Home/NavBar/NavBar";
import Cookies from "js-cookie";
import axios from "axios";

const Diagnostic = () => {

  // def diagnostico(nombre, edad, peso, altura, vasos_agua, enfermedad=False, actividad_fisica=""):
  //   grupo_edad = ""
  //   imc = peso / (altura ** 2)
  //   estado_salud = ""
  //   hidratacion = ""
  //   advertencia_golpe_calor = ""
  //   advertencia_actividad = ""

  //   if edad < 18:
  //       grupo_edad = "joven"
  //   elif edad < 60:
  //       grupo_edad = "adulta"
  //   else:
  //       grupo_edad = "mayor"
    
  //   if imc < 18.5:
  //       estado_salud = "en bajo peso"
  //   elif imc < 24.9:
  //       estado_salud = "en un peso normal"
  //   elif imc < 30.0:
  //       estado_salud = "en sobrepeso"
  //   else:
  //       estado_salud = "en obesidad"
    
  //   if vasos_agua < 8:
  //       hidratacion = "Recuerda hidratarte más, estás bebiendo menos agua de lo recomendado."
  //   else:
  //       hidratacion = "Te estás hidratando adecuadamente."
    
  //   if enfermedad:
  //       advertencia_golpe_calor = "Debido a tu enfermedad, ten cuidado, ya que estás en mayor riesgo de sufrir un golpe de calor."
  //   elif not enfermedad:
  //       advertencia_golpe_calor = "Aunque no padeces ninguna enfermedad, existe el riesgo de que sufras un golpe de calor."

  //   if actividad_fisica.lower() == "mucho":
  //       advertencia_actividad = "Y dado que haces mucho ejercicio, asegúrate de hacerlo en las horas más frescas del día, como la mañana temprano o la noche, y asegúrate de beber agua adicional."
  //   elif actividad_fisica.lower() == "poco":
  //       advertencia_actividad = "Y aunque tu actividad física es baja, es esencial evitar el calor excesivo permaneciendo en la sombra o en interiores con aire acondicionado."

  //   mensaje = f"Hola {nombre}, eres una persona {grupo_edad} y te encuentras {estado_salud}. {hidratacion} {advertencia_golpe_calor} {advertencia_actividad}"
  //   return mensaje
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
        setUserData(user[0])
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
    <section className="diagnostic-section">
      <article className="diagnostic-header-article">
        <div>
          <h1>Diagnóstico</h1>
          <img src={CuidatermIcon} alt="" />
        </div>
      </article>

      <article className="diagnostic-response-article">
        <p>Querido/a {userData.username},</p>
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
      <div className="diagnostic-navbar-div">
        <NavBar />
      </div>
    </section>
  );
};

export default Diagnostic;
