import React, {useState} from "react";
import Sexo from "../Form/Sexo/Sexo"
import Edad from "../Form/Edad/Edad";
import Altura from "../Form/Altura/Altura";
import Peso from "../Form/Peso/Peso"
import Agua from "../Form/Agua/Agua"
import Enfermedad from "../Form/Enfermedad/Enfermedad";
import Actividad from "../Form/Actividad/Actividad";


const Form = () => {

  //Logica de cambio de formulario
  const[page, setPage] = useState(0);
  const FormTitles =["Sexo", "Edad", "Altura", "Peso", "Agua", "Historial Medico", "Actividad Física"]
  const PageDisplay = () =>{
    if (page === 0){
      return <Sexo
      handleGeneroChange={handleGeneroChange}
      genero={genero}
      />;
    }else if (page === 1) {
      return <Edad
      edad={edad}
      handleEdadChange={handleEdadChange}
      />;
    }else if (page === 2) {
      return <Altura
      handleAlturaChange={handleAlturaChange}
      altura={altura}
      />;
    }else if (page === 3) {
      return <Peso
      handlePesoChange={handlePesoChange}
      peso={peso}
      />;
    }else if (page === 4) {
      return <Agua
      cantidadAgua={cantidadAgua}
      aumentarAgua={aumentarAgua}
      disminuirAgua={disminuirAgua}

      />;
    }else if (page === 5) {
      return <Enfermedad
      handleCardioClick={handleCardioClick}
      handleDigestClick={handleDigestClick}
      handleLungClick={handleLungClick}
      handleNeuroClick={handleNeuroClick}

      />;
    }else if (page === 6) {
      return <Actividad
      actividad={actividad}
      handleActividadChange={handleActividadChange}
      />;
    }
    };
    //Cambio  de style para el progressbar
    const getClassname = () => {
      switch (page) {
        case 0:
          return 'state-0';
        case 1:
          return 'state-1';
        case 2:
          return 'state-2';
        case 3:
          return 'state-3';
        case 4:
          return 'state-4';
        case 5:
          return 'state-5';
        case 6:
          return 'state-6';
        
        
      }
    };
  //States Edad:
  const [edad, setEdad] = useState('0');
  const handleEdadChange = (event) => {
    setEdad(event.target.value);
  };
  //States Altura:
  const [altura, setAltura] = useState(50);
  const handleAlturaChange = (event) => {
    setAltura(parseInt(event.target.value));
  };
  //States Sexo:
  const [genero, setGenero] = useState('');
  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };
  //States Peso:
  const [peso, setPeso] = useState(0);
  const handlePesoChange = (event) => {
    setPeso(parseInt(event.target.value));
  };
  //States Agua:
  const [cantidadAgua, setCantidadAgua] = useState(0);
  const aumentarAgua = () => {
    setCantidadAgua((prevCantidad) => prevCantidad + 1);
  };
  const disminuirAgua = () => {
    setCantidadAgua((prevCantidad) => (prevCantidad > 0 ? prevCantidad - 1 : 0));
  };
  //States Enfermeda:
  const [cardio, setCardio]= useState(false);
  const [digest, setDigest]= useState(false);
  const [lung, setLung]= useState(false);
  const [neuro, setNeuro]= useState(false);

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
const [actividad, setActividad] = useState("opcion1");

const handleActividadChange = (event) => {
  setActividad(event.target.value);
};
//Objeto Data
const data = {
  user_id: 5,
  sex: genero,
  age: edad,
  height:altura,
  weight: peso,
  water_gl:cantidadAgua,
  activity: actividad,
  cardio_dis: cardio,
  digest_dis: digest,
  neuro_dis: neuro,
  lung_dis: lung
}
console.log(data);

    
  return <div className="form">
    
    <div className="form-container">
      <div className="header"></div>
        <h1>{FormTitles[page]}</h1>
      <div className="body">{PageDisplay()}</div>
      <div className="footer">
      <div className="progressbar">
      <div className={getClassname()}></div>;
    </div>
      <button
        disabled={page == 0}
       onClick={() => {
        setPage((currPage) => currPage - 1);
        }}
      >Prev</button>
      <button
      disabled={page == FormTitles.length -1}
      onClick={() => {
        setPage((currPage) => currPage + 1);
        }}>Next</button>
      </div>
    </div>

    

  </div>;
};

export default Form;
