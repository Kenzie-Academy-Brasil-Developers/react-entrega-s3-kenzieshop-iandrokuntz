import { Route, Switch } from "react-router";
import CartPage from "../pages/CartPage";
import ProductsPage from "../pages/ProductsPage";

const Routes = () => {
    
  return (
    <Switch>
      <Route exact path="/">
        <ProductsPage/>
      </Route>
      <Route path="/cart">
        <CartPage/>
      </Route>
    </Switch>
  )
}

export default Routes;