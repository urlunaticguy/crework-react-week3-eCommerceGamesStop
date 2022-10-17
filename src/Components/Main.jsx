import React, { useState, useEffect } from "react";
import HomePageMain from "./HomePageMain";
import GameList from "./GameList";
import Navbar from "./Navbar";
import Cart from "./Cart";
import GameDescription from "./GameDescription";

const cartArray = []; //should not be inside re-render
let zcounter = 0;

function Main(props) {
  const [content, setcontent] = useState(props.val);
  const [idd, setid] = useState("");
  const [cart, setcart] = useState([]);
  const [cartCount, setcartcount] = useState();

  const ids = ["fps", "sports", "tps"];
  const indexes = [0, 6, 11];

  let ycounter = cartCount;

  const handleGameInfoClick = (event) => {
    const q = parseInt(event.target.parentElement.id);
    setcontent(<GameDescription indexx={q} cartAdd={handleAddToCart} />);
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (event) => {
    event.target.innerHTML = "Added";
    event.target.classList.remove(
      "bg-gradient-to-r",
      "from-[#75b022]",
      "to-[#588b1a]",
      "pointer-events-auto"
    );
    event.target.classList.add("bg-blue-700", "pointer-events-none");
    setTimeout(() => {
      event.target.innerHTML = "Add to Cart";
      event.target.classList.remove("bg-blue-700", "pointer-events-none");
      event.target.classList.add(
        "bg-gradient-to-r",
        "from-[#75b022]",
        "to-[#588b1a]",
        "pointer-events-auto"
      );
    }, 1100);
    let z = parseInt(event.target.parentElement.id);
    if (isNaN(z)) {
      z = parseInt(event.target.parentElement.parentElement.id);
    }
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
    zcounter++;
    setcartcount(zcounter);
    setid("");
    setcart(cartArray);
  };

  const handleDeleteFromCart = (event) => {
    let deleteIndex = parseInt(
      event.target.parentElement.parentElement.parentElement.id
    );
    let targetInd = 0;
    for (let ii = 0; ii < cartArray.length; ii += 2) {
      if (cartArray[ii] === deleteIndex) {
        targetInd = ii;
      }
    }
    if (cartArray[targetInd + 1] > 1) {
      cartArray[targetInd + 1]--;
    } else {
      cartArray.splice(targetInd, 2);
    }
    ycounter--;
    if (ycounter === 0) {
      ycounter = undefined;
      zcounter = 0;
    }
    setcartcount(ycounter);
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
    const index = indexes[ids.indexOf(idd)];
    if (idd !== "") {
      setcontent(
        <GameList
          clickMain={handleGameInfoClick}
          startIndex={index}
          cartButtonClick={handleAddToCart}
        />
      );
      window.scrollTo(0, 0);
    }
  }, [idd]);

  return (
    <div className="text-white">
      <Navbar
        onClickHome={handleNavbarClickForHome}
        onClickCart={handleNavbarClickForCart}
        cartItemsCount={cartCount}
      />
      <div
        className=" pt-[3.5rem] lg:pt-[7rem]"
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
