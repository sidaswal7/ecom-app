import React, { useState } from "react";
import Navigation from "./Navigation";
import CartButton from "./CartButton";
import Cart from "../Cart/Cart";

const Header = ()=>{
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = ()=>{
        setShowCart(true);
    }
    const hideCartHandler = ()=>{
        setShowCart(false);
    }

    return (
        
        <header className="bg-black text-blue-400 py-5 flex justify-between px-8">
            { showCart && <Cart onHideCart={hideCartHandler}/>}
            <Navigation/>
            <CartButton onShowCart = {showCartHandler}/>
        </header>
    )
}

export default Header;