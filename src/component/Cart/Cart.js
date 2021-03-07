import React from "react";
import "./Cart.css";

function Cart(props) {
  const { name, id, email, money, img } = props.user;
  return (
    <div>
      <div className="user-img">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="user-details">
        <div className="">
          <p>Name: {name}</p>
          <p>ID: {id}</p>
          <p>Email: {email}</p>
          <p>Money: ${money}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
