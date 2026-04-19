import * as Img from "./index";

import {Category, Class, PlayerData, Position, Type} from "@/types/PlayerData";
import {StaticImageData} from "next/image";

const createPlayer = (
  name: string,
  category: Category,
  position: Position,
  type: Type,
  rarity: Class,
  image: StaticImageData,
): PlayerData => ({
  name: name,
  category: category,
  school: "音駒高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const nekoma: PlayerData[] = [
  createPlayer(
    "黒尾鉄朗",
    "ユニフォーム",
    "MB",
    "グー",
    "アイコニック",
    Img.kuroo,
  ),
];
