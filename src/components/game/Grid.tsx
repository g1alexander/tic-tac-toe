import Btn from "@components/shared/Btn";
import { useGame } from "@hooks/useGame";

function Grid() {
  const { ticTacToe } = useGame();

  return (
    <section className="grid grid-cols-3 gap-5 w-[90%] mx-auto mb-10">
      {ticTacToe.map(({ icon, id, value }) => (
        <div key={id} className="pb-2 bg-black-500 w-full h-[99px] rounded-md">
          <Btn classCSS="bg-black-300 rounded-md py-6 h-full w-full">
            <img src={icon} alt="" className="w-11 mx-auto" />
          </Btn>
        </div>
      ))}
    </section>
  );
}

export default Grid;
