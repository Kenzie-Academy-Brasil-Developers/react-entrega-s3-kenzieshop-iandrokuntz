import { useDispatch } from "react-redux";
import { addToCartThunk, removeFromCartThunk} from "../../store/modules/cart/thunks";

const Product = ({ product, isRemovable = false }) => {

  const dispatch = useDispatch()

  const { id, name, price, image } = product

  return(

    <div>
      <img src={image} alt={name}></img>

        <h3>{name}</h3>
        <h4>R$ {price}</h4>

        {isRemovable ? (<button className="RemoveItem"onClick={() => dispatch(removeFromCartThunk(id))}>Remove item</button>

        ) : (

          <button className="AddtoCart" onClick={() => dispatch(addToCartThunk(product))}>Add to Cart</button>

        )}
      
    </div>
  )
}

export default Product;