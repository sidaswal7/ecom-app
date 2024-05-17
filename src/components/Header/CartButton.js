import React, { useContext } from "react";
import CartIcon from "../../assets/CartIcon";
import CartContext from "../../store/cart-context";


const CartButton = (props)=> {
    const cartCtx = useContext(CartContext);
    return(
        <button
            className="bg-black text-white font-bold py-2 px-4 rounded border border-white"
            type="button"
            onClick={props.onShowCart}
        >
        {CartIcon}
        CART
        <span className="ml-3">{cartCtx.products.reduce((sum,item)=> sum + item.quantity,0)}</span>
        </button>
    )
}

export default CartButton;