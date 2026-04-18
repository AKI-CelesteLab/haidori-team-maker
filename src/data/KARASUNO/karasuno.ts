import {StaticImageData} from "next/image";
import * as KarasunoImg from "./index";

import {Category, Class, PlayerData, Position, Type} from "@/types/PlayerData";

const createKarasunoPlayer = (
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
  createKarasunoPlayer(
    "日向翔陽",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    KarasunoImg.hinata,
  ),
  createKarasunoPlayer(
    "【制服】日向翔陽",
    "制服",
    "MB",
    "チョキ",
    "アイコニック",
    KarasunoImg.hinata_uniform,
  ),
  createKarasunoPlayer(
    "【夏祭り】日向翔陽",
    "夏祭り",
    "MB",
    "グー",
    "アイコニック",
    KarasunoImg.hinata_summerfestival,
  ),
  createKarasunoPlayer(
    "【１周年】日向翔陽",
    "１周年",
    "MB",
    "パー",
    "アイコニック",
    KarasunoImg.hinata_1st,
  ),
  createKarasunoPlayer(
    "【王冠】日向翔陽",
    "王冠",
    "MB",
    "チョキ",
    "アイコニック",
    KarasunoImg.hinata_crown,
  ),
  createKarasunoPlayer(
    "【ジャージ】日向翔陽",
    "ジャージ",
    "MB",
    "グー",
    "アイコニック",
    KarasunoImg.hinata_jersey,
  ),
  createKarasunoPlayer(
    "【遊園地】日向翔陽",
    "遊園地",
    "MB",
    "パー",
    "アイコニック",
    KarasunoImg.hinata_amusementpark,
  ),
  createKarasunoPlayer(
    "【ハロウィン】日向翔陽",
    "ハロウィン",
    "MB",
    "チョキ",
    "アイコニック",
    KarasunoImg.hinata_halloween,
  ),
  createKarasunoPlayer(
    "【和装体験】日向翔陽",
    "和装体験",
    "MB",
    "グー",
    "アイコニック",
    KarasunoImg.hinata_wasoutaiken,
  ),
  createKarasunoPlayer(
    "【格ゲー】日向翔陽",
    "格ゲー",
    "MB",
    "パー",
    "アイコニック",
    KarasunoImg.hinata_fightinggame,
  ),
  createKarasunoPlayer(
    "日向翔陽",
    "ユニフォーム",
    "MB",
    "チョキ",
    "スーパーアイコニック",
    KarasunoImg.hinata_supericonic,
  ),
  createKarasunoPlayer(
    "【王冠】日向翔陽",
    "王冠",
    "MB",
    "チョキ",
    "スーパーアイコニック",
    KarasunoImg.hinata_crown_supericonic,
  ),

  // 影山飛雄
  createKarasunoPlayer(
    "影山飛雄",
    "ユニフォーム",
    "S",
    "チョキ",
    "アイコニック",
    KarasunoImg.kageyama,
  ),
  createKarasunoPlayer(
    "【制服】影山飛雄",
    "制服",
    "S",
    "チョキ",
    "アイコニック",
    KarasunoImg.kageyama_uniform,
  ),
  createKarasunoPlayer(
    "【夏祭り】影山飛雄",
    "夏祭り",
    "S",
    "グー",
    "アイコニック",
    KarasunoImg.kageyama_summerfestival,
  ),
  createKarasunoPlayer(
    "【Xmas】影山飛雄",
    "Xmas",
    "S",
    "パー",
    "アイコニック",
    KarasunoImg.kageyama_xmas,
  ),
  createKarasunoPlayer(
    "【１周年】影山飛雄",
    "１周年",
    "S",
    "チョキ",
    "アイコニック",
    KarasunoImg.kageyama_1st,
  ),
  createKarasunoPlayer(
    "【王冠】影山飛雄",
    "王冠",
    "S",
    "グー",
    "アイコニック",
    KarasunoImg.kageyama_crown,
  ),
  createKarasunoPlayer(
    "【ジャージ】影山飛雄",
    "ジャージ",
    "S",
    "パー",
    "アイコニック",
    KarasunoImg.kageyama_jersey,
  ),
  createKarasunoPlayer(
    "【２周年】影山飛雄",
    "２周年",
    "S",
    "チョキ",
    "アイコニック",
    KarasunoImg.kageyama_2nd,
  ),
  createKarasunoPlayer(
    "【中学生】影山飛雄",
    "中学生",
    "S",
    "グー",
    "アイコニック",
    KarasunoImg.kageyama_middleschool,
  ),
  createKarasunoPlayer(
    "【文化祭３】影山飛雄",
    "文化祭３",
    "S",
    "パー",
    "アイコニック",
    KarasunoImg.kageyama_culturefestival3,
  ),
  createKarasunoPlayer(
    "【格ゲー】影山飛雄",
    "格ゲー",
    "S",
    "チョキ",
    "アイコニック",
    KarasunoImg.kageyama_fightinggame,
  ),
  createKarasunoPlayer(
    "【王冠】影山飛雄",
    "王冠",
    "S",
    "チョキ",
    "スーパーアイコニック",
    KarasunoImg.kageyama_crown_supericonic,
  ),

  // 月島蛍
  createKarasunoPlayer(
    "月島蛍",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    KarasunoImg.tsukishima,
  ),

  // 山口忠
  createKarasunoPlayer(
    "山口忠",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    KarasunoImg.yamaguchi,
  ),

  // 西谷夕
  createKarasunoPlayer(
    "西谷夕",
    "ユニフォーム",
    "Li",
    "チョキ",
    "アイコニック",
    KarasunoImg.nishinoya,
  ),

  // 田中龍之介
  createKarasunoPlayer(
    "田中龍之介",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    KarasunoImg.tanaka,
  ),

  // 澤村大地
  createKarasunoPlayer(
    "澤村大地",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    KarasunoImg.sawamura,
  ),

  // 菅原孝支
  createKarasunoPlayer(
    "菅原孝支",
    "ユニフォーム",
    "S",
    "パー",
    "アイコニック",
    KarasunoImg.sugawara,
  ),

  // 東峰旭
  createKarasunoPlayer(
    "東峰旭",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    KarasunoImg.azumane,
  ),

  // 縁下力
  createKarasunoPlayer(
    "縁下力",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    KarasunoImg.ennoshita,
  ),

  // 木下久志
  createKarasunoPlayer(
    "木下久志",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    KarasunoImg.kinoshita,
  ),

  // 成田一仁
  createKarasunoPlayer(
    "成田一仁",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    KarasunoImg.narita,
  ),

  // 清水潔子
  createKarasunoPlayer(
    "【格ゲー】清水潔子",
    "格ゲー",
    "MB",
    "グー",
    "アイコニック",
    KarasunoImg.shimizu_fightinggame,
  ),

  // 谷地仁花
  createKarasunoPlayer(
    "【格ゲー】谷地仁花",
    "格ゲー",
    "MB",
    "グー",
    "アイコニック",
    KarasunoImg.yachi_fightinggame,
  ),
];
