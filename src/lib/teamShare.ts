import {PLAYER_LIST} from "@/data";
import {PlayerData} from "@/types/PlayerData";

const PARAM_KEY = "t";
const BASE62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const HASH_LEN = 4;

function playerHash(p: PlayerData): string {
  const str = p.name + p.class;
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h, 33) ^ str.charCodeAt(i);
    h = h >>> 0;
  }
  let result = "";
  for (let i = 0; i < HASH_LEN; i++) {
    result = BASE62[h % 62] + result;
    h = Math.floor(h / 62);
  }
  return result;
}

const HASH_MAP: Map<string, PlayerData> = new Map(
  PLAYER_LIST.map((p) => [playerHash(p), p]),
);

export function encodeTeam(members: PlayerData[]): string {
  return members.map(playerHash).join(",");
}

export function decodeTeam(param: string): PlayerData[] | null {
  try {
    const keys = param.split(",");
    if (keys.length !== 12) return null;
    const members = keys.map((k) => HASH_MAP.get(k));
    if (members.some((m) => m === undefined)) return null;
    return members as PlayerData[];
  } catch {
    return null;
  }
}

export function getSharedTeamFromURL(): PlayerData[] | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const t = params.get(PARAM_KEY);
  if (!t) return null;
  return decodeTeam(t);
}

export function buildShareURL(members: PlayerData[]): string {
  const encoded = encodeTeam(members);
  if (!encoded) return "";
  const url = new URL(window.location.href);
  url.searchParams.set(PARAM_KEY, encoded);
  return url.toString();
}

export async function copyShareURL(members: PlayerData[]): Promise<boolean> {
  const url = buildShareURL(members);
  if (!url) return false;
  window.history.replaceState(null, "", url);
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch {
    return false;
  }
}
