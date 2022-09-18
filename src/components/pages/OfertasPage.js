import React from "react";
import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";

function OfertasPage() {
  return (
    <div>
      <PageSectionImage
        ImgPantalones={ImagePantalones}
        h1PageSection={"OFERTAS"}
      />
    </div>
  );
}

export default OfertasPage;
