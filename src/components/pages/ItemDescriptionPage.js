import styled from "styled-components";
import modelo1 from "../../assets/img_cards/modelo1.png";
import modelo2 from "../../assets/img_cards/modelo2.png";
import modelo3 from "../../assets/img_cards/modelo3.png";
import blackstars from "../../assets/img__vectores/blackstars.png"
import Accordion from "react-bootstrap/Accordion";
import Cards from "../Cards"
import DataHome from "../data/DataHome";
function ItemDescriptionPage() {
  return (
    <ContainerPage>
      <h4>HOME/PANTALONES/<strong>JEAN OCHENTOSO</strong></h4>
    <ContainerItemDescription>
      <ImagenesChicas>
        <div>
          <img src={modelo1} alt="" />
        </div>
        <div>
          <img src={modelo2} alt="" />
        </div>
        <div>
          <img src={modelo3} alt="" />
        </div>
      </ImagenesChicas>
      <ContainerImgDescription>
        <img src={modelo1} alt="" />
      </ContainerImgDescription>
      <div>
        <Estrellas>
          <img src={blackstars} alt="" />
          <img src={blackstars} alt="" />
          <img src={blackstars} alt="" />
          <img src={blackstars} alt="" />
          <img src={blackstars} alt="" />
          <p>7 OPINIONES</p>
        </Estrellas>
        <TituloyPrecio>
          <h1>JEAN OCHENTOSO</h1>
          <p>$13.200</p>
        </TituloyPrecio>
        <Colores>
          <h5>COLORES</h5>
          <button className="bg-primary"></button>
          <button className="bg-info"></button>
          <button className="bg-dark"></button>
        </Colores>
        <Talles>
          <TallesText>
            <h5>TALLES</h5>
            <p>Ver tabla de talles y medidas</p>
          </TallesText>
          <div>
            <button>36</button>
            <button>38</button>
            <button>40</button>
            <button>42</button>
            <button>44</button>
          </div>
        </Talles>
        <Cantidad>
          <p>CANTIDAD</p>
          <BotonCantidad>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="24"
                fill="currentColor"
                className="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <p>1</p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="24"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </BotonCantidad>
        </Cantidad>
        <AñadirAlCarrito>
          <button>AÑADIR AL CARRITO</button>
        </AñadirAlCarrito>
        <div className="button-description-y-envios">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="1">
              <Accordion.Header>DESCRIPCIÓN</Accordion.Header>
              <Accordion.Body>HOLA</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>ENVÍOS</Accordion.Header>
              <Accordion.Body>CHAO</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </ContainerItemDescription>
    <TambienTePodria>
      <h1>TAMBIEN TE PODRÍA INTERESAR</h1>
      <DivPosition />
    </TambienTePodria>
      <Cards data={DataHome} />
    </ContainerPage>
  );
}

const ContainerPage = styled.div`
margin-left: 1.6rem;
  h4{
    font-size: 16px;
    font-weight: 300;
    font-family: 'Outfit';
    padding-left: 2rem;
  }
`;
const ContainerItemDescription = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const ImagenesChicas = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;

  div {
    padding: 0 2rem 2rem 2rem;
  }

  img {
    width: 80px;
    height: 80px;
  }
`;

const ContainerImgDescription = styled.div`
  img {
    width: 712px;
    height: 752px;
    margin-bottom: 3rem;
    margin-right: 4rem;
  }
`;

const Estrellas = styled.div`
  display: flex;
  margin: 0 0 1rem 0;

  img {
    width: 24px;
    height: 24px;
  }

  p {
    padding-left: 1rem;
    font-family: "Outfit";
    margin: 0;
  }
`;

const TituloyPrecio = styled.div`
  h1 {
    font-size: 36px;
    font-weight: 500;
    font-family: "Outfit";
    margin: 0;
    color: #1b1b1b;
  }

  p {
    margin: 0 0 1rem 0;
    font-size: 22px;
    font-weight: 300;
    font-family: "Outfit";
    color: #1b1b1b;
  }
`;

const Colores = styled.div`
  h5 {
    font-size: 16px;
    font-weight: 400;
    font-family: "Outfit";
    margin: 0 0 0.6rem 0;
  }

  button {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: none;
    margin-right: 0.5rem;
  }
`;

const Talles = styled.div`
  button {
    width: 30px;
    height: 30px;
    margin-right: 0.5rem;
    border: solid 1px black;
    background-color: transparent;
    margin-bottom: 1.5rem;
    &:hover {
      background-color: #c1c1c1;
    }
  }
`;

const TallesText = styled.div`
  display: flex;
  margin-bottom:1rem;

  h5 {
    margin: 0;
    padding-right: 2.5rem;
    font-family: "Outfit";
    font-size: 16px;
    font-weight: 400;
    padding-top: 4px;
  }
  p {
    margin: 0;
    text-decoration: underline;
    font-family: "Outfit";
    font-weight: 300;
  }
`;
const Cantidad = styled.div`
  margin-bottom: 1.5rem;
`;

const BotonCantidad = styled.div`
  display: flex;
  width: 140px;
  height: 32px;
  border: solid 1px black;
  button {
    border: none;
    background-color: #c1c1c135;
    width: 32px;
    height: 32px;
  }

  p {
    padding: 3px 2rem 0 2rem;
    height: 32px;
    margin: 0;
  }
`;

const AñadirAlCarrito = styled.div`
  width: 216px;
  height: 40px;
  margin-bottom: 2rem;
  button {
    width: 216px;
    height: 40px;
    background-color: #1b1b1b;
    color: white;
    font-size: 12px;
    font-family: "Outfit";
    border: none;
    border-radius: 5px;
  }
`;
const TambienTePodria = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;
  h1 {
    font-size: 28px;
    font-family: "Outfit";
  }
`;
const DivPosition = styled.div`
  position: absolute;
  background: rgba(255, 122, 0, 0.4);
  width: 458px;
  height: 16px;
  bottom: 10px;
`;

export default ItemDescriptionPage;
