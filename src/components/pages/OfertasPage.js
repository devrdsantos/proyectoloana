import React, { useContext } from "react";
import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";
import Cards from "../Cards";
import OrderBy from "../OrderBy";
import { DataContext } from "../data/DataProvider";
function OfertasPage() {
  const value = useContext(DataContext)
  const [productos] = value.productos
  return (
    <div>
      <PageSectionImage
        ImgPantalones={ImagePantalones}
        h1PageSection={"OFERTAS"}
      />
      <OrderBy />
      <Cards data={productos} />
    </div>
  );
}

export default OfertasPage;
