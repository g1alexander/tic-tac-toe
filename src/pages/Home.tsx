import OOutline from "@components/icons/OOutline";
import XOutline from "@components/icons/XOutline";
import Btn from "@components/shared/Btn";
import Logo from "@components/shared/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [pickPlayer, setPickPlayer] = useState<boolean>(true);

  const handleClick = (typeGame: string) => {
    const localTypeGame = localStorage.getItem("typeGame") || "";
    const localPickPlayer = localStorage.getItem("pickPlayer") || "";

    const pickPlayerString = pickPlayer ? "X" : "O";

    if (localPickPlayer !== pickPlayerString || localTypeGame !== typeGame) {
      localStorage.removeItem("score");
    }

    localStorage.setItem("pickPlayer", pickPlayerString);
    localStorage.setItem("typeGame", typeGame);

    navigate("/game", {
      state: { typeGame, pickPlayer: pickPlayerString },
    });
  };

  const handlePickPlayer = () => setPickPlayer(!pickPlayer);

  return (
    <section className="h-[70vh] w-full sm:w-[60%] lg:w-[40%] flex flex-col items-center justify-center gap-10">
      <Logo width={10} height={10} />

      <article className="bg-black-300 w-[90%] rounded-lg p-5 text-center">
        <h1 className="font-bold mb-5 text-lg">PICK PLAYER 1’S MARK</h1>

        <article className="bg-black-400 py-3 rounded-lg flex w-full mb-5">
          <button
            onClick={() => !pickPlayer && handlePickPlayer()}
            className={`${
              pickPlayer && `bg-gray-400 rounded-lg px-3 py-3 ml-3`
            } w-1/2 mx-auto flex justify-center items-center`}
          >
            <XOutline state={!pickPlayer} />
          </button>
          <button
            onClick={() => pickPlayer && handlePickPlayer()}
            className={`${
              !pickPlayer && `bg-gray-400 rounded-lg px-6 py-3 mr-3`
            } w-1/2 mx-auto flex justify-center items-center`}
          >
            <OOutline state={pickPlayer} />
          </button>
        </article>

        <h3 className="text-gray-500">REMEMBER : X GOES FIRST</h3>
      </article>

      <article className="flex flex-col gap-3 w-[90%]">
        <div
          onClick={() => handleClick("cpu")}
          className="w-full bg-yellow-500 rounded-2xl pb-2"
        >
          <Btn classCSS="bg-yellow-400 rounded-2xl w-full">
            new game (vs cpu)
          </Btn>
        </div>

        <div
          onClick={() => handleClick("player")}
          className="w-full bg-blue-500 rounded-2xl pb-2"
        >
          <Btn classCSS="bg-blue-400 rounded-2xl w-full">
            new Game (vs player)
          </Btn>
        </div>
      </article>
    </section>
  );
}

export default Home;
