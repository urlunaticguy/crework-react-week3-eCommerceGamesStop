import React from "react";
import gameDataObj from "../Utils/GameData.js";

function CartListing(props) {
  return (
    <div
      id={gameDataObj[props.index].id}
      className=" flex w-[100%] justify-center mb-10 bg-gradient-to-b from-black via-[#0f6600] to-black"
    >
      <img
        className=" w-[8rem] h-[8rem] lg:w-[12rem] lg:h-[12rem] border-4 border-white"
        src={gameDataObj[props.index].img}
      />
      <div className=" flex flex-col ml-3 w-[50%]">
        <label className=" text-[0.8rem] lg:text-[1.5rem] h-[1.4rem] lg:h-[2rem] font-light">
          {gameDataObj[props.index].name}
        </label>
        <label className=" text-[0.6rem] lg:text-[1rem]">
          by {gameDataObj[props.index].dev}
        </label>
        <label className=" text-[0.9rem] mt-2 lg:text-[1.2rem]">
          Qty {props.qty}
        </label>
        <div className=" flex font-semibold">
          <label className=" text-[1.2rem] lg:text-[1.5rem]">
            ${gameDataObj[props.index].price[0]}
          </label>
          <label className=" text-[0.7rem] lg:text-[1rem] mt-[0.2rem]">
            .{gameDataObj[props.index].price[1]}
          </label>
        </div>
        <div className=" flex mt-2 justify-between">
          <label className=" text-[0.7rem] lg:text-[1rem] text-yellow-500 font-bold">
            In Stock
          </label>
          <button
            onClick={props.delItem}
            className=" mr-4 mt-[-0.3rem] w-[3.5rem] lg:w-[4.3rem] text-[0.7rem] lg:text-[0.8rem] px-2 py-1 rounded-full bg-red-500 cursor-pointer hover:underline"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartListing;
