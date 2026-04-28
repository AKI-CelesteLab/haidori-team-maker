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
  school: "常波高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const tokonami: PlayerData[] = [
  // 駒木輝
  createPlayer(
    "駒木輝",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    Img.komaki,
  ),
  createPlayer(
    "駒木輝",
    "ユニフォーム",
    "WS",
    "グー",
    "スーパーアイコニック",
    Img.komaki_supericonic,
  ),

  // 茶屋和馬
  createPlayer(
    "茶屋和馬",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    Img.chaya,
  ),

  // 玉川弘樹
  createPlayer(
    "玉川弘樹",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.tamagawa,
  ),

  // 桜井大河
  createPlayer(
    "桜井大河",
    "ユニフォーム",
    "Li",
    "パー",
    "アイコニック",
    Img.sakurai,
  ),

  // 芳賀良治
  createPlayer(
    "芳賀良治",
    "ユニフォーム",
    "S",
    "パー",
    "アイコニック",
    Img.haga,
  ),

  // 渋谷陸斗
  createPlayer(
    "渋谷陸斗",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    Img.shibuya,
  ),

  // 池尻隼人
  createPlayer(
    "池尻隼人",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.ikejiri,
  ),
  createPlayer(
    "【文化祭2】池尻隼人",
    "文化祭2",
    "WS",
    "チョキ",
    "アイコニック",
    Img.ikejiri_culturefestival2,
  ),
  createPlayer(
    "【遊園地】池尻隼人",
    "遊園地",
    "WS",
    "グー",
    "アイコニック",
    Img.ikejiri_amusementpark,
  ),
];
