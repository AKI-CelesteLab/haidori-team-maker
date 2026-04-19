import {PlayerData} from "@/types/PlayerData";
import {karasuno} from "./KARASUNO/karasuno";
import {nekoma} from "./NEKOMA/nekoma";
import {shiratorizawa} from "./SHIRATORIZAWA/shiratorizawa";
import {fukuroudani} from "./FUKUROUDANI/fukuroudani";
import {kamomedai} from "./KAMOMEDAI/kamomedai";

export const PLAYER_LIST: PlayerData[] = [
  ...karasuno,
  ...nekoma,
  ...shiratorizawa,
  ...fukuroudani,
  ...kamomedai,
];

// import * as Img from "./index";

// import {Category, Class, PlayerData, Position, Type} from "@/types/PlayerData";
// import {StaticImageData} from "next/image";

// const createPlayer = (
//   name: string,
//   category: Category,
//   position: Position,
//   type: Type,
//   rarity: Class,
//   image: StaticImageData,
// ): PlayerData => ({
//   name: name,
//   category: category,
//   school: "",
//   position: position,
//   type: type,
//   class: rarity,
//   image: image,
// });
