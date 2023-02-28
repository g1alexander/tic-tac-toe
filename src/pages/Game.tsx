import Header from "@components/game/Header";
import Grid from "@components/game/Grid";
import Score from "@components/game/Score";
import { useTicTacToe } from "@hooks/useTicTacToe";

function Game() {
  const { ticTacToe, handleTicTacToe, isTurnX, pickPlayer, score, typeGame } =
    useTicTacToe();

  return (
    <section className="h-screen md:h-[70vh] w-full sm:w-[60%] lg:w-[40%] flex flex-col justify-center items-center">
      <Header {...{ isTurnX }} />

      <Grid {...{ ticTacToe, handleTicTacToe }} />

      <Score {...{ pickPlayer, score, typeGame }} />
    </section>
  );
}

export default Game;
