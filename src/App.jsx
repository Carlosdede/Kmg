import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
