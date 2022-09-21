import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";
import Cards from "../Cards"
import {DataShorts} from "../data/DataAll"
import OrderBy from "../OrderBy";
const ShortsPage = () => {
  return (
    <>
      <div>
        <PageSectionImage
          ImgPantalones={ImagePantalones}
          h1PageSection={"SHORTS"}
        />
        <OrderBy />
        <Cards data = {DataShorts} />
      </div>
    </>
  );
};

export default ShortsPage;
