import { useEffect, useState } from "react";
import { getSolutions } from "../services/api";


function SolutionsPage() {
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    const loadSolutions = async () => {
      try {
        const response = await getSolutions();
        setSolutions(response.data);
      } catch (error) {
        console.error("Failed to load solutions:", error);
      }
    };

    loadSolutions();
  }, []);

  return (
    <div>
      <h1>Solutions</h1>
    {solutions.map((solution) => (
  <div key={solution.id}>
        <img
      src={`http://localhost:1337${solution.Image.url}`}
      alt={solution.Name}
    />

    <h2>{solution.Name}</h2>
    <p>{solution.Description}</p>
    <h3>Brands</h3>

{solution.brands.map((brand) => (
  <p key={brand.id}>{brand.name}</p>
))}

<h3>Products</h3>

{solution.products.map((product) => (
  <p key={product.id}>
    <a href={`/products/${product.slug}`}>
      {product.name}
    </a>
  </p>
))}
  </div>
))}
    </div>
  );
}

export default SolutionsPage;