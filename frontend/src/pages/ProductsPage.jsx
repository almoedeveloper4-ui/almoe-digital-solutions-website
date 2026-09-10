import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderImport.default ?? SliderImport;

import { useEffect, useState } from "react";
import {
  getAllProducts,
  getLatestProducts,
  getProductCategories,
getSolutions,
getBrands,
} from "../services/api";
import "./ProductsPage.css";
function ProductsPage() {
const [products, setProducts] = useState([]);
const [latestProducts, setLatestProducts] = useState([]);
const [productCategories, setProductCategories] = useState([]);
const [solutions, setSolutions] = useState([]);
const [brands, setBrands] = useState([]);
const [visibleCount, setVisibleCount] = useState(12);
const [selectedCategories, setSelectedCategories] = useState([]);
const [selectedSolutions, setSelectedSolutions] = useState([]);
const [selectedBrands, setSelectedBrands] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [openFilter, setOpenFilter] = useState(null);


const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const filteredProducts = products.filter((product) => {
  const categoryMatch =
    selectedCategories.length === 0 ||
    (
      product.product_category?.id &&
      selectedCategories.includes(product.product_category.id)
    );

  const solutionMatch =
    selectedSolutions.length === 0 ||
    product.solutions?.some((solution) =>
      selectedSolutions.includes(solution.id)
    );

  const brandMatch =
    selectedBrands.length === 0 ||
    (
      product.brand?.id &&
      selectedBrands.includes(product.brand.id)
    );

    const searchMatch =
  searchTerm.trim() === "" ||
  product.name.toLowerCase().includes(searchTerm.toLowerCase());

  return categoryMatch && solutionMatch && brandMatch && searchMatch;
});

useEffect(() => {
  setVisibleCount(12);
}, [selectedCategories, selectedSolutions, selectedBrands, searchTerm]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
        const latestResponse = await getLatestProducts();
setLatestProducts(latestResponse.data);
const categoryResponse = await getProductCategories();
setProductCategories(categoryResponse.data);

const solutionResponse = await getSolutions();
setSolutions(solutionResponse.data);

const brandResponse = await getBrands();
setBrands(brandResponse.data);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="products-page">

      <section className="latest-products">
  <div className="latest-products-header">
    <h2>Latest Products</h2>
  </div>

  <Slider {...sliderSettings}>
    {latestProducts.map((latestProduct) => (
      <div key={latestProduct.id} className="latest-product-slide">
        <a
          href={`/products/${latestProduct.slug}`}
          className="latest-product-card"
        >
          <div className="latest-product-image">
            <img
              src={`http://localhost:1337${latestProduct.image.url}`}
              alt={latestProduct.name}
            />
          </div>

          <h3>{latestProduct.name}</h3>
        </a>
      </div>
    ))}
  </Slider>
</section>

   <section className="product-filters">
<h2 className="search-by-title">Search by</h2>
<div className="filter-dropdown">
<button
  type="button"
  className="filter-button"
  aria-expanded={openFilter === "products"}
  onClick={() =>
    setOpenFilter(openFilter === "products" ? null : "products")
  }
>
  Products
</button>
{openFilter === "products" && (
    <div className="filter-options">
    {productCategories.map((category) => (
      <label key={category.id}>
       <input
  type="checkbox"
  checked={selectedCategories.includes(category.id)}
  onChange={() => {
    setSelectedCategories((current) =>
      current.includes(category.id)
        ? current.filter((id) => id !== category.id)
        : [...current, category.id]
    );
  }}
/>
        {category.Name}
      </label>
    ))}
  </div>
   )}
</div>
  <div className="filter-dropdown">
<button
  type="button"
  className="filter-button"
    aria-expanded={openFilter === "solutions"}
  onClick={() =>
    setOpenFilter(openFilter === "solutions" ? null : "solutions")
  }
>
  Solutions
</button>
{openFilter === "solutions" && (
  <div className="filter-options">
    {solutions.map((solution) => (
      <label key={solution.id}>
       <input
  type="checkbox"
  checked={selectedSolutions.includes(solution.id)}
  onChange={() => {
    setSelectedSolutions((current) =>
      current.includes(solution.id)
        ? current.filter((id) => id !== solution.id)
        : [...current, solution.id]
    );
  }}
/>
        {solution.Name}
      </label>
    ))}
  </div>
  )}
</div>

<div className="filter-dropdown">
<button
  type="button"
  className="filter-button"
   aria-expanded={openFilter === "brands"}
  onClick={() =>
    setOpenFilter(openFilter === "brands" ? null : "brands")
  }
>
  Brands
</button>
{openFilter === "brands" && (
  <div className="filter-options">
    {brands.map((brand) => (
      <label key={brand.id}>
      <input
  type="checkbox"
  checked={selectedBrands.includes(brand.id)}
  onChange={() => {
    setSelectedBrands((current) =>
      current.includes(brand.id)
        ? current.filter((id) => id !== brand.id)
        : [...current, brand.id]
    );
  }}
/>
        {brand.name}
      </label>
    ))}
  </div>
  )}
</div>
<div className="product-search">
<input
  type="text"
  placeholder="Search model no."
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>
</div>
</section>

<section className="all-products">
      <div className="all-products-inner">
 <h2 className="all-products-title">All Products</h2>
  <div className="products-grid">
{filteredProducts.slice(0, visibleCount).map((product) => (
    <div key={product.id} className="product-card">
      <img
        src={`http://localhost:1337${product.image.url}`}
        alt={product.name}
      />

      <p>{product.brand?.name}</p>

      <h3>{product.name}</h3>

      <a href={`/products/${product.slug}`}>
        Learn more
      </a>
    </div>
  ))}
</div>
{visibleCount < filteredProducts.length && (
  <button
    type="button"
    className="load-more-button"
    onClick={() => setVisibleCount(visibleCount + 12)}
  >
    Load More
  </button>
)}
</div>
</section>

    </div>
  );
}

export default ProductsPage;