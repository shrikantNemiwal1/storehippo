import ProductCard from "./ProductCard";

const ProductsSection = ({ isLoading, products }) => {
  return (
    <section className="products">
      <h1>Our Products</h1>
      <div className="products__section">
        {products.map((product) => {
          return <ProductCard data={product} key={product.id} />;
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
