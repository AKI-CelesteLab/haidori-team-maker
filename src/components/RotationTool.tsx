"use client";

import {useRotation} from "@/hooks/useRotation";
import PlayerCard from "./PlayerCard";
import AllPlayer from "./AllPlayer";

export default function RotationTool() {
  const {
    court,
    bench,
    allPlayers,
    selectedIndex,
    selectedAllName,
    isServe,
    isFirstServe,
    confirmTeam,
    reset,
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
    <div className="flex flex-col xl:flex-row items-center xl:items-start gap-6">
      <div className="lg:max-w-1/2">
        {/* 操作ボタン */}
        <>
          <div className="flex justify-around items-center bg-gray-100 p-4">
            <button
              onClick={confirmTeam}
              className="px-4 py-2 text-white bg-green-400 rounded-lg"
            >
              編成を固定
            </button>
            <button
              onClick={reset}
              className="px-4 py-2 text-white bg-red-400 rounded-lg"
            >
              リセット
            </button>
          </div>
          <div className="flex justify-around items-center bg-gray-100 p-4 rounded-lg">
            <label className="flex items-center justify-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isFirstServe}
                onChange={changeFirstServe}
                className="size-6"
              />
              <span className="font-bold">先行サーブ</span>
            </label>
            <button
              onClick={nextRotate}
              className="bg-blue-600 text-white w-fit px-6 py-3 rounded-xl font-bold active:scale-95 transition shadow-md"
            >
              次へ({!isServe ? "サーブ" : "レシーブ"})
            </button>
          </div>
        </>

        {/* コートエリア */}
        <div className="bg-orange-100 w-screen xl:w-lg p-4 mx-auto rounded-lg">
          <h3 className="text-lg font-bold mb-4 text-center">コート</h3>
          <div className="flex flex-col items-center gap-2">
            {/* 後衛: members[2], [1], [0] */}
            <div className="grid grid-cols-3 justify-items-center w-full gap-2">
              {court.back.map((player, i) => {
                const memberIndex = 2 - i;
                return (
                  <PlayerCard
                    key={player.name + memberIndex}
                    player={player}
                    label={backLabels[i]}
                    isSelected={selectedIndex === memberIndex}
                    handleClick={() => handlePlayerClick(memberIndex)}
                  />
                );
              })}
            </div>

            {/* 前衛: members[3], [4], [5] */}
            <div className="grid grid-cols-3 justify-items-center w-full gap-2">
              {court.front.map((player, i) => {
                const memberIndex = i + 3;
                return (
                  <PlayerCard
                    key={player.name + memberIndex}
                    player={player}
                    label={frontLabels[i]}
                    isSelected={selectedIndex === memberIndex}
                    handleClick={() => handlePlayerClick(memberIndex)}
                  />
                );
              })}
            </div>

            <p className="text-center text-lg">##### ネット #####</p>
          </div>
        </div>

        {/* ベンチエリア */}
        <div className="bg-green-100 w-screen xl:w-2xl p-4 mx-auto rounded-lg">
          <h3 className="text-md font-bold mb-2">ベンチ</h3>
          <div className="grid grid-cols-6 items-center gap-2 pb-2">
            {bench.map((player, i) => {
              const memberIndex = i + 6;
              return (
                <div
                  key={player.name + memberIndex}
                  className="w-full shrink-0"
                >
                  <PlayerCard
                    player={player}
                    label={benchLabels[i]}
                    isSelected={selectedIndex === memberIndex}
                    handleClick={() => handlePlayerClick(memberIndex)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 選手一覧（allPlayers）選択エリア */}
      <AllPlayer
        players={allPlayers}
        onPlayerSelect={handleAllPlayerClick}
        selectedName={selectedAllName}
      />
    </div>
  );
}
