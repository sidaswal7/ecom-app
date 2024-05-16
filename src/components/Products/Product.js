import React from "react";
import { dummyData } from "../../assets/dummyData";
import ProductItem from "./ProductItem";

const Product = ()=> {
    return(
        <section>
            <ul>            
                {dummyData.map((data)=>{
                    return(
                        <ProductItem
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            price={data.price}
                            imageUrl={data.imageUrl}
                        />
                    )
                })}
            </ul>
        </section>
    )
}

export default Product;