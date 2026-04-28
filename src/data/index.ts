import {PlayerData} from "@/types/PlayerData";
import {karasuno} from "./KARASUNO/karasuno";
import {nekoma} from "./NEKOMA/nekoma";
import {shiratorizawa} from "./SHIRATORIZAWA/shiratorizawa";
import {fukurodani} from "./FUKURODANI/fukurodani";
import {kamomedai} from "./KAMOMEDAI/kamomedai";
import {dateko} from "./DATEKO/dateko";
import {seijoh} from "./SEIJOH/seijoh";
import {tokonami} from "./TOKONAMI/tokonami";

export const PLAYER_LIST: PlayerData[] = [
  ...karasuno, // 烏野
  ...nekoma, // 音駒
  ...dateko, // 伊達工
  ...seijoh, // 青葉城西
  ...tokonami, // 常波
  ...shiratorizawa, // 白鳥沢
  ...fukurodani, // 梟谷
  ...kamomedai, // 鴎台
];

// createPlayer(
//     "【】",
//     "",
//     "",
//     "チョキ",
//     "アイコニック",
//     Img.,
//   ),

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

// export const : PlayerData[] = [];
