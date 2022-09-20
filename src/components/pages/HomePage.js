import React from "react";
import CarouselMain from "../CarouselMain.js";
import Cards from "../Cards.js";
import Whyloana from "../Whyloana.js";
import Mainofertasynovedades from "../Mainofertasynovedades.js";


function HomePage() {
  return (
    <main>
      <CarouselMain />
      <Whyloana />
      <Mainofertasynovedades />
      <Cards showcartel />
    </main>
  );
}

export default HomePage;
