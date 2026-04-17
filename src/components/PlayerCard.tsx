import {PlayerData} from "@/types/PlayerData";
import Image from "next/image";

type PlayerCardProps = {
  members: PlayerData[];
  player: PlayerData;
  handleClick: () => void;
  selectedIndex: number | null;
  label: string;
};

export default function PlayerCard({
  members,
  player,
  handleClick,
  selectedIndex,
  label,
}: PlayerCardProps) {
  const isSelected =
    selectedIndex === members.findIndex((m) => m.name === player.name);

  return (
    <div
      className={
        "flex items-start w-full" + (isSelected && " border-2 border-red-500")
      }
    >
      <button
        onClick={handleClick}
        className="flex flex-col items-center w-full"
      >
        <p className="w-full text-center text-lg bg-purple-300">{label}</p>
        <div className="h-fit w-full m-auto bg-gray-300">
          <Image
            src={player.image ?? ""}
            alt={player.name ?? ""}
            loading="eager"
            className="h-full w-full"
          />
        </div>
        <p className="text-center">
          {player.name !== "" ? player.name : "なし"}
        </p>
      </button>
    </div>
  );
}
