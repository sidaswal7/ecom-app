import React from "react";

const CartItems = (props)=>{

    return (
        <li>
            <div className="flex justify-between">
                <h2 className="basis-2/3 font-medium">{props.title}</h2>
                <div className="basis-2/3 flex font-medium">
                    <span className="mr-10">x {props.quantity}</span>
                    <span>${props.price}</span>
                </div>
                <button className="basis-1/3 bg-red-700 rounded text-white px-1 py-1 mb-2 hover:bg-red-800">Remove</button>
            </div>
        </li>
    )
}

export default CartItems;