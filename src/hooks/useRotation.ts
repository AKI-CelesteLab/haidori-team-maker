import {PlayerData} from "@/types/PlayerData";
import {useState, useCallback, useMemo} from "react";
import {PLAYER_LIST} from "@/data";
import {FiltersType} from "@/types/Filters";
import {initialMembers} from "@/data/initialMembers";

// 選択状態の型定義
type Selection =
  | {type: "member"; index: number}
  | {type: "all"; data: PlayerData}
  | null;

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

  const [team, setTeam] = useState<PlayerData[]>(initialMembers);
  const [members, setMembers] = useState<PlayerData[]>(team);
  // フィルタ用
  const [filters, setFilters] = useState<FiltersType>({
    categories: [],
    schools: [],
    positions: [],
    types: [],
    classes: [],
  });
  // フィルタリングされたプレイヤー一覧
  const allPlayers = useMemo(() => {
    return PLAYER_LIST.filter((p) => {
      // 「名前かつクラス」が完全に一致する個体がメンバーにいる場合のみ、一覧から消す
      // これにより、別クラスの同名キャラは一覧に残り続けます
      const isExactlySamePresent = members.some(
        (m) => m.name === p.name && m.class === p.class,
      );
      if (isExactlySamePresent) return false;

      // 各フィルタ条件（選択されている場合のみチェック）
      const matchCategory =
        filters.categories.length === 0 ||
        filters.categories.includes(p.category);
      const matchSchool =
        filters.schools.length === 0 || filters.schools.includes(p.school);
      const matchPosition =
        filters.positions.length === 0 ||
        filters.positions.includes(p.position);
      const matchType =
        filters.types.length === 0 || filters.types.includes(p.type);
      const matchClass =
        filters.classes.length === 0 || filters.classes.includes(p.class);

      return (
        matchCategory && matchSchool && matchPosition && matchType && matchClass
      );
    });
  }, [members, filters]);

  const [isFirstServe, setIsFirstServe] = useState(false);
  const [isServe, setIsServe] = useState(isFirstServe);
  // 最初のローテションかの確認用
  const [counter, setCounter] = useState(0);
  const [selection, setSelection] = useState<Selection>(null);

  // チームを確定
  const confirmTeam = useCallback(() => {
    setTeam(members);
  }, [members]);

  // リセット
  const reset = useCallback(() => {
    setMembers(team);
    setIsFirstServe(false);
    setIsServe(false);
    setCounter(0);
    setSelection(null);
  }, [team]);

  // フィルタの更新関数
  const toggleFilter = useCallback(
    (category: keyof FiltersType, value: string) => {
      setFilters((prev) => {
        const current = prev[category] as string[];
        const next = current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value];
        return {...prev, [category]: next};
      });
    },
    [],
  );

  // プレイヤー入れ替えの共通処理（一覧からの流し込み）
  const executeReplace = useCallback(
    (memberIdx: number, newPlayer: PlayerData) => {
      // 1. フロント（3-5）へのリベロ配置制限
      if (memberIdx >= 3 && memberIdx <= 5 && newPlayer.position === "Li") {
        alert("リベロは前衛（フロント）に入ることはできません。");
        setSelection(null);
        return;
      }

      // 2. リベロの重複編成制限
      if (newPlayer.position === "Li") {
        const isLiAlreadyExists = members.some(
          (m, idx) => m.position === "Li" && idx !== memberIdx,
        );
        if (isLiAlreadyExists) {
          alert("リベロは1人しか編成できません。");
          setSelection(null);
          return;
        }
      }

      // バリデーション: 同名キャラの重複
      // 「操作しようとしているスロット(memberIdx)以外」に、同じ名前のキャラがいるかチェック
      const isNameDuplicateElsewhere = members.some(
        (m, idx) => m.name === newPlayer.name && idx !== memberIdx,
      );

      // 同名キャラの重複制限
      if (isNameDuplicateElsewhere) {
        alert(
          `「${newPlayer.name}」は既に他の枠に編成されています。1つのチームに同名キャラは1人までです。`,
        );
        setSelection(null);
        return;
      }

      setMembers((prev) => {
        const next = [...prev];
        next[memberIdx] = newPlayer;
        return next;
      });
      setSelection(null);
    },
    [members], // membersに依存するため追加
  );

  // members内での入れ替え処理
  const executeSwap = useCallback(
    (idx1: number, idx2: number) => {
      // 1. まず現在のメンバーから入れ替え対象のプレイヤーを特定（setMembersの外で行う）
      const p1 = members[idx1];
      const p2 = members[idx2];

      // 2. フロント（3-5）へのリベロ移動制限のバリデーション
      const isP1GoingToFront = idx2 >= 3 && idx2 <= 5;
      const isP2GoingToFront = idx1 >= 3 && idx1 <= 5;

      if (
        (isP1GoingToFront && p1.position === "Li") ||
        (isP2GoingToFront && p2.position === "Li")
      ) {
        alert("リベロは前衛（フロント）に入ることはできません。");
        setSelection(null); // 選択状態は解除
        return; // ここで終了し、setMembersを呼ばない
      }

      // 3. バリデーションを通過した場合のみStateを更新
      setMembers((prev) => {
        const next = [...prev];
        const temp = next[idx1];
        next[idx1] = next[idx2];
        next[idx2] = temp;
        return next;
      });
      setSelection(null);
    },
    [members],
  );

  // members（コート・ベンチ）がタップされた時
  const handlePlayerClick = useCallback(
    (index: number) => {
      if (!selection) {
        setSelection({type: "member", index});
        return;
      }

      if (selection.type === "member") {
        if (selection.index === index) {
          setSelection(null); // 同じなら解除
        } else {
          executeSwap(selection.index, index); // members同士の入れ替え
        }
      } else if (selection.type === "all") {
        executeReplace(index, selection.data); // all -> members の流し込み
      }
    },
    [selection, executeSwap, executeReplace],
  );

  // allPlayers（一覧）がタップされた時
  const handleAllPlayerClick = useCallback(
    (data: PlayerData) => {
      if (!selection) {
        setSelection({type: "all", data});
        return;
      }

      if (selection.type === "all") {
        if (selection.data.name === data.name) {
          setSelection(null); // 同じなら解除
        } else {
          setSelection({type: "all", data}); // 選択対象を上書き
        }
      } else if (selection.type === "member") {
        executeReplace(selection.index, data); // members -> all (正確にはmember枠にallを上書き)
      }
    },
    [selection, executeReplace],
  );

  const changeFirstServe = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsFirstServe(e.target.checked);
      setIsServe(e.target.checked);

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

    // サーブの時にローテーション
    if (nextIsServe) {
      if (counter === 0 && members[2].position === "Li") {
        setMembers((prev) => {
          const next = [...prev];
          const temp = next[2];
          next[2] = next[6];
          next[6] = temp;
          const target = next.splice(6, 1)[0];
          next.push(target);
          return next;
        });
      }
      if (counter !== 0) rotate();
      setCounter((prev) => prev + 1);
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
  }, [members, isServe, counter, rotate]);

  return {
    members,
    allPlayers,
    filters,
    // 既存のselectedIndexを使っている箇所との互換性のため
    selectedIndex: selection?.type === "member" ? selection.index : null,
    // allが選択されているかどうかの状態も必要であれば追加
    selectedAllName: selection?.type === "all" ? selection.data.name : null,
    isServe,
    isFirstServe,
    confirmTeam,
    reset,
    toggleFilter,
    changeFirstServe,
    nextRotate,
    handlePlayerClick,
    handleAllPlayerClick,
    court: {
      back: [members[2], members[1], members[0]], // 4, 5, 6
      front: members.slice(3, 6), // 3, 2, 1
    },
    bench: members.slice(6),
  };
};
