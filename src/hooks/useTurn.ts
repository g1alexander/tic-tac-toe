import { useState } from "react";

export function useTurn(): [boolean, (isTurn: boolean) => void] {
  const [isTurnX, setIsTurnX] = useState<boolean>(true);

  const handleTurn = (isTurn: boolean) => {
    setIsTurnX(isTurn);
  };

  return [isTurnX, handleTurn];
}
