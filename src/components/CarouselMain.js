import Carousel from "react-bootstrap/Carousel";
import imagen1 from "../assets/imagen1-carousel.jpg";
import imagen2 from "../assets/imagen2-carousel.jpg";
import "../styles/carousel.css";

function CarouselFadeExample() {
  return (
    <Carousel fade controls={true}>
      <Carousel.Item className="z-index-carousel" interval={5000}>
        <img
          className="d-block w-100 img-size-carousel1"
          src={imagen1}
          alt="First slide"
        />
        <div className="position-carousel-absolute">
          <p className="texto1carousel">25, 26 y 27 DE SEPTIEMBRE</p>
          <p className="texto2carousel">
            ENVÍO GRATIS EN COMPRAS A PARTIR DE $20.000
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 img-size-carousel2"
          src={imagen2}
          alt="Second slide"
        />
        <div className="position-carousel-absolute">
          <p className="texto1carousel">ACEPTAMOS TODAS LAS TARJETAS</p>
          <p className="texto2carousel">
            3 CUOTAS SIN INTERÉS CON TARJETAS DE CRÉDITO
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
