function Btn({ color, children }: { color: string; children: any }) {
  return (
    <button
      className={`uppercase text-black-400 rounded-2xl py-3 w-full ${color}`}
    >
      {children}
    </button>
  );
}

export default Btn;
