import { useContext, useEffect, useState } from "react";
import { useTurn } from "./useTurn";
import { useScore } from "./useScore";
import { useWin } from "./useWin";
import { gridGame } from "@helpers/gridGame";

import IconO from "@assets/icon-o.svg";
import IconX from "@assets/icon-x.svg";
import { ModalContext } from "@context/ContextModal";

export function useTicTacToe() {
  const { modal, setModal } = useContext(ModalContext);

  const [ticTacToe, setTicTacToe] = useState(gridGame);

  const [isTurnX, handleTurn] = useTurn();

  const [typeGame, pickPlayer, score, setScore] = useScore();

  const { checkWinner } = useWin();

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

  useEffect(() => {
    checkWinner(isTurnX ? "X" : "O", {
      ticTacToe,
      pickPlayer,
      typeGame,
      setScore,
      score,
    });
  }, [isTurnX]);

  useEffect(() => {
    if (modal.isNextRound) {
      setTicTacToe(gridGame);
      setModal({
        ...modal,
        isNextRound: false,
      });
    }
  }, [modal.isNextRound]);

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
