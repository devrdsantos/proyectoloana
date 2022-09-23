import React, { useContext } from "react";
import CarouselMain from "../CarouselMain.js";
import Cards from "../Cards.js";
import Whyloana from "../Whyloana.js";
import Mainofertasynovedades from "../Mainofertasynovedades.js";
import styled from "styled-components";
import { DataContext } from "../data/DataProvider.js";
function HomePage() {
  const value = useContext(DataContext)
  const [productos] = value.productos;
  const filtrado = productos.filter(e=>e.id<5);
  return (
    <main>
      <CarouselMain />
      <Whyloana />
      <Mainofertasynovedades />
      <LoMasVendido>
        <h1>LO MÁS VENDIDO</h1>
        <DivPosition />
      </LoMasVendido>
      <Cards data={filtrado} />
    </main>
  );
}
export default HomePage;

const LoMasVendido = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  h1 {
    font-size: 28px;
    font-family: "Outfit";
  }
  @media (max-width: 800px) {
    h1 {
      margin-top: 1rem;
    }
  }
`;

const DivPosition = styled.div`
  position: absolute;
  background-color: #ff7a0040;
  width: 300px;
  height: 16px;
  bottom: 10px;
`;
