import React from "react";
import gameDataObj from "../Utils/GameData.js";

function GameDescription(props) {
  return (
    <div
      id={gameDataObj[props.indexx].id}
      className=" flex flex-col justify-center items-center mb-8"
    >
      <img
        className=" w-[15rem] h-[15rem] border-4 border-white"
        src={gameDataObj[props.indexx].img}
      />
      <label className=" text-[1.4rem] mt-2">
        {gameDataObj[props.indexx].name}
      </label>
      <label className=" text-[2.5rem]">
        ${gameDataObj[props.indexx].price[0]}.
        {gameDataObj[props.indexx].price[1]}
      </label>
      <button
        onClick={props.cartAdd}
        className=" cursor-pointer px-2 py-1 mb-2 rounded-lg bg-gradient-to-r from-[#75b022] to-[#588b1a] font-semibold"
      >
        Add to Cart
      </button>
      <label className=" text-[0.9rem]">
        Developer : {gameDataObj[props.indexx].dev}
      </label>
      <label className=" text-[0.9rem]">
        Year : {gameDataObj[props.indexx].year}
      </label>
    </div>
  );
}

export default GameDescription;
