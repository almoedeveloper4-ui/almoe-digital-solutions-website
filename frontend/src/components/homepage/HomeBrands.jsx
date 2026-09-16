import { useEffect, useState } from "react";
import { getBrandsWithLogos } from "../../services/api";
import "./HomeBrands.css";

function HomeBrands({ data }) {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const loadBrands = async () => {
      try {
       const brandData = await getBrandsWithLogos();

const selectedBrandIds =
  data?.brands?.map((brand) => brand.id) || [];

const selectedBrands = brandData.filter((brand) =>
  selectedBrandIds.includes(brand.id)
);

setBrands(selectedBrands);
      } catch (error) {
        console.error("Failed to load brand logos:", error);
      }
    };

    loadBrands();
  }, []);

  return (
    <section className="home-brands">
      <div className="container">
        <h2>{data?.Title}</h2>

        <div className="home-brands-list">
          {brands.map((brand) => (
            <div className="home-brand-item" key={brand.id}>
              {brand?.logo?.url && (
                <img
                  src={brand.logo.url}
                  alt={brand.name}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeBrands;