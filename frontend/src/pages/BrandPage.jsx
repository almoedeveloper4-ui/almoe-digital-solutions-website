import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getBrandBySlug,
  getProductsByBrand,
} from "../services/api";
import ProductSection from "../components/ProductSection";
import HeroSlide from "../components/HeroSlide";
import ContentBlock from "../components/ContentBlock";
import Cards from "../components/Cards";
import Gallery from "../components/Gallery";
import CaseStudy from "../components/CaseStudy";
import Tabs from "../components/Tabs";

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

  return (
    <div>
      <h1>{brand.name}</h1>
   <ProductSection products={products} />
      {brand.pageSections.map((section) => {
        if (section.__component === "brand.hero-slide") {
          return <HeroSlide key={section.id} data={section} />;
        }
        if (section.__component === "brand.content-block") {
  return <ContentBlock key={section.id} data={section} />;
}

if (section.__component === "brand.cards") {
  return <Cards key={section.id} data={section} />;
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
      })}
    </div>
  );
}

export default BrandPage;