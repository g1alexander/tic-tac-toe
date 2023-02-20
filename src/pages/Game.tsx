import OOutline from "@components/icons/OOutline";
import XOutline from "@components/icons/XOutline";
import Restart from "@assets/icon-restart.svg";
import IconO from "@assets/icon-o.svg";
import IconX from "@assets/icon-x.svg";
import Btn from "@components/shared/Btn";
import Logo from "@components/shared/Logo";
import { useLocation } from "react-router-dom";

function Game() {
  const location = useLocation();

  console.log(location.state);

  const ticTacToe: {
    id: number;
    value: string;
    icon: string;
  }[] = [
    {
      id: 1,
      value: "",
      icon: "",
    },
    {
      id: 2,
      value: "X",
      icon: IconX,
    },
    {
      id: 3,
      value: "O",
      icon: IconO,
    },
    {
      id: 4,
      value: "X",
      icon: IconX,
    },

    {
      id: 5,
      value: "O",
      icon: IconO,
    },
    {
      id: 6,
      value: "X",
      icon: IconX,
    },
    {
      id: 7,
      value: "",
      icon: "",
    },
    {
      id: 8,
      value: "O",
      icon: IconO,
    },
    {
      id: 9,
      value: "X",
      icon: IconX,
    },
  ];
  return (
    <>
      <section className="flex justify-between items-center py-4 mb-10 w-[85%] mx-auto">
        <Logo width={6} height={6} />

        <div className="bg-black-500 pb-[0.2rem] rounded-[0.2rem]">
          <Btn classCSS="flex bg-black-300 rounded-[0.2rem] gap-2 py-[0.4rem]">
            <XOutline state={true} width={18} height={18} />
            {/* <OOutline state={true} width={24} height={24} /> */}
            <span className="block text-sm text-gray-400">TURN</span>
          </Btn>
        </div>

        <div className="rounded-md bg-gray-500 pb-1">
          <Btn classCSS="bg-gray-400 rounded-md pb-2">
            <img src={Restart} alt="" className="w-4" />
          </Btn>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-5 w-[90%] mx-auto mb-10">
        {ticTacToe.map(({ icon, id, value }) => (
          <div key={id} className="pb-2 bg-black-500 w-full rounded-md">
            <Btn classCSS="bg-black-300 rounded-md py-6 h-full w-full">
              <img src={icon} alt="" className="w-11 mx-auto" />
            </Btn>
          </div>
        ))}
      </section>

      <section className="flex justify-between w-[90%] mx-auto">
        <Btn classCSS="bg-blue-400 rounded-lg px-7">
          <span className="block uppercase text-xs">x (you)</span>
          <span className="font-bold block">14</span>
        </Btn>

        <Btn classCSS="bg-gray-400 rounded-lg px-7">
          <span className="block uppercase text-xs">ties</span>
          <span className="font-bold block">32</span>
        </Btn>

        <Btn classCSS="bg-yellow-400 rounded-lg px-7">
          <span className="block uppercase text-xs">o (cpu)</span>
          <span className="font-bold block">11</span>
        </Btn>
      </section>
    </>
  );
}

export default Game;
