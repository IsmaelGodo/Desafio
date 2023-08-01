import React, { useState, useEffect } from "react";
import axios from "axios";
import LeftArrow from "../../../../assets/icons/Flecha-Izquierda-Activado.svg";
import LeftArrow2 from "../../../../assets/icons/Flecha-Izquierda-Presionado.svg";
import RightArrow from "../../../../assets/icons/Flecha-Derecha-Activado.svg";
import RightArrow2 from "../../../../assets/icons/Flecha-Derecha-Presionado.svg";
import DisableArrow from "../../../../assets/icons/Flecha-Izquierda-Desactivado.svg";

const FooterForm = ({ page, setPage, dataForm }) => {
  
  const [log, setLog] = useState([]);
  const [Hovered, setHovered] = useState(false);//Boton1
  const [Hovered2, setHovered2] = useState(false);//Boton2

  //Boton 1
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  //Boton 2
  const handleMouseEnter2 = () => {
    setHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setHovered2(false);
  };

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/dataform?user_id=${dataForm.user_id}`
      );
      const data = response.data;
      setLog(data);
      console.log("Buscando usuario");
      console.log(log);
      console.log("data en Fetchdata");
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };fetchData()
}, []);

useEffect(() => {
  console.log(log);
}, [log]);


  const handleSubmitClick = async () => {
    if (Object.values(dataForm).some((value) => value === "")) {
      alert("Todos los campos deben ser completados");
      return;
    }
  
    try {
      
  
      if (log.length > 0) {
        const response = await axios.put(
          "http://localhost:4000/api/dataform",
          dataForm
        );
        console.log("Respuesta del servidor:", response.data);
      } else {
        const response = await axios.post(
          "http://localhost:4000/api/dataform",
          dataForm
        );
        console.log("Respuesta del servidor:", response.data);
      }
    } catch (error) {
      console.log("Error al enviar los datos:", error);
    }
  };
  

  return (
    <section className="footer-form-section">
      <article className="progressbar">
        <div className={page === 0 ? "nav_act" : "nav_des"} />
        <div className={page === 1 ? "nav_act" : "nav_des"} />
        <div className={page === 2 ? "nav_act" : "nav_des"} />
        <div className={page === 3 ? "nav_act" : "nav_des"} />
        <div className={page === 4 ? "nav_act" : "nav_des"} />
        <div className={page === 5 ? "nav_act" : "nav_des"} />
        <div className={page === 6 ? "nav_act" : "nav_des"} />
        <div className={page === 7 ? "nav_act" : "nav_des"} />
      </article>

      <article className="navbar-form-article">
      {page === 0 ? (
      <button
          className="button-form"
          disabled='true'
        >
          <img src={DisableArrow}
        
        />
        </button>

      ) : (<button
        className="button-form"
        disabled={page == 0}
        
      >
        <img src={Hovered ? LeftArrow : LeftArrow2}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        setPage((currPage) => currPage - 1);
      }}/>
      </button>)}
        
        {page === 7 ? (
          <img
          className="button-form"
            src="/Botón-Confirmación.png"
            alt="Imagen"
            onClick={handleSubmitClick}
          />
        ) : (
          <button
            className="button-form"
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            <img src={Hovered2 ? RightArrow : RightArrow2}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}/>
          </button>
        )}
      </article>
    </section>
  );
};

export default FooterForm;
