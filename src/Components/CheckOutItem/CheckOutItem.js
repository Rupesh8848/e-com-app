import React from "react";
import "./CheckOutItem.scss";
import { CartContext } from "../Context/Cart.context";
export default function CheckOutItem({ item }) {
  const { name, imageUrl, price, quantity } = item;
  const { clearItemFromCart,addItemToCart, removeItemToCart } = React.useContext(CartContext);

  function clearHandler(item) {
    clearItemFromCart(item);
  }

  function decreaseHanlder(){
    removeItemToCart(item)
  }

  function increaseHandler(){
    addItemToCart(item);
  }
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseHanlder}>&#10094;</div>
        <span className="value">{quantity}</span>

        <div className="arrow" onClick={increaseHandler}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearHandler(item)}>
        &#10005;
      </div>
    </div>
  );
}
