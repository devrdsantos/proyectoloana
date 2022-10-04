import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";
import OrderBy from "../OrderBy";
import Cards from "../Cards";
import { DataContext } from "../data/DataProvider";
import { useContext } from "react";

function PantalonesPage() {
  const value = useContext(DataContext)
  const [productos] = value.productos
  return (
    <>
        <PageSectionImage
          ImgPantalones={ImagePantalones}
          h1PageSection={"PANTALONES"}
        />
        <OrderBy />
      <Cards data={productos} />
    </>
  );
}

export default PantalonesPage;
