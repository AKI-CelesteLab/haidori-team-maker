import {PLAYER_LIST} from "@/data";
import {PlayerData} from "@/types/PlayerData";
import {useState, useCallback} from "react";

const initialMembers: PlayerData[] = [
  PLAYER_LIST[1],
  PLAYER_LIST[4],
  PLAYER_LIST[0],
  PLAYER_LIST[3],
  PLAYER_LIST[5],
  PLAYER_LIST[2],
  PLAYER_LIST[7],
  PLAYER_LIST[9],
  PLAYER_LIST[6],
  PLAYER_LIST[8],
  PLAYER_LIST[10],
  PLAYER_LIST[11],
];

export const useRotation = () => {
  /*
    members[0] = 6
    ...
    members[5] = 1
    members[6] = A
    ...
    members[11] = F

    members[2] = serve
  */

  const [members, setMembers] = useState<PlayerData[]>(initialMembers);
  const [isFirstServe, setIsFirstServe] = useState(false);
  const [isServe, setIsServe] = useState(isFirstServe);
  // 最初のローテションかの確認用
  const [counter, setCounter] = useState(0);
  // 選択中のインデックスを管理
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // 2つのインデックスを指定して入れ替える関数
  const swapPlayers = useCallback((idx1: number, idx2: number) => {
    setMembers((prev) => {
      const next = [...prev];
      const temp = next[idx1];
      next[idx1] = next[idx2];
      next[idx2] = temp;
      return next;
    });
    setSelectedIndex(null); // 入れ替え後に選択解除
  }, []);

  const changePlayer = useCallback((index: number, player: PlayerData) => {
    setMembers((prev) => {
      const next = [...prev];
      next[index] = player;
      return next;
    });
  }, []);

  // 選手がタップされた時のハンドラー
  const handlePlayerClick = useCallback(
    (index: number) => {
      if (selectedIndex === null) {
        setSelectedIndex(index);
      } else if (selectedIndex === index) {
        setSelectedIndex(null); // 同じ選手をタップしたら解除
      } else {
        swapPlayers(selectedIndex, index);
      }
    },
    [selectedIndex, swapPlayers],
  );

  const changeFirstServe = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsFirstServe(e.target.checked);
      setIsServe(e.target.checked);

      console.log(e.target.checked);

      if (!e.target.checked) return;

      setMembers((prev) => {
        const next = [...prev];

        console.log(next[2].position);

        if (next[2].position === "Li") {
          if (e.target.checked) {
            // 先行サーブ時：ベンチA(Index 6)と自動交代
            const temp = next[2];
            next[2] = next[6];
            next[6] = temp;
          }
        }

        return next;
      });
    },
    [isFirstServe],
  );

  // ローテーションのコアロジック
  const rotate = useCallback(() => {
    setMembers((prev) => {
      // 1. 全体時計回りシフト (Index 11 -> 0)
      const next = [...prev.slice(1, 12), prev[0]];
      return next;
    });
  }, []);

  const nextRotate = useCallback(() => {
    const nextIsServe = !isServe;
    // サーブ・レシーブを切り替える
    setIsServe(nextIsServe);

    const nextCounter = counter + 1;
    setCounter(nextCounter);

    // サーブの時にローテーション
    if (nextIsServe) {
      if (nextCounter !== 0) rotate();
    } else {
      setMembers((prev) => {
        const next = [...prev];
        // レシーブ段階でLiがベンチAにいるなら、4番と自動交代
        if (next[6].position === "Li") {
          const temp = next[6];
          next[6] = next[2];
          next[2] = temp;
          const target = next.splice(6, 1)[0];
          next.push(target);
        }
        return next;
      });
    }
  }, [isServe, counter, rotate]);

  return {
    members,
    isServe,
    isFirstServe,
    selectedIndex,
    changeFirstServe,
    nextRotate,
    handlePlayerClick,
    court: {
      back: [members[2], members[1], members[0]], // 4, 5, 6
      front: members.slice(3, 6), // 3, 2, 1
    },
    bench: members.slice(6),
  };
};
