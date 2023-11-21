import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './Header-cart-button.module.css'
import DataContext from "../Store/Datacontext";

const HeaderCartButton =(props)=>{
const cartctx = useContext(DataContext);
let quantity = 0
cartctx.cart.forEach(item=>{
  quantity = quantity+ Number(item.quantity);
})

return (
  <button className={classes.button} onClick={props.onbtnClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{quantity}</span>
  </button>
);
}
export default HeaderCartButton