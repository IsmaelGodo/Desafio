import { useEffect, useState } from "react";
import Sexo from "../Form/Sexo/Sexo";
import Edad from "../Form/Edad/Edad";
import Altura from "../Form/Altura/Altura";
import Peso from "../Form/Peso/Peso";
import Agua from "../Form/Agua/Agua";
import Enfermedad from "../Form/Enfermedad/Enfermedad";
import Actividad from "../Form/Actividad/Actividad";
import Confirmation from "../Form/Confirmation/Confirmation";
import FooterForm from "./FooterForm/FooterForm";
import Cookies from "js-cookie";

const Form = () => {

  const [userLogged, setUserLogged] = useState(null);

  // Getting user_id from cookie and 
  useEffect(() => {
    const user_id = Cookies.get("user-logged");
    setUserLogged(user_id);
    console.log(userLogged);
  }, []);

  // console.log(userLogged);

  //Logica de cambio de formulario
  const [page, setPage] = useState(0);
  const FormTitles = [
    "Especifica tu sexo",
    "Especifica tu edad",
    "Especifica tu altura",
    "Especifica tu peso",
    "¿Te hidratas?",
    "¿Qué tipo de enfermedad tienes?",
    "¿Realizas actividad física?",
    "Bienvenido",
  ];
  const FormSubtitles = [
    "Tus hormonas pueden afectar al cálculo",
    "La edad es importante a la hora de medir la vulnerabilidad",
    "El peso influye en tu capacidad de regular la temperatura corporal",
    "La altura influye en el calor corporal",
    "Añade la cantidad aproximada de vasos de agua que bebes al día",
    "En el caso de no tener ninguna de estas pasa a la siguiente",
    "La actividad física influye en la temperatura corporal",
    "Revisa que tus datos son los correctos",
  ];
  const PageDisplay = () => {
    if (page === 0) {
      return <Sexo handleGeneroChange={handleGeneroChange} genero={genero} />;
    } else if (page === 1) {
      return (
        <Edad
          edad={edad}
          handleEdadChange={handleEdadChange}
          handleClearAge={handleClearAge}
        />
      );
    } else if (page === 2) {
      return (
        <Altura
          displayedNumberHeight={displayedNumberHeight}
          handleButtonClickHeight={handleButtonClickHeight}
          handleClearHeight={handleClearHeight}
        />
      );
    } else if (page === 3) {
      return (
        <Peso
          handlePesoChange={handlePesoChange}
          handleClearWeight={handleClearWeight}
          peso={peso}
        />
      );
    } else if (page === 4) {
      return (
        <Agua
          cantidadAgua={cantidadAgua}
          aumentarAgua={aumentarAgua}
          disminuirAgua={disminuirAgua}
        />
      );
    } else if (page === 5) {
      return (
        <Enfermedad
          handleCardioClick={handleCardioClick}
          handleDigestClick={handleDigestClick}
          handleLungClick={handleLungClick}
          handleNeuroClick={handleNeuroClick}
        />
      );
    } else if (page === 6) {
      return (
        <Actividad
          actividad={actividad}
          handleActividadChange={handleActividadChange}
        />
      );
    } else if (page === 7) {
      return <Confirmation dataForm={dataForm} />;
    }
  };

  //States Edad:
  const [edad, setEdad] = useState("");
  const handleEdadChange = (number) => {
    setEdad((prevNumber) => prevNumber + number);
  };
  const handleClearAge = () => {
    setEdad("");
  };
  //States Altura:
  const [displayedNumberHeight, setDisplayedNumberHeight] = useState("");
  const handleButtonClickHeight = (number) => {
    setDisplayedNumberHeight((prevNumber) => prevNumber + number);
  };
  const handleClearHeight = () => {
    setDisplayedNumberHeight("");
  };
  //States Sexo:
  const [genero, setGenero] = useState("");
  const handleGeneroChange = (generoSeleccionado) => {
    setGenero(generoSeleccionado);
  };
  //States Peso:
  const [peso, setPeso] = useState("");
  const handlePesoChange = (number) => {
    setPeso((prevNumber) => prevNumber + number);
  };
  const handleClearWeight = () => {
    setPeso("");
  };
  //States Agua:
  const [cantidadAgua, setCantidadAgua] = useState(0);
  const aumentarAgua = () => {
    setCantidadAgua((prevCantidad) => prevCantidad + 1);
  };
  const disminuirAgua = () => {
    setCantidadAgua((prevCantidad) =>
      prevCantidad > 0 ? prevCantidad - 1 : 0
    );
  };
  //States Enfermedad:
  const [cardio, setCardio] = useState(false);
  const [digest, setDigest] = useState(false);
  const [lung, setLung] = useState(false);
  const [neuro, setNeuro] = useState(false);

  const handleCardioClick = () => {
    setCardio(!cardio);
  };
  const handleDigestClick = () => {
    setDigest(!digest);
  };
  const handleLungClick = () => {
    setLung(!lung);
  };
  const handleNeuroClick = () => {
    setNeuro(!neuro);
  };

  //States Actividad:
  const [actividad, setActividad] = useState("");

  const handleActividadChange = (event) => {
    setActividad(event.target.value);
  };
  //Objeto Data
  const dataForm = {
    user_id: userLogged,
    sex: genero,
    age: edad,
    height: displayedNumberHeight,
    weight: peso,
    water_gl: cantidadAgua,
    activity: actividad,
    cardio_dis: cardio,
    digest_dis: digest,
    neuro_dis: neuro,
    lung_dis: lung,
  };
  console.log(dataForm);

  return (
    <>
      <section className="header_form-section">
        <h1>{FormTitles[page]}</h1>
        <h2>{FormSubtitles[page]}</h2>
      </section>

      <section className="body-form-section">{PageDisplay()}</section>

      <FooterForm page={page} setPage={setPage} dataForm={dataForm} />
    </>
  );
};

export default Form;
