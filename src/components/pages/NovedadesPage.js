import React from "react";
import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";

function NovedadesPage() {
  return (
    <div>
      <PageSectionImage
        ImgPantalones={ImagePantalones}
        h1PageSection={"NOVEDADES"}
      />
    </div>
  );
}

export default NovedadesPage;
