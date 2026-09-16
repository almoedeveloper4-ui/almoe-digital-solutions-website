import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSlide.css";

const Slider = SliderImport.default ?? SliderImport;

function HeroSlide({ slides, logo }) {
  const showDots = slides.length > 1;

  return (
    <section className="brand-hero">
      <Slider
        dots={showDots}
        infinite={slides.length > 1}
        speed={600}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        autoplay={slides.length > 1}
        autoplaySpeed={5000}
      >
        {slides.map((slide) => (
          <div className="brand-hero-slide" key={slide.id}>
            <img
              className="brand-hero-image"
            src={slide.Image.url}
              alt={slide.Title}
            />

            <div className="brand-hero-overlay">
              <h2>{slide.Title}</h2>

              {logo && (
                <img
                  className="brand-hero-logo"
                 src={logo.url}
                  alt="Brand Logo"
                />
              )}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default HeroSlide;