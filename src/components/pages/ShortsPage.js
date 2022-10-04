import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";
import Cards from "../Cards"
import OrderBy from "../OrderBy";
import { useContext} from "react";
import { DataContext } from "../data/DataProvider";
const ShortsPage = () => {
  const {products, ordenar } = useContext(DataContext)
  return (
    <>
        <PageSectionImage
          ImgPantalones={ImagePantalones}
          h1PageSection={"SHORTS"}
        />
        <OrderBy ordenar= {ordenar} />
        <Cards data = {products} />
    </>
  );
};

export default ShortsPage;
