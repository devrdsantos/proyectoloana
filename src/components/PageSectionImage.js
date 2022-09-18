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
  img {
    width: 100%;
    height: 100%;
  }
  margin-bottom: 1.5rem;
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
`;

const UnderlineBorder = styled.div`
  position: absolute;
  top: 59%;
  left: 37%;
  transform: translate (-50% -50%);
`;

export default PageSectionImage;
