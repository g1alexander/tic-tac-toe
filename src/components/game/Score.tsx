import Btn from "@components/shared/Btn";
import { Score as IScore } from "@hooks/useScore";

function Score({
  typeGame,
  pickPlayer,
  score,
}: {
  typeGame: string;
  pickPlayer: string;
  score: IScore;
}) {
  const handleCPU = (isBlue: boolean) => {
    console.log(pickPlayer);
    if (typeGame === "player") {
      if (isBlue) {
        return pickPlayer === "X" ? "p1" : "p2";
      }

      return pickPlayer === "O" ? "p1" : "p2";
    }

    if (isBlue) return pickPlayer === "X" ? "you" : "cpu";

    return pickPlayer === "O" ? "you" : "cpu";
  };

  return (
    <section className="flex justify-between w-[90%] mx-auto">
      <Btn classCSS="bg-blue-400 rounded-lg px-7">
        <span className="block uppercase text-xs">x ({handleCPU(true)})</span>
        <span className="font-bold block">{score.playerX}</span>
      </Btn>

      <Btn classCSS="bg-gray-400 rounded-lg px-7">
        <span className="block uppercase text-xs">ties</span>
        <span className="font-bold block">{score.ties}</span>
      </Btn>

      <Btn classCSS="bg-yellow-400 rounded-lg px-7">
        <span className="block uppercase text-xs">o ({handleCPU(false)})</span>
        <span className="font-bold block">{score.playerO}</span>
      </Btn>
    </section>
  );
}

export default Score;
