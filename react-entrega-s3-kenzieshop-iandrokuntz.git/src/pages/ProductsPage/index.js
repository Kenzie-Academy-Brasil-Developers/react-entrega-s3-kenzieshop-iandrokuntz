import { useHistory } from "react-router";
import Products from "../../components/Products";
import "./style.css"

const ProductsPage = () => {

  const history = useHistory()

  return(

    <div>

      <h1>Gaming Shop</h1>
      <h2>Play in the gaming world</h2>
      <Products/>
      <button className="goCart" onClick={() => history.push("/cart")}>Go Cart</button>

    </div>

  )
}
export default ProductsPage;