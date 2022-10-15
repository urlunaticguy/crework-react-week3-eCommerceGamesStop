//hardcoding game data and images here in object

import CODMWImage from "../Assets/Images/GamesFPS/CODMW.jpeg";
import BattlefieldFive from "../Assets/Images/GamesFPS/BattlefieldFive.jpeg";
import MedalOfHonor from "../Assets/Images/GamesFPS/MOH.jpeg";
import IGITwo from "../Assets/Images/GamesFPS/IGITwo.jpeg";
import BattleField2042 from "../Assets/Images/GamesFPS/Battlefield2042.webp";
import GTAFive from "../Assets/Images/GamesTPS/GTA5.jpeg";
import WatchDogsTwo from "../Assets/Images/GamesTPS/WatchDogsTwo.png";
import LANoire from "../Assets/Images/GamesTPS/LANoire.jpeg";
import RDRTwo from "../Assets/Images/GamesTPS/RDRTwo.jpg";
import MafiaTwo from "../Assets/Images/GamesTPS/MafiaTwo.jpeg";
import FIFATwentyThree from "../Assets/Images/GamesSports/fifa23.png";
import NBATwoK from "../Assets/Images/GamesSports/NBA2k22.jpeg";
import WWETwoK from "../Assets/Images/GamesSports/WWE2k22.png";
import EFootballTT from "../Assets/Images/GamesSports/eFootball22.jpeg";
import DBCricket from "../Assets/Images/GamesSports/DBCricket.webp";

const gameDataObj = [
  //FPS start from 0
  {
    id: 0,
    name: "COD Modern Warfare",
    price: ["19", "99"],
    img: CODMWImage,
    dev: "Infinity Ward",
    year: "2007",
  },
  {
    id: 1,
    name: "Battlefield 2042",
    price: ["29", "99"],
    img: BattleField2042,
    dev: "DICE",
    year: "2021",
  },
  {
    id: 2,
    name: "Medal of Honor",
    price: ["14", "99"],
    img: MedalOfHonor,
    dev: "Danger Close Games",
    year: "2010",
  },
  {
    id: 3,
    name: "IGI 2 - Covert Strike",
    price: ["16", "99"],
    img: IGITwo,
    dev: "Innerloop Studios",
    year: "2003",
  },
  {
    id: 4,
    name: "Battlefield 5",
    price: ["24", "99"],
    img: BattlefieldFive,
    dev: "DICE",
    year: "2018",
  },
  //Sports start from 5
  {
    id: 5,
    name: "FIFA 23",
    price: ["29", "99"],
    img: FIFATwentyThree,
    dev: "EA Sports",
    year: "2022",
  },
  {
    id: 6,
    name: "NBA 2k22",
    price: ["24", "99"],
    img: NBATwoK,
    dev: "Visual Concepts",
    year: "2021",
  },
  {
    id: 7,
    name: "WWE 2k22",
    price: ["19", "99"],
    img: WWETwoK,
    dev: "Visual Concepts",
    year: "2022",
  },
  {
    id: 8,
    name: "eFootball 2022",
    price: ["34", "99"],
    img: EFootballTT,
    dev: "Konami",
    year: "2021",
  },
  {
    id: 9,
    name: "Don Bradman Cricket 17",
    price: ["14", "99"],
    img: DBCricket,
    dev: "Big Ant Studios",
    year: "2016",
  },
  //TPS start from 10
  {
    id: 10,
    name: "Grand Theft Auto 5",
    price: ["49", "99"],
    img: GTAFive,
    dev: "Rockstar Games",
    year: "2013",
  },
  {
    id: 11,
    name: "Watch Dogs 2",
    price: ["34", "99"],
    img: WatchDogsTwo,
    dev: "Ubisoft Montreal",
    year: "2016",
  },
  {
    id: 12,
    name: "L.A.Noire",
    price: ["19", "99"],
    img: LANoire,
    dev: "Team Bondi",
    year: "2011",
  },
  {
    id: 13,
    name: "Red Dead Redemption II",
    price: ["44", "99"],
    img: RDRTwo,
    dev: "Rockstar Games",
    year: "2018",
  },
  {
    id: 14,
    name: "Mafia II",
    price: ["14", "99"],
    img: MafiaTwo,
    dev: "2K Czech",
    year: "2010",
  },
];

export default gameDataObj;
