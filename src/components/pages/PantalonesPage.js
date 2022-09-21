import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";
import OrderBy from "../OrderBy";
import Cards from "../Cards";
import {DataPantalon} from "../data/DataAll";

function PantalonesPage() {
  return (
    <div>
      <div>
        <PageSectionImage
          ImgPantalones={ImagePantalones}
          h1PageSection={"PANTALONES"}
        />
        <OrderBy />
      </div>
      <Cards data={DataPantalon} />
    </div>
  );
}

export default PantalonesPage;
