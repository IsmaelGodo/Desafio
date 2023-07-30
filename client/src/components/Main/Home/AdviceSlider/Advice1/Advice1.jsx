import ThermometerImg from '../../../../../assets/images/Imagen-Termometro.svg'

const Advice1 = () => {
  return (
    <article>
      <div className="advice-text">
        <h1>Recuerda no salir en las horas más calurosas</h1>
      </div>
      <div className="advice-image">
        <img src={ThermometerImg} alt="" />
      </div>
    </article>
  );
};

export default Advice1;
