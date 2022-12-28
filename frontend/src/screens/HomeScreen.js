import data from "../data";

function HomeScreen() {
  return <div> 
    <div className="products">
  {data.products.map((product) => (
    <div className="product" key={product.slug}>
      <a href={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </a>
      <div className="product-info">
        <a href={`/product/${product.slug}`}>
          <p>{product.name}</p>
        </a>
        <p>
          <storage>{product.salar}</storage>
        </p>
        <button>Add to char</button>
      </div>
    </div>
  ))}
</div></div>;
}
export default HomeScreen;
