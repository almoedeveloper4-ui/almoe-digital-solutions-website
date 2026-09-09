function ProductSection({ products }) {
  return (
    <section>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
        <a href={`/products/${product.slug}`}>
  <img
    src={`http://localhost:1337${product.image.url}`}
    alt={product.name}
  />

  <h3>{product.name}</h3>
</a>

          <p>{product.description}</p>
        </div>
      ))}
    </section>
  );
}

export default ProductSection;