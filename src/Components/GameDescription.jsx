import React from "react";
import gameDataObj from "../utils/gameData.js";

function GameDescription(props) {
  return (
    <div
      id={gameDataObj[props.indexx].id}
      className=" flex flex-col lg:flex-row lg:flex-wrap justify-center items-center mb-8"
    >
      <div className=" lg:w-[50%] lg:flex lg:justify-end">
        <img
          className=" w-[16rem] h-[16rem] lg:w-[24rem] lg:h-[20rem] border-4 border-white"
          src={gameDataObj[props.indexx].img}
        />
      </div>
      <div className=" flex flex-col text-center lg:text-start lg:ml-8 lg:justify-between lg:h-[18rem] lg:w-[45%]">
        <label className=" text-[1.4rem] mt-2 lg:text-[2rem]">
          {gameDataObj[props.indexx].name}
        </label>
        <label className=" text-[2.5rem] lg:font-semibold text-yellow-500">
          ${gameDataObj[props.indexx].price[0]}.
          {gameDataObj[props.indexx].price[1]}
        </label>
        <button
          onClick={props.cartAdd}
          className=" lg:w-[8rem] cursor-pointer px-2 py-1 mb-2 rounded-lg bg-gradient-to-r from-[#75b022] to-[#588b1a] font-semibold hover:underline"
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
      <div className=" mt-2 px-8 py-4 lg:px-[12.5rem]">
        {gameDataObj[props.indexx].description}
      </div>
    </div>
  );
}

export default GameDescription;
