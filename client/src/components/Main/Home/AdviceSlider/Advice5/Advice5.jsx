import HatImg from '../../../../../assets/images/Imagen-Sombrero.svg'

const Advice5 = () => {
  return (
    <article>
      <div className="advice-text">
        <h1>Cúbrete la cabeza para protegerte de la radiación solar</h1>
      </div>
      <div className="advice-image">
        <img src={HatImg} alt="" />
      </div>
    </article>
  );
};

export default Advice5;
