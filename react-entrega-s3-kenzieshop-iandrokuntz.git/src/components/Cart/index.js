import { useSelector } from "react-redux";
import Product from "../Product";

const Cart = () => {

  const cart = useSelector((store) => store.cart)

  const totalPrice = cart.reduce((acc, value) => {
    return value.price + acc
  }, 0)

  return (

    <div>
        <div className="CartInfo">
            <h1>Your Cart</h1>
            <h3>Total of Products: {cart.length}</h3>
            <h3>Total Price: R${totalPrice.toFixed(3)} </h3>
        </div>
      <ul>

        {cart.map((product) => (
          <li>
            <Product key={product.id} product={product} isRemovable/>
          </li>
          
        ))}

      </ul>

        
      
    </div>

  )
}

export default Cart;