

const FooterForm = ({page, setPage}) => {



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
          <img src="/Botón-Presionado-Derecha.png" alt="Imagen" />
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
