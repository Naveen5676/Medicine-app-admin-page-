import React, { useContext } from "react";
import DataContext from "../Store/Datacontext";
import calsses from "./Display.module.css";

const Display = () => {
  const ctxdata = useContext(DataContext);

  return (
    <div>
      <section className={calsses.meals}>
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
      </section>
    </div>
  );
};

export default Display;
