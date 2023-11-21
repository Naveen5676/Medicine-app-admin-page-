import React, { useContext } from "react";
import DataContext from "../Store/Datacontext";

const Display = () => {
    const ctxdata = useContext(DataContext);

    return (
        <div>
            <h2>Available Medicines</h2>
            {ctxdata.items.map((item, index) => (
                <div key={index}>
                    <p>{`Medicine Name: ${item.medicineName}`}</p>
                    <p>{`Description: ${item.description}`}</p>
                    <p>{`Price: ${item.price}`}</p>
                    <p>{`Quantity Available: ${item.quantity}`}</p>
                    <button onClick={() => ctxdata.handleAddToCart(item)}>
                        Add to Cart
                    </button>
                    <hr />
                </div>
            ))}
        </div>
    );

    // Function to handle "Add to Cart" button click
    const handleAddToCart = (item) => {
        // You can implement the logic to add the item to the cart here
        console.log("Added to Cart:", item);
    };
}

export default Display;
