"use client";

import {PlayerData} from "@/types/PlayerData";
import {useRotation} from "../hooks/useRotation";
import PlayerCard from "./PlayerCard";

export default function RotationTool() {
  const {
    members,
    court,
    bench,
    isServe,
    isFirstServe,
    selectedIndex,
    changeFirstServe,
    nextRotate,
    handlePlayerClick,
  } = useRotation();

  const changePlayer = (p: PlayerData) => {
    const index = members.findIndex((m) => m.name === p.name);
    handlePlayerClick(index);
  };

  return (
    <div className="m-4 w-full max-w-lg mx-auto bg-gray-50 rounded-xl shadow-lg space-y-4">
      {/* 操作ボタン */}
      <div className="flex justify-around">
        <div className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            checked={isFirstServe}
            onChange={changeFirstServe}
            className="size-6"
          />
          <span>先行サーブ</span>
        </div>
        <button
          onClick={nextRotate}
          className="bg-blue-600 text-white w-fit px-6 py-3 rounded-xl font-bold active:scale-95 transition"
        >
          次へ({!isServe ? "サーブ" : "レシーブ"})
        </button>
      </div>

      {/* コートセクション */}
      <div className="max-w-sm mx-auto text-sm bg-blue-300 p-4 rounded-lg shadow-inner">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {court.back.map((p, i) => (
            <PlayerCard
              key={i}
              members={members}
              player={p}
              handleClick={() => changePlayer(p)}
              selectedIndex={selectedIndex}
              label={`${i + 4}`}
            />
          ))}
          {court.front.map((p, i) => (
            <PlayerCard
              key={i}
              members={members}
              player={p}
              handleClick={() => changePlayer(p)}
              selectedIndex={selectedIndex}
              label={`${3 - i}`}
            />
          ))}
        </div>
        <div className="border-t border-white/30 pt-1 text-center">
          <span className="text-[10px] font-black tracking-[0.2em]">
            ### ネット ###
          </span>
        </div>
      </div>

      {/* ベンチセクション */}
      <div className="text-xs bg-orange-200 p-4 rounded-lg border border-gray-200">
        <div className="grid grid-cols-6 gap-2">
          {bench.map((p, i) => (
            <PlayerCard
              key={i}
              members={members}
              player={p}
              handleClick={() => changePlayer(p)}
              selectedIndex={selectedIndex}
              label={String.fromCharCode(65 + i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
