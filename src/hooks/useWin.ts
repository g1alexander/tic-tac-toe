import { ModalContext } from "@context/ContextModal";
import { useContext } from "react";
import IconO from "@assets/icon-o.svg";
import IconX from "@assets/icon-x.svg";
import { Score } from "./useScore";
import { GridGame } from "@helpers/gridGame";

interface ObjectCheckWinner {
  ticTacToe: GridGame[];
  pickPlayer: string;
  typeGame: string;
  setScore: React.Dispatch<React.SetStateAction<Score>>;
  score: Score;
}

export function useWin() {
  const modal = useContext(ModalContext);

  const setModal = (
    invertTurn: string,
    pickPlayer: string,
    typeGame: string,
    isTie = false
  ) => {
    if (isTie) {
      modal?.setModal({
        showModal: true,
        title: "round tied",
        message: {
          text: "",
          img: "",
          color: "",
        },
        btnYellow: "next round",
        btnGray: "quit",
        isNextRound: false,
      });

      return;
    }

    modal?.setModal({
      showModal: true,
      title:
        typeGame === "player"
          ? invertTurn === pickPlayer
            ? "player 1 wins!"
            : "player 2 wins!"
          : invertTurn === pickPlayer
          ? "you won!"
          : "oh no, you lost…",
      message: {
        text: "takes the round",
        img: invertTurn === "O" ? IconO : IconX,
        color: invertTurn === "O" ? "text-yellow-400" : "text-blue-400",
      },
      btnYellow: "next round",
      btnGray: "quit",
      isNextRound: false,
    });
  };

  const win = (
    invertTurn: string,
    filterTurn: number[],
    pickPlayer: string,
    typeGame: string
  ): string => {
    if (filterTurn.length >= 3) {
      if (
        filterTurn.includes(1) &&
        filterTurn.includes(2) &&
        filterTurn.includes(3)
      ) {
        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }
      if (
        filterTurn.includes(4) &&
        filterTurn.includes(5) &&
        filterTurn.includes(6)
      ) {
        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }

      if (
        filterTurn.includes(7) &&
        filterTurn.includes(8) &&
        filterTurn.includes(9)
      ) {
        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }

      if (
        filterTurn.includes(1) &&
        filterTurn.includes(4) &&
        filterTurn.includes(7)
      ) {
        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }

      if (
        filterTurn.includes(2) &&
        filterTurn.includes(5) &&
        filterTurn.includes(8)
      ) {
        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }

      if (
        filterTurn.includes(3) &&
        filterTurn.includes(6) &&
        filterTurn.includes(9)
      ) {
        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }

      if (
        filterTurn.includes(1) &&
        filterTurn.includes(5) &&
        filterTurn.includes(9)
      ) {
        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }

      if (
        filterTurn.includes(3) &&
        filterTurn.includes(5) &&
        filterTurn.includes(7)
      ) {
        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }
    }

    if (filterTurn.length === 5) {
      setModal(invertTurn, pickPlayer, typeGame, true);

      return "tie";
    }

    return "";
  };

  const checkWinner = (
    turn: string,
    { ticTacToe, pickPlayer, typeGame, setScore, score }: ObjectCheckWinner
  ) => {
    const invertTurn = turn === "X" ? "O" : "X";

    const filterTurn = ticTacToe
      .filter((item) => item.value === invertTurn)
      .map((item) => item.id);

    const playerWin = win(invertTurn, filterTurn, pickPlayer, typeGame);

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

  return { win, checkWinner };
}
