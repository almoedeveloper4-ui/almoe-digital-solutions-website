import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "../services/api";
import { Helmet } from "react-helmet-async";
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderImport.default ?? SliderImport;
import "./ProductPage.css";

function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [activeTab, setActiveTab] = useState("features");
const [similarPage, setSimilarPage] = useState(0);
const [similarSlidesToShow, setSimilarSlidesToShow] = useState(3);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await getProductBySlug(slug);

       const loadedProduct = response.data[0];

setProduct(loadedProduct);
setActiveImage(loadedProduct.image);
      
      } catch (error) {
        console.error("Failed to load product:", error);
      }
    };

    loadProduct();
  }, [slug]);

  useEffect(() => {
  const updateSimilarSlides = () => {
    if (window.innerWidth <= 767) {
      setSimilarSlidesToShow(1);
    } else if (window.innerWidth <= 1024) {
      setSimilarSlidesToShow(2);
    } else {
      setSimilarSlidesToShow(3);
    }
  };

  updateSimilarSlides();

  window.addEventListener("resize", updateSimilarSlides);

  return () => {
    window.removeEventListener("resize", updateSimilarSlides);
  };
}, []);

  if (!product) {
  return <p>Loading...</p>;
}

const galleryImages = product
  ? [product.image, ...(product.Gallery || [])]
  : [];

  const showPreviousImage = () => {
  const currentIndex = galleryImages.findIndex(
    (image) => image.id === activeImage?.id
  );

  const previousIndex =
    currentIndex <= 0 ? galleryImages.length - 1 : currentIndex - 1;

  setActiveImage(galleryImages[previousIndex]);
};

const showNextImage = () => {
  const currentIndex = galleryImages.findIndex(
    (image) => image.id === activeImage?.id
  );

  const nextIndex =
    currentIndex >= galleryImages.length - 1 ? 0 : currentIndex + 1;

  setActiveImage(galleryImages[nextIndex]);
};


  return (

      <>
   <Helmet>
  <title>
    {product.metaTitle || product.name}
  </title>

  <meta
    name="description"
    content={product.metaDescription || product.description || ""}
  />

  {product.canonicalUrl && (
    <link
      rel="canonical"
      href={product.canonicalUrl}
    />
  )}

  {(product.noIndex || product.noFollow) && (
    <meta
      name="robots"
      content={`${product.noIndex ? "noindex" : "index"}, ${
        product.noFollow ? "nofollow" : "follow"
      }`}
    />
  )}

  {product.ogTitle && (
  <meta property="og:title" content={product.ogTitle} />
)}

{product.ogDescription && (
  <meta
    property="og:description"
    content={product.ogDescription}
  />
)}

{product.ogImage?.url && (
  <meta
    property="og:image"
  content={product.ogImage.url}
  />
)}

<meta property="og:type" content="product" />
<meta property="og:url" content={window.location.href} />
</Helmet>

     <div>
{product.banner?.url && (
  <section className="product-banner">
    <img
      src={product.banner.url}
      alt={product.name}
    />

    <div className="product-banner-title">
      <h1>{product.name}</h1>
    </div>
  </section>
)}
 <section className="product-showcase container">
<div className="product-showcase-image">
<div className="product-main-image">
<button
  type="button"
  className="gallery-arrow gallery-arrow-left"
  onClick={showPreviousImage}
>
  ←
</button>

  <img
  src={activeImage.url}
    alt={product.name}
  />

<button
  type="button"
  className="gallery-arrow gallery-arrow-right"
  onClick={showNextImage}
>
  →
</button>
</div>
  {product.Gallery?.length > 0 && (
    <div className="product-gallery">
    {galleryImages.length > 0 && (
  <div className="product-gallery">
    {galleryImages.map((galleryImage) => (
      <button
        type="button"
        key={galleryImage.id}
        className={`gallery-thumbnail ${
          activeImage?.id === galleryImage.id ? "active" : ""
        }`}
        onClick={() => setActiveImage(galleryImage)}
      >
        <img
          src={galleryImage.url}
          alt={galleryImage.alternativeText || product.name}
        />
      </button>
    ))}
  </div>
)}
    </div>
  )}
</div>

  <div className="product-showcase-content">
  {product.brand && (
  <p className="product-brand">
    <a href={`/brands/${product.brand.slug}`}>
      {product.brand.name}
    </a>
  </p>
)}

    <h2>{product.name}</h2>
  {product.description && (
  <p className="product-description">
    {product.description}
  </p>
)}


    {product.highlights?.length > 0 && (
      <ul className="product-highlights">
        {product.highlights.map((highlight) => (
          <li key={highlight.id}>
            {highlight.text}
          </li>
        ))}
      </ul>
    )}

    <div className="product-actions">
      {product.brochure?.url && (
        <a
       href={product.brochure.url}
          target="_blank"
          rel="noreferrer"
        >
          Download Brochure
        </a>
      )}

      {product.enquiryLink && (
        <a href={product.enquiryLink}>
          {product.enquiryText || "Product Enquiry"}
        </a>
      )}
    </div>
  </div>
</section>
<section className="product-tabs container">
  <div className="product-tab-buttons">
    <button
      type="button"
      className={activeTab === "features" ? "active" : ""}
      onClick={() => setActiveTab("features")}
    >
      Features
    </button>

    <button
      type="button"
      className={activeTab === "specification" ? "active" : ""}
      onClick={() => setActiveTab("specification")}
    >
      Specification
    </button>

    <button
      type="button"
      className={activeTab === "accessories" ? "active" : ""}
      onClick={() => setActiveTab("accessories")}
    >
      Accessories
    </button>

    <button
      type="button"
      className={activeTab === "datasheets" ? "active" : ""}
      onClick={() => setActiveTab("datasheets")}
    >
      Datasheets
    </button>
  </div>
  {activeTab === "features" && (
  <div className="product-tab-content">
    {product.features?.map((feature) => (
      <div key={feature.id}>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    ))}
  </div>
)}
{activeTab === "specification" && (
  <div className="product-specifications">
    {product.specifications?.map((specification) => (
      <div className="specification-row" key={specification.id}>
        <div className="specification-name">
          {specification.name}
        </div>

        <div className="specification-value">
          {specification.value}
        </div>
      </div>
    ))}
  </div>
)}
{activeTab === "accessories" && (
  <div className="product-accessories">
    {product.accessories?.map((accessory) => (
      <div className="accessory-card" key={accessory.id}>
        {accessory.image?.url && (
          <div className="accessory-image">
            <img
            src={accessory.image.url}
              alt={accessory.name}
            />
          </div>
        )}

        <h3>{accessory.name}</h3>
      </div>
    ))}
  </div>
)}

{activeTab === "datasheets" && (
  <div className="product-datasheets">
    {product.datasheets?.map((datasheet) => (
      <div className="datasheet-card" key={datasheet.id}>
        <div className="datasheet-icon">
          📄
        </div>

        <h3>{datasheet.name}</h3>

        {datasheet.file?.url && (
          <a
         href={datasheet.file.url}
            target="_blank"
            rel="noreferrer"
          >
            Download ↓
          </a>
        )}
      </div>
    ))}

  </div>
)}
{product.similarProducts?.length > 0 && (
 <section className="similar-products">
    <div className="similar-products-header">
      <h2>Similar Products</h2>
    </div>

    <Slider
  dots={true}
  infinite={true}
  speed={500}
  slidesToShow={similarSlidesToShow}
  slidesToScroll={1}
  arrows={true}
>
      {product.similarProducts.map((similarProduct) => (
        <div
          className="similar-product-slide"
          key={similarProduct.id}
        >
          <div className="similar-product-card">
            <div className="similar-product-image">
              {similarProduct.image?.url && (
                <img
                src={similarProduct.image.url}
                  alt={similarProduct.name}
                />
              )}
            </div>

            <h3>{similarProduct.name}</h3>

            <a href={`/products/${similarProduct.slug}`}>
              View Product
            </a>
          </div>
        </div>
      ))}
    </Slider>
  </section>
)}
</section>
  </div>
    </>
  );
}

export default ProductPage;