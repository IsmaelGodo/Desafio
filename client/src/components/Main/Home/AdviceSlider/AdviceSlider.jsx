import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlechaDerecha from '../../../../assets/icons/Flecha-Derecha.svg'
import FlechaIzquierda from '../../../../assets/icons/Flecha-Izquierda.svg'
import Advice1 from "./Advice1/Advice1";
import Advice2 from "./Advice2/Advice2";
import Advice3 from "./Advice3/Advice3";
import Advice5 from "./Advice5/Advice5";
import Advice6 from "./Advice6/Advice6";
import Advice4 from "./Advice4/Advice4";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={FlechaDerecha}
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={FlechaIzquierda}
      className={className}
      onClick={onClick}
    />
  );
}

const AdviceSlider = () => {
  var settings = {
    arrows: true,
    // dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className="slider-section">
    <Slider {...settings}>
      <Advice1 />
      <Advice2 />
      <Advice3 />
      <Advice4 />
      <Advice5 />
      <Advice6 />
    </Slider>
    </section>
  );
};

export default AdviceSlider;
