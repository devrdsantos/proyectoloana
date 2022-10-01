import PageSectionImage from "../PageSectionImage";
import ShortImageSection from "../../assets/img_cards/short-seccion-img.jpg";
import Cards from "../Cards";
import OrderBy from "../OrderBy";
import { useContext } from "react";
import { DataContext } from "../data/DataProvider";
const ShortsPage = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  return (
    <>
      <PageSectionImage
        ImgPantalones={ShortImageSection}
        h1PageSection={"SHORTS"}
      />
      <OrderBy />
      <Cards data={productos} />
    </>
  );
};

export default ShortsPage;
