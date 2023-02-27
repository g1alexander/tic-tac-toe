import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import Modal from "@components/shared/Modal";
import type { Modal as ModalType } from "@interfaces/Modal";

export const state = {
  showModal: false,
  title: "",
  message: {
    text: "",
    img: "",
    color: "",
  },
  btnYellow: "",
  btnGray: "",
  isNextRound: false,
};

export const ModalContext = createContext<{
  modal: ModalType;
  setModal: Dispatch<SetStateAction<ModalType>>;
}>({ modal: state, setModal: () => {} });

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalType>(state);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
      {modal?.showModal && <Modal {...modal} />}
    </ModalContext.Provider>
  );
}
