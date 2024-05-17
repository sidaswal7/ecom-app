import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props)=>{

    const [cartProducts, setCartProducts]= useState([]);

    const addToCartHandler = (product)=>{
        setCartProducts([...cartProducts,product])
    }
    const removeFromCartHandler = ()=>{}

    const cartContext = {
        products:cartProducts,
        addToCart:addToCartHandler,
        removeFromCart:removeFromCartHandler,
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;