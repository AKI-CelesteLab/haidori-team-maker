"use client";

import {useRotation} from "@/hooks/useRotation";
import PlayerCard from "./PlayerCard";
import AllPlayer from "./AllPlayer";

export default function RotationTool() {
  const {
    court,
    bench,
    allPlayers,
    filters,
    selectedIndex,
    selectedAllName,
    isServe,
    isFirstServe,
    isStart,
    substituteCounter,
    liSubstituteCounter,
    toggleSimulate,
    toggleFilter,
    changeFirstServe,
    handlePlayerClick,
    handleAllPlayerClick,
    nextRotate,
  } = useRotation();

  // 位置のラベル設定
  const backLabels = ["4", "5", "6"]; // members[2], [1], [0] に対応
  const frontLabels = ["3", "2", "1"]; // members[3], [4], [5]
  const benchLabels = ["A", "B", "C", "D", "E", "F"]; // members[6], [7], [8], [9], [10], [11]

  return (
    <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 min-h-dvh overflow-y-auto bg-gray-50">
      {/* 左側メインエリア：操作・コート・ベンチ */}
      <div className="flex flex-col w-full max-w-lg h-full p-2 gap-2">
        {/* 1. 操作ボタン (高さを固定) */}
        <div className="shrink-0 space-y-1">
          <div className="flex justify-around items-center bg-gray-100 p-2 rounded-t-lg border-b">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isFirstServe}
                onChange={changeFirstServe}
                className="size-5"
              />
              <span className="font-bold text-sm">先行サーブ</span>
            </label>
            <span>
              交代:{substituteCounter}/3 Li交代:{liSubstituteCounter}/3
            </span>
          </div>
          <div className="flex justify-around items-center bg-gray-100 p-2 rounded-b-lg shadow-sm">
            <button
              onClick={toggleSimulate}
              className={
                "px-3 py-1.5 text-sm text-white rounded-lg shadow-sm" +
                " " +
                (isStart ? "bg-red-500" : "bg-green-500")
              }
            >
              {isStart ? "リセット" : "スタート"}
            </button>
            <button
              onClick={nextRotate}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl font-bold active:scale-95 transition text-sm"
            >
              次へ({!isServe ? "サーブ" : "レシーブ"})
            </button>
          </div>
        </div>

        {/* 2. コートエリア (flex-1 で余白を埋める) */}
        <div className="flex-1 min-h-0 bg-orange-100 p-3 rounded-lg flex flex-col justify-center shadow-inner">
          <h3 className="text-sm font-bold mb-2 text-center text-orange-800">
            コート
          </h3>
          <div className="flex flex-col items-center gap-2">
            {/* 後衛 */}
            <div className="grid grid-cols-3 justify-items-center w-full gap-2">
              {court.back.map((player, i) => (
                <PlayerCard
                  key={player.name + (2 - i)}
                  player={player}
                  label={backLabels[i]}
                  isSelected={selectedIndex === 2 - i}
                  handleClick={() => handlePlayerClick(2 - i)}
                />
              ))}
            </div>

            {/* 前衛 */}
            <div className="grid grid-cols-3 justify-items-center w-full gap-2">
              {court.front.map((player, i) => (
                <PlayerCard
                  key={player.name + (i + 3)}
                  player={player}
                  label={frontLabels[i]}
                  isSelected={selectedIndex === i + 3}
                  handleClick={() => handlePlayerClick(i + 3)}
                />
              ))}
            </div>
          </div>

          <p className="w-full text-center text-xs font-bold py-1 border-y-2 border-dashed border-orange-300 my-1">
            ##### ネット #####
          </p>
        </div>

        {/* 3. ベンチエリア (高さを抑える) */}
        <div className="shrink-0 bg-green-100 p-3 rounded-lg shadow-inner">
          <h3 className="text-xs font-bold mb-2 text-green-800">ベンチ</h3>
          <div className="grid grid-cols-6 gap-1">
            {bench.map((player, i) => (
              <div key={player.name + (i + 6)} className="w-full">
                <PlayerCard
                  player={player}
                  label={benchLabels[i]}
                  isSelected={selectedIndex === i + 6}
                  handleClick={() => handlePlayerClick(i + 6)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. 選手一覧 (横または下に配置、スクロール可能に) */}
      <div className="w-full h-full overflow-y-auto p-2 bg-white border-l">
        <AllPlayer
          players={allPlayers}
          onPlayerSelect={handleAllPlayerClick}
          selectedName={selectedAllName}
          filters={filters}
          onFilterToggle={toggleFilter}
        />
      </div>
    </div>
  );
}
