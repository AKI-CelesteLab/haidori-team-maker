import {PlayerData} from "@/types/PlayerData";
import {karasuno} from "./karasuno";
import {nekoma} from "./nekoma";
import {shiratorizawa} from "./shiratorizawa";
import {fukuroudani} from "./fukuroudani";
import {kamomedai} from "./kamomedai";

export const PLAYER_LIST: PlayerData[] = [
  ...karasuno,
  ...nekoma,
  ...shiratorizawa,
  ...fukuroudani,
  ...kamomedai,
];
