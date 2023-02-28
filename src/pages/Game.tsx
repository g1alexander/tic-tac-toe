import Header from "@components/game/Header";
import Grid from "@components/game/Grid";
import Score from "@components/game/Score";
import { useTicTacToe } from "@hooks/useTicTacToe";
import { useEffect } from "react";

function Game() {
  const {
    ticTacToe,
    handleTicTacToe,
    isTurnX,
    pickPlayer,
    score,
    typeGame,
    setScore,
  } = useTicTacToe();

  useEffect(() => {
    const localScore = localStorage.getItem("score")
      ? JSON.parse(localStorage.getItem("score")!)
      : {
          playerX: 0,
          playerO: 0,
          ties: 0,
        };
    const localTypeGame = localStorage.getItem("typeGame") || "";
    const localPickPlayer = localStorage.getItem("pickPlayer") || "";

    if (
      localPickPlayer === pickPlayer &&
      localTypeGame === typeGame &&
      localScore
    ) {
      setScore(localScore);
      return;
    }
  }, [pickPlayer]);

  return (
    <section className="h-screen md:h-[70vh] w-full sm:w-[60%] lg:w-[40%] flex flex-col justify-center items-center">
      <Header {...{ isTurnX }} />

      <Grid {...{ ticTacToe, handleTicTacToe }} />

      <Score {...{ pickPlayer, score, typeGame }} />
    </section>
  );
}

export default Game;
