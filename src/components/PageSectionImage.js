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
  img{
    width: 100%;
    height: 100%;
  }
`;
const TituloPageSectionImage = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate (-50% -50%);
  color: white;
`;

const UnderlineBorder = styled.div`
  position: absolute;
  top: 65%;
  left: 42%;
  transform: translate (-50% -50%);
`;

export default PageSectionImage;
