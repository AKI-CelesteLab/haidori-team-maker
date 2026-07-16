import {Category, Class, PlayerData, Position, Type} from "@/types/PlayerData";

const createPlayer = (
  name: string,
  category: Category,
  position: Position,
  type: Type,
  rarity: Class,
  image: string,
): PlayerData => ({
  name: name,
  category: category,
  school: "角川学園高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const kakugawa: PlayerData[] = [
  // 古牧譲
  createPlayer(
    "古牧譲",
    "ユニフォーム",
    "S",
    "グー",
    "アイコニック",
    "/assets/KAKUGAWA/komaki_yuzuru.png",
  ),
  createPlayer(
    "【雪遊び】古牧譲",
    "雪遊び",
    "S",
    "パー",
    "アイコニック",
    "/assets/KAKUGAWA/komaki_yuzuru_playingsnow.png",
  ),
  createPlayer(
    "【勉強会】古牧譲",
    "勉強会",
    "S",
    "チョキ",
    "アイコニック",
    "/assets/KAKUGAWA/komaki_yuzuru_studygroup.png",
  ),

  // 浅虫快人
  createPlayer(
    "浅虫快人",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/KAKUGAWA/asamushi_kaito.png",
  ),

  // 南田大志
  createPlayer(
    "南田大志",
    "ユニフォーム",
    "Li",
    "グー",
    "アイコニック",
    "/assets/KAKUGAWA/minamida_taishi.png",
  ),

  // 温川良明
  createPlayer(
    "温川良明",
    "ユニフォーム",
    "MB",
    "グー",
    "アイコニック",
    "/assets/KAKUGAWA/nurukawa_yoshiaki.png",
  ),

  // 稲垣功
  createPlayer(
    "稲垣功",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    "/assets/KAKUGAWA/inagaki_isao.png",
  ),

  // 馬門英治
  createPlayer(
    "馬門英治",
    "ユニフォーム",
    "MB",
    "グー",
    "アイコニック",
    "/assets/KAKUGAWA/makado_eiji.png",
  ),

  // 百沢雄大
  createPlayer(
    "百沢雄大",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    "/assets/KAKUGAWA/hyakuzawa_yudai.png",
  ),
  createPlayer(
    "【職業体験】百沢雄大",
    "職業体験",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/KAKUGAWA/hyakuzawa_yudai_jobshadowing.png",
  ),
  createPlayer(
    "百沢雄大",
    "ユニフォーム",
    "WS",
    "グー",
    "スーパーアイコニック",
    "/assets/KAKUGAWA/hyakuzawa_yudai_supericonic.png",
  ),
];
