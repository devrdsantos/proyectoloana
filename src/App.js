import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselMain from "./components/CarouselMain";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselMain />
      <Cards showcartel />
      <Footer />
    </div>

  );
}

export default App;
