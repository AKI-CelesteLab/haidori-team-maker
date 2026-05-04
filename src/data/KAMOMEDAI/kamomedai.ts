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
    "星海光来",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.hoshiumi,
  ),
  createPlayer(
    "【文化祭】星海光来",
    "文化祭",
    "WS",
    "グー",
    "アイコニック",
    Img.hoshiumi_culturefestival,
  ),
  createPlayer(
    "【サバゲ】星海光来",
    "サバゲ",
    "WS",
    "パー",
    "アイコニック",
    Img.hoshiumi_survivalgame,
  ),
  createPlayer(
    "【花火】星海光来",
    "花火",
    "WS",
    "チョキ",
    "アイコニック",
    Img.hoshiumi_fireworks,
  ),
  createPlayer(
    "【新年2】星海光来",
    "新年2",
    "WS",
    "グー",
    "アイコニック",
    Img.hoshiumi_newyear2,
  ),
  createPlayer(
    "【格ゲー】星海光来",
    "格ゲー",
    "WS",
    "パー",
    "アイコニック",
    Img.hoshiumi_fightinggame,
  ),

  // 昼神幸郎
  createPlayer(
    "昼神幸郎",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    Img.hirugami,
  ),
  createPlayer(
    "【Xmas】昼神幸郎",
    "Xmas",
    "MB",
    "グー",
    "アイコニック",
    Img.hirugami_xmas,
  ),
  createPlayer(
    "【職業体験2】昼神幸郎",
    "職業体験2",
    "MB",
    "パー",
    "アイコニック",
    Img.hirugami_jobshadowing2,
  ),
  createPlayer(
    "【寝正月】昼神幸郎",
    "寝正月",
    "MB",
    "チョキ",
    "アイコニック",
    Img.hirugami_lyinglow,
  ),
];
