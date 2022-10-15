import React from "react";
import HomeImage from "./HomeImage";
import FPSCat from "../Assets/Images/HomePageCategories/fpsCategory.jpeg";
import SportsCat from "../Assets/Images/HomePageCategories/sportsCategory.jpeg";
import TPSCat from "../Assets/Images/HomePageCategories/TPSCategory.jpeg";

function HomePageMain() {
  return (
    <div className=" flex flex-wrap justify-center">
      <HomeImage img={FPSCat} category="First Person" ID="fps" />
      <HomeImage img={SportsCat} category="Sports" ID="sports" />
      <HomeImage img={TPSCat} category="Third Person" ID="tps" />
    </div>
  );
}

export default HomePageMain;
