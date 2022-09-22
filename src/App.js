import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PantalonesPage from "./components/pages/PantalonesPage";
import ShortsPage from "./components/pages/ShortsPage";
import OfertasPage from "./components/pages/OfertasPage";
import CamperasPage from "./components/pages/CamperasPage";
import HomePage from "./components/pages/HomePage";
import FaqPage from "./components/pages/FaqPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pantalones" element={<PantalonesPage />} />
          <Route path="/shorts" element={<ShortsPage />} />
          <Route path="/camperas" element={<CamperasPage />} />
          <Route path="/ofertas" element={<OfertasPage />} /> 
          <Route path="/faq" element={<FaqPage />} />         
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
