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
  school: "条善寺高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const jozenji: PlayerData[] = [
  // 照島遊児
  createPlayer(
    "照島遊児",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.terushima,
  ),
  createPlayer(
    "【制服】照島遊児",
    "制服",
    "WS",
    "チョキ",
    "アイコニック",
    Img.terushima_uniform,
  ),
  createPlayer(
    "【雪遊び】照島遊児",
    "雪遊び",
    "WS",
    "グー",
    "アイコニック",
    Img.terushima_playingsnow,
  ),
  createPlayer(
    "【スパイ】照島遊児",
    "スパイ",
    "WS",
    "パー",
    "アイコニック",
    Img.terushima_spy,
  ),
  createPlayer(
    "【妖】照島遊児",
    "妖",
    "WS",
    "チョキ",
    "アイコニック",
    Img.terushima_ayakashi,
  ),

  // 母畑和馬
  createPlayer(
    "母畑和馬",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    Img.bobata,
  ),
  createPlayer(
    "【アート2】母畑和馬",
    "アート2",
    "MB",
    "パー",
    "アイコニック",
    Img.bobata_art2,
  ),
  createPlayer(
    "【アート2】母畑和馬",
    "アート2",
    "MB",
    "パー",
    "スーパーアイコニック",
    Img.bobata_art2_supericonic,
  ),

  // 二岐丈春
  createPlayer(
    "二岐丈春",
    "ユニフォーム",
    "S",
    "グー",
    "アイコニック",
    Img.futamata,
  ),
  createPlayer(
    "【制服】二岐丈春",
    "制服",
    "S",
    "パー",
    "アイコニック",
    Img.futamata_uniform,
  ),

  // 沼尻凛太郎
  createPlayer(
    "沼尻凛太郎",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    Img.numajiri,
  ),

  // 飯坂信義
  createPlayer(
    "津坂信義",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    Img.iizaka,
  ),

  // 東山勝道
  createPlayer(
    "東山勝道",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.higashiyama,
  ),

  // 土湯新
  createPlayer(
    "土湯新",
    "ユニフォーム",
    "Li",
    "パー",
    "アイコニック",
    Img.tsuchiyu,
  ),
];
