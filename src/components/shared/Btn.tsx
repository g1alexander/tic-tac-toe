function Btn({ classCSS, children }: { classCSS: string; children: any }) {
  return (
    <button className={`uppercase text-black-400  py-3 px-3 ${classCSS}`}>
      {children}
    </button>
  );
}

export default Btn;
