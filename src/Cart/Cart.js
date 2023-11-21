import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import DataContext from "../Store/Datacontext";

const Cart = (props) => {
  const datactx = useContext(DataContext);
  let totalAmount = 0;
  // cartctx.cart.forEach((item) => {
  //   totalAmount = totalAmount + item.price * item.quantity;
  // });

  // const onAdd = (item) => {
  //   console.log(item);
  //   cartctx.addQuantity(item.id)
  // };

  // const onRemove = (item) => {
  //   if(item.quantity <= 1){
  //     cartctx.removeItem(item.id)
  //   }else{
  //     cartctx.minusQuantity(item.id)
  //   }

  // };

  
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {datactx.cart.map((item) => (
        <li className={classes.cart}>
          <div>
            <h3>{item.medicineName}</h3>
            <div className={classes.quantity}>Description:{item.description}</div>
            <div className={classes.price}>{item.quantity}</div>
            <div className={classes.price}>{item.price}</div>
          </div>
          {/* <div className={classes.actions}>
          <button onClick={() => onRemove(item)}>−</button>
          <button onClick={() => onAdd(item)}>+</button>
          </div> */}
        </li>
        // <li>Name:{item.name} Price:{item.price} Quantity:{item.quantity}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
