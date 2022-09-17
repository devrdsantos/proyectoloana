import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JeansPage from "./components/pages/JeansPage";
import ShortsPage from "./components/pages/ShortsPage";
import OfertasPage from "./components/pages/OfertasPage";
import CamperasPage from "./components/pages/CamperasPage";
import HomePage from "./components/pages/HomePage";
import EnterProfile from "./components/pages/EnterProfile";
import NovedadesPage from "./components/pages/NovedadesPage";
import FaqPage from "./components/pages/FaqPage";
import ItemDescriptionPage from "./components/pages/ItemDescriptionPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jeans" element={<JeansPage />} />
          <Route path="/shorts" element={<ShortsPage />} />
          <Route path="/camperas" element={<CamperasPage />} />
          <Route path="/ofertas" element={<OfertasPage />} />
          <Route path="/novedades" element={<NovedadesPage />} />
          <Route path="/user" element={<EnterProfile />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/item" element={<ItemDescriptionPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
