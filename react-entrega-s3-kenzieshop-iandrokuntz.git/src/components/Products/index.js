import { useSelector } from "react-redux";
import Product from "../Product";

const Products = () => {

  const products = useSelector((store) => store.products);

return(

    <ul>

      {products.map((product) => (
        <li>
            <Product key={product.id} product={product}/>
        </li>
      ))}

    </ul>

  )
}

export default Products;