import Btn from "@components/shared/Btn";

function Score() {
  return (
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
  );
}

export default Score;
