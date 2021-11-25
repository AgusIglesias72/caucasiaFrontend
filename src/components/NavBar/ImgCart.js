import React from "react";
import imgCart from "./../../assets/cart.png";

const ImgCart = () => {
  return (
    <div className="cart-container">
      <img src={imgCart} className="img-cart" alt="cart"></img>
    </div>
  );
};

export default ImgCart;
