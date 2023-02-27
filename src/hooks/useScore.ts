// create hook

import { useState } from "react";
import { useLocation } from "react-router-dom";

export interface Score {
  playerX: number;
  playerO: number;
  ties: number;
}

export function useScore(): [
  string,
  string,
  Score,
  React.Dispatch<React.SetStateAction<Score>>
] {
  const location = useLocation();

  const [typeGame] = useState<string>(location.state.typeGame);
  const [pickPlayer] = useState<string>(location.state.pickPlayer);

  const [score, setScore] = useState<Score>({
    playerX: 0,
    playerO: 0,
    ties: 0,
  });

  return [typeGame, pickPlayer, score, setScore];
}
