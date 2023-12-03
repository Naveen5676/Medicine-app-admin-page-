import React, { useEffect, useState } from "react";
import DataContext from "./Datacontext";
import axios from "axios";

const Dataprovider = (props) => {
  const [items, updateItems] = useState([]);
  const [cart, updateCart] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      "https://crudcrud.com/api/1c50c07b1aef48c9bfc78dc073f5aa89/items"
    );
    const data = await response.json();
    console.log(data);
    updateItems(data);
  }, []);

  const addItemToCartHandler = (item) => {
    updateItems([...items, item]);

    fetch("https://crudcrud.com/api/1c50c07b1aef48c9bfc78dc073f5aa89/items", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleAddToCartHandler = async (item) => {
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
    const existingCartItem = cart.find(
      (cartItem) => cartItem.price === item.price
    );

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

      // Find the item in the API and update its quantity
      const existingItem = items.find(
        (itemData) => itemData.price === item.price
      );

      if (existingItem) {
        try {
          await axios.patch(
            `https://crudcrud.com/api/1c50c07b1aef48c9bfc78dc073f5aa89/items/${existingItem._id}`,
            {
              quantity: items.quantity - 1,
            }
          );
        } catch (error) {
          // Handle error if needed
          console.error("Failed to update quantity in API:", error);
        }
      }
    } else {
      // If item does not exist, add it to the cart with quantity 1
      updateCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const datacontext = {
    items: items,
    cart: cart,
    addItem: addItemToCartHandler,
    handleAddToCart: handleAddToCartHandler,
  };

  return (
    <DataContext.Provider value={datacontext}>
      {props.children}
      {console.log(cart)}
    </DataContext.Provider>
  );
};

export default Dataprovider;
