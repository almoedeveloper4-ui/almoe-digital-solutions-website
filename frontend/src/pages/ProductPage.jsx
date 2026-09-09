import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "../services/api";

function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await getProductBySlug(slug);

        setProduct(response.data[0]);
      } catch (error) {
        console.error("Failed to load product:", error);
      }
    };

    loadProduct();
  }, [slug]);

  if (!product) {
  return <p>Loading...</p>;
}

  return (
     <div>
    <h1>{product.name}</h1>
    <p>
  Brand:{" "}
  <a href={`/brands/${product.brand.slug}`}>
    {product.brand.name}
  </a>
</p>

    <img
      src={`http://localhost:1337${product.image.url}`}
      alt={product.name}
    />

    <p>{product.description}</p>
  </div>
  );
}

export default ProductPage;