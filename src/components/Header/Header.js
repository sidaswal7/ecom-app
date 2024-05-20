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
        
        <header>
            <div className="bg-black text-blue-400 py-5 flex justify-between px-8">
                { showCart && <Cart onHideCart={hideCartHandler}/>}
                <Navigation/>
                <CartButton onShowCart = {showCartHandler}/>
            </div>
            <h1 className="mb-8 py-8 text-black text-center font-bold text-4xl bg-gradient-to-r from-slate-500 to-white font-robo">
                UrbanCart
            </h1>

            
        </header>
    )
}

export default Header;