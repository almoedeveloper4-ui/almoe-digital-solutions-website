import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cards.css";

const Slider = SliderImport.default ?? SliderImport;

function Cards({ data, products, brandSlug }) {
  const hasCarousel = products.length > 4;

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
            slidesToShow={4}
            slidesToScroll={1}
            arrows={true}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {products.map((product) => (
              <div className="brand-product-slide" key={product.id}>
                <a
                  href={`/products/${product.slug}`}
                  className="brand-product-card"
                >
                  <div className="brand-product-image">
                    <img
                      src={`http://localhost:1337${product.image?.url}`}
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
                      src={`http://localhost:1337${product.image?.url}`}
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