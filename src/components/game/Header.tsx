import XOutline from "@components/icons/XOutline";
import Btn from "@components/shared/Btn";
import Logo from "@components/shared/Logo";
import Restart from "@assets/icon-restart.svg";

function Header() {
  return (
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
  );
}

export default Header;
