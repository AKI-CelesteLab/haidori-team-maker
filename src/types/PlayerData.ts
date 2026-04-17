import {StaticImageData} from "next/image";

const categoryList = ["ユニフォーム", "妖", "3周年", "格ゲー"] as const;
type Category = (typeof categoryList)[number];

const schoolList = [
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
type School = (typeof schoolList)[number];

const positionList = ["WS", "MB", "S", "Li"] as const;
type Position = (typeof positionList)[number];

const typeList = ["グー", "チョキ", "パー"] as const;
type Type = (typeof typeList)[number];

const classList = [
  "ノーマル",
  "コンディション",
  "テクニック",
  "エフォート",
  "シーズン",
  "エール",
  "アイコニック",
  "スーパーアイコニック",
] as const;
type Class = (typeof classList)[number];

export type PlayerData = {
  name: string | null;
  category: Category | null;
  school: School | null;
  position: Position | null;
  type: Type | null;
  class: Class | null;
  image: StaticImageData | null;
};
