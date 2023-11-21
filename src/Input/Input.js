import React, { Fragment, useContext, useState } from "react";
import classes from './Input.module.css';
import DataContext from "../Store/Datacontext";

const Input = () => {
    const ctxdata = useContext(DataContext);
    const [formData, setFormData] = useState({
        medicineName: "",
        description: "",
        price: 0,
        quantity: 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create an item object with the form data
        const newItem = {
            medicineName: formData.medicineName,
            description: formData.description,
            price: formData.price,
            quantity: formData.quantity
        };

        // Call the addItem function from the context to add the new item
        ctxdata.addItem(newItem);

        // Reset the form after submission
        setFormData({
            medicineName: "",
            description: "",
            price: 0,
            quantity: 0
        });
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className={classes.form}>
                <label>Medicine Name</label>
                <input
                    type="text"
                    name="medicineName"
                    value={formData.medicineName}
                    onChange={handleInputChange}
                />
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
                <label>Price</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                />
                <label>Quantity Available</label>
                <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </Fragment>
    );
}

export default Input;
