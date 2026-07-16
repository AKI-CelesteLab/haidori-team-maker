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
    "/assets/TOKONAMI/komaki_hikaru.png",
  ),
  createPlayer(
    "駒木輝",
    "ユニフォーム",
    "WS",
    "グー",
    "スーパーアイコニック",
    "/assets/TOKONAMI/komaki_hikaru_supericonic.png",
  ),

  // 茶屋和馬
  createPlayer(
    "茶屋和馬",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    "/assets/TOKONAMI/chaya_kazuma.png",
  ),

  // 玉川弘樹
  createPlayer(
    "玉川弘樹",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    "/assets/TOKONAMI/tamagawa_hiroki.png",
  ),

  // 桜井大河
  createPlayer(
    "桜井大河",
    "ユニフォーム",
    "Li",
    "パー",
    "アイコニック",
    "/assets/TOKONAMI/sakurai_taiga.png",
  ),

  // 芳賀良治
  createPlayer(
    "芳賀良治",
    "ユニフォーム",
    "S",
    "パー",
    "アイコニック",
    "/assets/TOKONAMI/haga_yoshiaru.png",
  ),

  // 渋谷陸斗
  createPlayer(
    "渋谷陸斗",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    "/assets/TOKONAMI/shibuya_rikuto.png",
  ),

  // 池尻隼人
  createPlayer(
    "池尻隼人",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    "/assets/TOKONAMI/ikejiri_hayato.png",
  ),
  createPlayer(
    "【文化祭2】池尻隼人",
    "文化祭2",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/TOKONAMI/ikejiri_hayato_culturefestival2.png",
  ),
  createPlayer(
    "【遊園地】池尻隼人",
    "遊園地",
    "WS",
    "グー",
    "アイコニック",
    "/assets/TOKONAMI/ikejiri_hayato_amusementpark.png",
  ),
  createPlayer(
    "【遊園地】池尻隼人",
    "遊園地",
    "WS",
    "グー",
    "スーパーアイコニック",
    "/assets/TOKONAMI/ikejiri_hayato_amusementpark_supericonic.png",
  ),
];
