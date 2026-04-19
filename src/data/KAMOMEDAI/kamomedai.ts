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
  school: "鴎台高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const kamomedai: PlayerData[] = [
  // 星海光来
  createPlayer(
    "【格ゲー】星海光来",
    "格ゲー",
    "WS",
    "パー",
    "アイコニック",
    Img.hoshiumi_fightinggame,
  ),
];
