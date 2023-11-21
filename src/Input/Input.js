import React, { Fragment, useContext } from "react";
import classes from './Input.module.css';
import DataContext from "../Store/Datacontext";

const Input = () => {
    const ctxdata = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Access form values directly from the form's DOM elements
        const medicineName = e.target.elements.medicineName.value;
        const description = e.target.elements.description.value;
        const price = parseFloat(e.target.elements.price.value);
        const quantity = parseInt(e.target.elements.quantity.value);

        // Create an item object with the form data
        const newItem = {
            medicineName,
            description,
            price,
            quantity
        };

        // Call the addItem function from the context to add the new item
        ctxdata.addItem(newItem);

        // Reset the form after submission (optional)
        e.target.reset();
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className={classes.form}>
                <label>Medicine Name</label>
                <input type="text" name="medicineName" />
                <label>Description</label>
                <input type="text" name="description" />
                <label>Price</label>
                <input type="number" name="price" />
                <label>Quantity Available</label>
                <input type="number" name="quantity" />
                <button type='submit'>Submit</button>
            </form>
        </Fragment>
    );
}

export default Input;
