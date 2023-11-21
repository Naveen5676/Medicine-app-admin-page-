import React from "react";

const DataContext= React.createContext({
    items:[],
    cart:[],
    addItem: (item)=>{},
    handleAddToCart: (item)=>{},
});
export default DataContext