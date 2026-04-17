import {PlayerData} from "@/types/PlayerData";
import Image from "next/image";

type PlayerCardProps = {
  player: PlayerData;
  handleClick?: () => void;
  isSelected?: boolean;
  label?: string;
};

export default function PlayerCard({
  player,
  handleClick,
  isSelected = false,
  label,
}: PlayerCardProps) {
  return (
    <div
      className={
        "flex items-center justify-center min-w-8 w-full max-w-32 h-auto transition-all rounded-lg overflow-hidden " +
        (isSelected
          ? " border-4 border-red-500 shadow-lg scale-105"
          : " border-2 border-transparent")
      }
    >
      <button
        onClick={handleClick}
        disabled={!handleClick}
        className="flex flex-col items-center w-full"
      >
        {label && (
          <p className="w-full text-center text-sm bg-purple-300 font-bold">
            {label}
          </p>
        )}
        <div className="h-fit w-full m-auto bg-gray-300 relative aspect-3/4">
          <Image
            src={player.image}
            alt={player.name}
            loading="lazy"
            className="object-cover"
          />
        </div>
        <p className="text-center text-xs py-1 bg-white w-full truncate">
          {player.name !== "" ? player.name : "なし"}
        </p>
      </button>
    </div>
  );
}
