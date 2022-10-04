import React, { useContext } from "react";
import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img_cards/novedades-seccion-img.jpg";
import Cards from "../Cards";
import OrderBy from "../OrderBy";
import { DataContext } from "../data/DataProvider";
function NovedadesPage() {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  return (
    <div>
      <PageSectionImage
        ImgPantalones={ImagePantalones}
        h1PageSection={"NOVEDADES"}
      />
      <OrderBy />
      <Cards data={productos} />
    </div>
  );
}

export default NovedadesPage;
