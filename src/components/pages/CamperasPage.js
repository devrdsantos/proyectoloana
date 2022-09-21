import React from "react";
import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";
import Cards from "../Cards";
import {DataCamperas} from "../data/DataAll";
import OrderBy from "../OrderBy";
function CamperasPage() {
  return (
    <div>
      <PageSectionImage
        ImgPantalones={ImagePantalones}
        h1PageSection={"CAMPERAS"}
      />
      <OrderBy />
      <Cards data={DataCamperas} />
    </div>
  );
}

export default CamperasPage;
