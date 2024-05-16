import React from "react";
import Modal from "../../UI/Modal";
import CartItems from "./CartItem";

const Cart = (props) => {
  const cartItems = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  return (
    <Modal>
      <header className="flex justify-between px-7 mb-4">
        <h2 className="text-2xl text-blue-700 font-semibold">Cart</h2>
        <button
          onClick={props.onHideCart}
          className="text-black font-semibold text-2xl"
        >
          X
        </button>
      </header>
      <hr className="mb-4" />
      <ul>
        {cartItems.map((item) => {
          return (
            <CartItems
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </ul>

      <footer>
        <div className="flex justify-center">
          <h2 className="font-medium mt-4 text-xl">Total: $134</h2>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 px-4 py-2 hover:bg-blue-600 text-white rounded mt-4 font-bold text-xl">
            Purchase
          </button>
        </div>
      </footer>
    </Modal>
  );
};

export default Cart;
