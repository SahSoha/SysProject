import { Button, Rating } from "@mui/material";
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
          <storage className="salary">{product.salar}</storage>
        </p>
        <Rating></Rating>
        <br></br>
        <Button variant="contained" color="success"> Add to char </Button>
        
      </div>
    </div>
  ))}
</div></div>;
}
export default HomeScreen;
