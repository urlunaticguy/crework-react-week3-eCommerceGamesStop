import React from "react";
import GameListing from "./GameListing";

function GameList(props) {
  return (
    <div className=" flex flex-wrap justify-center text-center align-middle items-center">
      <GameListing
        clickDesc={props.clickMain}
        indd={props.startIndex}
        addToCart={props.cartButtonClick}
      />
      <GameListing
        clickDesc={props.clickMain}
        indd={props.startIndex + 1}
        addToCart={props.cartButtonClick}
      />
      <GameListing
        clickDesc={props.clickMain}
        indd={props.startIndex + 2}
        addToCart={props.cartButtonClick}
      />
      <GameListing
        clickDesc={props.clickMain}
        indd={props.startIndex + 3}
        addToCart={props.cartButtonClick}
      />
      <GameListing
        clickDesc={props.clickMain}
        indd={props.startIndex + 4}
        addToCart={props.cartButtonClick}
      />
      {/* <GameListing
        clickDesc={props.clickMain}
        indd={props.startIndex + 5}
        addToCart={props.cartButtonClick}
      /> */}
    </div>
  );
}

export default GameList;
