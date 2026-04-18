import {StaticImageData} from "next/image";

export const categoryList = [
  "ユニフォーム",
  "制服",
  "夏祭り",
  "１周年",
  "王冠",
  "ジャージ",
  "遊園地",
  "妖",
  "ハロウィン",
  "和装体験",
  "3周年",
  "格ゲー",
] as const;
export type Category = (typeof categoryList)[number];

export const schoolList = [
  "烏野高校",
  "音駒高校",
  "伊達工業高校",
  "青葉城西高校",
  "常波高校",
  "扇南高校",
  "角川学園高校",
  "条善寺高校",
  "和久谷南高校",
  "白鳥沢学園高校",
  "生川高校",
  "森然高校",
  "稲荷崎高校",
  "梟谷学園高校",
  "椿原学園高校",
  "鴎台高校",
  "井闥山学院高校",
  "戸美学園高校",
  "早流川工業高校",
] as const;
export type School = (typeof schoolList)[number];

export const positionList = ["WS", "MB", "S", "Li"] as const;
export type Position = (typeof positionList)[number];

export const typeList = ["グー", "チョキ", "パー"] as const;
export type Type = (typeof typeList)[number];

export const classList = [
  "ノーマル",
  "コンディション",
  "テクニック",
  "エフォート",
  "シーズン",
  "エール",
  "アイコニック",
  "スーパーアイコニック",
] as const;
export type Class = (typeof classList)[number];

export type PlayerData = {
  name: string;
  category: Category;
  school: School;
  position: Position;
  type: Type;
  class: Class;
  image: StaticImageData;
};
