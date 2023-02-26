import { ModalContext } from "@context/ContextModal";
import { useContext } from "react";
import IconO from "@assets/icon-o.svg";
import IconX from "@assets/icon-x.svg";

export function useWin() {
  const modal = useContext(ModalContext);

  const setModal = (invertTurn: string, pickPlayer: string) => {
    modal?.setModal({
      showModal: true,
      title: invertTurn === pickPlayer ? "you won!" : "oh no, you lost…",
      message: {
        text: "takes the round",
        img: invertTurn === "O" ? IconO : IconX,
        color: invertTurn === "O" ? "text-yellow-400" : "text-blue-400",
      },
      btnYellow: "restart game?",
      btnGray: "no, cancel",
    });
  };

  const win = (
    invertTurn: string,
    filterTurn: number[],
    pickPlayer: string
  ) => {
    if (filterTurn.length >= 3) {
      if (
        filterTurn.includes(1) &&
        filterTurn.includes(2) &&
        filterTurn.includes(3)
      ) {
        setModal(invertTurn, pickPlayer);
        return;
      }
      if (
        filterTurn.includes(4) &&
        filterTurn.includes(5) &&
        filterTurn.includes(6)
      ) {
        setModal(invertTurn, pickPlayer);
      }

      if (
        filterTurn.includes(7) &&
        filterTurn.includes(8) &&
        filterTurn.includes(9)
      ) {
        setModal(invertTurn, pickPlayer);
      }

      if (
        filterTurn.includes(1) &&
        filterTurn.includes(4) &&
        filterTurn.includes(7)
      ) {
        setModal(invertTurn, pickPlayer);
      }

      if (
        filterTurn.includes(2) &&
        filterTurn.includes(5) &&
        filterTurn.includes(8)
      ) {
        setModal(invertTurn, pickPlayer);
      }

      if (
        filterTurn.includes(3) &&
        filterTurn.includes(6) &&
        filterTurn.includes(9)
      ) {
        setModal(invertTurn, pickPlayer);
      }

      if (
        filterTurn.includes(1) &&
        filterTurn.includes(5) &&
        filterTurn.includes(9)
      ) {
        setModal(invertTurn, pickPlayer);
      }

      if (
        filterTurn.includes(3) &&
        filterTurn.includes(5) &&
        filterTurn.includes(7)
      ) {
        setModal(invertTurn, pickPlayer);
      }
    }
  };

  return { win };
}
