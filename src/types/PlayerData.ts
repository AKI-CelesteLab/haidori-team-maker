import {StaticImageData} from "next/image";

export const categoryList = [
  "ユニフォーム",
  "制服", // uniform
  "プール掃除", // poolcleaning
  "水着", // swimwear
  "夏祭り", // summerfestival
  "探偵", // detective
  "職業体験", // jobshadowing
  "文化祭", // culturefestival
  "Xmas", // xmas
  "新年", // newyear
  "雪遊び", // playingsnow
  "1周年", // 1st
  "サバゲ", // survivalgame
  "RPG", // rpg
  "路地裏", // rojiura
  "バーガー", // burgur
  "梅雨", // rainyseason
  "キャンプ", // camp
  "花火", // fireworks
  "王冠", // crown
  "バカンス", // vacation
  "スパイ", // spy
  "カンフー", // kungfu
  "仮装", // costume
  "甲冑", // armor
  "文化祭2", // culturefestival2
  "ジャージ", // jersey
  "Xmas2", // xmas2
  "新年2", // newyear2
  "路地裏2", // rojiura2
  "2周年", // 2nd
  "遊園地", // amusementpark
  "妖", // ayakashi
  "中学生", // middleschool
  "職業体験2", // jobshadowing2
  "アート2", // art2
  "サバゲ2", // survivalgame2
  "水着2", // swimwear2
  "夏祭り2", // summerfestival2
  "焼き芋", // yakiimo
  "ハロウィン", // halloween
  "文化祭３", // culturefestival3
  "Xmas3", // xmas3
  "寝正月", // lyinglow
  "和装体験", // wasotaiken
  "3周年", // 3rd
  "格ゲー", // fightinggame
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
