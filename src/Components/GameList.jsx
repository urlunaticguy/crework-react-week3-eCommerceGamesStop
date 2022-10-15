import React from "react";
import GameListing from "./GameListing";
import gameDataObj from "../Utils/GameData.js";

function GameList(props) {
  return (
    <div className=" flex flex-wrap justify-center text-center align-middle items-center">
      <GameListing
        clickDesc={props.clickMain}
        trackerID={gameDataObj[props.startIndex].id}
        name={gameDataObj[props.startIndex].name}
        price={gameDataObj[props.startIndex].price}
        imgsrc={gameDataObj[props.startIndex].img}
        addToCart={props.cartButtonClick}
      />
      <GameListing
        clickDesc={props.clickMain}
        trackerID={gameDataObj[props.startIndex + 1].id}
        name={gameDataObj[props.startIndex + 1].name}
        price={gameDataObj[props.startIndex + 1].price}
        imgsrc={gameDataObj[props.startIndex + 1].img}
        addToCart={props.cartButtonClick}
      />
      <GameListing
        clickDesc={props.clickMain}
        trackerID={gameDataObj[props.startIndex + 2].id}
        name={gameDataObj[props.startIndex + 2].name}
        price={gameDataObj[props.startIndex + 2].price}
        imgsrc={gameDataObj[props.startIndex + 2].img}
        addToCart={props.cartButtonClick}
      />
      <GameListing
        clickDesc={props.clickMain}
        trackerID={gameDataObj[props.startIndex + 3].id}
        name={gameDataObj[props.startIndex + 3].name}
        price={gameDataObj[props.startIndex + 3].price}
        imgsrc={gameDataObj[props.startIndex + 3].img}
        addToCart={props.cartButtonClick}
      />
      <GameListing
        clickDesc={props.clickMain}
        trackerID={gameDataObj[props.startIndex + 4].id}
        name={gameDataObj[props.startIndex + 4].name}
        price={gameDataObj[props.startIndex + 4].price}
        imgsrc={gameDataObj[props.startIndex + 4].img}
        addToCart={props.cartButtonClick}
      />
    </div>
  );
}

export default GameList;
