import { useHistory } from "react-router";
import Cart from "../../components/Cart";

const CartPage = () => {

  const history = useHistory()

  return(

    <div>

      <button className="goHome" onClick={() => history.push("/")}>Go Home</button>
      <Cart/>

    </div>

  )
}

export default CartPage;