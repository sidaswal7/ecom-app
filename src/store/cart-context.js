import React from "react";

const CartContext = React.createContext({
    products:[],
    addToCart:()=>{},
    removeFromCart:()=>{}
})

export default CartContext;