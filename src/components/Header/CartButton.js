import React from "react";
import classes from "./CartButton.module.css"


const CartButton = (props)=> {
    return(
        <button
            className={classes.btn}
            type="button"
            onClick={() => props.onShowCart()}
        >
        Cart
        <span>0</span>
        </button>
    )
}

export default CartButton;