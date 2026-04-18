import akaashi_keigi_3rd_img from "@/assets/FUKUROUDANI/akaashi_keiji_3rd.png";
import akaashi_keigi_ayakashi_supericonic_img from "@/assets/FUKUROUDANI/akaashi_keiji_ayakashi_supericonic.png";
import bokuto_koutarou_3rd_img from "@/assets/FUKUROUDANI/bokuto_koutarou_3rd.png";
import bokuto_koutarou_iconic_img from "@/assets/FUKUROUDANI/bokuto_koutarou.png";
import komi_haruki_iconic_img from "@/assets/FUKUROUDANI/komi_haruki.png";
import washio_tatsuki_iconic_img from "@/assets/FUKUROUDANI/washio_tatsuki.png";

import {Category, Class, PlayerData, Position, Type} from "@/types/PlayerData";
import {StaticImageData} from "next/image";

const createFukurouDaniPlayer = (
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

export const fukuroudani: PlayerData[] = [
  {
    name: "【3周年】赤葦京治",
    category: "3周年",
    school: "梟谷学園高校",
    position: "S",
    type: "チョキ",
    class: "アイコニック",
    image: akaashi_keigi_3rd_img,
  },
  {
    name: "【妖】赤葦京治",
    category: "妖",
    school: "梟谷学園高校",
    position: "S",
    type: "チョキ",
    class: "スーパーアイコニック",
    image: akaashi_keigi_ayakashi_supericonic_img,
  },
  {
    name: "【3周年】木兎光太郎",
    category: "3周年",
    school: "梟谷学園高校",
    position: "WS",
    type: "チョキ",
    class: "アイコニック",
    image: bokuto_koutarou_3rd_img,
  },
  {
    name: "木兎光太郎",
    category: "ユニフォーム",
    school: "梟谷学園高校",
    position: "WS",
    type: "パー",
    class: "アイコニック",
    image: bokuto_koutarou_iconic_img,
  },
  {
    name: "小見春樹",
    category: "ユニフォーム",
    school: "梟谷学園高校",
    position: "Li",
    type: "パー",
    class: "アイコニック",
    image: komi_haruki_iconic_img,
  },
  {
    name: "鷲尾辰生",
    category: "ユニフォーム",
    school: "梟谷学園高校",
    position: "MB",
    type: "パー",
    class: "アイコニック",
    image: washio_tatsuki_iconic_img,
  },
];
