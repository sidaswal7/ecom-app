import React, { useContext, useState } from "react";
import Navigation from "./Navigation";
import CartButton from "./CartButton";
import Cart from "../Cart/Cart";
import AuthContext from "../../store/auth-context";
import { Link, useHistory } from "react-router-dom";

const Header = ()=>{
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = ()=>{
        setShowCart(true);
    }
    const hideCartHandler = ()=>{
        setShowCart(false);
    }
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    return (
        
        <header>
            <div className="bg-black text-blue-400 py-5 flex justify-between px-8">
                <Navigation/>
                <div>
                    {!authCtx.isLoggedIn && (
                        <Link to="/auth" className="bg-black text-white font-bold py-2 px-4 rounded border border-white ml-4">
                            LOGIN
                        </Link>
                    )}
                    {authCtx.isLoggedIn && (
                        <button className="bg-black text-white font-bold py-2 px-4 rounded border border-white ml-4" onClick={()=>{
                            authCtx.logout();
                            history.replace('/')
                        }}>LOGOUT</button>
                    )}
                    { showCart && <Cart onHideCart={hideCartHandler}/>}
                    <CartButton onShowCart = {showCartHandler}/>
                </div>
                
            </div>
            <h1 className="mb-8 py-8 text-black text-center font-bold text-4xl bg-gradient-to-r from-slate-500 to-white font-robo">
                UrbanCart
            </h1>

            
        </header>
    )
}

export default Header;