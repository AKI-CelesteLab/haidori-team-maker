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
  school: "烏野高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const karasuno: PlayerData[] = [
  // 日向翔陽
  createPlayer(
    "日向翔陽",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    Img.hinata,
  ),
  createPlayer(
    "【制服】日向翔陽",
    "制服",
    "MB",
    "チョキ",
    "アイコニック",
    Img.hinata_uniform,
  ),
  createPlayer(
    "【夏祭り】日向翔陽",
    "夏祭り",
    "MB",
    "グー",
    "アイコニック",
    Img.hinata_summerfestival,
  ),
  createPlayer(
    "【１周年】日向翔陽",
    "１周年",
    "MB",
    "パー",
    "アイコニック",
    Img.hinata_1st,
  ),
  createPlayer(
    "【王冠】日向翔陽",
    "王冠",
    "MB",
    "チョキ",
    "アイコニック",
    Img.hinata_crown,
  ),
  createPlayer(
    "【ジャージ】日向翔陽",
    "ジャージ",
    "MB",
    "グー",
    "アイコニック",
    Img.hinata_jersey,
  ),
  createPlayer(
    "【遊園地】日向翔陽",
    "遊園地",
    "MB",
    "パー",
    "アイコニック",
    Img.hinata_amusementpark,
  ),
  createPlayer(
    "【ハロウィン】日向翔陽",
    "ハロウィン",
    "MB",
    "チョキ",
    "アイコニック",
    Img.hinata_halloween,
  ),
  createPlayer(
    "【和装体験】日向翔陽",
    "和装体験",
    "MB",
    "グー",
    "アイコニック",
    Img.hinata_wasoutaiken,
  ),
  createPlayer(
    "【格ゲー】日向翔陽",
    "格ゲー",
    "MB",
    "パー",
    "アイコニック",
    Img.hinata_fightinggame,
  ),
  createPlayer(
    "日向翔陽",
    "ユニフォーム",
    "MB",
    "チョキ",
    "スーパーアイコニック",
    Img.hinata_supericonic,
  ),
  createPlayer(
    "【王冠】日向翔陽",
    "王冠",
    "MB",
    "チョキ",
    "スーパーアイコニック",
    Img.hinata_crown_supericonic,
  ),

  // 影山飛雄
  createPlayer(
    "影山飛雄",
    "ユニフォーム",
    "S",
    "チョキ",
    "アイコニック",
    Img.kageyama,
  ),
  createPlayer(
    "【制服】影山飛雄",
    "制服",
    "S",
    "チョキ",
    "アイコニック",
    Img.kageyama_uniform,
  ),
  createPlayer(
    "【夏祭り】影山飛雄",
    "夏祭り",
    "S",
    "グー",
    "アイコニック",
    Img.kageyama_summerfestival,
  ),
  createPlayer(
    "【Xmas】影山飛雄",
    "Xmas",
    "S",
    "パー",
    "アイコニック",
    Img.kageyama_xmas,
  ),
  createPlayer(
    "【１周年】影山飛雄",
    "１周年",
    "S",
    "チョキ",
    "アイコニック",
    Img.kageyama_1st,
  ),
  createPlayer(
    "【王冠】影山飛雄",
    "王冠",
    "S",
    "グー",
    "アイコニック",
    Img.kageyama_crown,
  ),
  createPlayer(
    "【ジャージ】影山飛雄",
    "ジャージ",
    "S",
    "パー",
    "アイコニック",
    Img.kageyama_jersey,
  ),
  createPlayer(
    "【２周年】影山飛雄",
    "２周年",
    "S",
    "チョキ",
    "アイコニック",
    Img.kageyama_2nd,
  ),
  createPlayer(
    "【中学生】影山飛雄",
    "中学生",
    "S",
    "グー",
    "アイコニック",
    Img.kageyama_middleschool,
  ),
  createPlayer(
    "【文化祭３】影山飛雄",
    "文化祭３",
    "S",
    "パー",
    "アイコニック",
    Img.kageyama_culturefestival3,
  ),
  createPlayer(
    "【格ゲー】影山飛雄",
    "格ゲー",
    "S",
    "チョキ",
    "アイコニック",
    Img.kageyama_fightinggame,
  ),
  createPlayer(
    "【王冠】影山飛雄",
    "王冠",
    "S",
    "グー",
    "スーパーアイコニック",
    Img.kageyama_crown_supericonic,
  ),

  // 月島蛍
  createPlayer(
    "月島蛍",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    Img.tsukishima,
  ),

  // 山口忠
  createPlayer(
    "山口忠",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    Img.yamaguchi,
  ),

  // 西谷夕
  createPlayer(
    "西谷夕",
    "ユニフォーム",
    "Li",
    "チョキ",
    "アイコニック",
    Img.nishinoya,
  ),

  // 田中龍之介
  createPlayer(
    "田中龍之介",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.tanaka,
  ),

  // 澤村大地
  createPlayer(
    "澤村大地",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.sawamura,
  ),

  // 菅原孝支
  createPlayer(
    "菅原孝支",
    "ユニフォーム",
    "S",
    "パー",
    "アイコニック",
    Img.sugawara,
  ),

  // 東峰旭
  createPlayer(
    "東峰旭",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.azumane,
  ),

  // 縁下力
  createPlayer(
    "縁下力",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.ennoshita,
  ),

  // 木下久志
  createPlayer(
    "木下久志",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.kinoshita,
  ),

  // 成田一仁
  createPlayer(
    "成田一仁",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    Img.narita,
  ),

  // 清水潔子
  createPlayer(
    "【格ゲー】清水潔子",
    "格ゲー",
    "MB",
    "グー",
    "アイコニック",
    Img.shimizu_fightinggame,
  ),

  // 谷地仁花
  createPlayer(
    "【格ゲー】谷地仁花",
    "格ゲー",
    "MB",
    "グー",
    "アイコニック",
    Img.yachi_fightinggame,
  ),
];
