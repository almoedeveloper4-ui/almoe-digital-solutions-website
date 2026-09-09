import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrandPage from "./pages/BrandPage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/brands/:slug" element={<BrandPage />} />
        <Route path="/products/:slug" element={<ProductPage />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;