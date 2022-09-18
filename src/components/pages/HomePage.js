import React from "react";
import CarouselMain from "../CarouselMain.js";
import Cards from "../Cards.js";

function HomePage() {
  return (
    <main>
      <CarouselMain />
      <div>
        <h1>LO MÁS VENDIDO</h1>
      </div>
      <Cards />
    </main>
  );
}
export default HomePage;