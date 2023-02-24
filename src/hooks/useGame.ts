import { useState } from "react";
import { useLocation } from "react-router-dom";

import { gridGame } from "@helpers/gridGame";

interface Score {
  playerX: number;
  playerO: number;
  ties: number;
}

export function useGame() {
  // const modal = useContext(ModalContext);

  // const handleTest = () => {
  //   modal?.setModal({
  //     showModal: true,
  //     title: "oh no, you lost…",
  //     message: {
  //       text: "player 2 wins!",
  //       img: IconO,
  //     },
  //     btnYellow: "restart game?",
  //     btnGray: "no, cancel",
  //   });
  // };

  const location = useLocation();

  const [typeGame] = useState<string>(location.state.typeGame);
  const [pickPlayer] = useState<string>(location.state.pickPlayer);

  const [ticTacToe, setTicTacToe] = useState(gridGame);

  const [score, setScore] = useState<Score>({
    playerX: 0,
    playerO: 0,
    ties: 0,
  });

  return { typeGame, pickPlayer, ticTacToe, setTicTacToe, score, setScore };
}
