import {Category, Class, Position, School, Type} from "@/types/PlayerData";

type Props = {
  label: string;
  items:
    | readonly Category[]
    | readonly School[]
    | readonly Position[]
    | readonly Type[]
    | readonly Class[];
  selectedItems: string[];
  onToggle: (val: string) => void;
};

export default function FilterSection({
  label,
  items,
  selectedItems,
  onToggle,
}: Props) {
  return (
    <div>
      <p className="font-bold mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item: string) => (
          <label
            key={item}
            className={`flex items-center space-x-1 border px-2 py-1 rounded-md cursor-pointer text-sm ${selectedItems.includes(item) ? "bg-orange-50 border-orange-500 text-orange-700" : "bg-white"}`}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={selectedItems.includes(item)}
              onChange={() => onToggle(item)}
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
