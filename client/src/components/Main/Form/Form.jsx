import React, {useState} from "react";
import Sexo from "../Form/Sexo/Sexo"
import Edad from "../Form/Edad/Edad";
import Altura from "../Form/Altura/Altura";
import Peso from "../Form/Peso/Peso"
import Agua from "../Form/Agua/Agua"
import Enfermedad from "../Form/Enfermedad/Enfermedad";
import Sol from "../Form/Sol/Sol";
import Actividad from "../Form/Actividad/Actividad";


const Form = () => {
  //Logica de cambio de formulario
  const[page, setPage] = useState(0);
  const FormTitles =["Sexo", "Edad", "Altura", "Peso", "Agua", "Historial Medico", "Horas de Sol", "Actividad Física"]
  const PageDisplay = () =>{
    if (page === 0){
      return <Sexo
      handleGeneroChange={handleGeneroChange}
      genero={genero}
      />;
    }else if (page === 1) {
      return <Edad/>;
    }else if (page === 2) {
      return <Altura
      handleAlturaChange={handleAlturaChange}
      altura={altura}
      />;
    }else if (page === 3) {
      return <Peso/>;
    }else if (page === 4) {
      return <Agua/>;
    }else if (page === 5) {
      return <Enfermedad/>;
    }else if (page === 6) {
      return <Sol/>;
    }else if (page === 7) {
      return <Actividad/>;
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
        case 7:
          return 'state-7';
        
      }
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
