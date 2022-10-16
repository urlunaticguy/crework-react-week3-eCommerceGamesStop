import React from "react";
import gameDataObj from "../Utils/GameData";

function GameListing(props) {
  return (
    <div
      id={gameDataObj[props.indd].id}
      className=" pointer-events-none pt-8 pb-6 border-t-2 border-sky-300 bg-gradient-to-b from-black via-sky-900 to-black text-white p-2 w-[100%] flex flex-col items-center"
    >
      <img
        onClick={props.clickDesc}
        className=" pointer-events-auto cursor-pointer w-[14rem] h-[14rem] lg:w-[26rem] lg:h-[20rem] mb-2 rounded-lg border-[3px] border-sky-500"
        src={gameDataObj[props.indd].img}
      />
      <h1
        onClick={props.clickDesc}
        className=" pointer-events-auto cursor-pointer font-bold text-white"
      >
        {gameDataObj[props.indd].name}
      </h1>
      <h2 onClick={props.clickDesc} className=" pointer-events-auto">
        ${gameDataObj[props.indd].price[0]}.{gameDataObj[props.indd].price[1]}
      </h2>
      <button
        onClick={props.addToCart}
        className=" pointer-events-auto cursor-pointer mt-[0.7rem] px-[0.7rem] py-[0.3rem] rounded-lg bg-gradient-to-r from-[#75b022] to-[#588b1a] font-semibold hover:underline"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default GameListing;
