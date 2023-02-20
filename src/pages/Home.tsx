import OOutline from "@components/icons/OOutline";
import XOutline from "@components/icons/XOutline";
import Btn from "@components/shared/Btn";
import Logo from "@components/shared/Logo";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = (typeGame: string) =>
    navigate("/game", { state: { typeGame } });

  return (
    <section className="h-screen flex flex-col items-center justify-center gap-10">
      <Logo width={10} height={10} />

      <article className="bg-black-300 w-[90%] rounded-lg p-5 text-center">
        <h1 className="font-bold mb-5 text-lg">PICK PLAYER 1’S MARK</h1>

        <article className="bg-black-400 py-3 rounded-lg flex w-full mb-5">
          <button className="w-1/2 mx-auto flex justify-center items-center">
            <XOutline state={true} />
          </button>
          <button className="bg-gray-400 rounded-lg flex justify-center items-center px-6 py-3 w-1/2 mx-auto mr-3">
            <OOutline state={false} />
          </button>
        </article>

        <h3 className="text-gray-500">REMEMBER : X GOES FIRST</h3>
      </article>

      <article className="flex flex-col gap-3 w-[90%]">
        <div
          onClick={() => handleClick("cpu")}
          className="w-full bg-yellow-500 rounded-2xl pb-2"
        >
          <Btn color="bg-yellow-400">new game (vs cpu)</Btn>
        </div>

        <div
          onClick={() => handleClick("player")}
          className="w-full bg-blue-500 rounded-2xl pb-2"
        >
          <Btn color="bg-blue-400"> new Game (vs player)</Btn>
        </div>
      </article>
    </section>
  );
}

export default Home;
