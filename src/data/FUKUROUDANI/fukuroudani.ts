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
  school: "梟谷学園高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const fukuroudani: PlayerData[] = [
  // 木兎光太郎
  createPlayer(
    "木兎光太郎",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.bokuto,
  ),
  createPlayer(
    "【3周年】木兎光太郎",
    "3周年",
    "WS",
    "チョキ",
    "アイコニック",
    Img.bokuto_3rd,
  ),

  // 小見春樹
  createPlayer(
    "小見春樹",
    "ユニフォーム",
    "Li",
    "パー",
    "アイコニック",
    Img.komi,
  ),

  // 鷲尾辰生
  createPlayer(
    "鷲尾辰生",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    Img.washio,
  ),

  // 赤葦京治
  createPlayer(
    "【3周年】赤葦京治",
    "3周年",
    "S",
    "チョキ",
    "アイコニック",
    Img.akaashi_3rd,
  ),
  createPlayer(
    "【妖】赤葦京治",
    "妖",
    "S",
    "チョキ",
    "スーパーアイコニック",
    Img.akaashi_ayakashi_supericonic,
  ),
];
