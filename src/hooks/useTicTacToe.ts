import { useEffect, useState } from "react";
import { useTurn } from "./useTurn";
import { useScore } from "./useScore";
import { useWin } from "./useWin";
import { gridGame } from "@helpers/gridGame";

import IconO from "@assets/icon-o.svg";
import IconX from "@assets/icon-x.svg";

export function useTicTacToe() {
  const [ticTacToe, setTicTacToe] = useState(gridGame);

  const [isTurnX, handleTurn] = useTurn();

  const [typeGame, pickPlayer, score, setScore] = useScore();

  const { win } = useWin();

  const handleTicTacToe = (id: number) => {
    const newTicTacToe = ticTacToe.map((item) => {
      if (item.id === id) {
        if (item.value === "") {
          return {
            ...item,
            value: isTurnX ? "X" : "O",
            icon: isTurnX ? IconX : IconO,
          };
        }
      }
      return item;
    });

    setTicTacToe(newTicTacToe);
    handleTurn(!isTurnX);
  };

  const checkWinner = (turn: string) => {
    const invertTurn = turn === "X" ? "O" : "X";

    const filterTurn = ticTacToe
      .filter((item) => item.value === invertTurn)
      .map((item) => item.id);

    const playerWin = win(invertTurn, filterTurn, pickPlayer);

    if (playerWin === "X") {
      setScore({
        ...score,
        playerX: score.playerX + 1,
      });
    }

    if (playerWin === "O") {
      setScore({
        ...score,
        playerO: score.playerO + 1,
      });
    }

    if (playerWin === "tie") {
      setScore({
        ...score,
        ties: score.ties + 1,
      });
    }
  };

  useEffect(() => {
    checkWinner(isTurnX ? "X" : "O");
  }, [isTurnX]);

  return {
    // state
    ticTacToe,
    isTurnX,
    typeGame,
    pickPlayer,
    score,
    // methods
    handleTicTacToe,
  };
}
