import { useState, useEffect } from "react";
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cards.css";

const Slider = SliderImport.default ?? SliderImport;

function Cards({ data, products, brandSlug }) {
  const hasCarousel = products.length > 4;
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
  const updateSlides = () => {
    if (window.innerWidth <= 767) {
      setSlidesToShow(1);
    } else if (window.innerWidth <= 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(4);
    }
  };

  updateSlides();
  window.addEventListener("resize", updateSlides);

  return () => {
    window.removeEventListener("resize", updateSlides);
  };
}, []);

  return (
    <section className="brand-products">
      <div className="brand-products-header">
        <h2>{data.Title}</h2>

        {data.buttonText && (
          <a
            href={`/products?brand=${brandSlug}`}
            className="brand-products-button"
          >
            {data.buttonText}
          </a>
        )}
      </div>

      <div className="brand-products-slider">
        {hasCarousel ? (
        <Slider
  dots={false}
  infinite={true}
  speed={500}
  slidesToShow={slidesToShow}
  slidesToScroll={1}
  arrows={true}
>
            {products.map((product) => (
              <div className="brand-product-slide" key={product.id}>
                <a
                  href={`/products/${product.slug}`}
                  className="brand-product-card"
                >
                  <div className="brand-product-image">
                    <img
                     src={product.image?.url}
                      alt={product.name}
                    />
                  </div>

                  <h3>{product.name}</h3>
                </a>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="brand-products-grid">
            {products.map((product) => (
              <div className="brand-product-slide" key={product.id}>
                <a
                  href={`/products/${product.slug}`}
                  className="brand-product-card"
                >
                  <div className="brand-product-image">
                    <img
                     src={product.image?.url}
                      alt={product.name}
                    />
                  </div>

                  <h3>{product.name}</h3>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Cards;