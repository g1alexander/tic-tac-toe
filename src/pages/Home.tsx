import IconO from "@assets/icon-o.svg";
import IconX from "@assets/icon-x.svg";
import OOutline from "@components/icons/OOutline";
import XOutline from "@components/icons/XOutline";

function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-10">
      <article className="flex gap-2">
        <img src={IconX} alt="icon-o" className="w-10 h-10" />
        <img src={IconO} alt="icon-x" className="w-10 h-10" />
      </article>

      <article className="bg-black-300 w-[90%] rounded-lg p-5 text-center">
        <h1 className="font-bold mb-5 text-lg">PICK PLAYER 1’S MARK</h1>

        <article className="bg-black-400 py-3 rounded-lg flex w-full mb-5">
          <div className="w-1/2 mx-auto flex justify-center items-center">
            <XOutline state={true} />
          </div>
          <div className="bg-gray-400 rounded-lg flex justify-center items-center px-6 py-3 w-1/2 mx-auto mr-3">
            <OOutline state={false} />
          </div>
        </article>

        <h3 className="text-gray-500">REMEMBER : X GOES FIRST</h3>
      </article>

      <article>{/* btns */}</article>
    </section>
  );
}

export default Home;
