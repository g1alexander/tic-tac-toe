import Header from "@components/game/Header";
import Grid from "@components/game/Grid";
import Score from "@components/game/Score";
import { useTicTacToe } from "@hooks/useTicTacToe";

function Game() {
  const { ticTacToe, handleTicTacToe, isTurnX, pickPlayer, score, typeGame } =
    useTicTacToe();

  return (
    <>
      <Header {...{ isTurnX }} />

      <Grid {...{ ticTacToe, handleTicTacToe }} />

      <Score {...{ pickPlayer, score, typeGame }} />
    </>
  );
}

export default Game;
