function Btn({
  classCSS,
  children,
  onClick,
}: {
  classCSS: string;
  children: any;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`uppercase text-black-400  py-3 px-3 cursor-default ${classCSS}`}
    >
      {children}
    </button>
  );
}

export default Btn;
