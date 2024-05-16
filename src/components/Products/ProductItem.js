import React from "react";

const ProductItem = (props) => {
  return (
    <li className="bg-white shadow-md rounded-lg overflow-hidden basis-1/3">
        <div className="flex justify-center">
            <img
            src={props.imageUrl}
            alt="item-img"
            className="w-full"
            style={{ maxWidth: "200px" }}
        />
        </div>
      <div className="p-4">
        <h1 className="text-xl font-medium mb-4">{props.title}</h1>
        <div className="flex justify-between items-center">
          <p className="text-gray-700">${props.price}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add To Cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
