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
  school: "生川高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const ubugawa: PlayerData[] = [
  // 強羅昌己
  createPlayer(
    "強羅昌己",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    Img.gora,
  ),

  // 芦谷洋平
  createPlayer(
    "芦谷洋平",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.ashiya,
  ),

  // 仙石伸吾
  createPlayer(
    "仙石伸吾",
    "ユニフォーム",
    "MB",
    "グー",
    "アイコニック",
    Img.sengoku,
  ),

  // 中川俊美
  createPlayer(
    "中川俊美",
    "ユニフォーム",
    "Li",
    "グー",
    "アイコニック",
    Img.nakagawa,
  ),

  // 七沢健吾
  createPlayer(
    "七沢健吾",
    "ユニフォーム",
    "S",
    "グー",
    "アイコニック",
    Img.nanasawa,
  ),

  // 伊勢原裕次
  createPlayer(
    "伊勢原裕次",
    "ユニフォーム",
    "MB",
    "グー",
    "アイコニック",
    Img.isehara,
  ),

  // 湯河浩二
  createPlayer(
    "湯河浩二",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    Img.yukawa,
  ),
];
