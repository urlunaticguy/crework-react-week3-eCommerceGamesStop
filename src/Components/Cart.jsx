import React from "react";
import CartListing from "./CartListing";
import gameDataObj from "../Utils/GameData.js";

function Cart(props) {
  let cartAmount = 0;
  let cartContent = [];
  if (props.list.length === 0) {
    cartContent.push(
      <h1 key={-1} className=" mb-4 flex justify-center text-center">
        Cart is empty.
      </h1>
    );
  }
  for (let i = 0; i < props.list.length; i += 2) {
    cartContent.push(
      <div key={i}>
        <CartListing
          qty={props.list[i + 1]}
          uniqueNo={i}
          index={props.list[i]}
          delItem={props.deleteItem}
        />
      </div>
    );
    cartAmount +=
      (parseInt(gameDataObj[props.list[i]].price[0]) + 0.99) *
      props.list[i + 1];
  }
  cartAmount = cartAmount.toFixed(2);
  return (
    <div className=" text-white pt-4">
      <div className=" flex flex-col justify-center text-center align-middle items-center mb-8">
        <div className=" bg-fuchsia-900 px-4 py-1 rounded-full">
          <label className=" lg:text-[1.2rem]">Total Cart Value : </label>
          <label className=" font-bold lg:text-[1.4rem]">${cartAmount}</label>
        </div>
        <button className=" bg-slate-700 w-[6rem] text-[1rem] mt-2 px-4 py-1 rounded-full cursor-pointer hover:underline">
          Checkout
        </button>
      </div>
      {cartContent}
    </div>
  );
}

export default Cart;
