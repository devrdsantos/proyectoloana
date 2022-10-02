import styled from "styled-components";
import UnderlineImage from "../assets/underlineImage.png";

function PageSectionImage(props) {
  return (
    <ContainerPageSectionImage>
      <img src={props.ImgPantalones} alt="img pantalones" />
      <TituloPageSectionImage>
        <h1>{props.h1PageSection}</h1>
      </TituloPageSectionImage>
      <UnderlineBorder>
        <img src={UnderlineImage} alt="underline border" />
      </UnderlineBorder>
    </ContainerPageSectionImage>
  );
}

const ContainerPageSectionImage = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
  }
  margin-bottom: 1.5rem;
  @media (max-width: 900px) {
    height: 350px;
  }
  @media (max-width: 700px) {
    height: 300px;
  }
  @media (max-width: 500px) {
    height: 250px;
  }
  @media (max-width: 300px) {
    height: 200px;
  }
`;
const TituloPageSectionImage = styled.div`
  position: absolute;
  top: 45%;
  left: 41%;
  transform: translate (-50% -50%);
  color: white;
  h1 {
    font-size: 36px;
    font-family: "Outfit";
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 28px;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 24px;
    }
    left: 38%;
  }
  @media (max-width: 300px) {
    h1 {
      font-size: 20px;
    }
    left: 38%;
  }
`;

const UnderlineBorder = styled.div`
  position: absolute;
  top: 59%;
  left: 37%;
  transform: translate (-50% -50%);
  @media (max-width: 900px) {
    top: 55%;
    left: 37%;
    img {
      width: 70%;
    }
  }

  @media (max-width: 500px) {
    top: 55%;
    left: 37%;
    img {
      width: 70%;
    }
  }
`;

export default PageSectionImage;
