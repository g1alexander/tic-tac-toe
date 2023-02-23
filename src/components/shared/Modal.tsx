import { useContext, useState } from "react";
import Btn from "./Btn";
import IconO from "@assets/icon-o.svg";
import IconX from "@assets/icon-x.svg";

import type { Modal } from "@interfaces/Modal";
import { ModalContext, state } from "@context/ContextModal";

export default function Modal({
  showModal,
  btnGray,
  btnYellow,
  message,
  title,
}: Modal) {
  const modal = useContext(ModalContext);
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-[black] opacity-40"
              onClick={() => modal.setModal(state)}
            ></div>
            <div className="flex items-center min-h-screen py-8">
              <div className="relative w-full  px-4 py-7 mx-auto bg-black-300 shadow-lg">
                <div className="mt-3">
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <h4 className="text-lg uppercase text-center font-medium ">
                      {/* oh no, you lost… */}
                      {/* you won! */}
                      {/* player 1 wins! */}
                      {/* player 2 wins! */}
                      {title}
                    </h4>
                    <p className="my-7 uppercase text-2xl flex items-center justify-center gap-2 ">
                      {/* <img src={IconO} alt="" className="w-7" />
                      <span className="block text-yellow-400">takes the round</span> */}
                      {/* <img src={IconX} alt="" className="w-7" />
                      <span className="block text-blue-400">
                        takes the round
                      </span> */}
                      {/* restart game? */}
                      {/* round tied */}

                      {message.img ? (
                        <>
                          <img src={message.img} alt="" className="w-7" />
                          <span className="block text-yellow-400">
                            {message.text}
                          </span>
                        </>
                      ) : (
                        message.text
                      )}
                    </p>
                    <div className="flex justify-center items-center gap-2 mt-3">
                      {/* w-1/4  */}
                      <div
                        className={`${
                          btnGray === "quit" ? `w-1/4` : `w-auto`
                        } bg-gray-500 rounded-2xl pb-2`}
                      >
                        <Btn classCSS="bg-gray-400 rounded-2xl w-full">
                          {/* quit */}
                          {/* no, cancel */}
                          {btnGray}
                        </Btn>
                      </div>

                      <div className="w-1/2 lg:w-auto bg-yellow-500 rounded-2xl pb-2">
                        <Btn classCSS="bg-yellow-400 rounded-2xl w-full">
                          {/* next round */}
                          {/* yes, restart */}
                          {btnYellow}
                        </Btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
