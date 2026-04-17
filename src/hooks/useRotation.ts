import akaashi_keigi_3rd_img from "@/assets/[3周年]赤葦京治.png";
import akaashi_keigi_ayakashi_img from "@/assets/[妖]赤葦京治.png";
import bokuto_koutarou_3rd_img from "@/assets/[3周年]木兎光太郎.png";
import bokuto_koutarou_uniform_img from "@/assets/木兎光太郎.png";
import komi_haruki_uniform_img from "@/assets/小見春樹.png";
import washio_tatsuki_uniform_img from "@/assets/鷲尾辰生.png";
import shimizu_kiyoko_kakutougame_img from "@/assets/[格ゲー]清水潔子.png";
import yachi_hitoka_kakutougame_img from "@/assets/[格ゲー]谷地仁花.png";
import kuroo_tetsurou_uniform_img from "@/assets/黒尾鉄朗.png";
import ushijima_wakatoshi_3rd_img from "@/assets/[3周年]牛島若利.png";
import shirabu_kenjirou_3rd_img from "@/assets/[3周年]白布賢二郎.png";
import hoshiumi_kourai_kakutougame_img from "@/assets/[格ゲー]星海光来.png";

import {PlayerData} from "@/types/PlayerData";
import {useState, useCallback} from "react";

const initialMembers: PlayerData[] = [
  {
    name: "【妖】赤葦京治",
    category: "妖",
    school: "梟谷学園高校",
    position: "S",
    type: "チョキ",
    class: "スーパーアイコニック",
    image: akaashi_keigi_ayakashi_img,
  },
  {
    name: "小見春樹",
    category: "ユニフォーム",
    school: "梟谷学園高校",
    position: "Li",
    type: "パー",
    class: "アイコニック",
    image: komi_haruki_uniform_img,
  },
  {
    name: "【3周年】赤葦京治",
    category: "3周年",
    school: "梟谷学園高校",
    position: "S",
    type: "チョキ",
    class: "アイコニック",
    image: akaashi_keigi_3rd_img,
  },
  {
    name: "木兎光太郎",
    category: "ユニフォーム",
    school: "梟谷学園高校",
    position: "WS",
    type: "パー",
    class: "アイコニック",
    image: bokuto_koutarou_uniform_img,
  },
  {
    name: "鷲尾辰生",
    category: "ユニフォーム",
    school: "梟谷学園高校",
    position: "MB",
    type: "パー",
    class: "アイコニック",
    image: washio_tatsuki_uniform_img,
  },
  {
    name: "【3周年】木兎光太郎",
    category: "3周年",
    school: "梟谷学園高校",
    position: "WS",
    type: "チョキ",
    class: "アイコニック",
    image: bokuto_koutarou_3rd_img,
  },
  {
    name: "【格ゲー】谷地仁花",
    category: "格ゲー",
    school: "烏野高校",
    position: "MB",
    type: "グー",
    class: "アイコニック",
    image: yachi_hitoka_kakutougame_img,
  },
  {
    name: "【3周年】牛島若利",
    category: "3周年",
    school: "白鳥沢学園高校",
    position: "WS",
    type: "チョキ",
    class: "アイコニック",
    image: ushijima_wakatoshi_3rd_img,
  },
  {
    name: "【格ゲー】清水潔子",
    category: "格ゲー",
    school: "烏野高校",
    position: "S",
    type: "グー",
    class: "アイコニック",
    image: shimizu_kiyoko_kakutougame_img,
  },
  {
    name: "【格ゲー】星海光来",
    category: "格ゲー",
    school: "鴎台高校",
    position: "WS",
    type: "パー",
    class: "アイコニック",
    image: hoshiumi_kourai_kakutougame_img,
  },
  {
    name: "【3周年】白布賢二郎",
    category: "3周年",
    school: "白鳥沢学園高校",
    position: "S",
    type: "グー",
    class: "アイコニック",
    image: shirabu_kenjirou_3rd_img,
  },
  {
    name: "黒尾鉄朗",
    category: "ユニフォーム",
    school: "音駒高校",
    position: "MB",
    type: "グー",
    class: "アイコニック",
    image: kuroo_tetsurou_uniform_img,
  },
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
    [],
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
