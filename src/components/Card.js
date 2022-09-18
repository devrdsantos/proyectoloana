import { useRef } from "react";
import styled from "styled-components";

const Card = (props) => {
  const slideShow = useRef(null);
  const nextImg = () => {
    if (slideShow.current.children.length > 0) {
      const primerElemento = slideShow.current.children[0];
      slideShow.current.style.transition = `2000ms ease-out all`;
      const tamañoSlide = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;
      const transicion = () => {
        slideShow.current.style.transition = "none";
        slideShow.current.style.transform = `translateX(0)`;
        slideShow.current.appendChild(primerElemento);
        slideShow.current.removeEventListener("transitionend", transicion);
      };
      slideShow.current.addEventListener("transitionend", transicion);
    }
  };
  const previusImg = () => {
    if (slideShow.current.children.length > 0) {
      const index = slideShow.current.children.length - 1;
      const ultimoElemento = slideShow.current.children[index];
      slideShow.current.insertBefore(
        ultimoElemento,
        slideShow.current.firstChild
      );
      slideShow.current.style.transition = "none";
      const tamañoSlide = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;
      setTimeout(() => {
        slideShow.current.style.transition = `2000ms ease-out all`;
        slideShow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <ContenedorPrincipal>
      <ContenedorCard>
        <ContenedorSlideShow ref={slideShow}>
          {props.img.map((imagen, index) => (
            <Slide key={index}>
              <img src={imagen} alt={props.descripcion} />
            </Slide>
          ))}
        </ContenedorSlideShow>
        <Controles>
          <Boton onClick={previusImg}>
            <svg
              width="12"
              height="20"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z" fill="white" />
            </svg>
          </Boton>
          <Boton onClick={nextImg} derecho>
            <svg
              width="12"
              height="20"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.51683e-07 12L5 7L1.52591e-06 2L1 -6.11959e-07L8 7L1 14L6.51683e-07 12Z"
                fill="white"
              />
            </svg>
          </Boton>
        </Controles>
      </ContenedorCard>
      <TituloCard>{props.titulo}</TituloCard>
      <p>${props.precio}</p>
      <Contenedorboton className="button-hover">
        <BotonInformacion>VER MÁS</BotonInformacion>
      </Contenedorboton>
    </ContenedorPrincipal>
  );
};
const ContenedorPrincipal = styled.div`
  position: relative;
  overflow: hidden;
  width: 320px;
  height: 350px;
  min-width: 320px;
  p {
    text-align: center;
    margin: 0;
    padding-bottom: 10px;
  }
  &:hover {
    .button-hover {
      display: flex;
    }
  }
`;
const ContenedorCard = styled.div`
  position: relative;
  width: 320px;
  height: 223px;
`;
const ContenedorSlideShow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const Slide = styled.div`
  overflow: hidden;
  min-width: 100%;
  transition: 0.3s ease all;
  max-height: 223px;
  position: relative;
  & img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
`;
const Controles = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
const Boton = styled.button`
  position: absolute;
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 25px;
  height: 100%;
  & svg {
    color: rgba(255, 255, 255);
  }
  ${(props) => (props.derecho ? "right: 0" : "left:0")}
`;
const Contenedorboton = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
`;
const TituloCard = styled.h1`
  text-align: center;
  font-size: 16px;
  font-family: "Outfit";
  padding-top: 15px;
  margin: 0;
`;
const BotonInformacion = styled.button`
  margin: 0;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  background-color: #1b1b1b;
  color: rgba(255, 255, 255, 1);
  padding: 0;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    color: #1b1b1b;
  }
`;

export default Card;
