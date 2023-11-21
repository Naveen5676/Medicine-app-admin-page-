import React, {useState} from "react";
import DataContext from "./Datacontext";

const Dataprovider = (props)=>{
     
    const [items, updateItems]= useState([]);
    const [cart, updateCart] = useState([]);

    const addItemToCartHandler = (item ) => {
    updateItems([...items,item]);
  };

  const handleAddToCartHandler = (item) => {
    // Update the items state by reducing the quantity of the added item
    const updatedItems = items.map((itemData) => {
      if (itemData.price === item.price) {
        const updatedQuantity = Number(itemData.quantity) - 1;
        return { ...itemData, quantity: updatedQuantity };
      }
      return itemData;
    });
    updateItems(updatedItems);
  
    // Check if the item already exists in the cart
    const existingCartItem = cart.find((cartItem) => cartItem.price === item.price);
  
    if (existingCartItem) {
      // If item exists, update the quantity
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.price === item.price) {
          const addQuantity = Number(cartItem.quantity);
          return { ...cartItem, quantity: addQuantity + 1 };
        }
        return cartItem;
      });
      updateCart(updatedCart);
    } else {
      // If item does not exist, add it to the cart with quantity 1
      updateCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  
  





    const datacontext={
        items:items,
        cart:cart,
        addItem:addItemToCartHandler,
        handleAddToCart:handleAddToCartHandler

    };

    return(
        <DataContext.Provider value={datacontext}>
            {props.children}
            {console.log(cart)}
        </DataContext.Provider>
    );
}

export default Dataprovider