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
  school: "戸美学園高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const nohebi: PlayerData[] = [
  // 大将優
  createPlayer(
    "大将優",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    "/assets/NOHEBI/daisho_suguru.png",
  ),
  createPlayer(
    "【新年】大将優",
    "新年",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/NOHEBI/daisho_suguru_newyear.png",
  ),
  createPlayer(
    "【カンフー】大将優",
    "カンフー",
    "WS",
    "グー",
    "アイコニック",
    "/assets/NOHEBI/daisho_suguru_kungfu.png",
  ),
  createPlayer(
    "【妖】大将優",
    "妖",
    "WS",
    "パー",
    "アイコニック",
    "/assets/NOHEBI/daisho_suguru_ayakashi.png",
  ),
  createPlayer(
    "【梅雨2】大将優",
    "梅雨2",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/NOHEBI/daisho_suguru_rainyseason2.png",
  ),
  createPlayer(
    "【妖】大将優",
    "妖",
    "WS",
    "パー",
    "スーパーアイコニック",
    "/assets/NOHEBI/daisho_suguru_ayakashi_supericonic.png",
  ),

  // 沼井和馬
  createPlayer(
    "沼井和馬",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    "/assets/NOHEBI/numai_kazuma.png",
  ),

  // 潜尚保
  createPlayer(
    "潜尚保",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    "/assets/NOHEBI/kuguri_naoyasu.png",
  ),
  createPlayer(
    "【バーガー】潜尚保",
    "バーガー",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/NOHEBI/kuguri_naoyasu_burgur.png",
  ),
  createPlayer(
    "【寝正月】潜尚保",
    "寝正月",
    "WS",
    "グー",
    "アイコニック",
    "/assets/NOHEBI/kuguri_naoyasu_lyinglow.png",
  ),

  // 高千穂恵也
  createPlayer(
    "高千穂恵也",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    "/assets/NOHEBI/takachiho_yoshiya.png",
  ),

  // 広尾倖児
  createPlayer(
    "広尾倖児",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    "/assets/NOHEBI/hiroo_koji.png",
  ),
  createPlayer(
    "【カンフー】広尾倖児",
    "カンフー",
    "MB",
    "チョキ",
    "アイコニック",
    "/assets/NOHEBI/hiroo_koji_kungfu.png",
  ),

  // 先島伊澄
  createPlayer(
    "先島伊澄",
    "ユニフォーム",
    "S",
    "パー",
    "アイコニック",
    "/assets/NOHEBI/sakishima_isumi.png",
  ),
  createPlayer(
    "先島伊澄",
    "ユニフォーム",
    "S",
    "パー",
    "スーパーアイコニック",
    "/assets/NOHEBI/sakishima_isumi_supericonic.png",
  ),

  // 背黒晃彦
  createPlayer(
    "背黒晃彦",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    "/assets/NOHEBI/seguro_akihiko.png",
  ),

  // 赤間颯
  createPlayer(
    "赤間颯",
    "ユニフォーム",
    "Li",
    "パー",
    "アイコニック",
    "/assets/NOHEBI/akama_so.png",
  ),
];
