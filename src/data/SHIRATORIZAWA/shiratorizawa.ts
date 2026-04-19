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
  school: "白鳥沢学園高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const shiratorizawa: PlayerData[] = [
  // 牛島若利
  createPlayer(
    "【3周年】牛島若利",
    "3周年",
    "WS",
    "チョキ",
    "アイコニック",
    Img.ushijima_3rd,
  ),

  // 白布賢二郎
  createPlayer(
    "【3周年】白布賢二郎",
    "3周年",
    "S",
    "グー",
    "アイコニック",
    Img.shirabu_3rd,
  ),
];
