import styled from "styled-components";
import UnderlineImage from "../assets/underlineImage.png";

function PageSectionImage(props) {
  return (
    <div className="position-relative">
      <img src={props.ImgPantalones} alt="img pantalones" />
      <TituloPageSectionImage>
        <h1>{props.h1PageSection}</h1>
      </TituloPageSectionImage>
      <UnderlineBorder>
        <img src={UnderlineImage} alt="underline border" />
      </UnderlineBorder>
    </div>
  );
}

const TituloPageSectionImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate (-50% -50%);
  color: white;
`;

const UnderlineBorder = styled.div`
  position: absolute;
  top: 65%;
  left: 47%;
  transform: translate (-50% -50%);
`;

export default PageSectionImage;
