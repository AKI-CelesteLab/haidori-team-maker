import {PlayerData} from "@/types/PlayerData";
import PlayerCard from "./PlayerCard";

type Props = {
  players: PlayerData[];
  onPlayerSelect: (player: PlayerData) => void;
  selectedName: string | null; // 現在選択中のキャラ名
};

export default function AllPlayer({
  players,
  onPlayerSelect,
  selectedName,
}: Props) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-sm font-bold mb-2">未配置の選手（タップして選択）</h3>
      <div className="grid grid-cols-4 lg:grid-cols-6 justify-items-center w-full gap-2">
        {players.map((player) => {
          const isSelected = selectedName === player.name;
          return (
            <div
              key={player.name}
              className={`cursor-pointer min-w-16 w-full max-w-32 h-auto transition-transform active:scale-95 ${
                isSelected
                  ? "scale-105" // ring-4 ring-orange-500 を削除
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              {/* handleClick を通じて onPlayerSelect を呼び出し、isSelected を渡す */}
              <PlayerCard
                player={player}
                handleClick={() => onPlayerSelect(player)}
                isSelected={isSelected}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
