import React from "react";
import styled from "styled-components";
import Card from "./Card";

function Cards(props) {
  return (
    <CardSection>
      {props.data.map((e) => (
        <Card
          id={e.id}
          key={e.id}
          talles={e.talles}
          img={e.imagen}
          titulo={e.title}
          precio={e.price}
          descripcion={e.alt}
          descuentos={e.descuentos}
          nuevo={e.nuevo}
          cartel={props.showcartel}
        />
      ))}
      </CardSection>
    );
  }

const CardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 20px;
  padding-top: 20px;
  @media (max-width: 768px) {
    gap: 15px;
  }
`;
export default Cards;
