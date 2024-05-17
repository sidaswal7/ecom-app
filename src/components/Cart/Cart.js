import React, { useContext } from "react";
import Modal from "../../UI/Modal";
import CartItems from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal>
      <header className="flex justify-between px-7 mb-4">
        <h2 className="text-2xl text-blue-700 font-semibold">CART</h2>
        <button
          onClick={props.onHideCart}
          className="text-black font-semibold text-2xl"
        >
          X
        </button>
      </header>
      <hr className="mb-4" />
      <ul>
        {cartCtx.products.map((item) => {
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
          <h2 className="font-medium mt-4 text-xl">Total: ${cartCtx.products.reduce((sum,item)=>sum+item.price,0)}</h2>
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
