import React, {useState, useEffect} from "react";
import axios from "axios";


const FooterForm = ({page, setPage, dataForm}) => {
const [log, setLog] = useState('');
const [method, setMethod] = useState('post');

const fetchData = async () => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/dataform?user_id=${dataForm.user_id}`
    );
    const data = response.data;
    setLog(data);
    console.log(log);
  } catch (error) {
    console.log("Error:", error);
  }
};

const handleSubmitClick = async () => {
  if (Object.values(dataForm).some(value => value === "")) {
    alert("Todos los campos deben ser completados");
    return; 
  }
  await fetchData(); 

  try {
    if (log.length > 0) {
      setMethod("put");
    }

    const response = await axios[method](
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
          disabled={page == 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        {page === 7 ? (
          <img src="/Botón-Confirmación.png" alt="Imagen" onClick={handleSubmitClick} />
        ) : (
          <button
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Next
          </button>
        )}
        </article>

      </section>
  );
};

export default FooterForm;
