import React, { useState, useEffect } from "react";
import axios from "axios";
import LeftArrow from "../../../../assets/icons/Izquierda-Desactivado.svg";
import RightArrow from "../../../../assets/icons/Derecha-Desactivado.svg";

const FooterForm = ({ page, setPage, dataForm }) => {
  const [log, setLog] = useState({});
  const [method, setMethod] = useState("post");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/dataform?user_id=${dataForm.user_id}`
      );
      const data = response.data;
      setLog(data[0]);
      console.log("Buscando usuario");
      console.log(data[0]);
      console.log(log);
      console.log(log.length);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSubmitClick = async () => {
    if (Object.values(dataForm).some((value) => value === "")) {
      alert("Todos los campos deben ser completados");
      return;
    }
    await fetchData();
    console.log("Probando cambio estado");
    console.log(log);
    try {
      if (log.length > 0) {
        setMethod("put");
      }

      const response = await axios.put(
        "http://localhost:4000/api/dataform",
        dataForm
      );
      console.log("Respuesta del servidor:", response.data);
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
        <button
          className="button-form"
          disabled={page == 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          <img src={LeftArrow} alt="" />
        </button>
        {page === 7 ? (
          <img
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
            <img src={RightArrow} alt="" />
          </button>
        )}
      </article>
    </section>
  );
};

export default FooterForm;
