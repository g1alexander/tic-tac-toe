import { ModalContext } from "@context/ContextModal";
import { useContext } from "react";
import IconO from "@assets/icon-o.svg";
import IconX from "@assets/icon-x.svg";
import IconOOutline from "@assets/icon-o-outline.svg";
import IconXOutline from "@assets/icon-x-outline.svg";
import { Score } from "./useScore";
import { GridGame } from "@helpers/gridGame";

interface ObjectCheckWinner {
  ticTacToe: GridGame[];
  pickPlayer: string;
  typeGame: string;
  setScore: React.Dispatch<React.SetStateAction<Score>>;
  score: Score;
  setTicTacToe: React.Dispatch<React.SetStateAction<GridGame[]>>;
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

  const newTickTacToeColor = (
    ticTacToe: GridGame[],
    pickPlayer: string,
    position: number[] = []
  ): GridGame[] => {
    return ticTacToe.map((item) => {
      if (position.includes(item.id)) {
        return {
          ...item,
          icon:
            item.value === pickPlayer
              ? pickPlayer === "X"
                ? IconXOutline
                : IconOOutline
              : item.icon,
          isWinner: item.value === pickPlayer ? pickPlayer : "",
        };
      }

      return item;
    });
  };

  const win = (
    invertTurn: string,
    filterTurn: number[],
    pickPlayer: string,
    typeGame: string,
    ticTacToe: GridGame[],
    setTicTacToe: React.Dispatch<React.SetStateAction<GridGame[]>>
  ): string => {
    if (filterTurn.length >= 3) {
      if (
        filterTurn.includes(1) &&
        filterTurn.includes(2) &&
        filterTurn.includes(3)
      ) {
        const newTicTacToe = newTickTacToeColor(
          ticTacToe,
          invertTurn,
          [1, 2, 3]
        );
        setTicTacToe(newTicTacToe);

        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }
      if (
        filterTurn.includes(4) &&
        filterTurn.includes(5) &&
        filterTurn.includes(6)
      ) {
        const newTicTacToe = newTickTacToeColor(
          ticTacToe,
          invertTurn,
          [4, 5, 6]
        );
        setTicTacToe(newTicTacToe);

        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }

      if (
        filterTurn.includes(7) &&
        filterTurn.includes(8) &&
        filterTurn.includes(9)
      ) {
        const newTicTacToe = newTickTacToeColor(
          ticTacToe,
          invertTurn,
          [7, 8, 9]
        );
        setTicTacToe(newTicTacToe);

        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }

      if (
        filterTurn.includes(1) &&
        filterTurn.includes(4) &&
        filterTurn.includes(7)
      ) {
        const newTicTacToe = newTickTacToeColor(
          ticTacToe,
          invertTurn,
          [1, 4, 7]
        );
        setTicTacToe(newTicTacToe);

        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }

      if (
        filterTurn.includes(2) &&
        filterTurn.includes(5) &&
        filterTurn.includes(8)
      ) {
        const newTicTacToe = newTickTacToeColor(
          ticTacToe,
          invertTurn,
          [2, 5, 8]
        );
        setTicTacToe(newTicTacToe);

        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }

      if (
        filterTurn.includes(3) &&
        filterTurn.includes(6) &&
        filterTurn.includes(9)
      ) {
        const newTicTacToe = newTickTacToeColor(
          ticTacToe,
          invertTurn,
          [3, 6, 9]
        );
        setTicTacToe(newTicTacToe);

        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }

      if (
        filterTurn.includes(1) &&
        filterTurn.includes(5) &&
        filterTurn.includes(9)
      ) {
        const newTicTacToe = newTickTacToeColor(
          ticTacToe,
          invertTurn,
          [1, 5, 9]
        );
        setTicTacToe(newTicTacToe);

        setModal(invertTurn, pickPlayer, typeGame);
        return invertTurn;
      }

      if (
        filterTurn.includes(3) &&
        filterTurn.includes(5) &&
        filterTurn.includes(7)
      ) {
        const newTicTacToe = newTickTacToeColor(
          ticTacToe,
          invertTurn,
          [3, 5, 7]
        );
        setTicTacToe(newTicTacToe);

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
    {
      ticTacToe,
      pickPlayer,
      typeGame,
      setScore,
      score,
      setTicTacToe,
    }: ObjectCheckWinner
  ) => {
    const invertTurn = turn === "X" ? "O" : "X";

    const filterTurn = ticTacToe
      .filter((item) => item.value === invertTurn)
      .map((item) => item.id);

    const playerWin = win(
      invertTurn,
      filterTurn,
      pickPlayer,
      typeGame,
      ticTacToe,
      setTicTacToe
    );

    if (playerWin === "X") {
      const newScore = {
        ...score,
        playerX: score.playerX + 0.5,
      };
      setScore(newScore);
      localStorage.setItem("score", JSON.stringify(newScore));
    }

    if (playerWin === "O") {
      const newScore = {
        ...score,
        playerO: score.playerO + 0.5,
      };
      setScore(newScore);
      localStorage.setItem("score", JSON.stringify(newScore));
    }

    if (playerWin === "tie") {
      const newScore = {
        ...score,
        ties: score.ties + 0.5,
      };
      setScore(newScore);
      localStorage.setItem("score", JSON.stringify(newScore));
    }

    return playerWin;
  };

  return { win, checkWinner };
}
