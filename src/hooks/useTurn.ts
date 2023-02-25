import { useState } from "react";

export function useTurn(): [boolean, (isTurnX: boolean) => void] {
  const [isTurnX, setIsTurnX] = useState<boolean>(true);

  const handleTurn = () => {
    setIsTurnX(!isTurnX);
  };

  return [isTurnX, handleTurn];
}
