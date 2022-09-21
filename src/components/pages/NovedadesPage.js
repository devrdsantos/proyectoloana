import React from "react";
import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";
import Cards from "../Cards";
import {DataNovedades} from "../data/DataAll";
import OrderBy from "../OrderBy";

function NovedadesPage() {
  return (
    <div>
      <PageSectionImage
        ImgPantalones={ImagePantalones}
        h1PageSection={"NOVEDADES"}
      />
      <OrderBy />
      <Cards data={DataNovedades} />
    </div>
  );
}

export default NovedadesPage;
