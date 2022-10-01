import styled from "styled-components";
import argenMap from "../assets/argenmap.png";
import produccionResponsable from "../assets/produccionresponsable.png";
import orgAmbientalistas from "../assets/orgambientalistas.png";

function WhyLoanaNoDesc() {
  return (
    <ContainerWhyLoanaNoDesc>
      <h1> ¿POR QUÉ LOANA JEANS?</h1>
      <div className="d-flex">
        <ArgenMap>
          <img src={argenMap} alt="" />
          <h2>MADE IN ARGENTINA</h2>
        </ArgenMap>
        <ProduccionResponsable>
          <img src={produccionResponsable} alt="" />
          <h2>PRODUCCIÓN RESPONSABLE</h2>
        </ProduccionResponsable>
        <OrgAmbientalistas>
          <img src={orgAmbientalistas} alt="" />
          <h2>COLABORAMOS CON ORGANIZACIONES AMBIENTALISTAS</h2>
        </OrgAmbientalistas>
      </div>
    </ContainerWhyLoanaNoDesc>
  );
}

const ContainerWhyLoanaNoDesc = styled.div`
  width: 100%;
  height: 360px;
  background-color: #ff7a0040;

  h1 {
    font-family: "Outfit";
    font-weight: 500;
    font-size: 28px;
    text-align: center;
  }
`;

const ArgenMap = styled.div`
  img {
    width: 28px;
    height: 57px;
  }
`;

const ProduccionResponsable = styled.div`
  img {
    width: 36px;
    height: 69px;
  }
`;

const OrgAmbientalistas = styled.div`
  img {
    width: 58px;
    height: 64px;
  }
`;

export default WhyLoanaNoDesc;
