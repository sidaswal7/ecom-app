import React from "react";
import Navigation from "./Navigation";
import CartButton from "./CartButton";

const Header = ()=>{
    return (
        <header className="bg-black text-blue-400 py-5">
            <Navigation/>
            <CartButton/>
        </header>
    )
}

export default Header;