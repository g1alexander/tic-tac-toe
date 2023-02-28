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

  const [isContinueGame, setIsContinueGame] = useState(true);

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

  const handleCpu = () => {
    const emptyValues = ticTacToe.filter((item) => !item.value);

    if (emptyValues.length > 0) {
      if (pickPlayer === "O" && !isTurnX) return;

      if (pickPlayer === "X" && isTurnX) return;

      const numberRandom = Math.random() * emptyValues.length;

      const random = Math.floor(numberRandom);
      const id = emptyValues[random].id;
      handleTicTacToe(id);
    }
  };

  useEffect(() => {
    let playerWin = checkWinner(isTurnX ? "X" : "O", {
      ticTacToe,
      pickPlayer,
      typeGame,
      setScore,
      score,
    });

    if (playerWin) {
      setIsContinueGame(false);
      return;
    }

    if (typeGame === "cpu" && isContinueGame) {
      handleCpu();
    }
  }, [isTurnX, isContinueGame]);

  useEffect(() => {
    if (modal.isNextRound) {
      setTicTacToe(gridGame);

      setIsContinueGame(true);
      handleTurn(true);

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
    setScore,
  };
}
