import React, { useState, useEffect } from "react";
import HomePageMain from "./HomePageMain";
import GameList from "./GameList";
import Navbar from "./Navbar";
import Cart from "./Cart";
import GameDescription from "./GameDescription";

const cartArray = []; //should not be inside re-render

function Main(props) {
  const [content, setcontent] = useState(props.val);
  const [id, setid] = useState("");
  const [cart, setcart] = useState([]);

  const ids = ["fps", "sports", "tps"];
  const indexes = [0, 5, 10];

  const handleGameInfoClick = (event) => {
    console.log(event.target.parentElement.id);
    const q = parseInt(event.target.parentElement.id);
    setcontent(<GameDescription indexx={q} cartAdd={handleAddToCart} />);
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (event) => {
    const z = parseInt(event.target.parentElement.id);
    let flag = -1;
    for (let i = 0; i < cartArray.length; i += 2) {
      if (cartArray[i] === z) {
        flag = i;
      }
    }
    if (flag !== -1) {
      cartArray[flag + 1]++;
    } else {
      cartArray.push(z);
      cartArray.push(1);
    }
    setid("");
    setcart(cartArray);
  };

  const handleDeleteFromCart = (event) => {
    let deleteIndex = parseInt(
      event.target.parentElement.parentElement.parentElement.id
    );
    const targetInd = cartArray.indexOf(deleteIndex);
    if (cartArray[targetInd + 1] > 1) {
      cartArray[targetInd + 1]--;
    } else {
      cartArray.splice(targetInd, 2);
    }
    setcart(cartArray);
    setcontent(<Cart list={cart} deleteItem={handleDeleteFromCart} />);
    setid("");
  };

  const handleNavbarClickForHome = () => {
    setcontent(<HomePageMain />);
    setid("");
    window.scrollTo(0, 0);
  };

  const handleNavbarClickForCart = () => {
    setcontent(<Cart list={cart} deleteItem={handleDeleteFromCart} />);
    setid("");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const index = indexes[ids.indexOf(id)];
    if (id !== "") {
      setcontent(
        <GameList
          clickMain={handleGameInfoClick}
          startIndex={index}
          cartButtonClick={handleAddToCart}
        />
      );
      window.scrollTo(0, 0);
    }
  }, [id]);

  return (
    <div className="text-white">
      <Navbar
        onClickHome={handleNavbarClickForHome}
        onClickCart={handleNavbarClickForCart}
      />
      <div
        className=" pt-[3.5rem]"
        onClick={(event) => {
          setid(event.target.id);
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default Main;
