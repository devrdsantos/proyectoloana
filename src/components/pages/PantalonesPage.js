import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";

function PantalonesPage() {
  return (
    <div>
      <div>
        <PageSectionImage
          ImgPantalones={ImagePantalones}
          h1PageSection={"PANTALONES"}
        />
      </div>
    </div>
  );
}

export default PantalonesPage;
