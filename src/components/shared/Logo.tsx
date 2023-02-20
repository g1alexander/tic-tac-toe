import IconO from "@assets/icon-o.svg";
import IconX from "@assets/icon-x.svg";

function Logo({ width, height }: { width: number; height: number }) {
  return (
    <article className="flex gap-2">
      <img src={IconX} alt="icon-o" className={`w-${width} h-${height}`} />
      <img src={IconO} alt="icon-x" className={`w-${width} h-${height}`} />
    </article>
  );
}

export default Logo;
