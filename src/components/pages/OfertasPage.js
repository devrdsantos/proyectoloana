import React from "react";
import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";
import {DataOfertas} from "../../components/data/DataAll"
import Cards from "../Cards";
import OrderBy from "../OrderBy";
function OfertasPage() {
  return (
    <div>
      <PageSectionImage
        ImgPantalones={ImagePantalones}
        h1PageSection={"OFERTAS"}
      />
      <OrderBy />
      <Cards data={DataOfertas} />
    </div>
  );
}

export default OfertasPage;
