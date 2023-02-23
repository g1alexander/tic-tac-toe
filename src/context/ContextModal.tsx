import { useState, createContext, ReactNode } from "react";
import Modal from "@components/shared/Modal";

export type ModalType = {
  title: string;
  content: string;
  btnText: string;
  btnAction: () => void;
};

//TODO: analize this and understand it
const ModalContext = createContext<{} | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalType | null>(null);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
      {modal && <Modal {...modal} />}
    </ModalContext.Provider>
  );
}
