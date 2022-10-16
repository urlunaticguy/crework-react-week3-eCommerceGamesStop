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
import CODMWTwoImage from "../Assets/Images/GamesFPS/CODMWTwo.jpeg";

const gameDataObj = [
  //FPS start from 0
  {
    id: 0,
    name: "COD Modern Warfare",
    price: ["19", "99"],
    img: CODMWImage,
    dev: "Infinity Ward",
    year: "2007",
    description:
      "The story takes place in the year of 2011, where a radical leader has executed the president of an unnamed country in the Middle East, and an ultranationalist movement ignites a civil war in Russia. The conflicts are seen from the perspectives of a U.S. Marine Force Recon sergeant and a British SAS commando and are set in various locales, such as the United Kingdom, the Middle East, Azerbaijan, Russia, and Ukraine.",
  },
  {
    id: 1,
    name: "Battlefield 2042",
    price: ["29", "99"],
    img: BattleField2042,
    dev: "DICE",
    year: "2021",
    description:
      "Battlefield 2042 does not have a single-player campaign. Instead, the story is told through multiplayer gameplay. Decades of devastation caused by collapsing economies, rising sea levels and broken alliances (including the collapse of the European Union due to Germany's bankruptcy and subsequent refugees known as No-Pats) come to a peak in 2040 when a Kessler syndrome event occurs, causing 70% of orbiting satellites to crash to Earth. The resulting permanent global blackout causes tensions between the United States and Russia to skyrocket, with war breaking out by the year 2042.",
  },
  {
    id: 2,
    name: "Medal of Honor",
    price: ["14", "99"],
    img: MedalOfHonor,
    dev: "Danger Close Games",
    year: "2010",
    description:
      "The story begins in late 2001 during the opening days of the invasion of Afghanistan. AFO Neptune, composed of Tier 1 DEVGRU SEALs codenamed Mother, Voodoo, Preacher, and Rabbit, are sent to meet with an Afghan informant named Tariq who has intelligence on the Taliban. Neptune is ambushed by Chechen jihadists, and fights their way through the village to recover Tariq. He informs them that the Taliban and Al-Qaeda have a significant force of 500 to 1,000 combatants in the Shah-i-Kot Valley. Before dealing with them, though, Neptune is tasked to secure Bagram Airfield with a contingent from the ANA.",
  },
  {
    id: 3,
    name: "IGI 2 - Covert Strike",
    price: ["16", "99"],
    img: IGITwo,
    dev: "Innerloop Studios",
    year: "2003",
    description:
      "The game's protagonist, David Jones,[2] an agent working for the Institute for Geotactical Intelligence and former British SAS operator,[3] was sent to the Carpathian mountains to recover a set of prototype EMP chips stolen by a group of Russian mafia from a high-tech US facility.",
  },
  {
    id: 4,
    name: "Battlefield 5",
    price: ["24", "99"],
    img: BattlefieldFive,
    dev: "DICE",
    year: "2018",
    description:
      "As in Battlefield 1, the single-player campaign is divided into an introduction followed by episodic War Stories, three of which were available at launch: Nordlys takes place from the point-of-view of a Norwegian resistance fighter taking part in the sabotage of the German nuclear program, Tirailleur tells the story of a Senegalese Tirailleur during Operation Dragoon, and Under No Flag puts the player in the shoes of Billy Bridger, a convicted bank robber and explosives expert conscripted into the Special Boat Service to take part in Operation Albumen. The fourth campaign, The Last Tiger, was released on December 5, 2018, which depicts the struggles of a German Tiger I tank crew during the Ruhr Pocket in the closing days of the war.",
  },
  {
    id: 5,
    name: "COD Modern Warfare 2",
    price: ["27", "99"],
    img: CODMWTwoImage,
    dev: "Infinity Ward",
    year: "2009",
    description:
      "During the single-player campaign, the player controls five different characters from a first-person perspective. The player primarily controls Sergeant Gary Roach Sanderson, a British member of an international special forces unit named Task Force 141. In addition to Roach, the player will also assume control of Private First Class Joseph Allen (Troy Baker) and Private James Ramirez of the U.S. Army's 1st Battalion/75th Ranger Regiment. The now Captain John Soap MacTavish (Kevin McKidd) serves as a senior member of Task Force 141, acting as Roach's superior officer and becomes the playable character in the final three missions of the game. Lastly, the player briefly assumes the role of an astronaut stationed on the International Space Station during the height of the war between the United States and Russia.",
  },
  //Sports start from 6
  {
    id: 6,
    name: "FIFA 23",
    price: ["29", "99"],
    img: FIFATwentyThree,
    dev: "EA Sports",
    year: "2022",
    description:
      "FIFA 23 is a football simulation video game published by Electronic Arts. It is the 30th and final installment in the FIFA series that is developed by EA Sports, and released worldwide on 30 September 2022 for PC, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S and Google Stadia.",
  },
  {
    id: 7,
    name: "NBA 2k22",
    price: ["24", "99"],
    img: NBATwoK,
    dev: "Visual Concepts",
    year: "2021",
    description:
      "NBA 2K22 is a 2021 basketball video game developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association (NBA). It is the 23rd installment in the NBA 2K franchise, the successor to NBA 2K21 and the predecessor to NBA 2K23. The game was released on September 10, 2021 for Microsoft Windows, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S.",
  },
  {
    id: 8,
    name: "WWE 2k22",
    price: ["19", "99"],
    img: WWETwoK,
    dev: "Visual Concepts",
    year: "2022",
    description:
      "WWE 2K22 is a 2022 professional wrestling sports video game developed by Visual Concepts and published by 2K Sports. It is the twenty-second overall installment of the video game series based on WWE, the ninth game under the WWE 2K banner, and the successor to 2019's WWE 2K20. It was released on March 11, 2022, for PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S.",
  },
  {
    id: 9,
    name: "eFootball 2022",
    price: ["34", "99"],
    img: EFootballTT,
    dev: "Konami",
    year: "2021",
    description:
      "eFootball is an association football simulation video game developed and published by Konami. It is a free-to-play game after being completely rebranded from the original Pro Evolution Soccer (known as Winning Eleven in Japan) series to the eFootball series. The game's first year, entitled eFootball 2022, was released on 30 September 2021. It was later changed to the game's second year, eFootball 2023, on August 25, 2022. This game is part of IESF World Championship and North and Eastern Europa League (NEEC).",
  },
  {
    id: 10,
    name: "Don Bradman Cricket 17",
    price: ["14", "99"],
    img: DBCricket,
    dev: "Big Ant Studios",
    year: "2016",
    description:
      "Don Bradman Cricket 17 (DBC 17) is a cricket video game developed by Big Ant Studios. It is the sequel to Don Bradman Cricket 14 and was released on 16 December 2016 for PlayStation 4, Xbox One, and on 16 January 2017 for Microsoft Windows. It was officially announced on 28 May 2016, by Big Ant Studios.",
  },
  //TPS start from 11
  {
    id: 11,
    name: "Grand Theft Auto 5",
    price: ["49", "99"],
    img: GTAFive,
    dev: "Rockstar Games",
    year: "2013",
    description:
      "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world. Composed of the San Andreas open countryside area, including the fictional Blaine County, and the fictional city of Los Santos, the world is much larger in area than earlier entries in the series. It may be fully explored after the game's beginning without restriction, although story progress unlocks more gameplay content.",
  },
  {
    id: 12,
    name: "Watch Dogs 2",
    price: ["34", "99"],
    img: WatchDogsTwo,
    dev: "Ubisoft Montreal",
    year: "2016",
    description:
      "Watch Dogs 2 is an action-adventure game with stealth elements and played from a third-person perspective as Marcus Holloway, a young hacker. The game features an open world set in a fictionalized version of the San Francisco Bay Area, an area more than twice as large as the Chicagoland setting from Watch Dogs. It consists of four different areas: San Francisco, Oakland, Marin, and Silicon Valley. Players can navigate the game's world on-foot or by the various vehicles featured in the game, such as cars, trucks, buses, cable cars, motorcycles, quad bikes, and boats.",
  },
  {
    id: 13,
    name: "L.A.Noire",
    price: ["19", "99"],
    img: LANoire,
    dev: "Team Bondi",
    year: "2011",
    description:
      "L.A. Noire is an action-adventure neo-noir crime game. Played from a third-person perspective, the game is set in an open-world environment featuring Los Angeles in 1947. The player completes cases to progress through the story, fulfilling objectives in a generally linear order; as they roam the open world, the player can also complete optional street crimes—short, linear scenarios with set objectives—and collect items such as golden film reels, vehicles, novels, and golden records.",
  },
  {
    id: 14,
    name: "Red Dead Redemption II",
    price: ["44", "99"],
    img: RDRTwo,
    dev: "Rockstar Games",
    year: "2018",
    description:
      "Red Dead Redemption 2 is a Western-themed action-adventure game. Played from a first or third-person perspective, the game is set in an open-world environment featuring a fictionalized version of the Western, Midwestern, and Southern United States in 1899, during the latter half of the Wild West era and the turn of the twentieth century.",
  },
  {
    id: 15,
    name: "Mafia II",
    price: ["14", "99"],
    img: MafiaTwo,
    dev: "2K Czech",
    year: "2010",
    description:
      "Mafia II is an action-adventure game set in an open world environment and played from a third-person perspective. Most of the game is set in the fictional city of Empire Bay, based on New York City, Chicago, San Francisco, Los Angeles, Boston, and Detroit, during the mid-1940s and early 1950s.",
  },
];

export default gameDataObj;
