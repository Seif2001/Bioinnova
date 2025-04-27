import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductsServices from "./pages/ProductsServices";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import CeoMessage from "./pages/CeoMessage";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products-services" element={<ProductsServices />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/why-us" element={<WhyUs/>}/>
        <Route path="/ceo-message"element ={<CeoMessage/>}/>
      </Routes>
    </Router>
  );
}
