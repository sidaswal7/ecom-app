import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props)=>{

    const [cartProducts, setCartProducts]= useState([]);

    const addToCartHandler = (product)=>{
        const updatedProducts = cartProducts.map((item)=>{
            if(item.id === product.id){
                return {
                    ...item, quantity: item.quantity+1
                }
            }
            return item;
        })
        if(!updatedProducts.find((item)=> item.id === product.id)){
            updatedProducts.push(product);
        }
        setCartProducts(updatedProducts);
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