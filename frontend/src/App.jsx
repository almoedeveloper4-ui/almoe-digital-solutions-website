import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrandPage from "./pages/BrandPage";
import ProductPage from "./pages/ProductPage";
import SolutionsPage from "./pages/SolutionsPage";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
       <Header />
      <Routes>
          <Route path="/" element={<HomePage />} />
        <Route path="/brands/:slug" element={<BrandPage />} />
        <Route path="/products" element={<ProductsPage />} />
<Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;