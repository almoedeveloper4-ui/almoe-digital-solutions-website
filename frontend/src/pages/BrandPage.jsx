import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Expertise from "../components/Expertise";
import BrandCTA from "../components/BrandCTA";
import {
  getBrandBySlug,
  getProductsByBrand,
} from "../services/api";

import HeroSlide from "../components/HeroSlide";
import ContentBlock from "../components/ContentBlock";
import Cards from "../components/Cards";
import Gallery from "../components/Gallery";
import CaseStudy from "../components/CaseStudy";
import Tabs from "../components/Tabs";


import "./BrandPage.css";

function BrandPage() {
  const { slug } = useParams();

  const [brand, setBrand] = useState(null);
  const [products, setProducts] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadBrand = async () => {
      try {
        const response = await getBrandBySlug(slug);

        if (!response.data.length) {
          setNotFound(true);
          return;
        }

        setBrand(response.data[0]);
        const productResponse = await getProductsByBrand(slug);
setProducts(productResponse.data);
      } catch (error) {
        console.error("Failed to load brand:", error);
      }
    };

    loadBrand();
  }, [slug]);

  if (notFound) {
    return <h1>Brand Not Found</h1>;
  }

  if (!brand) {
    return <p>Loading...</p>;
  }

  const heroSlides =
    brand.pageSections?.filter(
      (section) => section.__component === "brand.hero-slide"
    ) || [];

  const otherSections =
    brand.pageSections?.filter(
      (section) => section.__component !== "brand.hero-slide"
    ) || [];

  return (
    <div className="brand-page">

      {/* Hero Carousel */}
      {heroSlides.length > 0 && (
        <HeroSlide
          slides={heroSlides}
          logo={brand.logo}
        />
      )}

      {/* Other Strapi Sections */}
      {otherSections.map((section) => {
        if (section.__component === "brand.content-block") {
          return <ContentBlock key={section.id} data={section} />;
        }

 if (section.__component === "brand.cards") {
  return (
    <Fragment key={section.id}>
      <Cards
        data={section}
        products={products}
        brandSlug={slug}
      />

      {brand.Expertise?.length > 0 && (
       <Expertise
  data={brand.Expertise}
  backgroundImage={brand.ExpertiseBackground}
/>
      )}
      {brand.CTA && (
  <BrandCTA data={brand.CTA} />
)}
    </Fragment>
  );
}

        if (section.__component === "brand.gallery") {
          return <Gallery key={section.id} data={section} />;
        }

        if (section.__component === "brand.case-study") {
          return <CaseStudy key={section.id} data={section} />;
        }

        if (section.__component === "brand.tabs") {
          return <Tabs key={section.id} data={section} />;
        }

        return null;
      }
      
      
      )}
    </div>
  );
}

export default BrandPage;