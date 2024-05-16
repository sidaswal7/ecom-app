import React from "react";

const ProductItem = (props)=> {
    return(
        <li>
           <img src={props.imageUrl} alt="item-img"/>
           <h1>{props.title}</h1>
           <p>${props.price}</p>
           <button>Add To Cart</button> 
        </li>
    )
}

export default ProductItem;