import React from "react";

function HomeImage(props) {
  return (
    <div className=" border-2 border-white flex flex-col justify-center items-center mb-4">
      <img
        className=" w-[16rem] h-[12rem] p-2 blur-[2px] opacity-80"
        src={props.img}
      ></img>
      <button
        id={props.ID}
        className=" absolute w-fit px-4 h-[2.5rem] border-2 border-white text-white bg-zinc-900 rounded-full cursor-pointer"
      >
        {props.category}
      </button>
    </div>
  );
}

export default HomeImage;
