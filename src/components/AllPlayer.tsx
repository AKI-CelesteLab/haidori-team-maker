import {PlayerData} from "@/types/PlayerData";
import PlayerCard from "./PlayerCard";
import {useState} from "react";
import {FiltersType} from "@/types/Filters";
import FilterModal from "./FilterModal";

type Props = {
  players: PlayerData[];
  onPlayerSelect: (player: PlayerData) => void;
  selectedName: string | null;
  filters: FiltersType;
  onFilterToggle: (category: keyof FiltersType, value: string) => void;
};

export default function AllPlayer({
  players,
  onPlayerSelect,
  selectedName,
  filters,
  onFilterToggle,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // フィルタが適用されているか確認（UI表示用）
  const activeCount = Object.values(filters).flat().length;

  return (
    <div className="bg-gray-100 w-full p-4 rounded-lg relative">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-bold">未配置の選手（{players.length}）</h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className={`text-base font-bold text-center px-4 py-1 rounded-full border ${
            activeCount > 0
              ? "bg-orange-500 text-white border-orange-600"
              : "bg-white border-gray-300"
          }`}
        >
          フィルタ {activeCount > 0 && `(${activeCount})`}
        </button>
      </div>

      {/* モーダル */}
      {isModalOpen && (
        <FilterModal
          filters={filters}
          onFilterToggle={onFilterToggle}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {/* プレイヤー一覧 */}
      <div className="grid grid-cols-4 lg:grid-cols-6 justify-items-center w-full gap-2">
        {players.map((player) => {
          const isSelected = selectedName === player.name;
          return (
            <div
              key={player.name + player.class}
              className={`cursor-pointer w-full max-w-32 transition-transform active:scale-95 ${isSelected ? "scale-105" : "opacity-80"}`}
            >
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
