import { useEffect, useState } from "react";
import { getHeader, getBrands, getProductCategories } from "../services/api";
import "./Header.css";

function Header() {
  const [header, setHeader] = useState(null);
  const [brands, setBrands] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
const [productsOpen, setProductsOpen] = useState(false);
const [productCategories, setProductCategories] = useState([]);

useEffect(() => {
  const loadHeader = async () => {
    try {
      const response = await getHeader();
      const brandResponse = await getBrands();
const categoryResponse = await getProductCategories();
      setHeader(response.data);
      setBrands(brandResponse.data);
      setProductCategories(categoryResponse.data);
    } catch (error) {
      console.error("Failed to load header:", error);
    }
  };

  loadHeader();
}, []);

  if (!header) {
    return null;
  }

  return (
   <header>
    <img
      src={`http://localhost:1337${header.Logo.url}`}
      alt="Almoe Digital Solutions"
    />

 <button
  className="hamburger"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
>
  {menuOpen ? "✕" : "☰"}
</button>


   <nav>
  {header.Navigation.map((item) => {
    if (item.menuType === "Brands") {
      return (
        <div key={item.id} className="nav-dropdown">
          <a href={item.Link}>{item.Label}</a>

          <div>
            {brands.map((brand) => (
              <a key={brand.id} href={`/brands/${brand.slug}`}>
                {brand.name}
              </a>
            ))}
          </div>
        </div>
      );
    }

 if (item.menuType === "Products") {
  return (
    <div key={item.id} className="nav-dropdown">
      <a href={item.Link}>{item.Label}</a>

      <div>
        {productCategories.map((category) => (
          <a
            key={category.id}
            href={`/product-categories/${category.slug}`}
          >
            {category.Name}
          </a>
        ))}
      </div>
    </div>
  );
}

    return (
      <a key={item.id} href={item.Link}>
        {item.Label}
      </a>
    );
  })}

    <a href={header.linkedinUrl} target="_blank" rel="noreferrer">
    LinkedIn
  </a>

  <a href={header.instagramUrl} target="_blank" rel="noreferrer">
    Instagram
  </a>

<a className="call-button" href={header.callUsLink}>
  {header.callUsText}
</a>
</nav>



{menuOpen && (
  <div className="mobile-menu">
    {header.Navigation.map((item) => {
      if (item.menuType === "Brands") {
        return (
          <div key={item.id} className="mobile-dropdown">
            <button
              onClick={() => setBrandsOpen(!brandsOpen)}
              className="mobile-dropdown-button"
            >
              {item.Label}
              <span>{brandsOpen ? "−" : "+"}</span>
            </button>

            {brandsOpen && (
              <div className="mobile-submenu">
                {brands.map((brand) => (
                  <a key={brand.id} href={`/brands/${brand.slug}`}>
                    {brand.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      }


         if (item.menuType === "Products") {
        return (
          <div key={item.id} className="mobile-dropdown">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="mobile-dropdown-button"
            >
              {item.Label}
              <span>{productsOpen ? "−" : "+"}</span>
            </button>

            {productsOpen && (
              <div className="mobile-submenu">
                {productCategories.map((category) => (
                  <a
                    key={category.id}
                    href={`/product-categories/${category.slug}`}
                  >
                    {category.Name}
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      }

      return (
        <a key={item.id} href={item.Link}>
          {item.Label}
        </a>
      );
    })}

    <a href={header.linkedinUrl} target="_blank" rel="noreferrer">
      LinkedIn
    </a>

    <a href={header.instagramUrl} target="_blank" rel="noreferrer">
      Instagram
    </a>

    <a href={header.callUsLink}>
      {header.callUsText}
    </a>
  </div>
)}
  </header>
  );
}

export default Header;